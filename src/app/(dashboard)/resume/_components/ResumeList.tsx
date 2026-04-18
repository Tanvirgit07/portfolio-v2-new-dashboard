"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  ChevronRight,
  Plus,
  FileText,
  ExternalLink,
  Calendar,
  MoreVertical,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import Link from "next/link";
import { DeleteModule } from "@/components/DeleteModule";

// ডামি ডাটা অবজেক্ট যা আপনার সেকশনকে কন্ট্রোল করবে
const initialResumes = [
  {
    id: "res-01",
    title: "Full Stack Developer v2.4",
    resumeLink: "https://yourportfolio.com/resume-v2-4.pdf",
    version: "2.4.0_stable",
    uploadedDate: "12 April 2026",
    isActive: true, // এটি ওয়েবসাইটে লাইভ থাকবে
  },
  {
    id: "res-02",
    title: "Frontend Specialist (React)",
    resumeLink: "https://yourportfolio.com/frontend-resume.pdf",
    version: "1.8.2_old",
    uploadedDate: "05 March 2026",
    isActive: false,
  },
];

export default function ResumeList() {
  const [resumes, setResumes] = useState(initialResumes);

  // একটি রেজুমে একটিভেট করার ফাংশন
  const handleToggleActive = (id: string) => {
    setResumes(prev => 
      prev.map(res => ({
        ...res,
        isActive: res.id === id // শুধুমাত্র সিলেক্টেড আইডিটি ট্রু হবে, বাকি সব ফলস
      }))
    );
  };

  return (
    <div className="space-y-8">
      {/* Header & Breadcrumb */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <nav className="flex items-center space-x-2 text-sm bg-[#212121]/30 w-fit px-5 py-2.5 rounded-full border border-zinc-800">
          <Link href="/dashboard" className="flex items-center text-zinc-400 hover:text-[#c7d300] transition-colors">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          <div className="flex items-center">
            <span className="text-white font-semibold tracking-wide uppercase text-[12px]">Resume Management</span>
            <span className="ml-2 h-1.5 w-1.5 rounded-full bg-[#c7d300]"></span>
          </div>
        </nav>

        <Link href="/resume/add-resume">
          <button className="flex items-center gap-2 bg-[#c7d300] text-black px-6 py-3 rounded-xl font-bold text-base hover:shadow-[0_0_20px_rgba(199,211,0,0.2)] transition-all">
            <Plus className="h-5 w-5" />
            Upload New Resume
          </button>
        </Link>
      </div>

      {/* Info Card */}
      <div className="bg-[#c7d300]/5 border border-[#c7d300]/20 rounded-2xl p-4 flex items-start gap-4">
        <AlertCircle className="text-[#c7d300] h-5 w-5 mt-0.5" />
        <p className="text-xs text-zinc-400 leading-relaxed">
          You can store multiple resume versions here. Only the one marked as <span className="text-[#c7d300] font-bold">Active</span> will be visible and downloadable on your public website.
        </p>
      </div>

      {/* Resume Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumes.map((resume) => (
          <div 
            key={resume.id}
            className={`relative group bg-[#1a1b14] border-2 rounded-2xl p-6 transition-all duration-300 ${
              resume.isActive ? "border-[#c7d300] shadow-[0_0_30px_rgba(199,211,0,0.05)]" : "border-zinc-800 hover:border-zinc-700"
            }`}
          >
            {/* Status Badge */}
            <div className="flex justify-between items-start mb-6">
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                resume.isActive ? "bg-[#c7d300] text-black" : "bg-zinc-800 text-zinc-500"
              }`}>
                {resume.isActive ? (
                  <><CheckCircle2 size={12} /> Active Live</>
                ) : (
                  "Inactive"
                )}
              </div>
              <button className="text-zinc-600 hover:text-white transition-colors">
                <MoreVertical size={18} />
              </button>
            </div>

            {/* Resume Details */}
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#c7d300]">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg line-clamp-1">{resume.title}</h3>
                <p className="text-zinc-500 text-xs font-mono mt-1">{resume.version}</p>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <div className="flex items-center gap-2 text-zinc-500 text-[11px]">
                  <Calendar size={12} />
                  Uploaded on {resume.uploadedDate}
                </div>
                <a 
                  href={resume.resumeLink} 
                  target="_blank"
                  className="flex items-center gap-2 text-[#c7d300] text-[11px] font-bold hover:underline"
                >
                  <ExternalLink size={12} /> View File
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-zinc-800/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {!resume.isActive && (
                  <button 
                    onClick={() => handleToggleActive(resume.id)}
                    className="text-xs font-black uppercase tracking-tighter text-zinc-400 hover:text-[#c7d300] transition-colors"
                  >
                    Set as Active
                  </button>
                )}
              </div>
              <div className="flex items-center gap-3">
                {/* <Link href={`/dashboard/resume/edit/${resume.id}`}>
                  <button className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase">Edit</button>
                </Link> */}
                <DeleteModule />
              </div>
            </div>
          </div>
        ))}

        {/* Add New Card Placeholder */}
        <Link href="/dashboard/resume/add" className="group">
          <div className="h-full min-h-[280px] border-2 border-dashed border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-4 group-hover:border-[#c7d300]/50 transition-all cursor-pointer">
            <div className="p-4 bg-zinc-900 rounded-full text-zinc-600 group-hover:text-[#c7d300] transition-colors">
              <Plus size={32} />
            </div>
            <span className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest group-hover:text-zinc-300">Add New Version</span>
          </div>
        </Link>
      </div>
    </div>
  );
}