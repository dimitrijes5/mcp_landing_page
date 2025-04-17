# MCP Landing Page Components Server

A Node.js and Express server that provides API access to landing page components.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

For development with auto-restart:

```bash
npm run dev
```

The server will run on http://localhost:3000

## API Endpoints

- `GET /components` - List all available components
- `GET /components/:name` - Get details for a specific component (e.g., `/components/Navbar`)
- `GET /search?q=keyword` - Search components by name or description

## Components Structure

Each component in `components.json` has the following structure:

```json
{
  "name": "ComponentName",
  "description": "Description of the component",
  "props": {
    "propName": "propType"
  },
  "example": "<ComponentName prop1='value' prop2={value} />"
}
```

## Available Components

The server includes the following components:
- Navbar
- HeroSection
- Services
- HowItWorks
- SocialProof
- WhyChooseUs
- TeamSection
- MapContact
- FAQ
- Footer 