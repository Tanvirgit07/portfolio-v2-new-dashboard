/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  ChevronRight,
  Mail,
  MapPin,
  MessageSquare,
  Globe,
  Trash2,
  Clock
} from "lucide-react";
import Link from "next/link";
import { ViewContact } from "./ViewContact";
import { DeleteModule } from "@/components/DeleteModule";

// ডামি ডাটা: ওয়েবসাইট থেকে আসা মেসেজ
const initialMessages = [
  {
    id: "msg-01",
    name: "Tanvir Ahmmed",
    email: "tanvir@example.com",
    service: "Web Design",
    message: "I want to collaborate on a new Next.js project.",
    date: "18 April 2026",
    status: "new"
  },
  {
    id: "msg-02",
    name: "John Doe",
    email: "john@portfolio.com",
    service: "Others",
    message: "Can we hop on a call tomorrow?",
    date: "15 April 2026",
    status: "read"
  }
];

export default function ContactList() {
  const [messages, setMessages] = useState(initialMessages);

  return (
    <div className="space-y-10 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <nav className="flex items-center space-x-2 text-sm bg-[#212121]/30 w-fit px-5 py-2.5 rounded-full border border-zinc-800">
          <Link href="/dashboard" className="flex items-center text-zinc-400 hover:text-[#c7d300] transition-colors">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          <div className="flex items-center">
            <span className="text-white font-semibold tracking-wide uppercase text-[12px]">Inbox & Contact</span>
            <span className="ml-2 h-1.5 w-1.5 rounded-full bg-[#c7d300]"></span>
          </div>
        </nav>

        <Link href="/dashboard/contact/settings">
          <button className="flex items-center gap-2 bg-zinc-800 text-white px-6 py-3 rounded-xl font-bold text-sm border border-zinc-700 hover:border-[#c7d300] transition-all">
            <Globe className="h-4 w-4 text-[#c7d300]" />
            Update Public Info
          </button>
        </Link>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "New Messages", value: "01", icon: MessageSquare, color: "#c7d300" },
          { label: "Public Email", value: "Active", icon: Mail, color: "#4ade80" },
          { label: "Location Status", value: "Visible", icon: MapPin, color: "#60a5fa" },
        ].map((stat, i) => (
          <div key={i} className="bg-[#1a1b14] border border-zinc-800 p-6 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
              <h4 className="text-xl font-black text-white mt-1">{stat.value}</h4>
            </div>
            <stat.icon style={{ color: stat.color }} size={24} />
          </div>
        ))}
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        <h3 className="text-white font-bold text-lg flex items-center gap-2">
          <MessageSquare className="text-[#c7d300]" size={20} />
          Recent Inquiries
        </h3>
        
        <div className="bg-[#1a1b14] border border-zinc-800 rounded-3xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-zinc-900/50 border-b border-zinc-800 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Sender</th>
                <th className="px-6 py-4">Service Required</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {messages.map((msg) => (
                <tr key={msg.id} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-sm">{msg.name}</span>
                      <span className="text-zinc-500 text-[11px]">{msg.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-[#c7d300] text-[10px] font-bold rounded-lg uppercase">
                      {msg.service}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-zinc-500 text-xs">
                      <Clock size={12} /> {msg.date}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-3">
                       <ViewContact />
                      <DeleteModule />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}