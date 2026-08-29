import React from 'react';
import { 
  X, CheckCircle2, AlertTriangle, Building2, Zap, MapPin, Calendar, 
  DollarSign, ShieldCheck, FileText, Users, ArrowUpRight, Award, Lock, ExternalLink, Globe
} from 'lucide-react';
import { kiplProfile } from '../data/kiplProfile';

export default function TenderDetailModal({ tender, onClose }) {
  if (!tender) return null;

  const isJV = tender.fit === 'JV Required';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-[#131b2e] border border-slate-800 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-[#131b2e] z-10">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
              tender.sector === 'Electrical EPC' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
            }`}>
              {tender.sector === 'Electrical EPC' ? <Zap className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-xs text-slate-400">{tender.id}</span>
                {tender.nitNumber && (
                  <>
                    <span className="text-slate-600">•</span>
                    <span className="font-mono text-xs text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      {tender.nitNumber}
                    </span>
                  </>
                )}
                <span className="text-slate-600">•</span>
                <span className="text-xs font-semibold text-blue-400">{tender.subSector}</span>
              </div>
              <h2 className="text-base font-bold text-white tracking-wide mt-0.5">
                {tender.title}
              </h2>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 text-xs text-slate-300">
          
          {/* Key Quick Data Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#18233c] p-3.5 rounded-xl border border-slate-700/60">
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Tender Value</span>
              <span className="text-base font-bold text-white font-mono">₹{tender.valueCr.toFixed(2)} Cr</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">EMD Amount</span>
              <span className="text-sm font-semibold text-cyan-400 font-mono">₹{tender.emdLakhs} Lakhs</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Pre-Bid Meeting</span>
              <span className="text-xs font-medium text-slate-200">{tender.preBidDate}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Submission Due</span>
              <span className="text-xs font-bold text-amber-400">{tender.submissionDate}</span>
            </div>
          </div>

          {/* Department, State Info & Direct Official Portal Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 gap-3">
            <div className="flex items-center space-x-2.5">
              <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <div>
                <span className="text-slate-400 font-medium">Department / Client:</span>
                <span className="font-semibold text-white ml-2">{tender.department} ({tender.state})</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 w-full sm:w-auto justify-between sm:justify-end">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {tender.fitScore}% Match Score
              </span>

              {tender.portalUrl && (
                <a
                  href={tender.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-white border border-cyan-500/40 font-semibold transition-all flex items-center gap-1.5 text-xs shadow-sm"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Open Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>
              )}
            </div>
          </div>

          {/* KIPL Pre-Qualification Match Analysis */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> KIPL Qualification Assessment
            </h3>
            <div className={`p-4 rounded-xl border ${
              isJV ? 'bg-amber-950/20 border-amber-500/30 text-amber-200' : 'bg-emerald-950/20 border-emerald-500/30 text-emerald-100'
            }`}>
              <p className="leading-relaxed font-medium">
                {tender.reasoning}
              </p>
              {isJV && (
                <div className="mt-3 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-amber-400" />
                    <span>Recommended Alliance: <strong>{kiplProfile.jvAlliancePartner}</strong> (Joint Venture)</span>
                  </div>
                  <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">JV Proposal</span>
                </div>
              )}
            </div>
          </div>

          {/* Mandatory Tender Requirements */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-blue-400" /> Key PQR Technical Eligibility Rules
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {tender.requirements.map((req, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-[#18233c] border border-slate-700/60 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-200 leading-snug">{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Actions for Bid Team */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-amber-400" /> Actionable Bid-Room Steps
            </h3>
            <div className="space-y-2">
              {tender.recommendedActions.map((act, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start space-x-3">
                  <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-slate-200 leading-normal">{act}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between bg-[#0f172a] rounded-b-2xl gap-3">
          <span className="text-slate-400 text-[11px]">
            NFB Bank Guarantee Limit Available: <strong className="text-white">₹{kiplProfile.nonFundBasedLimit} Cr</strong>
          </span>
          <div className="flex items-center space-x-3">
            {tender.portalUrl && (
              <a
                href={tender.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-cyan-600/20 hover:bg-cyan-600 text-cyan-300 hover:text-white border border-cyan-500/40 font-semibold transition-all text-xs flex items-center gap-1.5"
              >
                <span>Visit Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={() => {
                alert(`Tender ${tender.id} document checklist assigned to KIPL Bid Team!`);
                onClose();
              }}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all text-xs flex items-center gap-1.5"
            >
              <span>Initiate Bid Preparation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
