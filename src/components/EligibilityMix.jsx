import React from 'react';
import { PieChart, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, FileCheck } from 'lucide-react';
import { kiplProfile } from '../data/kiplProfile';

export default function EligibilityMix({ tenders }) {
  const strongCount = tenders.filter(t => t.fit === 'Strong').length;
  const likelyCount = tenders.filter(t => t.fit === 'Likely').length;
  const conditionalCount = tenders.filter(t => t.fit === 'Conditional').length;
  const jvCount = tenders.filter(t => t.fit === 'JV Required').length;
  const total = tenders.length || 1;

  const strongPct = Math.round((strongCount / total) * 100);
  const likelyPct = Math.round((likelyCount / total) * 100);
  const jvPct = Math.round((jvCount / total) * 100);

  return (
    <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-5 shadow-md flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <PieChart className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-white tracking-wide">Pre-Qualification Mix</h3>
          </div>
          <span className="text-xs text-slate-400 font-mono">NFB Limit: ₹{kiplProfile.nonFundBasedLimit} Cr</span>
        </div>

        {/* Visual Progress Breakdown */}
        <div className="my-4">
          <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
            <span className="text-slate-300">Eligibility Breakdown ({tenders.length} Active)</span>
            <span className="text-emerald-400 font-bold">{strongPct}% High Confidence</span>
          </div>
          
          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex gap-0.5 p-0.5 border border-slate-700/60">
            <div style={{ width: `${strongPct}%` }} className="bg-emerald-500 rounded-l-full h-full transition-all" title={`Strong Fit (${strongCount})`}></div>
            <div style={{ width: `${likelyPct}%` }} className="bg-blue-500 h-full transition-all" title={`Likely Fit (${likelyCount})`}></div>
            <div style={{ width: `${jvPct}%` }} className="bg-amber-500 rounded-r-full h-full transition-all" title={`JV Required (${jvCount})`}></div>
          </div>
        </div>

        {/* Category List */}
        <div className="space-y-2.5 my-4">
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex items-center space-x-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span className="text-xs font-semibold text-slate-200">Strong Fit (Standalone PQ)</span>
            </div>
            <span className="text-xs font-bold text-emerald-400 font-mono">{strongCount} Tenders</span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex items-center space-x-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
              <span className="text-xs font-semibold text-slate-200">Likely Fit (Needs Docs)</span>
            </div>
            <span className="text-xs font-bold text-blue-400 font-mono">{likelyCount} Tenders</span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex items-center space-x-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <span className="text-xs font-semibold text-slate-200">JV Required (&gt; ₹200 Cr)</span>
            </div>
            <span className="text-xs font-bold text-amber-400 font-mono">{jvCount} Tenders</span>
          </div>
        </div>
      </div>

      {/* Verified Cap Badges */}
      <div className="pt-3 border-t border-slate-800/80">
        <div className="flex flex-wrap gap-1.5 text-[10px]">
          <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> RDSS Distribution
          </span>
          <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> 110-220kV Lines
          </span>
          <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> HDD UG Cabling
          </span>
          <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Civil & Warehouses
          </span>
        </div>
      </div>
    </div>
  );
}
