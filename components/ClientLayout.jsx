"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, ChevronDown, Menu, X } from "lucide-react";
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

  // Pages that open on a full-bleed dark stage: dark nav, no framed sheet (approved for /ai-agents and
  // the homepage, Oct 2026).
  const darkStage = pathname === "/" || pathname === "/about" || pathname === "/ai-agents" || pathname.startsWith("/ai-agents/") || pathname === "/ai-consultant";

  // A section stays active on its subpages (e.g. AI Agents on /ai-agents/examples).
  const isActive = (path) => pathname === path || (path !== "/" && pathname.startsWith(path + "/"));

  // A parent with a dropdown is active when any of its pages is.
  const itemActive = (item) => isActive(item.path) || (item.children || []).some((c) => isActive(c.path));

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "AI Agents",
      path: "/ai-agents",
      children: [
        { name: "AI agents for business", path: "/ai-agents", note: "One operator connected to every system" },
        { name: "AI agent examples", path: "/ai-agents/examples", note: "Real jobs, by business function" },
        { name: "AI chief of staff", path: "/ai-agents/chief-of-staff", note: "An agent for the owner's own requests" },
        { name: "AI consultant", path: "/ai-consultant", note: "How an engagement works" },
      ],
    },
    { name: "Work", path: "/work" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Growth Audit", path: "/growth-audit" },
  ];

  return (
    <div className="min-h-screen bp-ground">
      <style>{`
        :root {
          --navy: #0F172A;
          --electric-blue: #0369A1;
          --mint: #7CBFE9;
          --charcoal: #334155;
          --off-white: #F8FAFC;
          --line: #CBD5E1;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        darkStage
          ? "bg-[rgba(6,10,18,0.8)] backdrop-blur-md border-b border-[rgba(148,163,184,0.13)]"
          : isScrolled ? "bg-[var(--off-white)]/95 backdrop-blur-md border-b border-[var(--line)]" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link
              href="/"
              className={`flex items-center gap-2.5 text-2xl font-bold tracking-tight ${darkStage ? "text-[#F8FAFC]" : "text-[var(--navy)]"}`}
            >
              <span className={`inline-flex w-7 h-7 items-center justify-center text-base font-bold ${darkStage ? "bg-[#F8FAFC] text-[var(--navy)]" : "bg-[var(--navy)] text-white"}`} aria-hidden="true">P</span>
              Provines Consulting
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 self-stretch">
              {navItems.map((item) => {
                const link = (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`relative flex items-center gap-1 self-stretch text-sm font-medium transition-colors duration-200 ${
                      darkStage
                        ? itemActive(item)
                          ? "text-[#F8FAFC] after:absolute after:left-0 after:right-0 after:-bottom-px after:h-px after:bg-[#7CBFE9] after:shadow-[0_0_10px_#7CBFE9]"
                          : "text-slate-400 hover:text-[#F8FAFC]"
                        : itemActive(item)
                          ? "text-[var(--electric-blue)]"
                          : "text-[var(--charcoal)] hover:text-[var(--electric-blue)]"
                    }`}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />
                    )}
                  </Link>
                );
                if (!item.children) return link;
                return (
                  <div key={item.path} className="group relative flex self-stretch">
                    {link}
                    {/* Dropdown: opens on hover and on keyboard focus */}
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity duration-150 absolute left-1/2 -translate-x-1/2 top-full w-80">
                      <div className={`py-2 shadow-xl ${darkStage ? "bg-[#0A101C] border border-[rgba(148,163,184,0.22)]" : "bg-white border border-[var(--line)]"}`}>
                        {item.children.map((c) => (
                          <Link
                            key={c.path}
                            href={c.path}
                            className={`block px-5 py-3 transition-colors ${darkStage ? "hover:bg-white/5" : "hover:bg-[var(--off-white)]"}`}
                          >
                            <span className={`block text-sm font-semibold ${
                              pathname === c.path
                                ? darkStage ? "text-[#7CBFE9]" : "text-[var(--electric-blue)]"
                                : darkStage ? "text-[#F8FAFC]" : "text-[var(--navy)]"
                            }`}>
                              {c.name}
                            </span>
                            <span className={`block mt-0.5 text-[13px] ${darkStage ? "text-slate-400" : "text-slate-500"}`}>{c.note}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link href="/schedule">
                <Button
                  size="sm"
                  className="bg-[var(--electric-blue)] hover:bg-[var(--navy)] text-white flex items-center"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a growth audit
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center ${darkStage ? "text-[#F8FAFC]" : "text-[var(--navy)]"}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden shadow-lg ${darkStage ? "bg-[#0A101C] border-t border-[rgba(148,163,184,0.13)]" : "bg-white border-t border-slate-200"}`}>
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
              {navItems.map((item) => item.children ? (
                <div key={item.path}>
                  <span className={`block py-2 text-base font-medium ${
                    itemActive(item)
                      ? darkStage ? "text-[#F8FAFC]" : "text-[var(--electric-blue)]"
                      : darkStage ? "text-slate-400" : "text-[var(--charcoal)]"
                  }`}>
                    {item.name}
                  </span>
                  <div className={`ml-1 pl-4 border-l space-y-1 ${darkStage ? "border-[rgba(148,163,184,0.22)]" : "border-[var(--line)]"}`}>
                    {item.children.map((c) => (
                      <Link
                        key={c.path}
                        href={c.path}
                        className={`block py-1.5 text-[15px] ${
                          pathname === c.path
                            ? darkStage ? "text-[#7CBFE9]" : "text-[var(--electric-blue)]"
                            : darkStage ? "text-slate-300" : "text-[var(--charcoal)]"
                        }`}
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block py-2 text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? darkStage ? "text-[#F8FAFC]" : "text-[var(--electric-blue)]"
                      : darkStage ? "text-slate-400" : "text-[var(--charcoal)]"
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
                    Book a growth audit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content — framed sheet on the drafting-grid ground */}
      {darkStage ? (
        <main>{children}</main>
      ) : (
        <main className="pt-20">
          <div className="mx-auto max-w-[1200px] bg-white border-x border-[var(--line)] border-t-[3px] border-t-[var(--navy)]">
            {children}
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-[var(--navy)] text-white mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Provines Consulting</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Website, CRM, and ads you own, run by an AI operator you direct. 12 years of B2B SaaS experience. I build it, hand you the keys, and get out of the way.
              </p>
              <p className="mt-4 text-slate-400 text-sm">San Jose, California</p>
              <a
                href="https://www.linkedin.com/company/provines-consulting"
                target="_blank"
                rel="noopener"
                className="inline-block mt-2 text-slate-300 hover:text-[var(--mint)] transition-colors text-sm"
              >
                Provines Consulting on LinkedIn
              </a>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { name: "Home", path: "/" },
                  { name: "AI Agents", path: "/ai-agents" },
                  { name: "AI Agent Examples", path: "/ai-agents/examples" },
                  { name: "AI Chief of Staff", path: "/ai-agents/chief-of-staff" },
                  { name: "AI Consultant", path: "/ai-consultant" },
                  { name: "About", path: "/about" },
                  { name: "Work", path: "/work" },
                  { name: "How It Works", path: "/how-it-works" },
                  { name: "Growth Audit", path: "/growth-audit" },
                  { name: "Schedule", path: "/schedule" },
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
                Let&apos;s figure out what you need.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/growth-audit" className="text-slate-300 hover:text-[var(--mint)] transition-colors text-sm">What&apos;s a growth audit?</Link>
                <Link href="/schedule">
                  <Button
                    className="w-full bg-[var(--mint)] hover:bg-[var(--mint)]/90 text-[var(--navy)] font-semibold"
                  >
                    Book a growth audit
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
