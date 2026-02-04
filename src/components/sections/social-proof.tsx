"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const logos = [
  { name: "Vercel", width: 100 },
  { name: "Stripe", width: 80 },
  { name: "Linear", width: 90 },
  { name: "Notion", width: 100 },
  { name: "Figma", width: 70 },
];

const stats = [
  { value: "10K+", label: "QA Teams" },
  { value: "5M+", label: "Tests Created" },
  { value: "80%", label: "Less Maintenance" },
];

export function SocialProof() {
  return (
    <section className="px-6 md:px-8 py-16 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <p className="text-sm font-medium text-slate-500 mb-8">
            Trusted by QA teams and developers at
          </p>

          {/* Company logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12 opacity-60">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="h-8 flex items-center justify-center"
                style={{ width: logo.width }}
              >
                <span className="text-xl font-bold text-slate-400">{logo.name}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
