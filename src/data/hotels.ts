export interface Hotel {
  id: string;
  name: string;
  rating: number;
}

export const hotels: Hotel[] = [
  { id: 'all-hotel-obakoy', name: 'All Hotel Obakoy', rating: 4 },
  { id: 'acanthus-cennet', name: 'Acanthus & Cennet Barut Collection', rating: 5 },
  { id: 'royal-dragon', name: 'Royal Dragon Hotel', rating: 5 },
  { id: 'club-hotel-sera', name: 'Club Hotel Sera', rating: 4 },
  { id: 'limak-atlantis', name: 'Limak Atlantis', rating: 5 }
];

// Hiljem asendada API päringuga
export async function fetchHotels() {
  await new Promise(resolve => setTimeout(resolve, 100));
  return hotels;
}
