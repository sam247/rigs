import { ShieldCheck } from "lucide-react";

const badges = ["NICEIC Approved", "Part P Registered", "Trustmark", "ECA Member", "60+ Years Experience"];

const TrustBadges = () => (
  <section className="bg-secondary border-b border-border">
    <div className="container py-6">
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {badges.map((badge) => (
          <div key={badge} className="flex items-center gap-2 text-sm font-heading font-600 text-secondary-foreground/70">
            <ShieldCheck className="h-5 w-5 text-primary" />
            {badge}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
