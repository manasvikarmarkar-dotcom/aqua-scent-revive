export type Fragrance = {
  slug: string;
  name: string;
  tagline: string;
  accord: string;
  family: string;
  bottle: string;
  scene: string;
  packaging: string;
  description: string;
  notes: { top: string[]; heart: string[]; base: string[] };
  price: string;
};

export const fragrances: Fragrance[] = [
  {
    slug: "noble",
    scene: "https://www.sarkar.store/cdn/shop/files/noble_6.webp?v=1785465305&width=3840",
    name: "NOBLE",
    tagline: "WEIGHTLESS. CLEAR. ENDLESS.",
    accord: "AQUATIC · MARINE · CLEAN",
    family: "Fresh Aquatic",
    bottle:
      "https://www.sarkar.store/cdn/shop/files/noble_8c3802da-24c2-4b48-85bb-d75cc4769fd3.png?v=1785759252&width=832",
    packaging: "https://www.sarkar.store/cdn/shop/files/03-412X799px.jpg?v=1784571804&width=369",
    description:
      "Noble is rebuilt as pure water on skin. Cold sea air, wet mineral stone and a transparent musk that reads like rain on glass — a fragrance that feels rinsed, quiet and endlessly breathable.",
    notes: {
      top: ["Sea Salt", "Water Lily", "Aldehydic Ozone"],
      heart: ["Marine Accord", "Blue Lotus", "Wet Mineral Stone"],
      base: ["Driftwood", "White Musk", "Ambergris"],
    },
    price: "₹2,499",
  },
  {
    slug: "throne",
    scene: "https://www.sarkar.store/cdn/shop/files/throne_homepage.png?v=1784620363&width=1500",
    name: "THRONE",
    tagline: "ABSOLUTE. DARK. UNRIVALLED.",
    accord: "WARM · LEATHER · AMBER",
    family: "Warm Leather",
    bottle:
      "https://www.sarkar.store/cdn/shop/files/Throne_6459f77a-e801-4216-9fb1-4c7f1daad3ef.png?v=1777539866&width=1000",
    packaging: "https://www.sarkar.store/cdn/shop/files/04-412X799px.jpg?v=1777551708&width=412",
    description:
      "A dark, commanding signature built on polished leather and resinous amber.",
    notes: {
      top: ["Bergamot", "Pink Pepper"],
      heart: ["Leather", "Tobacco Leaf"],
      base: ["Amber", "Vanilla", "Patchouli"],
    },
    price: "₹2,499",
  },
  {
    slug: "orion",
    scene: "https://www.sarkar.store/cdn/shop/files/orion_4.webp?v=1783951644&width=3840",
    name: "ORION",
    tagline: "INFINITE. COLD. AMBITIOUS.",
    accord: "FRESH · CITRUS · AROMATIC",
    family: "Fresh Citrus",
    bottle:
      "https://www.sarkar.store/cdn/shop/files/Orion_62ec9098-e702-46a4-8a36-6d1931a1b8c2.png?v=1784572821&width=967",
    packaging: "https://www.sarkar.store/cdn/shop/files/02-412X799px.jpg?v=1784570828&width=358",
    description: "Cold citrus and crisp aromatics under an open winter sky.",
    notes: {
      top: ["Lemon", "Grapefruit"],
      heart: ["Lavender", "Geranium"],
      base: ["Vetiver", "Cedar"],
    },
    price: "₹2,499",
  },
  {
    slug: "regal",
    scene: "https://www.sarkar.store/cdn/shop/files/regal.webp?v=1782110791&width=3840",
    name: "REGAL",
    tagline: "ANCIENT. LIQUID. EMPIRE.",
    accord: "OUD · SMOKY · MUSK",
    family: "Oud Smoky",
    bottle:
      "https://www.sarkar.store/cdn/shop/files/regal_168db6cc-97c6-4eaf-8578-43b94301e41a.png?v=1785759304&width=832",
    packaging: "https://www.sarkar.store/cdn/shop/files/01-412X799px.jpg?v=1784571659&width=401",
    description: "Smoked oud and dense musk — heavy, regal, unmistakable.",
    notes: {
      top: ["Saffron"],
      heart: ["Oud", "Rose"],
      base: ["Musk", "Incense"],
    },
    price: "₹2,499",
  },
];

export const getFragrance = (slug: string) => fragrances.find((f) => f.slug === slug);
