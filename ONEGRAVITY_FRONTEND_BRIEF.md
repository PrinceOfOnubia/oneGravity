# OneGravity Frontend Product & Design Brief

## Product Summary

OneGravity is an institutional RWA intelligence terminal for discovering, ranking, and evaluating tokenized real-world asset protocols.

OneGravity is **not** an investment platform, pooling platform, crowdfunding product, or wallet-first DeFi app. It is an intelligence, analytics, and trust-scoring layer for the tokenized real-world asset market.

The product helps users compare RWA protocols across issuer transparency, reserve proof, redemption clarity, liquidity quality, capital flow, yield quality, and risk signals.

The core product signal is the **OneGravity Score**, a comparable trust score that turns fragmented RWA data into a clean intelligence layer.

## Tagline

**One Signal. Infinite Gravity.**

## Core Positioning

**The intelligence layer for tokenized real-world assets.**

OneGravity should feel like a premium financial terminal for the tokenized economy: Bloomberg x Arkham x Stripe, but focused on RWA discovery, protocol rankings, yield intelligence, and trust scoring.

## What OneGravity Does

OneGravity helps users:

- Discover tokenized real-world asset protocols
- Compare protocol quality and risk
- Understand issuer transparency
- Review reserve proof and audit posture
- Evaluate redemption clarity
- Track RWA yield quality
- Monitor capital flow and market signals
- Rank protocols by OneGravity Score

## What OneGravity Is Not

Avoid positioning OneGravity as:

- An investment platform
- A pooling platform
- A crowdfunding app
- A place to buy shares
- A wallet connection product
- A guaranteed yield platform
- A real estate fundraising product

Do not use phrases like:

- Invest now
- Buy shares
- Pool capital
- Crowdfunding
- Guaranteed returns

## Preferred Terminology

Use:

- RWA Intelligence
- Tokenized Asset Discovery
- OneGravity Score
- Issuer Transparency
- Reserve Proof
- Redemption Clarity
- Risk Signals
- Capital Flow
- Yield Quality
- Market Signals
- Protocol Rankings
- RWA Yield Intelligence

## Visual Direction

The interface should feel:

- Institutional
- Cinematic
- Terminal-like
- Premium
- Intelligent
- Data-heavy but clean
- Modern Bloomberg x Arkham x Stripe

Avoid:

- Meme aesthetics
- Cartoon visuals
- Random bright colors
- Noisy glassmorphism
- Overly playful UI
- Cluttered dashboards
- Pages that feel like separate templates

## Global Design System

Every page should feel like the same OneGravity product.

All pages must share:

- Same dark background system
- Same blue/cyan/teal accent system
- Same glow treatment
- Same glass card style
- Same thin border system
- Same typography hierarchy
- Same spacing rhythm
- Same buttons
- Same badges
- Same table styling
- Same sidebar/header/footer structure
- Same responsive behavior

The homepage should be treated as the visual source of truth.

## Color System

Primary backgrounds:

- `#03050A`
- `#05070B`
- `#08111F`

Secondary surfaces:

- `#0B1220`
- `#101827`
- `#111827`
- `#0F172A`

Borders / card strokes:

- `rgba(80,120,255,0.12)`
- `rgba(0,255,255,0.08)`
- `rgba(255,255,255,0.06)`

Primary accent blue:

- `#2563FF`
- `#3B82F6`
- `#4F8CFF`

Electric cyan:

- `#00D1FF`
- `#22D3EE`

Teal accent:

- `#14B8A6`
- `#2DD4BF`

Positive:

- `#22C55E`
- `#16A34A`

Warning:

- `#F59E0B`

Risk / negative:

- `#EF4444`

Text:

- Primary: `#F8FAFC`, `#E5E7EB`
- Secondary: `#94A3B8`, `#64748B`

Gradient references:

- `linear-gradient(135deg, #2563FF 0%, #22D3EE 50%, #2DD4BF 100%)`
- `linear-gradient(180deg, rgba(37,99,255,0.12), rgba(0,0,0,0))`

## Globe Visual Direction

Use the futuristic globe as a core visual element throughout the product.

The globe represents:

- Global capital flow
- Tokenized assets
- Interconnected liquidity
- RWA intelligence
- Institutional financial networks

Use the globe:

- In the homepage hero
- In dashboard hero/banner areas
- In methodology sections
- In subtle page hero backgrounds
- In empty/loading states where appropriate

Do not overuse it. It should feel elegant and premium.

The globe should:

