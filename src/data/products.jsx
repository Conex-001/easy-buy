import iphoneImage from "../assets/Images/iphone.jpg";
import samsungImage from "../assets/Images/samsung.jpeg";
import sonyImage from "../assets/Images/sony.jpg";
import laptopImage from "../assets/Images/laptop.jpeg";
import applewatchImage from "../assets/Images/applewatch.jpg";
import phone13 from "../assets/Images/phone13.jpg";
import promax12 from "../assets/Images/promax12.jpg";
import iphn11 from "../assets/Images/iphn11.jpg";
import sa73 from "../assets/Images/sa73.jpg";
import pixel7 from "../assets/Images/pixel7.jpg";
import Xiaomi from "../assets/Images/Xiaomi.jpg";
import Macbook from "../assets/Images/Macbook.jpg";
import lappy from "../assets/Images/lappy.jpg";
import earbuds from "../assets/Images/earbuds.jpg";

const PRODUCTS = [
  {
    id: "1",
    name: "iPhone 16",
    description:
      "Introducing the new iPhone 16 - The future in your hands. Featuring a sleek new design, faster A18 chip, advanced AI-powered camera system, and a stunning always-on display.",
    price: 1400000,
    image: iphoneImage,
    category: "iPhone",
  },
  {
    id: "2",
    name: "Samsung Galaxy S23",
    description:
      "Samsung Galaxy S23 with vibrant AMOLED display, pro-grade camera, and lightning-fast performance for all your mobile needs.",
    price: 1050000,
    image: samsungImage,
    category: "Android",
  },
  {
    id: "3",
    name: "Sony WH-1000XM5 Headphones",
    description:
      "Industry-leading noise cancelling wireless headphones with exceptional sound quality and 30 hours of battery life.",
    price: 720000,
    image: sonyImage,
    category: "Accessory",
  },
  {
    id: "4",
    name: "Dell XPS 13 Laptop",
    description:
      "Compact and powerful ultrabook with Intel i7 processor, 16GB RAM, and stunning 4K display for all your productivity needs.",
    price: 900000,
    image: laptopImage,
    category: "Laptop",
  },
  {
    id: "5",
    name: "Apple Watch Series 9",
    description:
      "The latest Apple Watch Series 9 with health tracking, fitness features, and seamless iOS integration.",
    price: 250000,
    image: applewatchImage,
    category: "Accessory",
  },
  {
    id: "6",
    name: "iPhone 13 Pro",
    category: "iPhone",
    image: phone13,
    price: 1000000,
    description: "iPhone 13 Pro with ProMotion and triple camera system.",
  },
  {
    id: "7",
    name: "iPhone 12 Pro Max",
    category: "iPhone",
    image: promax12,
    price: 900000,
    description: "iPhone 12 Pro Max with 6.7-inch Super Retina XDR display.",
  },
  {
    id: "8",
    name: "iPhone 11",
    category: "iPhone",
    image: iphn11,
    price: 700000,
    description: "Classic iPhone 11 with dual camera system.",
  },
  {
    id: "9",
    name: "Samsung Galaxy A73",
    category: "Android",
    image: sa73,
    price: 700000,
    description: "Affordable Samsung Galaxy A73 with AMOLED display.",
  },
  {
    id: "10",
    name: "Google Pixel 7 Pro",
    category: "Android",
    image: pixel7,
    price: 999000,
    description: "Pixel 7 Pro with Tensor G2 chip and exceptional camera.",
  },
  {
    id: "11",
    name: "Xiaomi 13 Pro",
    category: "Android",
    image: Xiaomi,
    price: 850000,
    description: "Xiaomi 13 Pro with Leica optics and Snapdragon 8 Gen 2.",
  },

  {
    id: "12",
    name: "MacBook Pro",
    description:
      "The new MacBook Pro has the longest battery life ever in a Mac — up to 24 hours — and supports fast charge, allowing it to charge up to 50 percent in just 30 min.",
    price: 3700000,
    image: Macbook,
    category: "Laptop",
  },

  {
    id: "13",
    name: "HP Envy 14",
    description:
      "Intel® Core™ Ultra 5, 16GB, Touchscreen, with pen (Elevate your productivity with built-in AI technology to do far more and far faster.",
    price: 1259000,
    image: lappy,
    category: "Laptop",
  },
  {
     id: "14",
    name: "oraimo SpaceBuds Hybrid ANC",
    description:
      "True Wireless Earbuds Customized Voice Prompt, Personalized Lighting Effect.",
    price: 46900,
    image: earbuds,
    category: "Accessory",
  },
];

export default PRODUCTS;
