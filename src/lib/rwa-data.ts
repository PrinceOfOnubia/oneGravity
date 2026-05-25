import { calculateOneGravityScore, getRiskTier, type RiskTier } from "./scoring";

export type ProtocolCategory = "Treasuries" | "Private Credit" | "Real Estate" | "Commodities" | "Stablecoin Yield";

export type Protocol = {
  name: string;
  slug: string;
  category: ProtocolCategory;
  chain: string;
  tvl: string;
  avgYield: string;
  apy: string;
  liquidity: string;
  sevenDayChange: string;
  description: string;
  transparencyScore: number;
  auditScore: number;
  redemptionScore: number;
  liquidityScore: number;
  counterpartyRisk: number;
  smartContractRisk: number;
  oneGravityScore: number;
  verdict: string;
  riskTier: RiskTier;
  issuerTransparency: string;
  reserveProof: string;
  redemptionClarity: string;
  liquidityQuality: string;
  redemptionModel: string;
  auditReserveStatus: string;
  riskSignals: string[];
  capitalFlow: string;
  yieldQuality: string;
};

const rawProtocols = [
  {
    name: "Ondo Finance",
    slug: "ondo",
    category: "Treasuries",
    chain: "Ethereum, Solana",
    tvl: "$650M",
    avgYield: "4.95%",
    apy: "4.95%",
    liquidity: "High",
    sevenDayChange: "+9.31%",
    description: "Institutional tokenized treasury products with strong disclosure depth and growing secondary-market awareness.",
    transparencyScore: 88,
    auditScore: 84,
    redemptionScore: 82,
    liquidityScore: 86,
    counterpartyRisk: 24,
    smartContractRisk: 18,
    issuerTransparency: "Publishes fund structure, product docs, and recurring market disclosures.",
    reserveProof: "Reserve reporting and institutional custodian details are available.",
    redemptionClarity: "Defined primary-market redemption process with eligibility controls.",
    liquidityQuality: "High liquidity quality across flagship treasury products.",
    redemptionModel: "Defined primary-market redemption process with eligibility controls.",
    auditReserveStatus: "Reserve reporting and institutional custodian details are available.",
    riskSignals: ["Permissioned access", "Treasury duration exposure", "Issuer dependency"],
    capitalFlow: "Consistent institutional inflow profile across treasury products.",
    yieldQuality: "Treasury-backed yield with comparatively clean source attribution.",
    verdict: "Ondo screens as a high-trust treasury RWA issuer with strong disclosure depth and market liquidity."
  },
  {
    name: "Maple",
    slug: "maple",
    category: "Private Credit",
    chain: "Ethereum, Base",
    tvl: "$310M",
    avgYield: "12.34%",
    apy: "12.34%",
    liquidity: "Medium",
    sevenDayChange: "+12.18%",
    description: "Private credit marketplace with pool-level underwriting, manager reporting, and differentiated yield quality.",
    transparencyScore: 77,
    auditScore: 76,
    redemptionScore: 70,
    liquidityScore: 68,
    counterpartyRisk: 42,
    smartContractRisk: 26,
    issuerTransparency: "Pool-level reporting and borrower updates are available with varying cadence.",
    reserveProof: "Protocol audits are visible; asset-level reserve proof varies by pool.",
    redemptionClarity: "Credit pools depend on loan tenor, pool liquidity, and manager terms.",
    liquidityQuality: "Medium liquidity quality with pool-specific exit assumptions.",
    redemptionModel: "Credit pools depend on loan tenor, pool liquidity, and manager terms.",
    auditReserveStatus: "Protocol audits are visible; asset-level reserve proof varies by pool.",
    riskSignals: ["Private credit exposure", "Manager underwriting risk", "Liquidity windows"],
    capitalFlow: "Demand is strongest in higher-yield credit pools.",
    yieldQuality: "Yield is credit-driven and needs borrower-level risk review.",
    verdict: "Maple offers meaningful credit intelligence, but liquidity and counterparty dispersion require active monitoring."
  },
  {
    name: "Centrifuge",
    slug: "centrifuge",
    category: "Private Credit",
    chain: "Centrifuge, Ethereum",
    tvl: "$285M",
    avgYield: "9.21%",
    apy: "9.21%",
    liquidity: "Medium",
    sevenDayChange: "+8.63%",
    description: "RWA credit network connecting tokenized structured credit pools with onchain capital rails.",
    transparencyScore: 74,
    auditScore: 78,
    redemptionScore: 67,
    liquidityScore: 64,
    counterpartyRisk: 46,
    smartContractRisk: 24,
    issuerTransparency: "Asset originator data and pool reporting are available but heterogeneous.",
    reserveProof: "Protocol audits are present; reserve proof depends on asset originator reporting.",
    redemptionClarity: "Pool-specific liquidity with structured finance style settlement assumptions.",
    liquidityQuality: "Medium liquidity quality with originator-specific constraints.",
    redemptionModel: "Pool-specific liquidity with structured finance style settlement assumptions.",
    auditReserveStatus: "Protocol audits are present; reserve proof depends on asset originator reporting.",
    riskSignals: ["Originator concentration", "Offchain servicing risk", "Pool-specific liquidity"],
    capitalFlow: "Capital is diversified across private credit and structured asset pools.",
    yieldQuality: "Higher headline yield offset by originator and servicing complexity.",
    verdict: "Centrifuge is a mature RWA credit network with granular opportunity data and meaningful offchain risk."
  },
  {
    name: "Backed",
    slug: "backed",
    category: "Commodities",
    chain: "Ethereum, Gnosis",
    tvl: "$180M",
    avgYield: "5.12%",
    apy: "5.12%",
    liquidity: "Medium",
    sevenDayChange: "-1.23%",
    description: "Tokenized securities infrastructure with documented reserve references and eligibility-controlled access.",
    transparencyScore: 82,
    auditScore: 80,
    redemptionScore: 76,
    liquidityScore: 72,
    counterpartyRisk: 31,
    smartContractRisk: 22,
    issuerTransparency: "Provides token documentation, asset references, and issuer-level disclosures.",
    reserveProof: "Reserve attestations and legal documentation are visible for covered products.",
    redemptionClarity: "Qualified redemption framework with jurisdiction and eligibility constraints.",
    liquidityQuality: "Medium liquidity quality with product-specific market depth.",
    redemptionModel: "Qualified redemption framework with jurisdiction and eligibility constraints.",
    auditReserveStatus: "Reserve attestations and legal documentation are visible for covered products.",
    riskSignals: ["Jurisdiction constraints", "Product-specific liquidity", "Brokerage dependency"],
    capitalFlow: "Steady demand for tokenized public securities exposure.",
    yieldQuality: "Yield quality depends on the referenced security and reserve reporting cadence.",
    verdict: "Backed shows strong asset documentation and a practical redemption model with jurisdictional caveats."
  },
  {
    name: "OpenEden",
    slug: "openeden",
    category: "Treasuries",
    chain: "Ethereum",
    tvl: "$150M",
    avgYield: "4.67%",
    apy: "4.67%",
    liquidity: "Medium",
    sevenDayChange: "+15.42%",
    description: "Tokenized T-bill access with conservative yield source attribution and visible reserve reporting.",
    transparencyScore: 86,
    auditScore: 83,
    redemptionScore: 80,
    liquidityScore: 74,
    counterpartyRisk: 28,
    smartContractRisk: 20,
    issuerTransparency: "Treasury bill product disclosures and reserve reporting are central to the product.",
    reserveProof: "Reserve proof posture is comparatively strong for treasury exposure.",
    redemptionClarity: "Clear subscription and redemption windows for qualified participants.",
    liquidityQuality: "Medium liquidity quality shaped by subscription and redemption windows.",
    redemptionModel: "Clear subscription and redemption windows for qualified participants.",
    auditReserveStatus: "Reserve proof posture is comparatively strong for treasury exposure.",
    riskSignals: ["Permissioned access", "Settlement timing", "Custodial dependency"],
    capitalFlow: "Focused inflows into tokenized T-bill exposure.",
    yieldQuality: "Treasury-backed yield with clear asset source and conservative risk profile.",
    verdict: "OpenEden ranks well for treasury transparency and yield quality, with permissioned access as the main constraint."
  },
  {
    name: "Superstate",
    slug: "superstate",
    category: "Treasuries",
    chain: "Ethereum",
    tvl: "$240M",
    avgYield: "4.72%",
    apy: "4.72%",
    liquidity: "Medium",
    sevenDayChange: "+4.84%",
    description: "Tokenized fund infrastructure focused on regulated treasury exposure and issuer-grade reporting.",
    transparencyScore: 89,
    auditScore: 82,
    redemptionScore: 81,
    liquidityScore: 73,
    counterpartyRisk: 25,
    smartContractRisk: 19,
    issuerTransparency: "Registered fund orientation with detailed investor materials and public filings.",
    reserveProof: "Traditional fund controls and reserve reporting support the structure.",
    redemptionClarity: "Fund-based redemptions with eligibility and timing rules.",
    liquidityQuality: "Medium liquidity quality with regulated fund timing rules.",
    redemptionModel: "Fund-based redemptions with eligibility and timing rules.",
    auditReserveStatus: "Traditional fund controls and reserve reporting support the structure.",
    riskSignals: ["Transfer restrictions", "Fund settlement rules", "Regulated product constraints"],
    capitalFlow: "Institutional-grade treasury demand with strong product clarity.",
    yieldQuality: "High-quality treasury yield with robust issuer disclosure.",
    verdict: "Superstate has a strong trust profile due to institutional fund structure and issuer clarity."
  },
  {
    name: "Franklin Templeton",
    slug: "franklin-templeton",
    category: "Treasuries",
    chain: "Stellar, Polygon",
    tvl: "$420M",
    avgYield: "4.58%",
    apy: "4.58%",
    liquidity: "High",
    sevenDayChange: "+6.05%",
    description: "Regulated tokenized money market fund infrastructure from a major asset manager.",
    transparencyScore: 92,
    auditScore: 88,
    redemptionScore: 84,
    liquidityScore: 82,
    counterpartyRisk: 18,
    smartContractRisk: 16,
    issuerTransparency: "Highly visible regulated issuer with established fund disclosures.",
    reserveProof: "Institutional reporting and regulated fund oversight are core strengths.",
    redemptionClarity: "Traditional fund redemption model adapted to tokenized transfer rails.",
    liquidityQuality: "High liquidity quality for permissioned tokenized treasury fund access.",
    redemptionModel: "Traditional fund redemption model adapted to tokenized transfer rails.",
    auditReserveStatus: "Institutional reporting and regulated fund oversight are core strengths.",
    riskSignals: ["Transfer agent dependency", "Permissioned rails", "Fund timing rules"],
    capitalFlow: "Large incumbent asset manager distribution and treasury fund demand.",
    yieldQuality: "Conservative treasury yield with strong issuer credibility.",
    verdict: "Franklin Templeton is one of the clearest Prime-tier examples of regulated tokenized fund infrastructure."
  },
  {
    name: "Maker/Sky RWA",
    slug: "maker-sky-rwa",
    category: "Private Credit",
    chain: "Ethereum",
    tvl: "$2.1B",
    avgYield: "5.00%",
    apy: "5.00%",
    liquidity: "High",
    sevenDayChange: "+7.91%",
    description: "Large stablecoin-linked RWA allocation system with governance visibility and deep liquidity signals.",
    transparencyScore: 80,
    auditScore: 79,
    redemptionScore: 74,
    liquidityScore: 88,
    counterpartyRisk: 33,
    smartContractRisk: 21,
    issuerTransparency: "Governance reporting gives visibility into RWA allocations and counterparties.",
    reserveProof: "Collateral reporting is visible; reserve proof spans multiple counterparties.",
    redemptionClarity: "Indirect exposure through stablecoin system mechanics and governance controls.",
    liquidityQuality: "High liquidity quality through stablecoin market depth and governance-managed allocations.",
    redemptionModel: "Indirect exposure through stablecoin system mechanics and governance controls.",
    auditReserveStatus: "Collateral reporting is visible; reserve proof spans multiple counterparties.",
    riskSignals: ["Governance dependency", "Counterparty concentration", "Stablecoin mechanism risk"],
    capitalFlow: "Large capital base tied to stablecoin demand and treasury allocation strategy.",
    yieldQuality: "Risk-adjusted yield is strong, but attribution spans protocol and offchain counterparties.",
    verdict: "Maker/Sky has deep liquidity and mature reporting, balanced by governance and multi-counterparty complexity."
  }
] satisfies Omit<Protocol, "oneGravityScore" | "riskTier">[];

export const protocols: Protocol[] = rawProtocols.map((protocol) => {
  const oneGravityScore = calculateOneGravityScore(protocol);
  return {
    ...protocol,
    oneGravityScore,
    riskTier: getRiskTier(oneGravityScore)
  };
});

export const categories: Array<"All" | ProtocolCategory> = [
  "All",
  "Treasuries",
  "Private Credit",
  "Real Estate",
  "Commodities",
  "Stablecoin Yield"
];

export const marketStats = [
  { label: "Total RWA TVL", value: "$4.21B", delta: "+8.41% 7D" },
  { label: "Avg. Stablecoin Yield", value: "7.38%", delta: "+0.56% 7D" },
  { label: "Protocols Tracked", value: "183", delta: "Across 12 chains" },
  { label: "7D Net Inflow", value: "$1.02B", delta: "+14.27% 7D" },
  { label: "Avg. OneGravity Score", value: "82", delta: "Strong tier" }
];

export function getProtocolBySlug(slug: string) {
  return protocols.find((protocol) => protocol.slug === slug);
}

export const rankedProtocols = [...protocols].sort((a, b) => b.oneGravityScore - a.oneGravityScore);

export const tvlOverview = [
  { date: "Apr 20", tvl: 2.92 },
  { date: "Apr 24", tvl: 3.45 },
  { date: "Apr 28", tvl: 3.08 },
  { date: "May 02", tvl: 3.38 },
  { date: "May 06", tvl: 3.71 },
  { date: "May 10", tvl: 3.88 },
  { date: "May 14", tvl: 4.07 },
  { date: "May 18", tvl: 4.21 }
];

