export type ShopItem = {
  id: string;
  name: string;
  category: "mens" | "womens" | "accessories";
  type: "sweater" | "blanket" | "crochet" | "scarf";
  price: number;
  sizes: string[];
  description: string;
  imageUrl: string;
  inStock: boolean;
};

export const shopItems: ShopItem[] = [
  {
    id: "price_1QspOKFEWYU7ZB6l3rBJgd9c",
    name: "Classic Wool Knit Sweater",
    category: "mens",
    type: "sweater",
    price: 89.99,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Warm and comfortable wool blend sweater perfect for cold days.",
    imageUrl: "/images/item-1.png",
    inStock: true,
  },
  {
    id: "price_1QsnfEFEWYU7ZB6lhkvtI3di",
    name: "Cozy Cable Knit Pullover",
    category: "womens",
    type: "sweater",
    price: 79.99,
    sizes: ["XS", "M", "XL"],
    description: "Classic cable knit design with soft, warm fabric.",
    imageUrl: "/images/item-2.png",
    inStock: true,
  },
  {
    id: "price_1QspRlFEWYU7ZB6lcsF78YaR",
    name: "Oversized Knit Cardigan",
    category: "womens",
    type: "sweater",
    price: 99.99,
    sizes: ["XS", "S", "M", "L"],
    description: "Soft, oversized cardigan perfect for layering.",
    imageUrl: "/images/item-3.png",
    inStock: true,
  },
  {
    id: "price_1QspSgFEWYU7ZB6lBG4j5CsM",
    name: "Soft Turtleneck Sweater",
    category: "mens",
    type: "sweater",
    price: 84.99,
    sizes: ["XS", "S", "M"],
    description: "Comfortable turtleneck with a slim fit design.",
    imageUrl: "/images/item-4.png",
    inStock: true,
  },
  {
    id: "price_1QspTFFEWYU7ZB6lbapLx45Q",
    name: "Chunky Knit Throw Blanket",
    category: "accessories",
    type: "blanket",
    price: 129.99,
    sizes: ["Queen", "King"],
    description: "Hand-knitted chunky blanket for ultimate comfort.",
    imageUrl: "/images/item-5.png",
    inStock: true,
  },
  {
    id: "price_1QspTkFEWYU7ZB6lRirqx05C",
    name: "Soft Fleece Throw",
    category: "accessories",
    type: "blanket",
    price: 79.99,
    sizes: ["Queen", "King"],
    description: "Plush fleece blanket for cozy nights.",
    imageUrl: "/images/item-6.png",
    inStock: true,
  },

  {
    id: "price_1QspUPFEWYU7ZB6lgIQ8PQi4",
    name: "Handmade Crochet Bear",
    category: "accessories",
    type: "crochet",
    price: 34.99,
    sizes: ["default"],
    description: "Adorable hand-crocheted stuffed animal, ideal for children.",
    imageUrl: "/images/item-7.png",
    inStock: true,
  },
  {
    id: "price_1QspUqFEWYU7ZB6luTGxNONM",
    name: "Crochet Dragon Toy",
    category: "accessories",
    type: "crochet",
    price: 39.99,
    sizes: ["default"],
    description: "Cool hand-crocheted Dragon.",
    imageUrl: "/images/item-8.png",
    inStock: true,
  },
];
