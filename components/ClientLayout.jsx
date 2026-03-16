"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top and close mobile menu on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Work", path: "/work" },
    { name: "Insights", path: "/content" },
{ name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <style>{`
        :root {
          --navy: #0A1F44;
          --electric-blue: #0091FF;
          --mint: #00D9A3;
          --charcoal: #1A1A1A;
          --off-white: #F8FAFC;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link
              href="/"
              className="text-2xl font-bold text-[var(--navy)] tracking-tight"
            >
              Provines Consulting
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === item.path
                      ? "text-[var(--electric-blue)]"
                      : "text-[var(--charcoal)] hover:text-[var(--electric-blue)]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link href="/schedule">
                <Button
                  size="sm"
                  className="bg-[var(--electric-blue)] hover:bg-[var(--navy)] text-white flex items-center"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Call
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-[var(--navy)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block py-2 text-base font-medium transition-colors ${
                    pathname === item.path
                      ? "text-[var(--electric-blue)]"
                      : "text-[var(--charcoal)]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3">
                <Link href="/schedule" className="block">
                  <Button
                    className="w-full bg-[var(--electric-blue)] hover:bg-[var(--navy)] text-white"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book a Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[var(--navy)] text-white mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Provines Consulting</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                12+ years of B2B SaaS marketing leadership — demand gen, GTM, pipeline ops — now applied to building marketing infrastructure for business owners. I don't just build the systems. I understand why they work.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { name: "Home", path: "/" },
                  { name: "Services", path: "/services" },
                  { name: "How It Works", path: "/how-it-works" },
                  { name: "Work", path: "/work" },
                  { name: "About", path: "/about" },
                  { name: "Contact", path: "/contact" },
                  { name: "FAQ", path: "/faq" },
                ].map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="block text-slate-300 hover:text-[var(--mint)] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <p className="text-slate-300 text-sm mb-4">
                Let's talk about what to automate first.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/schedule">
                  <Button
                    className="w-full bg-[var(--mint)] hover:bg-[var(--mint)]/90 text-[var(--navy)] font-semibold"
                  >
                    Book a Call
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    className="w-full bg-[var(--electric-blue)] hover:bg-[var(--electric-blue)]/90 text-white font-semibold"
                  >
                    Send a Message
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Provines Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}
