"use client";

import { motion } from "framer-motion";
import { Chrome, PanelRightOpen, MousePointerClick } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const steps = [
  {
    icon: Chrome,
    step: "01",
    title: "Install Extension",
    description: "Add LessTest to Chrome in one click. No downloads or setup.",
  },
  {
    icon: PanelRightOpen,
    step: "02",
    title: "Open Side Panel",
    description: "LessTest lives in Chrome's side panel. Open it on any website.",
  },
  {
    icon: MousePointerClick,
    step: "03",
    title: "Build Visually",
    description: "Point and click to add steps. Use natural language for complex actions.",
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
            Start testing in 30 seconds
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            No downloads. No IDE. No configuration files. Just install and go.
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
                <p className="text-slate-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Before/After comparison */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          <div className="p-6 rounded-2xl bg-red-50 border border-red-100">
            <h3 className="text-lg font-bold text-red-900 mb-4">Traditional Testing</h3>
            <code className="block text-sm text-red-800 bg-red-100 p-4 rounded-lg font-mono whitespace-pre-wrap">
{`await page.click('#submit-btn-v2-redesign');
// ❌ Breaks when ID changes
// ❌ Requires code knowledge
// ❌ Manual maintenance`}
            </code>
          </div>

          <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
            <h3 className="text-lg font-bold text-green-900 mb-4">LessTest</h3>
            <div className="bg-green-100 p-4 rounded-lg">
              <div className="flex items-center gap-3 text-green-800">
                <MousePointerClick className="w-5 h-5" />
                <span className="font-medium">Click &quot;Submit&quot; button</span>
              </div>
              <p className="text-sm text-green-700 mt-2 ml-8">
                ✓ Works even when ID changes<br/>
                ✓ Anyone can read and edit<br/>
                ✓ Self-healing AI
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
