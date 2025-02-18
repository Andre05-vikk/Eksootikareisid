// High-quality curated Unsplash image IDs for travel destinations
const UNSPLASH_IMAGE_IDS = {
  hero: 'photo-1590523741831-ab7e8b8f9c7f', // Maldives water villa
  continents: {
    europe: 'photo-1541343672885-9be56236302a', // Santorini
    asia: 'photo-1464817739973-0128fe77aaa1', // Bangkok temple
    africa: 'photo-1516026672322-bc52d61a55d5', // Sahara desert
    'north-america': 'photo-1480714378408-67cf0d13bc1b', // New York
    'south-america': 'photo-1526392060635-9d6019884377', // Machu Picchu
    oceania: 'photo-1523482580672-f109ba8cb9be', // Sydney Opera House
  },
  destinations: {
    bali: 'photo-1537996194471-e657df975ab4',
    maldives: 'photo-1514282401047-d79a71a590e8',
    dubai: 'photo-1512453979798-5ea266f8880c',
    tenerife: 'photo-1518548419970-58e3b4079ab2',
    phuket: 'photo-1552465011-b4e21bf6e79a', // James Bond Island, Phuket
    mauritius: 'photo-1544644181-1484b3fdfc62',
    seychelles: 'photo-1589979481223-deb893043163',
    cancun: 'photo-1552074284-5e88ef1aef18',
    santorini: 'photo-1570077188670-e3a8d69ac5ff',
  },
};

// Base URL for Unsplash images
const UNSPLASH_BASE_URL = 'https://images.unsplash.com';

export const getUnsplashImage = (imageId: string, width = 1200, height = 800) => {
  return `${UNSPLASH_BASE_URL}/${imageId}?w=${width}&h=${height}&fit=crop&q=80`;
};

// Predefined high-quality travel images
export const TRAVEL_IMAGES = {
  hero: getUnsplashImage(UNSPLASH_IMAGE_IDS.hero, 1920, 1080),
  continents: {
    europe: getUnsplashImage(UNSPLASH_IMAGE_IDS.continents.europe, 800, 800),
    asia: getUnsplashImage(UNSPLASH_IMAGE_IDS.continents.asia, 800, 800),
    africa: getUnsplashImage(UNSPLASH_IMAGE_IDS.continents.africa, 800, 800),
    'north-america': getUnsplashImage(UNSPLASH_IMAGE_IDS.continents['north-america'], 800, 800),
    'south-america': getUnsplashImage(UNSPLASH_IMAGE_IDS.continents['south-america'], 800, 800),
    oceania: getUnsplashImage(UNSPLASH_IMAGE_IDS.continents.oceania, 800, 800),
  },
  destinations: {
    bali: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.bali, 800, 600),
    maldives: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.maldives, 800, 600),
    dubai: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.dubai, 800, 600),
    tenerife: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.tenerife, 800, 600),
    phuket: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.phuket, 800, 600),
    mauritius: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.mauritius, 800, 600),
    seychelles: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.seychelles, 800, 600),
    cancun: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.cancun, 800, 600),
    santorini: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.santorini, 800, 600),
  },
};
