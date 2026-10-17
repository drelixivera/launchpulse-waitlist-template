export interface SiteConfig {
  name: string;
  badge: {
    text: string;
    highlight: string;
  };
  headline: {
    regular: string;
    gradient: string;
  };
  subheadline: string;
  perks: string[];
  stats: {
    count: string;
    label: string;
    avatars: string[];
  };
  features: Array<{
    title: string;
    description: string;
    tag: string;
    icon: 'zap' | 'shield' | 'sparkles' | 'barChart' | 'layers' | 'code';
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  footer: {
    copyright: string;
    links: Array<{ label: string; href: string }>;
  };
}

export const siteConfig: SiteConfig = {
  name: "LaunchPulse",
  badge: {
    highlight: "Early Access",
    text: "v1.0 is shipping in November 2026",
  },
  headline: {
    regular: "The modern developer workspace for",
    gradient: "hyper-fast execution.",
  },
  subheadline:
    "Stop wasting hours gluing together brittle boilerplate. LaunchPulse delivers intelligent workflows, instant cloud environments, and turnkey APIs so you can ship today.",
  perks: [
    "Free 6-month Pro access for early signups",
    "Priority access to private Discord",
    "Direct product feedback line with founders",
  ],
  stats: {
    count: "1,240+",
    label: "developers and founders waiting",
    avatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    ],
  },
  features: [
    {
      title: "Zero-Latency Cloud Workspaces",
      description: "Spin up isolated, pre-configured environments with all dependencies installed in under 3 seconds.",
      tag: "Infrastructure",
      icon: "zap",
    },
    {
      title: "Bank-Grade Encryption & Privacy",
      description: "SOC-2 compliant end-to-end encryption. Your code, secrets, and customer data never leave your boundary.",
      tag: "Security",
      icon: "shield",
    },
    {
      title: "Autonomous CI/CD & Deployments",
      description: "Push code and let automated health checks, previews, and rollbacks handle the production pipeline.",
      tag: "Automation",
      icon: "sparkles",
    },
  ],
  faqs: [
    {
      question: "When will I get access to the platform?",
      answer: "We are rolling out private beta invitations in weekly batches starting the first week of November. Early waitlist subscribers get highest priority.",
    },
    {
      question: "Is there any cost during the beta period?",
      answer: "No. Beta testers get complimentary access to our Pro tier for 6 months after public launch as our thank you for your early feedback.",
    },
    {
      question: "Can I invite my team members?",
      answer: "Yes! Once you receive your invite code, you can generate up to 5 teammate passes directly from your dashboard.",
    },
    {
      question: "How do you protect my data and email?",
      answer: "We hate spam as much as you do. We only send critical launch updates, and you can unsubscribe at any time with a single click.",
    },
  ],
  footer: {
    copyright: `© ${new Date().getFullYear()} LaunchPulse, Inc. All rights reserved.`,
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Twitter / X", href: "https://x.com" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },
};
