const u = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&fit=crop&auto=format`;

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "rates", label: "Rates" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact Us" },
] as const;

export const SOCIAL = {
  instagram: { handle: "@BoozeBabies.Atl", url: "https://www.instagram.com/boozebabies.atl" },
  tiktok: { handle: "@BoozeBabies.Atl", url: "https://www.tiktok.com/@boozebabies.atl" },
};

export const IMG = {
  hero: u("1575444758702-4a6b9222336e", 2000),
  about: u("1551024709-8f23befc6f87", 1100),
};

export type BarKey = "cocktail" | "lemonade" | "mocktail";
export const BARS: {
  key: BarKey; num: string; name: string; title: string; body: string; points: string[]; img: string; alt: string;
}[] = [
  {
    key: "cocktail", num: "01", name: "Luxury Craft Cocktail Bar", title: "Premium pours, perfectly crafted.",
    body: "Handcrafted cocktails, premium spirits and an elevated presentation your guests will talk about. Every pour is intentional. Every setup is immaculate.",
    points: ["Custom cocktail menus", "Premium spirit selection", "Craft garnishes & presentation", "Professional bar staff"],
    img: u("1536935338788-846bb9981813"), alt: "Premium handcrafted cocktails with garnishes and elegant glassware",
  },
  {
    key: "lemonade", num: "02", name: "Kids' Lemonade Bar", title: "Little guests, big moments.",
    body: "Children deserve their own experience — not a cup of juice from the buffet table. A colorful, interactive lemonade bar that makes younger guests part of the celebration.",
    points: ["Fresh-squeezed lemonade varieties", "Fun flavor add-ins & toppings", "Kid-friendly presentation", "Interactive self-serve station"],
    img: u("1621263764928-df1444c5e859"), alt: "Colorful lemonade station with fresh fruit and playful presentation",
  },
  {
    key: "mocktail", num: "03", name: "Zero-Proof Mocktail Bar", title: "Sophisticated sips, no alcohol needed.",
    body: "For non-drinkers, designated drivers and anyone who prefers a beautiful alcohol-free drink — the same craft and presentation as the cocktail bar. Zero proof. Full experience.",
    points: ["House-crafted mocktail menus", "Premium non-alcoholic spirits", "Elegant garnish & glassware", "Identical care & presentation"],
    img: u("1622483767028-3f66f32aef97"), alt: "Elegant zero-proof mocktails with sophisticated garnishes",
  },
];

export const EVENT_TYPES = ["Wedding", "Birthday Celebration", "Corporate Event", "Private Party", "Family Celebration", "Special Occasion", "Other"];

export const EVENTS = [
  { name: "Weddings", img: u("1519225421980-715cb0215aed", 900), alt: "Elegant wedding reception with bar setup and floral decor" },
  { name: "Birthday Celebrations", img: u("1530103862676-de8c9debad1d", 900), alt: "Vibrant birthday celebration with festive atmosphere" },
  { name: "Corporate Events", img: u("1540575467063-178a50c2df87", 900), alt: "Professional corporate event with premium bar service" },
  { name: "Private Parties", img: u("1516450360452-9312f5e86fc7", 900), alt: "Intimate private party with mood lighting" },
  { name: "Family Celebrations", img: u("1529543544282-ea669407fca3", 900), alt: "Family celebration for guests of all ages" },
  { name: "Special Occasions", img: u("1543007630-9710e4a00a20", 900), alt: "Special occasion with luxurious cocktail presentation" },
];

export const GALLERY = [
  { img: u("1470337458703-46ad1756a187", 1100), alt: "Elegant mobile bar installation with premium glassware and floral backdrop" },
  { img: u("1558618666-fcd25c85cd64", 800), alt: "Bartender pouring a premium cocktail" },
  { img: u("1569529465841-dfecdab7503b", 800), alt: "Vibrant cocktail with citrus garnish" },
  { img: u("1543362906-acfc16c67564", 800), alt: "Colorful fresh lemonade drinks with fruit garnishes" },
  { img: u("1612528443702-f6741f70a049", 800), alt: "Zero-proof mocktail with herbs" },
  { img: u("1467003909585-2f8a72700288", 1100), alt: "Dramatic bar setup with premium spirits display" },
];
