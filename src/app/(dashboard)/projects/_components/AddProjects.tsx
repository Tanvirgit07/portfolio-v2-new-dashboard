/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from 'react';
import { LayoutDashboard, ChevronRight, Save, Plus, Trash2, ImageIcon, Type, Code2, Hash, Globe, Loader2 } from "lucide-react";
import Link from 'next/link';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function AddProject() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [tags, setTags] = useState([""]);
  const [features, setFeatures] = useState([""]);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const mutation = useMutation({
    mutationFn: async (fd: FormData) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/project/createProject`, {
        method: "POST",
        body: fd,
      });
      if (!res.ok) throw new Error("Failed to create project");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success("Project published!");
      router.push("/dashboard/projects");
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData();
    if (thumbnail) fd.append("images", thumbnail);
    if (videoFile) fd.append("video", videoFile);

    const projectData = {
      title: form.title.value,
      category: form.category.value,
      links: [{ title: form.category.value, url: form.liveLink.value }],
      tags: tags.filter(t => t !== ""),
      description: features.filter(f => f !== ""),
      logicSnippet: form.logic.value,
      isActive: true,
    };

    fd.append("data", JSON.stringify(projectData));
    mutation.mutate(fd);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <nav className="flex items-center space-x-2 text-sm bg-[#212121]/30 w-fit px-5 py-2.5 rounded-full border border-zinc-800">
          <Link href="/dashboard" className="text-zinc-400 hover:text-[#c7d300] transition-colors flex items-center">
            <LayoutDashboard className="h-4 w-4 mr-2" /> Dashboard
          </Link>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          <span className="text-white font-semibold text-[12px] uppercase tracking-wide">Create New Project</span>
        </nav>
        <button disabled={mutation.isPending} className="flex items-center gap-2 bg-[#c7d300] text-black px-8 py-3 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(199,211,0,0.3)] transition-all">
          {mutation.isPending ? <Loader2 className="animate-spin h-5 w-5" /> : <Save className="h-5 w-5" />}
          Publish Project
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"><ImageIcon className="h-4 w-4" /> Thumbnail & Video</h3>
            <div className="space-y-4">
              <input type="file" accept="image/*" onChange={(e) => setThumbnail(e.target.files?.[0] || null)} className="text-xs text-zinc-500 file:bg-[#c7d300] file:border-0 file:px-3 file:py-1 file:rounded-lg file:mr-4" />
              <input type="file" accept="video/*" onChange={(e) => setVideoFile(e.target.files?.[0] || null)} className="text-xs text-zinc-500 file:bg-zinc-800 file:text-white file:border-0 file:px-3 file:py-1 file:rounded-lg file:mr-4" />
            </div>
          </section>

          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest flex items-center gap-2"><Hash className="h-4 w-4" /> Tags</h3>
              <button type="button" onClick={() => setTags([...tags, ""])} className="text-zinc-500 hover:text-[#c7d300]"><Plus className="h-4 w-4" /></button>
            </div>
            <div className="space-y-3">
              {tags.map((tag, i) => (
                <div key={i} className="flex gap-2">
                  <input type="text" value={tag} onChange={(e) => {const newTags = [...tags]; newTags[i] = e.target.value; setTags(newTags)}} placeholder="Next.js" className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-sm text-zinc-300 focus:border-[#c7d300] outline-none" />
                  <button type="button" onClick={() => setTags(tags.filter((_, idx) => idx !== i))} className="text-zinc-800 hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-8 space-y-6 shadow-xl">
            <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest flex items-center gap-2 border-b border-zinc-800 pb-4"><Type className="h-4 w-4" /> Essentials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Title</label>
                <input name="title" required type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 text-sm text-white focus:border-[#c7d300] outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Category</label>
                <select name="category" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 text-sm text-white focus:border-[#c7d300] outline-none appearance-none">
                  <option>Frontend</option><option>Fullstack</option><option>Mobile App</option>
                </select>
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider flex justify-between">Description <Plus onClick={() => setFeatures([...features, ""])} className="h-3 w-3 cursor-pointer"/></label>
              {features.map((feature, i) => (
                <textarea key={i} value={feature} onChange={(e) => {const f = [...features]; f[i] = e.target.value; setFeatures(f)}} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-sm text-zinc-400 focus:border-[#c7d300] outline-none" />
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"><Code2 className="h-4 w-4" /> Logic Snippet</h3>
              <textarea name="logic" className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-xs text-[#c7d300] font-mono focus:border-[#c7d300] outline-none min-h-[150px]" />
            </section>
            <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"><Globe className="h-4 w-4" /> Links</h3>
              <input name="liveLink" placeholder="Live Project URL" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-sm text-zinc-300 mb-4 focus:border-[#c7d300] outline-none" />
              <input name="sourceLink" placeholder="GitHub URL" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-sm text-zinc-300 focus:border-[#c7d300] outline-none" />
            </section>
          </div>
        </div>
      </div>
    </form>
  );
}