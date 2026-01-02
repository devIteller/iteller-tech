export interface UseCase {
  text: string;
}

export interface Feature {
  icon: string;
  title: string;
  items: string[];
}

export interface KeyFeatureCard {
  title: string;
  description: string;
}

export interface WhyChooseItem {
  text: string;
}

export interface PlatformData {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  overview: string;
  useCases: UseCase[];
  features: Feature[];
  useCasesTitle: string;
  featuresTitle: string;
  keyFeaturesTitle: string;
  keyFeatures?: KeyFeatureCard[];
  whyChoose: WhyChooseItem[];
}

export const platforms: Record<string, PlatformData> = {
  'crypto-etf': {
    id: 'crypto-etf',
    name: 'Crypto ETF Platform',
    longDescription: 'A full platform for launching and managing spot, futures and hybrid crypto ETFs with NAV calculation, tokenized units, investor dashboards and on-chain transparency.',
    shortDescription: 'The iTeller Crypto ETF Platform gives you everything you need to launch and manage ETF-style products in digital assets. From investor onboarding and NAV calculation to creation/redemption and reporting, the platform is designed for regulated brokers, asset managers and OTC desks.',
    tags: ['Crypto', 'ETF', 'Asset Management'],
    overview: 'The iTeller Crypto ETF Platform gives you everything you need to launch and manage ETF-style products in digital assets. From investor onboarding and NAV calculation to creation/redemption and reporting, the platform is designed for regulated brokers, asset managers and OTC desks.',
    useCasesTitle: "Who It's For",
    useCases: [
      { text: 'Crypto exchanges and brokers expanding into structured products' },
      { text: 'Asset and wealth managers launching crypto funds or ETFs' },
      { text: 'OTC desks that want a robust back-office and investor interface' },
      { text: 'Banks and fintechs exploring digital-asset investment products' }
    ],
    featuresTitle: "Key Features",
    features: [
      {
        icon: 'calculator',
        title: 'NAV Calculation',
        items: [
          'Automated NAV per share/unit based on real-time market prices and portfolio holdings',
          'Support for multiple strategies (spot, futures, baskets)',
          'Exportable NAV reports for investors, regulators and auditors'
        ]
      },
      {
        icon: 'layout-dashboard',
        title: 'Investor Dashboards',
        items: [
          'Web dashboards and mobile-friendly views',
          'Portfolio holdings, performance charts and transaction history',
          'Statements, reports and notifications in one place'
        ]
      },
      {
        icon: 'shield-check',
        title: 'Proof-of-Reserve & Transparency',
        items: [
          'On-chain and off-chain proof-of-reserve models',
          'Public or private transparency dashboards',
          'Full audit trail of portfolio changes and operations'
        ]
      },
      {
        icon: 'refresh-cw',
        title: 'Creation & Redemption',
        items: [
          'Controlled workflows for issuing and redeeming ETF units',
          'Role-based access for managers, partners and operators',
          'Configurable fees, minimums and lock-up rules'
        ]
      },
      {
        icon: 'trending-up',
        title: 'Market-Making & Liquidity APIs',
        items: [
          'APIs for connecting market makers and liquidity providers',
          'Order routing to exchanges and liquidity venues',
          'Support for OTC block trades and request-for-quote (RFQ) flows'
        ]
      },
      {
        icon: 'shield',
        title: 'Compliance & Risk',
        items: [
          'KYC/AML-ready investor onboarding',
          'Whitelisting, blacklisting and jurisdiction controls',
          'Activity log of all operations and critical actions'
        ]
      }
    ],
    keyFeaturesTitle: "Why Choose Our ETF Platform?",
    whyChoose: [
      { text: 'Built specifically for crypto and digital assets' },
      { text: 'Modular – start with simple spot ETF (OTC-style) and scale later' },
      { text: 'Serves as a standalone platform or integrates into your existing exchange / app' }
    ]
  },
  'tokenization-rwa': {
    id: 'tokenization-rwa',
    name: 'Tokenization & RWA Suite',
     longDescription: 'From legal and technical design to smart contracts and investor portals – tokenize real estate, metals, equity or cash-flow-producing businesses.',
    shortDescription: 'Our Tokenization & RWA Suite helps you transform illiquid assets into programmable, tradable tokens. We provide the contracts, portals and workflows required to issue, manage and trade these tokens in a compliant way.',
    tags: ['RWA', 'Tokenization', 'Real Estate'],
    overview: 'Our Tokenization & RWA Suite helps you transform illiquid assets into programmable, tradable tokens. We provide the contracts, portals and workflows required to issue, manage and trade these tokens in a compliant way.',
    useCasesTitle: "Assets You Can Tokenize",
    useCases: [
      { text: 'Real estate (single properties or portfolios)' },
      { text: 'Revenue-sharing businesses and SPVs' },
      { text: 'Investment funds and private equity' },
      { text: 'Metals, commodities and other tangible assets' },
      { text: 'Invoices, receivables and cash-flow streams' }
    ],
    featuresTitle: "Core Modules",
    features: [
      {
        icon: 'file-text',
        title: 'Issuer Portal',
        items: [
          'Create and configure new offerings',
          'Set caps, prices, lock-ups and distribution rules',
          'Manage investors, documents and updates'
        ]
      },
      {
        icon: 'users',
        title: 'Investor Portal',
        items: [
          'Investor registration, KYC and accreditation checks',
          'Subscription, payment and wallet address collection',
          'Portfolio dashboards, distribution history and statements'
        ]
      },
      {
        icon: 'code',
        title: 'Smart Contracts',
        items: [
          'Minting, burning and transferring tokenized units',
          'Automated income distribution (profit share, interest, rent)',
          'Governance features (voting, proposals) when needed'
        ]
      },
      {
        icon: 'repeat',
        title: 'Secondary Trading & Liquidity',
        items: [
          'Bulletin board or integrated exchange for peer-to-peer trades',
          'Price discovery modules and order book integration',
          'Optional buyback, redemption or market-maker flows'
        ]
      }
    ],
    keyFeaturesTitle: "Compliance, Risk & Operations",
    whyChoose: [
      { text: 'Full KYC/AML/KYB integration' },
      { text: 'Jurisdiction-based access rules and restrictions' },
      { text: 'Whitelisting / blacklisting logic built into contracts' },
      { text: 'Reporting for regulators, auditors and partners' }
    ]
  },
  'payroom': {
    id: 'payroom',
    name: 'Payroom Safe-Payment',
    longDescription: 'A secure platform for B2B and B2C payments, online cheques, milestones, recurring salaries and supplier payouts – powered by crypto rails.',
    shortDescription: 'Payroom is designed for companies, marketplaces, freelancers and remote teams who need guaranteed, trackable payments rather than simple one-off transfers. Funds are locked until conditions are met, then automatically released.',
    tags: ['Payments', 'Escrow', 'B2B'],
    overview: 'Payroom is designed for companies, marketplaces, freelancers and remote teams who need guaranteed, trackable payments rather than simple one-off transfers. Funds are locked until conditions are met, then automatically released.',
    useCasesTitle: "Main Use Cases",
    useCases: [
      { text: 'B2B contracts with clear deliverables and milestones' },
      { text: 'Freelancer and agency payments' },
      { text: 'Marketplace buyer-seller protection' },
      { text: 'Global payroll for remote teams and contractors' }
    ],
    featuresTitle: "Core Features",
    features: [
      {
        icon: 'shield-check',
        title: 'Escrow-Style Safe Payments',
        items: [
          'Buyer funds are locked until work is completed or goods are delivered',
          'Milestones with partial releases',
          'Clear, auditable payment history'
        ]
      },
      {
        icon: 'file-contract',
        title: 'Contracts & Online Cheques',
        items: [
          'Simple contract templates for work, services or sales',
          'Digital \'online cheque\' flows for one-time or post-dated payments',
          'Notifications and reminders for both parties'
        ]
      },
      {
        icon: 'banknote',
        title: 'Payroll & Mass Payouts',
        items: [
          'Bulk upload of payouts for employees and contractors',
          'Role-based access for HR, finance and management',
          'Exportable reports for accounting'
        ]
      },
      {
        icon: 'coins',
        title: 'Crypto & Stablecoin Settlement',
        items: [
          'Use crypto or stablecoins as the settlement layer',
          'Optional conversion to local currency via your partners',
          '24/7 settlement, low fees, cross-border friendly'
        ]
      },
      {
        icon: 'alert-triangle',
        title: 'Risk & Dispute Management',
        items: [
          'Configurable dispute windows and resolution flows',
          'Arbitration or manual approval by admin',
          'Activity log for legal and audit compliance'
        ]
      }
    ],
    keyFeaturesTitle: "Why Payroom?",
    whyChoose: [
      { text: 'Protects both payer and payee' },
      { text: 'No central bank, cross-border deals and high-value contracts' },
      { text: 'Integrates with your existing platform via APIs or widgets' }
    ]
  },
'cex-dex': {
    id: 'cex-dex',
    name: 'CEX / DEX Infrastructure',
    shortDescription: 'Battle-tested exchange engines, order books, AMM pools, OTC desks and liquidity management tools ready to be customized for your jurisdiction.',
    longDescription: 'The CEX / DEX Infrastructure from iTeller is a set of modular components that can power a new exchange or upgrade your existing stack. Choose only what you need: spot, margin, derivatives, AMM pools, launchpad, OTC, copy trading and more.',
    tags: ['Exchange', 'CEX', 'DEX'],
    overview: 'The CEX / DEX Infrastructure from iTeller is a set of modular components that can power a new exchange or upgrade your existing stack. Choose only what you need: spot, margin, derivatives, AMM pools, launchpad, OTC, copy trading and more.',
    useCasesTitle: "Centralized Exchange (CEX) Modules",
    useCases: [
      { text: 'High-performance, low-latency matching engine' },
      { text: 'Market, limit and advanced order types' },
      { text: 'Integration with preferred custodians or self-custody setups' },
      { text: 'Automated deposits, withdrawals and reconciliations' }
    ],
    featuresTitle: "Centralized Exchange (CEX) Modules",
    features: [
      {
        icon: 'trending-up',
        title: 'Matching Engine & Order Book',
        items: [
          'High-performance, low-latency engine',
          'Market, limit and advanced order types',
          'Fee tiers, maker/taker models and rebates'
        ]
      },
      {
        icon: 'wallet',
        title: 'Wallets & Custody',
        items: [
          'Integration with your preferred custodians or self-custody setups',
          'Hot, warm and cold wallet structures',
          'Automated deposits, withdrawals and reconciliations'
        ]
      },
      {
        icon: 'shield-check',
        title: 'Risk, Compliance & Admin',
        items: [
          'Balance checks, exposure and liquidation logic for leverage',
          'KYC/KYT integration and monitoring',
          'Admin portal for listings, limits, promotions and user management'
        ]
      },
      {
        icon: 'users',
        title: 'Copy & Social Trading',
        items: [
          'Follow top traders automatically',
          'Revenue share models and performance statistics',
          'Controls for maximum risk per follower'
        ]
      }
    ],
    keyFeaturesTitle: "Why Use Our Infrastructure?",
    whyChoose: [
      { text: 'Production-grade architecture, horizontally scalable' },
      { text: 'Flexible: white-label frontend or fully custom UI' },
      { text: 'Can be deployed on-premise or in your preferred cloud' }
    ]
  },
  'enterprise-kms': {
    id: 'enterprise-kms',
    name: 'Enterprise Tools & KMS',
    shortDescription: 'KMS platforms, document workflows, CRM/ERP integrations and internal AI assistants that keep your knowledge, code and operations under control.',
    longDescription: 'Beyond customer-facing products, iTeller builds internal tools that organize your information, automate processes and give your teams AI copilots for daily work.',
    tags: ['Enterprise', 'KMS', 'AI'],
    overview: 'Beyond customer-facing products, iTeller builds internal tools that organize your information, automate processes and give your teams AI copilots for daily work.',
    useCasesTitle: "What We Offer",
    useCases: [
      { text: 'Centralized knowledge bases, policies, SOPs and user manuals' },
      { text: 'Document versioning, approval flows and audit trails' },
      { text: 'AI agents trained on your internal docs and data' },
      { text: 'Integration with existing CRM, ERP and accounting tools' }
    ],
    featuresTitle: "What We Offer",
    features: [
      {
        icon: 'book-open',
        title: 'Knowledge Management Systems (KMS)',
        items: [
          'Centralized knowledge bases, policies, SOPs and user manuals',
          'Powerful search, categorization, tags and roles',
          'Knowledge and access control so the right people see the right content'
        ]
      },
      {
        icon: 'file-text',
        title: 'Document Workflows & Approvals',
        items: [
          'Document versioning, approval flows and audit trails',
          'Multi-step approvals with notifications and draft tools',
          'Integration with e-signature providers and storage systems'
        ]
      },
      {
        icon: 'cpu',
        title: 'Internal AI Assistants',
        items: [
          'AI agents trained on your internal docs and data',
          'Q&A bots, document support, code Q&A, HR chatbots',
          'Custom domain and logic to keep your IP confidential'
        ]
      },
      {
        icon: 'link',
        title: 'Integrations & APIs',
        items: [
          'Integration with existing CRM, ERP and accounting tools',
          'Data pipelines for analytics and BI dashboards',
          'Webhooks and event-driven mechanisms for automation'
        ]
      }
    ],
    keyFeaturesTitle: "Benefits for Your Organization",
    whyChoose: [
      { text: 'Less time spent searching for information' },
      { text: 'Faster onboarding for new staff and partners' },
      { text: 'Fewer manual errors in repetitive processes' },
      { text: 'Clear governance and auditability' }
    ]
  },
  'neobank': {
    id: 'neobank',
    name: 'Neobank Platform',
    shortDescription: 'A ready-to-customize blockchain-enabled digital bank combining traditional accounts with investment, crypto wallets and automated asset allocation.',
    longDescription: 'A ready-to-customize digital banking stack combining traditional accounts with investments, crypto wallets and automated asset allocation.',
    tags: ['Digital KYC', 'Multi-Currency', 'Crypto Integration'],
    overview: 'The iTeller Neobank Platform provides all the core modules you need to run a modern digital bank or EMI: onboarding, accounts, cards, transfers, FX and investments – with optional crypto and stablecoin support.',
    useCasesTitle: "Use Cases",
    useCases: [
      { text: 'Retail neobank for individuals' },
      { text: 'SME banking app for small and medium businesses' },
      { text: 'Digital wallet / super-app offering payments + investments' },
      { text: 'EMI or payment institution that wants a better front end and back office' }
    ],
    featuresTitle: "Core Banking Modules",
    features: [
      {
        icon: 'users',
        title: 'Digital Onboarding & KYC',
        items: [
          'Fully digital account opening from mobile and web',
          'KYC/KYB, liveness check and risk scoring',
          'Support for multiple jurisdictions and risk policies'
        ]
      },
      {
        icon: 'wallet',
        title: 'Accounts & Wallets',
        items: [
          'Multi-currency accounts and internal wallets',
          'Sub-accounts (e.g. savings, tax, bills)',
          'Real-time balances and statements'
        ]
      },
      {
        icon: 'credit-card',
        title: 'Cards & Payments',
        items: [
          'Virtual and physical card integrations (via your processors)',
          'Local payments (e.g. salary, utility, merchant)',
          'International transfers and FX'
        ]
      },
      {
        icon: 'trending-up',
        title: 'Investment Products',
        items: [
          'Savings plans, term deposits and investment portfolios',
          'Automated recurring investments (DCA)',
          'Performance tracking and portfolio overviews'
        ]
      },
      {
        icon: 'bitcoin',
        title: 'Crypto & Stablecoin Integration',
        items: [
          'Crypto wallets (hot, warm, cold)',
          'Buy, sell and swap functionality',
          'Stablecoin payments and conversion'
        ]
      }
    ],
    keyFeaturesTitle: "Why Choose Our ETF Platform?",
    keyFeatures: [
      {
        title: 'Built Office, Risk & Compliance',
        description: 'AML/KYC/KYB customer management, limits and approval workflows'
      },
      {
        title: 'Transaction monitoring, alerts and internal dispute tools',
        description: 'Comprehensive monitoring and dispute resolution'
      },
      {
        title: 'Delegated or role-by support, operations and compliance',
        description: 'Role-based access control'
      },
      {
        title: 'Reporting modules for banks, partners and regulators',
        description: 'Complete reporting infrastructure'
      }
    ],
    whyChoose: [
      { text: 'Built to comply with both traditional banking and digital asset sectors' },
      { text: 'UI optimized for speed and simplicity' },
      { text: 'Flexible enough for bots, regional or global launches' }
    ]
  },
};
