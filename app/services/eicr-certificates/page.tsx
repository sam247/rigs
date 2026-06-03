import { permanentRedirect } from "next/navigation";

export default function Page() {
  permanentRedirect("/domestic?service=eicr-certificates");
}

