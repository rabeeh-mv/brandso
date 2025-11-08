import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-teal-700/50 backdrop-blur-sm rounded-full text-sm font-medium border border-teal-600">
                BRANDSO
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              We Bring Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Vision to Life
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
              From stunning posters to captivating videos and cutting-edge web applications.
              We transform ideas into exceptional digital experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 rounded-lg font-semibold flex items-center gap-2 border border-slate-600 transition-all">
                <Play className="w-5 h-5" />
                Watch Showreel
              </button>
            </div>

            <div className="flex gap-12 pt-8 border-t border-slate-700">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-slate-400 text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold">200+</div>
                <div className="text-slate-400 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-slate-400 text-sm">Awards Won</div>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative w-full h-[600px]">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>

              <div className="relative h-full flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="w-40 h-52 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg transform rotate-3 hover:rotate-6 transition-transform"></div>
                    <div className="w-40 h-32 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-lg transform -rotate-2 hover:-rotate-4 transition-transform"></div>
                  </div>
                  <div className="space-y-4 pt-12">
                    <div className="w-40 h-32 bg-gradient-to-br from-emerald-400 to-green-400 rounded-lg transform -rotate-3 hover:-rotate-6 transition-transform"></div>
                    <div className="w-40 h-52 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg transform rotate-2 hover:rotate-4 transition-transform"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
