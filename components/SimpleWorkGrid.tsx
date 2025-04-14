"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageModal } from "./ImageModal_Simple"
import { Badge } from "@/components/ui/badge"

interface WorkItem {
    id: number
    title: string
    category: string
    imageUrl: string
    description?: string
}

// Sample work items based on the existing frames
const sampleWorkItems: WorkItem[] = [
    {
        id: 1,
        title: "Banner Design 1",
        category: "Banner",
        imageUrl: "./4/3.jpg",
        description: "A promotional banner design for marketing campaign",
    },
    {
        id: 2,
        title: "Banner Design 2",
        category: "Banner",
        imageUrl: "./4/4.jpg",
        description: "Website header banner with modern aesthetics",
    },
    {
        id: 3,
        title: "Poster Design 1",
        category: "Banner",
        imageUrl: "./1/6.jpg",
        description: "Event poster with minimalist design",
    },
    {
        id: 4,
        title: "Poster Design 2",
        category: "SocialPost",
        imageUrl: "./1/1.jpg",
        description: "Product launch promotional poster",
    },
    {
        id: 5,
        title: "Logo Design 1",
        category: "SocialPost",
        imageUrl: "./1/2.jpg",
        description: "Corporate brand identity logo",
    },
    {
        id: 6,
        title: "Logo Design 2",
        category: "SocialPost",
        imageUrl: "./1/3.jpg",
        description: "Startup company logo with modern aesthetics",
    },
    {
        id: 7,
        title: "T-Shirt Design 1",
        category: "SocialPost",
        imageUrl: "./1/4.jpg",
        description: "Casual wear t-shirt design with graphic elements",
    },
    {
        id: 8,
        title: "T-Shirt Design 2",
        category: "SocialPost",
        imageUrl: "./1/5.jpg",
        description: "Limited edition merchandise t-shirt",
    },
    {
        id: 9,
        title: "Banner Design 3",
        category: "SocialPost",
        imageUrl: "./3/2.jpg",
        description: "Social media promotional banner",
    },
    {
        id: 10,
        title: "Art Piece 1",
        category: "SocialPost",
        imageUrl: "./3/3.jpg",
        description: "Digital art illustration with abstract elements",
    },
    {
        id: 11,
        title: "UI Design 1",
        category: "SocialPost",
        imageUrl: "./3/4.jpg",
        description: "Mobile app interface design concept",
    },
    {
        id: 12,
        title: "3D Model 1",
        category: "SocialPost",
        imageUrl: "./3/5.jpg",
        description: "3D product visualization render",
    },
    {
        id: 13,
        title: "Banner Design 3",
        category: "SocialPost",
        imageUrl: "./3/6.jpg",
        description: "Social media promotional banner",
    },
    {
        id: 14,
        title: "Art Piece 1",
        category: "SocialPost",
        imageUrl: "./3/7.jpg",
        description: "Digital art illustration with abstract elements",
    },
    {
        id: 15,
        title: "UI Design 1",
        category: "SocialPost",
        imageUrl: "./3/8.jpg",
        description: "Mobile app interface design concept",
    },
    {
        id: 16,
        title: "3D Model 1",
        category: "SocialPost",
        imageUrl: "./3/9.jpg",
        description: "3D product visualization render",
    },
    {
        id: 17,
        title: "UI Design 1",
        category: "SocialPost",
        imageUrl: "./4/1.jpg",
        description: "Mobile app interface design concept",
    },
    {
        id: 18,
        title: "3D Model 1",
        category: "SocialPost",
        imageUrl: "./4/2.jpg",
        description: "3D product visualization render",
    },
    {
        id: 19,
        title: "T-Shirt Design 1",
        category: "SocialPost",
        imageUrl: "./5/1.jpg",
        description: "Casual wear t-shirt design with graphic elements",
    },
    {
        id: 20,
        title: "T-Shirt Design 2",
        category: "SocialPost",
        imageUrl: "./5/2.jpg",
        description: "Limited edition merchandise t-shirt",
    },
    {
        id: 21,
        title: "Banner Design 3",
        category: "SocialPost",
        imageUrl: "./5/3.jpg",
        description: "Social media promotional banner",
    },
    {
        id: 22,
        title: "Art Piece 1",
        category: "SocialPost",
        imageUrl: "./5/4.jpg",
        description: "Digital art illustration with abstract elements",
    },
    {
        id: 23,
        title: "UI Design 1",
        category: "SocialPost",
        imageUrl: "./5/5.jpg",
        description: "Mobile app interface design concept",
    },
    {
        id: 24,
        title: "3D Model 1",
        category: "SocialPost",
        imageUrl: "./5/6.jpg",
        description: "3D product visualization render",
    },
    {
        id: 25,
        title: "Banner Design 3",
        category: "SocialPost",
        imageUrl: "./5/7.jpg",
        description: "Social media promotional banner",
    },
    {
        id: 26,
        title: "Art Piece 1",
        category: "SocialPost",
        imageUrl: "./5/8.jpg",
        description: "Digital art illustration with abstract elements",
    },
    {
        id: 27,
        title: "UI Design 1",
        category: "SocialPost",
        imageUrl: "./5/9.jpg",
        description: "Mobile app interface design concept",
    },
    {
        id: 28,
        title: "3D Model 1",
        category: "SocialPost",
        imageUrl: "./5/10.jpg",
        description: "3D product visualization render",
    },
    {
        id: 29,
        title: "UI Design 1",
        category: "SocialPost",
        imageUrl: "./5/11.jpg",
        description: "Mobile app interface design concept",
    },
    {
        id: 30,
        title: "3D Model 1",
        category: "SocialPost",
        imageUrl: "./5/12.jpg",
        description: "3D product visualization render",
    },
    {
        id: 31,
        title: "Art Piece 1",
        category: "SocialPost",
        imageUrl: "./5/13.jpg",
        description: "Digital art illustration with abstract elements",
    },
    {
        id: 32,
        title: "UI Design 1",
        category: "SocialPost",
        imageUrl: "./5/14.jpg",
        description: "Mobile app interface design concept",
    },
    {
        id: 33,
        title: "3D Model 1",
        category: "SocialPost",
        imageUrl: "./5/15.jpg",
        description: "3D product visualization render",
    },
    {
        id: 34,
        title: "UI Design 1",
        category: "SocialPost",
        imageUrl: "./5/16.jpg",
        description: "Mobile app interface design concept",
    },
    {
        id: 35,
        title: "3D Model 1",
        category: "SocialPost",
        imageUrl: "./5/12.jpg",
        description: "3D product visualization render",
    },
    {
        id: 35_1,
        title: "3D Model 1",
        category: "SocialPost",
        imageUrl: "./3/1.jpg",
        description: "3D product visualization render",
    },
    {
        id: 35_2,
        title: "3D Model 1",
        category: "SocialPost",
        imageUrl: "./5/17.jpg",
        description: "3D product visualization render",
    },

    {
        id: 36,
        title: "3D Model 1",
        category: "Branded Merchandise",
        imageUrl: "./2/1.jpg",
        description: "3D product visualization render",
    },
    {
        id: 37,
        title: "UI Design 1",
        category: "Branded Merchandise",
        imageUrl: "./2/2.jpg",
        description: "Mobile app interface design concept",
    },
    {
        id: 38,
        title: "3D Model 1",
        category: "Branded Merchandise",
        imageUrl: "./2/3.jpg",
        description: "3D product visualization render",
    },
    {
        id: 39,
        title: "3D Model 1",
        category: "Branded Merchandise",
        imageUrl: "./2/4.jpg",
        description: "3D product visualization render",
    },
    {
        id: 40,
        title: "UI Design 1",
        category: "Branded Merchandise",
        imageUrl: "./2/7.jpg",
        description: "Mobile app interface design concept",
    },

    {
        id: 41,
        title: "3D Model 1",
        category: "Branded Merchandise",
        imageUrl: "./3/10.jpg",
        description: "3D product visualization render",
    },
    {
        id: 42,
        title: "3D Model 1",
        category: "Branded Merchandise",
        imageUrl: "./3/11.jpg",
        description: "3D product visualization render",
    },
    {
        id: 43,
        title: "UI Design 1",
        category: "Branded Merchandise",
        imageUrl: "./3/12.jpg",
        description: "Mobile app interface design concept",
    },
    {
        id: 44,
        title: "UI Design 1",
        category: "Branded Merchandise",
        imageUrl: "./3/14.jpg",
        description: "Mobile app interface design concept",
    },

    {
        id: 45,
        title: "3D Model 1",
        category: "Poster",
        imageUrl: "./2/5.jpg",
        description: "3D product visualization render",
    },
    {
        id: 46,
        title: "UI Design 1",
        category: "Poster",
        imageUrl: "./2/6.jpg",
        description: "Mobile app interface design concept",
    },
    {
        id: 47,
        title: "UI Design 1",
        category: "Poster",
        imageUrl: "./3/13.jpg",
        description: "Mobile app interface design concept",
    },


    {
        id: 48,
        title: "3D Model 1",
        category: "Shirt",
        imageUrl: "./6/1.jpg",
        description: "3D product visualization render",
    },
    {
        id: 49,
        title: "UI Design 1",
        category: "Shirt",
        imageUrl: "./6/2.jpg",
        description: "Mobile app interface design concept",
    },
    {
        id: 50,
        title: "UI Design 1",
        category: "Shirt",
        imageUrl: "./6/3.jpg",
        description: "Mobile app interface design concept",
    },
    {
        id: 51,
        title: "3D Model 1",
        category: "Shirt",
        imageUrl: "./6/4.jpg",
        description: "3D product visualization render",
    },
    {
        id: 52,
        title: "UI Design 1",
        category: "Shirt",
        imageUrl: "./6/5.jpg",
        description: "Mobile app interface design concept",
    },
    {
        id: 53,
        title: "UI Design 1",
        category: "Shirt",
        imageUrl: "./6/6.jpg",
        description: "Mobile app interface design concept",
    },
    {
        id: 54,
        title: "3D Model 1",
        category: "Shirt",
        imageUrl: "./6/7.jpg",
        description: "3D product visualization render",
    },
    {
        id: 55,
        title: "UI Design 1",
        category: "Shirt",
        imageUrl: "./6/8.jpg",
        description: "Mobile app interface design concept",
    },
    {
        id: 56,
        title: "UI Design 1",
        category: "Shirt",
        imageUrl: "./6/9.jpg",
        description: "Mobile app interface design concept",
    },


    {
        id: 57,
        title: "3D Model 1",
        category: "Art",
        imageUrl: "./7/1.jpg",
        description: "3D product visualization render",
    },
    {
        id: 58,
        title: "UI Design 1",
        category: "Art",
        imageUrl: "./7/2.svg",
        description: "Mobile app interface design concept",
    },
    {
        id: 59,
        title: "UI Design 1",
        category: "Art",
        imageUrl: "./7/3.svg",
        description: "Mobile app interface design concept",
    },
    {
        id: 60,
        title: "UI Design 1",
        category: "Art",
        imageUrl: "./7/4.svg",
        description: "Mobile app interface design concept",
    },
    {
        id: 61,
        title: "UI Design 1",
        category: "Art",
        imageUrl: "./7/5.svg",
        description: "Mobile app interface design concept",
    },



    {
        id: 62,
        title: "UI Design 1",
        category: "Catalog",
        imageUrl: "./Catalog.pdf",
        description: "Mobile app interface design concept",
    },
    {
        id: 63,
        title: "UI Design 1",
        category: "Poster",
        imageUrl: "./8/1.jpg",
        description: "Mobile app interface design concept",
    },



    {
        id: 64,
        title: "UI Design 1",
        category: "Poster",
        imageUrl: "./8/2.jpg",
        description: "Mobile app interface design concept",
    },

]

