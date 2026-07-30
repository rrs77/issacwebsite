import { Atom, BookOpen, FlaskConical, Target } from "lucide-react";
import { CtaButton, FadeIn, SectionHeading } from "@/components/ui";

const AREAS = [
  {
    title: "Biology papers",
    body: "Cell biology through ecology — using AQA Combined Science (Trilogy) topic lists, not a vague “all sciences together” approach. We practise the shorter application questions that appear across the Bio papers.",
  },
  {
    title: "Chemistry papers",
    body: "Atomic structure, bonding, quantitative chemistry and rates at Combined Science depth. Calculations and required practicals get special attention because they recur every year.",
  },
  {
    title: "Physics papers",
    body: "Energy, electricity, particles, forces, waves and magnetism — formula triangles, units and the explain/calculate mix typical of AQA Combined Physics.",
  },
];

export function SciencePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 90% 10%, rgba(124,183,163,0.35), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(212,160,23,0.2), transparent 50%)",
          }}
        />
        <div className="safe-px relative mx-auto max-w-6xl py-16 sm:py-20">
          <p className="text-xs font-bold tracking-[0.18em] text-sage uppercase">
            AQA Combined Science
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            Combined Science tuition for the AQA qualification
          </h1>
          <p className="mt-5 max-w-2xl text-base text-mint/90 sm:text-lg">
            Support for AQA Combined Science (Trilogy) — the dual-award course with Biology,
            Chemistry and Physics papers. I did not take Combined Science myself; I studied AQA
            separate sciences and achieved Grade 9, so lessons follow the Combined Science
            specification and the papers you actually sit.
          </p>
          <div className="mt-8">
            <CtaButton href="/contact">Enquire about Combined Science</CtaButton>
          </div>
        </div>
      </section>

      <section className="atmosphere">
        <div className="safe-px mx-auto max-w-6xl py-16 sm:py-20">
          <FadeIn>
            <SectionHeading title="Built around the AQA Combined Science specification">
              Combined Science is a large course with a clear structure. We work topic-by-topic
              against the AQA Combined Science content, use exam-style questions for each paper,
              and tackle the common issues — muddled key terms, weak calculation layouts, and
              practical-skills questions that need a precise method.
            </SectionHeading>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {AREAS.map((area, i) => (
              <FadeIn key={area.title} delay={0.06 * i}>
                <article className="h-full rounded-2xl bg-white/70 p-6 ring-1 ring-teal/10 sm:p-7">
                  <h2 className="font-display text-xl font-bold text-teal">{area.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                    {area.body}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="safe-px mx-auto max-w-6xl py-16 sm:py-20">
          <FadeIn>
            <SectionHeading eyebrow="Approach" title="How Combined Science sessions help">
              Friendly, structured support aimed at the real problems Combined Science students
              face — volume of content, shared maths skills across papers, and knowing what each
              question is asking for.
            </SectionHeading>
          </FadeIn>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {[
              {
                icon: BookOpen,
                title: "Specification mapping",
                body: "We track which Combined Science topics are secure and which still cost marks, so revision stays efficient.",
              },
              {
                icon: Atom,
                title: "Paper-by-paper practice",
                body: "Bio, Chem and Physics papers each have patterns. We practise those question types until the approach feels familiar.",
              },
              {
                icon: FlaskConical,
                title: "Required practicals",
                body: "Variables, apparatus, anomalies and conclusions — the practical skills questions that appear across the dual award.",
              },
              {
                icon: Target,
                title: "Grade-focused technique",
                body: "Using your current and predicted grades, we prioritise the marks that move you up — not generic topic lists.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={0.05 * i}>
                <div className="flex gap-4">
                  <item.icon className="mt-0.5 h-7 w-7 shrink-0 text-gold" strokeWidth={1.75} />
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm text-ink-soft sm:text-base">{item.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-14 flex flex-col gap-4 rounded-2xl bg-teal px-6 py-7 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div>
                <p className="font-display text-xl font-bold">
                  AQA Combined Science · £45 per hour
                </p>
                <p className="mt-1 text-sm text-mint/85">
                  Online or in-home within 1–2 miles of Oaklands School, Chelmsford
                </p>
              </div>
              <CtaButton href="/contact">Book Combined Science tuition</CtaButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
