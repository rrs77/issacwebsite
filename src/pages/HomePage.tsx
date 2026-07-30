import { Link } from "wouter";
import { Monitor, Home, Compass, Sparkles, BookOpen, FlaskConical, Dna, Atom } from "lucide-react";
import { CtaButton, FadeIn, SectionHeading } from "@/components/ui";

const SUBJECTS = [
  {
    href: "/maths",
    title: "Mathematics",
    board: "Edexcel · Foundation or Higher",
    body: "Algebra, number, geometry, ratio and exam technique — mapped to the Edexcel GCSE specification and past-paper style questions.",
    icon: BookOpen,
    tone: "bg-teal text-white",
    accent: "text-gold-soft",
    link: "hover:text-white",
  },
  {
    href: "/biology",
    title: "Biology",
    board: "AQA",
    body: "Cells, organisation, infection, bioenergetics and more — worked through with the AQA topic list and the question types that often trip people up.",
    icon: Dna,
    tone: "bg-ink text-white",
    accent: "text-sage",
    link: "hover:text-white",
  },
  {
    href: "/chemistry",
    title: "Chemistry",
    board: "AQA",
    body: "Atomic structure, bonding, quantitative chemistry and rates — with a clear focus on calculations and how mark schemes award method marks.",
    icon: Atom,
    tone: "bg-teal-deep text-white",
    accent: "text-gold-soft",
    link: "hover:text-white",
  },
  {
    href: "/science",
    title: "Combined Science",
    board: "AQA Combined Science (Trilogy)",
    body: "Support for the AQA Combined Science qualification — Biology, Chemistry and Physics papers, required practicals and dual-award exam technique.",
    icon: FlaskConical,
    tone: "bg-ink text-white",
    accent: "text-sage",
    link: "hover:text-white",
  },
] as const;

export function HomePage() {
  return (
    <>
      <section className="hero-atmosphere relative isolate overflow-hidden text-white">
        <div className="mesh-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="safe-px relative mx-auto flex min-h-[calc(100dvh-4.5rem)] max-w-6xl items-center py-12 sm:py-16 lg:py-20">
          <div className="animate-fade-rise max-w-3xl">
            <p className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Old Moulsham Tutoring
            </p>
            <div className="mt-3 h-0.5 w-14 origin-left -rotate-3 bg-gold" aria-hidden />
            <h1 className="mt-5 font-display text-balance text-4xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
              Personalised tutoring from someone who understands
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-mint/90 sm:text-lg">
              Friendly, personalised support in Edexcel Maths and AQA Science for Year 7 through to
              GCSE — built around your specification, your papers and the topics you find hardest.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CtaButton href="/contact">Enquire now</CtaButton>
              <CtaButton href="/#subjects" variant="outline">
                Explore subjects
              </CtaButton>
            </div>
            <p className="mt-6 text-sm font-semibold text-sage-soft">
              Maths, Biology, Chemistry and Combined Science: £45 per hour
            </p>
          </div>
        </div>
      </section>

      <section className="atmosphere border-b border-teal/10">
        <div className="safe-px mx-auto max-w-6xl py-14 sm:py-16">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                I recently achieved Grade 9 in Edexcel Mathematics and in AQA Science. I did not
                take Combined Science myself — I studied separate sciences — so when I tutor AQA
                Combined Science I work directly from that specification and the papers you sit,
                rather than pretending I sat the dual award.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
                This is peer tutoring: clear, relatable lessons from someone who has just been
                through GCSE, not from a classroom teacher. We focus on what you need — exam
                questions, specification language and the habits that win marks.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="subjects" className="scroll-mt-24 bg-surface">
        <div className="safe-px mx-auto max-w-6xl py-16 sm:py-20">
          <FadeIn>
            <SectionHeading eyebrow="Subjects" title="Maths, Biology, Chemistry and Combined Science">
              Each subject has its own focus — tied to the exam board you are entered for, and to
              the questions you will actually meet.
            </SectionHeading>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {SUBJECTS.map((subject, i) => (
              <FadeIn key={subject.href} delay={0.05 * i}>
                <article className={`group relative h-full overflow-hidden rounded-2xl ${subject.tone}`}>
                  <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-sage/20 blur-2xl transition group-hover:bg-sage/30" />
                  <div className="relative flex h-full flex-col p-7 sm:p-8">
                    <subject.icon className={`mb-5 h-9 w-9 ${subject.accent}`} strokeWidth={1.75} />
                    <p className="text-xs font-bold tracking-[0.14em] text-mint/70 uppercase">
                      {subject.board}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold">{subject.title}</h3>
                    <p className="mt-3 flex-1 text-mint/90">{subject.body}</p>
                    <Link
                      href={subject.href}
                      className={`mt-6 inline-flex font-bold ${subject.accent} transition ${subject.link}`}
                    >
                      View {subject.title} tuition →
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-24 atmosphere">
        <div className="safe-px mx-auto max-w-6xl py-16 sm:py-20">
          <FadeIn>
            <SectionHeading eyebrow="How it works" title="Personalised lesson planning">
              Every lesson is planned around you. We identify the specification topics and question
              types that are holding you back, then build confidence through worked examples and
              exam-style practice.
            </SectionHeading>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Compass,
                title: "Find the gaps",
                body: "We start from your current and predicted grades, year group and recent papers — so we know which topics and command words need work first.",
              },
              {
                icon: Sparkles,
                title: "Build confidence",
                body: "Clear explanations, then the same style of exam questions your board uses. Lessons move at a pace that feels right for you.",
              },
              {
                icon: BookOpen,
                title: "Progress steadily",
                body: "Each session builds on the last, with a focus on lasting understanding — so you walk into class and exams feeling prepared.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={0.06 * i}>
                <div className="h-full border-t-2 border-gold pt-6">
                  <item.icon className="mb-4 h-7 w-7 text-teal" strokeWidth={1.75} />
                  <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="tuition" className="scroll-mt-24 bg-teal-deep text-white">
        <div className="safe-px mx-auto max-w-6xl py-16 sm:py-20">
          <FadeIn>
            <SectionHeading light eyebrow="Where we learn" title="Online or in your home">
              Lessons are available online, or in your home if you live within about one to two
              miles of Oaklands School in Chelmsford — close enough to walk to.
            </SectionHeading>
          </FadeIn>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <FadeIn delay={0.05}>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm sm:p-8">
                <Monitor className="mb-4 h-8 w-8 text-gold-soft" strokeWidth={1.75} />
                <h3 className="font-display text-xl font-bold">Online tuition</h3>
                <p className="mt-3 text-mint/90">
                  Flexible video lessons from wherever you are. Screen sharing, shared notes and
                  clear worked examples keep sessions interactive and focused.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm sm:p-8">
                <Home className="mb-4 h-8 w-8 text-sage" strokeWidth={1.75} />
                <h3 className="font-display text-xl font-bold">Home tuition</h3>
                <p className="mt-3 text-mint/90">
                  In-person lessons at your home within roughly 1–2 miles of Oaklands School,
                  Chelmsford — ideal when face-to-face support feels most helpful.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.18}>
            <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl bg-coral/15 px-6 py-6 sm:flex-row sm:items-center sm:px-8">
              <div>
                <p className="font-display text-2xl font-bold text-gold-soft">£45 per hour</p>
                <p className="mt-1 text-sm text-mint/85">
                  Maths and Science tuition · Year 7 to GCSE
                </p>
              </div>
              <CtaButton href="/contact">Request a session</CtaButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
