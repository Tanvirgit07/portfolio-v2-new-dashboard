"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  ChevronRight,
  Save,
  FileText,
  Link as LinkIcon,
  Zap,
  Tag,
  Info,
} from "lucide-react";
import Link from "next/link";

export default function AddResume() {
  const [formData, setFormData] = useState({
    title: "",
    version: "v1.0.0",
    resumeLink: "",
  });

  return (
    <div className="space-y-8 pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <nav className="flex items-center space-x-2 text-sm bg-[#212121]/30 w-fit px-5 py-2.5 rounded-full border border-zinc-800">
          <Link href="/dashboard" className="flex items-center text-zinc-400 hover:text-[#c7d300] transition-colors">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          <Link href="/dashboard/resume" className="text-zinc-400 hover:text-[#c7d300]">Resumes</Link>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          <div className="flex items-center">
            <span className="text-white font-semibold tracking-wide text-[12px] uppercase">Upload Version</span>
            <span className="ml-2 h-1.5 w-1.5 rounded-full bg-[#c7d300]"></span>
          </div>
        </nav>

        <button className="flex items-center gap-2 bg-[#c7d300] text-black px-8 py-3 rounded-xl font-bold text-base hover:shadow-[0_0_20px_rgba(199,211,0,0.3)] transition-all">
          <Save className="h-5 w-5" />
          Save to Vault
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Preview Card (Bold Style) */}
        <div className="space-y-6">
          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-8 relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#c7d300] opacity-5 blur-[50px] group-hover:opacity-10 transition-opacity" />
            
            <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
              <FileText className="h-4 w-4" /> Live Preview
            </h3>
            
            <div className="space-y-6">
              <div className="h-16 w-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-[#c7d300] shadow-inner">
                <FileText size={32} />
              </div>
              
              <div>
                <h2 className="text-white text-2xl font-black tracking-tighter uppercase break-words leading-none">
                  {formData.title || "Untitled Version"}
                </h2>
                <div className="mt-3 inline-block px-3 py-1 bg-[#c7d300]/10 border border-[#c7d300]/20 rounded-lg">
                   <span className="text-[#c7d300] font-mono text-xs font-bold">{formData.version}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/50">
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest italic">
                  Status: Ready to Deploy
                </p>
              </div>
            </div>
          </section>

          {/* Quick Info Box */}
          <div className="bg-[#c7d300]/5 border border-[#c7d300]/10 rounded-2xl p-6">
            <div className="flex gap-4">
              <Info className="text-[#c7d300] h-5 w-5 flex-shrink-0" />
              <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                Make sure the direct link is public. Once saved, you can toggle this version to be active on your main website.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Main Form Fields */}
        <div className="lg:col-span-2">
          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-8 space-y-8">
            <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest flex items-center gap-2 border-b border-zinc-800 pb-5">
              <Zap className="h-4 w-4" /> Version Configuration
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Title Input */}
              <div className="space-y-3">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                  <Tag className="h-3.5 w-3.5" /> Resume Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. MERN Stack Specialist"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-sm text-white focus:border-[#c7d300] outline-none transition-all shadow-sm"
                />
              </div>

              {/* Version Input */}
              <div className="space-y-3">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5" /> Version Number
                </label>
                <input
                  type="text"
                  value={formData.version}
                  onChange={(e) => setFormData({ ...formData, version: e.target.value })}
                  placeholder="v2.4.0_stable"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-sm font-mono text-white focus:border-[#c7d300] outline-none transition-all"
                />
              </div>
            </div>

            {/* URL Input */}
            <div className="space-y-3">
              <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                <LinkIcon className="h-3.5 w-3.5" /> Direct PDF Link (URL)
              </label>
              <div className="relative">
                <input
                  type="url"
                  value={formData.resumeLink}
                  onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                  placeholder="https://drive.google.com/..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 pl-12 text-sm text-white focus:border-[#c7d300] outline-none transition-all"
                />
                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
              </div>
              <p className="text-[9px] text-zinc-600 font-medium italic">
                * Cloud storage links (Google Drive, Dropbox, Cloudinary) are recommended.
              </p>
            </div>
            
            <div className="pt-4">
               <button className="w-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white py-4 rounded-xl border border-dashed border-zinc-700 hover:border-zinc-500 transition-all text-[10px] font-black uppercase tracking-[0.3em]">
                 Discard & Reset Form
               </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}