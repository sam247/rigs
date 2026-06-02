import type { Metadata } from "next";
import TestimonialsPage from "@/components/pages/TestimonialsPage";

export const metadata: Metadata = {
  title: "Customer Reviews | RIGS Electrical Tring",
  description:
    "Read 5-star reviews from RIGS Electrical customers across Tring and Hertfordshire — rewires, kitchen & bathroom electrics, lighting and fault finding.",
  alternates: { canonical: "https://www.rigselectrical.co.uk/testimonials" },
};

export default function Page() {
  return <TestimonialsPage />;
}
