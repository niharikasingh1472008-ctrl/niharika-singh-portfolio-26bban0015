import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clapperboard, PenTool, Shapes } from "lucide-react";

import bellavitaAd from "@/assets/bellavita-honey-oud-ad.png.asset.json";
import bellavitaVideo from "@/assets/bellavita-honey-oud-ad-video.mp4.asset.json";
import { Parallax, Reveal } from "@/components/motion";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Niharika Singh" },
      {
        name: "description",
        content:
          "Academic concept projects by Niharika Singh: a BELLAVITA Honey Oud campaign concept and ad layout, and its 10-second perfume ad film, made with Google Flow and Claude.",
      },
      { property: "og:title", content: "Projects — Niharika Singh" },
      {
        property: "og:description",
        content:
          "Concept and ad-film projects for BELLAVITA Honey Oud, created with Google Flow and Claude.",
      },
      { property: "og:url", content: "/projects" },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    numeral: "01",
    kind: "Concept & ad design",
    kindIcon: Shapes,
    title: "BELLAVITA Honey Oud — Campaign Concept & Ad Layout",
    description:
      "A complete ad creation for BELLAVITA's Honey Oud Eau de Parfum, built from the basic ideology up. The concept positions the fragrance around warmth and indulgence — 'Indulge in sweetness. Experience the oud.' — and carries that idea through a full product-page style ad layout with headline, product story, notes and calls to action.",
    contribution:
      "Developed the basic ideology and positioning, wrote the ad copy, and directed the overall look and structure of the layout.",
    tools: [
      { name: "Claude", role: "Concept development & copy" },
      { name: "Google Flow", role: "Visual creation" },
    ],
    media: {
      type: "image" as const,
      src: bellavitaAd.url,
      alt: "BELLAVITA Honey Oud ad layout with headline, product photograph, price, feature icons and reviews on a marble background",
    },
  },
  {
    numeral: "02",
    kind: "Ad film visual",
    kindIcon: Clapperboard,
    title: "BELLAVITA Honey Oud — Perfume Ad Video",
    description:
      "The moving image for the same campaign: a 10-second camera-orbit shot of the Honey Oud bottle, created in Google Flow to give the still layout a cinematic counterpart.",
    contribution:
      "Created the visual of the ad film — directing the orbit shot through prompts and refining the final render.",
    tools: [{ name: "Google Flow", role: "Visual creation of the film" }],
    media: {
      type: "video" as const,
      src: bellavitaVideo.url,
      alt: "Ten-second camera-orbit video of the BELLAVITA Honey Oud perfume bottle",
    },
  },
];

function ProjectsPage() {
  return (
    <>
      <PageHeader
        index="04"
        eyebrow="Projects"
        title={
          <>
            Work I can stand
            <br />
            behind<span className="text-copper">.</span>
          </>
        }
        intro="Real academic concept projects, shown honestly. These are student works created for learning — not client commissions."
      />

      <section className="mx-auto max-w-6xl space-y-16 px-5 py-16 sm:px-8 sm:py-20 sm:space-y-24">
        {projects.map((project) => (
          <Reveal key={project.numeral}>
            <article className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
              {/* Media */}
              <div
                className={
                  project.numeral === "02" ? "lg:order-2" : undefined
                }
              >
                <div className="frame-offset overflow-hidden rounded-2xl border border-border bg-card">
                  {project.media.type === "image" ? (
                    <Parallax strength={0.08}>
                      <img
                        src={project.media.src}
                        alt={project.media.alt}
                        width={1920}
                        height={1080}
                        loading="lazy"
                        className="h-auto w-full object-cover"
                      />
                    </Parallax>
                  ) : (
                    <video
                      src={project.media.src}
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={project.media.alt}
                      className="h-auto w-full bg-forest/5"
                    />
                  )}
                </div>
                <p className="mt-4 text-xs tracking-wide text-muted-foreground">
                  {project.numeral === "01"
                    ? "The full ad layout — concept, copy and visuals."
                    : "10-second camera-orbit film · with sound · 1280×720"}
                </p>
              </div>

              {/* Details */}
              <div>
                <p className="eyebrow flex items-center gap-3">
                  <span className="text-copper">{project.numeral}</span>
                  <span className="h-px w-8 bg-copper-soft" aria-hidden="true" />
                  <project.kindIcon size={15} aria-hidden="true" />
                  {project.kind}
                </p>
                <h2 className="display-title mt-4 text-2xl text-foreground sm:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <dl className="mt-7 space-y-5 border-t border-border pt-6">
                  <div>
                    <dt className="eyebrow !text-muted-foreground">
                      My contribution
                    </dt>
                    <dd className="mt-2 flex items-start gap-2.5 text-sm leading-relaxed text-foreground">
                      <PenTool
                        size={15}
                        className="mt-0.5 shrink-0 text-copper"
                        aria-hidden="true"
                      />
                      {project.contribution}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow !text-muted-foreground">
                      Tools & technologies
                    </dt>
                    <dd className="mt-3 flex flex-wrap gap-2.5">
                      {project.tools.map((tool) => (
                        <span
                          key={tool.name}
                          className="inline-flex items-baseline gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm"
                        >
                          <span className="font-semibold text-foreground">
                            {tool.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {tool.role}
                          </span>
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>

                <p className="mt-7 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-secondary-foreground">
                  Academic concept project — not client work
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* Closing note */}
      <section className="border-t border-border/70 bg-card/60">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center sm:px-8">
          <Reveal>
            <p className="font-display text-2xl italic text-foreground sm:text-3xl">
              More projects are on the way.
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              Each new concept project will be added here as it's finished.
            </p>
            <Link
              to="/contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Discuss a project with me
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
