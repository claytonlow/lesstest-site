"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface PageHeaderProps {
  badge?: string;
  title: string;
  description: string;
}

export function PageHeader({ badge, title, description }: PageHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="text-center max-w-3xl mx-auto"
    >
      {badge && (
        <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-6">
          {badge}
        </span>
      )}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
