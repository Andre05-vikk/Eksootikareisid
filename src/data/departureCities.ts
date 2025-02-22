// Ajutine mockdata - hiljem asendada API päringuga
export interface DepartureCity {
  id: string;
  name: string;
}

export const departureCities: readonly DepartureCity[] = [
  { id: 'tallinn', name: 'Tallinn' },
  { id: 'riia', name: 'Riia' },
  { id: 'vilnius', name: 'Vilnius' },
  { id: 'palanga', name: 'Palanga' },
  { id: 'kaunas', name: 'Kaunas' }
] as const;

// Hiljem asendada API päringuga
export async function fetchDepartureCities() {
  // Simuleerime API päringu viivitust
  await new Promise(resolve => setTimeout(resolve, 100));
  return departureCities;
}
