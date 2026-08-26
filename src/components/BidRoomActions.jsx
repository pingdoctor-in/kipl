import React, { useState } from 'react';
import { CheckSquare, Square, FileText, Lock, AlertCircle, ArrowUpRight, ShieldAlert } from 'lucide-react';

export default function BidRoomActions({ tenders }) {
  const [completedTasks, setCompletedTasks] = useState({});

  const actionItems = [
    {
      id: "act-1",
      title: "Lock JVVNL Baran RDSS Progress Proof",
      description: "Attach ongoing ₹109.07 Cr completion certificate & Rajasthan Grade 'A' license for tender TEN-ELE-2026-081.",
      priority: "High",
      tenderId: "TEN-ELE-2026-081"
    },
    {
      id: "act-2",
      title: "Map KPTCL 110kV Substation Proof",
      description: "Link Hebballi 110/11kV Substation certificate to satisfy technical PQR for Belagavi tender (₹26.44 Cr).",
      priority: "High",
      tenderId: "TEN-ELE-2026-044"
    },
    {
      id: "act-3",
      title: "Confirm Telangana Registrations",
      description: "Verify TSSPDCL contractor registration renewal for Manikonda 22kV UG Cable HDD package.",
      priority: "Medium",
      tenderId: "TEN-ELE-2026-093"
    },
    {
      id: "act-4",
      title: "Allocate Bank Guarantee NFB Limit",
      description: "Request Canara Bank EMD Guarantee letter of ₹1.47 Cr for MSEDCL Sangli tender.",
      priority: "High",
      tenderId: "TEN-ELE-2026-112"
    },
    {
      id: "act-5",
      title: "Initiate NCC Ltd Alliance for TANGEDCO",
      description: "Value ₹240 Cr exceeds single-entity capacity. Draft Joint Venture agreement (40% KIPL / 60% NCC).",
      priority: "JV Alliance",
      tenderId: "TEN-ELE-2026-204"
    }
  ];

  const toggleTask = (id) => {
    setCompletedTasks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-5 shadow-md flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold text-white tracking-wide">Immediate Bid-Room Actions</h3>
          </div>
          <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 font-medium">
            Pre-Bid Deadlines Approaching
          </span>
        </div>

        <div className="space-y-3 mt-4">
          {actionItems.map(item => {
            const isDone = completedTasks[item.id];
            return (
              <div 
                key={item.id} 
                onClick={() => toggleTask(item.id)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start space-x-3 ${
                  isDone 
                    ? 'bg-slate-900/40 border-slate-800 opacity-60' 
                    : 'bg-[#18233c] border-slate-700/70 hover:border-blue-500/50'
                }`}
              >
                <button className="mt-0.5 text-blue-400 flex-shrink-0">
                  {isDone ? <CheckSquare className="w-4 h-4 text-emerald-400" /> : <Square className="w-4 h-4 text-slate-400" />}
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className={`text-xs font-semibold ${isDone ? 'line-through text-slate-400' : 'text-white'}`}>
                      {item.title}
                    </h4>
                    <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                      item.priority === 'High' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                      item.priority === 'JV Alliance' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                      'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    }`}>
                      {item.priority}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-3 mt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
        <span>Click tasks to toggle readiness status</span>
        <span className="text-cyan-400 font-medium">Updated 5 mins ago</span>
      </div>
    </div>
  );
}
