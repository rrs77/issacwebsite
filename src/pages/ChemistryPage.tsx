import { Atom, Beaker, Flame, Target } from "lucide-react";
import { CtaButton, FadeIn, SectionHeading } from "@/components/ui";

const TOPICS = [
  {
    title: "Atomic structure and the periodic table",
    body: "Electron configuration, ions and trends — building the foundation for bonding and reactivity questions.",
  },
  {
    title: "Bonding, structure and properties",
    body: "Ionic, covalent and metallic bonding with clear diagrams, plus linking structure to melting point and conductivity.",
  },
  {
    title: "Quantitative chemistry",
    body: "Moles, concentration, percentage yield and atom economy — the calculation questions that often decide grades.",
  },
  {
    title: "Chemical changes and energy",
    body: "Acids, electrolysis, exothermic/endothermic reactions and reaction profiles from AQA paper styles.",
  },
  {
    title: "Rates, equilibria and organic chemistry",
    body: "Collision theory, reversible reactions and hydrocarbons — with graphs and “explain” answers that use the right science words.",
  },
  {
    title: "Analysis, atmosphere and resources",
    body: "Chromatography, gases of the atmosphere and sustainable resources — including required practical technique.",
  },
];

export function ChemistryPage() {
  return (
    <>
      <section className="hero-atmosphere relative overflow-hidden text-white">
        <div className="mesh-lines pointer-events-none absolute inset-0 opacity-30" aria-hidden />
        <div className="safe-px relative mx-auto max-w-6xl py-16 sm:py-20">
          <p className="text-xs font-bold tracking-[0.18em] text-gold-soft uppercase">
            Chemistry · AQA
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            Chemistry tuition built around AQA exam questions
          </h1>
          <p className="mt-5 max-w-2xl text-base text-mint/90 sm:text-lg">
            Personalised AQA Chemistry support for Year 7 to GCSE. I studied AQA Science and
            achieved Grade 9 — lessons focus on calculations, bonding models and the question
            styles that regularly lose marks.
          </p>
          <div className="mt-8">
            <CtaButton href="/contact">Enquire about Chemistry</CtaButton>
          </div>
        </div>
      </section>

      <section className="atmosphere">
        <div className="safe-px mx-auto max-w-6xl py-16 sm:py-20">
          <FadeIn>
            <SectionHeading title="Calculations, concepts and mark schemes">
              Chemistry often feels hard because ideas and maths sit together. We break topics into
              clear steps, then practise the AQA calculation and explanation questions that match
              your specification — moles, titration maths, electrolysis and rates graphs included.
            </SectionHeading>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Atom,
                title: "Specification first",
                body: "Content mapped to AQA Chemistry topics so every lesson links to what you are assessed on.",
              },
              {
                icon: Beaker,
                title: "Calculation confidence",
                body: "Moles, concentration and yield practised with the layouts examiners expect to see.",
              },
              {
                icon: Flame,
                title: "Real sticking points",
                body: "Bonding diagrams, half-equations and “suggest” questions that need precise wording.",
              },
              {
                icon: Target,
                title: "Exam technique",
                body: "Command words, significant figures and method marks — so working is not wasted.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={0.05 * i}>
                <div className="h-full border-t-2 border-teal pt-5">
                  <item.icon className="mb-3 h-6 w-6 text-gold" strokeWidth={1.75} />
                  <h2 className="font-display text-lg font-bold text-ink">{item.title}</h2>
                  <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="safe-px mx-auto max-w-6xl py-16 sm:py-20">
          <FadeIn>
            <SectionHeading eyebrow="Coverage" title="What we can work on">
              We can focus on one stubborn unit or revise more widely across the AQA Chemistry
              content you need for your papers.
            </SectionHeading>
          </FadeIn>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {TOPICS.map((topic, i) => (
              <FadeIn key={topic.title} delay={0.04 * i}>
                <li className="rounded-lg bg-mint/70 px-4 py-3.5 text-ink">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden />
                    <div>
                      <span className="font-semibold">{topic.title}</span>
                      <p className="mt-1 text-sm text-ink-soft">{topic.body}</p>
                    </div>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>

          <FadeIn>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-ink-soft">
                Chemistry tuition: <span className="font-bold text-ink">£45 per hour</span> · online
                or home (within 1–2 miles of Oaklands School)
              </p>
              <CtaButton href="/contact" variant="teal">
                Book Chemistry tuition
              </CtaButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
