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
import { Eye, CheckCircle2, XCircle, User, Briefcase, BarChart3, Link as LinkIcon } from "lucide-react";
import Image from "next/image";

// ১. ডামি ডেটা অবজেক্ট (সরাসরি কম্পোনেন্টের ভেতরে)
const aboutData = {
  id: "about-1",
  profileImage: "/images/tanvir.jpg",
  typewriterStrings: [
    "About Me",
    "Full Stack Developer",
    "Next.js Developer",
    "Problem Solver"
  ],
  titles: {
    line1: "Hey, I'm Tanvir Ahmmed 👋",
    line2: "Full Stack Developer"
  },
  description: [
    "I am a passionate Full Stack Developer focused on building modern, scalable, and production-ready web applications.",
    "My expertise includes Next.js, React, TypeScript, Node.js, Express, and database design.",
    "I follow clean architecture and performance optimization techniques to build maintainable products."
  ],
  stats: [
    { label: "YEARS OF EXPERIENCE", value: "4+" },
    { label: "PROJECTS COMPLETED", value: "30+" },
    { label: "INDUSTRIES WORKED", value: "5+" },
    { label: "CLIENTS SATISFIED", value: "20+" }
  ],
  cta: {
    text: "View Projects",
    link: "/projects"
  },
  isActive: true
};

export function ViewAbout() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-3 bg-zinc-900 text-zinc-500 hover:text-[#c7d300] hover:bg-[#c7d300]/10 rounded-xl border border-zinc-800 transition-all">
          <Eye className="h-5 w-5" />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] bg-[#15160e] text-white border-zinc-800 max-h-[90vh] overflow-y-auto shadow-2xl">
        <DialogHeader className="border-b border-zinc-800/50 pb-4">
          <DialogTitle className="text-xl font-bold text-[#c7d300] flex items-center gap-2">
            <User className="h-5 w-5" /> About Story Preview
          </DialogTitle>
          <DialogDescription className="text-zinc-400">
            Internal preview of the current About configuration.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 py-6">
          {/* Top Profile Section */}
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start bg-zinc-900/20 p-4 rounded-2xl border border-zinc-800/50">
            <div className="relative h-28 w-28 rounded-full overflow-hidden border-2 border-[#c7d300] shadow-[0_0_20px_rgba(199,211,0,0.15)] flex-shrink-0">
              <Image
                src={aboutData.profileImage}
                alt="Profile"
                fill
                className="object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.src = "https://placehold.co/400x400/212121/white?text=User";
                }}
              />
            </div>
            
            <div className="space-y-2 text-center md:text-left flex-1">
              <h3 className="text-2xl font-black text-zinc-100 tracking-tight">{aboutData.titles.line1}</h3>
              <p className="text-[#c7d300] text-sm font-bold flex items-center justify-center md:justify-start gap-2 uppercase tracking-widest">
                <Briefcase className="h-4 w-4" /> {aboutData.titles.line2}
              </p>
              <div className="flex flex-wrap gap-1.5 justify-center md:justify-start mt-3">
                {aboutData.typewriterStrings.map((str, i) => (
                  <span key={i} className="text-[9px] bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded text-zinc-400 font-mono uppercase">
                    {str}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Biography Paragraphs */}
          <div className="space-y-4">
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] border-l-2 border-[#c7d300] pl-2">
               Full Biography
            </span>
            <div className="space-y-4 px-1">
              {aboutData.description.map((para, index) => (
                <p key={index} className="text-sm text-zinc-400 leading-relaxed italic">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="space-y-4">
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] border-l-2 border-[#c7d300] pl-2">
              Professional Metrics
            </span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {aboutData.stats.map((stat, i) => (
                <div key={i} className="bg-[#1c1d14] p-3 rounded-xl border border-zinc-800 group hover:border-[#c7d300]/50 transition-colors">
                  <div className="text-lg font-black text-white group-hover:text-[#c7d300]">{stat.value}</div>
                  <div className="text-[8px] text-zinc-500 font-bold uppercase mt-1 leading-none">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-zinc-900/50 rounded-2xl border border-zinc-800 border-b-[#c7d300]/30 shadow-inner">
             <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                   <div className={`h-2 w-2 rounded-full ${aboutData.isActive ? 'bg-[#c7d300] shadow-[0_0_8px_#c7d300]' : 'bg-red-500'}`} />
                   <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Visibility:</span>
                </div>
                {aboutData.isActive ? (
                  <span className="text-emerald-500 text-[10px] font-black uppercase">Published</span>
                ) : (
                  <span className="text-red-500 text-[10px] font-black uppercase">Hidden</span>
                )}
             </div>
             
             <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-lg border border-zinc-800 text-[10px]">
               <LinkIcon className="h-3 w-3 text-[#c7d300]" />
               <span className="text-zinc-500 font-bold uppercase mr-1">CTA:</span>
               <span className="text-[#c7d300] font-black">{aboutData.cta.text}</span>
             </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}