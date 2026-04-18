/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useState } from 'react'
import { 
  LayoutDashboard, 
  ChevronRight, 
  Save, 
  Plus, 
  Trash2, 
  Image as ImageIcon,
  Type,
  FileText,
  BarChart3,
  Link as LinkIcon
} from "lucide-react"
import Link from 'next/link'

function Editabout() {
  // ডেসক্রিপশন এবং স্ট্যাটাস ম্যানেজ করার জন্য স্টেট
  const [descriptions, setDescriptions] = useState([""]);
  const [stats, setStats] = useState([{ label: "", value: "" }]);
  const [typewriterStrings, setTypewriterStrings] = useState([""]);

  // হ্যান্ডলার ফাংশনসমূহ
  const addField = (setter: any, prev: any[], newItem: any) => setter([...prev, newItem]);
  const removeField = (setter: any, prev: any[], index: number) => setter(prev.filter((_, i) => i !== index));

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
          <div className="flex items-center">
            <span className="text-white font-semibold tracking-wide text-[12px] uppercase">Add New About</span>
            <span className="ml-2 h-1.5 w-1.5 rounded-full bg-[#c7d300]"></span>
          </div>
        </nav>

        <button className="flex items-center gap-2 bg-[#c7d300] text-black px-8 py-3 rounded-xl font-bold text-base hover:shadow-[0_0_20px_rgba(199,211,0,0.3)] transition-all">
          <Save className="h-5 w-5" />
          Publish Story
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Media & Typewriter */}
        <div className="space-y-6">
          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <ImageIcon className="h-4 w-4" /> Profile Media
            </h3>
            <div className="group relative w-full aspect-square rounded-xl border-2 border-dashed border-zinc-800 flex flex-col items-center justify-center cursor-pointer hover:border-[#c7d300] transition-all">
              <Plus className="h-8 w-8 text-zinc-600 group-hover:text-[#c7d300]" />
              <p className="text-[10px] text-zinc-500 mt-2 font-bold uppercase">Upload Profile Image</p>
            </div>
          </section>

          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Type className="h-4 w-4" /> Typewriter Strings
              </h3>
              <button onClick={() => addField(setTypewriterStrings, typewriterStrings, "")} className="text-zinc-500 hover:text-[#c7d300]"><Plus className="h-4 w-4" /></button>
            </div>
            <div className="space-y-3">
              {typewriterStrings.map((str, i) => (
                <div key={i} className="flex gap-2">
                  <input type="text" placeholder="e.g. Next.js Developer" className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-sm text-zinc-300 focus:border-[#c7d300] outline-none" />
                  <button onClick={() => removeField(setTypewriterStrings, typewriterStrings, i)} className="text-zinc-700 hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Content & Stats */}
        <div className="lg:col-span-2 space-y-6">
          {/* Titles & Description */}
          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-8 space-y-6">
            <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest flex items-center gap-2 border-b border-zinc-800 pb-4">
              <FileText className="h-4 w-4" /> Story Content
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Title Line 1</label>
                <input type="text" placeholder="Hey, I'm Tanvir 👋" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:border-[#c7d300] outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Title Line 2 (Sub-title)</label>
                <input type="text" placeholder="Full Stack Developer" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:border-[#c7d300] outline-none" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Biography Paragraphs</label>
                <button onClick={() => addField(setDescriptions, descriptions, "")} className="text-[#c7d300] text-xs font-bold flex items-center gap-1 hover:underline">
                  <Plus className="h-3 w-3" /> Add Paragraph
                </button>
              </div>
              {descriptions.map((desc, i) => (
                <div key={i} className="relative group">
                  <textarea rows={3} placeholder={`Paragraph ${i + 1}...`} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-sm text-zinc-400 focus:border-[#c7d300] outline-none resize-none transition-all" />
                  {i > 0 && (
                    <button onClick={() => removeField(setDescriptions, descriptions, i)} className="absolute -right-2 -top-2 bg-red-500/10 text-red-500 p-1 rounded-full border border-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Trash2 className="h-3 w-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Stats & CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" /> Statistics
                </h3>
                <button onClick={() => addField(setStats, stats, { label: "", value: "" })} className="text-zinc-500 hover:text-[#c7d300]"><Plus className="h-4 w-4" /></button>
              </div>
              <div className="space-y-3">
                {stats.map((stat, i) => (
                  <div key={i} className="flex gap-2">
                    <input type="text" placeholder="Value (e.g. 4+)" className="w-1/3 bg-zinc-900 border border-zinc-800 rounded-lg p-2 text-xs text-white focus:border-[#c7d300] outline-none font-bold" />
                    <input type="text" placeholder="Label (e.g. Years)" className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg p-2 text-xs text-zinc-400 focus:border-[#c7d300] outline-none" />
                    <button onClick={() => removeField(setStats, stats, i)} className="text-zinc-800 hover:text-red-500 transition-colors"><Trash2 className="h-4 w-4" /></button>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <LinkIcon className="h-4 w-4" /> Call to Action (CTA)
              </h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[9px] text-zinc-600 font-bold uppercase">Button Text</label>
                  <input type="text" placeholder="View Projects" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-sm text-zinc-300 focus:border-[#c7d300] outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] text-zinc-600 font-bold uppercase">Target Link</label>
                  <input type="text" placeholder="/projects" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-sm text-zinc-300 focus:border-[#c7d300] outline-none" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editabout