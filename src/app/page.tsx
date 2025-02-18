import '../styles/home.css';
import Image from 'next/image';

export default function Home() {
  const destinations = [
    { id: 1, image: '/images/bali.jpg', title: 'Bali' },
    { id: 2, image: '/images/maldives.jpg', title: 'Maldiivid' },
    { id: 3, image: '/images/seychelles.jpg', title: 'Seišellid' },
  ];

  return (
    <div className="home-page">
      <div className="hero-banner">
        <h1>Tere tulemast Eksootikareisid</h1>
        <div className="cta-buttons">
          <button className="primary">Broneeri kohe</button>
          <button className="secondary">Vaata pakkumisi</button>
        </div>
      </div>

      <h2>Populaarsed sihtkohad</h2>
      <div className="destination-grid">
        {destinations.map((dest) => (
          <div key={dest.id} className="destination-card">
            <Image
              src={dest.image}
              alt={dest.title}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
              priority
            />
            <h3>{dest.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
