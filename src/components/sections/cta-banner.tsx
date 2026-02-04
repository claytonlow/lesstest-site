"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";

export function CTABanner() {
  return (
    <section className="px-6 md:px-8 py-24">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto"
      >
        <div className="gradient-cta rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to ship faster?
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Join thousands of developers who trust LessTest to keep their code
              quality high and their test suites fast.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-slate-100 shadow-xl"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto text-white border border-white/30 hover:bg-white/10 hover:text-white"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
