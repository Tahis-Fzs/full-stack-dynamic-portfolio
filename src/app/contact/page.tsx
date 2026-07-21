import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/contact-content";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact — Studio Tahsin",
  description: `Contact ${site.name} — ${site.openTo}. Dhaka, Bangladesh.`,
};

export default function ContactPage() {
  return <ContactPageContent />;
}
