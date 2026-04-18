import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, FolderGit2, BookOpenText, ChevronRight, LayoutDashboard } from "lucide-react"

const statsData = [
  {
    title: "Skills",
    value: "15+",
    description: "Technologies & Frameworks",
    icon: <Code2 className="h-5 w-5" />,
    color: "text-[#c7d300]"
  },
  {
    title: "Projects",
    value: "08",
    description: "Completed & Live Projects",
    icon: <FolderGit2 className="h-5 w-5" />,
    color: "text-[#c7d300]"
  },
  {
    title: "Blogs",
    value: "12",
    description: "Technical Articles Posted",
    icon: <BookOpenText className="h-5 w-5" />,
    color: "text-[#c7d300]"
  }
]

function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div className="">
        {/* Breadcrumb Styled Header */}
        <nav className="flex items-center space-x-2 text-sm mb-8 bg-[#212121]/30 w-fit px-4 py-2 rounded-full border border-zinc-800">
          <div className="flex items-center text-zinc-400 hover:text-[#c7d300] transition-colors cursor-pointer">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            <span className="font-medium">Dashboard</span>
          </div>
          
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          
          <div className="flex items-center">
            <span className="text-white font-semibold tracking-wide">Overview</span>
            <span className="ml-2 h-1.5 w-1.5 rounded-full bg-[#c7d300] animate-pulse"></span>
          </div>
        </nav>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsData.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-[#212121] border-zinc-800/50 hover:border-[#c7d300]/40 transition-all duration-300 shadow-2xl group/card relative overflow-hidden"
            >
              {/* Decorative background glow on hover */}
              <div className="absolute -right-4 -top-4 h-24 w-24 bg-[#c7d300]/5 rounded-full blur-2xl group-hover/card:bg-[#c7d300]/10 transition-colors" />
              
              <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
                <CardTitle className="text-sm font-medium text-zinc-400 group-hover/card:text-zinc-300 transition-colors">
                  {stat.title}
                </CardTitle>
                <div className={`${stat.color} bg-[#c7d300]/10 p-2.5 rounded-xl`}>
                  {stat.icon}
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="text-4xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <p className="text-xs text-zinc-500 mt-1 font-medium italic">
                  {stat.description}
                </p>
                
                {/* Visual indicator with Lime Green glow */}
                <div className="mt-5 h-1.5 w-full bg-zinc-800/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#c7d300] shadow-[0_0_12px_#c7d300cc] transition-all duration-1000" 
                    style={{ width: index === 0 ? '85%' : index === 1 ? '70%' : '55%' }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardOverview