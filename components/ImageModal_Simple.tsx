"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ImageModalProps {
    isOpen: boolean
    imageUrl: string
    onClose: () => void
    title?: string
}

export function ImageModal({ isOpen, imageUrl, onClose, title }: ImageModalProps) {
    // Close modal on escape key press
    useEffect(() => {
        const handleEscapeKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener("keydown", handleEscapeKey)
            // Prevent scrolling when modal is open
            document.body.style.overflow = "hidden"
        }

        return () => {
            document.removeEventListener("keydown", handleEscapeKey)
            document.body.style.overflow = "auto"
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <div className="relative w-[90vw] h-[90vh] max-w-7xl" onClick={(e) => e.stopPropagation()}>
                <button
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                    onClick={onClose}
                >
                    <X size={24} />
                </button>
                {title && (
                    <div className="absolute top-4 left-4 z-10 p-2 bg-black/50 rounded-md text-white">
                        <h3 className="text-lg font-medium">{title}</h3>
                    </div>
                )}
                <div className="w-full h-full relative">
                    <Image
                        src={imageUrl || "/placeholder.svg"}
                        alt={title || "Full size image"}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 90vw"
                    />
                </div>
            </div>
        </div>
    )
}
