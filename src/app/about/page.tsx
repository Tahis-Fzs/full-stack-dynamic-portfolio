import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/about-content";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About — Studio Tahsin",
  description: site.positioning,
};

export default function AboutPage() {
  return <AboutPageContent />;
}
