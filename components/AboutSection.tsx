import { ppEditorialNewUltralightItalic, inter } from "@/app/fonts"
import Link from "next/link"
import Image from "next/image"

interface AboutSectionProps {
  headerSize: number
  textSize: number
}

export default function AboutSection({ headerSize, textSize }: AboutSectionProps) {
  return (
    <div className="flex flex-col gap-12">
      {/* Profile Image */}
      <div className="flex gap-4">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/20">
          <Image src="./avt.jpg?height=128&width=128" alt="Your Profile" fill className="object-cover" />
        </div>

        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/20">
          <Image src="./avt2.jpg?height=128&width=128" alt="Friend 1" fill className="object-cover" />
        </div>

        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/20">
          <Image src="./avt3.jpg?height=128&width=128" alt="Friend 2" fill className="object-cover" />
        </div>
      </div>


      <h1
        className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter leading-[130%]`}
        style={{ fontSize: `${4 * headerSize}rem` }}
      >
        <span className="inline-flex items-center">
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Anatomical%20Heart.png"
            alt="Anatomical Heart"
            width="55"
            height="55"
            className="mr-2"
          />
          Chí Nguyên
        </span>
        <br />
        <span className="text-[32px] md:text-[70px] text-white/60">
          Web Developer & Graphic Designer
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Crossed%20Fingers.png"
            alt="Crossed Fingers"
            width="25"
            height="25"
            className="inline-block ml-2"
          />
        </span>

      </h1>


      <div
        className={`${inter.className} flex flex-col gap-8 text-white/50 text-sm font-light max-w-[500px]`}
        style={{ fontSize: `${0.875 * textSize}rem` }}
      >
        <div className="space-y-6">
          <div className="h-px bg-white/10 w-full" />
          <p className="text-lg text-white/70">
            Tôi là một dev đam mê công nghệ, yêu thích thiết kế, chuyên nghành của tôi Kỹ thuật Phần mềm.

          </p>
          <p>

            Mình có nền tảng vững chắc về lập trình web với JavaScript/TypeScript, đặc biệt có nhiều kinh nghiệm phát triển giao diện frontend bằng React và Next.js.

          </p>
          <p>
            Ngoài code, mình còn có hơn 2 năm kinh nghiệm làm việc hybrid cho một công ty trong lĩnh vực làm đẹp, chủ yếu tập trung vào thiết kế nội dung social media. Bên cạnh đó, mình cũng từng làm freelance thiết kế thương hiệu và các sản phẩm sáng tạo khác.

          </p>
          <p className="text-white/90">
            Dù không xuất thân từ ngành thiết kế, nhưng quãng thời gian “cày” Photoshop và Illustrator đã giúp mình rèn luyện con mắt thẩm mỹ tốt, cũng như khả năng thiết kế UI một cách hiệu quả.
          </p>

          <p>

            Mục tiêu của mình là được apply kỹ năng vào các dự án thực chiến, không ngừng nâng cấp bản thân trong môi trường sáng tạo, trẻ trung và nhiều thử thách.

          </p>
          <div className="h-px bg-white/10 w-full" />
        </div>
      </div>

      <div className="flex gap-4">
        <Link
          href="#contact"
          className="px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center text-sm"
        >
          Contact Me
        </Link>
        <Link
          href="#work"
          className="px-6 py-3 text-white bg-white/10 rounded-full font-medium hover:bg-white/20 transition-colors text-center text-sm"
        >
          View My Work
        </Link>
      </div>
    </div>
  )
}
