"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import {
  LayoutDashboard,
  ChevronRight,
  Plus,
  Image as
  User,
  Edit as EditIcon,
} from "lucide-react"; // ইমপোর্ট ফিক্স করা হয়েছে
import Link from "next/link";
import Image from "next/image";
import { DeleteModule } from "@/components/DeleteModule";
import { ViewAbout } from "./ViewAbot";

// টাইপ ইন্টারফেস (TypeScript Error ফিক্স করার জন্য)
interface AboutItem {
  id: string;
  profileImage: string;
  typewriterStrings: string[];
  titles: {
    line1: string;
    line2: string;
  };
  description: string[];
  stats: { label: string; value: string }[];
  cta: { text: string; link: string };
  isActive: boolean;
}

const initialAboutData: AboutItem[] = [
  {
    id: "about-1",
    profileImage: "/images/tanvir.jpg",
    typewriterStrings: ["About Me", "Full Stack Developer", "Next.js Developer", "Problem Solver"],
    titles: {
      line1: "Hey, I'm Tanvir Ahmmed 👋",
      line2: "Full Stack Developer"
    },
    description: [
      "I am a passionate Full Stack Developer focused on building modern web applications.",
      "My expertise includes Next.js, React, and TypeScript."
    ],
    stats: [
      { label: "YEARS OF EXPERIENCE", value: "4+" },
      { label: "PROJECTS COMPLETED", value: "30+" }
    ],
    cta: { text: "View Projects", link: "/projects" },
    isActive: true,
  },
  {
    id: "about-2",
    profileImage: "/images/dummy.jpg",
    typewriterStrings: ["Designer", "UX Expert"],
    titles: {
      line1: "Hello, I am John Doe",
      line2: "Product Designer"
    },
    description: ["Specialized in mobile app designs."],
    stats: [{ label: "AWARDS", value: "10" }],
    cta: { text: "Portfolio", link: "/portfolio" },
    isActive: false,
  }
];

function AboutList() {
  const [abouts, setAbouts] = useState<AboutItem[]>(initialAboutData);

  const toggleStatus = (id: string) => {
    setAbouts((prevAbouts) =>
      prevAbouts.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  return (
    <div className="space-y-8 p-4 md:p-0">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <nav className="flex items-center space-x-2 text-sm bg-[#212121]/30 w-fit px-5 py-2.5 rounded-full border border-zinc-800">
          <Link href="/dashboard" className="flex items-center text-zinc-400 hover:text-[#c7d300] transition-colors">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          <div className="flex items-center">
            <span className="text-white font-semibold tracking-wide">About Section</span>
            <span className="ml-2 h-1.5 w-1.5 rounded-full bg-[#c7d300] animate-pulse"></span>
          </div>
        </nav>

        <Link href="/about/add-about">
          <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#c7d300] text-black px-6 py-3 rounded-xl font-bold text-base hover:bg-[#b0ba00] transition-all shadow-[0_0_20px_rgba(199,211,0,0.15)]">
            <Plus className="h-5 w-5" />
            Add About Story
          </button>
        </Link>
      </div>

      {/* About Data Table */}
      <Card className="bg-[#212121] border-zinc-800/60 shadow-2xl overflow-hidden border-t-2 border-t-[#c7d300]/20">
        <CardHeader className="bg-zinc-800/20 py-7 px-8 border-b border-zinc-800/50">
          <CardTitle className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <User className="text-[#c7d300] h-6 w-6" /> About Section Management
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <Table>
            <TableHeader className="bg-zinc-900/60">
              <TableRow className="border-zinc-800 hover:bg-transparent">
                <TableHead className="text-zinc-400 py-6 pl-8 font-bold uppercase text-xs tracking-widest">Profile</TableHead>
                <TableHead className="text-zinc-400 py-6 font-bold uppercase text-xs tracking-widest">Introduction</TableHead>
                <TableHead className="text-zinc-400 py-6 font-bold uppercase text-xs tracking-widest">Status</TableHead>
                <TableHead className="text-zinc-400 py-6 pr-8 text-right font-bold uppercase text-xs tracking-widest">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {abouts.map((item) => (
                <TableRow
                  key={item.id}
                  className="border-zinc-800/40 hover:bg-[#c7d300]/5 transition-all duration-500 group"
                >
                  {/* Profile Image Preview */}
                  <TableCell className="py-8 pl-8">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-900 group-hover:border-[#c7d300]/40 transition-all shadow-lg">
                       <Image 
                         src={item.profileImage} 
                         alt="Profile" 
                         fill 
                         className="object-cover"
                         sizes="64px"
                       />
                    </div>
                  </TableCell>

                  {/* About Content */}
                  <TableCell className="py-8">
                    <div className="font-bold text-zinc-100 text-lg group-hover:text-[#c7d300] transition-colors leading-tight">
                      {item.titles.line1}
                    </div>
                    <div className="text-sm text-zinc-500 mt-1 font-medium">
                      {item.titles.line2}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.typewriterStrings.map((text, i) => (
                        <span
                          key={i}
                          className="bg-zinc-900/80 text-zinc-400 text-[10px] px-2.5 py-1 rounded-full border border-zinc-800 font-medium uppercase tracking-tighter"
                        >
                          {text}
                        </span>
                      ))}
                    </div>
                  </TableCell>

                  {/* Status & Switch */}
                  <TableCell className="py-8">
                    <div className="flex items-center gap-4">
                      <Switch
                        checked={item.isActive}
                        onCheckedChange={() => toggleStatus(item.id)}
                        className="data-[state=checked]:bg-[#c7d300]"
                      />
                      <span
                        className={`text-[10px] font-black uppercase tracking-widest ${
                          item.isActive ? "text-[#c7d300]" : "text-zinc-600"
                        }`}
                      >
                        {item.isActive ? "Active" : "Hidden"}
                      </span>
                    </div>
                  </TableCell>

                  {/* Action Buttons */}
                  <TableCell className="py-8 pr-8 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <ViewAbout /> 
                      
                      <Link href={`/about/edit-about/${item.id}`}>
                        <button className="p-3 bg-zinc-900 text-zinc-500 hover:text-[#c7d300] hover:bg-[#c7d300]/10 rounded-xl border border-zinc-800 transition-all">
                          <EditIcon className="h-5 w-5" />
                        </button>
                      </Link>
                      
                      <DeleteModule />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default AboutList;