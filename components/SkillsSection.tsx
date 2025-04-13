import type React from "react"
import { inter } from "@/app/fonts"
import { Code, Palette, Layers, Monitor, Database, Figma, Camera, Film, Lightbulb, Cpu } from "lucide-react"

interface SkillCardProps {
  icon: React.ReactNode
  title: string
  skills: string[]
}

function SkillCard({ icon, title, skills }: SkillCardProps) {
  return (
    <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-white/80">{icon}</div>
        <h3 className="text-xl text-white/90 font-medium">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-white/60 text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      icon: <Palette size={24} />,
      title: "Design",
      skills: ["UI/UX Design", "Visual Design", "Brand Identity", "Typography", "Color Theory"],
    },

    {
      icon: <Palette size={24} />,
      title: "2D Graphic Design",
      skills: [
        "Social Media Post",
        "Poster Design",
        "Banner Design",
        "Brand Assets",
        "Digital Publications"
      ],
    },
    {
      icon: <Database size={24} />,
      title: "Backend & Data",
      skills: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"],
    },
    {
      icon: <Figma size={24} />,
      title: "Tools",
      skills: ["Figma", "Adobe Creative Suite", "VS Code", "Git", "Vercel"],
    },
    {
      icon: <Camera size={24} />,
      title: "Media",
      skills: ["Photography", "Video Editing", "Image Processing", "Content Creation"],
    },
    {
      icon: <Film size={24} />,
      title: "Video & Motion",
      skills: ["After Effects", "Premiere Pro", "Motion Design", "Capcut"],
    },

  ]

  return (
    <div className={`${inter.className}`}>
      <p className="text-white/60 max-w-2xl mb-12">
        Tôi chủ yếu làm về frontend và thiết kế 2D, ngoài ra cũng biết thêm vài kỹ năng khác nên khi tham gia dự án có thể linh hoạt làm nhiều phần, từ giao diện, thiết kế đến hỗ trợ mấy phần kỹ thuật liên quan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} icon={category.icon} title={category.title} skills={category.skills} />
        ))}
      </div>
    </div>
  )
}
