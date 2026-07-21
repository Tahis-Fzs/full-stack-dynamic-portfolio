import type { Metadata } from "next";
import { StudentmoveLaunchCaseStudy } from "@/components/case-studies/studentmove-launch";
import { getProjectBySlug } from "@/content/projects";

const project = getProjectBySlug("studentmove");

export const metadata: Metadata = {
  title: "StudentMove — Launch Case Study · Studio Tahsin",
  description: project?.problem,
  openGraph: {
    title: "StudentMove — Smart Transport for Dhaka Students",
    description:
      "Team full-stack case study: Laravel PWA, Firebase GPS, SSLCommerz, live on Render.",
  },
};

export default function StudentmoveLaunchPage() {
  return <StudentmoveLaunchCaseStudy />;
}
