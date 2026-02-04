"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  MousePointerClick,
  Shield,
  Eye,
  Workflow,
  Network
} from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  {
    icon: MousePointerClick,
    title: "Visual Test Authoring",
    desc: "Point, click, and describe what you want in plain English. No XPath or CSS selectors required.",
  },
  {
    icon: Sparkles,
    title: "AI Self-Healing",
    desc: "When selectors break, AI finds the element you meant—not just the one you clicked. Tests fix themselves.",
  },
  {
    icon: Shield,
    title: "Intent Over Implementation",
    desc: "\"Click the Submit button\" works even when IDs change. Semantic matching adapts to new layouts.",
  },
  {
    icon: Eye,
    title: "Glass Box AI",
    desc: "See exactly why selectors matched and what alternatives were tried. Full transparency into AI decisions.",
  },
  {
    icon: Workflow,
    title: "55+ Built-in Actions",
    desc: "Navigation, forms, assertions, network mocking, conditional logic—everything you need without code.",
  },
  {
    icon: Network,
    title: "API & Network Control",
    desc: "Intercept requests, mock responses, and test edge cases. Full control over the network layer.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-6 md:px-8 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tests that understand intent
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Combine no-code simplicity with AI-powered resilience. Build tests anyone
            can maintain.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 mb-6 group-hover:scale-110 group-hover:border-indigo-200 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
