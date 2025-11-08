import { useEffect, useState } from 'react';

interface Poster {
  id: number;
  url: string;
  title: string;
  category: string;
}

export default function PosterWall() {
  const [posters, setPosters] = useState<Poster[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/posters.json')
      .then((res) => res.json())
      .then((data) => {
        setPosters(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading posters:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-amber-500 border-solid"></div>
        </div>
      </div>
    );
  }

  const rotations = ['rotate-3', 'rotate-2', '-rotate-2', '-rotate-3', 'rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-3'];
  const positions = [
    'top-8 left-12', 'top-20 left-1/3', 'top-4 right-16',
    'top-1/3 left-8', 'top-1/2 left-1/4', 'top-1/3 right-12',
    'bottom-20 left-1/4', 'bottom-12 left-1/2', 'bottom-16 right-20'
  ];
  const sizes = ['w-32 h-40', 'w-28 h-36', 'w-40 h-48', 'w-24 h-32', 'w-36 h-44', 'w-32 h-40', 'w-28 h-36', 'w-40 h-48', 'w-32 h-40'];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Full Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/image copy.png')`,
          filter: 'brightness(0.7)',
        }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        {/* Sticky Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl"
            style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              textShadow: `
                4px 4px 0 #000,
                -1px -1px 0 #000,
                1px -1px 0 #000,
                -1px 1px 0 #000,
                1px 1px 0 #000,
                8px 8px 20px rgba(0,0,0,0.8)
              `,
              letterSpacing: '0.05em',
              transform: 'rotate(-2deg)',
              display: 'inline-block',
            }}
          >
            BRANDSO CREATIVE WALL
          </h2>
          <p className="text-xl text-amber-300 mt-4 font-medium italic">
            Where ideas stick.
          </p>
        </div>

        {/* Poster Grid */}
        <div className="relative h-[600px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {posters.map((poster, index) => (
            <div
              key={poster.id}
              className={`absolute ${positions[index % positions.length]} ${rotations[index % rotations.length]} ${sizes[index % sizes.length]} group cursor-pointer transition-all duration-500 hover:z-50 hover:scale-125 hover:shadow-2xl`}
              style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.6))' }}
            >
              <div className="w-full h-full bg-white rounded-lg overflow-hidden border-4 border-amber-600 shadow-xl">
                <img
                  src={poster.url}
                  alt={poster.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-bold text-lg drop-shadow-md">
                      {poster.title}
                    </h3>
                    <p className="text-amber-300 text-sm">{poster.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}