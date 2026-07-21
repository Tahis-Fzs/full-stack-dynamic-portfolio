import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProjectBySlug, projects } from "@/content/projects";
import { Container } from "@/components/layout/container";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects
    .filter((p) => !p.launchCaseStudy)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Studio Tahsin`,
    description: project.problem,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  if (project.launchCaseStudy) {
    const { redirect } = await import("next/navigation");
    redirect(`/works/${slug}`);
  }

  return (
    <article className="py-12 sm:py-16">
      <Container>
        <Link
          href="/works"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent-cyan)]"
        >
          <ArrowLeft className="size-4" aria-hidden />
          All works
        </Link>

        <header className="mt-8 max-w-3xl">
          <h1 className="font-display text-[var(--text-section)] text-[var(--text-primary)]">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            {project.tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-cyan)] px-4 py-2 text-sm font-medium text-[var(--bg-void)]"
              >
                Live demo
                <ExternalLink className="size-3.5" aria-hidden />
              </Link>
            )}
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
            >
              <Github className="size-4" aria-hidden />
              GitHub
            </Link>
          </div>
        </header>

        <div className="mt-12 max-w-3xl space-y-10">
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-paylite)]">
              Problem
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)]">
              {project.problem}
            </p>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
              Approach
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)]">
              {project.approach}
            </p>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a78bfa]">
              Why this stack
            </h2>
            <ul className="mt-3 space-y-2">
              {project.whyStack.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm leading-relaxed text-[var(--text-muted)]"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent-cyan)]" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fbbf24]">
              Challenges
            </h2>
            <ul className="mt-3 space-y-2">
              {project.challenges.map((item) => (
                <li
                  key={item}
                  className="glass rounded-xl px-4 py-3 text-sm text-[var(--text-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#34d399]">
              Impact
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)]">
              {project.impact}
            </p>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-dim)]">
              Production notes
            </h2>
            <ul className="mt-3 space-y-2">
              {project.productionNotes.map((item) => (
                <li
                  key={item}
                  className="font-mono text-xs leading-relaxed text-[var(--text-dim)]"
                >
                  → {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </article>
  );
}
