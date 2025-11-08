// // components/Contact.tsx
// 'use client';
// import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useState } from 'react';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     message: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const text = `Hi Brandso! I'm ${formData.name}. ${formData.message}`;
//     const encoded = encodeURIComponent(text);
//     window.open(`https://wa.me/919562695758?text=${encoded}`, '_blank');
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: 'Email',
//       value: 'brandso.com@gmail.com',
//       href: 'mailto:brandso.com@gmail.com',
//       description: 'Send us an email anytime',
//       color: 'from-teal-500 to-emerald-500'
//     },
//     {
//       icon: Phone,
//       title: 'Phone',
//       value: '+91 95626 95758',
//       href: 'https://wa.me/919562695758',
//       description: 'Call or WhatsApp us',
//       color: 'from-emerald-500 to-teal-500'
//     },
//     {
//       icon: MapPin,
//       title: 'Location',
//       value: 'Kerala, India',
//       href: '#',
//       description: 'Available for remote projects',
//       color: 'from-teal-600 to-cyan-600'
//     }
//   ];

//   return (
//     <section
//       className="relative min-h-screen py-20 overflow-hidden"
//       style={{
//         background: '#000000',
//         backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yeiIvPjwvZz48L2c+PC9zdmc+')`,
//         backgroundSize: '60px 60px',
//       }}
//     >
//       {/* Subtle Glows */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none">
//         <div className="absolute top-10 left-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-10 right-20 w-80 h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <span className="px-4 py-2 bg-teal-700/30 backdrop-blur-sm border border-teal-600/50 rounded-full text-sm font-medium text-teal-400 inline-block">
//             Contact
//           </span>
//           <h1 className="text-5xl md:text-6xl font-bold text-white mt-4">
//             Get In Touch
//           </h1>
//           <p className="text-lg text-slate-400 mt-3 max-w-2xl mx-auto">
//             Have a project in mind? Let’s bring your brand to life.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Contact Info Cards */}
//           <div className="space-y-8">
//             {contactInfo.map((info, index) => (
//               <motion.a
//                 key={info.title}
//                 href={info.href}
//                 target={info.title === 'Phone' ? '_blank' : undefined}
//                 rel={info.title === 'Phone' ? 'noopener noreferrer' : undefined}
//                 className="group block relative overflow-hidden rounded-2xl p-8 bg-black/50 backdrop-blur-xl border border-teal-800/30 hover:border-teal-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-900/30"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <div className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
//                   <info.icon className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
//                 <p className="text-teal-400 font-medium mb-1">{info.value}</p>
//                 <p className="text-slate-400 text-sm">{info.description}</p>
//               </motion.a>
//             ))}
//           </div>

//           {/* WhatsApp Form */}
//           <motion.form
//             onSubmit={handleSubmit}
//             className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 border border-teal-800/30 shadow-2xl shadow-teal-900/20"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <MessageCircle className="w-6 h-6 text-teal-400" />
//               <h3 className="text-xl font-bold text-white">Send a Message</h3>
//             </div>
//             <p className="text-slate-400 text-sm mb-6">
//               Get in touch and let's discuss your project
//             </p>

//             <div className="space-y-5">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-5 py-3 bg-slate-800/60 backdrop-blur-md border border-teal-700/40 rounded-xl text-white placeholder-teal-300/60 focus:border-teal-500 focus:outline-none transition-all duration-300"
//                   placeholder="Enter your name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={5}
//                   className="w-full px-5 py-3 bg-slate-800/60 backdrop-blur-md border border-teal-700/40 rounded-xl text-white placeholder-teal-300/60 focus:border-teal-500 focus:outline-none transition-all duration-300 resize-none"
//                   placeholder="Tell us about your project..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-teal-900/30 flex items-center justify-center gap-2"
//               >
//                 <Send className="w-5 h-5" />
//                 Send via WhatsApp
//               </button>
//             </div>
//           </motion.form>
//         </div>

//         {/* Quick Response */}
//         <motion.div
//           className="mt-16 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//         >
//           <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-md border border-emerald-600/30 rounded-xl px-8 py-5">
//             <div className="w-5 h-5 bg-emerald-400 rounded-full animate-pulse" />
//             <p className="text-emerald-400 font-bold text-sm">Quick Response</p>
//           </div>
//           <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
//             We typically respond within <span className="text-emerald-400 font-medium">24 hours</span>. 
//             For urgent matters, <span className="text-emerald-400 font-medium">WhatsApp</span> is the fastest way.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Footer />
    </div>
  );
}