import img1 from '../assets/p1.png';
import img2 from '../assets/p2.png';
import img3 from '../assets/p3.png';
import img4 from '../assets/p4.png';
import img5 from '../assets/p5.png';
import img6 from '../assets/p6.png';
import img7 from '../assets/p7.png';
import img8 from '../assets/p8.png';
import img9 from '../assets/p9.png';
import img10 from '../assets/p10.png';
import img11 from '../assets/p11.png';
import img12 from '../assets/p12.png';
import img13 from '../assets/p13.png';
import img14 from '../assets/p14.png';
import img15 from '../assets/p15.png';
import img16 from '../assets/p16.png';
import img17 from '../assets/p17.png';
import img18 from '../assets/p18.png';
import img19 from '../assets/p19.png';
import img20 from '../assets/p20.png';
import img21 from '../assets/p21.png';
import img22 from '../assets/p22.png';
import img23 from '../assets/p23.png';
import img24 from '../assets/p24.png';
import img25 from '../assets/p25.png';
import img26 from '../assets/p26.png';
import img27 from '../assets/p27.png';
import img28 from '../assets/p28.png';
import img29 from '../assets/p29.png';
import img30 from '../assets/p30.png';
import img31 from '../assets/p31.png';
import img32 from '../assets/p32.png';
import img33 from '../assets/p33.png';
import img34 from '../assets/p34.png';
import img35 from '../assets/p35.png';
import img36 from '../assets/p36.png';
import img37 from '../assets/p37.png';
import img38 from '../assets/p38.png';
import img39 from '../assets/p39.png';
import img40 from '../assets/p40.png';
import img41 from '../assets/p41.png';
import img42 from '../assets/p42.png';
import img43 from '../assets/p43.png';
import img44 from '../assets/p44.png';
import img45 from '../assets/p45.png';
import img46 from '../assets/p46.png';
import img47 from '../assets/p47.png';
import img48 from '../assets/p48.png';
import img49 from '../assets/p49.png';
import img50 from '../assets/p50.png';

const productsData = [
  { id: 1, img: img1, name: "North Face Rain Jacket", description: "Waterproof, windproof jacket for outdoor adventures", rating: 5, price: 199, discount: 20, category: "Fashion" },
  { id: 2, img: img2, name: "Adidas Ultraboost Sneakers", description: "Comfortable running sneakers with responsive cushioning", rating: 4, price: 150, discount: 0, category: "Fashion" },
  { id: 3, img: img3, name: "IKEA Poäng Chair", description: "Ergonomic wooden chair with cushioned seat", rating: 5, price: 129, discount: 10, category: "Home" },
  { id: 4, img: img4, name: "Apple iPhone 15", description: "Latest Apple smartphone with A17 chip", rating: 5, price: 999, discount: 0, category: "Electronics" },
  { id: 5, img: img5, name: "Gucci Leather Belt", description: "Premium leather belt with GG logo", rating: 4, price: 350, discount: 15, category: "Fashion" },
  { id: 6, img: img6, name: "Fjällräven Kanken Backpack", description: "Durable and stylish backpack for daily use", rating: 5, price: 120, discount: 0, category: "Fashion" },
  { id: 7, img: img7, name: "Philips Hue Smart Lamp", description: "Color-changing smart lamp compatible with Alexa", rating: 4, price: 80, discount: 0, category: "Electronics" },
  { id: 8, img: img8, name: "Nike Dri-FIT T-shirt", description: "Lightweight moisture-wicking sports t-shirt", rating: 4, price: 35, discount: 0, category: "Fashion" },
  { id: 9, img: img9, name: "Timberland Classic Boots", description: "Durable leather boots for outdoor and casual wear", rating: 5, price: 180, discount: 10, category: "Fashion" },
  { id: 10, img: img10, name: "Kindle Paperwhite", description: "Waterproof e-reader with high-resolution display", rating: 5, price: 130, discount: 0, category: "Electronics" },
  { id: 11, img: img11, name: "Zara Linen Shirt", description: "Breathable linen shirt for summer", rating: 4, price: 45, discount: 0, category: "Fashion" },
  { id: 12, img: img12, name: "Herschel Little America Backpack", description: "Stylish and spacious backpack with padded straps", rating: 4, price: 110, discount: 15, category: "Fashion" },
  { id: 13, img: img13, name: "LEGO Star Wars Set", description: "Building set for Star Wars fans", rating: 5, price: 80, discount: 20, category: "Toys" },
  { id: 14, img: img14, name: "Ray-Ban Aviator Sunglasses", description: "Classic metal frame sunglasses", rating: 4, price: 150, discount: 0, category: "Fashion" },
  { id: 15, img: img15, name: "Instant Pot Duo 7-in-1", description: "Electric pressure cooker with multiple functions", rating: 5, price: 100, discount: 10, category: "Home" },
  { id: 16, img: img16, name: "Patagonia Fleece Jacket", description: "Soft and warm fleece jacket for winter", rating: 5, price: 140, discount: 0, category: "Fashion" },
  { id: 17, img: img17, name: "Urban Outfitters Wall Tapestry", description: "Bohemian style wall decor", rating: 4, price: 60, discount: 0, category: "Home" },
  { id: 18, img: img18, name: "Fossil Leather Watch", description: "Classic analog leather strap watch", rating: 4, price: 120, discount: 5, category: "Fashion" },
  { id: 19, img: img19, name: "Samsung Galaxy S24", description: "Latest Android flagship smartphone", rating: 5, price: 950, discount: 0, category: "Electronics" },
  { id: 20, img: img20, name: "Gucci GG Marmont Bag", description: "Luxury leather crossbody bag", rating: 5, price: 1200, discount: 20, category: "Fashion" },
  { id: 21, img: img21, name: "Patagonia Hiking Pants", description: "Durable and stretchable pants for outdoor activities", rating: 4, price: 90, discount: 0, category: "Fashion" },
  { id: 22, img: img22, name: "Urbanears Headphones", description: "Noise-cancelling over-ear headphones", rating: 4, price: 110, discount: 0, category: "Electronics" },
  { id: 23, img: img23, name: "H&M Cotton Hoodie", description: "Soft and comfortable cotton hoodie", rating: 4, price: 40, discount: 0, category: "Fashion" },
  { id: 24, img: img24, name: "Yankee Candle Large Jar", description: "Scented candle for home fragrance", rating: 5, price: 25, discount: 10, category: "Home" },
  { id: 25, img: img25, name: "Nike Running Shoes", description: "Breathable running shoes with cushioning", rating: 5, price: 120, discount: 0, category: "Fashion" },
  { id: 26, img: img26, name: "Muji Acrylic Storage Box", description: "Transparent stackable storage box", rating: 4, price: 20, discount: 0, category: "Home" },
  { id: 27, img: img27, name: "GoPro Hero 12", description: "Action camera for adventure sports", rating: 5, price: 400, discount: 15, category: "Electronics" },
  { id: 28, img: img28, name: "AmazonBasics Floor Lamp", description: "Modern standing floor lamp", rating: 4, price: 50, discount: 0, category: "Home" },
  { id: 29, img: img29, name: "Converse All Star Sneakers", description: "Classic canvas high-top sneakers", rating: 4, price: 70, discount: 0, category: "Fashion" },
  { id: 30, img: img30, name: "Urban Outfitters Vase", description: "Decorative ceramic vase", rating: 4, price: 45, discount: 0, category: "Home" }
];

export default productsData;
