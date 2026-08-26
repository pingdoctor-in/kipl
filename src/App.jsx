import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import KPICards from './components/KPICards';
import EligibilityMix from './components/EligibilityMix';
import BidRoomActions from './components/BidRoomActions';
import PQSummaryCard from './components/PQSummaryCard';
import TenderList from './components/TenderList';
import TenderDetailModal from './components/TenderDetailModal';
import { mockTenders } from './data/mockTenders';
import { kiplProfile } from './data/kiplProfile';

export default function App() {
  const [selectedSector, setSelectedSector] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All');
  const [activeTender, setActiveTender] = useState(null);

  // Extract unique states list
  const statesList = useMemo(() => {
    const states = new Set(mockTenders.map(t => t.state));
    return Array.from(states).sort();
  }, []);

  // Filter tenders based on sector, state, and search query
  const filteredTenders = useMemo(() => {
    return mockTenders.filter(t => {
      const matchSector = selectedSector === 'All' || t.sector === selectedSector;
      const matchState = selectedState === 'All' || t.state === selectedState;
      const matchQuery = searchQuery.trim() === '' || 
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.state.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchSector && matchState && matchQuery;
    });
  }, [selectedSector, selectedState, searchQuery]);

  const priorityCount = filteredTenders.filter(t => t.status === 'Priority').length;
  const strongFitCount = filteredTenders.filter(t => t.fit === 'Strong').length;

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans">
      
      {/* Sticky Header with Navigation and Search */}
      <Header 
        selectedSector={selectedSector}
        setSelectedSector={setSelectedSector}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        statesList={statesList}
      />

      {/* Main Content Dashboard Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Metric KPI Banner Cards */}
        <KPICards 
          tendersCount={filteredTenders.length}
          priorityCount={priorityCount}
          strongFitCount={strongFitCount}
        />

        {/* Middle Section: Eligibility Breakdown & Immediate Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EligibilityMix tenders={filteredTenders} />
          <BidRoomActions tenders={filteredTenders} />
        </div>

        {/* Pre-Qualification Baseline Card */}
        <PQSummaryCard />

        {/* Filtered Tenders Table */}
        <TenderList 
          tenders={filteredTenders} 
          onSelectTender={(tender) => setActiveTender(tender)} 
        />

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-4 bg-[#0f172a] text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} {kiplProfile.companyName} — Tender Intelligence Command Center
          </span>
          <span className="text-slate-400 text-[11px]">
            Audited for TG, AP, MH, MP, RJ, GA, KA, UP, JH Procurement Portals
          </span>
        </div>
      </footer>

      {/* Drill-down Modal */}
      {activeTender && (
        <TenderDetailModal 
          tender={activeTender} 
          onClose={() => setActiveTender(null)} 
        />
      )}

    </div>
  );
}
