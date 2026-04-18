"use client"

import React, { useState } from 'react'
import { 
  LayoutDashboard, ChevronRight, Save, Plus, Trash2, 
  Briefcase, Calendar, MapPin, AlignLeft, Layout
} from "lucide-react"
import Link from 'next/link'

export default function AddExperience() {
  const [achievements, setAchievements] = useState([""]);

  const addField = () => setAchievements([...achievements, ""]);
  const removeField = (index: number) => setAchievements(achievements.filter((_, i) => i !== index));

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <nav className="flex items-center space-x-2 text-sm bg-[#212121]/30 w-fit px-5 py-2.5 rounded-full border border-zinc-800">
          <Link href="/dashboard" className="flex items-center text-zinc-400 hover:text-[#c7d300] transition-colors">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          <div className="flex items-center">
            <span className="text-white font-semibold tracking-wide text-[12px] uppercase">New Experience</span>
            <span className="ml-2 h-1.5 w-1.5 rounded-full bg-[#c7d300]"></span>
          </div>
        </nav>

        <button className="flex items-center gap-2 bg-[#c7d300] text-black px-8 py-3 rounded-xl font-bold text-base hover:shadow-[0_0_20px_rgba(199,211,0,0.3)] transition-all">
          <Save className="h-5 w-5" /> Publish Journey
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Timeline Config */}
        <div className="space-y-6">
          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <Layout className="h-4 w-4" /> Timeline Layout
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Display Side</label>
                <select className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 text-sm text-white focus:border-[#c7d300] outline-none appearance-none cursor-pointer">
                  <option value="left">Left Side</option>
                  <option value="right">Right Side</option>
                </select>
                <p className="text-[9px] text-zinc-600 italic mt-1">* Controls which side the card appears on desktop</p>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Duration / Date</label>
                <div className="relative">
                  <input type="text" placeholder="e.g. June 2020 - May 2021" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 pl-10 text-sm text-white focus:border-[#c7d300] outline-none" />
                  <Calendar className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-600" />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#c7d300]/5 border border-[#c7d300]/20 rounded-2xl p-6">
             <p className="text-zinc-400 text-[11px] leading-relaxed">
               <span className="text-[#c7d300] font-bold">Pro Tip:</span> alternate between Left and Right sides for a better looking vertical timeline.
             </p>
          </section>
        </div>

        {/* Right Column: Work Details */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-8 space-y-6 shadow-xl">
            <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest flex items-center gap-2 border-b border-zinc-800 pb-4">
              <Briefcase className="h-4 w-4" /> Role Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Job Role / Position</label>
                <input type="text" placeholder="e.g. Software Engineer" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 text-sm text-white focus:border-[#c7d300] outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Company / Platform</label>
                <div className="relative">
                  <input type="text" placeholder="e.g. Google, Pune" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 pl-10 text-sm text-white focus:border-[#c7d300] outline-none" />
                  <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-600" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Brief Description (Optional)</label>
              <textarea rows={2} placeholder="Short summary of your role..." className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-sm text-zinc-400 focus:border-[#c7d300] outline-none resize-none" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Key Achievements</label>
                <button onClick={addField} className="text-[#c7d300] text-xs font-bold flex items-center gap-1 hover:underline transition-all">
                  <Plus className="h-3 w-3" /> Add Point
                </button>
              </div>
              <div className="space-y-3">
                {achievements.map((_, i) => (
                  <div key={i} className="flex gap-3 group">
                    <div className="flex-1 relative">
                      <input type="text" placeholder={`Achievement ${i + 1}...`} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 pl-10 text-sm text-zinc-300 focus:border-[#c7d300] outline-none" />
                      <AlignLeft className="absolute left-3.5 top-4 h-3.5 w-3.5 text-zinc-700" />
                    </div>
                    {i > 0 && (
                      <button onClick={() => removeField(i)} className="p-3 bg-red-500/10 text-red-500 rounded-xl border border-red-500/20 hover:bg-red-500 hover:text-white transition-all">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}