export interface MenuItem {
  id: string;
  name: string;
  category: "Breakfast" | "Main Dishes" | "Pasta" | "Bowls" | "Desserts" | "Coffee" | "Matcha" | "Specialty Drinks";
  description: string;
  image: string;
  isSpecialty?: boolean;
  tags?: string[];
}

export const SIGNATURE_ITEMS: MenuItem[] = [
  {
    id: "sig-bowl",
    name: "Signature Breakfast Bowl",
    category: "Bowls",
    description: "Nutrient-rich ancient grains, avocado, fresh seasonal berries, toasted pumpkin seeds, and delicate edible blossoms.",
    image: "/images/dish-smoothie-bowl-top.jpg",
    isSpecialty: true,
    tags: ["Signature", "Plant-based"],
  },
  {
    id: "sig-matcha",
    name: "Ceremonial Iced Matcha Latte",
    category: "Matcha",
    description: "Stone-ground ceremonial grade Japanese Uji matcha layered gracefully over silky chilled milk and crushed ice.",
    image: "/images/dish-smoothie-green-juice.jpg",
    isSpecialty: true,
    tags: ["Signature", "Cold Brew"],
  },
  {
    id: "sig-chocolate",
    name: "Chocolate Bliss",
    category: "Desserts",
    description: "Decadent dark chocolate ganache pave with 24k gold leaf flakes, vanilla bean quenelle, and micro botanicals.",
    image: "/images/dish-chocolate-bliss-hd.jpg",
    isSpecialty: true,
    tags: ["Artisan Dessert", "Chef Choice"],
  },
  {
    id: "sig-pan-fish",
    name: "Pan-Seared Barramundi",
    category: "Main Dishes",
    description: "Crispy skin ocean fillet rested on silky spiced carrot puree, sauteed native greens, and wild forest mushroom ragout.",
    image: "/images/dish-pan-seared-fish.jpg",
    isSpecialty: true,
    tags: ["Catch of the Day", "Gluten-Free"],
  },
  {
    id: "sig-bagel",
    name: "Artisan Egg & Relish Bagel",
    category: "Breakfast",
    description: "Toasted house bagel, farm-fresh sunny egg, caramelized onion jam, crisp organic kale, and turmeric emulsion drizzle.",
    image: "/images/dish-bagel-sandwich.jpg",
    isSpecialty: true,
    tags: ["Morning Favorite", "Fresh"],
  },
  {
    id: "sig-croissant",
    name: "Savory Braised Croissant",
    category: "Main Dishes",
    description: "Handmade buttery laminated croissant layered with tender savory pulled filling, pickled pink onions, and ruby pomegranate seeds.",
    image: "/images/dish-savory-croissant.jpg",
    isSpecialty: true,
    tags: ["House Special", "Handcrafted"],
  },
];

export const FULL_MENU_ITEMS: MenuItem[] = [
  ...SIGNATURE_ITEMS,
  {
    id: "truffle-pasta",
    name: "Truffle Rigatoni",
    category: "Pasta",
    description: "Al dente rigatoni tossed in a velvety black truffle and aged parmesan reduction, finished in a sizzling cast-iron skillet.",
    image: "/images/dish-truffle-pasta.jpg",
    tags: ["Vegetarian"],
  },
  {
    id: "classic-breakfast",
    name: "Beru Classic Breakfast",
    category: "Breakfast",
    description: "Farm-fresh eggs cooked to your preference, artisan sourdough bread, blistered cherry vine tomatoes, and herb butter.",
    image: "/images/dish-classic-breakfast.jpg",
    tags: ["Classic"],
  },
  {
    id: "cinnamon-pastry",
    name: "Golden Cardamom & Cinnamon Roll",
    category: "Desserts",
    description: "Warm, pillowy brioche swirled with Ceylon spiced cinnamon, raw organic cane sugar, and gentle citrus glaze.",
    image: "/images/insta-pastries.jpg",
    tags: ["Freshly Baked"],
  },
  {
    id: "espresso-tonic",
    name: "Artisan Espresso Tonic",
    category: "Coffee",
    description: "Double shot of single-origin espresso extracted over botanical sparkling tonic and fresh dehydrated citrus wheels.",
    image: "/images/hero-ambience.jpg",
    tags: ["Specialty Coffee"],
  },
  {
    id: "cucumber-cooler",
    name: "Botanical Cucumber & Mint Cooler",
    category: "Specialty Drinks",
    description: "Cold-pressed island cucumber, fresh garden mint, lime spritz, and a touch of wild wildflower honey.",
    image: "/images/dish-smoothie-counter.jpg",
    tags: ["Refreshing"],
  },
  {
    id: "flat-white",
    name: "Velvet Flat White",
    category: "Coffee",
    description: "Expertly roasted specialty espresso harmonized with micro-foamed textured whole milk.",
    image: "/images/hero-ambience.jpg",
    tags: ["House Favorite"],
  },
];

export const MENU_CATEGORIES = [
  "All",
  "Breakfast",
  "Main Dishes",
  "Pasta",
  "Bowls",
  "Desserts",
  "Coffee",
  "Matcha",
  "Specialty Drinks",
] as const;
