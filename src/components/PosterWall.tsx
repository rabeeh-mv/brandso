// components/PosterWall.tsx
interface MarqueeProps {
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Marquee = ({ children, pauseOnHover, reverse, className }: MarqueeProps) => {
  return (
    <div className={`overflow-hidden ${className || ""}`}>
      <div
        className={`
          flex gap-8 animate-scroll
          ${reverse ? "animate-reverse-scroll" : ""}
          ${pauseOnHover ? "hover:pause" : ""}
        `}
      >
        {children}
        {children} {/* Duplicate for infinite loop */}
      </div>
    </div>
  );
};

interface Poster {
  id: number;
  url: string;
  title: string;
  category: string;
}

const dummyPosters: Poster[] = [
  { id: 1, url: "https://picsum.photos/400/600?random=1", title: "Summer Vibes", category: "Fashion" },
  { id: 2, url: "https://picsum.photos/400/600?random=2", title: "Tech Summit 2025", category: "Event" },
  { id: 3, url: "https://picsum.photos/400/600?random=3", title: "Eco Brew", category: "Cafe" },
  { id: 4, url: "https://picsum.photos/400/600?random=4", title: "Urban Fit", category: "Fitness" },
  { id: 5, url: "https://picsum.photos/400/600?random=5", title: "Launch Party", category: "Startup" },
  { id: 6, url: "https://picsum.photos/400/600?random=6", title: "Minimal Living", category: "Lifestyle" },
  { id: 7, url: "https://picsum.photos/400/600?random=7", title: "Food Fest", category: "Food" },
  { id: 8, url: "https://picsum.photos/400/600?random=8", title: "Creative Hub", category: "Co-Working" },
];

const firstRow = dummyPosters.slice(0, 4);
const secondRow = dummyPosters.slice(4);

const PosterCard = ({ url, title, category }: Poster) => {
  return (
    <figure className="relative w-64 h-80 flex-shrink-0 overflow-hidden cursor-pointer bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group">
      <img
        src={url}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-5 w-full">
          <h3 className="text-white font-bold text-lg drop-shadow-md">{title}</h3>
          <p className="text-teal-400 text-sm font-medium">{category}</p>
        </div>
      </div>
    </figure>
  );
};

export default function PosterWall() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)`,
        backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yeiIvPjwvZz48L2c+PC9zdmc+')`,
        backgroundSize: '60px 60px',
      }}
    >
      {/* Lighting Glows */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        {/* Heading */}
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
            CREATIVE WALL
          </h2>
          <p className="text-xl text-teal-400 mt-4 font-medium italic">
            Where ideas stick.
          </p>
        </div>

        {/* Marquee Rows with Gap */}
        <div className="relative space-y-8">
          {/* First Row: Left to Right */}
          <Marquee pauseOnHover className="[--duration:35s]">
            {firstRow.map((poster) => (
              <PosterCard key={`row1-${poster.id}`} {...poster} />
            ))}
          </Marquee>

          {/* Second Row: Right to Left */}
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {secondRow.map((poster) => (
              <PosterCard key={`row2-${poster.id}`} {...poster} />
            ))}
          </Marquee>

          {/* Fade Edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-950 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate-950 to-transparent"></div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes reverse-scroll {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          animation: scroll var(--duration, 30s) linear infinite;
        }
        .animate-reverse-scroll {
          animation: reverse-scroll var(--duration, 30s) linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}