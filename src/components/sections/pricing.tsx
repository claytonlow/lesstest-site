"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for side projects and learning",
    features: [
      "Unlimited local tests",
      "Basic reporting",
      "Community support",
      "Single project",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Team",
    price: "$29",
    period: "per month",
    description: "For growing teams shipping fast",
    features: [
      "Everything in Free",
      "Parallel cloud execution",
      "Advanced analytics",
      "Up to 10 team members",
      "Priority support",
      "CI/CD integrations",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced needs",
    features: [
      "Everything in Team",
      "Unlimited team members",
      "SSO & SAML",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 md:px-8 py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className={`relative p-8 rounded-2xl ${
                plan.highlighted
                  ? "bg-slate-900 text-white scale-105 shadow-2xl"
                  : "bg-white border border-slate-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-500 text-white text-sm font-semibold rounded-full">
                  Most Popular
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
                        plan.highlighted ? "text-slate-300" : "text-slate-500"
                      }
                    >
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-2 text-sm ${
                    plan.highlighted ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.highlighted ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    />
                    <span
                      className={
                        plan.highlighted ? "text-slate-200" : "text-slate-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "secondary" : "primary"}
                className={`w-full ${plan.highlighted ? "bg-white text-slate-900 hover:bg-slate-100" : ""}`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
