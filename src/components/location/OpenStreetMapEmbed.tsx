type Props = {
  title: string;
  bbox: [number, number, number, number];
  marker: { lat: number; lon: number };
  zoom?: number;
  className?: string;
};

export default function OpenStreetMapEmbed({ title, bbox, marker, zoom = 13, className }: Props) {
  const bboxParam = encodeURIComponent(bbox.join(","));
  const markerParam = encodeURIComponent(`${marker.lat},${marker.lon}`);
  const embedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bboxParam}&layer=mapnik&marker=${markerParam}`;
  const viewHref = `https://www.openstreetmap.org/?mlat=${marker.lat}&mlon=${marker.lon}#map=${zoom}/${marker.lat}/${marker.lon}`;

  return (
    <div className={className}>
      <iframe title={title} src={embedSrc} className="w-full h-full border-0" loading="lazy" />
      <a
        href={viewHref}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3 bg-background/90 backdrop-blur px-3 py-1.5 rounded-md text-xs font-heading font-600 text-foreground hover:bg-background transition-colors shadow"
      >
        View larger map
      </a>
    </div>
  );
}
