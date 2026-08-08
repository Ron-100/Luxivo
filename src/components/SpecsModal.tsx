import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gauge, Zap, Wind, ShieldCheck, CheckCircle2, RefreshCw } from 'lucide-react';
import { VehicleSpec } from '../types';

interface SpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle: VehicleSpec;
  vehicles: VehicleSpec[];
  onSelectVehicle: (v: VehicleSpec) => void;
}

export const SpecsModal: React.FC<SpecsModalProps> = ({
  isOpen,
  onClose,
  vehicle,
  vehicles,
  onSelectVehicle,
}) => {
  const [isRefetching, setIsRefetching] = useState(false);
  const [activeStage, setActiveStage] = useState<'stock' | 'stage1' | 'stage2'>('stage2');

  const handleRefetchTelemetry = () => {
    setIsRefetching(true);
    setTimeout(() => {
      setIsRefetching(false);
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#111111] border border-neutral-800 rounded-3xl p-6 sm:p-8 w-full max-w-3xl z-10 overflow-hidden shadow-2xl my-8 text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
                Telemetry & Specs Sheet
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mt-1">
                {vehicle.model}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleRefetchTelemetry}
                disabled={isRefetching}
                className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-all cursor-pointer focus:outline-none"
                title="Refresh Live Dyno Telemetry"
              >
                <RefreshCw className={`w-4 h-4 ${isRefetching ? 'animate-spin text-white' : ''}`} />
              </button>
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-all cursor-pointer focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Model Switcher Pills */}
          <div className="flex items-center gap-2 my-6 overflow-x-auto pb-2 scrollbar-none">
            {vehicles.map((v) => (
              <button
                key={v.id}
                onClick={() => onSelectVehicle(v)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${v.id === vehicle.id
                    ? 'bg-white text-black'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
              >
                {v.shortName}
              </button>
            ))}
          </div>

          {/* Stage Selector */}
          <div className="grid grid-cols-3 gap-3 mb-6 p-1.5 bg-neutral-950 rounded-2xl border border-neutral-800">
            <button
              onClick={() => setActiveStage('stock')}
              className={`py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${activeStage === 'stock'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
                }`}
            >
              Factory Stock
            </button>
            <button
              onClick={() => setActiveStage('stage1')}
              className={`py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${activeStage === 'stage1'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
                }`}
            >
              Stage 1 ECU Tune
            </button>
            <button
              onClick={() => setActiveStage('stage2')}
              className={`py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${activeStage === 'stage2'
                  ? 'bg-white text-black shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white'
                }`}
            >
              Luxivo Stage 2+
            </button>
          </div>

          {/* Spec Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-neutral-900/60 p-4 rounded-2xl border border-neutral-800">
              <div className="flex items-center gap-2 text-neutral-400 text-xs mb-1">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Peak Power</span>
              </div>
              <div className="text-xl sm:text-2xl font-semibold text-white">
                {activeStage === 'stock'
                  ? vehicle.stockPower
                  : activeStage === 'stage1'
                    ? `${parseInt(vehicle.stockPower) + 80} HP`
                    : vehicle.tunedPower}
              </div>
            </div>

            <div className="bg-neutral-900/60 p-4 rounded-2xl border border-neutral-800">
              <div className="flex items-center gap-2 text-neutral-400 text-xs mb-1">
                <Gauge className="w-3.5 h-3.5 text-sky-400" />
                <span>Peak Torque</span>
              </div>
              <div className="text-xl sm:text-2xl font-semibold text-white">
                {activeStage === 'stock'
                  ? vehicle.stockTorque
                  : activeStage === 'stage1'
                    ? `${parseInt(vehicle.stockTorque) + 90} lb-ft`
                    : vehicle.tunedTorque}
              </div>
            </div>

            <div className="bg-neutral-900/60 p-4 rounded-2xl border border-neutral-800">
              <div className="flex items-center gap-2 text-neutral-400 text-xs mb-1">
                <Wind className="w-3.5 h-3.5 text-emerald-400" />
                <span>0-60 mph</span>
              </div>
              <div className="text-xl sm:text-2xl font-semibold text-white">
                {activeStage === 'stock' ? vehicle.acceleration0to60 : vehicle.tuned0to60}
              </div>
            </div>

            <div className="bg-neutral-900/60 p-4 rounded-2xl border border-neutral-800">
              <div className="flex items-center gap-2 text-neutral-400 text-xs mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>Displacement</span>
              </div>
              <div className="text-xl sm:text-2xl font-semibold text-white">
                {vehicle.displacement}
              </div>
            </div>
          </div>

          {/* Engine & Modifications list */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">
              Included Luxivo Enhancements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {vehicle.modifications.map((mod, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-neutral-950 rounded-xl border border-neutral-800/80 text-sm text-neutral-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{mod}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
            <span className="text-xs text-neutral-500">
              Engineered & Dyno Tested at Luxivo Lab
            </span>
            <button
              onClick={onClose}
              className="bg-white text-black font-medium text-sm px-6 py-2.5 rounded-full hover:bg-neutral-200 transition-all cursor-pointer"
            >
              Close Specs
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
