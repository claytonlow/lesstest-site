"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Chrome,
  Zap,
  Shield,
  Sparkles,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const checkmarkDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
  },
};

const xDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.4, delay: 0.3, ease: "easeOut" },
  },
};

const circleDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const pulseRing = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: [0.8, 1.4, 1.4],
    opacity: [0, 0.3, 0],
    transition: { duration: 1.5, delay: 0.8, ease: "easeOut" },
  },
};

const shakeTrigger = {
  hidden: { x: 0 },
  visible: {
    x: [0, -6, 6, -4, 4, -2, 2, 0],
    transition: { duration: 0.5, delay: 0.9, ease: "easeOut" },
  },
};

const nextSteps = [
  {
    icon: Chrome,
    title: "Open the extension",
    description:
      "Click the LessTest icon in your Chrome toolbar to open the side panel.",
  },
  {
    icon: Sparkles,
    title: "Create your first test",
    description:
      "Hit record, interact with your app, and watch steps appear automatically.",
  },
  {
    icon: Shield,
    title: "Run with confidence",
    description:
      "AI self-healing selectors keep your tests passing even when UI changes.",
  },
];

function AuthSuccessContent() {
  const searchParams = useSearchParams();

  const isError = searchParams.get("error") === "true";
  const title = searchParams.get("title");
  const message = searchParams.get("message");

  const displayTitle = title
    ? decodeURIComponent(title)
    : isError
      ? "Something went wrong"
      : "You\u2019re all set!";

  const displayMessage = message
    ? decodeURIComponent(message)
    : isError
      ? "We couldn\u2019t complete the sign-in process. Please try again or contact support if the problem persists."
      : "Your account has been successfully connected. You can close this tab and head back to the LessTest extension.";

  const accentColor = isError ? "#ef4444" : "#14b8a6";
  const pulseRingColor = isError ? "border-red-400" : "border-teal-400";

  return (
    <div className="max-w-2xl w-full">
      {/* Icon animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center mb-12"
      >
        <motion.div variants={isError ? shakeTrigger : {}} className="relative mb-8">
          <motion.div
            variants={pulseRing}
            className={`absolute inset-0 rounded-full border-2 ${pulseRingColor}`}
          />
          <div className="w-24 h-24 relative">
            <svg viewBox="0 0 96 96" fill="none" className="w-full h-full">
              <motion.circle
                cx="48"
                cy="48"
                r="44"
                stroke={accentColor}
                strokeWidth="3"
                variants={circleDraw}
                strokeLinecap="round"
              />
              {isError ? (
                <>
                  <motion.path
                    d="M34 34L62 62"
                    stroke={accentColor}
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    variants={xDraw}
                  />
                  <motion.path
                    d="M62 34L34 62"
                    stroke={accentColor}
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    variants={{
                      ...xDraw,
                      visible: {
                        ...xDraw.visible,
                        transition: { duration: 0.4, delay: 0.5, ease: "easeOut" },
                      },
                    }}
                  />
                </>
              ) : (
                <motion.path
                  d="M30 50L42 62L66 38"
                  stroke={accentColor}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  variants={checkmarkDraw}
                />
              )}
            </svg>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
              isError
                ? "bg-red-50 border border-red-100 text-red-600"
                : "bg-teal-50 border border-teal-100 text-teal-700"
            }`}
          >
            {isError ? "Connection Failed" : "Account Connected"}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
        >
          {displayTitle}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-slate-500 text-lg leading-relaxed max-w-md"
        >
          {displayMessage}
        </motion.p>
      </motion.div>

      {/* Action card */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
        className={`rounded-2xl border shadow-sm p-6 md:p-8 mb-10 ${
          isError
            ? "bg-red-50 border-red-200"
            : "bg-white border-slate-200"
        }`}
      >
        {isError ? (
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h2 className="text-lg font-semibold text-slate-900">
                  Try again
                </h2>
              </div>
              <p className="text-sm text-slate-500">
                Head back to the extension and attempt to sign in again.
              </p>
            </div>
            <Button
              size="lg"
              className="w-full sm:w-auto shrink-0 bg-red-600 hover:bg-red-700 shadow-red-200"
              onClick={() => window.close()}
            >
              <RefreshCw className="w-4 h-4" />
              Close &amp; Retry
            </Button>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg font-semibold text-slate-900 mb-1">
                Return to LessTest
              </h2>
              <p className="text-sm text-slate-500">
                The extension is ready to use. You can safely close this tab.
              </p>
            </div>
            <Button
              size="lg"
              className="w-full sm:w-auto shrink-0"
              onClick={() => window.close()}
            >
              Close Tab
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </motion.div>

      {/* Next steps — only shown on success */}
      {!isError && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={staggerItem}
            className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 text-center"
          >
            What&apos;s next
          </motion.p>

          <div className="grid gap-4">
            {nextSteps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={staggerItem}
                className="flex items-start gap-4 bg-white rounded-xl border border-slate-200 p-5 hover:border-teal-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-center gap-3 shrink-0">
                  <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                    {i + 1}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-teal-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-0.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Troubleshooting tips — only shown on error */}
      {isError && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={staggerItem}
            className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 text-center"
          >
            Troubleshooting
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="bg-white rounded-xl border border-slate-200 p-5"
          >
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                Make sure pop-ups aren&apos;t blocked for this site
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                Check that third-party cookies are enabled in Chrome settings
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                Try signing in with a different browser profile
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                If the issue persists,{" "}
                <a
                  href="mailto:support@lesstest.dev"
                  className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
                >
                  contact support
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      )}

      {/* Footer link */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8 }}
        className="mt-10 text-center"
      >
        <p className="text-sm text-slate-400">
          {isError ? (
            <>
              Still stuck?{" "}
              <a
                href="mailto:support@lesstest.dev"
                className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
              >
                Get help from our team
              </a>
            </>
          ) : (
            <>
              Need help getting started?{" "}
              <Link
                href="/how-it-works"
                className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
              >
                See how it works
              </Link>
            </>
          )}
        </p>
      </motion.div>
    </div>
  );
}

export default function AuthSuccessPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-100 flex flex-col">
      {/* Minimal top bar */}
      <div className="px-6 md:px-8 py-5 max-w-7xl mx-auto w-full">
        <Link href="/" className="inline-flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
            <Zap className="text-white w-5 h-5 fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">
            LessTest
          </span>
        </Link>
      </div>

      <main className="flex-1 flex items-center justify-center px-6 md:px-8 pb-24">
        <Suspense
          fallback={
            <div className="w-24 h-24 rounded-full border-2 border-slate-200 animate-pulse" />
          }
        >
          <AuthSuccessContent />
        </Suspense>
      </main>
    </div>
  );
}
