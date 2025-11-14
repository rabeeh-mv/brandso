import { X } from 'lucide-react';

interface ClientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientModal({ isOpen, onClose }: ClientModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Right Side Panel - Full Height */}
      <div className="absolute inset-y-0 right-0 w-full max-w-md bg-slate-900 border-l border-slate-700">
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center p-6 border-b border-slate-700">
            <h3 className="text-xl font-bold text-white">Hey! Tell us all the things</h3>
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                  Name & Company
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter your name and company"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-slate-300 mb-1">
                  Tell us more about your project
                </label>
                <textarea
                  id="project"
                  rows={6}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Describe your project needs..."
                ></textarea>
              </div>
            </form>
          </div>
          
          <div className="p-6 border-t border-slate-700">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-lg text-white font-medium transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}