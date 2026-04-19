"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye, Zap, Target, Info, Palette } from "lucide-react";

// ১. ডামি ডাটা (আপনার স্কিল অবজেক্ট ফরম্যাট অনুযায়ী)
const skillData = {
  name: "React JS",
  icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-12 7 14.6 12.3 14.6 18.7 0 6.4-3.3 13.7-13.9 18.7-1.3.6-2.9 1.3-4.9 2.3z"/></g></svg>`,
  color: "#61DAFB",
  tooltip:
    "React JS — UI বিল্ডিং এর জন্য সবচেয়ে জনপ্রিয় JavaScript লাইব্রেরি।",
  level: 82,
};

export function ViewRecruiterModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-3 bg-zinc-900 text-zinc-500 hover:text-[#c7d300] hover:bg-[#c7d300]/10 rounded-xl border border-zinc-800 transition-all">
          <Eye className="h-5 w-5" />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[550px] bg-[#15160e] text-white border-zinc-800 overflow-hidden shadow-2xl">
        {/* টপ ডেকোরেশন লাইন */}
        <div
          className="absolute top-0 left-0 w-full h-1.5"
          style={{ backgroundColor: skillData.color }}
        />

        <DialogHeader className="pt-4 pb-2">
          <DialogTitle className="text-2xl font-black flex items-center gap-3 tracking-tighter italic">
            <Zap className="h-6 w-6" style={{ color: skillData.color }} />
            SKILL <span className="text-[#c7d300]">DETAILS</span>
          </DialogTitle>
          <DialogDescription className="text-zinc-500 font-medium">
            Full technical breakdown for {skillData.name}.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* প্রোফাইল বা আইকন সেকশন */}
          <div className="flex flex-col items-center justify-center p-8 bg-zinc-900/40 rounded-3xl border border-zinc-800/50 relative">
            <div
              className="absolute inset-0 opacity-10 blur-[50px] rounded-full"
              style={{ backgroundColor: skillData.color }}
            />
            <div
              className="relative w-24 h-24 mb-4 transition-transform hover:scale-110 duration-500"
              dangerouslySetInnerHTML={{ __html: skillData.icon }}
            />
            <h3 className="text-3xl font-bold tracking-tight text-white">
              {skillData.name}
            </h3>
            <span
              className="mt-2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border"
              style={{
                borderColor: `${skillData.color}40`,
                color: skillData.color,
              }}
            >
              Technology Stack
            </span>
          </div>

          {/* ডিটেইলস গ্রিড */}
          <div className="grid grid-cols-1 gap-4">
            {/* Proficiency Progress */}
            <div className="p-4 bg-zinc-900/60 rounded-2xl border border-zinc-800 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                  <Target className="h-3 w-3" /> Proficiency Level
                </span>
                <span
                  className="font-mono text-sm font-bold"
                  style={{ color: skillData.color }}
                >
                  {skillData.level}%
                </span>
              </div>
              <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${skillData.level}%`,
                    backgroundColor: skillData.color,
                    boxShadow: `0 0 10px ${skillData.color}50`,
                  }}
                />
              </div>
            </div>

            {/* Description / Tooltip */}
            <div className="p-4 bg-zinc-900/60 rounded-2xl border border-zinc-800 space-y-2">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <Info className="h-3 w-3" /> Description
              </span>
              <p className="text-sm text-zinc-400 leading-relaxed italic">
                {skillData.tooltip}
              </p>
            </div>

            {/* Color Config */}
            <div className="flex items-center justify-between p-4 bg-zinc-900/60 rounded-2xl border border-zinc-800">
              <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                <Palette className="h-3 w-3" /> Brand Color
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-300">
                  {skillData.color}
                </span>
                <div
                  className="h-4 w-4 rounded-md border border-white/10"
                  style={{ backgroundColor: skillData.color }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ফুটার */}
        <div className="flex justify-center border-t border-zinc-800/50 pt-4 pb-2">
          <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-[0.3em]">
            Tanvir Ahmmed • Web Architect
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
