export type Sentiment = 'positive' | 'neutral' | 'negative';

export type Mention = {
  id: string;
  topicId: string;
  headline: string;
  source: string;
  sourceType: 'News' | 'Blog' | 'Social' | 'Press Release';
  date: string;
  sentiment: Sentiment;
  excerpt: string;
};

export type MonitoredTopic = {
  id: string;
  name: string;
  description: string;
  mentionCount: number;
  sentiment: { positive: number; neutral: number; negative: number };
  topSources: string[];
  // Daily volume for last 7 days, oldest → newest
  weeklyVolume: [number, number, number, number, number, number, number];
};

export const monitoredTopics: MonitoredTopic[] = [
  {
    id: 'nexgen-cloud',
    name: 'NexGen Cloud',
    description: 'Brand monitoring for NexGen Cloud Inc. (NXGC)',
    mentionCount: 142,
    sentiment: { positive: 89, neutral: 38, negative: 15 },
    topSources: ['TechCrunch', 'Reuters', 'Bloomberg', 'The Verge'],
    weeklyVolume: [18, 14, 22, 31, 19, 16, 22],
  },
  {
    id: 'ai-diagnostics',
    name: 'AI Diagnostics',
    description: 'Coverage of AI in medical diagnostics',
    mentionCount: 98,
    sentiment: { positive: 71, neutral: 22, negative: 5 },
    topSources: ['STAT News', 'Healthcare IT News', 'Fierce Healthcare', 'Axios'],
    weeklyVolume: [8, 11, 9, 15, 18, 21, 16],
  },
  {
    id: 'clean-energy',
    name: 'Clean Energy',
    description: 'Clean and renewable energy sector news',
    mentionCount: 217,
    sentiment: { positive: 134, neutral: 62, negative: 21 },
    topSources: ['Reuters', 'E&E News', 'Bloomberg Green', 'The Guardian'],
    weeklyVolume: [28, 34, 29, 41, 33, 28, 24],
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain',
    description: 'Global supply chain disruption and innovation',
    mentionCount: 76,
    sentiment: { positive: 22, neutral: 35, negative: 19 },
    topSources: ['FreightWaves', 'Supply Chain Dive', 'WSJ', 'FT'],
    weeklyVolume: [9, 13, 8, 11, 10, 14, 11],
  },
  {
    id: 'edtech',
    name: 'EdTech',
    description: 'Education technology and adaptive learning',
    mentionCount: 54,
    sentiment: { positive: 38, neutral: 12, negative: 4 },
    topSources: ['EdSurge', 'Education Week', 'TechCrunch', 'eSchool News'],
    weeklyVolume: [6, 7, 9, 8, 6, 10, 8],
  },
];

