/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useState } from 'react'
import { 
  LayoutDashboard, 
  ChevronRight, 
  Save, 
  Plus, 
  Trash2, 
  ImageIcon,
  Type,
  Code2,
  Layers,
  Hash,
  Globe
} from "lucide-react"
import Link from 'next/link'

function AddProject() {
  const [tags, setTags] = useState([""]);
  const [features, setFeatures] = useState([""]); // description paragraphs হিসেবে ব্যবহার করতে পারেন

  const addField = (setter: any, prev: any[], newItem: any) => setter([...prev, newItem]);
  const removeField = (setter: any, prev: any[], index: number) => setter(prev.filter((_, i) => i !== index));

  return (
    <div className="space-y-8 pb-10">
      {/* Header Section - Same as your About layout */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <nav className="flex items-center space-x-2 text-sm bg-[#212121]/30 w-fit px-5 py-2.5 rounded-full border border-zinc-800">
          <Link href="/dashboard" className="flex items-center text-zinc-400 hover:text-[#c7d300] transition-colors">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          <div className="flex items-center">
            <span className="text-white font-semibold tracking-wide text-[12px] uppercase">Create New Project</span>
            <span className="ml-2 h-1.5 w-1.5 rounded-full bg-[#c7d300]"></span>
          </div>
        </nav>

        <button className="flex items-center gap-2 bg-[#c7d300] text-black px-8 py-3 rounded-xl font-bold text-base hover:shadow-[0_0_20px_rgba(199,211,0,0.3)] transition-all">
          <Save className="h-5 w-5" />
          Publish Project
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Media & Tech Stack (Tags) */}
        <div className="space-y-6">
          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <ImageIcon className="h-4 w-4" /> Project Thumbnail
            </h3>
            <div className="group relative w-full aspect-video rounded-xl border-2 border-dashed border-zinc-800 flex flex-col items-center justify-center cursor-pointer hover:border-[#c7d300] transition-all bg-zinc-900/30">
              <Plus className="h-8 w-8 text-zinc-600 group-hover:text-[#c7d300]" />
              <p className="text-[10px] text-zinc-500 mt-2 font-bold uppercase tracking-tighter">Upload High-Res Cover</p>
            </div>
          </section>

          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Hash className="h-4 w-4" /> Tech Stack / Tags
              </h3>
              <button onClick={() => addField(setTags, tags, "")} className="text-zinc-500 hover:text-[#c7d300] transition-colors">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-3">
              {tags.map((tag, i) => (
                <div key={i} className="flex gap-2 group">
                  <input type="text" placeholder="e.g. Next.js" className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-sm text-zinc-300 focus:border-[#c7d300] outline-none transition-all" />
                  <button onClick={() => removeField(setTags, tags, i)} className="text-zinc-800 hover:text-red-500 transition-colors opacity-50 hover:opacity-100">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Project Details & Code */}
        <div className="lg:col-span-2 space-y-6">
          {/* Main Info */}
          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-8 space-y-6 shadow-xl">
            <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest flex items-center gap-2 border-b border-zinc-800 pb-4">
              <Type className="h-4 w-4" /> Project Essentials
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Project Title</label>
                <input type="text" placeholder="e.g. Eco-Smart Dashboard" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 text-sm text-white focus:border-[#c7d300] outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Category</label>
                <div className="relative">
                  <select className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 text-sm text-white focus:border-[#c7d300] outline-none appearance-none cursor-pointer">
                    <option>Development</option>
                    <option>AI / ML</option>
                    <option>UI/UX Design</option>
                    <option>Web3</option>
                  </select>
                  <Layers className="absolute right-4 top-3.5 h-4 w-4 text-zinc-600 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Project Description</label>
                <button onClick={() => addField(setFeatures, features, "")} className="text-[#c7d300] text-xs font-bold flex items-center gap-1 hover:underline">
                  <Plus className="h-3 w-3" /> New Paragraph
                </button>
              </div>
              {features.map((feature, i) => (
                <div key={i} className="relative group">
                  <textarea rows={3} placeholder={`Paragraph ${i + 1} - Details about the project...`} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-sm text-zinc-400 focus:border-[#c7d300] outline-none resize-none transition-all" />
                  {i > 0 && (
                    <button onClick={() => removeField(setFeatures, features, i)} className="absolute -right-2 -top-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      <Trash2 className="h-3 w-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Logic Snippet & Live Link */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-6 shadow-xl flex flex-col">
              <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Code2 className="h-4 w-4" /> Logic Snippet
              </h3>
              <textarea 
                placeholder="const logic = () => { ... }" 
                className="flex-1 w-full bg-black border border-zinc-800 rounded-xl p-4 text-xs text-[#c7d300] font-mono focus:border-[#c7d300] outline-none resize-none min-h-[150px]" 
              />
            </section>

            <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Globe className="h-4 w-4" /> External Links
              </h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[9px] text-zinc-600 font-bold uppercase">Live Project URL</label>
                  <input type="text" placeholder="https://example.com" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-sm text-zinc-300 focus:border-[#c7d300] outline-none transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] text-zinc-600 font-bold uppercase">Source Code (Optional)</label>
                  <input type="text" placeholder="https://github.com/..." className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-sm text-zinc-300 focus:border-[#c7d300] outline-none transition-all" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProject