import { Gauge, Search } from "lucide-react";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { saasTool } from "../../data/projects";

export default function SaasSpotlight() {
  return (
    <section id="saas" className="py-20 sm:py-28 bg-ink text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 80% 20%, rgba(59,130,246,0.25), transparent 60%)",
        }}
      />
      <div className="max-w-(--container-tight) mx-auto px-5 sm:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <Reveal direction="right" className="lg:col-span-7">
            <span className="text-azure-light text-sm font-medium tracking-wide">
              Micro SaaS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
              {saasTool.name}
            </h2>
            <p className="text-white/65 text-base leading-relaxed mt-4 max-w-lg">
              {saasTool.description}
            </p>

            <div className="flex flex-wrap gap-x-7 gap-y-2 mt-6">
              <div className="flex items-center gap-2 text-sm text-white/70 leading-none">
                <Gauge size={18} className="text-azure-light shrink-0" strokeWidth={2} />
                <span>Performance optimization</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70 leading-none">
                <Search size={18} className="text-azure-light shrink-0" strokeWidth={2} />
                <span>SEO optimization</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-7">
              <Button href={saasTool.getStartedLink} variant="primary">
                Get Started
              </Button>
              <Button href={saasTool.pricingLink} variant="secondary">
                Buy License
              </Button>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
              <div className="flex items-center gap-1.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <div className="space-y-2.5 font-mono text-xs text-white/50">
                <p>$ scan https://your-site.com</p>
                <p className="text-azure-light">✓ Performance — 100</p>
                <p className="text-azure-light">✓ SEO — 100</p>
                <p className="text-azure-light">✓ Accessibility — 100</p>
                <p className="text-white/30">Optimizations applied automatically.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
