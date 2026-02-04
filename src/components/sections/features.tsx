"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Layout, Shield, Clock, Code } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  {
    icon: Zap,
    title: "Zero Config",
    desc: "Drop into any repo and run. We auto-detect your setup so you don't have to.",
  },
  {
    icon: Layout,
    title: "Parallelized",
    desc: "Execute hundreds of tests in seconds. Built-in distribution across all CPU cores.",
  },
  {
    icon: CheckCircle2,
    title: "Human Readable",
    desc: "Clear, concise logs that tell you exactly what failed and why—no digging required.",
  },
  {
    icon: Shield,
    title: "Type Safe",
    desc: "Full TypeScript support with intelligent auto-completion and type inference.",
  },
  {
    icon: Clock,
    title: "Watch Mode",
    desc: "Instant feedback as you code. Tests re-run automatically when files change.",
  },
  {
    icon: Code,
    title: "Snapshot Testing",
    desc: "Capture component output and detect unintended changes with visual diffs.",
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
            Engineered for speed
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Everything you need to test at the speed of thought, without the
            boilerplate.
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
