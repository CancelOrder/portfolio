"use client"

import type React from "react"

import { inter } from "@/app/fonts"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter } from "lucide-react"

export default function ContactSection() {
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <div className={`${inter.className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="text-white/60 mb-8">
            Mình luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo, hoặc cơ hội để trở thành một phần trong tầm nhìn của bạn. Hãy liên hệ với tôi các kênh mạng xã hội của tôi.
          </p>

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
