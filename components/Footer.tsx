import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Solutions: [
    { label: "Crypto ETF Platform", href: "/products/crypto-etf" },
    { label: "AI Trading Bots", href: "/products/enterprise-kms" },
    { label: "CEX/DEX Development", href: "/products/cex-dex" },
    { label: "Tokenization & RWA", href: "/products/tokenization-rwa" },
    { label: "Neobank Platform", href: "/products/neobank" },
    { label: "Payment Gateway", href: "/products/payroom" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Why Us", href: "/why-us" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Company Profile", href: "/company-profile" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Documentation", href: "/docs" },
    { label: "Blog", href: "/blog" },
  ],
};

export const Footer = () => {
  return (
    <footer className="py-16 lg:py-20 border-t border-border bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                width={84}
                height={51}
                src={"/logo/iteller-tech-logo.svg"}
                alt="iteller-tech-logo"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs my-4">
              Deep-tech software studio focused on AI, financial technology and
              blockchain.
            </p>
            <p className="text-xs text-muted-foreground">
              Certified knowledge-based company with ISO certifications
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 iTeller. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
