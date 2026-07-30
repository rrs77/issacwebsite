import { Dna, Leaf, Microscope, Target } from "lucide-react";
import { CtaButton, FadeIn, SectionHeading } from "@/components/ui";

const TOPICS = [
  {
    title: "Cell biology and organisation",
    body: "Cell structure, transport, microscopy maths and organ systems — including how to tackle required practical write-ups.",
  },
  {
    title: "Infection and response",
    body: "Pathogens, immunity and drug development — with the explain/evaluate questions that often lose marks for vague answers.",
  },
  {
    title: "Bioenergetics",
    body: "Photosynthesis and respiration: word and symbol equations, limiting factors and graph interpretation from AQA papers.",
  },
  {
    title: "Homeostasis and response",
    body: "Nervous and hormonal control, blood glucose and the kidney — practising multi-step application questions.",
  },
  {
    title: "Inheritance, variation and evolution",
    body: "DNA, genetic crosses, natural selection and classification — including Punnett square accuracy under time pressure.",
  },
  {
    title: "Ecology",
    body: "Communities, sampling, biodiversity and cycles — with data-handling questions tied to the AQA specification.",
  },
];

export function BiologyPage() {
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
          <p className="text-xs font-bold tracking-[0.18em] text-sage uppercase">Biology · AQA</p>
          <h1 className="mt-3 max-w-3xl font-display text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            Biology tuition focused on the AQA specification
          </h1>
          <p className="mt-5 max-w-2xl text-base text-mint/90 sm:text-lg">
            Peer tutoring for Year 7 to GCSE Biology. I studied AQA Science and achieved Grade 9 —
            so lessons use the topic language, required practicals and exam-question styles you
            will see in class and in papers.
          </p>
          <div className="mt-8">
            <CtaButton href="/contact">Enquire about Biology</CtaButton>
          </div>
        </div>
      </section>

      <section className="atmosphere">
        <div className="safe-px mx-auto max-w-6xl py-16 sm:py-20">
          <FadeIn>
            <SectionHeading title="From tricky concepts to mark-scheme answers">
              Biology is less about memorising every line and more about using the right key terms
              in the right order. We slow down on topics that feel abstract — enzymes, genetics,
              homeostasis — then practise AQA-style questions until your answers match what the
              mark scheme is looking for.
            </SectionHeading>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Microscope,
                title: "Specification first",
                body: "Lessons follow AQA topic lists so revision maps cleanly onto what you are assessed on.",
              },
              {
                icon: Dna,
                title: "Real sticking points",
                body: "Target issues like limiting factors, genetic crosses and “explain” vs “describe” questions.",
              },
              {
                icon: Leaf,
                title: "Required practicals",
                body: "Method, variables, anomalies and conclusions — the practical skills questions that recur yearly.",
              },
              {
                icon: Target,
                title: "Exam technique",
                body: "Command words, graph work and structured answers that pick up every available mark.",
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
              We can drill a single weak unit or build a wider plan across the AQA Biology content
              you are studying.
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
                Biology tuition: <span className="font-bold text-ink">£45 per hour</span> · online
                or home (within 1–2 miles of Oaklands School)
              </p>
              <CtaButton href="/contact" variant="teal">
                Book Biology tuition
              </CtaButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
