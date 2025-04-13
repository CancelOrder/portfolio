import { inter } from "@/app/fonts"
import { Badge } from "@/components/ui/badge"

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

function ExperienceItem({ title, company, period, description, technologies }: ExperienceItemProps) {
  return (
    <div className="mb-16 relative">
      <div className="absolute left-0 top-0 w-1 h-full bg-white/10 -ml-6 hidden md:block"></div>
      <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-white/30 -ml-[0.9rem] hidden md:block"></div>

      <div className="flex flex-col md:flex-row justify-between mb-2">
        <h3 className="text-2xl text-white/90 font-medium">{title}</h3>
        <span className="text-white/50 text-sm">{period}</span>
      </div>

      <h4 className="text-white/70 text-lg mb-4">{company}</h4>

      <p className="text-white/60 mb-4 max-w-3xl">{description}</p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <Badge key={index} variant="outline" className="text-white/70 border-white/20">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Frontend Developer & UX/UI Designer",
      company: "Oryza System",
      period: "2024",
      description:
        "Tham gia thiết kế và phát triển giao diện người dùng cho các sản phẩm web, tập trung vào tối ưu trải nghiệm người dùng và đảm bảo tính nhất quán trong thiết kế. Thực hiện chuyển đổi thiết kế từ bản vẽ thành giao diện thực tế và hỗ trợ tối ưu hoá hiệu suất frontend.",
      technologies: ["React", "Next.js", "TypeScript", "Figma", "MUI5"]
    },
    {
      title: "Media Specialist",
      company: "Smile Eyelash Manufacturer",
      period: "2022 - 2024",
      description:
        "Thực hiện xây dựng nội dung truyền thông, thiết kế ấn phẩm quảng cáo và phát triển thương hiệu. Kết hợp giữa kỹ năng thiết kế, truyền thông và công nghệ để hỗ trợ chiến lược marketing cũng như vận hành nền tảng số của công ty, bao gồm cả website smilelash.vn. Làm việc hybrid (offline và online).",
      technologies: ["Adobe Photoshop", "Illustrator", "Premiere", "Frontend website"],
    },
    {
      title: "Media Designer & Communication Manager",
      company: "NFT Project (Confidential)",
      period: "2023 (6 tháng)",
      description:
        "Chịu trách nhiệm thiết kế hình ảnh thương hiệu và quản lý truyền thông cho dự án NFT. Xây dựng nhận diện thương hiệu cho các bộ sưu tập NFT, sáng tạo nội dung quảng bá, lên kế hoạch truyền thông chiến lược để thu hút người tham gia và cộng đồng yêu thích NFT, cũng như hỗ trợ đội ngũ phát triển xây dựng và phát triển nền tảng.",
      technologies: ["Figma", "Adobe Illustrator", "After Effects", "Adobe Photoshop", "Social Media Strategy", "Branding"],
    },
    {
      title: "Freelance Designer",
      company: "International Clients",
      period: "2022 - 2024",
      description:
        "Cung cấp dịch vụ thiết kế đồ họa cho nhiều khách hàng quốc tế, bao gồm các dự án thiết kế logo, ấn phẩm truyền thông, giao diện người dùng cho website, và các chiến lược truyền thông qua các nền tảng trực tuyến.",
      technologies: ["adobe creative suite"]
    }


  ]

  return (
    <div className={`${inter.className} pl-6`}>
      <p className="text-white/60 max-w-2xl mb-16">
        Trong quá trình làm việc, tôi đã có cơ hội tham gia vào nhiều dự án thuộc các lĩnh vực sáng tạo và kỹ thuật, qua đó tích lũy được kinh nghiệm trong việc phát triển các sản phẩm số mang tính ứng dụng cao.
      </p>

      <div>
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            company={exp.company}
            period={exp.period}
            description={exp.description}
            technologies={exp.technologies}
          />
        ))}
      </div>
    </div>
  )
}
