export type OutletType =
  | 'Newspaper'
  | 'Magazine'
  | 'Online'
  | 'Wire Service'
  | 'Blog'
  | 'Podcast'
  | 'TV/Broadcast'
  | 'Newsletter';

export type MediaContact = {
  id: string;
  name: string;
  title: string;
  outlet: string;
  outletType: OutletType;
  beats: string[];
  region: string;
  recentArticles: [string, string];
};

export const mediaContacts: MediaContact[] = [
  {
    id: 'c1',
    name: 'Sarah Chen',
    title: 'Senior Technology Reporter',
    outlet: 'TechCrunch',
    outletType: 'Online',
    beats: ['AI', 'Startups', 'SaaS', 'Cloud'],
    region: 'US West Coast',
    recentArticles: [
      "NexGen Cloud's Q4 Blowout Signals Cloud Infrastructure Boom Is Far From Over",
      'The 10 AI Startups That Defined Q1 2026',
    ],
  },
  {
    id: 'c2',
    name: 'James Whitfield',
    title: 'Financial Markets Editor',
    outlet: 'Bloomberg',
    outletType: 'Wire Service',
    beats: ['Finance', 'M&A', 'Capital Markets', 'Earnings'],
    region: 'US Northeast',
    recentArticles: [
      'Analysts Raise Price Targets After NexGen Cloud Earnings Beat',
      'Global M&A Activity Surges 18% in Q1 2026 on Tech Deal Frenzy',
    ],
  },
  {
    id: 'c3',
    name: 'Dr. Priya Mehta',
    title: 'Healthcare & Life Sciences Correspondent',
    outlet: 'STAT News',
    outletType: 'Online',
    beats: ['Healthcare', 'Biotech', 'FDA', 'Clinical Trials'],
    region: 'US Northeast',
    recentArticles: [
      "Meridian's DiagnostIQ Rollout Sets New Bar for Clinical AI Deployment at Scale",
      "Inside the FDA's New Framework for AI-Assisted Diagnostics",
    ],
  },
  {
    id: 'c4',
    name: 'Marcus Webb',
    title: 'Energy & Climate Editor',
    outlet: 'Reuters',
    outletType: 'Wire Service',
    beats: ['Energy', 'Climate', 'Oil & Gas', 'Renewables'],
    region: 'Global',
    recentArticles: [
      'Global Renewables Investment on Track to Hit $2.1 Trillion in 2026',
      'OPEC+ Eyes Output Cuts as Clean Energy Transition Accelerates',
    ],
  },
  {
    id: 'c5',
    name: 'Linda Park',
    title: 'Retail & Consumer Reporter',
    outlet: 'Business Insider',
    outletType: 'Online',
    beats: ['Retail', 'E-commerce', 'Consumer Goods', 'DTC'],
    region: 'US Northeast',
    recentArticles: [
      'Omni Retail Holdings Raises 2026 Guidance on Omnichannel Strength',
      'Why Same-Day Delivery Is Now Table Stakes for Major Retailers',
    ],
  },
  {
    id: 'c6',
    name: 'Tom Harrington',
    title: 'Supply Chain Analyst & Reporter',
    outlet: 'FreightWaves',
    outletType: 'Online',
    beats: ['Logistics', 'Supply Chain', 'Freight', 'Last-Mile'],
    region: 'US Southeast',
    recentArticles: [
      'Atlas-Greenbridge Merger Creates a New Global Logistics Titan',
      'Red Sea Disruptions Continue to Add 11–14 Days to Asia-Europe Routes',
    ],
  },
  {
    id: 'c7',
    name: 'Elena Vasquez',
    title: 'Education Technology Reporter',
    outlet: 'EdSurge',
    outletType: 'Online',
    beats: ['EdTech', 'K-12', 'Higher Education', 'Adaptive Learning'],
    region: 'US West Coast',
    recentArticles: [
      "Bloomfield's LearnPath Expansion Is the Largest Single EdTech Rollout in U.S. History",
      'Generative AI in the Classroom: Promise, Peril, and Policy',
    ],
  },
  {
    id: 'c8',
    name: 'David Okonkwo',
    title: 'Fintech & Banking Correspondent',
    outlet: 'CNBC',
    outletType: 'TV/Broadcast',
    beats: ['Fintech', 'Payments', 'Banking', 'Crypto'],
    region: 'US Northeast',
    recentArticles: [
      "Vantara Fintech's $180M Series C Is a Bet on Embedded Finance Going Mainstream",
      'Why Banks Are Finally Taking Embedded Finance Seriously',
    ],
  },
  {
    id: 'c9',
    name: 'Sophie Laurent',
    title: 'European Technology Editor',
    outlet: 'Financial Times',
    outletType: 'Newspaper',
    beats: ['Technology', 'AI Regulation', 'Big Tech', 'Policy'],
    region: 'Europe',
    recentArticles: [
      "EU's AI Act Enforcement Begins: What Tech Companies Need to Know",
      'The Transatlantic Divide on AI Governance Is Widening',
    ],
  },
  {
    id: 'c10',
    name: 'Raj Patel',
    title: 'Biopharma Reporter',
    outlet: 'Fierce Healthcare',
    outletType: 'Newsletter',
    beats: ['Pharma', 'Biotech', 'Drug Approval', 'Oncology'],
    region: 'US Northeast',
    recentArticles: [
      "Quantex Pharma's NEXIVAX FDA Approval Marks mRNA Oncology Coming of Age",
      'Why Personalized Cancer Vaccines Are the Next Frontier in Immunotherapy',
    ],
  },
  {
    id: 'c11',
    name: 'Anya Kowalski',
    title: 'Climate & Sustainability Reporter',
    outlet: 'Bloomberg Green',
    outletType: 'Online',
    beats: ['Climate', 'ESG', 'Renewables', 'Carbon Markets'],
    region: 'Global',
    recentArticles: [
      "Maria Chen's Appointment at Solara Energy Boosts Confidence in Utility-Scale Solar",
      'Carbon Credit Markets Hit Record Volume as Corporates Race to Net Zero',
    ],
  },
  {
    id: 'c12',
    name: 'Michael Torres',
    title: 'Enterprise Software Reporter',
    outlet: 'The Information',
    outletType: 'Newsletter',
    beats: ['Enterprise Software', 'Cloud', 'SaaS', 'Infrastructure'],
    region: 'US West Coast',
    recentArticles: [
      "Inside NexGen Cloud's $1 Billion Bet on Its Own Stock",
      'The Enterprise AI Stack Is Consolidating Faster Than Anyone Expected',
    ],
  },
  {
    id: 'c13',
    name: 'Fiona MacLeod',
    title: 'Venture & Growth Investing Reporter',
    outlet: 'The Wall Street Journal',
    outletType: 'Newspaper',
    beats: ['Venture Capital', 'Startups', 'IPO', 'Growth Equity'],
    region: 'US West Coast',
    recentArticles: [
      "TerraView-AWS Deal Could Unlock Precision Agriculture's Supply Chain Potential",
      "Series C Rounds Are Back: What's Driving the Late-Stage Recovery",
    ],
  },
  {
    id: 'c14',
    name: 'Carlos Rivera',
    title: 'Industrial Automation Reporter',
    outlet: 'Manufacturing Today',
    outletType: 'Magazine',
    beats: ['Robotics', 'Automation', 'Industry 4.0', 'Manufacturing'],
    region: 'US Midwest',
    recentArticles: [
      'Clearpath Robotics Named Most Innovative Automation Company of 2026',
      'AMRs Are Reshaping Factory Floors — But Labor Concerns Linger',
    ],
  },
  {
    id: 'c15',
    name: 'Nina Zhang',
    title: 'AI & Society Editor',
    outlet: 'MIT Technology Review',
    outletType: 'Magazine',
    beats: ['AI', 'Ethics', 'Policy', 'Future of Work'],
    region: 'US Northeast',
    recentArticles: [
      'The Diagnostic AI Dilemma: Accuracy vs. Accountability',
      'When Algorithms Decide Who Gets Care: The Ethics of Clinical AI',
    ],
  },
];
