export const studentmoveLaunch = {
  demo: {
    webUrl: "https://studentmove-app-d866.onrender.com",
    webRepo:
      "https://github.com/Tahis-Fzs/StudentMove-Smart-Transport-Solution-for-Dhaka",
    flutterRepo: "https://github.com/Hasin-99/StudentMove_Flutter_App",
  },
  metrics: [
    { label: "Team size", value: "5" },
    { label: "User roles", value: "3" },
    { label: "Real-time", value: "Firebase GPS" },
    { label: "Payments", value: "SSLCommerz" },
  ],
  modules: [
    {
      title: "Live bus tracking",
      detail: "Driver GPS updates feed student-facing route and arrival views.",
    },
    {
      title: "Route suggestions",
      detail: "Students discover viable paths across Dhaka campus corridors.",
    },
    {
      title: "Digital passes",
      detail: "Subscription logic with payment callback verification.",
    },
    {
      title: "Admin monitoring",
      detail: "Operations dashboard for buses, users, and announcements.",
    },
    {
      title: "Driver workflow",
      detail: "Role-scoped GPS submission and schedule adherence.",
    },
    {
      title: "Notifications",
      detail: "Push-style alerts for delays, announcements, and pass status.",
    },
    {
      title: "PWA install",
      detail: "Installable mobile web before native parity on every device.",
    },
    {
      title: "Flutter companion",
      detail: "Native client syncs with Firebase auth, chat, and schedules.",
    },
  ],
  roles: [
    {
      id: "student",
      title: "Student",
      color: "var(--accent-cyan)",
      capabilities: [
        "View live buses and suggested routes",
        "Purchase / renew transport passes",
        "Receive announcements and schedule updates",
      ],
    },
    {
      id: "driver",
      title: "Driver",
      color: "#34d399",
      capabilities: [
        "Submit GPS location updates",
        "Follow assigned route schedules",
        "Scoped access — no admin mutations",
      ],
    },
    {
      id: "admin",
      title: "Admin",
      color: "var(--accent-paylite)",
      capabilities: [
        "Monitor fleet and user subscriptions",
        "Publish announcements",
        "Manage routes, buses, and operational data",
      ],
    },
  ],
  architecture: {
    layers: [
      {
        id: "web",
        title: "Laravel 9 PWA",
        tech: "Blade · MySQL · Admin · Student web",
        detail:
          "Monolith for rapid admin panels, auth, subscriptions, and installable PWA shell.",
      },
      {
        id: "realtime",
        title: "Firebase layer",
        tech: "Auth · Firestore · Cloud Functions · FCM",
        detail:
          "Real-time GPS and notifications without self-hosted WebSocket infra on a student budget.",
      },
      {
        id: "mobile",
        title: "Flutter client",
        tech: "Dart · Firebase SDK · Role-based rules",
        detail:
          "Mobile companion for schedules, chat, and secure role-scoped data access.",
      },
      {
        id: "payments",
        title: "SSLCommerz",
        tech: "Local payment gateway · Callback verification",
        detail:
          "Bangladesh-realistic pass payments — not Stripe-only portfolio fiction.",
      },
    ],
    integrations: [
      "Driver GPS → Firebase → student live map",
      "Pass purchase → SSLCommerz → Laravel callback → subscription state",
      "Admin announcement → Firebase → PWA + Flutter clients",
      "Laravel admin ↔ Flutter via shared Firebase contracts",
    ],
  },
  paymentFlow: [
    {
      step: "01",
      title: "Student selects pass plan",
      detail: "UI surfaces subscription options tied to route or duration.",
    },
    {
      step: "02",
      title: "SSLCommerz checkout",
      detail: "Redirect to local gateway — the payment story Dhaka recruiters recognize.",
    },
    {
      step: "03",
      title: "Callback verification",
      detail: "Server validates gateway response before activating pass — no client-side trust.",
    },
    {
      step: "04",
      title: "Entitlement update",
      detail: "MySQL subscription state + student notification across web and mobile.",
    },
  ],
  team: {
    headline: "5-member team — modular ownership, not solo hero fiction",
    points: [
      "Split full-stack modules across web admin, student flows, and integrations",
      "Shared API contracts between Laravel backend and Flutter mobile client",
      "Real collaboration constraints: merge coordination, role boundaries, deploy parity",
    ],
  },
};
