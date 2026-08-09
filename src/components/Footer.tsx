import React from 'react';
import { ArrowUp, Instagram, Facebook, Twitter, Shield, Award, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenFAQ?: () => void;
  onOpenContact?: () => void;
  onOpenAbout?: () => void;
  onOpenSpecs?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenFAQ,
  onOpenContact,
  onOpenAbout,
  onOpenSpecs,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050505] text-neutral-300 border-t border-white/10 relative z-10 pt-16 pb-8 px-6 sm:px-12 lg:px-16">
      <div className="max-w-[1536px] mx-auto">
        {/* Main Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-neutral-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-start space-y-6">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="flex items-center gap-3 group">
              <div className="w-[34px] h-[34px] flex items-center justify-center text-white transition-transform group-hover:rotate-45 duration-500">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-[#C9A44C] fill-current"
                >
                  <path
                    d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 4c5.523 0 10 4.477 10 10 0 2.45-.88 4.693-2.348 6.435l-3.328-3.328A5.966 5.966 0 0 0 21 16c0-2.761-2.239-5-5-5s-5 2.239-5 5a4.99 4.99 0 0 0 2.1 4.053l-3.048 3.048A8.956 8.956 0 0 1 7 16c0-4.97 4.03-9 9-9z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-3xl font-medium text-white tracking-tight leading-none lowercase font-sans">
                Luxivo
              </span>
            </a>

            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
              Elevating supercar performance and bespoke luxury vehicle rentals. Experience pinnacle craftsmanship, high-velocity engineering, and unmatched VIP service.
            </p>

            {/* Badges */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C9A44C] bg-[#C9A44C]/10 border border-[#C9A44C]/30 px-3 py-1.5 rounded-full">
                <Shield className="w-3.5 h-3.5" />
                <span>100% VERIFIED FLEET</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <Award className="w-3.5 h-3.5 text-gold-gradient" />
                <span>VIP CONCIERGE</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={scrollToTop} className="hover:text-[#C9A44C] transition-colors cursor-pointer">
                  Home / Showcase
                </button>
              </li>
              <li>
                <button onClick={onOpenAbout} className="hover:text-[#C9A44C] transition-colors cursor-pointer">
                  About Luxivo
                </button>
              </li>
              <li>
                <button onClick={onOpenSpecs} className="hover:text-[#C9A44C] transition-colors cursor-pointer">
                  Vehicle Specs
                </button>
              </li>
              <li>
                <button onClick={onOpenFAQ} className="hover:text-[#C9A44C] transition-colors cursor-pointer">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-[#C9A44C] transition-colors cursor-pointer">
                  Contact & Reservations
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Headquarters</h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A44C] shrink-0 mt-0.5" />
                <span>777 Grand Hypercar Way, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A44C] shrink-0" />
                <span>+1 (800) 589-4861</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C9A44C] shrink-0" />
                <span>vip@luxivo-automotive.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Back to top */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Connect</h4>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-black hover:bg-[#C9A44C] hover:border-[#C9A44C] transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-black hover:bg-[#C9A44C] hover:border-[#C9A44C] transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-black hover:bg-[#C9A44C] hover:border-[#C9A44C] transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-xs font-mono tracking-wider text-neutral-400 hover:text-[#C9A44C] transition-colors cursor-pointer"
              >
                <span>BACK TO TOP</span>
                <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#C9A44C] group-hover:bg-[#C9A44C]/10 transition-all">
                  <ArrowUp className="w-3.5 h-3.5 text-neutral-300 group-hover:text-[#C9A44C]" />
                </div>
              </button>
            </div>
          </div>

        </div>

        {/* Footer Copyright Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-mono tracking-wider">
          <div className="flex items-center gap-2">
            <span>Luxivo® AUTOMOTIVE</span>
            <span className="text-neutral-600">•</span>
            <span className="hidden sm:inline">HIGH PERFORMANCE TUNING LAB</span>
          </div>

          <div className="flex items-center gap-6 text-neutral-400">
            <a href="#" className="hover:text-neutral-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-200 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neutral-200 transition-colors">Security & Verification</a>
          </div>

          <p className="text-neutral-400">
            © {new Date().getFullYear()} LUXIVO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
