import note from "../images/1.jpg";
import note1 from "../images/2.jpg";
import suzuki from "../images/suzuki.jpg";
import mazda from "../images/mazda.jpg";
import mazda1 from "../images/mazda1.jpg";
import mazdaa from "../images/mazdaa.jpg";
import mazdaa1 from "../images/mazdaa1.jpg";
import axio from "../images/axio.jpg";
import fielder from "../images/fielder.jpg";
import fielder1 from "../images/fielder1.jpg";
import premial from "../images/premial.jpg";
import premial1 from "../images/premial.jpg";
import crown from "../images/crown.jpg";
import crown1 from "../images/crown1.jpg";
import mark from "../images/mark.jpg";
import mark1 from "../images/mark1.jpg";
import harrier from "../images/harrier.jpg";
import harrier1 from "../images/harrier1.jpg";
import prado from "../images/prado.jpg";
import prado1 from "../images/prado1.jpg";
import cruizer from "../images/cruizer.jpg";
import beachVilla1 from "../images/bnb.jpg";
import beachVilla2 from "../images/bnb1.jpg";
import { RentalItem } from "../types";

export const vehicles: RentalItem[] = [
  {
    id: "v1",
    images: [note1, note],
    title: "Nissan note",
    description: "Luxury SUV with premium features",
    price: "ksh3,000/day",
    type: "vehicle",
    category: "economy",
    features: ["Leather seats", "Panoramic roof", "GPS Navigation"],
    location: "Thika",
  },
  {
    id: "v2",
    images: [suzuki],
    title: "suzuki swift ",
    description: "Executive sedan for business travel",
    price: "ksh3,000/day",
    type: "vehicle",
    category: "economy",
    features: ["Massage seats", "Premium sound", "Driver assistance"],
    location: "Nairobi",
  },
  {
    id: "v4",
    images: [mazda,mazda1],
    title: "mazda demio",
    description: "Executive sedan for business travel",
    price: "ksh3,000/day",
    type: "vehicle",
    category: "economy",
    features: ["Massage seats", "Premium sound", "Driver assistance"],
    location: "Nairobi",
  },
  {
    id: "v5",
    images: [axio],
    title: "Toyota axio",
    description: "Executive sedan for business travel",
    price: "ksh3,500/day",
    type: "vehicle",
    category: "luxury",
    features: ["Massage seats", "Premium sound", "Driver assistance"],
    location: "Nairobi",
  },
  {
    id: "v5",
    images: [fielder,fielder1],
    title: "Toyota fielder",
    description: "Executive sedan for business travel",
    price: "ksh3,500/day",
    type: "vehicle",
    category: "economy",
    features: ["Massage seats", "Premium sound", "Driver assistance"],
    location: "Nairobi",
  },
  {
    id: "v5",
    images: [premial,premial1],
    title: "Toyota Premial",
    description: "Executive sedan for business travel",
    price: "ksh4,000/day",
    type: "vehicle",
    category: "economy",
    features: ["Massage seats", "Premium sound", "Driver assistance"],
    location: "Nairobi",
  },
  {
    id: "v5",
    images: [crown,crown1],
    title: "Toyota crown",
    description: "Executive sedan for business travel",
    price: "ksh7,000/day",
    type: "vehicle",
    category: "luxury",
    features: ["Massage seats", "Premium sound", "Driver assistance"],
    location: "Nairobi",
  },
  {
    id: "v5",
    images: [mark,mark1],
    title: "Mark x",
    description: "Executive sedan for business travel",
    price: "ksh6,000/day",
    type: "vehicle",
    category: "economy",
    features: ["Massage seats", "Premium sound", "Driver assistance"],
    location: "Nairobi",
  },
  {
    id: "v5",
    images: [mazdaa,mazdaa1],
    title: "mazda cx5",
    description: "Executive sedan for business travel",
    price: "ksh6,500/day",
    type: "vehicle",
    category: "luxury",
    features: ["Massage seats", "Premium sound", "Driver assistance"],
    location: "Nairobi",
  },
  {
    id: "v5",
    images: [harrier,harrier1],
    title: "Toyota harrier",
    description: "Executive sedan for business travel",
    price: "ksh9,000/day",
    type: "vehicle",
    category: "luxury",
    features: ["Massage seats", "Premium sound", "Driver assistance"],
    location: "Nairobi",
  },
  {
    id: "v5",
    images: [prado,prado1],
    title: "Toyota Prado",
    description: "Executive sedan for business travel",
    price: "ksh15,000/day",
    type: "vehicle",
    category: "luxury",
    features: ["Massage seats", "Premium sound", "Driver assistance"],
    location: "Nairobi",
  },
  {
    id: "v5",
    images: [cruizer],
    title: "Toyota Cruizer",
    description: "Executive toyota for business travel",
    price: "ksh22,000/day",
    type: "vehicle",
    category: "luxury",
    features: ["Massage seats", "Premium sound", "Driver assistance"],
    location: "Nairobi",
  },
  // Add more vehicles...
];

export const properties: RentalItem[] = [
  {
    id: "p1",
    images: [beachVilla1, beachVilla1],
    title: "Luxury Beach Villa",
    description: "Oceanfront property with private pool",
    price: "ksh15,000/night",
    type: "property",
    category: "luxury",
    features: ["Private pool", "Ocean view", "4 bedrooms"],
    location: "Mombasa",
  },
  {
    id: "p2",
    images: [beachVilla2, beachVilla2],
    title: "Modern City Apartment",
    description: "Downtown living with skyline views",
    price: "ksh7,000/night",
    type: "property",
    category: "modern",
    features: ["City view", "Fully furnished", "2 bedrooms"],
    location: "Nairobi",
  },

  // Add more properties...
];