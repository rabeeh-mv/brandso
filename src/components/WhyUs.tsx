import { useState, useEffect } from 'react';
import CardSwap, { Card } from './reactbits/CardSwap'
import { Code, Palette, Zap, TrendingUp } from 'lucide-react';
import Clients from './Clients';
import { motion } from 'framer-motion';

export default function WhyUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className='mt-5'>
      <Clients />

    <section className="relative bg-black text-white h-screen flex items-center justify-center py-10 md:py-20 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            top: '10%',
            left: '5%',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        ></motion.div>
        <motion.div
          className={`absolute w-[400px] h-[400px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            bottom: '10%',
            right: '5%',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center w-full">
          {/* Left Content - Why Us Title and Description */}
          <motion.div className={`flex flex-col items-center text-center lg:text-left lg:items-start space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Yes, you are in the right place.
            </h2>
            
            <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
              Let's bring your vision alive, the way you dreamed it.
            </p>
            
            <motion.button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition duration-300 transform hover:scale-105" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Let's start
            </motion.button>
          </motion.div>

          {/* Right Visual - CardSwiper */}
          <motion.div className={`mt-60  lg:mt-60 relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
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
                      <p className="text-slate-300">Start now — your growth begins here.</p>
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
          </motion.div>
        </div>
      </div>
    </section>
        </div>
  );
}