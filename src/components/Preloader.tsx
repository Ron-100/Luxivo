import React from 'react';

interface PreloaderProps {
  progress?: number;
  isLoading: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ progress = 0, isLoading }) => {
  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#050505] text-white transition-opacity duration-700 ease-out ${
        isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Ambient Gold Glows (Matching Section 4 & Section 5 Style) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#C9A44C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#8F6D25]/15 rounded-full blur-[100px] pointer-events-none" />


      {/* Center Animation Block */}
      <div className="relative flex flex-col items-center justify-center z-10 py-12">
        {/* Outer Wheel Shadow / Ground Reflection */}
        <div className="relative flex items-center justify-center">
          {/* Wheel Assembly Frame */}
          <div className="relative w-44 h-44 md:w-56 md:h-56 flex items-center justify-center">
            {/* Outer Tire Track Ring */}
            <div className="absolute inset-0 rounded-full border-[10px] border-zinc-900 shadow-[0_0_30px_rgba(0,0,0,0.9)]" />

            {/* Tire Tread Pattern - Rotates with wheel */}
            <div className="absolute inset-1 rounded-full border-[6px] border-dashed border-zinc-800 animate-[spin_2s_linear_infinite]" />



            {/* Drilled Carbon Ceramic Brake Disc (Rotates slowly or static under wheel) */}
            <div className="absolute inset-5 rounded-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 border border-zinc-700/50 flex items-center justify-center shadow-inner">
              {/* Brake Disc Drilled Holes Pattern */}
              <div className="absolute inset-2 rounded-full border border-dashed border-zinc-600/30 opacity-60" />
              <div className="absolute inset-5 rounded-full border border-dashed border-zinc-600/40 opacity-40" />
            </div>

            {/* ROTATING WHEEL RIM & SPOKES */}
            <div className="absolute inset-4 rounded-full flex items-center justify-center animate-[spin_1.5s_cubic-bezier(0.4,0,0.2,1)_infinite] z-10">
              {/* Alloy Rim Lip Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-zinc-400/40 shadow-[inset_0_0_15px_rgba(255,255,255,0.1)]" />

              {/* 5-Spoke Dual Luxury Supercar Wheel Design */}
              {[0, 72, 144, 216, 288].map((angle) => (
                <React.Fragment key={angle}>
                  {/* Primary Spoke */}
                  <div
                    className="absolute w-2.5 md:w-3.5 h-[48%] top-1/2 left-1/2 -translate-x-1/2 origin-top bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-700 shadow-md rounded-b-sm"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <div className="w-full h-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  </div>
                  {/* Secondary Split Spoke */}
                  <div
                    className="absolute w-1.5 h-[45%] top-1/2 left-1/2 -translate-x-1/2 origin-top bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-800 opacity-90"
                    style={{ transform: `rotate(${angle + 12}deg)` }}
                  />
                </React.Fragment>
              ))}

              {/* Central Hub Cap */}
              <div className="absolute w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-zinc-900 via-black to-zinc-800 border-2 border-amber-500/60 shadow-[0_0_15px_rgba(234,179,8,0.2)] flex items-center justify-center z-30">
                {/* Center Badge Symbol */}
                <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center">
                  <span className="font-bold text-[10px] text-amber-300 tracking-tighter">LXV</span>
                </div>
                {/* Lug Nuts */}
                {[0, 72, 144, 216, 288].map((nutAngle) => (
                  <div
                    key={nutAngle}
                    className="absolute w-1.5 h-1.5 rounded-full bg-zinc-300 border border-zinc-600 shadow-inner"
                    style={{
                      transform: `rotate(${nutAngle}deg) translateY(-16px)`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Speed Motion Track Line under Wheel */}
        <div className="relative w-64 md:w-80 h-1 bg-zinc-900 rounded-full mt-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent w-1/2 animate-[lightSweep_1.2s_ease-in-out_infinite]" />
        </div>

        {/* Loading Status Text & Percentage */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 font-sans font-black text-sm tracking-[0.25em] text-zinc-300 uppercase">
            <span>STARTING ENGINE</span>
            <span className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-[#C9A44C] rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 bg-[#C9A44C] rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 bg-[#C9A44C] rounded-full animate-bounce" />
            </span>
          </div>

          <div className="font-sans text-4xl font-black tracking-tight text-gold-gradient drop-shadow-[0_2px_10px_rgba(201,164,76,0.25)]">
            {Math.round(progress)}%
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar & Technical Details */}
      <div className="w-full max-w-xl mb-10 px-8 z-10 flex flex-col items-center gap-3">
        {/* Progress Bar Container */}
        <div className="w-full h-1.5 bg-zinc-900/90 border border-zinc-800 rounded-full overflow-hidden p-[1px]">
          <div
            className="h-full bg-gradient-to-r from-[#C9A44C] via-[#E6C875] to-[#F7E4A8] rounded-full transition-all duration-300 ease-out shadow-[0_0_12px_rgba(201,164,76,0.5)]"
            style={{ width: `${Math.min(100, Math.max(5, progress))}%` }}
          />
        </div>

        <div className="w-full flex justify-between font-sans font-bold text-[11px] text-[#BDBDBD] uppercase tracking-[0.2em]">
          <span>SYSTEM CHECK: OK</span>
          <span>AERODYNAMICS LOADED</span>
        </div>
      </div>
    </div>
  );
};
