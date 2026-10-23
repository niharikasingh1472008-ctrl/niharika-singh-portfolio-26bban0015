import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, PlusCircle } from "lucide-react";

import { Reveal } from "@/components/motion";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Niharika Singh" },
      {
        name: "description",
        content:
          "Education timeline of Niharika Singh: BBA in New Age Digital Marketing at JECRC University, currently in the first semester.",
      },
      { property: "og:title", content: "Education — Niharika Singh" },
      {
        property: "og:description",
        content:
          "Currently pursuing a BBA in New Age Digital Marketing at JECRC University.",
      },
      { property: "og:url", content: "/education" },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <>
      <PageHeader
        index="05"
        eyebrow="Education"
        title={
          <>
            The study behind
            <br />
            the work<span className="text-copper">.</span>
          </>
        }
        intro="Where I'm studying and what I'm focusing on, shown as a simple timeline."
      />

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <ol className="relative space-y-10 border-l border-dashed border-olive/40 pl-8 sm:pl-10">
          <Reveal>
            <li className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[41px] top-1.5 grid size-5 place-items-center rounded-full border-2 border-copper bg-background sm:-left-[49px]"
              >
                <span className="size-1.5 rounded-full bg-copper" />
              </span>

              <article className="rounded-2xl border border-border bg-card p-7 sm:p-9">
                <p className="eyebrow flex items-center gap-2">
                  <GraduationCap size={15} aria-hidden="true" />
                  2026 — Present
                </p>
                <h2 className="display-title mt-3 text-2xl text-foreground sm:text-3xl">
                  BBA in New Age Digital Marketing
                </h2>
                <p className="mt-1.5 font-semibold text-olive">
                  JECRC University · 1st Semester
                </p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                  Currently in my first semester, building the foundations of
                  modern digital marketing. Alongside coursework, I apply what
                  I learn directly in concept projects — like the BELLAVITA
                  Honey Oud campaign — where marketing thinking meets AI
                  visual creation.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  <li className="rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground">
                    New Age Digital Marketing
                  </li>
                  <li className="rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground">
                    AI visual creation focus
                  </li>
                </ul>
              </article>
            </li>
          </Reveal>

          {/* Clearly-labelled editable placeholder — no invented credentials */}
          <Reveal>
            <li className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[41px] top-1.5 size-5 rounded-full border-2 border-dashed border-border bg-background sm:-left-[49px]"
              />
              <article className="rounded-2xl border border-dashed border-border bg-transparent p-7 sm:p-9">
                <p className="eyebrow flex items-center gap-2 !text-muted-foreground">
                  <PlusCircle size={15} aria-hidden="true" />
                  Placeholder — to be added
                </p>
                <h2 className="mt-3 text-xl font-semibold text-muted-foreground">
                  Earlier education
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  School details will be added here. This is a placeholder —
                  nothing is shown until real details are provided.
                </p>
              </article>
            </li>
          </Reveal>
        </ol>
      </section>
    </>
  );
}
