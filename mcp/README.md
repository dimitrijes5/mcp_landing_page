# MCP Landing Page

A simple landing page generator using Model Context Protocol (MCP).

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Cursor IDE

### Installation

1. Clone this repository:
```bash
git clone https://github.com/dimitrijes5/mcp_landing_page.git
cd mcp-landing-page
```

2. Install dependencies:
```bash
npm install
```

### Setting up MCP

To add this MCP to your Cursor IDE, follow these steps:

1. Open or create your Cursor MCP configuration file:
   - Located at `~/.cursor/mcp.json`

2. Add the following configuration:
```json
{
  "mcpServers": {
    "Landing Page": {
      "command": "node /path-to-index.ts"
    }
  }
}
```

3. Restart Cursor to load the new MCP.

## Usage

Once installed, you can use this MCP in Cursor to generate landing page components. The MCP provides a variety of components like:

- Navbar
- Hero
- Services
- Testimonials/Social Proof
- Footer
- And more!

You can request Cursor to create a landing page using MCP by simply asking:

```
Create a landing page using MCP and put it in LandingPage.tsx
```

The LandingPage.tsx file provided in this repository is a template example of a landing page that can be created using the MCP components.

## Available Components

The MCP provides these components:

- **Navbar**: Navigation bar with logo and menu links
- **Hero**: Hero section with headline, subheadline and call-to-action
- **Services**: Overview of services or features
- **HowItWorks**: Step-by-step process explanation
- **SocialProof**: Testimonials from customers
- **WhyChooseUs**: Key stats or badges for trust
- **MeetTheTeam**: Team member profiles
- **MapContactForm**: Map with contact form
- **FAQ**: Frequently asked questions
- **Footer**: Bottom site footer with links and copyright

## Note on React Support

The example LandingPage.tsx uses React. To use it in a project, you'll need to install React dependencies:

```bash
npm install react react-dom @types/react @types/react-dom
```

## License

ISC 