import Reveal from "../ui/Reveal";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-(--container-tight) mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal direction="right" className="md:col-span-4">
            <span className="text-azure text-sm font-medium tracking-wide">
              About
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Founder by title, engineer by practice.
            </h2>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="md:col-span-8">
            <p className="text-ink/70 text-base sm:text-lg leading-relaxed">
              I'm a <strong className="text-ink">BSCS student at Bahria
              University Islamabad</strong>, and a full-stack web developer
              by trade. I founded and run{" "}
              <strong className="text-ink">Mubix Labs</strong>, a software
              house, as its CEO but day to day, I'm hands-on building the
              products themselves: cross-platform apps, SaaS tools, and
              websites, end to end.
            </p>
            <p className="text-ink/70 text-base sm:text-lg leading-relaxed mt-4">
              My core expertise is{" "}
              <strong className="text-ink">full-stack web development </strong>
              that's the lens everything else is built through, whether
              it's a client project at Mubix Labs or a tool I'm shipping on
              my own.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
