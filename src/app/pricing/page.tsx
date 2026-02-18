"use client";

import { motion } from "framer-motion";
import {
  Check,
  X,
  ArrowRight,
  Chrome,
  Sparkles,
  Video,
  Globe,
  Webhook,
  Upload,
  Database,
  Zap,
  Users,
  Cloud,
  Headphones,
} from "lucide-react";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with no-code testing. Perfect for trying LessTest on personal projects.",
    cta: "Add to Chrome",
    ctaVariant: "secondary" as const,
    highlighted: false,
    badge: null,
    limits: ["5 tests", "10 steps per test", "Community support"],
    features: [
      "Visual test authoring",
      "AI self-healing selectors",
      "55+ built-in actions",
      "Click, type, navigate, assert",
      "Local test storage",
    ],
  },
  {
    name: "Solo",
    price: "$29",
    period: "per month",
    description: "Unlock the full power of LessTest. Built for developers and QA pros who ship fast.",
    cta: "Start 14-Day Free Trial",
    ctaVariant: "secondary" as const,
    highlighted: true,
    badge: "Most Popular",
    limits: ["Unlimited tests", "Unlimited steps", "Priority support"],
    features: [
      "Everything in Free",
      "Video recording",
      "Network tools",
      "Webhook requests",
      "File upload testing",
      "Dataset-driven tests",
      "Advanced assertions",
      "Test export & sharing",
    ],
  },
  {
    name: "Team",
    price: "$79",
    period: "flat / month",
    description: "One price for your whole team. No per-seat fees, no punishing you for growing.",
    cta: "Start 14-Day Free Trial",
    ctaVariant: "primary" as const,
    highlighted: false,
    badge: "No Per-Seat Pricing",
    limits: ["Unlimited team members", "Dedicated support", "99.9% uptime SLA"],
    features: [
      "Everything in Solo",
      "Invite your whole team",
      "Cloud test storage",
      "Shared test library",
      "CI/CD integrations",
      "Team roles & permissions",
      "Git branch management",
      "Audit log",
    ],
  },
];

type FeatureAccess = boolean | "limited" | string;

interface ComparisonCategory {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  features: {
    name: string;
    free: FeatureAccess;
    solo: FeatureAccess;
    team: FeatureAccess;
  }[];
}

const comparisonData: ComparisonCategory[] = [
  {
    name: "Test Authoring",
    icon: Zap,
    features: [
      { name: "Visual test builder", free: true, solo: true, team: true },
      { name: "AI self-healing selectors", free: true, solo: true, team: true },
      { name: "55+ built-in actions", free: true, solo: true, team: true },
      { name: "Natural language steps", free: true, solo: true, team: true },
      { name: "Number of tests", free: "5", solo: "Unlimited", team: "Unlimited" },
      { name: "Steps per test", free: "10", solo: "Unlimited", team: "Unlimited" },
      { name: "Advanced assertions", free: false, solo: true, team: true },
    ],
  },
  {
    name: "Premium Tools",
    icon: Sparkles,
    features: [
      { name: "Video recording", free: false, solo: true, team: true },
      { name: "Network tools (intercept, mock, wait)", free: false, solo: true, team: true },
      { name: "Webhook requests", free: false, solo: true, team: true },
      { name: "File upload testing", free: false, solo: true, team: true },
      { name: "Dataset-driven tests", free: false, solo: true, team: true },
    ],
  },
  {
    name: "Collaboration",
    icon: Users,
    features: [
      { name: "Team members", free: "1", solo: "1", team: "Unlimited (flat rate)" },
      { name: "Local test storage", free: true, solo: true, team: true },
      { name: "Cloud test storage", free: false, solo: false, team: true },
      { name: "Shared test library", free: false, solo: false, team: true },
      { name: "Team roles & permissions", free: false, solo: false, team: true },
      { name: "Git branch management", free: false, solo: false, team: true },
      { name: "Audit log", free: false, solo: false, team: true },
    ],
  },
  {
    name: "Infrastructure",
    icon: Cloud,
    features: [
      { name: "Test export & sharing", free: false, solo: true, team: true },
      { name: "CI/CD integrations", free: false, solo: false, team: true },
      { name: "API access", free: false, solo: false, team: true },
      { name: "Uptime SLA", free: false, solo: false, team: "99.9%" },
    ],
  },
  {
    name: "Support",
    icon: Headphones,
    features: [
      { name: "Community support", free: true, solo: true, team: true },
      { name: "Priority email support", free: false, solo: true, team: true },
      { name: "Dedicated support channel", free: false, solo: false, team: true },
      { name: "Onboarding session", free: false, solo: false, team: true },
    ],
  },
];

