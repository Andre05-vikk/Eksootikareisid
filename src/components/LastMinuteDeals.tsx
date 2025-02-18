'use client';

import Image from 'next/image';
import Link from 'next/link';
import { lastMinuteDeals } from '@/data/mockData';

export default function LastMinuteDeals() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Viimase hetke pakkumised</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lastMinuteDeals.map((deal) => (
            <Link
              key={deal.slug}
              href={`/pakkumised/${deal.slug}`}
              className="bg-white rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={deal.image}
                  alt={deal.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full">
                  Viimase hetke
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{deal.name}</h3>
                <p className="text-gray-600 mb-3">{deal.duration}</p>
                <div className="flex items-center gap-3">
                  <span className="text-red-600 font-bold text-xl">{deal.price}</span>
                  <span className="text-gray-400 line-through">{deal.originalPrice}</span>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md 
                                 transition-colors duration-300 hover:bg-blue-700">
                  Broneeri kohe
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
