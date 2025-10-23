# FleetOps - Fleet Management SaaS

A modern, responsive landing page for a fleet management SaaS platform built with Next.js 16, React 19, and Tailwind CSS.

## Features

- **Vehicle Tracking** - Real-time GPS monitoring with live location updates
- **Maintenance Scheduling** - Automated service reminders and predictive analytics
- **Driver Management** - Performance tracking and compliance monitoring
- **Fuel Monitoring** - Consumption analytics and cost optimization

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment platform

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fleet-management-saas
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
fleet-management-saas/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Landing page
│   └── globals.css         # Tailwind styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Feature cards
│   ├── Navigation.tsx      # Header/nav
│   └── Footer.tsx          # Footer
└── public/                 # Static assets
```

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

## License

MIT License - see LICENSE file for details.