export interface Continent {
  name: string;
  image: string;
  slug: string;
}

export interface Destination {
  name: string;
  image: string;
  price: string;
  slug: string;
}

export interface LastMinuteDeal extends Destination {
  duration: string;
  originalPrice: string;
}

import { TRAVEL_IMAGES } from '@/utils/imageUtils';

export const continents: Continent[] = [
  { name: "Euroopa", image: TRAVEL_IMAGES.continents.europe, slug: "europe" },
  { name: "Aasia", image: TRAVEL_IMAGES.continents.asia, slug: "asia" },
  { name: "Aafrika", image: TRAVEL_IMAGES.continents.africa, slug: "africa" },
  { name: "Põhja-Ameerika", image: TRAVEL_IMAGES.continents['north-america'], slug: "north-america" },
  { name: "Lõuna-Ameerika", image: TRAVEL_IMAGES.continents['south-america'], slug: "south-america" },
  { name: "Okeaania", image: TRAVEL_IMAGES.continents.oceania, slug: "oceania" }
];

export const departureCities = [
  { name: "Tallinn", id: "TLL" },
  { name: "Riia", id: "RIX" },
  { name: "Vilnius", id: "VNO" }
];

export const popularDestinations: Destination[] = [
  { name: "Bali", image: TRAVEL_IMAGES.destinations.bali, price: "€599", slug: "bali" },
  { name: "Maldiivid", image: TRAVEL_IMAGES.destinations.maldives, price: "€899", slug: "maldives" },
  { name: "Dubai", image: TRAVEL_IMAGES.destinations.dubai, price: "€699", slug: "dubai" },
  { name: "Tenerife", image: TRAVEL_IMAGES.destinations.tenerife, price: "€499", slug: "tenerife" },
  { name: "Phuket", image: TRAVEL_IMAGES.destinations.phuket, price: "€799", slug: "phuket" },
  { name: "Mauritius", image: TRAVEL_IMAGES.destinations.mauritius, price: "€999", slug: "mauritius" },
  { name: "Seišellid", image: TRAVEL_IMAGES.destinations.seychelles, price: "€1099", slug: "seychelles" },
  { name: "Cancun", image: TRAVEL_IMAGES.destinations.cancun, price: "€899", slug: "cancun" },
  { name: "Santorini", image: TRAVEL_IMAGES.destinations.santorini, price: "€599", slug: "santorini" }
];

export const lastMinuteDeals: LastMinuteDeal[] = [
  {
    name: "Maldiivid",
    image: TRAVEL_IMAGES.destinations.maldives,
    price: "€799",
    originalPrice: "€1299",
    duration: "7 ööd, All Inclusive",
    slug: "maldives-last-minute"
  },
  {
    name: "Dubai",
    image: TRAVEL_IMAGES.destinations.dubai,
    price: "€499",
    originalPrice: "€899",
    duration: "5 ööd, Hommikusöögiga",
    slug: "dubai-last-minute"
  },
  {
    name: "Tenerife",
    image: TRAVEL_IMAGES.destinations.tenerife,
    price: "€399",
    originalPrice: "€699",
    duration: "7 ööd, All Inclusive",
    slug: "tenerife-last-minute"
  }
];
