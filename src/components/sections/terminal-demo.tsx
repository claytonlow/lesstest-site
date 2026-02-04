"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { MousePointerClick, Type, CheckCircle, Play } from "lucide-react";

const demoSteps = [
  {
    icon: MousePointerClick,
    action: "Navigate",
    target: "https://app.example.com/login",
    status: "complete",
  },
  {
    icon: Type,
    action: "Insert Text",
    target: "Email field → test@example.com",
    status: "complete",
  },
  {
    icon: Type,
    action: "Insert Text",
    target: "Password field → ••••••••",
    status: "complete",
  },
  {
    icon: MousePointerClick,
    action: "Click",
    target: "\"Sign In\" button",
    status: "complete",
  },
  {
    icon: CheckCircle,
    action: "Assert Visible",
    target: "Dashboard welcome message",
    status: "running",
  },
];

export function TerminalDemo() {
  return (
    <section className="px-6 md:px-8 py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto">
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
            Build complete test flows visually. Each step is editable, reorderable,
            and self-healing.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        >
          {/* Browser chrome mockup */}
          <div className="bg-slate-100 px-4 py-3 flex items-center gap-3 border-b border-slate-200">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-white rounded-md px-3 py-1.5 text-sm text-slate-500 font-mono">
              app.example.com/login
            </div>
          </div>

          <div className="flex">
            {/* Main content area */}
            <div className="flex-1 p-8 bg-slate-50 border-r border-slate-200">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 h-64 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-slate-100 flex items-center justify-center">
                    <Play className="w-8 h-8 text-slate-300" />
                  </div>
                  <p className="font-medium">Live test preview</p>
                  <p className="text-sm">Watch tests execute in real-time</p>
                </div>
              </div>
            </div>

            {/* Side panel - LessTest UI */}
            <div className="w-80 bg-white">
              <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                <span className="font-semibold text-slate-900">LessTest</span>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                  Running
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-semibold text-slate-700 mb-3">
                  Login Flow Test
                </h3>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  {demoSteps.map((step, i) => (
                    <motion.div
                      key={i}
                      variants={staggerItem}
                      className={`flex items-start gap-3 p-3 rounded-lg border ${
                        step.status === "running"
                          ? "border-indigo-200 bg-indigo-50"
                          : "border-slate-100 bg-slate-50"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${
                          step.status === "running"
                            ? "bg-indigo-100"
                            : "bg-green-100"
                        }`}
                      >
                        {step.status === "complete" ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <step.icon className="w-4 h-4 text-indigo-600" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-slate-900">
                          {step.action}
                        </p>
                        <p className="text-xs text-slate-500 truncate">
                          {step.target}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
