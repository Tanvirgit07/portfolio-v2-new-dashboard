"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  ChevronRight,
  Plus,
  ExternalLink,
  Edit2,
  Video,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Shadcn Table Components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DeleteModule } from "@/components/DeleteModule";

// আপডেটেড ডামি ডাটা (নতুন ফিল্ড সহ)
const initialProjects = [
  {
    id: "PROJ-001",
    title: "Eco-Smart Dashboard",
    category: "Development",
    stack: ["Next.js", "Tailwind", "Prisma"],
    date: "12 Oct, 2025",
    priority: "High",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    status: "Published",
    liveLink: "https://example.com",
  },
  {
    id: "PROJ-002",
    title: "AI Image Generator",
    category: "AI / ML",
    stack: ["React", "OpenAI", "Cloudinary"],
    date: "05 Nov, 2025",
    priority: "Medium",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    status: "Draft",
    liveLink: "https://example.com",
  },
];

export default function ProjectsList() {
  const [projects] = useState(initialProjects);

  return (
    <div className="space-y-6">
      {/* Header & Navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <nav className="flex items-center space-x-2 text-sm bg-[#212121]/30 w-fit px-4 py-2 rounded-full border border-zinc-800">
          <Link href="/dashboard" className="flex items-center text-zinc-400 hover:text-[#c7d300] transition-colors">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            <span>Dashboard</span>
          </Link>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          <span className="text-white font-bold uppercase text-[11px] tracking-wider">Project Management</span>
        </nav>

        <Link href="/projects/add-project">
          <button className="flex items-center gap-2 bg-[#c7d300] text-black px-6 py-3 rounded-xl font-bold text-base hover:shadow-[0_0_20px_rgba(199,211,0,0.2)] transition-all">
            <Plus className="h-5 w-5" />
            Add New Project
          </button>
        </Link>
      </div>

      {/* Projects Table Container */}
      <div className="rounded-[1.5rem] border border-zinc-800 bg-[#1a1b14] overflow-hidden shadow-2xl">
        <Table>
          <TableHeader className="bg-zinc-900/50">
            <TableRow className="border-zinc-800 hover:bg-transparent">
              <TableHead className="w-[280px] text-zinc-400 font-bold uppercase text-[10px] tracking-widest py-5 px-6">Project Info</TableHead>
              <TableHead className="text-zinc-400 font-bold uppercase text-[10px] tracking-widest hidden lg:table-cell">Stack</TableHead>
              <TableHead className="text-zinc-400 font-bold uppercase text-[10px] tracking-widest hidden md:table-cell">Launch Date</TableHead>
              <TableHead className="text-zinc-400 font-bold uppercase text-[10px] tracking-widest">Priority</TableHead>
              <TableHead className="text-zinc-400 font-bold uppercase text-[10px] tracking-widest">Status</TableHead>
              <TableHead className="text-right text-zinc-400 font-bold uppercase text-[10px] tracking-widest px-8">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id} className="border-zinc-800 hover:bg-white/[0.02] transition-all duration-300 group">
                
                {/* 1. Project Info */}
                <TableCell className="py-5 px-6">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-16 rounded-lg overflow-hidden border border-zinc-800 shrink-0 group-hover:border-[#c7d300]/30 transition-colors">
                      <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-sm tracking-tight group-hover:text-[#c7d300] transition-colors">{project.title}</span>
                      <span className="text-[#c7d300]/60 text-[9px] font-black uppercase tracking-tighter">{project.category}</span>
                    </div>
                  </div>
                </TableCell>

                {/* 2. Tech Stack */}
                <TableCell className="hidden lg:table-cell">
                  <div className="flex flex-wrap gap-1 max-w-[150px]">
                    {project.stack.map((s, idx) => (
                      <span key={idx} className="text-[9px] text-zinc-500 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </TableCell>

                {/* 3. Date */}
                <TableCell className="hidden md:table-cell">
                  <div className="flex items-center text-zinc-400 gap-2">
                    <Calendar size={14} className="text-zinc-600" />
                    <span className="text-xs font-medium">{project.date}</span>
                  </div>
                </TableCell>

                {/* 4. Priority */}
                <TableCell>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-md border ${
                    project.priority === "High" 
                    ? "text-orange-500 border-orange-500/20 bg-orange-500/5" 
                    : "text-blue-500 border-blue-500/20 bg-blue-500/5"
                  }`}>
                    {project.priority}
                  </span>
                </TableCell>

                {/* 5. Status */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className={`h-1.5 w-1.5 rounded-full ${project.status === "Published" ? "bg-[#c7d300] shadow-[0_0_8px_#c7d300]" : "bg-zinc-600"}`} />
                    <span className="text-zinc-300 text-[10px] font-black uppercase tracking-tight">{project.status}</span>
                  </div>
                </TableCell>

                {/* 6. Actions */}
                <TableCell className="py-4 pr-8 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-zinc-900/50 text-zinc-500 hover:text-[#c7d300] hover:bg-[#c7d300]/10 rounded-xl border border-zinc-800 transition-all duration-300" title="Live Preview">
                      <ExternalLink size={16} />
                    </a>
                    <button className="p-2.5 bg-zinc-900/50 text-zinc-500 hover:text-[#c7d300] hover:bg-[#c7d300]/10 rounded-xl border border-zinc-800 transition-all duration-300" title="Video Preview">
                      <Video size={16} />
                    </button>
                    <Link href={`/projects/edit-project/${project.id}`}>
                      <button className="p-2.5 bg-zinc-900/50 text-zinc-500 hover:text-[#c7d300] hover:bg-[#c7d300]/10 rounded-xl border border-zinc-800 transition-all duration-300" title="Edit">
                        <Edit2 size={16} />
                      </button>
                    </Link>
                    <div className="hover:scale-105 transition-transform duration-200">
                       <DeleteModule />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Table Footer */}
        <div className="p-4 bg-zinc-900/30 border-t border-zinc-800 flex justify-between items-center">
          <p className="text-[9px] text-zinc-600 font-black uppercase tracking-[0.4em] italic">
            Total Projects: {projects.length}
          </p>
          <div className="flex items-center gap-2">
             <div className="h-1 w-12 rounded-full bg-zinc-800" />
             <div className="h-1 w-4 rounded-full bg-[#c7d300]" />
          </div>
        </div>
      </div>
    </div>
  );
}