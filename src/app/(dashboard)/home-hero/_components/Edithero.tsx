"use client"
import React, { useRef } from "react"; // useRef ইমপোর্ট করা হয়েছে
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LayoutDashboard,
  ChevronRight,
  Save,
  X,
  Image as ImageIcon,
  Type,
  MousePointer2,
  Plus,
} from "lucide-react";

function Edithero() {
  // ফাইল ইনপুট ট্রিগার করার জন্য রেফারেন্স
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const cvInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    imageInputRef.current?.click();
  };

  const handleCVClick = () => {
    cvInputRef.current?.click();
  };

  return (
    <div className="space-y-8">
      {/* Header & Breadcrumb */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <nav className="flex items-center space-x-2 text-sm bg-[#212121]/30 w-fit px-5 py-2.5 rounded-full border border-zinc-800">
          <div className="flex items-center text-zinc-400 hover:text-[#c7d300] transition-colors cursor-pointer">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            <span className="font-medium">Dashboard</span>
          </div>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          <div className="flex items-center text-zinc-400 hover:text-[#c7d300] cursor-pointer">
            <span className="font-medium">Hero Section</span>
          </div>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          <div className="flex items-center">
            <span className="text-white font-semibold tracking-wide">
              Add New
            </span>
          </div>
        </nav>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-zinc-800 text-zinc-300 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-zinc-700 transition-all">
            <X className="h-4 w-4" />
            Cancel
          </button>
          <button className="flex items-center gap-2 bg-[#c7d300] text-black px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#b0ba00] transition-all shadow-[0_0_20px_rgba(199,211,0,0.2)]">
            <Save className="h-4 w-4" />
            Save Hero
          </button>
        </div>
      </div>

      {/* Main Form Body */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Image & Media */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#212121] border-zinc-800/60 shadow-xl overflow-hidden border-t-2 border-t-[#c7d300]/20">
            <CardHeader className="bg-zinc-800/20 py-5 px-6 border-b border-zinc-800/50">
              <CardTitle className="text-lg font-bold text-white flex items-center">
                <ImageIcon className="mr-2 h-5 w-5 text-[#c7d300]" /> Hero Media
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Hidden Input for Image */}
                <input
                  type="file"
                  ref={imageInputRef}
                  className="hidden"
                  accept="image/*"
                />

                <div
                  onClick={handleImageClick} // ক্লিক ইভেন্ট যোগ করা হয়েছে
                  className="w-full aspect-video rounded-xl border-2 border-dashed border-zinc-800 bg-zinc-900/50 flex flex-col items-center justify-center text-zinc-500 hover:border-[#c7d300]/40 transition-all cursor-pointer group"
                >
                  <div className="p-4 bg-zinc-800 rounded-full group-hover:scale-110 transition-transform">
                    <Plus className="h-6 w-6" />
                  </div>
                  <span className="mt-3 text-xs font-medium">
                    Upload Background Image
                  </span>
                  <span className="text-[10px] text-zinc-600 uppercase mt-1 tracking-widest">
                    Recommended: 1920x1080
                  </span>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    Overlay Opacity (%)
                  </label>
                  <input
                    type="number"
                    placeholder="20"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-[#c7d300]/50 transition-all"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Content & Buttons */}
        <div className="lg:col-span-2 space-y-6">
          {/* ... আগের Text Content কার্ডের কোড এখানে থাকবে (অপরিবর্তিত) ... */}
          <Card className="bg-[#212121] border-zinc-800/60 shadow-xl overflow-hidden border-t-2 border-t-[#c7d300]/20">
            <CardHeader className="bg-zinc-800/20 py-5 px-6 border-b border-zinc-800/50">
              <CardTitle className="text-lg font-bold text-white flex items-center">
                <Type className="mr-2 h-5 w-5 text-[#c7d300]" /> Text Content
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-3">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  Typing Animation Lines
                </label>
                <textarea
                  placeholder="I am Tanvir, I am a Developer"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-[#c7d300]/50 transition-all h-24"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    Title Line 1
                  </label>
                  <input
                    type="text"
                    placeholder="Full Stack Developer"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#c7d300]/50"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    Title Line 2
                  </label>
                  <input
                    type="text"
                    placeholder="Based in Bangladesh"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#c7d300]/50"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  Hero Description
                </label>
                <textarea
                  placeholder="Tell your story..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-[#c7d300]/50 transition-all h-32"
                />
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons Section */}
          <Card className="bg-[#212121] border-zinc-800/60 shadow-xl overflow-hidden border-t-2 border-t-[#c7d300]/20">
            <CardHeader className="bg-zinc-800/20 py-5 px-6 border-b border-zinc-800/50">
              <CardTitle className="text-lg font-bold text-white flex items-center">
                <MousePointer2 className="mr-2 h-5 w-5 text-[#c7d300]" /> CTA
                Buttons
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Primary Button (CV) */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-zinc-300 border-l-2 border-[#c7d300] pl-2 uppercase tracking-wide">
                  Primary Button (CV)
                </h4>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Button Text (e.g. Download CV)"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-sm text-white"
                  />

                  {/* Hidden Input for CV */}
                  <input
                    type="file"
                    ref={cvInputRef}
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                  />

                  <div
                    onClick={handleCVClick} // ক্লিক ইভেন্ট যোগ করা হয়েছে
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-sm text-zinc-500 flex justify-between items-center cursor-pointer hover:border-zinc-600 transition-all"
                  >
                    Upload CV File (PDF) <Plus className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Secondary Button (Video) */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-zinc-300 border-l-2 border-[#c7d300] pl-2 uppercase tracking-wide">
                  Secondary Button (Video)
                </h4>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Button Text (e.g. Watch Video)"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-sm text-white"
                  />
                  <input
                    type="text"
                    placeholder="Video URL Link"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-sm text-white"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Edithero;