const premiumHighlights = [
  {
    icon: Video,
    name: "Video Recording",
    description: "Capture full video playback of every test run for easy debugging and stakeholder reviews.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: Globe,
    name: "Network Tools",
    description: "Intercept, mock, and wait on network requests. Full control over API responses during tests.",
    color: "bg-sky-100 text-sky-600",
  },
  {
    icon: Webhook,
    name: "Webhook Requests",
    description: "Trigger and validate webhooks as part of your test flow. Test integrations end-to-end.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Upload,
    name: "File Upload",
    description: "Test file upload flows with real files. Support for drag-and-drop and input-based uploads.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Database,
    name: "Dataset",
    description: "Run the same test with different data inputs. Import CSVs or define datasets inline.",
    color: "bg-violet-100 text-violet-600",
  },
];

const faqs = [
  {
    q: "Can I use LessTest for free?",
    a: "Absolutely. The free tier lets you create up to 5 tests with 10 steps each — enough to evaluate LessTest on real workflows. Core features like AI self-healing and the visual builder are included.",
  },
  {
    q: "What happens when I hit the free tier limit?",
    a: "Your existing tests keep working. You just won't be able to create new ones until you upgrade or delete existing tests to make room.",
  },
  {
    q: "Do I need a credit card to start the free trial?",
    a: "No. The 14-day trial on Solo and Team plans doesn't require a credit card. You only pay if you decide to continue after the trial.",
  },
  {
    q: "Can I switch plans at any time?",
    a: "Yes. Upgrade, downgrade, or cancel anytime. If you downgrade, you keep access to paid features until the end of your billing cycle.",
  },
  {
    q: "Why no per-seat pricing on the Team plan?",
    a: "Because charging per seat discourages teams from giving everyone access — which means fewer people writing and maintaining tests. Our flat-rate Team plan means you can invite your whole team without worrying about the bill going up every time someone joins.",
  },
  {
    q: "What's the difference between Solo and Team?",
    a: "Solo is for individual power users who need the full toolset. Team adds collaboration features: shared test libraries, cloud storage, team roles, CI/CD integrations, and dedicated support — all for a flat monthly price regardless of team size.",
  },
  {
    q: "Is there a discount for annual billing?",
    a: "Yes — annual plans save you 20%. That's $23/mo for Solo and $63/mo for Team when billed annually.",
  },
];

