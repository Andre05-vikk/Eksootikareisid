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
    london: 'photo-1513635269975-59663e0ac1ad',
    paris: 'photo-1502602898657-3e91760cbb34',
    madrid: 'photo-1543783207-ec64e4d95325',
    antalya: 'photo-1589293078282-df1d32c8c296',
    delhi: 'photo-1587474260584-136574528ed5',
    bangkok: 'photo-1508009603885-50cf7c579365',
    tokyo: 'photo-1540959733332-eab4deabeeaf',
    'cape-town': 'photo-1580060839134-75a5edca2e99',
    lagos: 'photo-1589623494747-f8c6f5f1b31e',
    accra: 'photo-1589397986391-50c3a5c2bd5c',
    'new-york': 'photo-1522083165195-3424ed129620',
    toronto: 'photo-1517090504586-fde019ef8ada',
    vancouver: 'photo-1560813962-ff3d8fcf59ba',
    'buenos-aires': 'photo-1589396575985-0a6c7b3b1d3a',
    santiago: 'photo-1589397986391-50c3a5c2bd5c',
    'sao-paulo': 'photo-1589397986391-50c3a5c2bd5c',
    sydney: 'photo-1506973035872-a4ec16b8e8d9',
    auckland: 'photo-1589397986391-50c3a5c2bd5c',
    melbourne: 'photo-1514395462725-fb4566210144',
    perth: 'photo-1589397986391-50c3a5c2bd5c',
    brisbane: 'photo-1589397986391-50c3a5c2bd5c',
    egypt: 'photo-1539768942893-daf53e448371',
    turkey: 'photo-1589293385525-f134b3029f0b',
  },
  areas: {
    red_sea: 'photo-1544648720-5a46c9e2239b',
    turkish_riviera: 'photo-1558613326-98af85b30a3c',
    hurghada: 'photo-1565511718631-e35c38581488'
  },
  resorts: {
    hurghada: 'photo-1565511718631-e35c38581488',
    sharm: 'photo-1565498546237-caee9396c7d1',
    antalya: 'photo-1589293078282-df1d32c8c296',
    alanya: 'photo-1566127444979-b3d2b654e3d7',
  },
  hotels: {
    all_hotel_obakoy: 'photo-1566073771259-6a8506099945',
    acanthus_cennet: 'photo-1582719508461-905c673771fd',
    royal_dragon: 'photo-1564501049412-61c2a3083791',
    club_hotel_sera: 'photo-1571003123894-1f0594d2b5d9',
    limak_atlantis: 'photo-1571896349842-33c89424de2d',
    crystal_sunset: 'photo-1578683010236-d716f9a3f461',
    delphin_palace: 'photo-1566665797739-1674de7a421a',
    granada_luxury: 'photo-1582719478250-c89cae4dc85b',
    miracle_resort: 'photo-1571003123894-1f0594d2b5d9',
    titanic_beach: 'photo-1572931089826-567604c26dd6',
    steigenberger_aldau: 'photo-1582719508461-905c673771fd',
    sunrise_garden: 'photo-1571896349842-33c89424de2d',
    baron_palace: 'photo-1566665797739-1674de7a421a',
    desert_rose: 'photo-1571003123894-1f0594d2b5d9',
    rixos_sharm: 'photo-1572931089826-567604c26dd6',
    four_seasons: 'photo-1582719478250-c89cae4dc85b',
    coral_sea: 'photo-1578683010236-d716f9a3f461'
  }
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
  regions: {
    mediterranean: '/images/regions/mediterranean.jpg',
    atlantic: '/images/regions/atlantic.jpg',
    indian: '/images/regions/indian.jpg',
    african: '/images/regions/african.jpg',
    'north-american': '/images/regions/north-american.jpg',
    'south-american': '/images/regions/south-american.jpg',
    pacific: '/images/regions/pacific.jpg',
    australian: '/images/regions/australian.jpg'
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
    london: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.london, 800, 600),
    paris: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.paris, 800, 600),
    madrid: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.madrid, 800, 600),
    antalya: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.antalya),
    delhi: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.delhi),
    bangkok: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.bangkok),
    tokyo: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.tokyo),
    'cape-town': getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations['cape-town']),
    lagos: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.lagos),
    accra: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.accra),
    'new-york': getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations['new-york']),
    toronto: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.toronto),
    vancouver: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.vancouver),
    'buenos-aires': getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations['buenos-aires']),
    santiago: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.santiago),
    'sao-paulo': getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations['sao-paulo']),
    sydney: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.sydney),
    auckland: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.auckland),
    melbourne: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.melbourne),
    perth: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.perth),
    brisbane: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.brisbane),
    egypt: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.egypt),
    turkey: getUnsplashImage(UNSPLASH_IMAGE_IDS.destinations.turkey),
  },
  areas: {
    red_sea: getUnsplashImage(UNSPLASH_IMAGE_IDS.areas.red_sea),
    turkish_riviera: getUnsplashImage(UNSPLASH_IMAGE_IDS.areas.turkish_riviera),
    hurghada: getUnsplashImage(UNSPLASH_IMAGE_IDS.areas.hurghada)
  },
  resorts: {
    hurghada: getUnsplashImage(UNSPLASH_IMAGE_IDS.resorts.hurghada),
    sharm: getUnsplashImage(UNSPLASH_IMAGE_IDS.resorts.sharm),
    antalya: getUnsplashImage(UNSPLASH_IMAGE_IDS.resorts.antalya),
    alanya: getUnsplashImage(UNSPLASH_IMAGE_IDS.resorts.alanya),
  },
  hotels: {
    all_hotel_obakoy: getUnsplashImage(UNSPLASH_IMAGE_IDS.hotels.all_hotel_obakoy),
    acanthus_cennet: getUnsplashImage(UNSPLASH_IMAGE_IDS.hotels.acanthus_cennet),
    royal_dragon: getUnsplashImage(UNSPLASH_IMAGE_IDS.hotels.royal_dragon),
    club_hotel_sera: getUnsplashImage(UNSPLASH_IMAGE_IDS.hotels.club_hotel_sera),
    limak_atlantis: getUnsplashImage(UNSPLASH_IMAGE_IDS.hotels.limak_atlantis),
    crystal_sunset: getUnsplashImage(UNSPLASH_IMAGE_IDS.hotels.crystal_sunset),
    delphin_palace: getUnsplashImage(UNSPLASH_IMAGE_IDS.hotels.delphin_palace),
    granada_luxury: getUnsplashImage(UNSPLASH_IMAGE_IDS.hotels.granada_luxury),
    miracle_resort: getUnsplashImage(UNSPLASH_IMAGE_IDS.hotels.miracle_resort),
    titanic_beach: getUnsplashImage(UNSPLASH_IMAGE_IDS.hotels.titanic_beach),
    steigenberger_aldau: getUnsplashImage(UNSPLASH_IMAGE_IDS.hotels.steigenberger_aldau),
    sunrise_garden: getUnsplashImage(UNSPLASH_IMAGE_IDS.hotels.sunrise_garden),
    baron_palace: getUnsplashImage(UNSPLASH_IMAGE_IDS.hotels.baron_palace),
    desert_rose: getUnsplashImage(UNSPLASH_IMAGE_IDS.hotels.desert_rose),
    rixos_sharm: getUnsplashImage(UNSPLASH_IMAGE_IDS.hotels.rixos_sharm),
    four_seasons: getUnsplashImage(UNSPLASH_IMAGE_IDS.hotels.four_seasons),
    coral_sea: getUnsplashImage(UNSPLASH_IMAGE_IDS.hotels.coral_sea)
  }
};
