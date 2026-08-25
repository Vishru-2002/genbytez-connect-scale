<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

$config = [
    'smtp_host' => getenv('SMTP_HOST') ?: 'smtp.hostinger.com',
    'smtp_port' => (int) (getenv('SMTP_PORT') ?: 465),
    'smtp_secure' => getenv('SMTP_SECURE') ?: 'ssl',
    'smtp_user' => getenv('SMTP_USER') ?: '',
    'smtp_password' => getenv('SMTP_PASSWORD') ?: '',
    'mail_to' => getenv('CONTACT_MAIL_TO') ?: (getenv('SMTP_USER') ?: ''),
    'mail_from_name' => getenv('CONTACT_FROM_NAME') ?: 'Genbytez Website',
];

$localConfig = __DIR__ . '/contact.config.php';
if (is_file($localConfig)) {
    $overrides = require $localConfig;
    if (is_array($overrides)) {
        $config = array_merge($config, $overrides);
    }
}

function json_error(int $status, string $message): void
{
    http_response_code($status);
    echo json_encode(['ok' => false, 'error' => $message]);
    exit;
}

function clean_text($value): string
{
    $text = trim((string) $value);
    return preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $text) ?? '';
}

function smtp_read($socket): string
{
    $response = '';
    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;
        if (strlen($line) < 4 || $line[3] !== '-') {
            break;
        }
    }
    return $response;
}

function smtp_command($socket, string $command, array $expectedCodes): string
{
    fwrite($socket, $command . "\r\n");
    $response = smtp_read($socket);
    $code = (int) substr($response, 0, 3);
    if (!in_array($code, $expectedCodes, true)) {
        throw new RuntimeException('SMTP command failed.');
    }
    return $response;
}

function smtp_header(string $value): string
{
    return str_replace(["\r", "\n"], '', $value);
}

function smtp_send(array $config, string $fromEmail, string $fromName, string $toEmail, string $replyTo, string $subject, string $body): void
{
    $host = (string) $config['smtp_host'];
    $port = (int) $config['smtp_port'];
    $secure = strtolower((string) $config['smtp_secure']);
    $username = (string) $config['smtp_user'];
    $password = (string) $config['smtp_password'];
    $target = $secure === 'ssl' ? "ssl://{$host}" : $host;

    $socket = @fsockopen($target, $port, $errno, $errstr, 20);
    if (!$socket) {
        throw new RuntimeException('Could not connect to SMTP server.');
    }

    stream_set_timeout($socket, 20);

    try {
        smtp_read($socket);
        smtp_command($socket, 'EHLO ' . ($_SERVER['SERVER_NAME'] ?? 'localhost'), [250]);

        if ($secure === 'tls') {
            smtp_command($socket, 'STARTTLS', [220]);
            if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                throw new RuntimeException('Could not start SMTP TLS.');
            }
            smtp_command($socket, 'EHLO ' . ($_SERVER['SERVER_NAME'] ?? 'localhost'), [250]);
        }

        smtp_command($socket, 'AUTH LOGIN', [334]);
        smtp_command($socket, base64_encode($username), [334]);
        smtp_command($socket, base64_encode($password), [235]);
        smtp_command($socket, 'MAIL FROM:<' . $fromEmail . '>', [250]);
        smtp_command($socket, 'RCPT TO:<' . $toEmail . '>', [250, 251]);
        smtp_command($socket, 'DATA', [354]);

        $headers = [
            'From: ' . smtp_header($fromName) . ' <' . smtp_header($fromEmail) . '>',
            'Reply-To: ' . smtp_header($replyTo),
            'To: ' . smtp_header($toEmail),
            'Subject: ' . smtp_header($subject),
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
        ];

        $message = implode("\r\n", $headers) . "\r\n\r\n" . str_replace("\n.", "\n..", $body) . "\r\n.";
        smtp_command($socket, $message, [250]);
        smtp_command($socket, 'QUIT', [221]);
    } finally {
        fclose($socket);
    }
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);
if (!is_array($data)) {
    json_error(400, 'Invalid request.');
}

$name = clean_text($data['name'] ?? '');
$email = clean_text($data['email'] ?? '');
$subject = clean_text($data['subject'] ?? '');
$message = clean_text($data['message'] ?? '');

if (strlen($name) < 2) {
    json_error(422, 'Please enter your full name.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_error(422, 'Enter a valid work email address.');
}

if (strlen($subject) < 3) {
    json_error(422, 'Please enter a subject.');
}

if (strlen($message) < 20) {
    json_error(422, 'Please describe your project in at least 20 characters.');
}

if (empty($config['smtp_user']) || empty($config['smtp_password']) || empty($config['mail_to'])) {
    json_error(500, 'Mail server is not configured.');
}

$mailSubject = 'Genbytez contact form: ' . $subject;
$mailBody = implode("\n", [
    'New enquiry from the Genbytez website',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Subject: ' . $subject,
    '',
    'Message:',
    $message,
]);

try {
    smtp_send(
        $config,
        (string) $config['smtp_user'],
        (string) $config['mail_from_name'],
        (string) $config['mail_to'],
        $email,
        $mailSubject,
        $mailBody
    );
} catch (Throwable $error) {
    error_log('[Genbytez contact] ' . $error->getMessage());
    json_error(500, 'Unable to send message.');
}

echo json_encode(['ok' => true]);
