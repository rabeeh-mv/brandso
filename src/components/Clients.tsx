import React, { useEffect, useRef } from 'react';

function Clients() {
  // Providers logos (placeholders) - doubled for continuous scrolling effect
  const providers: string[] = [
    "AWS", "DigitalOcean", "Hostinger", "SiteGround", "Cloudflare", "Netlify", "Vercel", "Hostinger", "Bluehost","DreamHost"
  ];
  
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.8; // Increased scroll speed for smoother animation
    
    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled half the content (to create infinite loop)
      const halfwayPoint = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= halfwayPoint) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };
    
    // Start animation
    const animationFrame = requestAnimationFrame(scroll);
    
    // Pause animation when hovering
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };
    
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };
    
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationFrame);
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <div className='mb-10'>
      {/* Providers Section */}
      <section id="providers" className="relative z-10 py-20 bg-gradient-to-b from-black to-gray-900/20 w-5/6 mx-auto">
        <div className="container mx-auto px-6 lg:px-8">
          {/* <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-wider text-white/50 mb-2">Trusted By Experts</h2>
            <p className="text-2xl text-white/80">We analyze 50+ top hosting providers</p>
          </div> */}
          
          <div 
            ref={scrollRef} 
            className="flex overflow-x-hidden whitespace-nowrap py-4"
          >
            <div className="flex gap-12">
              {providers.map((provider, index) => (
                <div 
                  key={index} 
                  className="grayscale hover:grayscale-0 transition-all duration-300 hover:opacity-100 px-4"
                >
                  <div className="text-xl sm:text-2xl font-bold text-white/70">{provider}</div>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless looping */}
            <div className="flex gap-12">
              {providers.map((provider, index) => (
                <div 
                  key={`dup-${index}`} 
                  className="grayscale hover:grayscale-0 transition-all duration-300 hover:opacity-100 px-4"
                >
                  <div className="text-xl sm:text-2xl font-bold text-white/70">{provider}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Clients;