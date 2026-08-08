import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  FileCheck2,
  CheckCircle2,
  ShieldCheck,
  Lock,
  Download,
  PenTool,
  Printer,
  Sparkles,
} from 'lucide-react';
import { LEGAL_CLAUSES } from '../data/legalData';

interface AgreementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AgreementModal: React.FC<AgreementModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [signed, setSigned] = useState<boolean>(true);
  const [customerName, setCustomerName] = useState<string>('EXECUTIVE LESSEE');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none overflow-y-auto">
        {/* BACKDROP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* MODAL CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#090806] border border-[#C9A44C]/60 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.95)] overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]"
        >
          {/* HEADER BAR */}
          <div className="flex items-center justify-between p-5 md:p-6 border-b border-[#C9A44C]/30 bg-[#0F0E0B]">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-[#C9A44C] bg-[#1A160D] flex items-center justify-center text-[#C9A44C]">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold tracking-wider text-white uppercase flex items-center space-x-2">
                  <span>EXECUTIVE VEHICLE RENTAL AGREEMENT</span>
                  <span className="text-[10px] bg-[#C9A44C]/20 border border-[#C9A44C]/60 text-[#C9A44C] px-2 py-0.5 rounded-full font-mono">
                    VERIFIED DRAFT
                  </span>
                </h3>
                <p className="text-xs text-[#A8A8A8] font-mono mt-0.5">
                  REF: LSA-2026-88092 • SECURE ENCRYPTED DOCUMENT
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-[#C9A44C] hover:bg-[#C9A44C]/20 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* MAIN BODY: SPLIT VIEW (CLAUSES NAV + DOCUMENT SHEET) */}
          <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-y-auto">
            {/* LEFT CLAUSE TABS (4 COLS) */}
            <div className="md:col-span-4 p-4 border-r border-[#C9A44C]/20 bg-[#0B0A08] flex flex-col space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[#C9A44C] uppercase px-2 mb-1">
                CONTRACT SECTIONS
              </span>

              {LEGAL_CLAUSES.map((clause, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`
                    text-left p-3 rounded-xl border transition-all text-xs flex flex-col space-y-1
                    ${
                      activeTab === idx
                        ? 'border-[#C9A44C] bg-[#1A160D] text-white shadow-[0_0_12px_rgba(201,164,76,0.2)]'
                        : 'border-white/10 hover:border-[#C9A44C]/40 text-[#BDBDBD] hover:bg-[#12100B]'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#C9A44C]">{clause.title.split(':')[0]}</span>
                    <span className="text-[9px] bg-white/10 text-[#E2C376] px-1.5 py-0.5 rounded font-mono">
                      {clause.badge}
                    </span>
                  </div>
                  <span className="font-semibold text-white/90">{clause.title.split(':')[1]}</span>
                  <p className="text-[11px] text-[#A8A8A8] line-clamp-1">{clause.summary}</p>
                </button>
              ))}

              <div className="mt-auto pt-4 border-t border-[#C9A44C]/20">
                <div className="p-3 rounded-xl bg-[#14110B] border border-[#C9A44C]/30 text-xs text-[#D1D1D1] space-y-2">
                  <div className="flex items-center space-x-1.5 text-[#C9A44C] font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>0% HIDDEN FEES GUARANTEE</span>
                  </div>
                  <p className="text-[11px] text-[#A8A8A8] leading-tight">
                    Every liability threshold, deposit condition, and fuel parameter is strictly fixed upon reservation.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIMULATED PAPER AGREEMENT (8 COLS) */}
            <div className="md:col-span-8 p-6 bg-[#080705] flex flex-col justify-between space-y-6">
              {/* WHITE FORMAL PAPER CARD */}
              <div className="bg-[#FAF9F5] text-slate-900 p-6 md:p-8 rounded-xl shadow-2xl font-serif relative overflow-hidden border border-[#DCD6C8]">
                {/* WATERMARK */}
                <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none font-sans font-black text-6xl text-slate-900 select-none">
                  LEGAL 05
                </div>

                {/* DOCUMENT HEADER */}
                <div className="border-b-2 border-slate-900 pb-3 mb-4 flex items-center justify-between font-sans">
                  <div>
                    <h2 className="text-xl md:text-2xl font-extrabold tracking-wider text-slate-900 uppercase">
                      RENTAL AGREEMENT
                    </h2>
                    <p className="text-[10px] text-slate-600 font-mono">
                      LUXURY FLEET LEASE & SAFETY COMPLIANCE CONTRACT
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded border border-amber-300 font-mono">
                      OFFICIAL DRAFT
                    </span>
                  </div>
                </div>

                {/* CLAUSE DISPLAY */}
                <div className="space-y-4 text-xs md:text-sm text-slate-800 leading-relaxed font-sans">
                  <div className="bg-amber-50/80 p-3 rounded border border-amber-200">
                    <h4 className="font-bold text-amber-900 uppercase tracking-wide text-xs mb-1">
                      {LEGAL_CLAUSES[activeTab].title}
                    </h4>
                    <p className="text-slate-700 text-xs">
                      {LEGAL_CLAUSES[activeTab].fullText}
                    </p>
                  </div>

                  <p className="text-[11px] text-slate-600 italic">
                    "The undersigned parties acknowledge that this lease agreement governs the operation of the designated luxury vehicle under state transport statutes and commercial insurance covenants."
                  </p>
                </div>

                {/* SIGNATURE SECTION */}
                <div className="mt-8 pt-6 border-t border-slate-300 grid grid-cols-2 gap-6 font-sans">
                  {/* CUSTOMER SIGNATURE */}
                  <div className="flex flex-col space-y-1">
                    <span className="text-[10px] text-slate-500 font-mono uppercase">
                      LESSEE SIGNATURE
                    </span>
                    <div className="h-10 border-b-2 border-slate-800 flex items-end pb-1 font-serif italic text-base text-slate-900 font-bold">
                      {signed ? 'V. Executive (Verified Digital)' : customerName}
                    </div>
                    <span className="text-[9px] text-emerald-700 font-semibold flex items-center space-x-1 mt-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>ID Authenticated & Verified</span>
                    </span>
                  </div>

                  {/* COMPANY SIGNATURE */}
                  <div className="flex flex-col space-y-1">
                    <span className="text-[10px] text-slate-500 font-mono uppercase">
                      LESSOR / COMPANY STAMP
                    </span>
                    <div className="h-10 border-b-2 border-slate-800 flex items-end pb-1 font-mono text-xs text-amber-900 font-bold">
                      LUXURY FLEET CONCIERGE L.L.C.
                    </div>
                    <span className="text-[9px] text-slate-500 font-mono">
                      STAMP ID: #99482-REG
                    </span>
                  </div>
                </div>
              </div>

              {/* ACTION FOOTER */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setSigned(!signed)}
                  className="flex items-center space-x-2 text-xs text-[#C9A44C] hover:underline font-semibold"
                >
                  <PenTool className="w-4 h-4" />
                  <span>{signed ? 'Reset Signature' : 'Apply Digital Signature'}</span>
                </button>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => alert('Agreement PDF draft generated and ready.')}
                    className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#18140B] border border-[#C9A44C]/50 text-[#C9A44C] text-xs font-bold hover:bg-[#C9A44C] hover:text-black transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </button>

                  <button
                    onClick={onClose}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#E2C376] to-[#C9A44C] text-black text-xs font-extrabold uppercase tracking-wider shadow-[0_0_15px_rgba(201,164,76,0.3)] hover:opacity-90 transition-all"
                  >
                    Accept & Return
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
