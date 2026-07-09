export type CountyTownStatus = "live" | "planned" | "coverage";

export type CountyTown = {
  name: string;
  href: string;
  status: CountyTownStatus;
  note: string;
  x: number;
  y: number;
};

export type CountyContentBlock = {
  title: string;
  body: string;
};

export type CountyContentCard = {
  title: string;
  desc: string;
};

export type CountyServiceHighlight = {
  title: string;
  href: string;
  body: string;
};

export type CountyTravelHighlight = {
  title: string;
  body: string;
  icon: "TrainFront" | "Car" | "MapPin";
};

export type CountyFaq = {
  q: string;
  a: string;
};

export type CountyCoveragePageConfig = {
  countyName: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  townsIntro: string;
  overviewIntro: string;
  howWeHelpIntro: string;
  whyCustomersIntro: string;
  countyContextIntro: string;
  ctaTitle: string;
  ctaBody: string;
  map: {
    bbox: [number, number, number, number];
    marker: { lat: number; lon: number };
    zoom: number;
  };
  towns: CountyTown[];
  overview: CountyContentBlock[];
  serviceHighlights: CountyServiceHighlight[];
  commonNeeds: CountyContentCard[];
  amenities: CountyContentBlock[];
  travel: CountyTravelHighlight[];
  faq: CountyFaq[];
};

export const makeCountyTownContactHref = (town: string) => `/contact?service=${encodeURIComponent(`Electrician ${town}`)}`;
