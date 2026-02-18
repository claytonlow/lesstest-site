"use client";

import { motion } from "framer-motion";
import {
  MousePointerClick,
  Sparkles,
  Shield,
  Eye,
  Workflow,
  Network,
  ArrowRight,
  CheckCircle,
  Navigation,
  FormInput,
  SquareMousePointer,
  Timer,
  Variable,
  Code,
  Globe,
  Database,
  Cookie,
  Bug,
  GitBranch,
  Layers,
  Users,
  Radio,
  UserCheck,
  Keyboard,
  Pause,
  FileCode,
  Repeat,
  Zap,
  Brain,
  Search,
  Lightbulb,
} from "lucide-react";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";

const coreCapabilities = [
  {
    icon: MousePointerClick,
    color: "indigo",
    title: "Visual Test Authoring",
    description:
      "Point, click, and describe what you want in plain English. Build tests visually with a drag-and-drop step editor—no XPath or CSS selectors required.",
    highlights: [
      "Point-and-click element picker",
      "Drag-and-drop step reordering",
      "55+ built-in action tools",
      "Record mode captures interactions",
    ],
  },
  {
    icon: Sparkles,
    color: "amber",
    title: "AI Self-Healing Tests",
    description:
      "When selectors break, AI finds the element you meant—not just the one you clicked. Tests fix themselves as your UI evolves.",
    highlights: [
      "Semantic element matching via LLM",
      "Multi-strategy selector fallbacks",
      "Natural language instructions",
      "Adapts to DOM restructuring",
    ],
  },
  {
    icon: Shield,
    color: "emerald",
    title: "Intent Over Implementation",
    description:
      '"Click the Submit button" works even when IDs change. Define what you want to happen, and LessTest figures out how.',
    highlights: [
      "Describe goals, not mechanics",
      "Resilient to refactors",
      "Human-readable test steps",
      "No brittle locators",
    ],
  },
  {
    icon: Eye,
    color: "sky",
    title: "Glass Box AI",
    description:
      "See exactly why selectors matched and what alternatives were tried. Full transparency into every AI decision.",
    highlights: [
      "Decision trail for every step",
      "Confidence scores visible",
      "Fallback strategy logging",
      "No hidden magic",
    ],
  },
];

const colorClasses: Record<
  string,
  { bg: string; border: string; text: string; icon: string; ring: string }
> = {
  indigo: {
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    text: "text-indigo-700",
    icon: "text-indigo-600",
    ring: "ring-indigo-100",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-700",
    icon: "text-emerald-600",
    ring: "ring-emerald-100",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-700",
    icon: "text-amber-600",
    ring: "ring-amber-100",
  },
  sky: {
    bg: "bg-sky-50",
    border: "border-sky-100",
    text: "text-sky-700",
    icon: "text-sky-600",
    ring: "ring-sky-100",
  },
  violet: {
    bg: "bg-violet-50",
    border: "border-violet-100",
    text: "text-violet-700",
    icon: "text-violet-600",
    ring: "ring-violet-100",
  },
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-100",
    text: "text-rose-700",
    icon: "text-rose-600",
    ring: "ring-rose-100",
  },
};

const toolCategories = [
  {
    title: "Navigation & Interaction",
    color: "indigo",
    icon: Navigation,
    tools: [
      "Navigate",
      "Click / Double Click / Right Click",
      "Hover",
      "Drag and Drop",
      "Scroll",
      "Press Key",
    ],
  },
  {
    title: "Form Handling",
    color: "emerald",
    icon: FormInput,
    tools: [
      "Insert Text",
      "Clear Input",
      "Select Option",
      "Check / Uncheck",
      "File Upload",
    ],
  },
  {
    title: "Assertions & Validation",
    color: "sky",
    icon: SquareMousePointer,
    tools: [
      "Assert Visible / Absence",
      "Assert Text (exact, contains, regex)",
      "Assert URL",
      "Assert Attribute",
      "Assert Element Count",
      "Assert Variable",
    ],
  },
  {
    title: "Data & Variables",
    color: "violet",
    icon: Variable,
    tools: [
      "Set / Extract Variable",
      "Random String & Unique Name",
      "Date Time values",
      "JS Transform",
      "Get Current URL",
    ],
  },
  {
    title: "Network & API",
    color: "rose",
    icon: Network,
    tools: [
      "Start Network Capture",
      "Wait for Capture",
      "Route Network Request (mock/intercept)",
      "Webhook (call external APIs)",
    ],
  },
  {
    title: "Browser Control",
    color: "amber",
    icon: Globe,
    tools: [
      "Wait / Wait for URL / Wait Network Idle",
      "Reload Page",
      "New Tab / Switch Tab / Close Tab",
      "Take Snapshot",
    ],
  },
];

