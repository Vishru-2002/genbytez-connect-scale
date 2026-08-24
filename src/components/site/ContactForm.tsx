import { CheckCircle2, Loader2, AlertCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { industryOptions, solutionOptions } from "@/content/site";

type Values = {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  solution: string;
  message: string;
};

const empty: Values = {
  name: "",
  email: "",
  phone: "",
  company: "",
  industry: "",
  solution: "",
  message: "",
};

type Errors = Partial<Record<keyof Values, string>>;

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = "Enter a valid work email address.";
  if (values.phone.trim().replace(/[^\d]/g, "").length < 7) errors.phone = "Enter a reachable phone number.";
  if (values.company.trim().length < 2) errors.company = "Please enter your company name.";
  if (!values.industry) errors.industry = "Select an industry.";
  if (!values.solution) errors.solution = "Select the solution you need.";
  if (values.message.trim().length < 20) errors.message = "Please describe your project in at least 20 characters.";
  return errors;
}

const field =
  "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25";
const labelCls = "mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground";

/**
 * Lead form. `submitLead` is intentionally a local stub — wire it to a real
 * backend or email service (server function / CRM webhook) when available.
 */
async function submitLead(values: Values): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  if (typeof console !== "undefined") console.info("[Genbytez] lead captured (not yet sent):", values);
}

export function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (key: keyof Values) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          A Genbytez specialist will review your requirement and get back to you. If it's urgent, reach us directly at{" "}
          <span className="text-foreground">hello@genbytez.com</span>.
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
          Something went wrong sending your message. Please try again or email hello@genbytez.com.
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
            placeholder="you@company.com"
          />
          {error("email")}
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={field}
            value={values.phone}
            onChange={set("phone")}
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            placeholder="+91 00000 00000"
          />
          {error("phone")}
        </div>
        <div>
          <label className={labelCls} htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            className={field}
            value={values.company}
            onChange={set("company")}
            autoComplete="organization"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
            placeholder="Company name"
          />
          {error("company")}
        </div>
        <div>
          <label className={labelCls} htmlFor="industry">
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            className={field}
            value={values.industry}
            onChange={set("industry")}
            aria-invalid={!!errors.industry}
            aria-describedby={errors.industry ? "industry-error" : undefined}
          >
            <option value="">Select industry</option>
            {industryOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {error("industry")}
        </div>
        <div>
          <label className={labelCls} htmlFor="solution">
            Solution Needed
          </label>
          <select
            id="solution"
            name="solution"
            className={field}
            value={values.solution}
            onChange={set("solution")}
            aria-invalid={!!errors.solution}
            aria-describedby={errors.solution ? "solution-error" : undefined}
          >
            <option value="">Select solution</option>
            {solutionOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {error("solution")}
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
      <p className="mt-4 text-xs text-muted-foreground">
        Submissions are validated in the browser. Connect a backend or email service to deliver them.
      </p>
    </form>
  );
}
