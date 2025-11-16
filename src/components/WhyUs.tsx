import { useState, useEffect } from 'react';
import CardSwap, { Card } from './reactbits/CardSwap'
import { Code, Palette, Zap, TrendingUp } from 'lucide-react';
import Clients from './Clients';

export default function WhyUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <Clients />

    <section className="relative bg-black text-white min-h-screen lg:h-screen py-20 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            top: '10%',
            left: '5%',
          }}
        ></div>
        <div
          className={`absolute w-[400px] h-[400px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            bottom: '10%',
            right: '5%',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content - Why Us Title and Description */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Why Choose <br /><span className="text-emerald-500">Brandso</span>?
            </h2>
            
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              We are a premium digital agency that combines creativity with technical expertise to deliver exceptional results. Our team of skilled professionals is dedicated to transforming your vision into reality through innovative design, cutting-edge development, and strategic marketing solutions.
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              With years of experience and a passion for excellence, we've helped hundreds of businesses elevate their brand presence and achieve their goals. Our client-centric approach ensures that every project is tailored to meet your unique needs and objectives.
            </p>
            
            
          </div>

          {/* Right Visual - CardSwiper */}
          <div className={`mt-60 relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <CardSwap
                cardDistance={60}
                verticalDistance={20}
                delay={5000}
                pauseOnHover={false}
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
                      <h3 className="text-xl font-bold text-white mb-2">Process Automation</h3>
                      <p className="text-slate-300">Efficient workflow solutions</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">Automation</span>
                      <Zap className="w-5 h-5 text-yellow-400" />
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
    </section>
        </div>
  );
}