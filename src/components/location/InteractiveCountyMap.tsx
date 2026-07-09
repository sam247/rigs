import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import OpenStreetMapEmbed from "@/components/location/OpenStreetMapEmbed";
import type { CountyTown } from "@/content/hertfordshireCounty";

type Props = {
  towns: CountyTown[];
};

export default function InteractiveCountyMap({ towns }: Props) {
  const liveTowns = towns.filter((town) => town.status === "live");
  const plannedTowns = towns.filter((town) => town.status === "planned");
  const coverageTowns = towns.filter((town) => town.status === "coverage");

  return (
    <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.95fr)] gap-8 items-start">
      <Card className="border-2 border-border overflow-hidden">
        <CardContent className="p-6">
          <h3 className="text-2xl font-heading font-800 mb-3">Hertfordshire Map</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A simple static map showing the towns we cover across Hertfordshire. Use the town links alongside it to go straight to the right page or enquiry route.
          </p>
          <OpenStreetMapEmbed
            title="Map of Hertfordshire"
            bbox={[-0.8000, 51.6200, 0.1500, 52.1000]}
            marker={{ lat: 51.8170, lon: -0.2400 }}
            zoom={10}
            className="relative rounded-2xl overflow-hidden border border-border shadow-lg aspect-[4/3] bg-muted"
          />
        </CardContent>
      </Card>

      <div className="grid gap-6">
        <div>
          <h3 className="text-2xl font-heading font-800 mb-3">Town Directory</h3>
          <p className="text-muted-foreground leading-relaxed">
            Every town name is linked so you can jump straight to a detailed local page or a useful county-level route without hitting a dead end.
          </p>
        </div>

        <div className="grid gap-4">
          <DirectoryGroup title="Detailed town pages" towns={liveTowns} />
          {plannedTowns.length > 0 ? <DirectoryGroup title="More Hertfordshire areas" towns={plannedTowns} /> : null}
          <DirectoryGroup title="Other towns we cover" towns={coverageTowns} />
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
        <div className="flex flex-wrap gap-x-3 gap-y-2">
          {towns.map((town) => (
            <Link
              key={town.name}
              href={town.href}
              className="text-sm font-heading font-700 text-primary hover:text-primary/80 transition-colors"
            >
              {town.name}
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
