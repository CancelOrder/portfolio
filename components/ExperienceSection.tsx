"use client"

import { useState, useEffect } from "react"
import { inter } from "@/app/fonts"
import { Badge } from "@/components/ui/badge"
import { LanguageTabs } from "./LanguageTabs"

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

// Content in different languages
const content = {
  vi: {
    intro: "Trong quá trình làm việc, tôi đã có cơ hội tham gia vào nhiều dự án thuộc các lĩnh vực sáng tạo và kỹ thuật, qua đó tích lũy được kinh nghiệm trong việc phát triển các sản phẩm số mang tính ứng dụng cao.",
    experiences: [
      {
        title: "Frontend Developer & UX/UI Designer",
        company: "Oryza System",
        period: "2024",
        description:
          "Tham gia thiết kế và phát triển giao diện người dùng cho các sản phẩm web, tập trung vào tối ưu trải nghiệm người dùng và đảm bảo tính nhất quán trong thiết kế. Thực hiện chuyển đổi thiết kế từ bản vẽ thành giao diện thực tế và hỗ trợ tối ưu hoá hiệu suất frontend.",
        technologies: ["React", "Next.js", "TypeScript", "Figma", "MUI5"],
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
        technologies: ["Adobe Creative Suite"],
      },
    ],
  },
  en: {
    intro: "Throughout my career, I've had the opportunity to participate in various projects across creative and technical fields, accumulating experience in developing highly applicable digital products.",
    experiences: [
      {
        title: "Frontend Developer & UX/UI Designer",
        company: "Oryza System",
        period: "2024",
        description:
          "Involved in designing and developing user interfaces for web products, focusing on optimizing user experience and ensuring design consistency. Implemented design conversions from mockups to actual interfaces and supported frontend performance optimization.",
        technologies: ["React", "Next.js", "TypeScript", "Figma", "MUI5"],
      },
      {
        title: "Media Specialist",
        company: "Smile Eyelash Manufacturer",
        period: "2022 - 2024",
        description:
          "Created media content, designed advertising materials, and developed branding. Combined design, communication, and technology skills to support marketing strategies and digital platform operations, including the smilelash.vn website. Worked in a hybrid model (offline and online).",
        technologies: ["Adobe Photoshop", "Illustrator", "Premiere", "Frontend website"],
      },
      {
        title: "Media Designer & Communication Manager",
        company: "NFT Project (Confidential)",
        period: "2023 (6 months)",
        description:
          "Responsible for brand image design and communication management for an NFT project. Built brand identity for NFT collections, created promotional content, developed strategic communication plans to attract participants and NFT enthusiasts, and supported the development team in building and growing the platform.",
        technologies: ["Figma", "Adobe Illustrator", "After Effects", "Adobe Photoshop", "Social Media Strategy", "Branding"],
      },
      {
        title: "Freelance Designer",
        company: "International Clients",
        period: "2022 - 2024",
        description:
          "Provided graphic design services to various international clients, including logo design projects, media publications, website user interfaces, and online communication strategies across platforms.",
        technologies: ["Adobe Creative Suite"],
      },
    ],
  },
  ko: {
    intro: "경력 전반에 걸쳐 창의적이고 기술적인 분야의 다양한 프로젝트에 참여할 기회가 있었으며, 이를 통해 고도로 적용 가능한 디지털 제품을 개발하는 경험을 쌓았습니다.",
    experiences: [
      {
        title: "프론트엔드 개발자 & UX/UI 디자이너",
        company: "Oryza System",
        period: "2024",
        description:
          "웹 제품의 사용자 인터페이스 설계 및 개발에 참여하여 사용자 경험 최적화 및 디자인 일관성 보장에 중점을 두었습니다. 모형에서 실제 인터페이스로의 디자인 변환을 구현하고 프론트엔드 성능 최적화를 지원했습니다.",
        technologies: ["React", "Next.js", "TypeScript", "Figma", "MUI5"],
      },
      {
        title: "미디어 전문가",
        company: "Smile Eyelash Manufacturer",
        period: "2022 - 2024",
        description:
          "미디어 콘텐츠 제작, 광고 자료 디자인 및 브랜딩 개발을 담당했습니다. smilelash.vn 웹사이트를 포함한 마케팅 전략 및 디지털 플랫폼 운영을 지원하기 위해 디자인, 커뮤니케이션 및 기술 기술을 결합했습니다. 하이브리드 모델(오프라인 및 온라인)로 근무했습니다.",
        technologies: ["Adobe Photoshop", "Illustrator", "Premiere", "Frontend website"],
      },
      {
        title: "미디어 디자이너 & 커뮤니케이션 매니저",
        company: "NFT 프로젝트 (기밀)",
        period: "2023 (6개월)",
        description:
          "NFT 프로젝트의 브랜드 이미지 디자인 및 커뮤니케이션 관리를 담당했습니다. NFT 컬렉션의 브랜드 아이덴티티 구축, 프로모션 콘텐츠 제작, 참가자와 NFT 애호가를 유치하기 위한 전략적 커뮤니케이션 계획 개발, 그리고 플랫폼 구축 및 성장에 개발팀 지원을 제공했습니다.",
        technologies: ["Figma", "Adobe Illustrator", "After Effects", "Adobe Photoshop", "Social Media Strategy", "Branding"],
      },
      {
        title: "프리랜서 디자이너",
        company: "국제 클라이언트",
        period: "2022 - 2024",
        description:
          "다양한 국제 클라이언트에게 로고 디자인 프로젝트, 미디어 출판물, 웹사이트 사용자 인터페이스 및 플랫폼 전반의 온라인 커뮤니케이션 전략을 포함한 그래픽 디자인 서비스를 제공했습니다.",
        technologies: ["Adobe Creative Suite"],
      },
    ],
  },
}

interface ExperienceSectionProps {
  language: string;  // Changed to use prop language directly
  onLanguageChange: (language: string) => void;  // Pass handler from parent
}

export default function ExperienceSection({ language, onLanguageChange }: ExperienceSectionProps) {
  const text = content[language as keyof typeof content];

  return (
    <div className={`${inter.className} pl-6`}>
      <p className="text-white/60 max-w-2xl mb-16">
        {text.intro}
      </p>

      <div>
        {text.experiences.map((exp, index) => (
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
