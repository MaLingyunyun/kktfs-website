// Site-wide settings. Edit these values; every page reads from here.
// Leave a contact field empty ("") to hide that button on the site.

export const site = {
  url: "https://www.kktfs.com",
  name: "Kinkalteck",
  legalName: "Kinkalteck Smart Intralog Co., Ltd.",
  tagline: "Automated vertical storage for long and heavy materials",
  founded: "2004",
  address: {
    street: "Robotics Integration Innovation Center, Shishan Town, Nanhai District",
    city: "Foshan",
    region: "Guangdong",
    country: "CN",
    countryName: "China",
  },
  contact: {
    email: "info@kinkalteck.com",
    phoneIntl: "", // e.g. "+86 757 1234 5678" — the 400 number cannot be dialled from abroad
    whatsapp: "", // digits only with country code, e.g. "8613800000000"
    zalo: "", // Zalo phone number for Vietnam
    line: "", // LINE ID for Thailand
  },
  social: {
    linkedin: "",
    youtube: "",
    facebook: "",
  },
  sisterSite: { name: "Kinkalteck sawing machines", url: "https://www.kinkalteck.com" },
  // Locales that are live. Add "vi", "th", "id" as each country site is translated.
  locales: ["en"],
  defaultLocale: "en",
};
