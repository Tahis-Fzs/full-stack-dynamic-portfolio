"use client";

import { useActionState } from "react";
import Link from "next/link";
import { Facebook, Github, Linkedin, Mail, MapPin, Palette, Phone, Send } from "lucide-react";
import {
  contactInitialState,
  submitContact,
} from "@/app/actions/contact";
import { site } from "@/content/site";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/cn";

export function ContactPageContent() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    contactInitialState,
  );

  return (
    <>
      <section className="border-b border-[var(--border-subtle)] pb-12 pt-12 sm:pt-16">
        <Container>
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
            Contact
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-[var(--text-section)] text-[var(--text-primary)]">
            Let&apos;s work together
          </h1>
          <p className="mt-4 max-w-xl text-[var(--text-muted)]">
            Open to {site.openTo.toLowerCase()}. Roles in software engineering,
            product design, or hybrid UI/UX + dev work — I read every message.
          </p>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
          <form action={formAction} className="space-y-5">
            {/* Honeypot — hidden from users */}
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <Field label="Name" id="name" name="name" required placeholder="Your name" />
            <Field
              label="Email"
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
            />
            <Field
              label="Subject (optional)"
              id="subject"
              name="subject"
              placeholder="Role / collaboration / question"
            />
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-dim)]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell me about the opportunity or what you'd like to discuss…"
                className="glass w-full resize-y rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--bg-void)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-dim)] focus:border-[var(--accent-cyan)] focus:outline-none"
              />
            </div>

            {state.message && (
              <p
                role="status"
                className={cn(
                  "rounded-xl px-4 py-3 text-sm",
                  state.ok
                    ? "border border-[color-mix(in_srgb,var(--accent-cyan)_30%,transparent)] bg-[color-mix(in_srgb,var(--accent-cyan)_8%,transparent)] text-[var(--text-secondary)]"
                    : "border border-[color-mix(in_srgb,var(--accent-paylite)_30%,transparent)] bg-[color-mix(in_srgb,var(--accent-paylite)_8%,transparent)] text-[var(--text-secondary)]",
                )}
              >
                {state.message}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-paylite)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {pending ? "Sending…" : "Send message"}
              <Send className="size-4" aria-hidden />
            </button>
          </form>

          <aside className="space-y-4">
            <InfoCard icon={Mail} label="Email">
              <Link
                href={`mailto:${site.email}`}
                className="text-[var(--accent-cyan)] hover:underline"
              >
                {site.email}
              </Link>
            </InfoCard>
            <InfoCard icon={Phone} label="Phone">
              <Link href={`tel:${site.phone}`} className="hover:text-[var(--accent-cyan)]">
                {site.phone}
              </Link>
            </InfoCard>
            <InfoCard icon={MapPin} label="Location">
              {site.location}
            </InfoCard>
            <InfoCard icon={Github} label="GitHub">
              <Link
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent-cyan)]"
              >
                @{site.github}
              </Link>
            </InfoCard>
            <InfoCard icon={Linkedin} label="LinkedIn">
              <Link
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent-cyan)]"
              >
                Connect on LinkedIn
              </Link>
            </InfoCard>
            <InfoCard icon={Palette} label="Behance">
              <Link
                href={site.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent-cyan)]"
              >
                UI/UX portfolio on Behance
              </Link>
            </InfoCard>
            <InfoCard icon={Facebook} label="Facebook">
              <Link
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent-cyan)]"
              >
                Facebook profile
              </Link>
            </InfoCard>

            <div className="glass rounded-[var(--radius-card)] p-5 text-xs leading-relaxed text-[var(--text-dim)]">
              Prefer PDF?{" "}
              <a href={site.cvPath} download className="text-[var(--accent-cyan)] hover:underline">
                Download CV
              </a>
              . Live demos:{" "}
              <Link href="/works/paylite-x" className="text-[var(--accent-paylite)] hover:underline">
                PayLite X
              </Link>
              ,{" "}
              <Link href="/works/studentmove" className="text-[var(--accent-cyan)] hover:underline">
                StudentMove
              </Link>
              .
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}

function Field({
  label,
  id,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-dim)]"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="glass w-full rounded-[var(--radius-card)] border border-[var(--border-subtle)] bg-[var(--bg-void)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-dim)] focus:border-[var(--accent-cyan)] focus:outline-none"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass rounded-[var(--radius-card)] p-5">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--text-dim)]">
        <Icon className="size-3.5 text-[var(--accent-cyan)]" aria-hidden />
        {label}
      </div>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">{children}</p>
    </div>
  );
}
