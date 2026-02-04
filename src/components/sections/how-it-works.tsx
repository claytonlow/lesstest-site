"use client";

import { motion } from "framer-motion";
import { Download, Settings, Play } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Install",
    description: "Add LessTest to your project with a single command.",
    code: "npm install lesstest --save-dev",
  },
  {
    icon: Settings,
    step: "02",
    title: "Configure",
    description: "Auto-generated config that just works. Customize if needed.",
    code: "npx lesstest init",
  },
  {
    icon: Play,
    step: "03",
    title: "Run",
    description: "Execute your tests with lightning-fast performance.",
    code: "npx lesstest run",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 md:px-8 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get started in 3 steps
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            From zero to running tests in under a minute. No complex setup required.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+60px)] w-[calc(100%-120px)] h-0.5 bg-gradient-to-r from-indigo-200 to-indigo-100" />
              )}

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-indigo-50 border border-indigo-100 mb-6 relative">
                  <step.icon className="w-10 h-10 text-indigo-600" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 mb-4">{step.description}</p>
                <code className="inline-block px-4 py-2 rounded-lg bg-slate-900 text-slate-100 text-sm font-mono">
                  {step.code}
                </code>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
