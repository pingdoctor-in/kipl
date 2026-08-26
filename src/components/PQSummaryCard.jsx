import React from 'react';
import { ShieldCheck, Award, Building, DollarSign, CheckCircle } from 'lucide-react';
import { kiplProfile } from '../data/kiplProfile';

export default function PQSummaryCard() {
  return (
    <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-5 shadow-md">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold text-white tracking-wide">KIPL Qualification Baseline</h3>
        </div>
        <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-medium">
          Pre-Verified Strengths
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-xs">
        
        {/* Card 1 */}
        <div className="p-3 bg-[#18233c] rounded-xl border border-slate-700/60">
          <div className="flex items-center space-x-2 text-cyan-400 font-semibold mb-1.5">
            <Award className="w-4 h-4" />
            <span>Turnkey Electrical EPC</span>
          </div>
          <ul className="space-y-1 text-[11px] text-slate-300">
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
              <span>RDSS & IPDS Feeder Separation</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
              <span>110kV & 220kV Transmission Lines</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
              <span>33/11 & 132/11kV Substations</span>
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="p-3 bg-[#18233c] rounded-xl border border-slate-700/60">
          <div className="flex items-center space-x-2 text-blue-400 font-semibold mb-1.5">
            <Building className="w-4 h-4" />
            <span>Civil Infrastructure</span>
          </div>
          <ul className="space-y-1 text-[11px] text-slate-300">
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
              <span>Commercial & Multi-Storey Residential</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
              <span>Warehouses (Divis Lab) & D-Mart</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
              <span>MES Defence OTM Accommodation</span>
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="p-3 bg-[#18233c] rounded-xl border border-slate-700/60">
          <div className="flex items-center space-x-2 text-amber-400 font-semibold mb-1.5">
            <DollarSign className="w-4 h-4" />
            <span>Financial & Bank Limits</span>
          </div>
          <ul className="space-y-1 text-[11px] text-slate-300">
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
              <span>₹115.00 Cr Non-Fund Bank Guarantee</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
              <span>Rating: INFOMERICS BBB- / A3</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
              <span>Canara & Union Bank Facilities</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
