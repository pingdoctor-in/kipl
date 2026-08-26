import React from 'react';
import { ShieldCheck, Search, Filter, Layers, Zap, Building2, Globe, RefreshCw } from 'lucide-react';
import { kiplProfile } from '../data/kiplProfile';

export default function Header({ 
  selectedSector, 
  setSelectedSector, 
  searchQuery, 
  setSearchQuery, 
  selectedState, 
  setSelectedState,
  statesList
}) {
  return (
    <header className="bg-[#0f172a] border-b border-slate-800 sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Brand Logo & System Info */}
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20 font-bold text-white text-lg tracking-wider border border-blue-400/30">
              KIPL
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                  KIPL Tender Intelligence
                </h1>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5"></span>
                  Live Portal Scanner
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                <span>{kiplProfile.companyName}</span>
                <span className="text-slate-600">•</span>
                <span className="text-cyan-400 font-medium">Command Center v2.4</span>
              </p>
            </div>
          </div>

          {/* Sector Switcher Tabs */}
          <div className="flex items-center bg-[#1e293b] p-1 rounded-xl border border-slate-700/60 shadow-inner">
            <button
              onClick={() => setSelectedSector('All')}
              className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedSector === 'All'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Sectors</span>
            </button>

            <button
              onClick={() => setSelectedSector('Electrical EPC')}
              className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedSector === 'Electrical EPC'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Electrical EPC</span>
            </button>

            <button
              onClick={() => setSelectedSector('Civil Infrastructure')}
              className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedSector === 'Civil Infrastructure'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Civil Infrastructure</span>
            </button>
          </div>

          {/* Search & State Filter Controls */}
          <div className="flex items-center gap-2.5">
            <div className="relative flex-1 md:w-56">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tenders, NIT, state..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1e293b] border border-slate-700/80 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            <div className="relative">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="bg-[#1e293b] border border-slate-700/80 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-blue-500 transition-all cursor-pointer appearance-none pr-8"
              >
                <option value="All">All States ({statesList.length})</option>
                {statesList.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
              <Globe className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
