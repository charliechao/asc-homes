import { readdirSync } from "node:fs";
import path from "node:path";

export type Project = {
  slug: string;
  title: string;
  year: string;
  location: string;
  cardSummary: string;
  intro: string;
  coverImage: string;
  coverAlt: string;
  gallery: {
    src: string;
    alt: string;
  }[];
  featured?: boolean;
};

type ProjectMeta = Omit<Project, "coverImage" | "coverAlt" | "gallery"> & {
  coverFile: string;
};

const publicProjectsRoot = path.resolve(process.cwd(), "public/projects");

const projectMeta: ProjectMeta[] = [
  {
    slug: "weiti-bay",
    title: "Weiti Bay",
    year: "2025",
    location: "Auckland",
    cardSummary:
      "A bold contemporary residence with generous glazing, layered rooflines, and a strong relationship to outdoor living.",
    intro:
      "Weiti Bay leads the portfolio with a distinctly architectural silhouette and a cinematic sense of openness.",
    coverFile: "a206c5879f9099c45a6ea7bf60227e72.PNG",
    featured: true
  },
  {
    slug: "34-ian-sage",
    title: "34 Ian Sage",
    year: "2025",
    location: "Auckland",
    cardSummary:
      "A recent residential project with clean presentation, strong street appeal, and a polished contemporary finish.",
    intro:
      "34 Ian Sage extends the newer end of the ASC Homes portfolio with a crisp, market-ready contemporary character.",
    coverFile: "Lot3-34 Ian Sage Ave1 (1).jpg"
  },
  {
    slug: "highland-road",
    title: "Highland Road",
    year: "2024",
    location: "Auckland",
    cardSummary:
      "A warm, texture-rich project where timber ceilings and carefully controlled daylight create a calm interior character.",
    intro:
      "Highland Road focuses on atmosphere, balancing warmth, light, and residential comfort through carefully chosen materials.",
    coverFile: "7h1j2.jpg",
    featured: true
  },
  {
    slug: "law-st",
    title: "Law Street",
    year: "2023",
    location: "Auckland",
    cardSummary:
      "A polished urban residential project with crisp detailing and a confident balance of clean surfaces and warmth.",
    intro:
      "Law Street brings a more urban expression into the ASC Homes portfolio while maintaining the same attention to finish and proportion.",
    coverFile: "85337472__1711050330-5287-Final-9.jpg"
  },
  {
    slug: "greenvally-rise",
    title: "Greenvally Rise",
    year: "2022",
    location: "Auckland",
    cardSummary:
      "A contemporary family home with bright presentation, fresh finishes, and strong visual clarity throughout.",
    intro:
      "Greenvally Rise adds a lighter, more open residential tone to the portfolio while staying firmly within ASC Homes' detail-led approach.",
    coverFile: "c6a207933a7a7c0af157e010bdc4bf3a.jpg"
  },
  {
    slug: "arran-road",
    title: "Arran Road",
    year: "2021",
    location: "Auckland",
    cardSummary:
      "A composed family home with balanced styling, generous light, and an easy sense of everyday livability.",
    intro:
      "Arran Road feels calm and domestic, with a softer visual rhythm that still reads as carefully tailored and complete.",
    coverFile: "63cky.jpg"
  },
  {
    slug: "34-sylvan",
    title: "34 Sylvan",
    year: "2020",
    location: "Auckland",
    cardSummary:
      "A residential project documented through a set of converted site and interior images now made web-ready for the portfolio.",
    intro:
      "34 Sylvan broadens the project library with another HEIC-heavy archive that now sits comfortably in the new gallery system.",
    coverFile: "IMG_8276.jpg"
  },
  {
    slug: "68-salamanca",
    title: "68 Salamanca",
    year: "2020",
    location: "Auckland",
    cardSummary:
      "A neatly resolved residential project with clear exterior presence and a composed visual finish.",
    intro:
      "68 Salamanca gives the portfolio another clean contemporary exterior story and helps round out the 2020 project set.",
    coverFile: "bf3f897f-be5f-419b-9deb-c9cd0fe36fe7.jpeg"
  },
  {
    slug: "kewa-road",
    title: "Kewa Road",
    year: "2020",
    location: "Auckland",
    cardSummary:
      "High-contrast exterior detailing and clean contemporary lines give this home a confident, refined street presence.",
    intro:
      "Kewa Road combines sharp exterior composition with warm, composed interior moments and remains one of the strongest detail-page examples.",
    coverFile: "01.jpg",
    featured: true
  },
  {
    slug: "52-nigel",
    title: "52 Nigel",
    year: "2019",
    location: "Auckland",
    cardSummary:
      "A converted HEIC-backed project that adds another contemporary residential case study to the portfolio.",
    intro:
      "52 Nigel now joins the web-ready project library with a full converted image set for future refinement and curation.",
    coverFile: "1.jpeg"
  },
  {
    slug: "hebron-road",
    title: "Hebron Road",
    year: "2019",
    location: "Auckland",
    cardSummary:
      "A strong multi-image project set capturing architecture, interior moments, and a well-resolved residential feel.",
    intro:
      "Hebron Road is one of the more substantial converted archives and gives the new project system more visual depth.",
    coverFile: "1.jpg"
  },
  {
    slug: "highway-view-lane",
    title: "Highway View Lane",
    year: "2018",
    location: "Auckland",
    cardSummary:
      "A clean-lined residential project presented through bright, open imagery and a restrained contemporary finish palette.",
    intro:
      "Highway View Lane adds another sharp, daylight-focused project to the middle of the portfolio timeline.",
    coverFile: "1.jpg"
  },
  {
    slug: "resolution-17",
    title: "17 Resolution",
    year: "2018",
    location: "Auckland",
    cardSummary:
      "A clean-lined residential project with strong daylight, clear spatial definition, and restrained modern finishes.",
    intro:
      "17 Resolution shows ASC Homes' preference for quiet, resolved detailing and clear residential composition.",
    coverFile: "1.jpg"
  },
  {
    slug: "barbados-drive",
    title: "Barbados Drive",
    year: "2017",
    location: "Auckland",
    cardSummary:
      "An earlier project with a sharp visual identity and a concise set of portfolio-ready imagery.",
    intro:
      "Barbados Drive helps anchor the earlier part of the ASC Homes project timeline with a compact but polished image set.",
    coverFile: "1.png"
  },
  {
    slug: "manuka-road-bayview",
    title: "Manuka Road",
    year: "2016",
    location: "Bayview",
    cardSummary:
      "A well-presented early project with clear exterior coverage and a solid residential delivery story.",
    intro:
      "Manuka Road brings another early completed home into the new web-ready system, helping the portfolio feel more complete.",
    coverFile: "2-152 Manuka Rd Bayview (1).jpg"
  },
  {
    slug: "jade-court-albany",
    title: "Jade Court",
    year: "2015",
    location: "Albany",
    cardSummary:
      "An earlier portfolio project that still shows the emphasis on clear form, solid delivery, and carefully presented spaces.",
    intro:
      "Jade Court anchors the earlier end of the portfolio and adds historical depth without losing the premium presentation.",
    coverFile: "16 Jade Court Albany (18).jpg"
  }
];

const getGalleryForSlug = (slug: string, title: string) => {
  const directory = path.join(publicProjectsRoot, slug);
  const files = readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base"
      })
    );

  return files.map((file) => ({
    src: `/projects/${slug}/${file}`,
    alt: `${title} project image`
  }));
};

export const projects: Project[] = projectMeta.map((meta) => ({
  ...meta,
  coverImage: `/projects/${meta.slug}/${meta.coverFile}`,
  coverAlt: `${meta.title} project cover image`,
  gallery: getGalleryForSlug(meta.slug, meta.title)
}));

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
