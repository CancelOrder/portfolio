"use client"

import type React from "react"

import { inter } from "@/app/fonts"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter } from "lucide-react"

// Đối tượng chứa bản dịch cho các ngôn ngữ
const translations = {
  vi: {
    contactMessage:
      "Mình luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo, hoặc cơ hội để trở thành một phần trong tầm nhìn của bạn. Hãy liên hệ với tôi các kênh mạng xã hội của tôi.",
  },
  en: {
    contactMessage:
      "I am always ready to discuss new projects, creative ideas, or the opportunity to be a part of your vision. Feel free to contact me through my social media channels.",
  },
  ko: {
    contactMessage:
      "저는 항상 새로운 프로젝트, 창의적인 아이디어 또는 비전의 일부가 될 기회를 논의할 준비가 되어 있습니다. 제 소셜 미디어 채널을 통해 언제든지 연락주세요.",
  },
}

interface ExperienceSectionProps {
  language: string;  // Ngôn ngữ được truyền vào từ component cha
  onLanguageChange: (language: string) => void;  // Hàm thay đổi ngôn ngữ được truyền từ component cha
}

export default function ContactSection({ language, onLanguageChange }: ExperienceSectionProps) {
  // Kiểm tra và chọn bản dịch hợp lệ hoặc sử dụng giá trị mặc định (tiếng Anh)
  const text = translations[language as keyof typeof translations] || translations.en;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Giả lập việc gửi form
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message sau 5 giây
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <div className={`${inter.className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          {/* Hiển thị nội dung dựa trên ngôn ngữ hiện tại */}
          <p className="text-white/60 mb-8">{text.contactMessage}</p>

          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4">
              <Mail size={20} className="text-white/50" />
              <a href="mailto:your.email@example.com" className="text-white/80 hover:text-white transition-colors">
                nvcnguyenn@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone size={20} className="text-white/50" />
              <a href="tel:+1234567890" className="text-white/80 hover:text-white transition-colors">
                +84 925370618
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MapPin size={20} className="text-white/50" />
              <span className="text-white/80">Bình Dương</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
