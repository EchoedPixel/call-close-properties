
export const SITE = {
  name: "Call & Close Properties",
  shortName: "CALL & CLOSE",
  tagline: "Real Estate Lead Generation & Sales Support",
  description:
    "Experienced real estate cold callers trained exclusively for wholesalers, realtors , and flippers. With clear communication skills and in-depth knowledge of all exit strategies, they quickly understand your acquisition goals and deliver leads that fit your exact criteria.",
  email: "callandclosee@gmail.com",
  phone: "+1 (555) 000-0000",
  address: "Nationwide",
  url: "https://www.callcloseproperties.com/",
  bookingUrl:
    "https://calendar.app.google/47J12QscBW1mVb876",
  customBookingUrl:
    "https://calendar.google.com/appointments/schedules/AcZssZ25nyNFuxO4iysXrwtAy0WbmZBafMsNmOr9Wtoj7Z2XNM3BCymJEBRht29CmqvD_qM_rLeOn9Id",
  social: {
    linkedin: "https://www.linkedin.com/in/call-and-close-properties-1027a6417/",
    instagram: "https://instagram.com/callandclose",
    facebook: "https://facebook.com/callandclose",
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Who We Serve" },
  { href: "/contact", label: "Contact" },
  { href: "/book-a-call", label: "Book a Call" },
];

export const SERVICES = [
  {
    slug: "real-estate-lead-generation",
    title: "Real Estate Lead Generation",
    description:
      "Targeted outbound campaigns that deliver motivated buyer and seller leads directly to your pipeline—qualified, verified, and ready for conversation.",
    features: [
      "Buyer & seller lead sourcing",
      "Geo-targeted prospect lists",
      "CRM-ready lead delivery",
      "Daily lead quality reporting",
    ],
    icon: "Home",
    image: "/lead-generation.png",
  },
  {
    slug: "cold-calling",
    title: "Cold Calling",
    description:
      "Expert outbound calling that opens conversations with homeowners, investors, and prospects—handled with the professionalism your brand demands.",
    features: [
      "Real estate-specific scripts",
      "Objection handling for listings & buyers",
      "Call recording & quality review",
      "Conversion-focused outreach",
    ],
    icon: "Phone",
    image: "/cold-calling.png",
  },
  {
    slug: "lead-qualification",
    title: "Lead Qualification",
    description:
      "Every lead is vetted against your criteria—budget, timeline, motivation, and location—so you only speak with prospects worth your time.",
    features: [
      "BANT-style qualification framework",
      "Motivation & timeline scoring",
      "Duplicate & dead lead filtering",
      "Detailed qualification notes",
    ],
    icon: "ClipboardCheck",
    image: "/lead-qualification.png",
  },
  {
    slug: "Help With Closing Deals",
    title: "Help With Closing Deals",
    description:
      "Our experienced closers join the conversation when your prospects are ready to proceed. We help overcome objections, negotiate confidently, and maximize your closing rate while representing your business professionally.",
    features: [
      "Professional sales closers",
      "Objection handling",
      "Contract & negotiation support",
      "Higher closing rates",
    ],
    icon: "Handshake",
    image: "/closing-deals.png",
  },
  {
    slug: "follow-up-campaigns",
    title: "Follow-Up Campaigns",
    description:
      "Persistent, professional follow-up on cold, warm, and aged leads that re-engages prospects and converts stalled opportunities into appointments.",
    features: [
      "Multi-touch follow-up sequences",
      "Aged lead reactivation",
      "Nurture call campaigns",
      "Pipeline re-engagement tracking",
    ],
    icon: "RefreshCw",
    image: "/follow-up-campaigns.png",
  },
  {
    slug: "sales-support",
    title: "Sales Support",
    description:
      "Dedicated support for your sales operation—CRM management, lead routing, transaction coordination, and admin so you stay focused on closing.",
    features: [
      "CRM data management",
      "Lead routing & assignment",
      "Transaction follow-up support",
      "Pipeline reporting dashboards",
    ],
    icon: "Handshake",
    image: "/sales-support.png",
  },
];

export const CLIENT_TYPES = [
  {
    slug: "investors-wholesalers",
    name: "Investors & Wholesalers",
    description:
      "Off-market deal flow, motivated seller outreach, and investor lead campaigns built for volume and speed.",
    icon: "TrendingUp",
  },
  {
    slug: "Home-Buying Companies",
    name: "Home-Buying Companies",
    description:
      "Growing acquisition teams that need a steady flow of qualified seller leads to keep their pipeline active and focused on closing deals.",
    icon: "Building",
  },
  {
    slug: "real-estate-teams",
    name: "Real Estate Teams",
    description:
      "High-performing real estate teams that need a consistent flow of qualified seller leads to keep their pipeline full and their acquisitions team focused on closing deals.",
    icon: "Users",
  },
  {
    slug: "brokerages",
    name: "Brokerages",
    description:
      "Brokerages seeking a turnkey outbound solution that elevates agent production and strengthens their competitive edge.",
    icon: "Building2",
  },
  {
    slug: "property-developers",
    name: "Property Developers",
    description:
      "Pre-sale lead generation, buyer interest campaigns, and appointment setting for new developments and luxury projects.",
    icon: "Landmark",
  },
];

/** @deprecated Use CLIENT_TYPES — kept for gradual migration */
export const INDUSTRIES = CLIENT_TYPES;

export const STATS = [
  { value: "$847M+", label: "In Property Value Closed" },
  { value: "12,400+", label: "Appointments Booked" },
  { value: "94%", label: "Client Retention Rate" },
  { value: "3.2x", label: "Avg. ROI on Engagement" },
];

export const HERO_TRUST_POINTS = [
  "Real estate exclusive — not a generic call center",
  "over 25 qualified  Lead a month",
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Strategy Session",
    description:
      "We analyze your market, ideal client profile, current pipeline, and revenue goals to design a custom acquisition plan.",
  },
  {
    step: "02",
    title: "Campaign Build",
    description:
      "Scripts, prospect lists, CRM integration, and agent training are tailored to your brand and local market.",
  },
  {
    step: "03",
    title: "Launch & Refine",
    description:
      "Campaigns go live with daily quality review, call monitoring, and weekly performance optimization.",
  },
  {
    step: "04",
    title: "Scale & Close",
    description:
      "We expand what's working, increase appointment volume, and drive more leads to the closing table.",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Real Estate Exclusive",
    description:
      "We don't serve SaaS, insurance, or generic B2B. Every script, process, and agent is trained specifically for real estate sales.",
    icon: "Home",
  },
  {
    title: "Premium Representation",
    description:
      "Your brand is represented with the polish and professionalism your clients expect—from first call to booked appointment.",
    icon: "Award",
  },
  {
    title: "Transparent Performance",
    description:
      "Real-time dashboards, call recordings, and weekly strategy reviews. You always know exactly what's happening in your pipeline.",
    icon: "BarChart3",
  },
  {
    title: "Built to Close",
    description:
      "We measure success by appointments that show up and deals that close—not vanity metrics like dial counts or raw lead volume.",
    icon: "Target",
  },
];

