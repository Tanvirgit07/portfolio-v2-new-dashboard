"use client"; // যদি Next.js App Router ব্যবহার করেন

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye, CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";

// ১. ডাটার জন্য ইন্টারফেস তৈরি (TS Error দূর করতে)
interface HeroData {
  id: number;
  heroImage: string;
  typingSequence: string[];
  titleLine1: string;
  titleLine2: string;
  isActive: boolean;
}

export function ViewHero() {
  // ডাটাতে টাইপ এসাইন করা হয়েছে
  const heroData: HeroData = {
    id: 1,
    heroImage: "/images/heroImage.png",
    typingSequence: ["Hello I'm Tanvir", "I am a Full Stack Developer"],
    titleLine1: "Full Stack Developer",
    titleLine2: "Based in Bangladesh",
    isActive: true,
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-3 bg-zinc-900 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-xl border border-zinc-800 transition-all">
          <Eye className="h-5 w-5" />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] bg-[#1a1a1a] text-white border-zinc-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#c7d300]">
            Hero Section Details
          </DialogTitle>
          <DialogDescription className="text-zinc-400">
            Preview of your current hero section configuration.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Hero Image Preview */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
              Background Preview
            </span>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900">
              <Image
                width={500}
                height={500}
                src={heroData.heroImage}
                alt="Hero Preview"
                className="w-full h-full object-cover"
                // ২. onError এর এরর ফিক্স করা হয়েছে
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.currentTarget;
                  target.src =
                    "https://placehold.co/600x400/212121/white?text=No+Image+Found";
                }}
              />
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                Typing Animation
              </span>
              <p className="text-sm bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                {heroData.typingSequence.join(" | ")}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  Title Line 1
                </span>
                <p className="text-sm text-zinc-200">{heroData.titleLine1}</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  Title Line 2
                </span>
                <p className="text-sm text-zinc-200">{heroData.titleLine2}</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg border border-zinc-800">
              <span className="text-sm font-medium">Status</span>
              {heroData.isActive ? (
                <div className="flex items-center gap-1.5 text-emerald-500 text-sm font-bold">
                  <CheckCircle2 className="h-4 w-4" /> Active
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-red-500 text-sm font-bold">
                  <XCircle className="h-4 w-4" /> Inactive
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
