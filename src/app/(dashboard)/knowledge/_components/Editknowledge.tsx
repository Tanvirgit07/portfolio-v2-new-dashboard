/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useState } from 'react'
import { 
  LayoutDashboard, ChevronRight, Save, Plus, Trash2, 
  Image as ImageIcon, Code2, Link as Type, 
} from "lucide-react"
import Link from 'next/link'

export default function Editknowledge() {
  const [images, setImages] = useState([""]);

  const addField = (setter: any, prev: any[]) => setter([...prev, ""]);
  const removeField = (setter: any, prev: any[], i: number) => setter(prev.filter((_, idx) => idx !== i));

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
          <span className="text-white font-semibold tracking-wide text-[12px] uppercase">New Insight</span>
        </nav>

        <button className="flex items-center gap-2 bg-[#c7d300] text-black px-8 py-3 rounded-xl font-bold text-base hover:shadow-[0_0_20px_rgba(199,211,0,0.3)] transition-all">
          <Save className="h-5 w-5" /> Save Insight
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Config & Media */}
        <div className="space-y-6">
          <section className="bg-[#1a1b14] border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-[#c7d300] text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-2">
              <ImageIcon className="h-4 w-4" /> Thumbnail & Video
            </h3>
            <div className="space-y-4">
              <div className="aspect-video relative rounded-2xl border-2 border-dashed border-zinc-800 flex flex-col items-center justify-center bg-black group hover:border-[#c7d300] transition-all cursor-pointer">
                <Plus className="text-zinc-600 group-hover:text-[#c7d300]" />
                <span className="text-[10px] text-zinc-500 font-bold uppercase mt-2">Main Thumbnail</span>
              </div>
              <input type="text" placeholder="YouTube Embed URL (Optional)" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:border-[#c7d300] outline-none" />
            </div>
          </section>

          <section className="bg-[#1a1b14] border border-zinc-800 rounded-3xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#c7d300] text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <ImageIcon className="h-4 w-4" /> Gallery Images
              </h3>
              <button onClick={() => addField(setImages, images)} className="text-[#c7d300]"><Plus size={16}/></button>
            </div>
            <div className="space-y-3">
              {images.map((_, i) => (
                <div key={i} className="flex gap-2">
                  <input type="text" placeholder="Image URL" className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:border-[#c7d300] outline-none" />
                  <button onClick={() => removeField(setImages, images, i)} className="text-red-500"><Trash2 size={16}/></button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right: Content & Logic */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-[#1a1b14] border border-zinc-800 rounded-3xl p-8 space-y-6">
            <h3 className="text-[#c7d300] text-xs font-black uppercase tracking-widest flex items-center gap-2 border-b border-zinc-800 pb-4">
              <Type className="h-4 w-4" /> Content Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold uppercase">Post Title</label>
                <input type="text" placeholder="Title of your insight..." className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 text-sm text-white focus:border-[#c7d300] outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold uppercase">Category</label>
                <select className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 text-sm text-white focus:border-[#c7d300] outline-none appearance-none">
                  <option>Blog</option>
                  <option>Logic</option>
                  <option>Problem Solving</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] text-zinc-500 font-bold uppercase">Short Description</label>
              <textarea rows={2} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-sm text-zinc-400 focus:border-[#c7d300] outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] text-zinc-500 font-bold uppercase">Full Content (Markdown/Text)</label>
              <textarea rows={6} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-sm text-zinc-400 focus:border-[#c7d300] outline-none" />
            </div>
          </section>

          <section className="bg-[#1a1b14] border border-zinc-800 rounded-3xl p-8 space-y-6">
             <div className="flex items-center gap-2 text-[#c7d300] text-xs font-black uppercase tracking-widest">
                <Code2 size={16} /> Implementation Logic (Code Snippet)
             </div>
             <textarea rows={5} placeholder="Paste your code or logic here..." className="w-full bg-black border border-zinc-800 rounded-2xl p-6 text-xs text-[#c7d300] font-mono focus:border-[#c7d300] outline-none" />
          </section>
        </div>
      </div>
    </div>
  )
}