function FeatureCell({ value }: { value: FeatureAccess }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="w-4 h-4 text-green-600" />
        </div>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <X className="w-5 h-5 text-slate-300" />
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <span className="text-sm font-medium text-slate-700">{value}</span>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-100">
      <Nav />

      <main className="pt-32 pb-24">
        <div className="px-6 md:px-8 max-w-7xl mx-auto">
          <PageHeader
            badge="Pricing"
            title="Start free, scale as you grow"
            description="LessTest is free for personal projects. Unlock premium tools and team collaboration when you're ready."
          />

          {/* Pricing Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-8 items-start"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={staggerItem}
                className={`relative rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-slate-900 text-white ring-2 ring-teal-500 shadow-2xl md:scale-105"
                    : "bg-white border border-slate-200 shadow-sm"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal-500 text-white text-sm font-semibold rounded-full">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      plan.highlighted ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-bold ${
                        plan.highlighted ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className={
                          plan.highlighted ? "text-slate-400" : "text-slate-500"
                        }
                      >
                        /{plan.period}
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      plan.highlighted ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Limits */}
                <div
                  className={`rounded-xl p-4 mb-6 ${
                    plan.highlighted ? "bg-white/10" : "bg-slate-50"
                  }`}
                >
                  {plan.limits.map((limit) => (
                    <div
                      key={limit}
                      className={`flex items-center gap-2 py-1 text-sm font-medium ${
                        plan.highlighted ? "text-slate-200" : "text-slate-700"
                      }`}
                    >
                      <Check
                        className={`w-4 h-4 flex-shrink-0 ${
                          plan.highlighted ? "text-teal-400" : "text-teal-600"
                        }`}
                      />
                      {limit}
                    </div>
                  ))}
                </div>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check
                        className={`w-4 h-4 flex-shrink-0 ${
                          plan.highlighted ? "text-teal-400" : "text-teal-600"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.highlighted ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? "secondary" : plan.ctaVariant}
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-white text-slate-900 hover:bg-slate-100"
                      : ""
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-sm text-slate-500 mt-8"
          >
            All paid plans include a 14-day free trial. No credit card required.
          </motion.p>

          {/* No Per-Seat Callout */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-teal-50 to-violet-50 border border-teal-100 rounded-2xl p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7 text-teal-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  No per-seat pricing. Ever.
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Most testing tools charge per seat — punishing companies for growing their team.
                  We think that&apos;s backwards. Our Team plan is a flat monthly rate, whether you have 3 people or 30.
                  Invite everyone. QA shouldn&apos;t be gated by headcount math.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Premium Features Highlight */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold mb-4">
                Premium Tools
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Unlock powerful testing tools
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                These premium features are available on Solo and Team plans — giving you full control over complex test scenarios.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {premiumHighlights.map((feature) => (
                <motion.div
                  key={feature.name}
                  variants={staggerItem}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-teal-200 hover:shadow-md transition-all"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Compare plans in detail
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto">
                Every feature across every plan — so you can pick exactly what you need.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] bg-white rounded-2xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left p-4 font-semibold text-slate-900 w-[40%]">
                      Feature
                    </th>
                    <th className="p-4 font-semibold text-slate-700 w-[20%]">Free</th>
                    <th className="p-4 font-semibold text-teal-600 bg-teal-50 w-[20%]">
                      Solo
                    </th>
                    <th className="p-4 font-semibold text-slate-700 w-[20%]">
                      Team
                      <span className="block text-xs font-normal text-emerald-600 mt-0.5">
                        No per-seat fees
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((category) => (
                    <>
                      <tr
                        key={`cat-${category.name}`}
                        className="border-b border-slate-100 bg-slate-50"
                      >
                        <td colSpan={4} className="p-4">
                          <div className="flex items-center gap-2">
                            <category.icon className="w-4 h-4 text-teal-600" />
                            <span className="text-sm font-semibold text-slate-900">
                              {category.name}
                            </span>
                          </div>
                        </td>
                      </tr>
                      {category.features.map((feature) => (
                        <tr
                          key={feature.name}
                          className="border-b border-slate-100 last:border-0"
                        >
                          <td className="p-4 text-sm text-slate-700">{feature.name}</td>
                          <td className="p-4">
                            <FeatureCell value={feature.free} />
                          </td>
                          <td className="p-4 bg-teal-50/30">
                            <FeatureCell value={feature.solo} />
                          </td>
                          <td className="p-4">
                            <FeatureCell value={feature.team} />
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-32 max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Frequently asked questions
              </h2>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {faqs.map((faq) => (
                <motion.div
                  key={faq.q}
                  variants={staggerItem}
                  className="bg-white rounded-2xl p-6 border border-slate-200"
                >
                  <h3 className="text-base font-semibold text-slate-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="gradient-cta rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to write less and test more?
                </h2>
                <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
                  Install LessTest and create your first test in under 30 seconds.
                  Upgrade anytime.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-teal-600 hover:bg-slate-100 shadow-sm"
                  >
                    <Chrome className="w-5 h-5" />
                    Add to Chrome — Free
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
                <p className="mt-6 text-sm text-white/60">
                  No credit card required. Free tier available forever.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
