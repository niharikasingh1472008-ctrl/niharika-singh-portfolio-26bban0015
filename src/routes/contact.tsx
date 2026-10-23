import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin, Mail, PlusCircle } from "lucide-react";

import { Reveal } from "@/components/motion";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Niharika Singh" },
      {
        name: "description",
        content:
          "Get in touch with Niharika Singh — by email or on LinkedIn — to talk about AI visual creation and digital marketing.",
      },
      { property: "og:title", content: "Contact — Niharika Singh" },
      {
        property: "og:description",
        content:
          "Reach Niharika Singh by email or LinkedIn to talk AI visual creation and digital marketing.",
      },
      { property: "og:url", content: "/contact" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        index="06"
        eyebrow="Contact"
        title={
          <>
            Let's make something
            <br />
            worth looking at<span className="text-copper">.</span>
          </>
        }
        intro="Whether it's feedback on my projects, a collaboration, or an opportunity to learn — I'd be glad to hear from you."
      />

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          <Reveal>
            <a
              href="mailto:niharikasingh1472008@gmail.com"
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-copper/60 hover:bg-secondary/30"
            >
              <span className="grid size-11 place-items-center rounded-full bg-forest text-primary-foreground">
                <Mail size={18} aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-xl font-semibold text-foreground">
                Email
              </h2>
              <p className="mt-1.5 break-all text-sm text-muted-foreground">
                niharikasingh1472008@gmail.com
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-forest transition-colors group-hover:text-copper">
                Write to me
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          </Reveal>

          <Reveal delay={100}>
            <a
              href="https://www.linkedin.com/in/niharika-singh-625ba8389"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-copper/60 hover:bg-secondary/30"
            >
              <span className="grid size-11 place-items-center rounded-full bg-forest text-primary-foreground">
                <Linkedin size={18} aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-xl font-semibold text-foreground">
                LinkedIn
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Connect with me professionally — my profile, updates and
                journey.
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-forest transition-colors group-hover:text-copper">
                Open profile
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          </Reveal>
        </div>

        {/* Clearly-labelled placeholder — GitHub omitted until provided */}
        <Reveal className="mt-6">
          <div className="flex flex-col gap-3 rounded-2xl border border-dashed border-border bg-transparent p-7 sm:flex-row sm:items-center sm:gap-5">
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-border text-muted-foreground">
              <PlusCircle size={18} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-semibold text-foreground">
                More links — placeholder
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                A GitHub profile and other links can be added here once they
                exist. Nothing is invented in the meantime.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <div className="rounded-2xl bg-forest p-9 text-primary-foreground sm:p-12">
            <p className="eyebrow !text-copper-soft">Currently</p>
            <p className="display-title mt-3 max-w-xl text-2xl sm:text-3xl">
              A first-semester student, building a portfolio one honest
              project at a time.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/70">
              Replies may take a little while during the semester — but every
              message is read.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
