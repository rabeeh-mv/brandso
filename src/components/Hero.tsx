import { useState } from 'react';
import PixelBlast from './reactbits/PixelBlast';

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="bg-black text-white min-h-screen flex items-center relative overflow-hidden">
      {/* PixelBlast Background */}
      <div className="absolute inset-0 z-0">
        <PixelBlast
    variant="circle"
    pixelSize={6}
    color="#10b981"
    patternScale={3}
    patternDensity={1.2}
    pixelSizeJitter={0.5}
    enableRipples
    rippleSpeed={0.4}
    rippleThickness={0.12}
    rippleIntensityScale={1.5}
    speed={0.6}
    edgeFade={0.25}
    transparent
  />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div className="space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We Bring Your <br /><span className="text-emerald-500">Vision</span> to Life
          </h1>

          {/* Subtext */}
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Design. Development. Automation. Marketing — all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <button
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-semibold transition-colors"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Start Your Project
            </button>
            
            <button className="px-8 py-4 border-2 border-gray-700 hover:border-gray-500 rounded-lg font-semibold transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}