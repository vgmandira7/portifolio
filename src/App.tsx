import { MotionConfig } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { Header } from "@/components/layout/Header";
import { Marquee } from "@/components/layout/Marquee";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { Stack } from "@/components/sections/Stack";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    // reducedMotion="user": respeita a preferência de "reduzir movimento" do sistema
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Header theme={theme} onToggleTheme={toggle} />
      <Marquee />
      <main>
        <Hero />
        <Stack />
        <Projects />
        <About />
      </main>
      <Contact />
    </MotionConfig>
  );
}
