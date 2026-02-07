"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Chrome,
  PanelRightOpen,
  MousePointerClick,
  Play,
  Sparkles,
  Eye,
  ArrowRight,
  CheckCircle,
  Layers,
  FileText,
  Settings,
  Repeat,
} from "lucide-react";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, staggerItem, slideInLeft, slideInRight } from "@/lib/animations";

const quickSteps = [
  {
    icon: Chrome,
    step: "01",
    title: "Install Extension",
    description: "One click from the Chrome Web Store. No downloads, no setup, no configuration files.",
  },
  {
    icon: PanelRightOpen,
    step: "02",
    title: "Open Side Panel",
    description: "LessTest lives in Chrome's side panel. Open it on any website you want to test.",
  },
  {
    icon: MousePointerClick,
    step: "03",
    title: "Build Tests Visually",
    description: "Point, click, and describe what you want. No code required.",
  },
  {
    icon: Play,
    step: "04",
    title: "Run & Watch",
    description: "Execute tests with live visual feedback. Debug in real-time.",
  },
];

const editorFeatures = [
  {
    icon: Layers,
    title: "55+ Built-in Tools",
    description: "Navigation, clicks, form inputs, assertions, network mocking—everything you need without writing code.",
  },
  {
    icon: FileText,
    title: "Variable System",
    description: "Store and reuse values across steps. Use {{variables}} for dynamic, data-driven tests.",
  },
  {
    icon: Settings,
    title: "Point-and-Click Selectors",
    description: "Click elements directly on the page. LessTest captures smart selectors automatically.",
  },
];

const runnerFeatures = [
  {
    icon: Eye,
    title: "Step-by-Step Visibility",
    description: "Watch each step execute in real-time. See exactly what LessTest is doing.",
  },
  {
    icon: Repeat,
    title: "Pause, Edit, Resume",
    description: "Stop mid-test to fix issues or adjust steps, then continue without restarting.",
  },
  {
    icon: CheckCircle,
    title: "Detailed Logs",
    description: "Full execution logs show timing, screenshots, and AI decision trails.",
  },
];

const aiCapabilities = [
  {
    title: "Semantic Element Matching",
    description: "When you say \"Click the Submit button,\" LessTest finds it by meaning—not just by CSS selector. If the ID changes from #btn-submit to #submit-button-v2, your test still works.",
  },
  {
    title: "Multi-Strategy Fallbacks",
    description: "LessTest tries multiple approaches before failing: exact selector, text content, ARIA labels, visual position, and AI reasoning. You see exactly which strategy succeeded.",
  },
  {
    title: "Natural Language Steps",
    description: "Use the Solve Semantic tool to describe complex actions in plain English: \"Fill the registration form with test data\" or \"Find and click the pricing link.\"",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100">
      <Nav />

      <main className="pt-32 pb-24">
        <div className="px-6 md:px-8 max-w-7xl mx-auto">
          <PageHeader
            badge="How It Works"
            title="From zero to automated tests in minutes"
            description="LessTest brings the power of AI-driven test automation directly into your browser. No IDE, no dependencies, no learning curve."
          />

          {/* Quick Start Steps */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {quickSteps.map((step, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="relative"
              >
                {/* Connector line for desktop */}
                {i < quickSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+50px)] w-[calc(100%-100px)] h-0.5 bg-gradient-to-r from-indigo-200 to-indigo-100" />
                )}
                
                <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center relative">
                      <step.icon className="w-7 h-7 text-indigo-600" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Editor Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-4">
                The Editor
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Build tests visually
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                The Editor is where you create and organize your test steps. Each step is a tool that performs an action—click, type, assert, navigate, and more.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                  <Image
                    src="/screenshots/screenshot1.png"
                    alt="LessTest Editor showing visual test creation"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {editorFeatures.map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="pt-4">
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <p className="text-sm text-slate-700">
                      <span className="font-semibold">Pro tip:</span> Use the element picker to click directly on the page. LessTest automatically generates resilient selectors that survive UI changes.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Runner Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-semibold mb-4">
                The Runner
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Execute with confidence
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                The Runner executes your tests with full visibility. Watch each step, see the results, and debug issues in real-time.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6 order-2 lg:order-1"
              >
                {runnerFeatures.map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="pt-4">
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <p className="text-sm text-slate-700">
                      <span className="font-semibold">Debug mode:</span> Pause execution at any step, inspect the page state, modify variables, then resume—without restarting the entire test.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                  <Image
                    src="/screenshots/screenshot2.png"
                    alt="LessTest Runner showing test execution"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* AI Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                AI-Powered
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Self-healing tests that understand intent
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Traditional tests break when selectors change. LessTest&apos;s AI understands what you meant—not just what you clicked.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {aiCapabilities.map((capability, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-amber-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Before/After */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 grid md:grid-cols-2 gap-6"
            >
              <div className="p-6 rounded-2xl bg-red-50 border border-red-100">
                <h3 className="text-lg font-bold text-red-900 mb-4">Traditional Approach</h3>
                <code className="block text-sm text-red-800 bg-red-100 p-4 rounded-lg font-mono whitespace-pre-wrap">
{`// Breaks when ID or class changes
await page.click('#submit-btn-v2');
await page.fill('[data-testid="email"]', '...');

// Manual maintenance required
// No fallback strategies
// Tests fail on every refactor`}
                </code>
              </div>

              <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                <h3 className="text-lg font-bold text-green-900 mb-4">LessTest Approach</h3>
                <div className="bg-green-100 p-4 rounded-lg space-y-3">
                  <div className="flex items-center gap-3 text-green-800">
                    <MousePointerClick className="w-5 h-5" />
                    <span className="font-medium">Click &quot;Submit&quot; button</span>
                  </div>
                  <div className="flex items-center gap-3 text-green-800">
                    <FileText className="w-5 h-5" />
                    <span className="font-medium">Insert text in email field</span>
                  </div>
                  <p className="text-sm text-green-700 mt-2 ml-8">
                    ✓ Works even when selectors change<br/>
                    ✓ AI finds elements by meaning<br/>
                    ✓ Self-healing with multiple strategies
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Workflow Summary */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-32 bg-white rounded-2xl p-8 md:p-12 border border-slate-200"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Your testing workflow, simplified
            </h2>

            <div className="grid md:grid-cols-5 gap-4 text-center">
              {[
                { label: "Install", sublabel: "Chrome extension" },
                { label: "Create", sublabel: "Visual test steps" },
                { label: "Run", sublabel: "Watch live execution" },
                { label: "Debug", sublabel: "Fix issues in-place" },
                { label: "Scale", sublabel: "Build test suites" },
              ].map((item, i) => (
                <div key={i} className="relative">
                  {i < 4 && (
                    <div className="hidden md:block absolute top-6 left-[calc(50%+30px)] w-[calc(100%-60px)] h-0.5 bg-indigo-200" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mx-auto mb-3">
                    {i + 1}
                  </div>
                  <p className="font-semibold text-slate-900">{item.label}</p>
                  <p className="text-sm text-slate-500">{item.sublabel}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Ready to see it in action?
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              Install LessTest and create your first automated test in under 30 seconds.
              No credit card. No setup. Just testing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg">
                Add to Chrome — Free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg">
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
