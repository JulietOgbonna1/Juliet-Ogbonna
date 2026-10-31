"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { ArrowUpRight, Check } from "./icons";

const initial: ContactState = { status: "idle", message: "" };

function Field({
  label,
  name,
  type = "text",
  error,
  defaultValue,
  required,
  autoComplete,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  defaultValue?: string;
  required?: boolean;
  autoComplete?: string;
  textarea?: boolean;
}) {
  const base =
    "peer w-full rounded-2xl border bg-bg/60 px-4 pb-3 pt-6 text-[15px] text-ink outline-none transition placeholder:text-transparent focus:border-accent focus:bg-surface focus:shadow-[0_0_0_4px_color-mix(in_oklab,var(--accent)_15%,transparent)]";
  const border = error ? "border-red-500/70" : "border-line";
  return (
    <div>
      <div className="relative">
        {textarea ? (
          <textarea
            id={name}
            name={name}
            rows={5}
            required={required}
            defaultValue={defaultValue}
            placeholder={label}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
            className={`${base} ${border} resize-none`}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            required={required}
            defaultValue={defaultValue}
            autoComplete={autoComplete}
            placeholder={label}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
            className={`${base} ${border}`}
          />
        )}
        <label
          htmlFor={name}
          className="pointer-events-none absolute left-4 top-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-accent"
        >
          {label}
          {required && <span className="text-accent"> *</span>}
        </label>
      </div>
      {error && (
        <p id={`${name}-error`} className="mt-1.5 pl-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial);
  const v = state.values;

  if (state.status === "success") {
    return (
      <div className="grid min-h-[420px] place-items-center text-center" role="status">
        <div>
          <span className="mx-auto grid size-16 place-items-center rounded-full bg-brand text-on-brand shadow-[0_0_50px_-6px_var(--glow)]">
            <Check className="size-7" />
          </span>
          <h3 className="mt-6 font-display text-2xl font-semibold">Message received</h3>
          <p className="mt-2 text-ink-soft">{state.message}</p>
        </div>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" name="name" required autoComplete="name" error={state.errors?.name} defaultValue={v?.name} />
        <Field label="Email address" name="email" type="email" required autoComplete="email" error={state.errors?.email} defaultValue={v?.email} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" defaultValue={v?.phone} />
        <Field label="Subject" name="subject" defaultValue={v?.subject} />
      </div>
      <Field label="Tell me about your project" name="message" textarea required error={state.errors?.message} defaultValue={v?.message} />

      {/* honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" && !state.errors && (
        <p role="alert" className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-500">
          {state.message}
        </p>
      )}

      <button type="submit" disabled={pending} className="btn-primary mt-2 w-full !py-4 disabled:cursor-wait disabled:opacity-70 sm:w-auto sm:justify-self-start">
        {pending ? (
          <>
            <span className="size-4 animate-spin rounded-full border-2 border-on-brand/40 border-t-on-brand" /> Sending…
          </>
        ) : (
          <>
            Send message <ArrowUpRight />
          </>
        )}
      </button>
    </form>
  );
}
