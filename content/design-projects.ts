import type { DesignProject } from "./types";

/** UI/UX portfolio work — restored from Laravel CMS seeder + Behance */
export const designProjects: DesignProject[] = [
  {
    slug: "studentmove-ui",
    title: "StudentMove — Smart Transportation App",
    description:
      "Mobile solution for students to book and track transport in real time. Onboarding, booking flows, and route-tracking interfaces focused on simplicity.",
    category: "Mobile App",
    techTags: ["Figma", "Mobile UI", "UX Design"],
    featured: true,
    behanceUrl: "https://www.behance.net/mdsha0242220",
  },
  {
    slug: "erp-dashboard-ui",
    title: "ERP Dashboard UI",
    description:
      "Enterprise dashboard for business management — scalable components, data visualization layouts, and a responsive design system ready for developer handoff.",
    category: "Dashboard",
    techTags: ["Dashboard UI", "Design System", "Data Viz"],
    featured: true,
    behanceUrl: "https://www.behance.net/mdsha0242220",
  },
  {
    slug: "finance-consulting-landing",
    title: "Finance & Consulting Landing Pages",
    description:
      "ThemeForest-style landing templates optimized for conversion, clean visual hierarchy, and strong typography systems.",
    category: "Landing Page",
    techTags: ["Landing Page", "Typography", "Conversion"],
    featured: true,
    behanceUrl: "https://www.behance.net/mdsha0242220",
  },
  {
    slug: "ecommerce-mobile-app",
    title: "E-Commerce Mobile App",
    description:
      "Shopping experience with intuitive navigation, checkout flow, and product recommendations — conversion and engagement focused.",
    category: "Mobile App",
    techTags: ["Mobile App", "E-commerce", "UX Design"],
    featured: false,
    behanceUrl: "https://www.behance.net/mdsha0242220",
  },
  {
    slug: "healthcare-management-ui",
    title: "Healthcare Management System",
    description:
      "Patient management, appointment scheduling, and records UI with accessibility and data-security emphasis.",
    category: "Dashboard",
    techTags: ["Healthcare", "Dashboard", "Accessibility"],
    featured: false,
    behanceUrl: "https://www.behance.net/mdsha0242220",
  },
  {
    slug: "fitness-tracking-app",
    title: "Fitness Tracking App",
    description:
      "Workout tracking, progress visualization, and social features designed to keep users motivated.",
    category: "Mobile App",
    techTags: ["Mobile App", "Fitness", "Data Visualization"],
    featured: false,
    behanceUrl: "https://www.behance.net/mdsha0242220",
  },
  {
    slug: "saas-product-dashboard",
    title: "SaaS Product Dashboard",
    description:
      "Analytics, user management, and settings for a SaaS platform — clarity and ease of use first.",
    category: "Dashboard",
    techTags: ["SaaS", "Dashboard", "Analytics"],
    featured: false,
    behanceUrl: "https://www.behance.net/mdsha0242220",
  },
  {
    slug: "food-delivery-app",
    title: "Food Delivery App",
    description:
      "Restaurant browsing, menu selection, and real-time order tracking optimized for quick ordering.",
    category: "Mobile App",
    techTags: ["Mobile App", "Food Tech", "UX Design"],
    featured: false,
    behanceUrl: "https://www.behance.net/mdsha0242220",
  },
  {
    slug: "real-estate-platform",
    title: "Real Estate Platform",
    description:
      "Property listings with advanced filters, virtual tours, and agent profiles for buyers and sellers.",
    category: "Web App",
    techTags: ["Web App", "Real Estate", "Search UI"],
    featured: false,
    behanceUrl: "https://www.behance.net/mdsha0242220",
  },
  {
    slug: "education-learning-platform",
    title: "Education Learning Platform",
    description:
      "LMS-style course browsing, progress tracking, and student–teacher communication flows.",
    category: "Web App",
    techTags: ["Education", "Web App", "Learning"],
    featured: false,
    behanceUrl: "https://www.behance.net/mdsha0242220",
  },
];

export function getFeaturedDesignProjects(): DesignProject[] {
  return designProjects.filter((p) => p.featured);
}
