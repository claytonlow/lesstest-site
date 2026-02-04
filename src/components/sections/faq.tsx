"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const faqs = [
  {
    question: "How is LessTest different from Selenium or Playwright?",
    answer:
      "Selenium and Playwright require programming skills and extensive setup. LessTest is a Chrome extension with visual test authoring—no code required. Plus, our AI self-healing means tests don't break when developers refactor the UI.",
  },
  {
    question: "What does \"AI self-healing\" mean?",
    answer:
      "Traditional tests use rigid selectors like #submit-btn-v2. When that ID changes, the test breaks. LessTest's AI understands intent—\"Click the Submit button\" finds the right element regardless of how it's implemented in the DOM.",
  },
  {
    question: "Can I use LessTest if I'm not a developer?",
    answer:
      "Absolutely! LessTest is designed for QA engineers, product managers, and anyone who needs to create tests. Point, click, and describe what you want in plain English. No coding required.",
  },
  {
    question: "Does LessTest work with any website?",
    answer:
      "Yes. LessTest works with any web application—React, Vue, Angular, WordPress, or plain HTML. It runs in Chrome's side panel and interacts with pages exactly like a real user would.",
  },
  {
    question: "Can I run tests in CI/CD?",
    answer:
      "Yes! The Team plan includes CI/CD integrations. Export tests to run in your pipeline, or use our cloud execution to run tests on every commit.",
  },
  {
    question: "Is my test data secure?",
    answer:
      "Your test data stays local by default—nothing is sent to our servers without your permission. Enterprise customers can self-host for complete data sovereignty.",
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
