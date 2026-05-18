export const homeStats = [
  "Architectural design",
  "Bespoke home design and build",
  "Project management",
  "Construction and quality control"
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We begin by understanding your project goals, lifestyle requirements, budget, and site conditions. This early stage allows us to provide strategic guidance and establish a clear direction for the project."
  },
  {
    number: "02",
    title: "Feasibility & Design Planning",
    description:
      "Our team works closely with architects, designers, and consultants to explore design opportunities, site constraints, and planning requirements. We focus on developing practical and well considered solutions that align with both your vision and budget expectations."
  },
  {
    number: "03",
    title: "Design & Project Coordination",
    description:
      "Once the concept direction is confirmed, we coordinate the design development, documentation, council approvals, and project planning process. Throughout this stage, we maintain clear communication and detailed coordination to ensure a smooth transition into construction."
  },
  {
    number: "04",
    title: "Construction & Completion",
    description:
      "Our construction team manages the full build process, including site supervision, scheduling, quality control, and project delivery. Upon completion, we oversee final inspections and detailing to ensure the finished home is delivered to a high standard and ready for handover."
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
    label: "ADNZ",
    image: "/partners/adnz-logo-white.png",
    imageAlt: "Architectural Designers New Zealand logo"
  },
  {
    label: "Licensed Builder",
    image: "/partners/licensed-builder.avif",
    imageAlt: "Licensed Builder logo"
  },
  {
    label: "Master Builders NZ",
    image: "/partners/master-builders.png",
    imageAlt: "Master Builders logo"
  },
  {
    label: "Site Safe Member",
    image: "/partners/site-safe-member.jpg",
    imageAlt: "Site Safe Member logo"
  }
] as const;
