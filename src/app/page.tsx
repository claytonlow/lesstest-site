import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Features } from "@/components/sections/features";
import { TerminalDemo } from "@/components/sections/terminal-demo";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTABanner } from "@/components/sections/cta-banner";
import { Footer } from "@/components/sections/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100">
      <Nav />
      <Hero />
      <SocialProof />
      <Features />
      <TerminalDemo />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
}
