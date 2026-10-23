import type { ReactNode } from "react";
import { Reveal } from "@/components/motion";

/**
 * Shared editorial page header for interior routes:
 * numbered eyebrow, display title, and an optional intro paragraph.
 */
export function PageHeader({
  index,
  eyebrow,
  title,
  intro,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <div className="border-b border-border/70">
      <div className="mx-auto max-w-6xl px-5 pb-12 pt-32 sm:px-8 sm:pt-36">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="text-copper">{index}</span>
            <span className="h-px w-8 bg-copper-soft" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="display-title mt-5 text-4xl text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {intro}
            </p>
          ) : null}
        </Reveal>
      </div>
    </div>
  );
}
