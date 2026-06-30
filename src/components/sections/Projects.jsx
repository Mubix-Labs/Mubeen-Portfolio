import { ArrowUpRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-(--container-tight) mx-auto px-5 sm:px-8">
        <Reveal direction="up">
          <span className="text-azure text-sm font-medium tracking-wide">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 max-w-lg">
            Things I've shipped.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((p, i) => (
            <Reveal
              key={p.id}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.08}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-2xl border border-line bg-paper p-7 sm:p-8 transition-all duration-300 hover:border-azure/40 hover:shadow-xl hover:shadow-azure/5 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium text-azure bg-azure/10 rounded-full px-3 py-1">
                      {p.tag}
                    </span>
                    <h3 className="font-display text-2xl font-bold mt-4">
                      {p.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-ink/30 group-hover:text-azure group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0"
                  />
                </div>

                <p className="text-ink/65 text-sm leading-relaxed mt-4 max-w-xl">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs text-ink/55 border border-line rounded-full px-3 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-sm font-medium text-azure mt-6">
                  {p.linkLabel}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
