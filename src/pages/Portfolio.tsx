// components/Portfolio.tsx
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const portfolioItems = [
  {
    title: 'Brand Identity Campaign',
    category: 'Poster Design',
    image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Complete poster series for brand launch event'
  },
  {
    title: 'Corporate Video',
    category: 'Video Production',
    image: 'https://images.pexels.com/photos/3178829/pexels-photo-3178829.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Professional corporate video showcasing company values'
  },
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Custom web application for online retail'
  },
  {
    title: 'Music Festival Poster',
    category: 'Poster Design',
    image: 'https://images.pexels.com/photos/1616408/pexels-photo-1616408.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Eye-catching poster design for festival promotion'
  },
  {
    title: 'Product Demo Video',
    category: 'Video Production',
    image: 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Engaging product demonstration video'
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Complex SaaS dashboard with real-time analytics'
  },
];

export default function Portfolio() {
  return (
    <section
      className="relative min-h-screen py-20 overflow-hidden"
      style={{
        background: '#000',
        backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yeiIvPjwvZz48L2c+PC9zdmc+')`,
        backgroundSize: '60px 60px',
      }}>
    <div>
      {/* Subtle Lighting Glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-teal-700/50 backdrop-blur-sm border border-teal-600 rounded-full text-sm font-medium text-teal-400 inline-block">
            Portfolio
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 drop-shadow-2xl">
            Our Portfolio
          </h1>
          <p className="text-xl text-slate-300 mt-3 max-w-2xl mx-auto">
            Showcasing our best work across poster design, video production, and web development
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-teal-700/30 shadow-xl hover:shadow-2xl hover:shadow-teal-900/50 transition-all duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="text-white font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-medium text-teal-400 bg-teal-500/20 px-3 py-1 rounded-full border border-teal-600/50">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
       <Footer />
    </section>
  );
}