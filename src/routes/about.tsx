import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Compass, Telescope } from "lucide-react";

import aboutCraft from "@/assets/about-craft.jpg";
import { Parallax, Reveal } from "@/components/motion";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Niharika Singh" },
      {
        name: "description",
        content:
          "Niharika Singh's learning journey: BBA in New Age Digital Marketing at JECRC University, interests in AI visual creation, and a career goal in AI-assisted advertising.",
      },
      { property: "og:title", content: "About — Niharika Singh" },
      {
        property: "og:description",
        content:
          "Education, interests and career goal of a New Age Digital Marketing student exploring AI visual creation.",
      },
      { property: "og:url", content: "/about" },
    ],
  }),
  component: AboutPage,
});

const facts = [
  { label: "University", value: "JECRC University" },
  { label: "Degree", value: "BBA — New Age Digital Marketing" },
  { label: "Year", value: "1st Semester" },
  { label: "Career goal", value: "AI Visual Creation" },
];

const blocks = [
  {
    icon: Compass,
    title: "What genuinely interests me",
    body: "AI visual creation is the thread through everything I make right now. I enjoy sitting with a product brief, finding the one feeling an ad should leave behind, and then building the visuals around it. Advertising is where that curiosity becomes concrete — a brief, an idea, a finished frame.",
  },
  {
    icon: GraduationCap,
    title: "My learning journey",
    body: "I started my BBA in New Age Digital Marketing this year, so most of my learning is fresh and self-driven alongside the coursework. My first real experiment was a complete ad concept for BELLAVITA's Honey Oud fragrance: I worked out the basic ideology and copy with Claude, then created the visuals and an ad film with Google Flow. It taught me how much discipline sits behind a polished-looking ad.",
  },
  {
    icon: Telescope,
    title: "Where I'm heading",
    body: "My goal is a career in AI visual creation — making advertising imagery and film where human ideas and AI tools work together. Right now that means building honest, well-crafted concept projects one after another, and letting the work show my taste before I ever claim expertise.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        index="02"
        eyebrow="About me"
        title={
          <>
            Curious first,
            <br />
            craft second<span className="text-copper">.</span>
          </>
        }
        intro="A short, honest picture of who I am, what I'm studying, and where I want to take it."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <div className="frame-offset rounded-2xl lg:sticky lg:top-28">
              <Parallax strength={0.1} className="overflow-hidden rounded-2xl">
                <img
                  src={aboutCraft}
                  alt="Hands arranging printed concept frames and typography proofs on an ivory studio table beside a laptop"
                  width={1008}
                  height={1104}
                  loading="lazy"
                  className="h-[380px] w-full scale-110 object-cover sm:h-[460px] lg:h-[540px]"
                />
              </Parallax>
              <p className="mt-4 text-xs tracking-wide text-muted-foreground">
                Concept frames, printed and reviewed — how every project here began.
              </p>
            </div>
          </Reveal>

          <div className="space-y-12">
            {blocks.map((block, i) => (
              <Reveal key={block.title} delay={i * 100}>
                <article>
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-secondary text-forest">
                      <block.icon size={18} aria-hidden="true" />
                    </span>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      {block.title}
                    </h2>
                  </div>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {block.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Facts strip */}
        <Reveal className="mt-16 sm:mt-20">
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-card p-6">
                <dt className="eyebrow !text-muted-foreground">{fact.label}</dt>
                <dd className="mt-2 font-display text-lg font-semibold text-foreground">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>
    </>
  );
}
