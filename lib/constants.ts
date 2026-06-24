export const SITE = {
  name: "Call & Close Properties",
  shortName: "Call & Close",
  tagline: "Real Estate Lead Generation & Sales Support",
  description:
    "Premium lead generation, appointment setting, and sales support exclusively for real estate professionals who want to close more deals—not chase more leads.",
  email: "callandclosee@gmail.com",
  phone: "+1 (555) 987-6543",
  address: "Serving Real Estate Professionals Nationwide",
  url: "https://callandclose.com",
  bookingUrl:
    "https://calendar.app.google/48tnipZmBxXw31o26",
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
  { href: "/testimonials", label: "Reviews" },
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
  },
  {
    slug: "appointment-setting",
    title: "Appointment Setting",
    description:
      "We book listing appointments, buyer consultations, and property showings on your calendar with prospects who match your ideal client profile.",
    features: [
      "Calendar integration",
      "Pre-appointment qualification",
      "No-show reduction protocols",
      "Automated confirmation sequences",
    ],
    icon: "CalendarCheck",
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
  },
];

export const CLIENT_TYPES = [
  {
    slug: "individual-agents",
    name: "Individual Agents",
    description:
      "Solo agents who need a consistent flow of qualified appointments without spending hours on prospecting and follow-up.",
    icon: "User",
  },
  {
    slug: "real-estate-teams",
    name: "Real Estate Teams",
    description:
      "High-performing teams scaling production with dedicated lead generation and appointment-setting support for every agent.",
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
    slug: "investors-wholesalers",
    name: "Investors & Wholesalers",
    description:
      "Off-market deal flow, motivated seller outreach, and investor lead campaigns built for volume and speed.",
    icon: "TrendingUp",
  },
  {
    slug: "property-developers",
    name: "Property Developers",
    description:
      "Pre-sale lead generation, buyer interest campaigns, and appointment setting for new developments and luxury projects.",
    icon: "Landmark",
  },
  {
    slug: "luxury-listings",
    name: "Luxury Listings",
    description:
      "White-glove outreach for high-ticket properties—discreet, polished, and aligned with the expectations of luxury markets.",
    icon: "Gem",
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
  "Trusted by 80+ real estate professionals",
  "Real estate exclusive — not a generic call center",
  "Average 47 qualified appointments per client",
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

export const TESTIMONIALS = [
  {
    quote:
      "Call & Close booked 52 listing appointments in my first 60 days. I went from chasing leads to choosing which deals to take. This is the highest-ROI investment I've made in my business.",
    author: "Victoria Ashford",
    role: "Luxury Listing Agent",
    company: "Ashford Realty Group",
    rating: 5,
  },
  {
    quote:
      "We tried three lead gen companies before Call & Close. They're the only team that actually understands real estate—not just telemarketing. Our team's production increased 68% in one quarter.",
    author: "Marcus Delgado",
    role: "Team Leader",
    company: "Delgado Real Estate Team",
    rating: 5,
  },
  {
    quote:
      "The follow-up campaigns alone reactivated $2.1M in stale pipeline. Professional, discreet, and they represent our brand exactly how we would on every single call.",
    author: "Jennifer Walsh",
    role: "Managing Broker",
    company: "Walsh & Partners Realty",
    rating: 5,
  },
  {
    quote:
      "As an investor, speed matters. Call & Close delivers motivated seller leads consistently. We've closed 14 deals directly from their outreach in six months.",
    author: "David Chen",
    role: "Real Estate Investor",
    company: "Chen Capital Properties",
    rating: 5,
  },
  {
    quote:
      "Our pre-sale campaign for a $48M development generated 340 qualified buyer inquiries and 89 scheduled tours. Exceptional execution from start to finish.",
    author: "Rachel Morrison",
    role: "Director of Sales",
    company: "Meridian Developments",
    rating: 5,
  },
  {
    quote:
      "I was skeptical about outsourcing calls. Call & Close changed my mind within two weeks. The quality of every conversation reflects the premium service I provide.",
    author: "James Whitfield",
    role: "Top Producing Agent",
    company: "Whitfield Estates",
    rating: 5,
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
    question: "What CRMs and tools do you integrate with?",
    answer:
      "We integrate with Follow Up Boss, kvCORE, LionDesk, Salesforce, HubSpot, Chime, BoomTown, and most major real estate CRMs. Calendar sync via Google Calendar or Outlook.",
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

export const TEAM = [
  {
    name: "Karim Hassan",
    role: "Founder & CEO",
    bio: "Former top-producing agent turned sales strategist. Built Call & Close to give real estate professionals the outbound infrastructure that closes deals.",
    initials: "KH",
  },
  {
    name: "Elena Vasquez",
    role: "Director of Operations",
    bio: "12 years scaling real estate sales teams. Ensures every campaign runs with precision, accountability, and measurable outcomes.",
    initials: "EV",
  },
  {
    name: "Thomas Reid",
    role: "Head of Client Success",
    bio: "Dedicated to client ROI with a 94% retention rate. Leads onboarding, strategy sessions, and ongoing campaign optimization.",
    initials: "TR",
  },
  {
    name: "Amanda Brooks",
    role: "Training & Quality Lead",
    bio: "Designs real estate-specific training programs that ensure every call sounds like it came from your office—not a call center.",
    initials: "AB",
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

export const BOOKING_BENEFITS = [
  {
    title: "Free Strategy Assessment",
    description:
      "A focused 30-minute session to evaluate your pipeline, market, and growth potential—no cost, no obligation.",
  },
  {
    title: "Custom Acquisition Plan",
    description:
      "Walk away with a tailored lead generation and appointment-setting strategy built for your market.",
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