export const SUCCESS_STORIES = [
  {
    client: "Ashford Realty Group",
    industry: "Luxury Residential",
    challenge:
      "A top luxury agent needed consistent listing appointments without sacrificing time spent on showings and negotiations.",
    solution:
      "Deployed a targeted seller outreach campaign with white-glove scripts and hyper-local prospect lists in three zip codes.",
    results: [
      "52 listing appointments in 60 days",
      "$18.4M in new listings signed",
      "4.1x ROI on monthly retainer",
    ],
  },
  {
    client: "Delgado Real Estate Team",
    industry: "Residential Team",
    challenge:
      "An 8-agent team was drowning in unqualified leads and missing follow-ups on warm prospects in their CRM.",
    solution:
      "Built a lead qualification and follow-up system integrated with their Follow Up Boss CRM, with dedicated agents per territory.",
    results: [
      "68% increase in team production",
      "41% improvement in lead-to-appointment rate",
      "312 re-engaged stale leads converted",
    ],
  },
  {
    client: "Chen Capital Properties",
    industry: "Investor / Wholesaler",
    challenge:
      "Needed a reliable pipeline of motivated seller leads for off-market acquisitions across two markets.",
    solution:
      "Launched a multi-market cold calling and follow-up campaign targeting distressed and off-market property owners.",
    results: [
      "14 deals closed in 6 months",
      "$3.2M in acquisition volume",
      "Average 23 motivated seller leads per week",
    ],
  },
];

