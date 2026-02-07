"use client";

import { motion } from "framer-motion";
import {
  RefreshCw,
  FormInput,
  ShoppingCart,
  Globe,
  Network,
  Accessibility,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Building2,
  Stethoscope,
  Landmark,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Ticket,
  BarChart3,
  Search,
  Code,
} from "lucide-react";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const useCases = [
  {
    icon: RefreshCw,
    color: "indigo",
    title: "Regression Testing for Critical User Flows",
    description:
      "Automated verification of core functionality after every deployment—login, signup, password reset, and other flows that would be catastrophic if broken.",
    whyItMatters:
      "These are the tests that run on every PR or nightly. They need to be rock-solid and low-maintenance.",
    industries: [
      {
        icon: Briefcase,
        name: "SaaS Platforms",
        examples:
          "User authentication flows, subscription upgrades/downgrades, team member invitations",
      },
      {
        icon: Stethoscope,
        name: "Healthcare Portals",
        examples:
          "Patient login, appointment booking, prescription refill requests",
      },
      {
        icon: Landmark,
        name: "Banking & Fintech",
        examples:
          "Account login with MFA simulation, balance checks, transaction history loading",
      },
    ],
    features: [
      "AI self-healing adapts to UI changes",
      "Semantic matching finds elements by meaning",
      "Tests describe intent, not implementation",
    ],
  },
  {
    icon: FormInput,
    color: "emerald",
    title: "Form Validation & Input Testing",
    description:
      "Verifying that forms handle valid input, invalid input, edge cases, and error states correctly across your application.",
    whyItMatters:
      "Forms are where users give you their data and their trust. Broken validation means lost conversions or corrupted data.",
    industries: [
      {
        icon: ShoppingCart,
        name: "E-commerce",
        examples:
          "Checkout forms with various address formats, credit card validation, promo code edge cases",
      },
      {
        icon: ShieldCheck,
        name: "Insurance",
        examples:
          "Quote forms with dozens of fields, conditional questions, document uploads",
      },
      {
        icon: Briefcase,
        name: "HR & Recruiting",
        examples:
          "Job application forms, resume parsing, multi-step onboarding wizards",
      },
    ],
    features: [
      "Variable system generates unique test data",
      "JS transforms create realistic edge cases",
      "Test special characters, unicode, max-length strings",
    ],
  },
  {
    icon: ShoppingCart,
    color: "amber",
    title: "End-to-End Purchase & Transaction Flows",
    description:
      "Full user journeys involving multiple steps, state changes, and often payment processing—from browse to confirmation.",
    whyItMatters:
      "These are revenue-critical paths. A bug in checkout equals direct revenue loss.",
    industries: [
      {
        icon: ShoppingCart,
        name: "E-commerce",
        examples:
          "Browse → add to cart → apply coupon → checkout → order confirmation → email verification",
      },
      {
        icon: Briefcase,
        name: "Subscription Services",
        examples:
          "Free trial signup → credit card entry → plan selection → first billing cycle",
      },
      {
        icon: Ticket,
        name: "Ticketing & Booking",
        examples:
          "Seat selection → add-ons → payment → confirmation → calendar integration",
      },
    ],
    features: [
      "Network interception mocks payment gateways",
      "Test full flows without processing real transactions",
      "Multi-step orchestration with variables",
    ],
  },
  {
    icon: Globe,
    color: "sky",
    title: "Cross-Environment Smoke Testing",
    description:
      "Quick sanity checks that core features work across different environments—staging, production, and feature branches.",
    whyItMatters:
      "Catch environment-specific issues before they reach users. Validate deployments in minutes, not hours.",
    industries: [
      {
        icon: Building2,
        name: "Media & Publishing",
        examples:
          "Article rendering, video playback, ad loading across staging vs. production",
      },
      {
        icon: GraduationCap,
        name: "EdTech",
        examples:
          "Course content loading, video streaming, quiz submission on different test environments",
      },
      {
        icon: Building2,
        name: "Enterprise Software",
        examples:
          "Admin panel functionality across customer-specific deployments",
      },
    ],
    features: [
      "No infrastructure setup—runs in Chrome",
      "Environment variables target different URLs",
      "Same test works across all environments",
    ],
  },
  {
    icon: Network,
    color: "violet",
    title: "API-Dependent UI Verification",
    description:
      "Testing how the UI handles various API responses—success states, errors, slow responses, and empty data.",
    whyItMatters:
      "Real-world APIs fail. Your UI should handle it gracefully, and users should see appropriate feedback.",
    industries: [
      {
        icon: BarChart3,
        name: "Dashboards & Analytics",
        examples:
          "Verify charts render correctly with empty data, large datasets, API timeouts",
      },
      {
        icon: Search,
        name: "Search Interfaces",
        examples:
          'Test result rendering, "no results found" states, pagination edge cases',
      },
      {
        icon: Network,
        name: "Real-time Applications",
        examples:
          "Notification handling, live update failures, websocket disconnection recovery",
      },
    ],
    features: [
      "Route Network Request intercepts API calls",
      "Mock responses without backend changes",
      "Simulate edge cases and error states",
    ],
  },
  {
    icon: Accessibility,
    color: "rose",
    title: "Accessibility & Compliance Checks",
    description:
      "Verifying that key interactive elements remain accessible and compliant as the UI evolves over time.",
    whyItMatters:
      "WCAG compliance isn't optional for many industries. Regressions can introduce legal liability.",
    industries: [
      {
        icon: Building2,
        name: "Government & Public Sector",
        examples:
          "Form labels, keyboard navigation, screen reader compatibility",
      },
      {
        icon: Landmark,
        name: "Financial Services",
        examples:
          "Accessible transaction confirmations, error messaging for assistive tech",
      },
      {
        icon: Stethoscope,
        name: "Healthcare",
        examples:
          "HIPAA-adjacent concerns around data visibility, timeout warnings",
      },
    ],
    features: [
      "Assert Attribute verifies ARIA labels and roles",
      "Keyboard navigation simulation",
      "Catch accessibility regressions early",
    ],
  },
];

