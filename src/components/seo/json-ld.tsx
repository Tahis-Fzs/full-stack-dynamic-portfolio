import { site } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: siteUrl,
    email: site.email,
    jobTitle: "Software Engineer · Full-Stack & Applied ML",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: site.education.institution,
    },
    sameAs: [site.githubUrl, site.linkedinUrl],
    knowsAbout: [
      "Full-stack development",
      "Flutter",
      "Machine learning",
      "FastAPI",
      "React",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
