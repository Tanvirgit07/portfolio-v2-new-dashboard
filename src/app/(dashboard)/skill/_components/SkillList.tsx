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
import {
  LayoutDashboard,
  ChevronRight,
  Plus,
  Zap,
  Edit as EditIcon,
} from "lucide-react";
import Link from "next/link";
import { DeleteModule } from "@/components/DeleteModule";
import { ViewSkill } from "./ViewSkill";

// ডামি ডাটা (আপনার SkillSection এর অবজেক্ট ফরম্যাট অনুযায়ী)
const initialSkills = [
  {
    id: "skill-1",
    name: "HTML",
    icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/></svg>`,
    color: "#E44D26",
    tooltip: "HyperText Markup Language — ওয়েবের মূল কাঠামো তৈরিতে ব্যবহৃত।",
    level: 95,
  },
  {
    id: "skill-2",
    name: "React JS",
    icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-12 7 14.6 12.3 14.6 18.7 0 6.4-3.3 13.7-13.9 18.7-1.3.6-2.9 1.3-4.9 2.3z"/></g></svg>`,
    color: "#61DAFB",
    tooltip:
      "React JS — UI বিল্ডিং এর জন্য সবচেয়ে জনপ্রিয় JavaScript লাইব্রেরি।",
    level: 82,
  },
  {
    id: "skill-3",
    name: "JavaScript",
    icon: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.921-6.885 2.797-8.913 5.322-5.938 7-4.979 20.265 2.595 25.854 6.29 4.76 15.405 5.843 16.573 11.622 1.228 7.051-5.542 9.316-11.366 8.583-4.628-.881-7.26-3.505-10.056-8.07l-9.476 5.481c1.152 2.506 2.319 3.603 4.121 5.879 8.832 9.909 30.512 9.412 38.939-0.13 4.543-4.57 5.507-11.206 4.304-17.071h.001zm-39.909 13.895c-2.935 0-5.12-1.032-6.84-2.978l-9.45 5.482c3.239 5.154 8.085 8.132 16.245 8.132 9.297 0 17.317-4.938 18.104-13.698.438-4.976-1.379-8.937-5.279-12.168-3.623-3.03-8.233-4.561-11.685-6.904-2.917-1.957-4.041-3.946-3.617-6.353.565-3.143 3.885-4.374 6.695-3.735 2.167.498 3.759 1.865 4.938 3.955l9.151-5.494c-2.104-4.067-5.42-6.71-9.499-7.769-5.449-1.416-10.73-.449-14.629 3.228-5.455 5.11-6.07 13.671-1.35 19.394 2.784 3.36 7.266 5.261 11.014 7.547 3.097 1.875 4.758 4.152 4.198 6.841-.678 3.279-4.165 5.081-8 4.52l-.031-.001z"/></svg>`,
    color: "#F0DB4F",
    tooltip:
      "JavaScript — ওয়েবকে ইন্টারেক্টিভ ও ডায়নামিক করে তোলার মূল ভাষা।",
    level: 88,
  },
];

export default function SkillList() {
  const [skillsList, setSkillsList] = useState(initialSkills);

  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <nav className="flex items-center space-x-2 text-sm bg-[#212121]/30 w-fit px-5 py-2.5 rounded-full border border-zinc-800">
          <Link
            href="/dashboard"
            className="flex items-center text-zinc-400 hover:text-[#c7d300] transition-colors"
          >
            <LayoutDashboard className="h-4 w-4 mr-2" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          <div className="flex items-center">
            <span className="text-white font-semibold tracking-wide">
              Skills Inventory
            </span>
            <span className="ml-2 h-1.5 w-1.5 rounded-full bg-[#c7d300] animate-pulse"></span>
          </div>
        </nav>

        <Link href="/skill/add-skill">
          <button className="flex items-center gap-2 bg-[#c7d300] text-black px-6 py-3 rounded-xl font-bold text-base hover:bg-[#b0ba00] transition-all shadow-[0_0_20px_rgba(199,211,0,0.15)]">
            <Plus className="h-5 w-5" />
            Add New Skill
          </button>
        </Link>
      </div>

      {/* Skills Table Card */}
      <Card className="bg-[#212121] border-zinc-800/60 shadow-2xl overflow-hidden border-t-2 border-t-[#c7d300]/20">
        <CardHeader className="bg-zinc-800/20 py-7 px-8 border-b border-zinc-800/50">
          <CardTitle className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <Zap className="text-[#c7d300] h-6 w-6" /> Technology Stack
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-zinc-900/60">
              <TableRow className="border-zinc-800 hover:bg-transparent">
                <TableHead className="text-zinc-400 py-6 pl-8 font-bold uppercase text-[10px] tracking-widest">
                  Icon
                </TableHead>
                <TableHead className="text-zinc-400 py-6 font-bold uppercase text-[10px] tracking-widest">
                  Skill Name
                </TableHead>
                <TableHead className="text-zinc-400 py-6 font-bold uppercase text-[10px] tracking-widest">
                  Proficiency
                </TableHead>
                <TableHead className="text-zinc-400 py-6 font-bold uppercase text-[10px] tracking-widest">
                  Theme Color
                </TableHead>
                <TableHead className="text-zinc-400 py-6 pr-8 text-right font-bold uppercase text-[10px] tracking-widest">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {skillsList.map((skill) => (
                <TableRow
                  key={skill.id}
                  className="border-zinc-800/40 hover:bg-[#c7d300]/5 transition-all duration-300 group"
                >
                  {/* Skill Icon SVG Preview */}
                  <TableCell className="py-6 pl-8">
                    <div
                      className="w-10 h-10 p-2 bg-zinc-900 rounded-lg border border-zinc-800 group-hover:border-[#c7d300]/30 transition-all"
                      dangerouslySetInnerHTML={{ __html: skill.icon }}
                    />
                  </TableCell>

                  {/* Skill Info */}
                  <TableCell className="py-6">
                    <div className="font-bold text-zinc-100 text-base group-hover:text-[#c7d300] transition-colors">
                      {skill.name}
                    </div>
                    <div className="text-[10px] text-zinc-500 mt-1 line-clamp-1 max-w-[200px]">
                      {skill.tooltip}
                    </div>
                  </TableCell>

                  {/* Proficiency Level Bar */}
                  <TableCell className="py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                          }}
                        />
                      </div>
                      <span className="text-xs font-mono text-zinc-400">
                        {skill.level}%
                      </span>
                    </div>
                  </TableCell>

                  {/* Hex Color Display */}
                  <TableCell className="py-6">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                      <span className="text-xs font-mono text-zinc-500 uppercase tracking-tighter">
                        {skill.color}
                      </span>
                    </div>
                  </TableCell>

                  {/* Actions */}
                  <TableCell className="py-6 pr-8 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <ViewSkill />
                      <Link href={`/skill/edit-skill/${skill.id}`}>
                        <button className="p-2.5 bg-zinc-900 text-zinc-500 hover:text-[#c7d300] hover:bg-[#c7d300]/10 rounded-xl border border-zinc-800 transition-all">
                          <EditIcon className="h-4.5 w-4.5" />
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

      {/* Summary Footer */}
      <div className="flex items-center gap-4 px-2">
        <div className="h-px flex-1 bg-zinc-800" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold">
          Total Skills: {skillsList.length}
        </span>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>
    </div>
  );
}
