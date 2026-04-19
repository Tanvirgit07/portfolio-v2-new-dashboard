import React from "react";
import { MessageSquare } from "lucide-react";
import { ViewRecruiterModal } from "./ViewRecruiterModal";
import { DeleteModule } from "@/components/DeleteModule";
// Assuming ViewRecruiterModal is in the same directory
// import { ViewRecruiterModal } from "./ViewRecruiterModal";

const dummyRecruiterList = [
  {
    id: "fb-101",
    name: "Sarah Jenkins",
    email: "sarah.j@techflow.com",
    role: "Senior Talent Acquisition",
    status: "shortlisted",
    message: "Your portfolio is impressive! Especially the performance optimization on the React projects. Let's have a call next week.",
    date: "19 April 2026",
  },
  {
    id: "fb-102",
    name: "Robert Fox",
    email: "robert.fox@designly.io",
    role: "Hiring Manager",
    status: "suggestion",
    message: "I love the UI, but I suggest making the typography slightly larger for better readability on mobile devices.",
    date: "17 April 2026",
  },
  {
    id: "fb-103",
    name: "Esther Howard",
    email: "esther.h@startup.net",
    role: "Technical Lead",
    status: "more-projects",
    message: "Great foundation. I'd like to see more examples of how you handle complex state management using Redux or Zustand.",
    date: "15 April 2026",
  },
  {
    id: "fb-104",
    name: "Cameron Williamson",
    email: "cameron.w@corporate.com",
    role: "HR Director",
    status: "not-fit",
    message: "Thank you for sharing your work. Currently, we are looking for someone with more backend experience.",
    date: "12 April 2026",
  }
];

export function RecruiterListSection() {
  return (
    <div className="bg-[#15160e] border border-zinc-800/50 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      
      {/* Header with Glassmorphism touch */}
      <div className="p-8 border-b border-zinc-800/50 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gradient-to-r from-zinc-900/50 to-transparent gap-4">
        <div>
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
            Recruiter <span className="text-[#c7d300] bg-[#c7d300]/10 px-3 py-1 rounded-lg">Insights</span>
          </h3>
          <p className="text-sm text-zinc-500 mt-2 font-medium tracking-wide">Manage recruiter feedback and track your hiring pipeline</p>
        </div>
        <div className="flex items-center gap-3 bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-800">
           <div className="h-2 w-2 rounded-full bg-[#c7d300] animate-pulse"></div>
           <span className="text-zinc-300 text-xs font-bold uppercase tracking-widest">
            {dummyRecruiterList.length} Feedbacks
          </span>
        </div>
      </div>

      {/* Table Interface */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-900/40 text-zinc-500 text-[11px] uppercase tracking-[0.2em] border-b border-zinc-800/50">
              <th className="px-8 py-6 font-bold">Recruiter Information</th>
              <th className="px-8 py-6 font-bold">Feedback Scope</th>
              <th className="px-8 py-6 font-bold">Timeline</th>
              <th className="px-8 py-6 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/30">
            {dummyRecruiterList.map((item) => (
              <tr key={item.id} className="hover:bg-[#c7d300]/[0.02] transition-all duration-500 group">
                {/* Profile Cell */}
                <td className="px-8 py-7">
                  <div className="flex items-center gap-5">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center text-[#c7d300] font-black text-xl group-hover:border-[#c7d300]/40 group-hover:bg-zinc-800 transition-all duration-500 shadow-lg">
                        {item.name.charAt(0)}
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-[#c7d300] p-1 rounded-md border-2 border-[#15160e]">
                        <MessageSquare className="w-2.5 h-2.5 text-black" />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white group-hover:text-[#c7d300] transition-colors tracking-tight">{item.name}</p>
                      <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mt-0.5">{item.role}</p>
                    </div>
                  </div>
                </td>

                {/* Status Cell */}
                <td className="px-8 py-7">
                  <StatusBadge status={item.status} />
                </td>

                {/* Date Cell */}
                <td className="px-8 py-7">
                  <div className="flex flex-col">
                    <span className="text-sm text-zinc-300 font-semibold">{item.date}</span>
                    <span className="text-[10px] text-zinc-600 uppercase font-bold mt-1 tracking-tighter">Received Date</span>
                  </div>
                </td>

                {/* Actions Cell */}
                <td className="px-8 py-7 text-right">
                  <div className="flex justify-end gap-2">
                    {/* Integrated View Modal (assuming it's a button-like trigger) */}
                    <ViewRecruiterModal />
                    <DeleteModule />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Table Pagination / Control */}
      <div className="p-6 bg-zinc-900/20 border-t border-zinc-800/50 flex justify-center items-center">
         <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-700"></span>
            <p className="text-[11px] text-zinc-600 uppercase font-black tracking-[0.3em]">End of Archive</p>
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-700"></span>
         </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    shortlisted: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    suggestion: "bg-[#c7d300]/10 text-[#c7d300] border-[#c7d300]/20",
    "not-fit": "bg-rose-500/10 text-rose-500 border-rose-500/20",
    "more-projects": "bg-amber-500/10 text-amber-500 border-amber-500/20",
  };

  return (
    <div className={`inline-flex items-center px-4 py-1.5 rounded-full border shadow-sm ${styles[status] || "bg-zinc-800 text-zinc-400 border-zinc-700"}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current mr-2.5"></span>
      <span className="text-[10px] uppercase font-black tracking-wider">
        {status.replace("-", " ")}
      </span>
    </div>
  );
}