import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { X } from "lucide-react";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-card border border-border shadow-2xl mb-4 w-[300px] rounded-none animate-in slide-in-from-bottom-5">
          <div className="bg-[#075E54] p-4 flex justify-between items-center text-white">
            <div>
              <h4 className="font-bold font-serif">PNR Construction</h4>
              <p className="text-xs text-white/80">Typically replies instantly</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 bg-background">
            <div className="bg-card border border-border p-3 text-sm text-gray-300 rounded-none mb-4 inline-block shadow-sm">
              👋 Hello! Ready to build your dream space? Get a free consultation today.
            </div>
            <a 
              href="https://wa.me/918525975688?text=Hi%2C%20I%27d%20like%20a%20free%20quote%20for%20my%20project." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white flex justify-center items-center gap-2 py-3 px-4 font-bold tracking-wider uppercase text-sm hover:bg-[#20bd5a] transition-colors"
            >
              <SiWhatsapp className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex justify-center items-center shadow-lg hover:scale-110 transition-transform relative group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute w-full h-full bg-[#25D366] rounded-full animate-ping opacity-50"></span>
        <SiWhatsapp className="w-8 h-8 relative z-10" />
      </button>
    </div>
  );
}
