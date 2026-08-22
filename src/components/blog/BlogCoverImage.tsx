import Image from "next/image";
import { cn } from "@/lib/utils";
import rigsLogo from "@/assets/rigs-logo.svg";

type BlogCoverImageProps = {
  title: string;
  variant?: "card" | "hero";
  className?: string;
  /** When true, renders the title as a heading (hero). Cards use a paragraph to avoid duplicate h1s on listing pages. */
  asHeading?: boolean;
};

export default function BlogCoverImage({ title, variant = "card", className, asHeading }: BlogCoverImageProps) {
  const isHero = variant === "hero";
  const useHeading = asHeading ?? isHero;
  const TitleTag = useHeading ? "h1" : "p";

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden bg-gradient-to-br from-rigs-navy via-primary to-rigs-teal text-primary-foreground",
        isHero ? "min-h-[220px] sm:min-h-[280px] md:min-h-[320px]" : "aspect-[16/10] min-h-[140px] sm:min-h-[168px]",
        className,
      )}
      aria-hidden={!useHeading ? true : undefined}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.22),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,hsl(var(--rigs-dark)/0.35),transparent_45%)]"
        aria-hidden
      />

      <div className="relative flex h-full min-h-[inherit] items-center px-4 py-8 pb-12 sm:px-6 sm:pb-14 md:px-8 md:py-10 md:pb-16">
        <TitleTag
          className={cn(
            "max-w-[88%] text-left font-heading font-800 leading-[1.15] text-white",
            isHero ? "text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem]" : "text-base sm:text-lg md:text-xl line-clamp-4",
          )}
        >
          {title}
        </TitleTag>
      </div>

      <div className="pointer-events-none absolute bottom-3 left-4 sm:bottom-4 sm:left-5 md:bottom-5 md:left-6">
        <Image
          src={rigsLogo}
          alt=""
          aria-hidden
          className={cn("w-auto brightness-0 invert opacity-75", isHero ? "h-5 sm:h-6 md:h-7" : "h-4 sm:h-5 md:h-6")}
        />
      </div>
    </div>
  );
}
