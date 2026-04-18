/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Eye,
  Tag,
  Code2,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";

const dummyPost = {
  title: "Neural Interface Design System",
  category: "Logic",
  date: "Oct 12, 2025",
  description:
    "A deep dive into building a design system for neural-link applications.",
  codeSnippet:
    "const cognitiveLoad = (data) => data.map(item => item.weight * 0.85);",
  thumbnail:
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200",
};

export function ViewKnowledge() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-2.5 bg-zinc-900 text-zinc-500 hover:text-blue-400 rounded-xl border border-zinc-800 transition-all">
                      <Eye size={16} />
                    </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] bg-[#0f100a] text-white border-zinc-800 p-0 overflow-hidden shadow-2xl">
        <div className="h-1.5 w-full bg-[#c7d300] shadow-[0_0_15px_#c7d300]" />

        <div className="p-8 space-y-8 max-h-[85vh] overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-[#c7d300] text-black text-[9px] font-black px-3 py-1 rounded uppercase tracking-tighter">
                {dummyPost.category}
              </span>
              <span className="text-zinc-600 text-xs font-mono">
                {dummyPost.date}
              </span>
            </div>
            <DialogTitle className="text-3xl font-black tracking-tighter leading-none text-white">
              {dummyPost.title}
            </DialogTitle>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-800">
            <Image
              fill
              src={dummyPost.thumbnail}
              alt=""
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2">
              <Tag size={12} className="text-[#c7d300]" /> Overview
            </h4>
            <p className="text-zinc-400 text-sm leading-relaxed italic border-l-2 border-[#c7d300] pl-4">
              {dummyPost.description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2">
              <Code2 size={12} className="text-[#c7d300]" /> Logic Snippet
            </h4>
            <pre className="bg-black p-6 rounded-2xl border border-zinc-800 text-[#c7d300] font-mono text-xs overflow-x-auto">
              <code>{dummyPost.codeSnippet}</code>
            </pre>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
