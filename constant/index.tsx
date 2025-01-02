export const categories: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Erkek Giyim",
    href: "/shop/men",
    description:
      "Son moda erkek giyim ürünleri, takım elbise, tişört, pantolon ve daha fazlası.",
  },
  {
    title: "Kadın Giyim",
    href: "/shop/women",
    description:
      "Kadınlar için şık ve rahat kıyafetler, elbise, etek, bluz ve daha fazlası.",
  },
  {
    title: "Çocuk Giyim",
    href: "/shop/kids",
    description:
      "Çocuklar için eğlenceli ve rahat giyim ürünleri, tişört, pantolon, elbise ve daha fazlası.",
  },
  {
    title: "Aksesuarlar",
    href: "/shop/accessories",
    description: "Tarzınızı tamamlayacak şapka, çanta, kemer ve daha fazlası.",
  },
  {
    title: "Ayakkabılar",
    href: "/shop/shoes",
    description:
      "Spor ayakkabıdan resmi ayakkabıya, her tarza uygun ayakkabılar.",
  },
  {
    title: "İndirimli Ürünler",
    href: "/shop/sale",
    description:
      "İndirimdeki ürünler, uygun fiyatlarla kaliteli giyim seçenekleri.",
  },
];

export interface SSsType {
  id: string;
  title: string;
  description: string;
}
export const ssList: SSsType[] = [
  {
    id: "item-1",
    title: "Title 1 sss",
    description:
      "Son moda erkek giyim ürünleri, takım elbise, tişört, pantolon ve daha fazlası.",
  },
  {
    id: "item-2",
    title: "Title 2 sss",
    description:
      "Son moda erkek giyim ürünleri, takım elbise, tişört, pantolon ve daha fazlası.",
  },

  {
    id: "item-3",
    title: "Title 3 sss",
    description:
      "Son moda erkek giyim ürünleri, takım elbise, tişört, pantolon ve daha fazlası.",
  },
  {
    id: "item-4",
    title: "Title 4 sss",
    description:
      "Son moda erkek giyim ürünleri, takım elbise, tişört, pantolon ve daha fazlası.",
  },
];

export interface CarouselType {
  id: number;
  image: string;
}
export const CarouselList: CarouselType[] = [
  {
    id: 1,
    image: "/slider/slider1.webp",
  },
  {
    id: 1,
    image: "/slider/slider2.webp",
  },
  {
    id: 1,
    image: "/slider/slider3.webp",
  },
];
export interface ProductType {
  id: number;
  title: string;
  price: number;
  mrp: number;
  description: string;
  image: string;
}

export const products: ProductType[] = [
  {
    id: 1,
    title: "Make Up",
    price: 100,
    mrp: 120,
    description: "Description for product one",
    image: "/products/makeup.jpeg",
  },
  {
    id: 2,
    title: "Olive",
    price: 150,
    mrp: 170,
    description: "Description for product two",
    image: "/products/olive.jpeg",
  },
  {
    id: 3,
    title: "Parfüme",
    price: 200,
    mrp: 220,
    description: "Description for product three",
    image: "/products/parfüme.jpeg",
  },
  {
    id: 4,
    title: "Laptop",
    price: 250,
    mrp: 270,
    description: "Description for product four",
    image: "/products/pc.jpeg",
  },
  {
    id: 5,
    title: "Furniture",
    price: 300,
    mrp: 320,
    description: "Description for product five",
    image: "/products/room.jpeg",
  },
  {
    id: 6,
    title: "Rose oil",
    price: 350,
    mrp: 370,
    description: "Description for product six",
    image: "/products/rose.jpeg",
  },
  {
    id: 7,
    title: "Watch",
    price: 400,
    mrp: 420,
    description: "Description for product seven",
    image: "/products/watch.jpeg",
  },
  {
    id: 8,
    title: "Carper",
    price: 450,
    mrp: 470,
    description: "Description for product eight",
    image: "/products/color.jpeg",
  },
  {
    id: 9,
    title: "Cream",
    price: 500,
    mrp: 520,
    description: "Description for product nine",
    image: "/products/cream.jpeg",
  },
  {
    id: 10,
    title: "Fruits",
    price: 550,
    mrp: 570,
    description: "Description for product ten",
    image: "/products/fruit.jpeg",
  },
  {
    id: 11,
    title: "Vegetables",
    price: 600,
    mrp: 620,
    description: "Description for product eleven",
    image: "/products/peper.jpeg",
  },
  {
    id: 12,
    title: "Camera",
    price: 650,
    mrp: 670,
    description: "Description for product twelve",
    image: "/products/phpto.jpeg",
  },
];
