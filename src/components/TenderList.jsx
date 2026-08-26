import React from 'react';
import { 
  CheckCircle2, AlertTriangle, Users, ExternalLink, Calendar, 
  Building2, Zap, ArrowUpRight, ShieldCheck, MapPin, Sparkles
} from 'lucide-react';

export default function TenderList({ tenders, onSelectTender }) {
  if (tenders.length === 0) {
    return (
      <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-12 text-center my-6">
        <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-slate-500 mb-3">
          <Building2 className="w-6 h-6" />
        </div>
        <h3 className="text-sm font-semibold text-slate-300">No tenders match your current filters</h3>
        <p className="text-xs text-slate-500 mt-1">Try selecting 'All Sectors' or clear your search term.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#131b2e] border border-slate-800 rounded-2xl shadow-md overflow-hidden">
      
      {/* Table Header Controls */}
      <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between flex-wrap gap-3 bg-[#172036]">
        <div>
          <h2 className="text-sm font-bold text-white tracking-wide flex items-center gap-2">
            <span>Live Priority Opportunities</span>
            <span className="bg-blue-500/10 text-blue-400 text-xs px-2.5 py-0.5 rounded-full border border-blue-500/20 font-mono font-medium">
              {tenders.length} Available
            </span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Auto-matched against KIPL pre-qualification requirements & state licenses
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs">
          <span className="flex items-center gap-1 text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Strong Fit
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1 text-blue-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span> Likely Fit
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1 text-amber-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span> JV Required
          </span>
        </div>
      </div>

      {/* Tender List Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-[#0f172a]/80 text-slate-400 uppercase text-[11px] font-semibold tracking-wider border-b border-slate-800">
              <th className="py-3 px-4">Opportunity & Scope</th>
              <th className="py-3 px-4">Sector & State</th>
              <th className="py-3 px-4">Tender Value</th>
              <th className="py-3 px-4">Deadline</th>
              <th className="py-3 px-4 text-center">Eligibility Fit</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80">
            {tenders.map((tender) => {
              const isStrong = tender.fit === 'Strong';
              const isLikely = tender.fit === 'Likely';
              const isJV = tender.fit === 'JV Required';

              return (
                <tr 
                  key={tender.id} 
                  className="hover:bg-[#18233c] transition-colors group cursor-pointer"
                  onClick={() => onSelectTender(tender)}
                >
                  
                  {/* Opportunity & Title */}
                  <td className="py-3.5 px-4 max-w-sm">
                    <div className="flex items-start space-x-2.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        tender.sector === 'Electrical EPC' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                      }`}>
                        {tender.sector === 'Electrical EPC' ? <Zap className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-[10px] text-slate-400">{tender.id}</span>
                          {tender.status === 'Priority' && (
                            <span className="bg-rose-500/10 text-rose-400 text-[10px] px-1.5 py-0.2 rounded font-bold border border-rose-500/20">
                              Priority
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-1 mt-0.5 text-xs">
                          {tender.title}
                        </h3>
                        <p className="text-[11px] text-slate-400 truncate mt-0.5">
                          {tender.department}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Sector & State */}
                  <td className="py-3.5 px-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-slate-200 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" /> {tender.state}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-0.5">
                        {tender.subSector}
                      </span>
                    </div>
                  </td>

                  {/* Tender Value */}
                  <td className="py-3.5 px-4 font-mono">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white">
                        ₹{tender.valueCr.toFixed(2)} <span className="text-xs font-normal text-cyan-400">Cr</span>
                      </span>
                      <span className="text-[10px] text-slate-400">
                        EMD: ₹{tender.emdLakhs} L
                      </span>
                    </div>
                  </td>

                  {/* Deadline */}
                  <td className="py-3.5 px-4">
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-300 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" /> {tender.submissionDate}
                      </span>
                      <span className="text-[10px] text-amber-400/90 mt-0.5">
                        Pre-Bid: {tender.preBidDate}
                      </span>
                    </div>
                  </td>

                  {/* Eligibility Badge */}
                  <td className="py-3.5 px-4 text-center">
                    <div className="inline-flex flex-col items-center">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold border flex items-center gap-1 shadow-sm ${
                        isStrong ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' :
                        isLikely ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' :
                        'bg-amber-500/10 text-amber-400 border-amber-500/30'
                      }`}>
                        {isStrong && <CheckCircle2 className="w-3.5 h-3.5" />}
                        {isLikely && <ShieldCheck className="w-3.5 h-3.5" />}
                        {isJV && <Users className="w-3.5 h-3.5" />}
                        <span>{tender.fit}</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 mt-1">
                        Score: {tender.fitScore}%
                      </span>
                    </div>
                  </td>

                  {/* Action Button */}
                  <td className="py-3.5 px-4 text-right">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTender(tender);
                      }}
                      className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 font-medium transition-all text-xs"
                    >
                      <span>Review PQ</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
