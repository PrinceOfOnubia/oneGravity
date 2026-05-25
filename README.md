# OneGravity Terminal

OneGravity is an RWA Intelligence and trust scoring platform for tokenized real-world assets.

Tagline: **One Signal. Infinite Gravity.**

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- recharts

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Data and scoring

Mock RWA protocol data lives in `src/lib/rwa-data.ts`.

The OneGravity Score is calculated in `src/lib/scoring.ts` from:

- Issuer Transparency: 25%
- Liquidity: 20%
- Audit / Reserve Proof: 20%
- Redemption Clarity: 15%
- Smart Contract Risk: 10%
- Counterparty Risk: 10%

Risk tiers:

- 85-100: Prime
- 70-84: Strong
- 55-69: Watch
- 0-54: High Risk
