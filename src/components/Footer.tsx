// components/Footer.tsx
import { Mail, Phone, MapPin, MessageCircle, Send, Github, Linkedin, Instagram, Facebook, MessageSquare, Coffee } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "919562695758"; // +91 95626 95758
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const email = "brandso.com@gmail.com";

  return (
    <footer
      className="relative bg-black/90 backdrop-blur-2xl border-t border-teal-800/30 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)`,
        backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yeiIvPjwvZz48L2c+PC9zdmc+')`,
        backgroundSize: '60px 60px',
      }}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-emerald-500/10 to-teal-600/20 animate-pulse"></div>
      </div>

      {/* Tiny Dots - Slower & Subtle */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <div className="absolute bottom-12 left-16 w-1 h-1 bg-teal-400 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 left-32 w-1 h-1 bg-emerald-400 rounded-full animate-ping delay-700" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-10 right-40 w-1 h-1 bg-teal-500 rounded-full animate-ping delay-1000" style={{ animationDuration: '3.5s' }}></div>
        <div className="absolute bottom-18 right-24 w-1 h-1 bg-emerald-300 rounded-full animate-ping delay-1500" style={{ animationDuration: '5s' }}></div>
        <div className="absolute bottom-14 left-1/2 w-1 h-1 bg-teal-300 rounded-full animate-ping delay-500" style={{ animationDuration: '4.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-teal-700/50 backdrop-blur-sm border border-teal-600 rounded-full text-sm font-medium text-teal-400 inline-block">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Get in Touch
          </h2>
          <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
            Let’s bring your brand to life. Start the conversation today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Send Message via WhatsApp */}
          <div className="relative">
            <div className="bg-slate-800/40 backdrop-blur-xl border border-teal-700/40 rounded-2xl p-8 shadow-2xl shadow-teal-900/20">
              {/* Pulsing Gradient Behind */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-teal-500/10 via-emerald-500/5 to-teal-600/10 animate-pulse"></div>

              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="w-6 h-6 text-teal-400" />
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
              </div>
              <p className="text-slate-300 text-sm mb-6">Get in touch and let's discuss your project</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                  const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                  const text = `Hi Brandso! I'm ${name}. ${message}`;
                  const encoded = encodeURIComponent(text);
                  window.open(`${whatsappLink}?text=${encoded}`, '_blank');
                }}
                className="space-y-5"
              >
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-3 bg-slate-800/60 backdrop-blur-md border border-teal-700/40 rounded-xl text-white placeholder-teal-300/60 focus:border-teal-400 focus:outline-none transition-all duration-300"
                />
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                  className="w-full px-5 py-3 bg-slate-800/60 backdrop-blur-md border border-teal-700/40 rounded-xl text-white placeholder-teal-300/60 focus:border-teal-400 focus:outline-none transition-all duration-300 resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-teal-900/30 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* Right: Contact Info + Quick Response */}
          <div className="space-y-8">
            {/* Brand Info */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-white">Brandso</h3>
              </div>
              <p className="text-slate-300 text-sm mt-2 max-w-md">
                Full-stack creative agency passionate about crafting bold, innovative brands and bringing ideas to life through design and strategy.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-teal-400 hover:text-teal-300 transition"
                >
                  <Mail className="w-5 h-5" />
                  <span>{email}</span>
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300 transition"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 95626 95758</span>
                </a>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-teal-400" />
                  <span>Kerala, India</span>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-md border border-emerald-600/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-emerald-400 rounded-full animate-pulse" />
                <p className="text-emerald-400 font-bold text-sm">Quick Response</p>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                We typically respond within <span className="text-emerald-400 font-medium">24 hours</span>. 
                For urgent matters, <span className="text-emerald-400 font-medium">WhatsApp</span> is the fastest way to reach us.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-teal-800/30 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="text-slate-400">
            © {currentYear} Brandso. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <p className="text-slate-400">Follow Me</p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-800/60 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-teal-600/30 transition">
                <Github className="w-5 h-5 text-teal-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800/60 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-teal-600/30 transition">
                <Linkedin className="w-5 h-5 text-teal-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800/60 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-teal-600/30 transition">
                <Instagram className="w-5 h-5 text-teal-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800/60 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-teal-600/30 transition">
                <Facebook className="w-5 h-5 text-teal-400" />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800/60 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-emerald-600/30 transition">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
              </a>
              <a href={`mailto:${email}`} className="w-10 h-10 bg-slate-800/60 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-teal-600/30 transition">
                <Mail className="w-5 h-5 text-teal-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Built with love */}
        {/* <div className="text-center mt-8 text-slate-400 text-sm flex items-center justify-center gap-2">
          Built with <span className="text-red-500">heart</span> and <Coffee className="w-4 h-4 text-yellow-500 inline" /> using <span className="text-green-400">code</span>
        </div> */}
      </div>
    </footer>
  );
}