"use client";

import { motion } from "framer-motion";
import { ArrowRight, Chrome } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function Hero() {
  return (
    <header className="relative px-6 md:px-8 pt-32 pb-24 mx-auto text-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="orb orb-1 animate-pulse-glow" />
      <div className="orb orb-2 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <motion.div
          variants={staggerItem}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-8"
        >
          <Chrome className="w-3.5 h-3.5" />
          Chrome Extension
        </motion.div>

        <motion.h1
          variants={staggerItem}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6"
        >
          No-code testing <br />
          <span className="text-gradient">with AI reasoning.</span>
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Build resilient E2E tests without writing code. LessTest&apos;s AI understands
          your intent—so tests heal themselves when UI changes.
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="w-full sm:w-auto">
            Add to Chrome — Free
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            Watch Demo
          </Button>
        </motion.div>

        <motion.p
          variants={staggerItem}
          className="mt-6 text-sm text-slate-500"
        >
          No downloads. No IDE. No configuration. No code.
        </motion.p>
      </motion.div>
    </header>
  );
}
