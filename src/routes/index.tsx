import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";

import heroStudio from "@/assets/hero-studio.jpg";
import { Parallax, Reveal } from "@/components/motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Niharika Singh — AI Visual Creation & Digital Marketing" },
      {
        name: "description",
        content:
          "Portfolio of Niharika Singh, first-semester BBA student in New Age Digital Marketing at JECRC University, exploring AI-assisted advertising and visual creation.",
      },
      { property: "og:title", content: "Niharika Singh — Portfolio" },
      {
        property: "og:description",
        content:
          "New Age Digital Marketing student exploring AI visual creation and campaign storytelling.",
      },
      { property: "og:url", content: "/" },
    ],
  }),
  component: HomePage,
});

const interests = [
  {
    numeral: "01",
    title: "New Age Digital Marketing",
    body: "Studying how modern brands earn attention — campaigns, consumer behaviour and digital-first strategy, one semester at a time.",
  },
  {
    numeral: "02",
    title: "AI Visual Creation",
    body: "Turning written ideas into finished frames and film with tools like Google Flow — from first prompt to final render.",
  },
  {
    numeral: "03",
    title: "Visual Storytelling",
    body: "Believing the concept comes first: an ad should say something true about the product before it looks beautiful.",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:pb-28 lg:pt-40">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-copper-soft" aria-hidden="true" />
              Portfolio · 2026
            </p>
            <h1 className="display-title mt-6 text-5xl text-foreground sm:text-6xl lg:text-7xl">
              Niharika
              <br />
              Singh<span className="text-copper">.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm a first-semester BBA student in{" "}
              <span className="font-semibold text-foreground">
                New Age Digital Marketing
              </span>{" "}
              at JECRC University, exploring how{" "}
              <span className="font-semibold text-foreground">
                AI-assisted visual creation
              </span>{" "}
              can shape advertising and brand storytelling.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View projects
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground/50 hover:bg-card"
              >
                <Mail size={15} aria-hidden="true" />
                Contact me
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="frame-offset rounded-2xl">
              <Parallax strength={0.12} className="overflow-hidden rounded-2xl">
                <img
                  src={heroStudio}
                  alt="Editorial overhead still life of a creative director's desk with campaign proofs, color swatches, dried olive branches and an amber perfume bottle"
                  width={1600}
                  height={1008}
                  className="h-[320px] w-full scale-110 object-cover sm:h-[420px] lg:h-[520px]"
                  fetchPriority="high"
                />
              </Parallax>
              <p className="mt-4 text-right text-xs tracking-wide text-muted-foreground">
                Campaign art direction — desk study
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Interests */}
      <section aria-labelledby="interests-heading" className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <p className="eyebrow">What I'm drawn to</p>
            <h2
              id="interests-heading"
              className="display-title mt-4 text-3xl text-foreground sm:text-4xl"
            >
              Three interests, one direction
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {interests.map((item, i) => (
              <Reveal key={item.numeral} delay={i * 120}>
                <article className="flex h-full flex-col bg-card p-7 transition-colors hover:bg-secondary/40 sm:p-8">
                  <span className="font-display text-3xl text-copper/70">
                    {item.numeral}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured project teaser */}
      <section aria-labelledby="featured-heading" className="border-t border-border/70 bg-card/60">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">Selected work</p>
            <h2
              id="featured-heading"
              className="display-title mt-4 text-3xl text-foreground sm:text-4xl"
            >
              My first campaign: BELLAVITA Honey Oud
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              An academic concept project built from the basic ideology up —
              concept development in Claude, visual creation in Google Flow —
              and an ad film that orbits the bottle.
            </p>
            <Link
              to="/projects"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-olive"
            >
              See the full project
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <blockquote className="border-l-2 border-copper pl-6 font-display text-2xl italic leading-snug text-foreground sm:text-3xl">
              "Indulge in sweetness. Experience the oud."
              <footer className="mt-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Headline from the campaign layout
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>
    </>
  );
}
