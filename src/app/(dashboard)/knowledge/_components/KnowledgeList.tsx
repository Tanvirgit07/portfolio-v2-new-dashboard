"use client";

import React from "react";
import { 
  LayoutDashboard, ChevronRight, Plus, 
  Edit2, Search,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { DeleteModule } from "@/components/DeleteModule";
import { ViewKnowledge } from "./Viewknowledge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const dummyKnowledge = [
  {
    id: 101,
    category: "Logic",
    title: "Neural Interface Design System",
    date: "Oct 12, 2025",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400",
  },
  {
    id: 102,
    category: "Problem Solving",
    title: "Fluid Motion Physics in WebGL",
    date: "Nov 05, 2025",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400",
  }
];

export default function KnowledgeList() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <nav className="flex items-center space-x-2 text-sm bg-[#212121]/30 w-fit px-4 py-2 rounded-full border border-zinc-800">
          <Link href="/dashboard" className="flex items-center text-zinc-400 hover:text-[#c7d300] transition-colors">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            <span>Dashboard</span>
          </Link>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          <span className="text-white font-bold uppercase text-[11px] tracking-wider">Knowledge Hub</span>
        </nav>

        <Link href="/knowledge/add-knowledge">
          <button className="flex items-center gap-2 bg-[#c7d300] text-black px-6 py-3 rounded-xl font-bold text-base hover:shadow-[0_0_20px_rgba(199,211,0,0.2)] transition-all">
            <Plus className="h-5 w-5" /> Create Insight
          </button>
        </Link>
      </div>

      {/* Stats & Search */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
          <input 
            type="text" 
            placeholder="Search insights..." 
            className="w-full bg-[#1a1b14] border border-zinc-800 rounded-2xl py-3.5 pl-12 text-sm text-white focus:border-[#c7d300]/50 outline-none transition-all" 
          />
        </div>
        <div className="bg-[#1a1b14] border border-zinc-800 rounded-2xl px-6 py-3 flex items-center justify-between">
          <span className="text-zinc-500 text-xs font-bold uppercase">Total Posts</span>
          <span className="text-[#c7d300] font-black text-xl">24</span>
        </div>
      </div>

      {/* Shadcn Table Container */}
      <div className="rounded-[2rem] border border-zinc-800 bg-[#1a1b14] overflow-hidden">
        <Table>
          <TableHeader className="bg-zinc-900/50">
            <TableRow className="border-zinc-800 hover:bg-transparent">
              <TableHead className="px-6 py-5 text-zinc-400 font-bold uppercase text-[10px] tracking-widest">Insight Title</TableHead>
              <TableHead className="px-6 py-5 text-zinc-400 font-bold uppercase text-[10px] tracking-widest">Category</TableHead>
              <TableHead className="px-6 py-5 text-zinc-400 font-bold uppercase text-[10px] tracking-widest">Date</TableHead>
              <TableHead className="px-6 py-5 text-right text-zinc-400 font-bold uppercase text-[10px] tracking-widest">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyKnowledge.map((item) => (
              <TableRow key={item.id} className="border-zinc-800/50 hover:bg-white/[0.02] transition-colors group">
                <TableCell className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-20 rounded-lg overflow-hidden border border-zinc-800 shrink-0">
                      <Image 
                        src={item.thumbnail} 
                        alt={item.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                    <span className="text-white font-bold text-sm group-hover:text-[#c7d300] transition-colors line-clamp-1">
                      {item.title}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <Badge className="bg-[#c7d300]/10 text-[#c7d300] border-none text-[9px] uppercase font-black hover:bg-[#c7d300]/20">
                    {item.category}
                  </Badge>
                </TableCell>
                <TableCell className="px-6 py-4 text-zinc-500 text-xs font-medium whitespace-nowrap">
                  {item.date}
                </TableCell>
                <TableCell className="px-6 py-3">
                  <div className="flex justify-end gap-2">
                    <ViewKnowledge />
                    <Link href={`/knowledge/edit-knowledge/${item?.id}`}>
                      <button className="p-2.5 bg-zinc-900 text-zinc-500 hover:text-blue-400 rounded-xl border border-zinc-800 transition-all">
                        <Edit2 size={16} />
                      </button>
                    </Link>
                    <DeleteModule />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}