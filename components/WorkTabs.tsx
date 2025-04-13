"use client"
import { cn } from "@/lib/utils"
import type React from "react"

import { ImageIcon, Flag, Shirt, PenTool, Palette, Layers, Sparkles, Shapes } from "lucide-react"

interface WorkTabsProps {
    categories: string[]
    activeCategory: string
    onCategoryChange: (category: string) => void
}

// Korean-inspired color palette
const categoryColors: Record<string, { bg: string; hover: string; icon: React.ElementType; gradient: string }> = {
    All: {
        bg: "bg-gradient-to-r from-purple-500/20 to-pink-500/20",
        hover: "from-purple-500/30 to-pink-500/30",
        icon: Sparkles,
        gradient: "from-purple-500 to-pink-500",
    },
    SocialPost: {
        bg: "bg-gradient-to-r from-blue-500/20 to-cyan-400/20",
        hover: "from-blue-500/30 to-cyan-400/30",
        icon: Flag,
        gradient: "from-blue-500 to-cyan-400",
    },
    Poster: {
        bg: "bg-gradient-to-r from-emerald-500/20 to-teal-400/20",
        hover: "from-emerald-500/30 to-teal-400/30",
        icon: ImageIcon,
        gradient: "from-emerald-500 to-teal-400",
    },
    BrandedMerchandise: {
        bg: "bg-gradient-to-r from-amber-500/20 to-orange-400/20",
        hover: "from-amber-500/30 to-orange-400/30",
        icon: Shapes,
        gradient: "from-amber-500 to-orange-400",
    },
    Shirt: {
        bg: "bg-gradient-to-r from-rose-500/20 to-pink-400/20",
        hover: "from-rose-500/30 to-pink-400/30",
        icon: Shirt,
        gradient: "from-rose-500 to-pink-400",
    },
    Art: {
        bg: "bg-gradient-to-r from-violet-500/20 to-purple-400/20",
        hover: "from-violet-500/30 to-purple-400/30",
        icon: PenTool,
        gradient: "from-violet-500 to-purple-400",
    },
    Design: {
        bg: "bg-gradient-to-r from-fuchsia-500/20 to-pink-400/20",
        hover: "from-fuchsia-500/30 to-pink-400/30",
        icon: Palette,
        gradient: "from-fuchsia-500 to-pink-400",
    },
    Catalog: {
        bg: "bg-gradient-to-r from-indigo-500/20 to-blue-400/20",
        hover: "from-indigo-500/30 to-blue-400/30",
        icon: Layers,
        gradient: "from-indigo-500 to-blue-400",
    },
}

export function WorkTabs({ categories, activeCategory, onCategoryChange }: WorkTabsProps) {
    return (
        <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((category) => {
                const categoryConfig = categoryColors[category] || categoryColors["All"]
                const IconComponent = categoryConfig.icon

                return (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={cn(
                            "px-6 py-3 rounded-full text-sm transition-all duration-300 flex items-center gap-2",
                            "border border-white/10 backdrop-blur-sm shadow-lg",
                            activeCategory === category
                                ? `${categoryConfig.bg} bg-opacity-30 text-white scale-105`
                                : "bg-white/5 text-white/70 hover:text-white hover:bg-gradient-to-r hover:scale-102",
                            `hover:${categoryConfig.hover}`,
                        )}
                    >
                        <div
                            className={cn(
                                "w-6 h-6 rounded-full flex items-center justify-center",
                                activeCategory === category ? `bg-gradient-to-r ${categoryConfig.gradient}` : "bg-white/10",
                            )}
                        >
                            <IconComponent size={14} className={activeCategory === category ? "text-white" : "text-white/70"} />
                        </div>
                        {category}
                    </button>
                )
            })}
        </div>
    )
}
