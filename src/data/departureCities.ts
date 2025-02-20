// Ajutine mockdata - hiljem asendada API päringuga
export const departureCities = [
  { id: 'tallinn', name: 'Tallinn' },
  { id: 'riia', name: 'Riia' },
  { id: 'vilnius', name: 'Vilnius' },
  { id: 'palanga', name: 'Palanga' },
  { id: 'varssavi', name: 'Varssavi' }
] as const;

export type DepartureCity = typeof departureCities[number]['id'];

// Hiljem asendada API päringuga
export async function fetchDepartureCities() {
  // Simuleerime API päringu viivitust
  await new Promise(resolve => setTimeout(resolve, 100));
  return departureCities;
}