const advancedFeatures = [
  {
    icon: Database,
    title: "Storage & Cookies",
    description:
      "Full control over localStorage, sessionStorage, and cookies. Set, get, and remove values to simulate any application state.",
  },
  {
    icon: GitBranch,
    title: "Conditional Logic",
    description:
      "If/Else branching lets tests handle different UI paths without duplicating entire flows.",
  },
  {
    icon: Layers,
    title: "Composable Tests",
    description:
      'Execute Test calls reusable modules. Build a "Login" test once, import it everywhere.',
  },
  {
    icon: Code,
    title: "JavaScript Escape Hatches",
    description:
      "JS Transform gives you full JavaScript when you need custom calculations, data manipulation, or complex logic.",
  },
  {
    icon: Bug,
    title: "Debug Tools",
    description:
      "Log output, Alert pauses, User Input prompts, and step-by-step snapshots for thorough debugging.",
  },
  {
    icon: Cookie,
    title: "Environment Variables",
    description:
      "Manage BASE_URL, credentials, and config per environment. Same tests work across staging, production, and feature branches.",
  },
];

const collaborationFeatures = [
  {
    icon: Radio,
    title: "Real-Time Sync",
    description:
      "When any team member updates a test, everyone sees the change instantly. No manual refresh needed.",
  },
  {
    icon: Users,
    title: "Online Presence",
    description:
      "See who on your team is currently online with live avatar indicators in the navbar.",
  },
  {
    icon: UserCheck,
    title: "Collaborative Editing",
    description:
      "Google Docs-style awareness shows who is editing which test and which step they're focused on.",
  },
];

