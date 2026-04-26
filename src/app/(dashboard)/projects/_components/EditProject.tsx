/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from 'react';
import { LayoutDashboard, ChevronRight, Save, Plus, Trash2, ImageIcon, Type, Code2, Hash, Globe, Loader2 } from "lucide-react";
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from 'sonner';
import Image from 'next/image';

export default function EditProject() {
  const { id } = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [tags, setTags] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const { data: projectData, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/project/getsingleproject/${id}`);
      const result = await res.json();
      return result.data;
    },
    enabled: !!id,
  });

  useEffect(() => {
    if (projectData) {
      setTags(projectData.tags);
      setFeatures(projectData.description);
    }
  }, [projectData]);

  const mutation = useMutation({
    mutationFn: async (fd: FormData) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/project/updateProject/${id}`, {
        method: "POST",
        body: fd,
      });
      if (!res.ok) throw new Error("Update failed");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success("Project updated!");
      router.push("/dashboard/projects");
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData();
    if (thumbnail) fd.append("images", thumbnail);

    const updateData = {
      title: form.title.value,
      category: form.category.value,
      links: [{ title: form.category.value, url: form.liveLink.value }],
      tags: tags,
      description: features,
      logicSnippet: form.logic.value,
      isActive: projectData.isActive,
    };

    fd.append("data", JSON.stringify(updateData));
    mutation.mutate(fd);
  };

  if (isLoading) return <div className="h-96 flex items-center justify-center"><Loader2 className="animate-spin text-[#c7d300]" /></div>;

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <nav className="flex items-center space-x-2 text-sm bg-[#212121]/30 w-fit px-5 py-2.5 rounded-full border border-zinc-800">
          <Link href="/dashboard" className="text-zinc-400 hover:text-[#c7d300] transition-colors flex items-center"><LayoutDashboard className="h-4 w-4 mr-2" /> Dashboard</Link>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          <span className="text-white font-semibold text-[12px] uppercase">Edit Project</span>
        </nav>
        <button disabled={mutation.isPending} className="flex items-center gap-2 bg-[#c7d300] text-black px-8 py-3 rounded-xl font-bold">
          {mutation.isPending ? <Loader2 className="animate-spin h-5 w-5" /> : <Save className="h-5 w-5" />}
          Update Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"><ImageIcon className="h-4 w-4" /> Media</h3>
            {projectData?.images[0] && <Image width={500}  height={500} src={projectData.images[0].url} alt='image' className="w-full aspect-video rounded-lg object-cover mb-4 border border-zinc-800" />}
            <input type="file" onChange={(e) => setThumbnail(e.target.files?.[0] || null)} className="text-xs text-zinc-500" />
          </section>

          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-6 shadow-xl">
             <div className="flex justify-between items-center mb-4">
              <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest flex items-center gap-2"><Hash className="h-4 w-4" /> Tags</h3>
              <button type="button" onClick={() => setTags([...tags, ""])} className="text-zinc-500 hover:text-[#c7d300]"><Plus className="h-4 w-4" /></button>
            </div>
            {tags.map((tag, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input type="text" value={tag} onChange={(e) => {const t = [...tags]; t[i] = e.target.value; setTags(t)}} className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg p-2 text-sm text-white" />
                <button type="button" onClick={() => setTags(tags.filter((_, idx) => idx !== i))}><Trash2 className="h-4 w-4 text-red-500" /></button>
              </div>
            ))}
          </section>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-8 space-y-6 shadow-xl">
            <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest flex items-center gap-2 border-b border-zinc-800 pb-4"><Type className="h-4 w-4" /> Essentials</h3>
            <div className="space-y-4">
              <label className="text-[10px] text-zinc-500 font-bold uppercase">Title</label>
              <input name="title" defaultValue={projectData?.title} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 text-sm text-white outline-none" />
              <label className="text-[10px] text-zinc-500 font-bold uppercase">Category</label>
              <input name="category" defaultValue={projectData?.category} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 text-sm text-white outline-none" />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] text-zinc-500 font-bold uppercase flex justify-between">Description <Plus onClick={() => setFeatures([...features, ""])} className="h-3 w-3 cursor-pointer"/></label>
              {features.map((f, i) => (
                <textarea key={i} value={f} onChange={(e) => {const feat = [...features]; feat[i] = e.target.value; setFeatures(feat)}} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-sm text-white outline-none min-h-[80px]" />
              ))}
            </div>
          </section>

          <section className="bg-[#212121] border border-zinc-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"><Code2 className="h-4 w-4" /> Logic Snippet</h3>
            <textarea name="logic" defaultValue={projectData?.logicSnippet} className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-xs text-[#c7d300] font-mono outline-none min-h-[150px]" />
            <h3 className="text-[#c7d300] text-xs font-bold uppercase tracking-widest my-4 flex items-center gap-2"><Globe className="h-4 w-4" /> Links</h3>
            <input name="liveLink" defaultValue={projectData?.links[0]?.url} placeholder="Live Link" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-sm text-white" />
          </section>
        </div>
      </div>
    </form>
  );
}