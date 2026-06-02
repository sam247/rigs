"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    window.location.replace("/domestic#fuse-board-upgrades");
  }, []);

  return (
    <div className="container py-20">
      <h1 className="text-2xl font-heading font-800 mb-3">Fuse Board Upgrades</h1>
      <p className="text-muted-foreground mb-6">
        Redirecting to Consumer Unit Upgrades…
      </p>
      <Link href="/domestic#fuse-board-upgrades" className="text-primary font-heading font-600 hover:text-primary/80 transition-colors">
        Continue
      </Link>
    </div>
  );
}

