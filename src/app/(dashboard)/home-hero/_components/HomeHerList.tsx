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
import { Switch } from "@/components/ui/switch"; // Make sure Shadcn Switch is installed
import {
  LayoutDashboard,
  ChevronRight,
  Plus,
  Edit,
  Image as ImageIcon,
} from "lucide-react";
import Link from "next/link";
import { ViewHero } from "./ViewHero";
import { DeleteModule } from "@/components/DeleteModule";

const initialHeroData = [
  {
    id: 1,
    heroImage: "/images/heroImage.png",
    typingSequence: ["Hello I'm Tanvir", "I am a Full Stack Developer"],
    titleLine1: "Full Stack Developer",
    titleLine2: "Based in Bangladesh",
    isActive: true,
  },
  {
    id: 2,
    heroImage: "/images/hero_v2.png",
    typingSequence: ["Creative Designer", "UI/UX Expert"],
    titleLine1: "Creative Designer",
    titleLine2: "Based in Dhaka",
    isActive: false,
  },
];

function HomeHerList() {
  const [heroes, setHeroes] = useState(initialHeroData);

  const toggleStatus = (id: number) => {
    setHeroes(
      heroes.map((hero) =>
        hero.id === id ? { ...hero, isActive: !hero.isActive } : hero,
      ),
    );
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <nav className="flex items-center space-x-2 text-sm bg-[#212121]/30 w-fit px-5 py-2.5 rounded-full border border-zinc-800">
          <div className="flex items-center text-zinc-400 hover:text-[#c7d300] transition-colors cursor-pointer">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            <span className="font-medium">Dashboard</span>
          </div>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          <div className="flex items-center">
            <span className="text-white font-semibold tracking-wide">
              Hero Section
            </span>
            <span className="ml-2 h-1.5 w-1.5 rounded-full bg-[#c7d300] animate-pulse"></span>
          </div>
        </nav>

        <Link href="/home-hero/add-hero">
          <button className="flex items-center gap-2 bg-[#c7d300] text-black px-6 py-3 rounded-xl font-bold text-base hover:bg-[#b0ba00] transition-all shadow-[0_0_20px_rgba(199,211,0,0.15)]">
            <Plus className="h-5 w-5" />
            Add Hero
          </button>
        </Link>
      </div>

      {/* Hero Data Table */}
      <Card className="bg-[#212121] border-zinc-800/60 shadow-2xl overflow-hidden border-t-2 border-t-[#c7d300]/20">
        <CardHeader className="bg-zinc-800/20 py-7 px-8 border-b border-zinc-800/50">
          <CardTitle className="text-2xl font-bold text-white tracking-tight">
            Hero Content Management
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-zinc-900/60">
              <TableRow className="border-zinc-800 hover:bg-transparent">
                <TableHead className="text-zinc-400 py-6 pl-8 font-bold uppercase text-xs tracking-widest">
                  Preview
                </TableHead>
                <TableHead className="text-zinc-400 py-6 font-bold uppercase text-xs tracking-widest">
                  Main Content
                </TableHead>
                <TableHead className="text-zinc-400 py-6 font-bold uppercase text-xs tracking-widest">
                  Status & Toggle
                </TableHead>
                <TableHead className="text-zinc-400 py-6 pr-8 text-right font-bold uppercase text-xs tracking-widest">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {heroes.map((hero) => (
                <TableRow
                  key={hero.id}
                  className="border-zinc-800/40 hover:bg-[#c7d300]/5 transition-all duration-500 group"
                >
                  {/* Image Preview */}
                  <TableCell className="py-8 pl-8">
                    <div className="relative h-16 w-28 rounded-xl overflow-hidden border-2 border-zinc-800 bg-zinc-900 flex items-center justify-center group-hover:border-[#c7d300]/30 transition-all">
                      <ImageIcon className="h-6 w-6 text-zinc-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  </TableCell>

                  {/* Titles & Tags */}
                  <TableCell className="py-8">
                    <div className="font-bold text-zinc-100 text-lg group-hover:text-[#c7d300] transition-colors">
                      {hero.titleLine1}
                    </div>
                    <div className="text-sm text-zinc-500 mt-1 font-medium">
                      {hero.titleLine2}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {hero.typingSequence.map((text, i) => (
                        <span
                          key={i}
                          className="bg-zinc-900 text-zinc-400 text-[11px] px-3 py-1 rounded-md border border-zinc-800 font-mono"
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
                        checked={hero.isActive}
                        onCheckedChange={() => toggleStatus(hero.id)}
                        className="data-[state=checked]:bg-[#c7d300]"
                      />
                      <span
                        className={`text-xs font-black uppercase tracking-widest ${
                          hero.isActive ? "text-[#c7d300]" : "text-zinc-600"
                        }`}
                      >
                        {hero.isActive ? "Enabled" : "Disabled"}
                      </span>
                    </div>
                  </TableCell>

                  {/* Action Buttons */}
                  <TableCell className="py-8 pr-8 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <ViewHero />
                      <Link href={`/home-hero/edit-hero/${hero?.id}`}>
                        <button className="p-3 bg-zinc-900 text-zinc-500 hover:text-[#c7d300] hover:bg-[#c7d300]/10 rounded-xl border border-zinc-800 transition-all">
                          <Edit className="h-5 w-5" />
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

export default HomeHerList;
