import { Sparkles, Package, Image, Video, Globe, Monitor, ArrowRight } from 'lucide-react';

/** @type {const} */
const services = [
  {
    icon: Sparkles,
    title: 'Business Launch Kit',
    price: '₹15,000',
    description: 'Complete brand launch package for startups.',
    features: [
      'Google Business Registration',
      'Professional Website',
      'Custom Logo Design',
      'Social Media Setup',
      'Basic SEO',
    ],
    color: 'from-emerald-500 to-teal-500',
    highlight: true,
  },
  {
    icon: Package,
    title: 'Monthly Poster Pack',
    price: '₹3,000/mo',
    description: '10 custom posters monthly (Story + Post sizes).',
    features: [
      '10 Posters Per Month',
      'Story + Post Sizes',
      'Unlimited Revisions',
      'Fast 12hr Delivery',
      'Cancel Anytime',
    ],
    color: 'from-teal-500 to-cyan-500',
    popular: true,
  },
  {
    icon: Image,
    title: 'Poster & Banner Design',
    price: '₹399',
    description: 'Eye-catching visuals for events & promotions.',
    features: ['2 Posters ( Story + Post )', 'Custom Illustrations', 'Print-Ready', 'Multiple Formats', 'Fast Turnaround'],
    color: 'from-emerald-400 to-teal-400',
    popular: true,
  },
  {
    icon: Video,
    title: 'Video Production',
    price: 'From ₹599',
    description: 'Engaging video content that tells your story.',
    features: ['Animation Video', '4K Editing', 'Motion Graphics', 'Reels & Ads'],
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Globe,
    title: 'Website Development',
    price: 'From ₹13,999',
    description: 'Fast, responsive, and SEO-optimized websites.',
    features: ['Responcive Design', 'Static and dynamic', 'Basic SEO', 'Hosting & Support'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Monitor,
    title: 'App Development',
    price: 'From ₹17,999',
    description: 'Scalable web apps with modern tech stack.',
    features: ['Android, IOS, Windows, and Linux', 'Static and dynamic', 'Play Store & App Store Deployment', 'Update & Support'],
    color: 'from-teal-600 to-emerald-600',
  },
];

export default function Services() {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)`,
        backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yeiIvPjwvZz48L2c+PC9zdmc+')`,
        backgroundSize: '60px 60px',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="px-4 py-2 bg-teal-700/50 backdrop-blur-sm rounded-full text-sm font-medium border border-teal-600 inline-block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-300 mt-3 max-w-2xl mx-auto">
            Choose a plan or go custom — we’ve got your brand covered.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`relative group h-full rounded-2xl p-6 md:p-8 transition-all duration-300
                  ${service.highlight || service.popular
                    ? 'bg-gradient-to-br from-teal-900/40 to-emerald-900/30 border border-teal-600 shadow-xl shadow-teal-900/30'
                    : 'bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-teal-600'
                  } hover:shadow-2xl hover:shadow-teal-900/30 hover:-translate-y-1`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full shadow-lg">
                      BEST VALUE
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title & Price */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{service.title}</h3>
                  <span className="text-emerald-400 font-bold text-lg">{service.price}</span>
                </div>

                <p className="text-slate-300 text-sm md:text-base mb-5 leading-relaxed min-h-[3.5rem]">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-200 text-sm">
                      <div className={`w-1 h-1 rounded-full bg-gradient-to-br ${service.color}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2
                    ${service.highlight || service.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                    } group-hover:gap-3`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Need something custom?</p>
          <button className="px-8 py-3 bg-transparent border-2 border-teal-600 text-teal-400 hover:bg-teal-600 hover:text-white rounded-full font-medium transition-all hover:scale-105">
            Talk to Us
          </button>
        </div>
      </div>
    </section>
  );
}