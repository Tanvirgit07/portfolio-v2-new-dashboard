import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import {  
  FolderGit2, 
  BookOpenText,  
  ArrowUpRight,
  Circle,
  BarChart3,
  Clock
} from "lucide-react"

// Updated Projects Dummy Data with Priority and Timeline
const recentProjects = [
  { name: "E-commerce Platform", tech: "Next.js", status: "Live", priority: "High", updated: "2h ago" },
  { name: "Portfolio Website", tech: "React", status: "In Progress", priority: "Medium", updated: "1d ago" },
  { name: "Task Management App", tech: "Node.js", status: "Live", priority: "High", updated: "3d ago" },
  { name: "AI Chat Interface", tech: "OpenAI", status: "Review", priority: "Low", updated: "1w ago" },
  { name: "Weather Dashboard", tech: "React", status: "Live", priority: "Medium", updated: "2w ago" }
]

// Recent Blogs Dummy Data
const recentBlogs = [
  { title: "Mastering Tailwind CSS", category: "Frontend", views: "1.2k", status: "Published" },
  { title: "Next.js 14 Server Actions", category: "Web Dev", views: "850", status: "Draft" },
  { title: "Why I use Shadcn UI", category: "UI/UX", views: "2.1k", status: "Published" },
  { title: "State Management in 2024", category: "React", views: "500", status: "Published" },
  { title: "Optimizing Performance", category: "Performance", views: "1.5k", status: "Published" }
]

function Blogandproject() {
  return (
    <div className="space-y-10 mt-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Recent Projects Table */}
          <Card className="bg-[#212121] border-zinc-800/60 shadow-2xl overflow-hidden border-t-2 border-t-[#c7d300]/20">
            <CardHeader className="flex flex-row items-center justify-between bg-zinc-800/20 py-6 px-8 border-b border-zinc-800/50">
              <CardTitle className="text-xl font-bold text-white flex items-center tracking-tight">
                <FolderGit2 className="mr-3 h-6 w-6 text-[#c7d300]" /> Recent Projects
              </CardTitle>
              <div className="p-2 hover:bg-zinc-800 rounded-full transition-colors cursor-pointer group">
                <ArrowUpRight className="h-5 w-5 text-zinc-500 group-hover:text-[#c7d300]" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-zinc-900/40">
                  <TableRow className="border-zinc-800 hover:bg-transparent">
                    <TableHead className="text-zinc-400 py-3 pl-8 font-semibold uppercase text-xs tracking-wider">Project</TableHead>
                    <TableHead className="text-zinc-400 py-3 font-semibold uppercase text-xs tracking-wider">Priority</TableHead>
                    <TableHead className="text-zinc-400 py-3 font-semibold uppercase text-xs tracking-wider">Status</TableHead>
                    <TableHead className="text-zinc-400 py-3 pr-8 font-semibold uppercase text-xs tracking-wider text-right">Updated</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentProjects.map((project, i) => (
                    <TableRow key={i} className="border-zinc-800/40 hover:bg-[#c7d300]/5 transition-all duration-300 group">
                      <TableCell className="py-3 pl-8">
                        <div className="font-semibold text-zinc-100 text-base group-hover:text-[#c7d300] transition-colors">{project.name}</div>
                        <div className="text-xs text-zinc-500 mt-1">{project.tech}</div>
                      </TableCell>
                      <TableCell className="py-3">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                          project.priority === 'High' ? 'border-red-900/50 text-red-400 bg-red-900/10' : 
                          project.priority === 'Medium' ? 'border-amber-900/50 text-amber-400 bg-amber-900/10' : 
                          'border-zinc-700 text-zinc-400 bg-zinc-800/50'
                        }`}>
                          {project.priority}
                        </span>
                      </TableCell>
                      <TableCell className="py-3">
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-tighter ${
                          project.status === 'Live' ? 'bg-[#c7d300]/10 text-[#c7d300]' : 'bg-zinc-800/80 text-zinc-500'
                        }`}>
                          <Circle className={`h-2 w-2 mr-2 fill-current ${project.status === 'Live' ? 'animate-pulse' : ''}`} /> 
                          {project.status}
                        </span>
                      </TableCell>
                      <TableCell className="py-3 pr-8 text-right">
                        <div className="flex items-center justify-end text-zinc-500 text-xs font-mono">
                          <Clock className="h-3 w-3 mr-1.5 text-zinc-600" />
                          {project.updated}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Recent Blogs Table */}
          <Card className="bg-[#212121] border-zinc-800/60 shadow-2xl overflow-hidden border-t-2 border-t-[#c7d300]/20">
            <CardHeader className="flex flex-row items-center justify-between bg-zinc-800/20 py-6 px-8 border-b border-zinc-800/50">
              <CardTitle className="text-xl font-bold text-white flex items-center tracking-tight">
                <BookOpenText className="mr-3 h-6 w-6 text-[#c7d300]" /> Recent Blogs
              </CardTitle>
              <div className="p-2 hover:bg-zinc-800 rounded-full transition-colors cursor-pointer group">
                <ArrowUpRight className="h-5 w-5 text-zinc-500 group-hover:text-[#c7d300]" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-zinc-900/40">
                  <TableRow className="border-zinc-800 hover:bg-transparent">
                    <TableHead className="text-zinc-400 py-3 pl-8 font-semibold uppercase text-xs tracking-wider">Blog Title</TableHead>
                    <TableHead className="text-zinc-400 py-3 font-semibold uppercase text-xs tracking-wider">Category</TableHead>
                    <TableHead className="text-zinc-400 py-3 pr-8 text-right font-semibold uppercase text-xs tracking-wider">Engagement</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentBlogs.map((blog, i) => (
                    <TableRow key={i} className="border-zinc-800/40 hover:bg-[#c7d300]/5 transition-all duration-300 group">
                      <TableCell className="py-3 pl-8">
                        <div className="font-semibold text-zinc-100 text-base group-hover:text-[#c7d300] transition-colors truncate max-w-[200px]">
                          {blog.title}
                        </div>
                        <div className="text-[10px] text-zinc-600 mt-1 uppercase tracking-widest">{blog.status}</div>
                      </TableCell>
                      <TableCell className="py-3">
                        <span className="text-[#c7d300] text-xs font-bold bg-[#c7d300]/5 px-2 py-1 rounded border border-[#c7d300]/10">
                          {blog.category}
                        </span>
                      </TableCell>
                      <TableCell className="py-3 pr-8 text-right">
                        <div className="flex items-center justify-end text-zinc-400 font-mono text-sm">
                          <BarChart3 className="h-3.5 w-3.5 mr-2 text-zinc-600" />
                          {blog.views}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}

export default Blogandproject