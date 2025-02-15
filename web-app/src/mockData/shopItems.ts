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
    id: "fe9269ff-ea9d-4dc4-8f7b-ffc9f857515e",
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
    id: "0c0d287b-19c7-40db-9cd1-389f414fcfef",
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
    id: "b280f545-79c6-47f3-b4c5-a0d7e9165d6e",
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
    id: "35f69f8c-f94f-4627-90ae-c62dfc82df51",
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
    id: "90e909cb-d6a3-4eef-8c20-69ab52a82e9e",
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
    id: "1dddfb08-168d-4efc-865a-84d0f9737c99",
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
    id: "13729da4-fd76-4587-93f2-c3173dd9ce05",
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
    id: "0dfd6462-c5a7-4cde-a098-8d8e13b41297",
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
