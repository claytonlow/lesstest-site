"use client";

import { useState, useEffect } from "react";
import { Zap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Zap className="text-white w-5 h-5 fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">
            LessTest
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            How It Works
          </a>
          <Link
            href="/compare"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            Compare
          </Link>
          <Link
            href="/use-cases"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            Use Cases
          </Link>
          <a
            href="#pricing"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            Pricing
          </a>
          <Button size="sm" className="rounded-full">
            Add to Chrome
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 glass border-t border-slate-100">
          <div className="flex flex-col gap-4 pt-4">
            <a
              href="#features"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <Link
              href="/compare"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Compare
            </Link>
            <Link
              href="/use-cases"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Use Cases
            </Link>
            <a
              href="#pricing"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <Button size="sm" className="w-full mt-2">
              Add to Chrome
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
