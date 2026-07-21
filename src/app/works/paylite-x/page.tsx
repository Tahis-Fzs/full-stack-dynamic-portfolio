import type { Metadata } from "next";
import { PayliteLaunchCaseStudy } from "@/components/case-studies/paylite-launch";
import { getProjectBySlug } from "@/content/projects";

const project = getProjectBySlug("paylite-x");

export const metadata: Metadata = {
  title: "PayLite X — Launch Case Study · Studio Tahsin",
  description: project?.problem,
  openGraph: {
    title: "PayLite X — Premium MFS Wallet Simulation",
    description:
      "Full-stack fintech case study: FastAPI ledger, OTP+PIN, 12 MFS services, live on Render.",
  },
};

export default function PayliteLaunchPage() {
  return <PayliteLaunchCaseStudy />;
}