const powerUserSteps = [
  { tool: "Navigate", description: "Open the application", color: "slate" },
  {
    tool: "Network Mock",
    description: 'Mock /api/user to return "free tier" user',
    color: "violet",
  },
  {
    tool: "Assert Visible",
    description: 'Verify "Upgrade" button is visible',
    color: "emerald",
  },
  { tool: "Click", description: "Click Upgrade button", color: "indigo" },
  {
    tool: "Network Mock",
    description: "Mock /api/plans to return 3 pricing tiers",
    color: "violet",
  },
  {
    tool: "Assert Element Count",
    description: "Verify all 3 plans render correctly",
    color: "emerald",
  },
  {
    tool: "If Condition",
    description: 'If URL contains "/checkout"...',
    color: "amber",
  },
  {
    tool: "Extract Variable",
    description: "Extract plan price from page",
    color: "sky",
  },
  {
    tool: "JS Transform",
    description: "Calculate expected tax amount",
    color: "rose",
  },
  {
    tool: "Assert Variable",
    description: "Verify total matches expected value",
    color: "emerald",
  },
  {
    tool: "Network Mock",
    description: "Mock /api/checkout to return success",
    color: "violet",
  },
  { tool: "Click", description: "Click Complete Purchase", color: "indigo" },
  {
    tool: "Assert Text",
    description: "Confirmation shows correct plan name",
    color: "emerald",
  },
  {
    tool: "Execute Test",
    description: 'Run "Verify Email Received" sub-test',
    color: "slate",
  },
];

const colorClasses: Record<
  string,
  { bg: string; border: string; text: string; icon: string }
