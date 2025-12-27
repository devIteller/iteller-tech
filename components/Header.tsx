"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#Services" },
  { label: "Why Us", href: "#Why-Us" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-500 ease-out",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b translate-y-0 py-0.5"
            : "bg-transparent "
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                width={84}
                height={51}
                src={"/logo/iteller-tech-logo.svg"}
                alt="iteller-tech-logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#738BB1] hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="ghost" size="sm">
                Download Profile
              </Button>
              <Button variant="hero" size="sm">
                Book Consulation
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <button className="p-2">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle>iTeller</SheetTitle>
                </SheetHeader>

                {/* Mobile Navigation */}
                <nav className="mt-8 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-base text-[#738BB1] hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                {/* Mobile Actions */}
                <div className="mt-8 flex flex-col gap-3">
                  <Button variant="ghost" className="w-full">
                    Download Profile
                  </Button>
                  <Button variant="hero" className="w-full">
                    Book Consultation
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};
