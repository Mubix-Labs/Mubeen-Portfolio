import { Layers, Cloud, Globe } from "lucide-react";
import Reveal from "../ui/Reveal";
import { services } from "../../data/services";

const icons = { "cross-platform": Layers, saas: Cloud, website: Globe };

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-paper-dim">
      <div className="max-w-(--container-tight) mx-auto px-5 sm:px-8">
        <Reveal direction="up">
          <span className="text-azure text-sm font-medium tracking-wide">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 max-w-lg">
            What I build, for clients.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {services.map((s, i) => {
            const Icon = icons[s.id];
            return (
              <Reveal key={s.id} direction="up" delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-line bg-paper p-7 transition-all duration-300 hover:border-azure/40 hover:shadow-lg hover:shadow-azure/5 hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-xl bg-azure/10 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-azure" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-ink/65 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
