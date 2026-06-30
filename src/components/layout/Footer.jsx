import { Code2, Briefcase, Camera, AtSign } from "lucide-react";
import { socials } from "../../data/socials";

const iconMap = {
  github: Code2,
  linkedin: Briefcase,
  instagram: Camera,
  twitter: AtSign,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="max-w-(--container-tight) mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-display text-xl font-bold">
              Muhammad<span className="text-azure-light"> Mubeen</span>
            </span>
            <p className="text-white/50 text-sm mt-1 max-w-xs">
              Founder, Mubix Labs | Full-Stack Web Developer.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((s) => {
              const Icon = iconMap[s.id];
              return (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:border-azure-light hover:text-azure-light transition-colors duration-300"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row gap-2 justify-between text-xs text-white/40">
          <span>© {year} Muhammad Mubeen. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