export const sectorComposition = [
  { name: "Treasuries", value: 52.1 },
  { name: "Private Credit", value: 24.7 },
  { name: "Stablecoin Yield", value: 12.3 },
  { name: "Real Estate", value: 6.2 },
  { name: "Other", value: 4.7 }
];

export const yieldHeatmap = [
  { sector: "Treasuries", quality: "Prime", yield: "4.8%", intensity: 82 },
  { sector: "Credit", quality: "Strong", yield: "10.7%", intensity: 71 },
  { sector: "Stablecoin Yield", quality: "Strong", yield: "5.0%", intensity: 76 },
  { sector: "Real Estate", quality: "Watch", yield: "7.2%", intensity: 48 },
  { sector: "Commodities", quality: "Watch", yield: "5.1%", intensity: 55 }
];

export const marketSignals = [
  { label: "U.S. 10Y Treasury Yield", value: "4.42%", delta: "-0.06%" },
  { label: "Stablecoin Supply", value: "$160.2B", delta: "+1.32%" },
  { label: "RWA Market Cap", value: "$4.21B", delta: "+8.41%" },
  { label: "Avg. Real Yield", value: "3.27%", delta: "+0.18%" }
];

export const latestInsights = [
  "Treasury-backed RWAs are seeing increased inflows this week.",
  "Credit protocols show higher yield dispersion and tighter redemption assumptions.",
  "Reserve proof quality remains the strongest differentiator among Prime-tier issuers."
];
