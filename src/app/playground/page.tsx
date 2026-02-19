"use client";

import { motion } from "framer-motion";
import {
  FormInput,
  MousePointerClick,
  Database,
  Network,
  HardDrive,
  ArrowRight,
  Keyboard,
  GripVertical,
  Eye,
  Globe,
  Cookie,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { PageHeader } from "@/components/sections/page-header";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

const playgroundCategories = [
  {
    title: "Forms & Inputs",
    description:
      "Text fields, checkboxes, radio buttons, dropdowns, file uploads, and keyboard interactions.",
    href: "/playground/forms",
    icon: FormInput,
    color: "emerald",
    tools: [
      "Send Text",
      "Clear Input",
      "Check / Uncheck",
      "Select Option",
      "File Upload",
      "Press Key",
    ],
  },
  {
    title: "Mouse & Actions",
    description:
      "Click targets, double-click editing, right-click menus, hover tooltips, drag-and-drop, and scrolling.",
    href: "/playground/actions",
    icon: MousePointerClick,
    color: "sky",
    tools: [
      "Click",
      "Double Click",
      "Right Click",
      "Hover",
      "Drag & Drop",
      "Scroll",
    ],
  },
  {
    title: "Data & Assertions",
    description:
      "Dynamic counters, toggleable elements, attribute states, and content for variable extraction and assertions.",
    href: "/playground/data",
    icon: Database,
    color: "violet",
    tools: [
      "Assert Visible / Absence",
      "Assert Text / Attribute / Count",
      "Extract Variable",
      "Set Variable",
      "Assert URL",
    ],
  },
  {
    title: "Network & APIs",
    description:
      "Buttons that fire real HTTP requests, mock API endpoints, loading states, and response capture targets.",
    href: "/playground/network",
    icon: Network,
    color: "rose",
    tools: [
      "Start Network Capture",
      "Wait for Capture",
      "Webhook",
      "Route Network Request",
      "Wait for Network Idle",
    ],
  },
  {
    title: "Browser Storage",
    description:
      "Live viewers for localStorage, sessionStorage, and cookies. Set, read, and clear values with visual feedback.",
    href: "/playground/storage",
    icon: HardDrive,
    color: "amber",
    tools: [
      "Set / Get / Remove Local Storage",
      "Set / Get / Remove Session Storage",
      "Set / Delete Cookie",
    ],
  },
];

const colorClasses: Record<
  string,
  { bg: string; border: string; text: string; icon: string; dot: string }
> = {
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-700",
    icon: "text-emerald-600",
    dot: "bg-emerald-400",
  },
  sky: {
    bg: "bg-sky-50",
    border: "border-sky-100",
    text: "text-sky-700",
    icon: "text-sky-600",
    dot: "bg-sky-400",
  },
  violet: {
    bg: "bg-violet-50",
    border: "border-violet-100",
    text: "text-violet-700",
    icon: "text-violet-600",
    dot: "bg-violet-400",
  },
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-100",
    text: "text-rose-700",
    icon: "text-rose-600",
    dot: "bg-rose-400",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-700",
    icon: "text-amber-600",
    dot: "bg-amber-400",
  },
};

const alsoTestable = [
  { icon: Globe, label: "Navigate between pages" },
  { icon: Eye, label: "Assert URL changes" },
  { icon: Keyboard, label: "Keyboard shortcuts" },
  { icon: GripVertical, label: "Scroll to sections" },
  { icon: BarChart3, label: "Assert element counts" },
  { icon: Cookie, label: "Reload & verify state" },
];

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-100">
      <Nav />

      <main className="pt-32 pb-24">
        <div className="px-6 md:px-8 max-w-7xl mx-auto">
          <PageHeader
            badge="Playground"
            title="Your testing sandbox"
            description="A purpose-built set of interactive pages designed for testing every LessTest tool. Point your extension here and explore."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {playgroundCategories.map((category) => {
              const colors = colorClasses[category.color];
              return (
                <motion.div key={category.title} variants={staggerItem}>
                  <Link
                    href={category.href}
                    data-testid={`playground-card-${category.href.split("/").pop()}`}
                    className="group block bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 h-full"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-11 h-11 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <category.icon
                          className={`w-5.5 h-5.5 ${colors.icon}`}
                        />
                      </div>
                      <h3
                        className="text-lg font-bold text-slate-900"
                        data-testid={`playground-title-${category.href.split("/").pop()}`}
                      >
                        {category.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {category.description}
                    </p>

                    <div className="space-y-2 mb-5">
                      {category.tools.map((tool) => (
                        <div
                          key={tool}
                          className="flex items-center gap-2.5 text-xs text-slate-500"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}
                          />
                          {tool}
                        </div>
                      ))}
                    </div>

                    <div
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold ${colors.text} group-hover:gap-2.5 transition-all duration-300`}
                    >
                      Open playground
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Also testable on this page */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200">
              <div className="text-center mb-8">
                <h2
                  className="text-xl font-bold text-slate-900 mb-2"
                  data-testid="also-testable-heading"
                >
                  Also testable from this page
                </h2>
                <p className="text-sm text-slate-600">
                  Navigation, URL assertions, scrolling, and element counting
                  can all be tested right here on the hub.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {alsoTestable.map((item) => (
                  <div
                    key={item.label}
                    className="text-center"
                    data-testid="also-testable-item"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto mb-2">
                      <item.icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <span className="text-xs text-slate-600 leading-tight block">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