export const FAQS = [
  {
    question: "Do you work exclusively with real estate professionals?",
    answer:
      "Yes. Call & Close Properties serves only real estate agents, teams, brokerages, investors, and developers. Our scripts, training, and processes are built exclusively for property sales—not generic telemarketing.",
  },
  {
    question: "How quickly will I start receiving appointments?",
    answer:
      "Most clients see their first qualified appointments within 7–14 days of campaign launch. Full pipeline momentum typically builds within 30–45 days as we optimize scripts and targeting.",
  },
  {
    question: "How do you ensure lead and appointment quality?",
    answer:
      "Every prospect is qualified against your criteria—budget, timeline, motivation, and location—before an appointment is booked. You receive detailed notes and call recordings for full transparency.",
  },
  {
    question: "Will callers represent my brand professionally?",
    answer:
      "Absolutely. Every agent is trained on your brand voice, market positioning, and communication standards. Calls are recorded and reviewed weekly to maintain premium quality.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "Engagements are custom-scoped based on your market, volume needs, and services required. Book a free strategy call and we'll provide a transparent proposal tailored to your goals.",
  },
];

export const CORE_VALUES = [
  {
    title: "Closings Over Calls",
    description:
      "We measure success by deals closed and appointments kept—not dial volume or raw lead counts.",
  },
  {
    title: "Real Estate First",
    description:
      "Every process, script, and agent is built for property sales. We don't dilute our expertise across unrelated industries.",
  },
  {
    title: "Premium Standards",
    description:
      "Your reputation is our reputation. Every interaction reflects the professionalism your clients expect.",
  },
  {
    title: "Full Transparency",
    description:
      "Recordings, reports, and performance data are always accessible. No hidden metrics, no surprises.",
  },
  {
    title: "Partnership Mindset",
    description:
      "We embed into your sales operation as a true extension of your team—not a disconnected vendor.",
  },
];

export const TRUST_INDICATORS = [
  { label: "Real Estate Exclusive", icon: "Home" },
  { label: "Call Recording & QA", icon: "Mic" },
  { label: "CRM Integrated", icon: "Layers" },
  { label: "NDA & Compliance Ready", icon: "FileCheck" },
  { label: "Weekly Performance Reviews", icon: "BarChart3" },
  { label: "80+ Active Clients", icon: "Users" },
];

export const FOOTER_SERVICES = SERVICES.map((s) => ({
  label: s.title,
  href: `/services#${s.slug}`,
}));

export const CONTACT_SERVICE_OPTIONS = SERVICES.map((s) => s.title);

export const AGENT_OPTIONS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6–10",
  "10+",
];

export const BOOKING_BENEFITS = [
  {
    title: "Free Strategy Assessment",
    description:
      "A focused 30-minute consultation to discuss your target market, lead generation goals, and how our team can help you connect with more motivated sellers.",
  },
  {
    title: "Custom Acquisition Plan",
    description:
      "Walk away with a tailored lead generation plan designed around your target market, acquisition goals, and ideal seller profile.",
  },
  {
    title: "Honest Fit Evaluation",
    description:
      "We'll tell you upfront if we're the right partner—or point you toward a better solution for your situation.",
  },
  {
    title: "Fast-Track Onboarding",
    description:
      "Qualified clients can launch campaigns within 7–10 business days of signing.",
  },
];

export const MEETING_INFO = {
  duration: "30 minutes",
  format: "Video call via Zoom or Google Meet",
  prepare:
    "Come ready to discuss your market, target clients, current pipeline, and production goals. We'll handle the strategy.",
};
