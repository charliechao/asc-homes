export const homeStats = [
  "Architectural design",
  "Bespoke home design and build",
  "Project management",
  "Construction and quality control"
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Brief and feasibility",
    description:
      "We begin by understanding the way you want to live, the site constraints, and the commercial realities behind the brief."
  },
  {
    number: "02",
    title: "Design coordination",
    description:
      "ASC Homes works closely with architects, consultants, and trusted specialists to shape a coherent design direction from the outset."
  },
  {
    number: "03",
    title: "Build delivery",
    description:
      "Our in-house team manages craftsmanship, sequencing, subcontractor coordination, and quality throughout construction."
  },
  {
    number: "04",
    title: "Completion and handover",
    description:
      "We focus on the final details, ensuring the completed home feels refined, resolved, and ready to live in."
  }
] as const;

export const storySection = {
  eyebrow: "Spatial Excellence",
  title: {
    lead: "Spatial",
    accent: "Excellence"
  },
  intro:
    "Redefining modern living with ASC Homes' seamless integration of aesthetic elegance and technical precision.",
  body:
    "ASC Homes: where your ambition meets our expertise. From subdivision to interior styling, we offer a cohesive design-and-build service tailored to the discerning homeowner.",
  flow: [
    "Design direction",
    "Project management",
    "Construction delivery"
  ]
} as const;

export const featuredProjects = [
  {
    title: "Weiti Bay",
    year: "2025",
    image: "/home/weiti-bay.png",
    detail:
      "A bold contemporary home shaped around generous glazing, layered volumes, and a strong connection to landscape.",
    href: "/our-work/weiti-bay/"
  },
  {
    title: "Kewa Road",
    year: "2020",
    image: "/home/kewa-road.jpg",
    detail:
      "Clean exterior lines, strong contrast, and a confident modern street presence.",
    href: "/our-work/kewa-road/"
  },
  {
    title: "Highland Road",
    year: "2024",
    image: "/home/highland-road.jpg",
    detail:
      "Warm interior detailing and carefully considered material choices designed for everyday comfort.",
    href: "/our-work/highland-road/"
  }
] as const;

export const testimonials = [
  {
    quote:
      "ASC Homes took on our complex project with confidence and delivered beyond our expectations. Our home is beautiful and built to the highest standard.",
    client: "James and Olivia, Browns Bay"
  },
  {
    quote:
      "From start to finish, ASC Homes made the building process stress-free. Their attention to detail and commitment to quality craftsmanship stood out.",
    client: "Michael and Emma, North Shore"
  },
  {
    quote:
      "We had a unique design in mind, and ASC Homes brought it to life flawlessly. The result is a home that stands out in both design and functionality.",
    client: "Daniel and Sophie, Albany Heights"
  },
  {
    quote:
      "Communication stayed clear the whole way through. We always knew what was happening next, and the workmanship never felt rushed.",
    client: "Lynne and David, Ponsonby"
  }
] as const;

export const partnerLinks = [
  {
    label: "Jones Architects",
    href: "https://jonesarchitects.co.nz/",
    image: "/partners/jones-architects.svg",
    imageAlt: "Jones Architects placeholder logo"
  },
  {
    label: "Hannah Warren Interiors",
    href: "https://www.hannahwarren.co.nz/",
    image: "/partners/hannah-warren.webp",
    imageAlt: "Hannah Warren Interiors logo"
  },
  {
    label: "Master Builders NZ",
    href: "https://www.masterbuilder.org.nz/",
    image: "/partners/master-builders.png",
    imageAlt: "Master Builders logo"
  },
  {
    label: "Licensed Building Practitioners",
    href: "https://www.lbp.govt.nz/",
    image: "/partners/licensed-building-practitioners.png",
    imageAlt: "Licensed Building Practitioners logo"
  }
] as const;
