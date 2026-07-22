"use client";

import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";
import { getFeaturedProjects } from "@/content/projects";
import { resumeContent, resumeSections } from "@/content/resume";
import { site } from "@/content/site";
import { useActiveSection } from "@/components/about/about-content";
import { Container } from "@/components/layout/container";
import { ProfilePhoto } from "@/components/layout/profile-photo";
import { cn } from "@/lib/cn";

const sectionIds = resumeSections.map((s) => s.id);

export function ResumePageContent() {
  const active = useActiveSection(sectionIds);
  const featuredProjects = getFeaturedProjects();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="border-b border-[var(--border-subtle)] pb-10 pt-12 sm:pt-16">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <ProfilePhoto size="md" className="hidden sm:block" />
              <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
                Resume
              </p>
              <h1 className="mt-4 font-display text-[var(--text-section)] text-[var(--text-primary)]">
                {site.name}
              </h1>
              <p className="mt-3 text-[var(--text-muted)]">
                Interactive CV · mirrors PDF · {site.openTo}
              </p>
              </div>
            </div>
            <a
              href={site.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-paylite)] px-5 py-2.5 text-sm font-medium text-white"
            >
              <Download className="size-4" aria-hidden />
              Download PDF
            </a>
          </div>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <nav
              className="sticky top-28"
              aria-label="Resume sections"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-dim)]">
                On this page
              </p>
              <ul className="mt-4 space-y-1">
                {resumeSections.map((section) => (
                  <li key={section.id}>
                    <button
                      type="button"
                      onClick={() => scrollTo(section.id)}
                      className={cn(
                        "w-full rounded-lg px-3 py-2 text-left text-sm transition-colors",
                        active === section.id
                          ? "bg-[color-mix(in_srgb,var(--accent-cyan)_12%,transparent)] text-[var(--accent-cyan)]"
                          : "text-[var(--text-muted)] hover:text-[var(--text-primary)]",
                      )}
                    >
                      {section.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Mobile TOC */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden">
            {resumeSections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollTo(section.id)}
                className={cn(
                  "shrink-0 rounded-full border px-3 py-1.5 text-xs",
                  active === section.id
                    ? "border-[var(--accent-cyan)] text-[var(--accent-cyan)]"
                    : "border-[var(--border-subtle)] text-[var(--text-muted)]",
                )}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-16 lg:col-start-2">
            <ResumeBlock id="objective" title="Career objective">
              <p>{resumeContent.objective}</p>
            </ResumeBlock>

            <ResumeBlock id="summary" title="Academic summary">
              <p className="mb-4">{resumeContent.academicSummary}</p>
              <p className="glass rounded-xl p-4 text-sm">
                <span className="font-medium text-[var(--text-primary)]">
                  Special qualification ·{" "}
                </span>
                {resumeContent.specialQualification}
              </p>
            </ResumeBlock>

            <ResumeBlock id="education" title="Education">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border-subtle)] text-xs uppercase tracking-wider text-[var(--text-dim)]">
                      <th className="pb-3 pr-4">Exam</th>
                      <th className="pb-3 pr-4">Major</th>
                      <th className="pb-3 pr-4">Institute</th>
                      <th className="pb-3 pr-4">Result</th>
                      <th className="pb-3">Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resumeContent.educationRows.map((row) => (
                      <tr
                        key={row.exam}
                        className="border-b border-[var(--border-subtle)] text-[var(--text-muted)]"
                      >
                        <td className="py-3 pr-4 text-[var(--text-primary)]">
                          {row.exam}
                        </td>
                        <td className="py-3 pr-4">{row.major}</td>
                        <td className="py-3 pr-4">{row.institute}</td>
                        <td className="py-3 pr-4">{row.result}</td>
                        <td className="py-3">{row.year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ResumeBlock>

            <ResumeBlock id="skills" title="Technical skills">
              <div className="grid gap-4 sm:grid-cols-2">
                {site.skillGroups.map((group) => (
                  <div
                    key={group.title}
                    className="glass rounded-xl p-4"
                  >
                    <p className="text-sm font-medium text-[var(--text-primary)]">
                      {group.title}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-[var(--text-muted)]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ResumeBlock>

            <ResumeBlock id="projects" title="Selected projects">
              <div className="space-y-4">
                {featuredProjects.map((project) => (
                  <div
                    key={project.slug}
                    className="glass rounded-xl p-4"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="font-medium text-[var(--text-primary)]">
                        {project.title}
                      </h3>
                      <Link
                        href={`/works/${project.slug}`}
                        className="inline-flex items-center gap-1 text-xs text-[var(--accent-cyan)] hover:underline"
                      >
                        Case study
                        <ExternalLink className="size-3" aria-hidden />
                      </Link>
                    </div>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">
                      {project.problem.slice(0, 180)}…
                    </p>
                  </div>
                ))}
              </div>
            </ResumeBlock>

            <ResumeBlock id="training" title="Training">
              <ul className="space-y-2">
                {site.training.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-[var(--text-muted)]"
                  >
                    <span className="text-[var(--accent-cyan)]">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ResumeBlock>

            <ResumeBlock id="contests" title="Contests & CPC">
              <ul className="space-y-2">
                {site.contests.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-[var(--text-muted)]"
                  >
                    <span className="text-[var(--accent-paylite)]">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-[var(--text-dim)]">
                {resumeContent.extracurricular}
              </p>
            </ResumeBlock>

            <ResumeBlock id="career" title="Career information">
              <dl className="space-y-3">
                {resumeContent.careerInfo.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                    <dt className="min-w-[140px] text-sm font-medium text-[var(--text-primary)]">
                      {item.label}
                    </dt>
                    <dd className="text-sm text-[var(--text-muted)]">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link href={`mailto:${site.email}`} className="text-[var(--accent-cyan)] hover:underline">
                  {site.email}
                </Link>
                <span className="text-[var(--text-dim)]">·</span>
                <span className="text-[var(--text-muted)]">{site.phone}</span>
              </div>
            </ResumeBlock>

            <ResumeBlock id="languages" title="Languages">
              <div className="overflow-x-auto">
                <table className="w-full max-w-md text-left text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border-subtle)] text-xs uppercase text-[var(--text-dim)]">
                      <th className="pb-2 pr-4">Language</th>
                      <th className="pb-2 pr-4">Reading</th>
                      <th className="pb-2 pr-4">Writing</th>
                      <th className="pb-2">Speaking</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resumeContent.languages.map((row) => (
                      <tr
                        key={row.language}
                        className="border-b border-[var(--border-subtle)] text-[var(--text-muted)]"
                      >
                        <td className="py-2 pr-4 text-[var(--text-primary)]">
                          {row.language}
                        </td>
                        <td className="py-2 pr-4">{row.reading}</td>
                        <td className="py-2 pr-4">{row.writing}</td>
                        <td className="py-2">{row.speaking}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ResumeBlock>
          </div>
        </div>
      </Container>
    </>
  );
}

function ResumeBlock({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-display text-xl text-[var(--text-primary)] sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
        {children}
      </div>
    </section>
  );
}
