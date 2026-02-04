"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const faqs = [
  {
    question: "How is LessTest different from Jest or Vitest?",
    answer:
      "LessTest is designed with zero-config in mind. While Jest and Vitest are powerful, they often require extensive configuration. LessTest auto-detects your project setup and works out of the box, while still being fully customizable when needed.",
  },
  {
    question: "Does LessTest support TypeScript?",
    answer:
      "Yes! LessTest has first-class TypeScript support. We automatically handle TypeScript compilation without any additional configuration. You get full type inference in your test files and meaningful error messages.",
  },
  {
    question: "Can I migrate from my current testing framework?",
    answer:
      "Absolutely. LessTest provides migration tools for Jest, Mocha, and Vitest. Most tests can be migrated automatically with our CLI tool: `npx lesstest migrate --from jest`.",
  },
  {
    question: "Is there a VS Code extension?",
    answer:
      "Yes! Our VS Code extension provides inline test results, one-click test running, debugging support, and code coverage visualization directly in your editor.",
  },
  {
    question: "How does the cloud execution work?",
    answer:
      "Cloud execution distributes your tests across our global infrastructure. Tests run in parallel on optimized containers, reducing CI times by up to 90%. You only pay for what you use.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact our support team for a full refund.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="px-6 md:px-8 py-24 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-slate-500">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Contact our team
            </a>
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              variants={staggerItem}
              className="group bg-slate-50 rounded-xl border border-slate-100 overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
                {faq.question}
                <Plus className="w-5 h-5 text-slate-400 transition-transform duration-200 faq-icon" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                {faq.answer}
              </div>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
