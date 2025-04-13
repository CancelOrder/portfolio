"use client"
import { cn } from "@/lib/utils"

interface LanguageTabsProps {
    onLanguageChange: (language: string) => void
    currentLanguage: string
}

export function LanguageTabs({ onLanguageChange, currentLanguage }: LanguageTabsProps) {
    const languages = [
        { code: "vi", name: "Tiếng Việt" },
        { code: "en", name: "English" },
        { code: "ko", name: "한국어" },
    ]

    return (
        <div className="flex space-x-2 mb-6">
            {languages.map((language) => (
                <button
                    key={language.code}
                    onClick={() => onLanguageChange(language.code)}
                    className={cn(
                        "px-4 py-2 text-sm rounded-full transition-colors",
                        currentLanguage === language.code
                            ? "bg-white/20 text-white"
                            : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80",
                    )}
                >
                    {language.name}
                </button>
            ))}
        </div>
    )
}
