"use client";

import { motion } from "framer-motion";
import { Check, X, Minus, ArrowRight } from "lucide-react";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const competitors = [
  {
    name: "Selenium",
    tagline: "The industry standard—for those with engineering resources",
    features: {
      "No code required": false,
      "Visual test authoring": false,
      "AI self-healing": false,
      "Natural language steps": false,
      "Setup time < 5 min": false,
      "Browser extension": false,
      "Network mocking": "partial",
      "Cross-browser": true,
      "Open source": true,
      "CI/CD integration": true,
    },
    pros: [
      "Maximum flexibility and customization",
      "Large community and ecosystem",
      "Works with any programming language",
    ],
    cons: [
      "Requires programming skills",
      "High maintenance burden",
      "Complex setup and configuration",
      "Brittle selectors break frequently",
    ],
    bestFor: "Large engineering teams with dedicated SDETs who need maximum customization",
  },
  {
    name: "Playwright",
    tagline: "Modern automation—still requires code",
    features: {
      "No code required": false,
      "Visual test authoring": false,
      "AI self-healing": false,
      "Natural language steps": false,
      "Setup time < 5 min": false,
      "Browser extension": false,
      "Network mocking": true,
      "Cross-browser": true,
      "Open source": true,
      "CI/CD integration": true,
    },
    pros: [
      "Modern API with auto-wait",
      "Excellent debugging tools",
      "Fast execution",
      "Good TypeScript support",
    ],
    cons: [
      "Requires JavaScript/TypeScript skills",
      "Tests still break on UI changes",
      "No visual authoring option",
      "Learning curve for non-developers",
    ],
    bestFor: "JavaScript-native teams building custom automation frameworks",
  },
  {
    name: "BugBug",
    tagline: "No-code, but limited AI",
    features: {
      "No code required": true,
      "Visual test authoring": true,
      "AI self-healing": "partial",
      "Natural language steps": false,
      "Setup time < 5 min": true,
      "Browser extension": true,
      "Network mocking": "partial",
      "Cross-browser": true,
      "Open source": false,
      "CI/CD integration": true,
    },
    pros: [
      "Easy to get started",
      "No coding required",
      "Cloud-based execution",
    ],
    cons: [
      "Limited AI intelligence",
      "Basic JavaScript support",
      "No true natural language",
      "Less powerful network control",
    ],
    bestFor: "Simple smoke tests with minimal customization needs",
  },
];

const lessTestFeatures = {
  "No code required": true,
  "Visual test authoring": true,
  "AI self-healing": true,
  "Natural language steps": true,
  "Setup time < 5 min": true,
  "Browser extension": true,
  "Network mocking": true,
  "Cross-browser": true,
  "Open source": false,
  "CI/CD integration": true,
};

function FeatureIcon({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="w-5 h-5 text-green-600" />;
  }
  if (value === false) {
    return <X className="w-5 h-5 text-red-400" />;
  }
  return <Minus className="w-5 h-5 text-yellow-500" />;
}

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100">
      <Nav />

      <main className="pt-32 pb-24">
        <div className="px-6 md:px-8 max-w-7xl mx-auto">
          <PageHeader
            badge="Comparison"
            title="See how LessTest compares"
            description="We built LessTest because existing tools either require code or break constantly. Here's how we stack up."
          />

          {/* Feature comparison table */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 overflow-x-auto"
          >
            <table className="w-full min-w-[800px] bg-white rounded-2xl shadow-sm border border-slate-200">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left p-4 font-semibold text-slate-900">Feature</th>
                  <th className="p-4 font-semibold text-indigo-600 bg-indigo-50">LessTest</th>
                  {competitors.map((c) => (
                    <th key={c.name} className="p-4 font-semibold text-slate-700">
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(lessTestFeatures).map(([feature, value]) => (
                  <tr key={feature} className="border-b border-slate-100 last:border-0">
                    <td className="p-4 text-slate-700">{feature}</td>
                    <td className="p-4 bg-indigo-50/50">
                      <div className="flex justify-center">
                        <FeatureIcon value={value} />
                      </div>
                    </td>
                    {competitors.map((c) => (
                      <td key={c.name} className="p-4">
                        <div className="flex justify-center">
                          <FeatureIcon value={c.features[feature as keyof typeof c.features]} />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Detailed comparisons */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-24 space-y-16"
          >
            {competitors.map((competitor) => (
              <motion.div
                key={competitor.name}
                variants={staggerItem}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                      LessTest vs {competitor.name}
                    </h2>
                    <p className="text-slate-500">{competitor.tagline}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    Best for: {competitor.bestFor}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600" />
                      </span>
                      {competitor.name} strengths
                    </h3>
                    <ul className="space-y-2">
                      {competitor.pros.map((pro) => (
                        <li key={pro} className="text-slate-600 flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <X className="w-4 h-4 text-red-600" />
                      </span>
                      {competitor.name} limitations
                    </h3>
                    <ul className="space-y-2">
                      {competitor.cons.map((con) => (
                        <li key={con} className="text-slate-600 flex items-start gap-2">
                          <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100">
                  <p className="text-slate-700">
                    <span className="font-semibold text-indigo-600">Choose LessTest when:</span>{" "}
                    You want tests anyone can create and maintain, with AI that adapts to UI changes automatically.
                  </p>
                </div>
              </motion.div>
            ))}
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
              Ready to try a better way?
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              Install LessTest and create your first test in under 30 seconds.
              No credit card required.
            </p>
            <Button size="lg">
              Add to Chrome — Free
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
