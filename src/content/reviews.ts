export type ReviewType = "lighting" | "fault" | "installations" | "sockets";

export type Review = {
  name: string;
  text: string;
  rating: number;
  type: ReviewType;
  service: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Verified Customer, WD3",
    text: "Rob has undertaken electrical work (fault finding, maintenance, new installation inside and outside the house) for me for a number of years. His work is of a very high standard and his quotations are clear and easy to understand. He's respectful of my home, clears up and leaves the working environment clean and tidy and is completely trustworthy.",
    rating: 5,
    type: "fault",
    service: "Electrician — Fault Finding & Installation",
  },
  {
    name: "Verified Customer, HP6",
    text: "Just as well I called Rob at RIGS. Was fortunate to benefit from a cancellation so attended within a day. Arrived promptly as promised. Both jobs required a level of skill above mine and some parts. All work carried out quickly and with good advice to avoid future failures. Overall? Simply excellent service.",
    rating: 5,
    type: "lighting",
    service: "LED Lighting Repair",
  },
  {
    name: "Verified Customer, HP21",
    text: "High quality work. Neat and tidy. Thank you Rob.",
    rating: 5,
    type: "lighting",
    service: "Under-Cupboard LED Lighting",
  },
  {
    name: "Verified Customer, HP23",
    text: "Rob has done a number of jobs for us over the last three years, including electrics for a bathroom and an en-suite, also running external cabling and wiring a garden building with power and lighting, and external lighting round the house. He is very professional and meticulous, and very resourceful in providing solutions and ideas. He works well with other trades, and leaves the place exceptionally clean and tidy at the end of the day.",
    rating: 5,
    type: "installations",
    service: "Various Electrical Installations",
  },
  {
    name: "Verified Customer, HP4",
    text: "I have used Rob for several electrical problems both small and large. Rob is professional, knowledgeable, polite, goes the extra mile and doesn't leave a mess! I have always been very happy with his service and would recommend him.",
    rating: 5,
    type: "fault",
    service: "Electrician",
  },
  {
    name: "Verified Customer, WD3",
    text: "Rob is excellent, he's very quick, extremely tidy and went the extra mile when we discovered we had some problems in the fuse box. We really enjoy having him in the house and I highly recommend him.",
    rating: 5,
    type: "sockets",
    service: "Electric Sockets",
  },
];

export const REVIEW_FILTER_LABELS: Record<"all" | ReviewType, string> = {
  all: "All Reviews",
  lighting: "Lighting",
  fault: "Fault Finding",
  installations: "Installations",
  sockets: "Sockets",
};
