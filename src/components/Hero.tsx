import { useState, useEffect } from 'react';
import CardSwap, { Card } from './CardSwap'

import { ArrowRight, Sparkles, Code, Palette, Zap, TrendingUp, Star } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    { icon: Palette, label: 'Design', color: 'from-pink-500 to-rose-500' },
    { icon: Code, label: 'Development', color: 'from-blue-500 to-cyan-500' },
    { icon: Zap, label: 'Automation', color: 'from-yellow-500 to-orange-500' },
    { icon: TrendingUp, label: 'Marketing', color: 'from-green-500 to-emerald-500' }
  ];

  return (
    <section className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            top: '10%',
            left: '5%',
            animation: 'float 20s ease-in-out infinite'
          }}
        ></div>
        <div
          className={`absolute w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            bottom: '10%',
            right: '5%',
            animation: 'float 15s ease-in-out infinite reverse'
          }}
        ></div>
        <div
          className={`absolute w-[400px] h-[400px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            top: '50%',
            left: '50%',
            animation: 'float 25s ease-in-out infinite'
          }}
        ></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      {/* Cursor follow effect */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-xl rounded-full border border-emerald-500/20 group hover:border-emerald-500/40 transition-all animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                BRANDSO — Premium Digital Agency
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold leading-[1.1] tracking-tight">
                We Bring Your{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-gradient">
                    Vision to Life
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 blur-lg"></span>
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-xl sm:text-2xl text-slate-400 leading-relaxed max-w-2xl animate-fade-in-up delay-300">
              <span className="text-white font-semibold">Design. Development. Automation. Marketing</span> — all in one place.
            </p>

            {/* Service Pills */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up delay-500">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="group px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/30 transition-all cursor-default hover:scale-105"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <service.icon className={`w-4 h-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                      {service.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up delay-700">
              <button
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-semibold flex items-center gap-3 transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95 overflow-hidden"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className={`w-5 h-5 relative z-10 transition-transform ${isHovering ? 'translate-x-1' : ''}`} />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              {/* Secondary CTA */}
              <button className="px-8 py-4 border-2 border-slate-700 rounded-xl font-semibold flex items-center gap-3 transition-all hover:border-slate-500 hover:text-white group">
                <span>View Our Work</span>
                <Star className="w-5 h-5 text-slate-500 group-hover:text-yellow-400 transition-colors" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10 animate-fade-in-up delay-1000">
              {[
                { value: '500+', label: 'Projects' },
                { value: '200+', label: 'Clients' },
                { value: '50+', label: 'Awards' }
              ].map((stat, idx) => (
                <div key={idx} className="group cursor-default">
                  <div className="text-4xl font-bold bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent group-hover:from-emerald-400 group-hover:to-teal-400 transition-all">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-sm mt-1 group-hover:text-slate-400 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative mt-20 hidden lg:block transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div >
              <CardSwap
                cardDistance={60}
                verticalDistance={20}
                delay={5000}
                pauseOnHover={true}
              >
                <Card>
                  <div className="p-6 h-full flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Brand Identity</h3>
                      <p className="text-slate-300">Complete brand design solutions</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">Design</span>
                      <Palette className="w-5 h-5 text-emerald-400" />
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className="p-6 h-full flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Brand Identity</h3>
                      <p className="text-slate-300">Complete brand design solutions</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">Design</span>
                      <Palette className="w-5 h-5 text-emerald-400" />
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className="p-6 h-full flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
                      <p className="text-slate-300">Modern, responsive websites</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Development</span>
                      <Code className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className="p-6 h-full flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Digital Marketing</h3>
                      <p className="text-slate-300">Data-driven marketing strategies</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Marketing</span>
                      <TrendingUp className="w-5 h-5 text-purple-400" />
                    </div>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}