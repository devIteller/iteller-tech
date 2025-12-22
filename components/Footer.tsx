import Link from "next/link";

const footerLinks = {
  Solutions: [
    "AI Trading Bots",
    "CEX/DEX Development",
    "Neobank Platform",
    "Payment Gateway",
    "Tokenization",
  ],
  Company: [
    "About Us",
    "Careers",
    "Blog",
    "Press",
    "Contact",
  ],
  Resources: [
    "Documentation",
    "Case Studies",
    "Whitepapers",
    "API Reference",
  ],
};

export const Footer = () => {
  return (
    <footer className="py-16 lg:py-20 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-heading font-bold text-primary-foreground">iT</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">iTeller</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mb-4">
              Deep-tech studio building the next generation of AI, fintech, and blockchain platforms.
            </p>
            <p className="text-xs text-muted-foreground">
              © 2024 iTeller. All rights reserved.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
          <div className="text-sm text-muted-foreground">
            Built with precision in San Francisco, CA
          </div>
        </div>
      </div>
    </footer>
  );
};
