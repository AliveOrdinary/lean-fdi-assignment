import Image from "next/image";
import { HeroSection } from "./components/landing page/HeroSection";
import { ExpertiseSection } from "./components/landing page/ExpertiseSection";
import { ClientSection } from "./components/landing page/ClientSection";
import { FaqSection } from "./components/landing page/FaqSection";

export default function Home() {
  return (
    <main className="bg-gradient-linear flex flex-col w-full overflow-x-hidden bg-repeat justify-center items-start">
      <HeroSection />
      <ExpertiseSection />
      <ClientSection />
      <FaqSection />
    </main>
  );
}
