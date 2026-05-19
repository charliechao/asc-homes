import { readdirSync } from "node:fs";
import path from "node:path";

export type Project = {
  slug: string;
  title: string;
  year: string;
  location: string;
  suburb?: string;
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
    suburb: "Weiti Bay",
    cardSummary:
      "Design, Build & Project Management | 2025",
    intro:
      "The design is both luxurious and functional, and it features a well designed multi-faceted oversized glass and kitchen and cutlery area that flows effortlessly into the main living space - feeling spacious and bright thanks to the high-pitched ceiling. Exceptional quality and meticulous design are evident in every room. Clad in Japanese-style charcoal wood and with stunning views of the harbour, this 6-bedroom pavilion-style home is perfect for families looking for quality private life.",
    coverFile: "00-cover.jpg",
    featured: true
  },
  {
    slug: "34-ian-sage",
    title: "Ian Sage",
    year: "2025",
    location: "Auckland",
    suburb: "Torbay",
    cardSummary:
      "Build & Project Management | 2023",
    intro:
      "Located in the coastal suburb of Torbay, this exclusive development features three standalone homes designed to embrace modern coastal living. From project coordination through to construction delivery, the project was completed within an 8-month timeframe, combining efficient management with high-quality craftsmanship.",
    coverFile: "Lot3-34 Ian Sage Ave1 (1).jpg"
  },
  {
    slug: "highland-road",
    title: "Highland Road",
    year: "2024",
    location: "Auckland",
    suburb: "Mount Albert",
    cardSummary:
      "Design, Full Renovation & Project Management | 2024",
    intro:
      "Located in Mount Albert, this renovation project involved a complete interior transformation, combining thoughtful design with efficient project delivery. The project was completed within a 2-month timeframe, enhancing both the functionality and presentation of the home. Following completion, the property achieved an estimated value increase of approximately $300,000.",
    coverFile: "7h1j6.jpg",
    featured: true
  },
  {
    slug: "law-st",
    title: "Law Street",
    year: "2023",
    location: "Auckland",
    suburb: "Torbay",
    cardSummary:
      "Design & Build & Project Management",
    intro:
      "Nestled within the scenic Bay Area, this duplex townhouse redefines modern elegance and convenience. Step through the inviting entrance to explore a meticulously crafted interior. The layout encompasses three bedrooms and two bathrooms, including an ensuite for the ultimate retreat. A convenient guest toilet downstairs adds practicality to the layout, catering to the needs of busy lifestyles.",
    coverFile: "85337472__1711050330-5287-Final-9.jpg"
  },
  {
    slug: "greenvally-rise",
    title: "Greenvally Rise",
    year: "2022",
    location: "Auckland",
    suburb: "Glenfield",
    cardSummary:
      "Design, Build & Project Management | 2022",
    intro:
      "A multi residential development comprising four standalone homes, delivered through full design, construction, and project management services. Completed over a 12-month programme, the project presented significant site challenges due to the steep terrain and construction of extensive high retaining walls. Careful planning, engineering coordination, and construction management were essential to successfully deliver the development.",
    coverFile: "greenvally-rise-01.jpg"
  },
  {
    slug: "arran-road",
    title: "Arran Road",
    year: "2021",
    location: "Auckland",
    suburb: "Browns Bay",
    cardSummary:
      "Design & Build & Project Management | 2021",
    intro:
      "Features 2 spacious open plan living areas, 3 double bedrooms plus study, 2.5 bathrooms including an ensuite and a single garage with storage and parking. There are two bedrooms, a bathroom and a lounge with a separate entrance downstairs. Potential great grandmother of this area!",
    coverFile: "63cky.jpg"
  },
  {
    slug: "34-sylvan",
    title: "Sylvan",
    year: "2020",
    location: "Auckland",
    suburb: "Northcote",
    cardSummary:
      "Design & Build & Project Management | 2020",
    intro:
      "",
    coverFile: "IMG_8276.jpg"
  },
  {
    slug: "68-salamanca",
    title: "Salamanca",
    year: "2020",
    location: "Auckland",
    suburb: "Birkenhead",
    cardSummary:
      "Full Renovation & Project Management | 2020",
    intro:
      "3 bedrooms, 2 bathrooms and custom design kitchen & Bathroom",
    coverFile: "bf3f897f-be5f-419b-9deb-c9cd0fe36fe7.jpeg"
  },
  {
    slug: "kewa-road",
    title: "Kewa Road",
    year: "2020",
    location: "Auckland",
    suburb: "Albany Heights",
    cardSummary:
      "Design & Build & Project Management | 2020",
    intro:
      "Single level family home boasts unparalleled comfort and luxury combined with unobstructed panoramic views. Nestled amidst lush greenery, this generous family home sits on 1,000sqm of freehold land area. 5 bedrooms, 2 living areas, 3.5 bathrooms including 1 ensuite, and 1 study/flexi room, the open and expansive layout caters to the diverse needs of extended family living with its senior and kid-friendly design.",
    coverFile: "01.jpg",
    featured: true
  },
  {
    slug: "52-nigel",
    title: "Nigel",
    year: "2019",
    location: "Auckland",
    suburb: "Browns Bay",
    cardSummary:
      "Design & Build & Project Management | 2019",
    intro:
      "",
    coverFile: "1.jpeg"
  },
  {
    slug: "hebron-road",
    title: "Hebron Road",
    year: "2019",
    location: "Auckland",
    suburb: "Torbay",
    cardSummary:
      "Design & Build & Project Management | 2019",
    intro:
      "This legal home & income house is situated on a 733m2 flat section. It offers 6 bedrooms, 5.5 bathrooms, 2 offices (1 with wardrobe), a double garage and 2 council approved parking spaces.",
    coverFile: "1.jpg"
  },
  {
    slug: "highway-view-lane",
    title: "Highway View Lane",
    year: "2018",
    location: "Auckland",
    suburb: "Schnapper Rock",
    cardSummary:
      "Design & Build & Project Management | 2018",
    intro:
      "This exquisite home is an embodiment of understated opulence, designed to elevate your daily living to new heights. Nestled in serene and sought-after neighborhood that exudes tranquility, this chic 6 bedrooms family home promises an enviable lifestyles that is nothing short of extraordinary.",
    coverFile: "1.jpg"
  },
  {
    slug: "resolution-17",
    title: "Resolution",
    year: "2018",
    location: "Auckland",
    suburb: "Gulf Harbour",
    cardSummary:
      "Design & Build & Project Management | 2018",
    intro:
      "It comes with all the bells and whistles, double glazing, a modern kitchen, complete with Bosch appliances, open plan living and dining providing that all important space for entertaining guests or relaxing with loved ones. Four bedrooms and a plethora of bathrooms split over both levels make this property perfect for busy families or those looking for extra space and privacy. A double garage with internal access and separate laundry complete the picture and provide convenience and security.",
    coverFile: "1.jpg"
  },
  {
    slug: "barbados-drive",
    title: "Barbados Drive",
    year: "2017",
    location: "Auckland",
    suburb: "Unsworth Heights",
    cardSummary:
      "Design & Build & Project Management | 2017",
    intro:
      "This brand new, single-storey, four-bedroom plus office/extra bedroom home located in the Unsworth Heights area is contemporary living at its best. This delightful sunny Platinum home is bathed in all day sun and is remarkably spacious inside, with a gorgeous kitchen and dining areas that opens up into a sunny courtyard and easy-care garden.",
    coverFile: "1.png"
  },
  {
    slug: "manuka-road-bayview",
    title: "Manuka Road",
    year: "2016",
    location: "Bayview",
    suburb: "Glenfield",
    cardSummary:
      "Full Renovation & Project Management | 2016",
    intro:
      "This sun filled, North-facing black & brick home, with full renovation and change layout from 2 bedrooms to 3 bedrooms, 2 bathrooms, one of which is an ensuite off the Master.",
    coverFile: "2-152 Manuka Rd Bayview (5).jpg"
  },
  {
    slug: "jade-court-albany",
    title: "Jade Court",
    year: "2015",
    location: "Albany",
    suburb: "Albany",
    cardSummary:
      "Recladding / Renovation / Extension & Project Management | 2015",
    intro:
      "This legal home & income house is situated on a 733m2 flat section. It offers 6 bedrooms, 5.5 bathrooms, 2 offices (1 with wardrobe), a double garage and 2 council approved parking spaces.",
    coverFile: "16 Jade Court Albany (18).jpg"
  }
];

const getGalleryForSlug = (slug: string, title: string, coverFile: string) => {
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
  const orderedFiles = [
    coverFile,
    ...files.filter((file) => file !== coverFile)
  ];

  return orderedFiles.map((file) => ({
    src: `/projects/${slug}/${file}`,
    alt: `${title} project image`
  }));
};

export const projects: Project[] = projectMeta.map((meta) => ({
  ...meta,
  coverImage: `/projects/${meta.slug}/${meta.coverFile}`,
  coverAlt: `${meta.title} project cover image`,
  gallery: getGalleryForSlug(meta.slug, meta.title, meta.coverFile)
}));

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
