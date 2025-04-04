
export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  brand: string;
  category: string;
  gender: 'men' | 'women' | 'unisex';
  availableSizes: string[];
  colors: string[];
  tags: string[];
  rating: number;
  reviews: number;
  featured: boolean;
  new: boolean;
  sale: boolean;
  discount?: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Blue Wave Runner",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    description: "Lightweight running shoes with responsive cushioning and breathable mesh upper.",
    brand: "Nike",
    category: "Running",
    gender: "unisex",
    availableSizes: ["7", "8", "9", "10", "11"],
    colors: ["blue", "black", "gray"],
    tags: ["running", "lightweight", "breathable"],
    rating: 4.5,
    reviews: 120,
    featured: true,
    new: true,
    sale: false
  },
  {
    id: "2",
    name: "Urban Street Classic",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    ],
    description: "Classic urban sneakers with comfortable insole and durable outsole for everyday wear.",
    brand: "Adidas",
    category: "Casual",
    gender: "unisex",
    availableSizes: ["6", "7", "8", "9", "10", "11", "12"],
    colors: ["white", "black"],
    tags: ["casual", "classic", "comfortable"],
    rating: 4.3,
    reviews: 85,
    featured: false,
    new: false,
    sale: false
  },
  {
    id: "3",
    name: "Air Max Comfort",
    price: 159.99,
    images: [
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80",
      "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    description: "Maximum cushioning with air units for superior comfort and style.",
    brand: "Nike",
    category: "Lifestyle",
    gender: "men",
    availableSizes: ["8", "9", "10", "11", "12"],
    colors: ["red", "blue", "black"],
    tags: ["comfort", "air", "cushioning"],
    rating: 4.7,
    reviews: 210,
    featured: true,
    new: false,
    sale: false
  },
  {
    id: "4",
    name: "Trail Blazer Hiker",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    ],
    description: "Rugged hiking shoes with waterproof membrane and aggressive traction pattern.",
    brand: "Merrell",
    category: "Hiking",
    gender: "unisex",
    availableSizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["brown", "green", "gray"],
    tags: ["hiking", "outdoor", "waterproof"],
    rating: 4.6,
    reviews: 95,
    featured: false,
    new: true,
    sale: false
  },
  {
    id: "5",
    name: "Basketball Pro Elite",
    price: 149.99,
    images: [
      "https://images.unsplash.com/photo-1571601035754-5c7e75752731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    description: "High-performance basketball shoes with ankle support and responsive cushioning.",
    brand: "Under Armour",
    category: "Basketball",
    gender: "men",
    availableSizes: ["8", "9", "10", "11", "12", "13"],
    colors: ["black", "red", "white"],
    tags: ["basketball", "performance", "ankle-support"],
    rating: 4.8,
    reviews: 150,
    featured: true,
    new: false,
    sale: false
  },
  {
    id: "6",
    name: "Women's Fashion Boot",
    price: 119.99,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1385&q=80"
    ],
    description: "Stylish fashion boots with comfortable lining and durable construction.",
    brand: "Steve Madden",
    category: "Fashion",
    gender: "women",
    availableSizes: ["5", "6", "7", "8", "9", "10"],
    colors: ["black", "brown", "tan"],
    tags: ["fashion", "women", "boots"],
    rating: 4.4,
    reviews: 78,
    featured: false,
    new: true,
    sale: true,
    discount: 15
  },
  {
    id: "7",
    name: "Slip-On Work Shoe",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
    ],
    description: "Easy slip-on shoes with memory foam insole for all-day comfort.",
    brand: "Skechers",
    category: "Work",
    gender: "unisex",
    availableSizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["black", "navy", "gray"],
    tags: ["work", "comfortable", "slip-on"],
    rating: 4.2,
    reviews: 110,
    featured: false,
    new: false,
    sale: true,
    discount: 20
  },
  {
    id: "8",
    name: "Classic Canvas Sneaker",
    price: 54.99,
    images: [
      "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    description: "Timeless canvas sneaker with classic styling and comfort.",
    brand: "Converse",
    category: "Casual",
    gender: "unisex",
    availableSizes: ["5", "6", "7", "8", "9", "10", "11", "12"],
    colors: ["white", "black", "red", "navy"],
    tags: ["casual", "classic", "canvas"],
    rating: 4.5,
    reviews: 320,
    featured: false,
    new: false,
    sale: false
  },
  {
    id: "9",
    name: "Golf Pro Tour",
    price: 139.99,
    images: [
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1479&q=80"
    ],
    description: "Professional golf shoes with spike technology for superior grip and stability.",
    brand: "FootJoy",
    category: "Golf",
    gender: "men",
    availableSizes: ["8", "9", "10", "11", "12"],
    colors: ["white", "black", "gray"],
    tags: ["golf", "professional", "sports"],
    rating: 4.7,
    reviews: 68,
    featured: false,
    new: true,
    sale: false
  },
  {
    id: "10",
    name: "Elegant Women's Heel",
    price: 99.99,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
    ],
    description: "Elegant heels for formal occasions with comfortable insole and stylish design.",
    brand: "Nine West",
    category: "Formal",
    gender: "women",
    availableSizes: ["5", "6", "7", "8", "9", "10"],
    colors: ["black", "nude", "red"],
    tags: ["formal", "elegant", "heels"],
    rating: 4.4,
    reviews: 92,
    featured: true,
    new: false,
    sale: true,
    discount: 10
  },
  {
    id: "11",
    name: "CrossFit Training X",
    price: 119.99,
    images: [
      "https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    ],
    description: "CrossFit training shoes with stable platform and durable materials for intense workouts.",
    brand: "Reebok",
    category: "Training",
    gender: "unisex",
    availableSizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["black", "gray", "blue"],
    tags: ["crossfit", "training", "gym"],
    rating: 4.8,
    reviews: 135,
    featured: true,
    new: false,
    sale: false
  },
  {
    id: "12",
    name: "Kids Colorful Sneaker",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
    ],
    description: "Fun, colorful sneakers for kids with easy-on design and non-marking outsole.",
    brand: "New Balance",
    category: "Kids",
    gender: "unisex",
    availableSizes: ["1", "2", "3", "4", "5", "6"],
    colors: ["multi", "blue", "pink"],
    tags: ["kids", "colorful", "easy-on"],
    rating: 4.6,
    reviews: 87,
    featured: false,
    new: true,
    sale: false
  }
];

// Filter options based on the products data
export const filterOptions = {
  brands: Array.from(new Set(products.map(product => product.brand))),
  categories: Array.from(new Set(products.map(product => product.category))),
  genders: Array.from(new Set(products.map(product => product.gender))),
  colors: Array.from(new Set(products.flatMap(product => product.colors))),
  minPrice: Math.min(...products.map(product => product.price)),
  maxPrice: Math.max(...products.map(product => product.price)),
};
