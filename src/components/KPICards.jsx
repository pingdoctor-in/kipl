import React from 'react';
import { MapPin, TrendingUp, Briefcase, Award, Target, Landmark, ShieldCheck } from 'lucide-react';
import { kiplProfile } from '../data/kiplProfile';

export default function KPICards({ tendersCount, priorityCount, strongFitCount }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      
      {/* Metric 1: Licensed States */}
      <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-4 hover:border-slate-700 transition-all shadow-md group">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Active State Licenses</span>
          <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 group-hover:scale-105 transition-transform">
            <MapPin className="w-5 h-5" />
          </div>
        </div>
        <div className="mt-2.5 flex items-baseline justify-between">
          <span className="text-2xl font-bold text-white tracking-tight">{kiplProfile.licensedStatesCount} <span className="text-sm font-normal text-slate-400">States</span></span>
          <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
            A-Grade & Super Grade
          </span>
        </div>
        <p className="text-[11px] text-slate-400 mt-2 truncate">
          TG, AP, MH, MP, RJ, GA, KA, UP, JH
        </p>
      </div>

      {/* Metric 2: FY 25-26 Turnover */}
      <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-4 hover:border-slate-700 transition-all shadow-md group">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">FY 25–26 Net Turnover</span>
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 group-hover:scale-105 transition-transform">
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>
        <div className="mt-2.5 flex items-baseline justify-between">
          <span className="text-2xl font-bold text-white tracking-tight">₹{kiplProfile.turnoverFY26} <span className="text-sm font-semibold text-cyan-400">Cr</span></span>
          <span className="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/20">
            +9.9% YoY Growth
          </span>
        </div>
        <p className="text-[11px] text-slate-400 mt-2 flex items-center gap-1">
          <span>PBT: ₹{kiplProfile.pbtFY26} Cr</span>
          <span className="text-slate-600">•</span>
          <span>PAT: ₹{kiplProfile.patFY26} Cr</span>
        </p>
      </div>

      {/* Metric 3: Total Portfolio */}
      <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-4 hover:border-slate-700 transition-all shadow-md group">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Cumulative Portfolio</span>
          <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20 group-hover:scale-105 transition-transform">
            <Briefcase className="w-5 h-5" />
          </div>
        </div>
        <div className="mt-2.5 flex items-baseline justify-between">
          <span className="text-2xl font-bold text-white tracking-tight">₹{kiplProfile.totalExecutedOrderBook} <span className="text-sm font-semibold text-purple-400">Cr</span></span>
          <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20">
            Electrical + Civil
          </span>
        </div>
        <p className="text-[11px] text-slate-400 mt-2 flex items-center gap-1">
          <span>NFB Limit: ₹{kiplProfile.nonFundBasedLimit} Cr (BG)</span>
        </p>
      </div>

      {/* Metric 4: Priority Tenders */}
      <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-4 hover:border-slate-700 transition-all shadow-md group">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Matched Tenders</span>
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20 group-hover:scale-105 transition-transform">
            <Target className="w-5 h-5" />
          </div>
        </div>
        <div className="mt-2.5 flex items-baseline justify-between">
          <span className="text-2xl font-bold text-white tracking-tight">{tendersCount} <span className="text-sm font-normal text-slate-400">Opportunities</span></span>
          <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/20">
            {strongFitCount} High Fit
          </span>
        </div>
        <p className="text-[11px] text-slate-400 mt-2 flex items-center justify-between">
          <span>{priorityCount} High Priority Action</span>
          <span className="text-emerald-400 font-medium">Auto-PQ Filtered</span>
        </p>
      </div>

    </div>
  );
}