const designPrinciples = [
  {
    icon: Lightbulb,
    title: "Intent Over Implementation",
    description: 'Define goals, not mechanics. "Click the Login button" beats xpath://div[@class=\'header\']//button[2].',
  },
  {
    icon: Eye,
    title: "Glass Box AI",
    description:
      "Every AI decision is visible. See why selectors matched, what fallbacks were tried, and how confidence was calculated.",
  },
  {
    icon: Shield,
    title: "Resilience by Design",
    description:
      "Tests fail only when features break. Self-healing isn't an add-on; it's the foundation.",
  },
  {
    icon: Repeat,
    title: "Fluidity",
    description:
      "No context switching. Author, debug, and execute in one seamless flow. Pause, edit, resume without restarting.",
  },
  {
    icon: Keyboard,
    title: "Keyboard First",
    description:
      "Power users navigate, execute, and control tests without touching the mouse. Shortcuts for everything.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100">
      <Nav />

      <main className="pt-32 pb-24">
        <div className="px-6 md:px-8 max-w-7xl mx-auto">
          <PageHeader
            badge="Features"
            title="Everything you need to test without code"
            description="55+ built-in tools, AI-powered self-healing, and team collaboration—all inside a Chrome extension. No IDE, no dependencies, no learning curve."
          />

          {/* Core Capabilities */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 grid md:grid-cols-2 gap-6"
          >
            {coreCapabilities.map((capability) => {
              const colors = colorClasses[capability.color];
              return (
                <motion.div
                  key={capability.title}
                  variants={staggerItem}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-6`}
                  >
                    <capability.icon
                      className={`w-7 h-7 ${colors.icon}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-5">
                    {capability.description}
                  </p>
                  <ul className="space-y-2">
                    {capability.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2.5 text-sm text-slate-700"
                      >
                        <CheckCircle
                          className={`w-4 h-4 ${colors.icon} flex-shrink-0`}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Tool Catalog */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-4">
                <Workflow className="w-3.5 h-3.5" />
                55+ Actions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                A tool for every testing scenario
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                From clicking buttons to mocking APIs—every action is a visual
                building block. No code required for any of them.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {toolCategories.map((category) => {
                const colors = colorClasses[category.color];
                return (
                  <motion.div
                    key={category.title}
                    variants={staggerItem}
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className={`w-10 h-10 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center`}
                      >
                        <category.icon
                          className={`w-5 h-5 ${colors.icon}`}
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {category.title}
                      </h3>
                    </div>
                    <ul className="space-y-2.5">
                      {category.tools.map((tool) => (
                        <li
                          key={tool}
                          className="flex items-center gap-2.5 text-sm text-slate-600"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace("50", "400")}`}
                          />
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* AI Deep Dive */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <div className="text-center mb-12">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    AI-Powered Intelligence
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Tests that understand what you meant
                  </h2>
                  <p className="text-slate-300 max-w-2xl mx-auto">
                    Traditional tests store rigid selectors. LessTest&apos;s AI
                    reasoning layer understands intent, adapts to changes, and
                    heals itself.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-5">
                      <Brain className="w-6 h-6 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Semantic Matching
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      When you say &quot;Click Submit,&quot; LessTest finds the
                      button by meaning—not just CSS. If the ID changes from
                      #btn-submit to #submit-button-v2, your test still passes.
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-5">
                      <Search className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Multi-Strategy Fallbacks
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Exact selector, text content, ARIA labels, visual
                      position, and AI reasoning—multiple approaches tried
                      before failing. You see which strategy succeeded.
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-5">
                      <FileCode className="w-6 h-6 text-violet-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Natural Language Steps
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Use Solve Semantic to describe actions in plain English:
                      &quot;Fill the registration form with test data&quot; or
                      &quot;Find and click the pricing link.&quot;
                    </p>
                  </div>
                </div>

                {/* Before/After comparison */}
                <div className="mt-10 grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                    <h3 className="text-lg font-bold text-red-300 mb-3">
                      Traditional Approach
                    </h3>
                    <code className="block text-sm text-red-200/80 bg-red-500/10 p-4 rounded-lg font-mono whitespace-pre-wrap">
                      {`// Breaks when ID or class changes
await page.click('#submit-btn-v2');
await page.fill('[data-testid="email"]', '...');

// Manual maintenance required
// No fallback strategies`}
                    </code>
                  </div>

                  <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <h3 className="text-lg font-bold text-emerald-300 mb-3">
                      LessTest Approach
                    </h3>
                    <div className="bg-emerald-500/10 p-4 rounded-lg space-y-3">
                      <div className="flex items-center gap-3 text-emerald-200">
                        <MousePointerClick className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">
                          Click &quot;Submit&quot; button
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-emerald-200">
                        <FormInput className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">
                          Insert text in email field
                        </span>
                      </div>
                      <p className="text-sm text-emerald-300/80 ml-8">
                        &#10003; Works even when selectors change
                        <br />
                        &#10003; AI finds elements by meaning
                        <br />
                        &#10003; Self-healing with multiple strategies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advanced Capabilities */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-xs font-semibold mb-4">
                Power Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                No-code simplicity, pro-code depth
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Start visual, go deep when you need to. LessTest scales from
                simple smoke tests to complex conditional flows with API mocking.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {advancedFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={staggerItem}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-violet-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center border border-violet-100 mb-5 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-violet-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Live Runner */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-semibold mb-4">
                  Live Runner
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Watch tests execute in real time
                </h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  No headless mystery. The Runner executes visibly in your
                  browser with step-by-step visibility, pause/resume controls,
                  and detailed logs.
                </p>

                <div className="space-y-5">
                  {[
                    {
                      icon: Eye,
                      title: "Step-by-Step Visibility",
                      desc: "Watch each step execute. See exactly what LessTest is interacting with.",
                    },
                    {
                      icon: Pause,
                      title: "Pause, Edit, Resume",
                      desc: "Stop mid-test to fix issues or adjust steps, then continue without restarting.",
                    },
                    {
                      icon: Timer,
                      title: "Smart Waiting",
                      desc: "Network idle detection and condition-based waits instead of arbitrary delays.",
                    },
                    {
                      icon: Zap,
                      title: "Instant Debugging",
                      desc: "Full execution logs with timing, screenshots, and AI decision trails.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-slate-900 mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
                  <div className="space-y-3">
                    {[
                      { step: "01", label: "Navigate to /login", status: "pass" },
                      { step: "02", label: 'Insert text "admin@test.com"', status: "pass" },
                      { step: "03", label: 'Insert text "••••••••"', status: "pass" },
                      { step: "04", label: 'Click "Sign In" button', status: "pass" },
                      { step: "05", label: "Wait for URL /dashboard", status: "pass" },
                      { step: "06", label: "Assert visible: Welcome banner", status: "active" },
                      { step: "07", label: "Assert text: username", status: "pending" },
                      { step: "08", label: "Take Snapshot", status: "pending" },
                    ].map((s) => (
                      <div
                        key={s.step}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm ${
                          s.status === "pass"
                            ? "bg-green-50 border border-green-100"
                            : s.status === "active"
                              ? "bg-indigo-50 border-2 border-indigo-300 ring-2 ring-indigo-100"
                              : "bg-slate-50 border border-slate-200 opacity-50"
                        }`}
                      >
                        <span className="text-slate-400 font-mono text-xs w-5">
                          {s.step}
                        </span>
                        {s.status === "pass" && (
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        )}
                        {s.status === "active" && (
                          <div className="w-4 h-4 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin flex-shrink-0" />
                        )}
                        {s.status === "pending" && (
                          <div className="w-4 h-4 rounded-full border-2 border-slate-300 flex-shrink-0" />
                        )}
                        <span
                          className={`${
                            s.status === "pass"
                              ? "text-green-800"
                              : s.status === "active"
                                ? "text-indigo-800 font-medium"
                                : "text-slate-500"
                          }`}
                        >
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Team Collaboration */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold mb-4">
                Collaboration
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Built for teams, not just individuals
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Share tests, see changes in real time, and know who&apos;s
                working on what. No more &quot;did you update that test?&quot;
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {collaborationFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={staggerItem}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-sky-200 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center border border-sky-100 mx-auto mb-6">
                    <feature.icon className="w-7 h-7 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Design Principles */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                  Built on five core principles
                </h2>
                <p className="text-slate-600 max-w-xl mx-auto">
                  Every feature traces back to these beliefs about how testing should work.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {designPrinciples.map((principle, i) => (
                  <div key={principle.title} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto mb-4">
                      <principle.icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                      {principle.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
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
              Ready to test smarter?
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              Install LessTest and create your first automated test in under 30
              seconds. No credit card. No setup. Just testing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg">
                Add to Chrome — Free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg">
                See How It Works
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
