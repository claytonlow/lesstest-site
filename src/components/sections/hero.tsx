"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function Hero() {
  return (
    <header className="relative px-6 md:px-8 pt-32 pb-24 max-w-7xl mx-auto text-center overflow-hidden">
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
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          v1.0 is now live
        </motion.div>

        <motion.h1
          variants={staggerItem}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6"
        >
          Testing that scales, <br />
          <span className="text-gradient">without the weight.</span>
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          The automated testing framework that actually works for developers.
          Clean, fast, and minimal configuration for modern web apps.
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="w-full sm:w-auto">
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            <Github className="w-5 h-5" />
            Star on GitHub
          </Button>
        </motion.div>
      </motion.div>
    </header>
  );
}
