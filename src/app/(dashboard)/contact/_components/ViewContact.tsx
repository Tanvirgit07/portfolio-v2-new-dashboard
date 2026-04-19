"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Eye,
  Mail,
  User,
  Briefcase,
  MessageSquare,
  Calendar,
} from "lucide-react";

export function ViewContact() {
  // ডামি ডেটা
  const data = {
    id: "msg-01",
    name: "Tanvir Ahmmed",
    email: "tanvir@example.com",
    service: "Web Design",
    message: "I want to collaborate on a new Next.js project.",
    date: "18 April 2026",
    status: "new",
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-3 bg-zinc-900 text-zinc-500 hover:text-red-500 hover:bg-red-500/10 rounded-xl border border-zinc-800 transition-all">
          <Eye className="h-5 w-5" />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] bg-[#15160e] text-white border-zinc-800 p-0 overflow-hidden shadow-2xl">
        {/* Top Accent Line */}
        <div className="h-1.5 w-full bg-[#c7d300] shadow-[0_0_15px_rgba(199,211,0,0.5)]" />

        <div className="p-6 md:p-8 space-y-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-white flex items-center gap-2 tracking-tighter uppercase">
              <Mail className="h-5 w-5 text-[#c7d300]" /> Inquiry{" "}
              <span className="text-[#c7d300]">Details</span>
            </DialogTitle>
            <DialogDescription className="text-zinc-500 flex items-center gap-2 pt-1 font-medium">
              <Calendar className="h-3.5 w-3.5" /> Received on {data.date}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            {/* Name & Service Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-[#c7d300] text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <User className="h-3 w-3" /> Sender Name
                </Label>
                <p className="font-bold text-sm text-zinc-200 bg-zinc-900/50 p-3 rounded-xl border border-zinc-800">
                  {data.name}
                </p>
              </div>
              <div className="space-y-2">
                <Label className="text-[#c7d300] text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Briefcase className="h-3 w-3" /> Service Type
                </Label>
                <p className="font-bold text-sm text-zinc-200 bg-zinc-900/50 p-3 rounded-xl border border-zinc-800">
                  {data.service}
                </p>
              </div>
            </div>

            {/* Email Row */}
            <div className="space-y-2">
              <Label className="text-[#c7d300] text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Mail className="h-3 w-3" /> Email Address
              </Label>
              <p className="font-medium text-sm text-zinc-300 bg-zinc-900/50 p-3 rounded-xl border border-zinc-800 select-all underline decoration-zinc-700 underline-offset-4">
                {data.email}
              </p>
            </div>

            {/* Message Row */}
            <div className="space-y-2">
              <Label className="text-[#c7d300] text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <MessageSquare className="h-3 w-3" /> Message Body
              </Label>
              <div className="text-sm leading-relaxed text-zinc-400 bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800 italic">
                {data.message}
              </div>
            </div>

            {/* Status Footer */}
            <div className="flex items-center justify-between p-4 bg-zinc-900/30 rounded-2xl border border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                  Visibility:
                </span>
                <span
                  className={`h-2 w-2 rounded-full ${data.status === "new" ? "bg-[#c7d300] animate-pulse shadow-[0_0_8px_#c7d300]" : "bg-zinc-600"}`}
                />
                <span
                  className={`text-[10px] font-black uppercase ${data.status === "new" ? "text-[#c7d300]" : "text-zinc-500"}`}
                >
                  {data.status === "new" ? "Unread / New" : "Read"}
                </span>
              </div>
            </div>
          </div>

          <DialogFooter className="pt-4 border-t border-zinc-800/50">
            <DialogClose asChild>
              <button className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold uppercase rounded-xl transition-all">
                Close
              </button>
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
