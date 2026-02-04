"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lightbulb,
  Code,
  Rocket,
  Building2,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const personas = [
  {
    icon: Shield,
    title: "QA Engineers",
    headline: "Build comprehensive test suites without fighting code",
    description:
      "You know the product better than anyone. Now you can translate that knowledge directly into automated tests—no coding required.",
    painPoints: [
      "Spending 60-80% of time maintaining existing tests",
      "Tests break every time developers ship",
      "Can't contribute to automation without coding skills",
    ],
    solutions: [
      "Visual test authoring with point-and-click simplicity",
      "AI self-healing adapts to UI changes automatically",
      "Natural language steps anyone can read and modify",
    ],
    quote: {
      text: "I used to spend more time fixing tests than writing new ones. With LessTest, our test suite actually keeps up with development.",
      author: "Sarah Chen",
      role: "Senior QA Engineer",
    },
    metrics: [
      { value: "80%", label: "Less maintenance time" },
      { value: "3x", label: "More test coverage" },
      { value: "90%", label: "Fewer flaky tests" },
    ],
  },
  {
    icon: Lightbulb,
    title: "Product Managers",
    headline: "Create acceptance tests that document requirements",
    description:
      "Turn user stories into executable tests. Verify features work exactly as specified—without waiting for engineering.",
    painPoints: [
      "No way to verify features match requirements",
      "Dependent on QA/dev for test creation",
      "Requirements lost in translation",
    ],
    solutions: [
      "Write tests in plain English descriptions",
      "Create tests during feature planning",
      "Living documentation that actually runs",
    ],
    quote: {
      text: "Now I can verify that what we shipped matches what we designed. It's changed how we do acceptance testing.",
      author: "Marcus Johnson",
      role: "Product Manager",
    },
    metrics: [
      { value: "50%", label: "Faster acceptance" },
      { value: "100%", label: "Requirements coverage" },
      { value: "Zero", label: "Coding required" },
    ],
  },
  {
    icon: Code,
    title: "Developers",
    headline: "Quick smoke tests without context switching",
    description:
      "Create tests while you code, right in the browser. No IDE setup, no test file boilerplate—just fast feedback.",
    painPoints: [
      "Context switching to write test files",
      "Boilerplate and setup for simple tests",
      "Tests that break on refactors",
    ],
    solutions: [
      "Create tests in Chrome's side panel",
      "Pro-code escape hatches when needed",
      "Tests survive your refactors",
    ],
    quote: {
      text: "I use LessTest for quick smoke tests during development. When I need more control, the JavaScript escape hatches are there.",
      author: "Alex Rivera",
      role: "Full-Stack Developer",
    },
    metrics: [
      { value: "5min", label: "To first test" },
      { value: "Zero", label: "Setup required" },
      { value: "Full", label: "JS when needed" },
    ],
  },
  {
    icon: Rocket,
    title: "Startups",
    headline: "Ship faster with reliable tests from day one",
    description:
      "Move fast without breaking things. Get comprehensive test coverage without hiring dedicated automation engineers.",
    painPoints: [
      "No resources for dedicated QA",
      "Moving too fast for traditional testing",
      "Technical debt from no automation",
    ],
    solutions: [
      "Anyone on the team can create tests",
      "Tests in minutes, not days",
      "Scale coverage as you grow",
    ],
    quote: {
      text: "We're a team of 5. LessTest let us ship with confidence without hiring a QA engineer.",
      author: "Emily Park",
      role: "CTO, Startup",
    },
    metrics: [
      { value: "10x", label: "Faster than code-based" },
      { value: "$0", label: "QA hire savings" },
      { value: "Day 1", label: "Full automation" },
    ],
  },
  {
    icon: Building2,
    title: "Enterprise Teams",
    headline: "Reduce maintenance burden on legacy test suites",
    description:
      "Modernize your testing without rewriting everything. LessTest integrates with existing CI/CD and scales to thousands of tests.",
    painPoints: [
      "Massive maintenance burden on old tests",
      "Only certain team members can contribute",
      "Slow CI pipelines blocking releases",
    ],
    solutions: [
      "Self-healing reduces maintenance 80%",
      "Enable cross-functional test creation",
      "CI/CD integration and cloud execution",
    ],
    quote: {
      text: "We migrated 500 Selenium tests to LessTest. Maintenance dropped from 3 engineers to 1.",
      author: "David Kim",
      role: "Director of QA",
    },
    metrics: [
      { value: "80%", label: "Maintenance reduction" },
      { value: "5x", label: "More contributors" },
      { value: "Self-hosted", label: "Option available" },
    ],
  },
];

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100">
      <Nav />

      <main className="pt-32 pb-24">
        <div className="px-6 md:px-8 max-w-7xl mx-auto">
          <PageHeader
            badge="Use Cases"
            title="Built for how you work"
            description="Whether you're a QA engineer, product manager, developer, or leading a team—LessTest adapts to your workflow."
          />

          {/* Persona cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 space-y-24"
          >
            {personas.map((persona, i) => (
              <motion.div
                key={persona.title}
                variants={staggerItem}
                className={`flex flex-col ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
                    <persona.icon className="w-4 h-4" />
                    {persona.title}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    {persona.headline}
                  </h2>

                  <p className="text-lg text-slate-600 mb-8">
                    {persona.description}
                  </p>

                  {/* Pain points and solutions */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-red-500" />
                        The pain
                      </h3>
                      <ul className="space-y-2">
                        {persona.painPoints.map((pain) => (
                          <li key={pain} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-red-400 mt-0.5">•</span>
                            {pain}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        The solution
                      </h3>
                      <ul className="space-y-2">
                        {persona.solutions.map((solution) => (
                          <li key={solution} className="text-sm text-slate-600 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-6">
                    {persona.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-2xl font-bold text-indigo-600">
                          {metric.value}
                        </div>
                        <div className="text-sm text-slate-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote card */}
                <div className="flex-1 max-w-lg">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-6">
                      <persona.icon className="w-6 h-6 text-indigo-600" />
                    </div>

                    <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed">
                      &ldquo;{persona.quote.text}&rdquo;
                    </blockquote>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                        <Users className="w-5 h-5 text-slate-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">
                          {persona.quote.author}
                        </div>
                        <div className="text-sm text-slate-500">
                          {persona.quote.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-24 text-center bg-white rounded-2xl p-12 shadow-sm border border-slate-200"
          >
            <TrendingUp className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              See results in your first week
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              Teams typically create their first 10 tests within hours of installing LessTest.
              Start seeing the difference today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg">
                Add to Chrome — Free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg">
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