// Category colors for badges
const categoryColors: Record<string, string> = {
    Banner: "bg-gradient-to-r from-blue-500 to-cyan-400 text-white",
    Poster: "bg-gradient-to-r from-emerald-500 to-teal-400 text-white",
    Logo: "bg-gradient-to-r from-amber-500 to-orange-400 text-white",
    Shirt: "bg-gradient-to-r from-rose-500 to-pink-400 text-white",
    Art: "bg-gradient-to-r from-violet-500 to-purple-400 text-white",
    Design: "bg-gradient-to-r from-fuchsia-500 to-pink-400 text-white",
    "3D": "bg-gradient-to-r from-indigo-500 to-blue-400 text-white",
}

interface SimpleWorkGridProps {
    category?: string // Optional category filter
}

export default function SimpleWorkGrid({ category }: SimpleWorkGridProps) {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState("")
    const [selectedTitle, setSelectedTitle] = useState("")

    // Filter work items by category if provided
    const filteredWorkItems =
        category && category !== "All" ? sampleWorkItems.filter((item) => item.category === category) : sampleWorkItems

    // Function to open modal with selected image
    const openImageModal = (imageUrl: string, title: string) => {
        setSelectedImage(imageUrl)
        setSelectedTitle(title)
        setModalOpen(true)
    }

    return (
        <div className="w-full">
            {/* Image Modal */}
            <ImageModal
                isOpen={modalOpen}
                imageUrl={selectedImage}
                onClose={() => setModalOpen(false)}
                title={selectedTitle}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWorkItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors group"
                    >
                        <div
                            className="relative h-64 cursor-pointer"
                            onClick={() => {
                                if (item.category === "Catalog") {
                                    window.open(item.imageUrl, '_blank');
                                } else {
                                    openImageModal(item.imageUrl, item.title);
                                }
                            }}
                        >
                            <Image
                                src={
                                    item.category === "Catalog"
                                        ? "./1/PAGE1.jpg"  // ảnh đại diện của PDF
                                        : item.imageUrl || "/placeholder.svg"
                                }
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
                                    {item.category === "brochure" ? "Xem Catalog" : "View Full Image"}
                                </span>
                            </div>
                        </div>

                    </div>


                ))}
            </div>
        </div>
    )
}