- Blend into the background
- Use opacity, masks, radial gradients, and mix-blend-screen
- Avoid visible rectangular image boundaries
- Never overpower page content
- Become more subtle on mobile

## Required Pages

### Homepage `/`

Goal: introduce OneGravity as the RWA intelligence layer.

Should include:

- Premium dark cinematic hero
- Tagline: “One Signal. Infinite Gravity.”
- Headline around RWA intelligence
- Clear subtext explaining RWA discovery, issuer transparency, reserve proof, yield signals, and OneGravity Score
- CTA buttons:
  - Explore RWAs
  - View Rankings
- Blended globe background
- Market KPI strip
- Protocol preview table
- OneGravity Score explanation
- Footer

### Dashboard `/dashboard`

Goal: main intelligence terminal.

Should include:

- Left sidebar
- Top search bar
- KPI cards
- RWA TVL overview
- TVL by category
- Top protocols
- Market pulse/signals
- Top movers
- Insights panel

### Explore `/explore`

Goal: discover and compare RWA protocols.

Should include:

- Page hero: “Explore RWA Protocols”
- Subtext: “Discover and compare the most trusted tokenized real-world asset protocols.”
- KPI cards
- Search input
- Category filter
- Chain filter
- Risk tier filter
- Protocol count
- Export button
- Main protocol table
- Right filter panel
- OneGravity Score card

Table columns:

- #
- Protocol
- Category
- Chain
- TVL
- Avg. Yield
- OneGravity Score
- Risk Tier
- 7D Change
- Action

### Rankings `/rankings`

Goal: leaderboard ranked by OneGravity Score.

Should include:

- Page hero: “RWA Protocol Rankings”
- Category tabs
- Main leaderboard table
- Ranking Overview panel
- Score Distribution panel
- Top Movers panel
- About OneGravity Rankings section
- Scoring factor strip

Scoring factor strip:

- Issuer Transparency 25%
- Liquidity Quality 20%
- Audit & Reserve Proof 20%
- Redemption Clarity 15%
- Smart Contract Risk 10%
- Counterparty Risk 10%

### Yields `/yields`

Goal: stablecoin and RWA yield intelligence.

Should include:

- Page hero: “RWA Yield Intelligence”
- Subtext: “Real-time stablecoin and RWA yields with risk-adjusted quality metrics.”
- KPI cards
- Yield category tabs
- Yield table
- Yield Highlights panel
- Yield Curve panel
- Yield Heatmap panel
- Yield Quality explainer strip
- Newsletter card

### Methodology `/methodology`

Goal: explain the OneGravity Score framework.

Should include:

- Page hero: “The OneGravity Score”
- Subtext explaining the proprietary intelligence framework
- Last updated text
- Subtle globe background
- “How It Works” section with 8 scoring pillars
- Score Calculation section
- Circular score visual
- Score Interpretation section
- Continuous Improvement section
- CTA strip: “One Signal. Infinite Gravity.”

8 scoring pillars:

1. Issuer Transparency — 25%
2. Reserve Proof — 20%
3. Redemption Clarity — 15%
4. Liquidity Quality — 10%
5. Smart Contract Risk — 10%
6. Counterparty Risk — 10%
7. Market & Capital Flow — 5%
8. Regulatory & Legal — 5%

## Mock Protocol Data

Use these protocols:

- Ondo Finance
- OpenEden
- Maple
- Centrifuge
- Backed
- Superstate
- Franklin Templeton
- Maker/Sky RWA

Use these categories:

- Treasuries
- Private Credit
- Real Estate
- Commodities
- Stablecoin Yield

## Technical Notes

Stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- lucide-react
- recharts where charts are needed

Frontend expectations:

- Use reusable components
- No static screenshots as UI
- All links must work
- No `href="#"`
- Mobile responsive
- Tables should scroll gracefully on small screens
- Sidebar should collapse on mobile
- Header and footer should be consistent across all pages
- `npm run lint` must pass
- `npm run build` must pass

## Component System

Recommended shared components:

- `AppShell`
- `SiteHeader`
- `SiteSidebar`
- `SiteFooter`
- `PageHero`
- `GlobeBackground`
- `MetricCard`
- `DataTable`
- `StatusBadge`
- `FilterPanel`
- `ChartCard`
- `ScoreMeter`
- `YieldHeatmap`
- `GlassCard`
- `SectionShell`
- `PageShell`

## Final Product Feeling

If someone clicks from the homepage to any other page, it should feel like they are still inside the same OneGravity Terminal.

The platform should visually communicate:

**Financial intelligence infrastructure for the tokenized economy.**
