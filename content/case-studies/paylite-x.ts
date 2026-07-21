export const payliteLaunch = {
  demo: {
    webUrl: "https://paylite-web.onrender.com",
    apiUrl: "https://paylite-api.onrender.com",
    apiDocs: "https://paylite-api.onrender.com/docs",
    phone: "01700000001",
    pin: "1234",
    recipient: "01700000002",
  },
  metrics: [
    { label: "MFS services fused", value: "12" },
    { label: "Auth layers", value: "OTP + PIN + JWT" },
    { label: "Balance sync", value: "SSE stream" },
    { label: "Deploy", value: "Docker · Render · CI" },
  ],
  fusion: [
    {
      inspired: "bKash",
      strength: "Instant P2P + receipts",
      closed: "Agent-only thinking → digital cash-in",
    },
    {
      inspired: "Nagad",
      strength: "Fast onboarding",
      closed: "Heavy signup → name / phone / PIN in seconds",
    },
    {
      inspired: "Rocket",
      strength: "Funding & payroll feel",
      closed: "Branch dependency → simulated cash-in",
    },
    {
      inspired: "Cellfin / banks",
      strength: "Trust & controls",
      closed: "Unlimited drain → daily + per-txn limits",
    },
    {
      inspired: "Alipay / WeChat",
      strength: "QR & deep-link pay",
      closed: "Mistyped numbers → QR payload pay flow",
    },
    {
      inspired: "Wise",
      strength: "Fee clarity + dual FX",
      closed: "Hidden fees → live fee preview + BDT/USD",
    },
    {
      inspired: "Venmo",
      strength: "Activity feed",
      closed: "Public leaks → private history default",
    },
  ],
  services: [
    "Home & live balance",
    "Send (fee preview → OTP → PIN)",
    "Cash In / Cash Out",
    "Request money",
    "Mobile recharge",
    "Utility bills",
    "Merchant QR pay",
    "Savings vault",
    "BDT→USD remit",
    "Bank link",
    "Personal receive QR",
    "Private history",
  ],
  architecture: {
    layers: [
      {
        id: "client",
        title: "Premium Web Client",
        tech: "React · Vite · TypeScript · Three.js · anime.js",
        detail: "Glass UI, 3D hero, recruiter-first product surface",
      },
      {
        id: "api",
        title: "Ledger API",
        tech: "FastAPI · SQLAlchemy · JWT · bcrypt · SSE",
        detail: "Paisa-accurate balances, OTP/PIN auth, OpenAPI docs",
      },
      {
        id: "data",
        title: "Persistence",
        tech: "SQLite (demo) · seeded ledger",
        detail: "Audit-friendly transaction log; demo seed script",
      },
      {
        id: "ops",
        title: "Ops",
        tech: "Docker · GitHub Actions · Render blueprint",
        detail: "Separate web + API services with CORS configuration",
      },
    ],
    flows: [
      "GET /wallet/fee-preview — transparent fee before confirm",
      "POST transfer — OTP gate → PIN confirm → ledger write",
      "GET /wallet/stream — SSE live balance push to UI",
      "GET /wallet/limits — daily remaining quota enforcement",
    ],
  },
  otpFlow: [
    {
      step: "01",
      title: "Amount & recipient",
      detail: "User enters transfer details; UI requests fee preview first — Wise-style transparency.",
    },
    {
      step: "02",
      title: "Fee preview",
      detail: "GET /wallet/fee-preview returns breakdown before any OTP is sent.",
    },
    {
      step: "03",
      title: "Request OTP",
      detail: "API issues OTP challenge; in dev, demo_otp is returned to simulate SMS.",
    },
    {
      step: "04",
      title: "PIN confirmation",
      detail: "User submits OTP + PIN — mirrors real MFS double-check, not password-only demos.",
    },
    {
      step: "05",
      title: "Ledger mutation",
      detail: "Paisa integer debit/credit, receipt generated, SSE pushes new balance.",
    },
  ],
  apiHighlights: [
    "GET /wallet/fee-preview",
    "GET /wallet/limits",
    "GET /wallet/qr",
    "GET /wallet/stream",
    "POST /requests + pay flow",
    "POST /recharge · /bills · /merchants/pay",
  ],
};
