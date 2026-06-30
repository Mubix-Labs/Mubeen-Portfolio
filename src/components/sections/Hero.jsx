import { Suspense, lazy, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const HeroScene = lazy(() => import("../three/HeroScene"));

function useShouldRenderScene() {
  const [should, setShould] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isNarrowViewport = window.innerWidth < 768;

    if (prefersReducedMotion || isNarrowViewport) return;

    const schedule = window.requestIdleCallback || ((cb) => setTimeout(cb, 1200));
    const id = schedule(() => setShould(true));
    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(id);
    };
  }, []);

  return should;
}

export default function Hero() {
  const shouldRenderScene = useShouldRenderScene();

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-mesh"
    >
      {shouldRenderScene && (
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      )}
      <div className="max-w-(--container-tight) mx-auto px-5 sm:px-8 pt-24 pb-16 w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-azure font-medium tracking-wide text-sm mb-4"
        >
          Founder, Mubix Labs | Full-Stack Web Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-3xl"
        >
          Building products that
          <span className="text-gradient"> ship, scale,</span> and load fast.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-base sm:text-lg text-ink/65 font-body"
        >
          BSCS student at Bahria University Islamabad, building cross-platform
          apps, SaaS tools, and websites and running Mubix Labs, a software
          house I founded to do it for clients too.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <Button href="#projects" external={false} variant="primary">
            View Projects
          </Button>
          <Button href="#contact" external={false} variant="ghost">
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