> = {
  indigo: {
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    text: "text-indigo-700",
    icon: "text-indigo-600",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-700",
    icon: "text-emerald-600",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-700",
    icon: "text-amber-600",
  },
  sky: {
    bg: "bg-sky-50",
    border: "border-sky-100",
    text: "text-sky-700",
    icon: "text-sky-600",
  },
  violet: {
    bg: "bg-violet-50",
    border: "border-violet-100",
    text: "text-violet-700",
    icon: "text-violet-600",
  },
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-100",
    text: "text-rose-700",
    icon: "text-rose-600",
  },
  slate: {
    bg: "bg-slate-100",
    border: "border-slate-200",
    text: "text-slate-700",
    icon: "text-slate-600",
  },
};

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100">
      <Nav />

      <main className="pt-32 pb-24">
        <div className="px-6 md:px-8 max-w-7xl mx-auto">
          <PageHeader
            badge="Use Cases"
            title="QA testing scenarios that actually work"
            description="From regression testing to accessibility compliance—see how QA teams use LessTest to build resilient, maintainable test suites."
          />

          {/* Use Case Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 space-y-12"
          >
            {useCases.map((useCase, i) => {
              const colors = colorClasses[useCase.color];
              return (
                <motion.div
                  key={useCase.title}
                  variants={staggerItem}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Header */}
                  <div className="p-8 border-b border-slate-100">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div
                        className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center flex-shrink-0`}
                      >
                        <useCase.icon className={`w-7 h-7 ${colors.icon}`} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">
                          {useCase.title}
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                          {useCase.description}
                        </p>
                        <div
                          className={`mt-4 inline-block px-3 py-1.5 rounded-lg ${colors.bg} ${colors.border} border`}
                        >
                          <p className={`text-sm font-medium ${colors.text}`}>
                            <span className="font-semibold">Why it matters:</span>{" "}
                            {useCase.whyItMatters}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Industry Examples */}
                      <div>
                        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                          Industry Examples
                        </h3>
                        <div className="space-y-4">
                          {useCase.industries.map((industry) => (
                            <div
                              key={industry.name}
                              className="flex items-start gap-3"
                            >
                              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                                <industry.icon className="w-5 h-5 text-slate-600" />
                              </div>
                              <div>
                                <p className="font-semibold text-slate-900">
                                  {industry.name}
                                </p>
                                <p className="text-sm text-slate-600">
                                  {industry.examples}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* LessTest Features */}
                      <div>
                        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                          LessTest Advantage
                        </h3>
                        <ul className="space-y-3">
                          {useCase.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle
                                className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5`}
                              />
                              <span className="text-slate-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Power User Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                      Power User Showcase
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      Complex Conditional Flows with API Mocking
                    </h2>
                  </div>
                </div>

                <p className="text-slate-300 text-lg mb-8 max-w-3xl">
                  Advanced testing scenarios that would traditionally require custom code—conditional logic, 
                  API simulation, data extraction, and cross-test orchestration. All built visually.
                </p>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Example scenario */}
                  <div>
                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                      Example: Subscription Upgrade Flow
                    </h3>
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 space-y-2 max-h-[480px] overflow-y-auto">
                      {powerUserSteps.map((step, i) => {
                        const stepColors = colorClasses[step.color];
                        return (
                          <div
                            key={i}
                            className="flex items-center gap-3 py-2"
                          >
                            <span className="text-slate-500 text-sm font-mono w-6">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded text-xs font-semibold ${stepColors.bg} ${stepColors.text}`}
                            >
                              {step.tool}
                            </span>
                            <span className="text-slate-300 text-sm">
                              {step.description}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* What it demonstrates */}
                  <div>
                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                      What This Demonstrates
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                          <Network className="w-5 h-5 text-violet-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">
                            Network Interception
                          </p>
                          <p className="text-sm text-slate-400">
                            Simulate user states without database manipulation. Mock any API response.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                          <Code className="w-5 h-5 text-amber-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">
                            Conditional Branching
                          </p>
                          <p className="text-sm text-slate-400">
                            If/Else logic handles different UI paths without separate tests.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-5 h-5 text-rose-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">
                            JS Transforms
                          </p>
                          <p className="text-sm text-slate-400">
                            Custom calculations and data manipulation when you need full control.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                          <RefreshCw className="w-5 h-5 text-sky-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">
                            Composable Tests
                          </p>
                          <p className="text-sm text-slate-400">
                            Execute Test calls reusable modules. DRY principles for test suites.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                      <p className="text-sm text-indigo-200">
                        <span className="font-semibold">Pro tip:</span> This entire 14-step flow is built visually—no code required. 
                        But when you need JavaScript, it&apos;s there.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 text-center bg-white rounded-2xl p-12 shadow-sm border border-slate-200"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Ready to transform your QA workflow?
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              Join QA teams who&apos;ve reduced test maintenance by 80% and increased coverage 3x.
              Start building resilient tests in minutes.
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
