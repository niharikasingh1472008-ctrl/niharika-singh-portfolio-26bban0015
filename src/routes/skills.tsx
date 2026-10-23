import { createFileRoute } from "@tanstack/react-router";
import { CircleDot } from "lucide-react";

import { Reveal } from "@/components/motion";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Niharika Singh" },
      {
        name: "description",
        content:
          "Confirmed skills and tools of Niharika Singh: AI-assisted ad and visual creation with Google Flow and Claude, plus BBA coursework in New Age Digital Marketing.",
      },
      { property: "og:title", content: "Skills — Niharika Singh" },
      {
        property: "og:description",
        content:
          "An honest skill map: what I've practiced, the tools I use, and what I'm currently studying.",
      },
      { property: "og:url", content: "/skills" },
    ],
  }),
  component: SkillsPage,
});

/**
 * Skill constellation: grouped nodes with restrained, honest indicators —
 * text labels ("Applied in a project", "Exploring", "In study") instead of
 * invented proficiency bars.
 */
const groups = [
  {
    numeral: "01",
    title: "AI visual creation",
    note: "The craft I'm actively practising.",
    skills: [
      {
        name: "AI-assisted ad creation",
        tag: "Applied in a project",
        detail:
          "Built a complete ad concept and layout for BELLAVITA Honey Oud — my first end-to-end piece.",
      },
      {
        name: "Visual creation & ad film",
        tag: "Exploring",
        detail:
          "Creating still visuals and a 10-second camera-orbit ad video from written prompts.",
      },
    ],
  },
  {
    numeral: "02",
    title: "Tools I use",
    note: "The small toolkit behind the projects here.",
    skills: [
      {
        name: "Google Flow",
        tag: "Used in projects",
        detail: "Visual creation for the BELLAVITA ad layout and the ad film.",
      },
      {
        name: "Claude",
        tag: "Used in projects",
        detail:
          "Concept development — shaping the basic ideology and copy of the campaign.",
      },
    ],
  },
  {
    numeral: "03",
    title: "Currently studying",
    note: "Foundations in progress — honest about what's still ahead.",
    skills: [
      {
        name: "New Age Digital Marketing",
        tag: "In study · Semester 1",
        detail:
          "BBA coursework at JECRC University — building the marketing grounding behind the creative work.",
      },
    ],
  },
];

function SkillsPage() {
  return (
    <>
      <PageHeader
        index="03"
        eyebrow="Skills"
        title={
          <>
            An honest skill map<span className="text-copper">.</span>
          </>
        }
        intro="Only what I've actually done and studied — no invented ratings. The labels tell you where each skill really stands today."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        {/* Constellation connector: a soft vertical spine on desktop */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="constellation-line absolute left-[7px] top-2 hidden h-[calc(100%-16px)] w-px border-l border-dashed border-olive/40 lg:block"
          />
          <div className="space-y-8 lg:space-y-10">
            {groups.map((group, gi) => (
              <Reveal key={group.numeral} delay={gi * 90}>
                <article className="relative grid gap-6 rounded-2xl border border-border bg-card p-7 sm:p-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-10">
                  <div className="flex items-start gap-4">
                    <span className="font-display text-3xl text-copper/70">
                      {group.numeral}
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-semibold text-foreground">
                        {group.title}
                      </h2>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {group.note}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {group.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="rounded-xl border border-border/70 bg-background/60 p-5"
                      >
                        <div className="flex flex-wrap items-center gap-3">
                          <CircleDot
                            size={15}
                            className="shrink-0 text-olive"
                            aria-hidden="true"
                          />
                          <h3 className="font-semibold text-foreground">
                            {skill.name}
                          </h3>
                          <span className="rounded-full bg-secondary px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-secondary-foreground">
                            {skill.tag}
                          </span>
                        </div>
                        <p className="mt-2 pl-7 text-sm leading-relaxed text-muted-foreground">
                          {skill.detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
