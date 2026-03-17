export type PressRelease = {
  id: string;
  slug: string;
  title: string;
  company: string;
  ticker?: string;
  category: string;
  date: string;
  excerpt: string;
  wire: string;
};

export const pressReleases: PressRelease[] = [
  {
    id: '1',
    slug: 'nexgen-cloud-q4-2025-earnings',
    title: 'NexGen Cloud Reports Record Q4 2025 Revenue of $4.2B, Announces $1B Share Buyback Program',
    company: 'NexGen Cloud Inc.',
    ticker: 'NXGC',
    category: 'Financial Results',
    date: '2026-03-10',
    excerpt:
      'NexGen Cloud today reported fourth-quarter 2025 revenue of $4.2 billion, up 28% year-over-year, exceeding consensus analyst estimates. The company also announced a $1 billion share repurchase program effective immediately.',
    wire: 'PR Newswire',
  },
  {
    id: '2',
    slug: 'meridian-health-ai-diagnostics-launch',
    title: 'Meridian Health Systems Launches AI-Powered Diagnostic Platform Across 200 Hospitals',
    company: 'Meridian Health Systems',
    ticker: 'MRDH',
    category: 'Product Launch',
    date: '2026-03-12',
    excerpt:
      'Meridian Health Systems today announced the nationwide rollout of DiagnostIQ, its proprietary AI diagnostic platform, across its network of 200+ hospitals and clinical centers. The platform reduces diagnostic turnaround time by an average of 47%.',
    wire: 'Business Wire',
  },
  {
    id: '3',
    slug: 'atlas-logistics-greenbridge-acquisition',
    title: 'Atlas Logistics Completes $2.8B Acquisition of Greenbridge Supply Chain Solutions',
    company: 'Atlas Logistics Group',
    ticker: 'ATLG',
    category: 'M&A',
    date: '2026-03-13',
    excerpt:
      'Atlas Logistics Group announced the successful completion of its acquisition of Greenbridge Supply Chain Solutions for $2.8 billion. The combined entity will operate in 52 countries with an annual revenue run rate exceeding $9 billion.',
    wire: 'PR Newswire',
  },
  {
    id: '4',
    slug: 'vantara-fintech-series-c',
    title: 'Vantara Fintech Raises $180M Series C to Accelerate Global Expansion of Embedded Finance Platform',
    company: 'Vantara Fintech',
    category: 'Funding',
    date: '2026-03-14',
    excerpt:
      'Vantara Fintech, the embedded finance infrastructure provider, today announced a $180 million Series C funding round led by Summit Capital Partners. The funds will accelerate product development and expansion into Southeast Asian markets.',
    wire: 'GlobeNewswire',
  },
  {
    id: '5',
    slug: 'terraview-aws-partnership',
    title: 'TerraView Technologies and Amazon Web Services Announce Strategic Partnership for Satellite Data Processing',
    company: 'TerraView Technologies',
    ticker: 'TRVW',
    category: 'Partnership',
    date: '2026-03-14',
    excerpt:
      'TerraView Technologies and Amazon Web Services today announced a multi-year strategic partnership to jointly develop satellite imagery processing solutions for enterprise customers in agriculture, defense, and urban planning.',
    wire: 'Business Wire',
  },
  {
    id: '6',
    slug: 'solara-energy-ceo-appointment',
    title: 'Solara Energy Appoints Maria Chen as Chief Executive Officer',
    company: 'Solara Energy Corporation',
    ticker: 'SLRA',
    category: 'Personnel',
    date: '2026-03-15',
    excerpt:
      'Solara Energy Corporation today announced the appointment of Maria Chen as Chief Executive Officer, effective April 1, 2026. Chen joins from her role as President of Global Operations at Verde Power, where she led a $7 billion renewable energy portfolio.',
    wire: 'PR Newswire',
  },
  {
    id: '7',
    slug: 'clearpath-robotics-industry-award',
    title: 'Clearpath Robotics Named "Most Innovative Automation Company" by Manufacturing Industry Awards 2026',
    company: 'Clearpath Robotics',
    category: 'Award',
    date: '2026-03-15',
    excerpt:
      "Clearpath Robotics has been recognized as the \"Most Innovative Automation Company\" at the 2026 Manufacturing Industry Awards ceremony held in Chicago. The award recognizes the company's breakthrough autonomous mobile robot platform deployed across 400+ global facilities.",
    wire: 'GlobeNewswire',
  },
  {
    id: '8',
    slug: 'omni-retail-q1-2026-guidance',
    title: 'Omni Retail Holdings Raises Full-Year 2026 Guidance, Cites Strong Omnichannel Momentum',
    company: 'Omni Retail Holdings',
    ticker: 'OMRH',
    category: 'Financial Results',
    date: '2026-03-16',
    excerpt:
      'Omni Retail Holdings today raised its full-year 2026 revenue guidance to a range of $12.4–$12.8 billion, up from its prior range of $11.9–$12.3 billion, citing stronger-than-anticipated performance in its digital and same-day delivery channels.',
    wire: 'Business Wire',
  },
  {
    id: '9',
    slug: 'quantex-pharma-fda-approval',
    title: 'Quantex Pharmaceuticals Receives FDA Approval for NEXIVAX, a Next-Generation mRNA Oncology Vaccine',
    company: 'Quantex Pharmaceuticals',
    ticker: 'QNTX',
    category: 'Regulatory',
    date: '2026-03-17',
    excerpt:
      'Quantex Pharmaceuticals announced today that the U.S. Food and Drug Administration (FDA) has granted approval for NEXIVAX, its proprietary mRNA-based personalized oncology vaccine, for treatment of advanced non-small cell lung cancer in adult patients.',
    wire: 'PR Newswire',
  },
  {
    id: '10',
    slug: 'bloomfield-edutech-k12-expansion',
    title: 'Bloomfield EdTech Expands Adaptive Learning Platform to 500 Additional K-12 School Districts',
    company: 'Bloomfield EdTech',
    category: 'Product Launch',
    date: '2026-03-17',
    excerpt:
      'Bloomfield EdTech today announced an expansion of its adaptive learning platform, LearnPath, to 500 new K-12 school districts across the United States, bringing its total reach to over 3 million students in 38 states.',
    wire: 'GlobeNewswire',
  },
];
