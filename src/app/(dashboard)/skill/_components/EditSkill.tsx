"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  ChevronRight,
  Save,
  Zap,
  Type,
  Palette,
  Target,
  Info,
  Code,
} from "lucide-react";
import Link from "next/link";

export default function EditSkill() {
  // স্টেট ম্যানেজমেন্ট
  const [skillColor, setSkillColor] = useState("#c7d300");
  const [proficiency, setProficiency] = useState(80);

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
          <Link href="/dashboard/skills" className="text-zinc-400 hover:text-[#c7d300]">Skills</Link>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          <div className="flex items-center">
            <span className="text-white font-semibold tracking-wide text-[12px] uppercase">Add New Skill</span>
            <span className="ml-2 h-1.5 w-1.5 rounded-full bg-[#c7d300]"></span>
          </div>
        </nav>

        <button className="flex items-center gap-2 bg-[#c7d300] text-black px-8 py-3 rounded-xl font-bold text-base hover:shadow-[0_0_20px_rgba(199,211,0,0.3)] transition-all">
          <Save className="h-5 w-5" />
          Save Skill
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Icon & Preview */}
        <div className="space-y-6">
          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <Code className="h-4 w-4" /> SVG Icon Code
            </h3>
            <div className="space-y-4">
              <textarea
                rows={8}
                placeholder='<svg>...</svg>'
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-xs font-mono text-zinc-400 focus:border-[#c7d300] outline-none resize-none"
              />
              <p className="text-[10px] text-zinc-500 italic">
                * Paste the SVG code here. It will be rendered as the skill icon.
              </p>
            </div>
          </section>

          {/* Color Picker Section */}
          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <Palette className="h-4 w-4" /> Theme Color
            </h3>
            <div className="flex items-center gap-4">
              <input
                type="color"
                value={skillColor}
                onChange={(e) => setSkillColor(e.target.value)}
                className="h-12 w-12 rounded-lg bg-transparent border border-zinc-800 cursor-pointer"
              />
              <input
                type="text"
                value={skillColor}
                onChange={(e) => setSkillColor(e.target.value)}
                className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-sm font-mono text-white focus:border-[#c7d300] outline-none"
              />
            </div>
          </section>
        </div>

        {/* Right Column: Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-8 space-y-8">
            <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest flex items-center gap-2 border-b border-zinc-800 pb-4">
              <Zap className="h-4 w-4" /> Skill Identification
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Type className="h-3.5 w-3.5" /> Skill Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Next.js"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 text-sm text-white focus:border-[#c7d300] outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Target className="h-3.5 w-3.5" /> Proficiency ({proficiency}%)
                </label>
                <div className="flex items-center gap-4 py-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={proficiency}
                    onChange={(e) => setProficiency(parseInt(e.target.value))}
                    className="flex-1 accent-[#c7d300] h-1.5 bg-zinc-800 rounded-full appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider flex items-center gap-2">
                <Info className="h-3.5 w-3.5" /> Short Description / Tooltip
              </label>
              <input
                type="text"
                placeholder="e.g. Next.js — The React Framework for the Web."
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 text-sm text-white focus:border-[#c7d300] outline-none transition-all"
              />
            </div>
          </section>

          {/* Tips Section */}
          <div className="bg-[#c7d300]/5 border border-[#c7d300]/20 rounded-2xl p-6">
            <div className="flex gap-4">
               <div className="h-10 w-10 rounded-full bg-[#c7d300]/10 flex items-center justify-center flex-shrink-0 text-[#c7d300]">
                  <Info className="h-5 w-5" />
               </div>
               <div>
                  <h4 className="text-sm font-bold text-white mb-1">Expert Tip</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed italic">
                    Use high-quality SVG icons and specific theme colors to make your portfolio look professional. 
                    The tooltip text should be concise (max 80-100 characters).
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}