export type SocialLink = {
  name: string;
  handle: string;
  url: string;
};

export type Company = {
  legalName: string;
  shortName: string;
  tagline: string;
  description: string;
  hqCity: string;
  hqState: string;
  serviceArea: string;
  unitCount: number;
  cities: string[];
  installmentsMax: number;
  phone: string;
  whatsapp: string;
  email: string;
  hours: string;
  social: {
    instagram: SocialLink;
  };
};
