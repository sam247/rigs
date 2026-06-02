type CoverageMapProps = {
  mainTown: string;
  nearbyTowns: string[];
  nearbyVillages: string[];
  variant?: "default" | "compact";
};

const seededAngle = (index: number, total: number) => {
  const step = (Math.PI * 2) / Math.max(total, 1);
  return index * step - Math.PI / 2;
};

const polar = (cx: number, cy: number, r: number, angle: number) => ({
  x: cx + r * Math.cos(angle),
  y: cy + r * Math.sin(angle),
});

const clampLabel = (label: string, max = 16) => (label.length > max ? `${label.slice(0, max - 1)}…` : label);

const CoverageMap = ({ mainTown, nearbyTowns, nearbyVillages, variant = "default" }: CoverageMapProps) => {
  const cx = 180;
  const cy = 140;

  const villageRing = nearbyVillages.map((name, i) => ({
    name,
    ...polar(cx, cy, 85, seededAngle(i, nearbyVillages.length)),
  }));

  const townRing = nearbyTowns.map((name, i) => ({
    name,
    ...polar(cx, cy, 125, seededAngle(i, nearbyTowns.length) + Math.PI / 10),
  }));

  return (
    <div className={variant === "compact" ? "rounded-xl border border-border bg-secondary p-4" : "rounded-xl border border-border bg-secondary p-5 md:p-6"}>
      {variant === "default" ? (
        <div className="flex items-center justify-between gap-3 mb-4">
          <div>
            <p className="font-heading font-800 text-lg">Coverage map</p>
            <p className="text-sm text-muted-foreground">Typical service area around {mainTown}</p>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              Main town
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary/50" />
              Towns
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/50" />
              Villages
            </span>
          </div>
        </div>
      ) : null}

      <svg viewBox="0 0 360 280" role="img" aria-label={`${mainTown} coverage map`} className="w-full h-auto">
        <defs>
          <radialGradient id="rigs-map-glow" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
            <stop offset="70%" stopColor="hsl(var(--primary))" stopOpacity="0.06" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="360" height="280" rx="16" fill="hsl(var(--background))" />
        <circle cx={cx} cy={cy} r="145" fill="url(#rigs-map-glow)" />
        <circle cx={cx} cy={cy} r="125" fill="none" stroke="hsl(var(--border))" strokeDasharray="4 5" />
        <circle cx={cx} cy={cy} r="85" fill="none" stroke="hsl(var(--border))" strokeDasharray="4 5" />

        {townRing.map((p) => (
          <g key={`town-${p.name}`}>
            <line x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="hsl(var(--border))" />
            <circle cx={p.x} cy={p.y} r="6" fill="hsl(var(--primary))" opacity="0.55" />
            <text x={p.x + 10} y={p.y + 4} fontSize="11" fill="hsl(var(--foreground))">
              {clampLabel(p.name, 18)}
            </text>
          </g>
        ))}

        {villageRing.map((p) => (
          <g key={`village-${p.name}`}>
            <line x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="hsl(var(--border))" opacity="0.7" />
            <circle cx={p.x} cy={p.y} r="4.5" fill="hsl(var(--muted-foreground))" opacity="0.55" />
            <text x={p.x + 9} y={p.y + 4} fontSize="10" fill="hsl(var(--muted-foreground))">
              {clampLabel(p.name)}
            </text>
          </g>
        ))}

        <circle cx={cx} cy={cy} r="10" fill="hsl(var(--primary))" />
        <circle cx={cx} cy={cy} r="18" fill="none" stroke="hsl(var(--primary))" opacity="0.35" />
        <text x={cx + 22} y={cy + 5} fontSize="14" fill="hsl(var(--foreground))" fontWeight="700">
          {mainTown}
        </text>
      </svg>
      {variant === "compact" ? (
        <p className="text-xs text-muted-foreground mt-3">
          Coverage illustration for {mainTown} and nearby areas.
        </p>
      ) : null}
    </div>
  );
};

export default CoverageMap;