export const mentions: Mention[] = [
  {
    id: 'm1',
    topicId: 'nexgen-cloud',
    headline: "NexGen Cloud's Q4 Blowout Signals Cloud Infrastructure Boom Is Far From Over",
    source: 'TechCrunch',
    sourceType: 'News',
    date: '2026-03-17',
    sentiment: 'positive',
    excerpt:
      'With revenue growth accelerating to 28% YoY, NexGen Cloud is proving that enterprise cloud adoption still has significant runway — particularly in the financial services and healthcare verticals.',
  },
  {
    id: 'm2',
    topicId: 'nexgen-cloud',
    headline: 'Analysts Raise Price Targets After NexGen Cloud Earnings Beat',
    source: 'Bloomberg',
    sourceType: 'News',
    date: '2026-03-17',
    sentiment: 'positive',
    excerpt:
      "At least seven Wall Street analysts raised their 12-month price targets for NXGC following the company's better-than-expected Q4 results, citing strong margin expansion and robust enterprise pipeline.",
  },
  {
    id: 'm3',
    topicId: 'nexgen-cloud',
    headline: 'NexGen Cloud Faces Growing Competition from Hyperscalers in SMB Segment',
    source: 'The Information',
    sourceType: 'News',
    date: '2026-03-15',
    sentiment: 'negative',
    excerpt:
      "Despite strong headline numbers, industry observers note that NexGen Cloud's SMB customer acquisition costs have risen sharply as AWS and Azure intensify promotional efforts in the mid-market.",
  },
  {
    id: 'm4',
    topicId: 'nexgen-cloud',
    headline: "Inside NexGen Cloud's $1 Billion Bet on Its Own Stock",
    source: 'Reuters',
    sourceType: 'News',
    date: '2026-03-14',
    sentiment: 'neutral',
    excerpt:
      "The company's board-approved share repurchase program reflects management's confidence in long-term value creation, though some investors wonder if the capital could be better deployed in R&D.",
  },
  {
    id: 'm5',
    topicId: 'ai-diagnostics',
    headline: "Meridian's DiagnostIQ Rollout Sets New Bar for Clinical AI Deployment at Scale",
    source: 'STAT News',
    sourceType: 'News',
    date: '2026-03-17',
    sentiment: 'positive',
    excerpt:
      "The deployment across 200 hospitals is being watched closely by healthcare systems globally. DiagnostIQ's 47% reduction in diagnostic turnaround — if validated at scale — would mark a turning point for AI in clinical settings.",
  },
  {
    id: 'm6',
    topicId: 'ai-diagnostics',
    headline: 'FDA Signals Tighter Scrutiny on AI Diagnostic Tools Following Deployment Wave',
    source: 'Healthcare IT News',
    sourceType: 'News',
    date: '2026-03-16',
    sentiment: 'negative',
    excerpt:
      'Regulators are reportedly preparing updated guidance for AI-based diagnostic systems following a rapid increase in commercial deployments, raising compliance concerns for companies like Meridian.',
  },
  {
    id: 'm7',
    topicId: 'ai-diagnostics',
    headline: "The Race to Put AI in Every Hospital: Who's Winning?",
    source: 'Axios',
    sourceType: 'Blog',
    date: '2026-03-15',
    sentiment: 'neutral',
    excerpt:
      "A roundup of the major players vying for dominance in hospital AI, from Meridian's imaging-focused DiagnostIQ to EHR-integrated solutions from Epic and Oracle Health.",
  },
  {
    id: 'm8',
    topicId: 'clean-energy',
    headline:
      "Maria Chen's Appointment at Solara Energy Boosts Investor Confidence in Utility-Scale Solar",
    source: 'Bloomberg Green',
    sourceType: 'News',
    date: '2026-03-16',
    sentiment: 'positive',
    excerpt:
      "Chen's track record at Verde Power — including overseeing 4.2 GW of new capacity additions — is seen as a strong signal that Solara plans to accelerate its pipeline of utility-scale solar projects.",
  },
  {
    id: 'm9',
    topicId: 'clean-energy',
    headline: 'Global Renewables Investment on Track to Hit $2.1 Trillion in 2026',
    source: 'Reuters',
    sourceType: 'News',
    date: '2026-03-15',
    sentiment: 'positive',
    excerpt:
      'New data from BloombergNEF shows clean energy investment accelerating in Q1 2026, led by solar and offshore wind, with emerging markets accounting for a record 43% of global commitments.',
  },
  {
    id: 'm10',
    topicId: 'clean-energy',
    headline: 'Grid Stability Concerns Cloud Rapid Renewable Expansion in Texas',
    source: 'E&E News',
    sourceType: 'News',
    date: '2026-03-13',
    sentiment: 'negative',
    excerpt:
      'ERCOT officials have flagged growing challenges managing grid frequency as intermittent renewable capacity outpaces investment in storage and dispatchable backup generation in Texas.',
  },
  {
    id: 'm11',
    topicId: 'supply-chain',
    headline: 'Atlas-Greenbridge Merger Creates a New Global Logistics Titan',
    source: 'FreightWaves',
    sourceType: 'News',
    date: '2026-03-17',
    sentiment: 'positive',
    excerpt:
      'The combined Atlas-Greenbridge entity will control an estimated 8% of global contract logistics, creating new competitive pressure on DHL, DB Schenker, and Kuehne+Nagel.',
  },
  {
    id: 'm12',
    topicId: 'supply-chain',
    headline: 'Red Sea Disruptions Continue to Add 11–14 Days to Asia-Europe Shipping Routes',
    source: 'Supply Chain Dive',
    sourceType: 'News',
    date: '2026-03-14',
    sentiment: 'negative',
    excerpt:
      'Major carriers have extended Cape of Good Hope rerouting into Q2 2026, adding significant cost and lead time uncertainty for manufacturers dependent on Asia-to-Europe supply chains.',
  },
  {
    id: 'm13',
    topicId: 'supply-chain',
    headline: 'TerraView-AWS Deal Could Unlock Precision Agriculture Supply Chain Optimization',
    source: 'WSJ',
    sourceType: 'News',
    date: '2026-03-14',
    sentiment: 'neutral',
    excerpt:
      "Analysts see TerraView's satellite data partnership with AWS as a potential game-changer for agricultural supply chains, enabling real-time crop yield forecasting and proactive logistics planning.",
  },
  {
    id: 'm14',
    topicId: 'edtech',
    headline:
      "Bloomfield's LearnPath Expansion Is the Largest Single EdTech Rollout in U.S. History",
    source: 'EdSurge',
    sourceType: 'News',
    date: '2026-03-17',
    sentiment: 'positive',
    excerpt:
      'Adding 500 school districts in a single announcement, Bloomfield EdTech has vaulted LearnPath to national scale. Educators who piloted the platform cite measurable gains in reading and math proficiency.',
  },
  {
    id: 'm15',
    topicId: 'edtech',
    headline: 'EdTech Skeptics Ask: Does Adaptive Learning Actually Improve Outcomes?',
    source: 'Education Week',
    sourceType: 'News',
    date: '2026-03-15',
    sentiment: 'negative',
    excerpt:
      'A new meta-analysis of 34 studies on adaptive learning platforms found mixed results, with significant variation in outcomes depending on implementation quality, teacher training, and student demographics.',
  },
];
