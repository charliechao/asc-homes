export type NavItem = {
  href: string;
  label: string;
  featured?: boolean;
};

export type SocialItem = {
  href: string;
  label: string;
  shortLabel: string;
};

export const site = {
  name: "ASC Homes",
  domain: "aschomes.co.nz",
  title: "ASC Homes | Design-led Homes Built with Precision",
  description:
    "ASC Homes delivers bespoke home design, construction, and project management with a refined, detail-first approach.",
  contact: {
    phoneDisplay: "+64 21 765 577",
    phoneHref: "tel:+6421765577",
    email: "info@aschomes.co.nz"
  },
  social: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      shortLabel: "IG"
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/",
      shortLabel: "FB"
    }
  ] satisfies SocialItem[],
  nav: [
    { href: "/", label: "Home" },
    { href: "/about-us/", label: "About Us" },
    { href: "/design-build/", label: "Design & Build", featured: true },
    { href: "/our-work/", label: "Our Work" },
    { href: "/contact-us/", label: "Contact Us" }
  ] satisfies NavItem[]
};

export const stageOnePages = [
  {
    title: "Home",
    href: "/",
    status: "Reserved for hero-led landing page",
    detail: "Homepage structure, header behavior, and the hero video treatment will be built in Stage 2."
  },
  {
    title: "About Us",
    href: "/about-us/",
    status: "Reserved for company story and merged capability content",
    detail: "This route will absorb the strongest material from the current About Us and What We Do pages."
  },
  {
    title: "Design & Build",
    href: "/design-build/",
    status: "Reserved for the featured service narrative",
    detail: "This page will carry the highlighted navigation state and the premium design-and-build positioning."
  },
  {
    title: "Our Work",
    href: "/our-work/",
    status: "Reserved for the project index",
    detail: "Stage 3 will turn the local project folders into a reusable listing and detail-page system."
  },
  {
    title: "Contact Us",
    href: "/contact-us/",
    status: "Reserved for primary contact conversion",
    detail: "The separate Free Estimate route is already wired for the future Web3Forms implementation."
  }
] as const;
