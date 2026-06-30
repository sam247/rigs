import Link from "next/link";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { CountyTown, CountyTownStatus } from "@/content/hertfordshireCounty";

type Props = {
  towns: CountyTown[];
};

const statusLabel: Record<CountyTownStatus, string> = {
  live: "Live pages",
  planned: "Planned pages",
  coverage: "County coverage",
};

const statusClasses: Record<CountyTownStatus, string> = {
  live: "bg-primary text-primary-foreground",
  planned: "border-transparent bg-accent text-accent-foreground",
  coverage: "border-border bg-background text-foreground",
};

const markerClasses: Record<CountyTownStatus, string> = {
  live: "bg-primary border-primary shadow-primary/30",
  planned: "bg-accent border-accent shadow-accent/30",
  coverage: "bg-background border-primary/30 shadow-primary/15",
};

export default function InteractiveCountyMap({ towns }: Props) {
  return (
    <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.95fr)] gap-8 items-start">
      <Card className="border-2 border-border overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge className={statusClasses.live}>{statusLabel.live}</Badge>
            <Badge className={statusClasses.planned}>{statusLabel.planned}</Badge>
            <Badge className={statusClasses.coverage}>{statusLabel.coverage}</Badge>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-border bg-[radial-gradient(circle_at_top,_hsl(var(--accent)/0.14),_transparent_45%),linear-gradient(180deg,_hsl(var(--background)),_hsl(var(--secondary)))]">
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

            {towns.map((town) => (
              <span
                key={town.name}
                title={town.name}
                aria-label={town.name}
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 h-3.5 w-3.5 shadow-md ${markerClasses[town.status]}`}
                style={{ left: `${town.x}%`, top: `${town.y}%` }}
              />
            ))}

            <div className="absolute left-4 right-4 bottom-4 rounded-2xl border border-border bg-background/95 p-4 shadow-lg backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading font-800">County coverage map</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A simple visual guide to the towns we cover across Hertfordshire, with live pages called out separately in the directory.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <a
              href="https://www.openstreetmap.org/#map=10/51.82/-0.23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-heading font-600 text-primary hover:text-primary/80 transition-colors"
            >
              View larger county map
            </a>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        <div>
          <h3 className="text-2xl font-heading font-800 mb-3">Town Directory</h3>
          <p className="text-muted-foreground leading-relaxed">
            Every town name is linked. Live pages take customers to full local content, while planned towns and wider county coverage areas still route to a working enquiry path so there are no dead ends.
          </p>
        </div>

        <div className="grid gap-4">
          <DirectoryGroup title="Live town pages" towns={towns.filter((town) => town.status === "live")} suffix="Live page" />
          <DirectoryGroup title="More Hertfordshire areas" towns={towns.filter((town) => town.status === "planned")} suffix="Enquiry" />
          <DirectoryGroup title="Other towns we cover" towns={towns.filter((town) => town.status === "coverage")} suffix="Enquiry" />
        </div>
      </div>
    </div>
  );
}

function DirectoryGroup({ title, towns, suffix }: { title: string; towns: CountyTown[]; suffix: string }) {
  return (
    <Card className="border-2 border-border">
      <CardContent className="p-6">
        <h4 className="font-heading font-800 mb-4">{title}</h4>
        <div className="flex flex-wrap gap-x-3 gap-y-2">
          {towns.map((town) => (
            <Link
              key={town.name}
              href={town.href}
              className="text-sm font-heading font-700 text-primary hover:text-primary/80 transition-colors"
            >
              {town.name}
              <span className="ml-1 text-xs font-500 text-muted-foreground">{suffix}</span>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
