// components/ProjectsPreview.tsx
import { ArrowRight } from 'lucide-react';

const projects = [
  { title: 'Urban Cafe Branding', category: 'Branding', image: '/projects/cafe.jpg' },
  { title: 'Tech Summit 2025', category: 'Event', image: '/projects/tech.jpg' },
  { title: 'EcoWear Campaign', category: 'Fashion', image: '/projects/eco.jpg' },
  { title: 'Startup MVP Launch', category: 'Web', image: '/projects/startup.jpg' },
];

export default function ProjectsPreview() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)`,
        backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yeiIvPjwvZz48L2c+PC9zdmc+')`,
        backgroundSize: '60px 60px',
      }}
    >
      {/* Lighting Glows */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-teal-700/50 backdrop-blur-sm border border-teal-600 rounded-full text-sm font-medium text-teal-400 inline-block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Recent Projects
          </h2>
          <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
            Explore our latest creative work
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-teal-600 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-teal-900/30"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                  <p className="text-xs text-teal-400 font-medium">{project.category}</p>
                  <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                </div>
              </div>

              <div className="p-4 flex justify-between items-center">
                <span className="text-sm text-slate-300">View Case Study</span>
                <ArrowRight className="w-5 h-5 text-teal-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-full transition-all hover:scale-105 flex items-center gap-2 mx-auto">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}