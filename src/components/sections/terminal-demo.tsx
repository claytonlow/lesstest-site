"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, terminalLine } from "@/lib/animations";

const terminalLines = [
  { type: "prompt", content: "$ ", command: "npx lesstest init" },
  { type: "info", content: "Detecting project configuration..." },
  { type: "success", content: "Found: React + TypeScript + Vite" },
  { type: "info", content: "Installing dependencies..." },
  { type: "success", content: "Created lesstest.config.ts" },
  { type: "prompt", content: "$ ", command: "npx lesstest run" },
  { type: "info", content: "Running 47 tests across 12 files..." },
  { type: "success", content: "47 passed (1.2s)" },
];

export function TerminalDemo() {
  return (
    <section className="px-6 md:px-8 py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            See it in action
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Get up and running in seconds. No complex configuration required.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="terminal shadow-2xl"
        >
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="terminal-body"
          >
            {terminalLines.map((line, i) => (
              <motion.div
                key={i}
                variants={terminalLine}
                className="flex"
              >
                {line.type === "prompt" ? (
                  <>
                    <span className="terminal-prompt">{line.content}</span>
                    <span className="terminal-command">{line.command}</span>
                  </>
                ) : (
                  <span className={`terminal-${line.type}`}>
                    {line.type === "success" && "✓ "}
                    {line.type === "info" && "→ "}
                    {line.content}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
