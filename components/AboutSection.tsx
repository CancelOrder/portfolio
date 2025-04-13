import { ppEditorialNewUltralightItalic, inter } from "@/app/fonts"
import Link from "next/link"
import Image from "next/image"
import { LanguageTabs } from "./LanguageTabs"
import { useState } from "react"

// interface AboutSectionProps {
//   headerSize: number
//   textSize: number
// }
export interface AboutSectionProps {
  headerSize: number;
  textSize: number;
  language: string;
  setLanguage: (lang: string) => void;
}


// Content in different languages
const content = {
  vi: {
    name: "Chí Nguyên",
    title: "Web Developer & Graphic Designer",
    intro: "Tôi là một dev đam mê công nghệ, yêu thích thiết kế, chuyên nghành của tôi Kỹ thuật Phần mềm.",
    paragraph1:
      "Mình có nền tảng vững chắc về lập trình web với JavaScript/TypeScript, đặc biệt có nhiều kinh nghiệm phát triển giao diện frontend bằng React và Next.js.",
    paragraph2:
      "Ngoài code, mình còn có hơn 2 năm kinh nghiệm làm việc hybrid cho một công ty trong lĩnh vực làm đẹp, chủ yếu tập trung vào thiết kế nội dung social media. Bên cạnh đó, mình cũng từng làm freelance thiết kế thương hiệu và các sản phẩm sáng tạo khác.",
    paragraph3:
      "Dù không xuất thân từ ngành thiết kế, nhưng quãng thời gian &quot;cày&quot; Photoshop và Illustrator đã giúp mình rèn luyện con mắt thẩm mỹ tốt, cũng như khả năng thiết kế UI một cách hiệu quả.",
    paragraph4:
      "Mục tiêu của mình là được apply kỹ năng vào các dự án thực chiến, không ngừng nâng cấp bản thân trong môi trường sáng tạo, trẻ trung và nhiều thử thách.",
    contactButton: "Liên hệ",
    workButton: "Xem dự án",
  },
  en: {
    name: "Chí Nguyên",
    title: "Web Developer & Graphic Designer",
    intro: "I'm a tech-passionate developer with a love for design, specializing in Software Engineering.",
    paragraph1:
      "I have a solid foundation in web programming with JavaScript/TypeScript, with particular expertise in developing frontend interfaces using React and Next.js.",
    paragraph2:
      "Beyond coding, I have over 2 years of hybrid work experience for a company in the beauty industry, primarily focusing on social media content design. Additionally, I've worked as a freelancer in brand design and other creative products.",
    paragraph3:
      "Although I don't have a formal background in design, my time spent mastering Photoshop and Illustrator has helped me develop a good aesthetic eye, as well as the ability to design UI effectively.",
    paragraph4:
      "My goal is to apply my skills to real-world projects, continuously upgrading myself in a creative, youthful, and challenging environment.",
    contactButton: "Contact Me",
    workButton: "View My Work",
  },
  ko: {
    name: "Chí Nguyên",
    title: "크리에이티브 개발자 & 디자이너",
    intro: "저는 소프트웨어 엔지니어링을 전공하며 디자인을 사랑하는 기술 열정적인 개발자입니다.",
    paragraph1:
      "JavaScript/TypeScript를 사용한 웹 프로그래밍에 탄탄한 기반을 가지고 있으며, 특히 React와 Next.js를 사용한 프론트엔드 인터페이스 개발에 많은 경험이 있습니다.",
    paragraph2:
      "코딩 외에도 뷰티 산업 분야의 회사에서 2년 이상의 하이브리드 근무 경험이 있으며, 주로 소셜 미디어 콘텐츠 디자인에 중점을 두었습니다. 또한 브랜드 디자인 및 기타 창의적인 제품에 대한 프리랜서로 일한 경험이 있습니다.",
    paragraph3:
      "디자인 분야에서 정식 교육을 받지는 않았지만, Photoshop과 Illustrator를 마스터하는 데 보낸 시간은 좋은 미적 감각과 효과적인 UI 디자인 능력을 개발하는 데 도움이 되었습니다.",
    paragraph4:
      "제 목표는 실제 프로젝트에 제 기술을 적용하고, 창의적이고 젊고 도전적인 환경에서 지속적으로 자신을 업그레이드하는 것입니다.",
    contactButton: "연락하기",
    workButton: "작업 보기",
  },
}


export default function AboutSection({ headerSize, textSize, language, setLanguage }: AboutSectionProps) {
  const text = content[language as keyof typeof content];

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
          {text.name}
        </span>
        <br />
        <span className="text-[32px] md:text-[70px] text-white/60">
          {text.title}
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Crossed%20Fingers.png"
            alt="Crossed Fingers"
            width="25"
            height="25"
            className="inline-block ml-2"
          />
        </span>
      </h1>

      {/* Language Tabs */}
      <LanguageTabs onLanguageChange={setLanguage} currentLanguage={language} />

      <div
        className={`${inter.className} flex flex-col gap-8 text-white/50 text-sm font-light max-w-[500px]`}
        style={{ fontSize: `${0.875 * textSize}rem` }}
      >
        <div className="space-y-6">
          <div className="h-px bg-white/10 w-full" />
          <p className="text-lg text-white/70">{text.intro}</p>
          <p>{text.paragraph1}</p>
          <p>{text.paragraph2}</p>
          <p className="text-white/90">{text.paragraph3}</p>
          <p>{text.paragraph4}</p>
          <div className="h-px bg-white/10 w-full" />
        </div>
      </div>

      <div className="flex gap-4">
        <Link
          href="#contact"
          className="px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center text-sm"
        >
          {text.contactButton}
        </Link>
        <Link
          href="#work"
          className="px-6 py-3 text-white bg-white/10 rounded-full font-medium hover:bg-white/20 transition-colors text-center text-sm"
        >
          {text.workButton}
        </Link>
      </div>
    </div>
  );
}


