import type { Metadata } from "next";
import { ResumePageContent } from "@/components/resume/resume-content";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume — Studio Tahsin",
  description: `Interactive CV for ${site.name} — full-stack, mobile, and applied ML.`,
};

export default function ResumePage() {
  return <ResumePageContent />;
}
