import { Background } from "@/components/Background";
import { Hero } from "@/components/sections/Hero";
import { ForWhom } from "@/components/sections/ForWhom";
import { Program } from "@/components/sections/Program";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Background />
      <Hero />
      <ForWhom />
      <Program />
      <Pricing />
      <Footer />
    </main>
  );
}
