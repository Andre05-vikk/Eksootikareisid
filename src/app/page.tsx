import Hero from '@/components/Hero';
import SearchEngine from '@/components/SearchEngine';
import ContinentsSection from '@/components/ContinentsSection';
import PopularDestinations from '@/components/PopularDestinations';
import LastMinuteDeals from '@/components/LastMinuteDeals';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4">
        <SearchEngine />
      </div>
      <ContinentsSection />
      <PopularDestinations />
      <LastMinuteDeals />
    </main>
  );
}
