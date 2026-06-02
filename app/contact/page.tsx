import type { Metadata } from "next";
import { Suspense } from "react";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact RIGS Electrical | Get a Quote",
  description: "Get in touch with RIGS Electrical in Tring. Call 07989 205468 or request a free, no-obligation quote today.",
  alternates: { canonical: "https://www.rigselectrical.co.uk/contact" },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ContactPage />
    </Suspense>
  );
}
