import { CheckCircle2, Loader2, AlertCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

type Values = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const empty: Values = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type Errors = Partial<Record<keyof Values, string>>;

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Enter a valid work email address.";
  if (values.subject.trim().length < 3) errors.subject = "Please enter a subject.";
  if (values.message.trim().length < 20)
    errors.message = "Please describe your project in at least 20 characters.";
  return errors;
}

const field =
  "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25";
const labelCls = "mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground";

async function submitLead(values: Values): Promise<void> {
  const response = await fetch("/contact.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(values),
  });
  const result = (await response.json().catch(() => null)) as { ok?: boolean } | null;

  if (!response.ok || result?.ok !== true) {
    throw new Error("Contact form submission failed.");
  }
}

export function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set =
    (key: keyof Values) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: event.target.value }));
      setErrors((e) => ({ ...e, [key]: undefined }));
    };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      return;
    }
    setStatus("loading");
    try {
      await submitLead(values);
      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card-surface p-10 text-center" role="status" aria-live="polite">
        <CheckCircle2 className="mx-auto size-12 text-primary" />
        <h3 className="mt-6 text-2xl font-semibold">Thanks — your message is with us.</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          A Genbytez specialist will review your requirement and get back to you. If it's urgent,
          reach us directly at <span className="text-foreground">info@genbytez.in</span>.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
        >
          Send another message
        </button>
      </div>
    );
  }

  const error = (key: keyof Values) =>
    errors[key] ? (
      <p id={`${key}-error`} className="mt-2 flex items-center gap-1.5 text-xs text-destructive">
        <AlertCircle className="size-3.5" /> {errors[key]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="card-surface p-7 sm:p-9" id="contact-form">
      {status === "error" ? (
        <div
          role="alert"
          className="mb-6 flex items-start gap-3 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-foreground"
        >
          <AlertCircle className="mt-0.5 size-4 text-destructive" />
          Something went wrong sending your message. Please try again or email info@genbytez.in.
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            className={field}
            value={values.name}
            onChange={set("name")}
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Your name"
          />
          {error("name")}
        </div>
        <div>
          <label className={labelCls} htmlFor="email">
            Work Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={field}
            value={values.email}
            onChange={set("email")}
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="you@example.com"
          />
          {error("email")}
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            className={field}
            value={values.subject}
            onChange={set("subject")}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            placeholder="What should we help with?"
          />
          {error("subject")}
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="message">
            Project Description
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={field}
            value={values.message}
            onChange={set("message")}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            placeholder="What are you trying to monitor, connect or automate?"
          />
          {error("message")}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:glow-ring disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Talk to Our Experts <ArrowRight className="size-4" />
          </>
        )}
      </button>
    </form>
  );
}
