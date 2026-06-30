"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { CountyTown, CountyTownStatus } from "@/content/hertfordshireCounty";

type Props = {
  towns: CountyTown[];
};

const statusLabel: Record<CountyTownStatus, string> = {
  live: "Live page",
  planned: "Planned page",
  coverage: "County coverage",
};

const statusClasses: Record<CountyTownStatus, string> = {
  live: "bg-primary text-primary-foreground hover:bg-primary",
  planned: "border-transparent bg-accent text-accent-foreground hover:bg-accent",
  coverage: "border-border bg-background text-foreground hover:bg-background",
};

const markerClasses: Record<CountyTownStatus, string> = {
  live: "bg-primary border-primary text-primary-foreground shadow-primary/30",
  planned: "bg-accent border-accent text-accent-foreground shadow-accent/30",
  coverage: "bg-background border-primary/30 text-primary shadow-primary/15",
};

export default function InteractiveCountyMap({ towns }: Props) {
  const [selectedName, setSelectedName] = useState(towns[0]?.name ?? "");

  const selectedTown = useMemo(() => towns.find((town) => town.name === selectedName) ?? towns[0], [selectedName, towns]);

  return (
    <div className="grid xl:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] gap-8 items-start">
      <Card className="border-2 border-border overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-[5/4] overflow-hidden bg-[radial-gradient(circle_at_top,_hsl(var(--accent)/0.18),_transparent_45%),linear-gradient(180deg,_hsl(var(--background)),_hsl(var(--secondary)))]">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path
                d="M17 18 L29 12 L46 13 L58 8 L72 13 L87 25 L89 36 L85 49 L89 61 L86 78 L70 92 L51 92 L39 88 L26 81 L15 70 L11 56 L14 42 L10 28 Z"
                className="fill-primary/10 stroke-primary/30"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M23 31 L79 69"
                className="stroke-primary/15"
                strokeWidth="0.7"
                strokeDasharray="2 3"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M20 58 L78 24"
                className="stroke-primary/12"
                strokeWidth="0.7"
                strokeDasharray="2 3"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M38 17 L58 89"
                className="stroke-primary/10"
                strokeWidth="0.7"
                strokeDasharray="2 3"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {towns.map((town) => {
              const isSelected = selectedTown?.name === town.name;

              return (
                <button
                  key={town.name}
                  type="button"
                  aria-label={`Show ${town.name}`}
                  onClick={() => setSelectedName(town.name)}
                  className={cn(
                    "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-200 shadow-lg",
                    "flex h-4 w-4 items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    markerClasses[town.status],
                    isSelected ? "h-5 w-5 scale-125" : "opacity-90 hover:scale-110"
                  )}
                  style={{ left: `${town.x}%`, top: `${town.y}%` }}
                >
                  <span className="sr-only">{town.name}</span>
                </button>
              );
            })}

            {selectedTown ? (
              <div className="absolute left-4 right-4 bottom-4 rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-heading font-800 text-lg leading-tight">{selectedTown.name}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{selectedTown.note}</p>
                  </div>
                  <Badge className={statusClasses[selectedTown.status]}>{statusLabel[selectedTown.status]}</Badge>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Link href={selectedTown.href} className="inline-flex items-center gap-2 text-sm font-heading font-700 text-primary hover:text-primary/80 transition-colors">
                    Open town link <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://www.openstreetmap.org/#map=10/51.82/-0.23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-heading font-600 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Open larger county map
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        <div>
          <h3 className="text-2xl font-heading font-800 mb-3">Town Directory</h3>
          <p className="text-muted-foreground leading-relaxed">
            Every listed Hertfordshire town is clickable. Live local pages go straight to dedicated town content, while planned and wider county towns route to working placeholder contact links so there are no dead ends.
          </p>
        </div>

        <div className="grid gap-4">
          <DirectoryGroup title="Live town pages" towns={towns.filter((town) => town.status === "live")} />
          <DirectoryGroup title="Planned Hertfordshire pages" towns={towns.filter((town) => town.status === "planned")} />
          <DirectoryGroup title="Additional county coverage towns" towns={towns.filter((town) => town.status === "coverage")} />
        </div>
      </div>
    </div>
  );
}

function DirectoryGroup({ title, towns }: { title: string; towns: CountyTown[] }) {
  return (
    <Card className="border-2 border-border">
      <CardContent className="p-6">
        <h4 className="font-heading font-800 mb-4">{title}</h4>
        <div className="grid sm:grid-cols-2 gap-3">
          {towns.map((town) => (
            <Link
              key={town.name}
              href={town.href}
              className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3 transition-colors hover:border-primary/30 hover:bg-primary/5"
            >
              <span className="font-heading font-700 leading-snug">{town.name}</span>
              <Badge className={statusClasses[town.status]}>{statusLabel[town.status]}</Badge>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
