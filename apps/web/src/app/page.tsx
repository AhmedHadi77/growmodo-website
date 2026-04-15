import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Process } from "@/components/sections/process";
import { TalentsGrid } from "@/components/sections/talents";
import { Services } from "@/components/sections/services";
import { CaseStudies } from "@/components/sections/case-studies";
import { Pricing } from "@/components/sections/pricing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <Hero />
      <SocialProof />
      <TalentsGrid />
      <Process />
      <Services />
      <CaseStudies />
      <Pricing />
      <Footer />
      <FloatingActions />
    </main>
  );
}
