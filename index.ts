import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from "fs";
const server = new McpServer({
  name: "Landing Page",
  version: "1.0.0"
});

const components = [
    {
      "name": "Navbar",
      "description": "Top navigation bar with logo and menu links",
      "props": {
        "logoSrc": "string",
        "links": "Array<{ label: string; href: string }>",
        "sticky": "boolean"
      },
      "example": "<Navbar logoSrc=\"/logo.png\" links={[{ label: 'Home', href: '#' }, { label: 'Features', href: '#features' }]} sticky={true} />"
    },
    {
      "name": "Hero",
      "description": "Hero section with headline, subheadline and primary call‑to‑action button",
      "props": {
        "title": "string",
        "subtitle": "string",
        "ctaText": "string",
        "ctaHref": "string",
        "backgroundImage": "string"
      },
      "example": "<Hero title=\"Welcome to Acme\" subtitle=\"We build amazing things\" ctaText=\"Get Started\" ctaHref=\"#signup\" backgroundImage=\"/hero.jpg\" />"
    },
    {
      "name": "Services",
      "description": "Overview of services or features you offer (merged into one section)",
      "props": {
        "items": "Array<{ icon: string; title: string; description: string }>"
      },
      "example": "<Services items={[{ icon: 'speed', title: 'Fast', description: 'Lightning‑quick delivery' }, { icon: 'secure', title: 'Secure', description: 'Bank‑grade security' }]} />"
    },
    {
      "name": "HowItWorks",
      "description": "Step‑by‑step guide explaining your process",
      "props": {
        "steps": "Array<{ number: number; title: string; description: string }>"
      },
      "example": "<HowItWorks steps={[{ number: 1, title: 'Sign Up', description: 'Create your account' }, { number: 2, title: 'Customize', description: 'Pick your options' }]} />"
    },
    {
      "name": "SocialProof",
      "description": "Testimonials and reviews from happy customers",
      "props": {
        "testimonials": "Array<{ author: string; quote: string; avatar?: string }>"
      },
      "example": "<SocialProof testimonials={[{ author: 'Jane Doe', quote: 'Amazing service!', avatar: '/jane.jpg' }]} />"
    },
    {
      "name": "WhyChooseUs",
      "description": "Key stats or badges to highlight why to trust you",
      "props": {
        "stats": "Array<{ label: string; value: string }>",
        "badges": "Array<{ src: string; alt: string }>"
      },
      "example": "<WhyChooseUs stats={[{ label: 'Users', value: '10k+' }]} badges={[{ src: '/badge1.png', alt: 'Top Rated' }]} />"
    },
    {
      "name": "MeetTheTeam",
      "description": "Profiles of your core team members",
      "props": {
        "members": "Array<{ name: string; role: string; photo: string; bio?: string }>"
      },
      "example": "<MeetTheTeam members={[{ name: 'Alice', role: 'CEO', photo: '/alice.jpg' }]} />"
    },
    {
      "name": "MapContactForm",
      "description": "Embedded map alongside a contact/inquiry form",
      "props": {
        "mapEmbedUrl": "string",
        "formId": "string"
      },
      "example": "<MapContactForm mapEmbedUrl=\"https://maps.google.com/...\" formId=\"contactForm\" />"
    },
    {
      "name": "FAQ",
      "description": "Frequently asked questions accordion",
      "props": {
        "items": "Array<{ question: string; answer: string }>"
      },
      "example": "<FAQ items={[{ question: 'How does it work?', answer: 'Just sign up...' }]} />"
    },
    {
      "name": "Footer",
      "description": "Bottom site footer with links and copyright",
      "props": {
        "logoSrc": "string",
        "links": "Array<{ label: string; href: string }>",
        "copyright": "string"
      },
      "example": "<Footer logoSrc=\"/logo-footer.png\" links={[{ label: 'Privacy', href: '/privacy' }]} copyright=\"© 2025 Acme\" />"
    },
  ]
  ;

server.tool("get_landing_page",
  { },
  async () => ({
    content: [{ type: "text", text: JSON.stringify(components) }]
  })
);

const transport = new StdioServerTransport();
await server.connect(transport);
