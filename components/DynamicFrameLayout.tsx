"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FrameComponent } from "./FrameComponent"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { ImageModal } from "./ImageModal"

const GRID_SIZE = 12
const CELL_SIZE = 60 // pixels per grid cell

interface Frame {
  id: number
  media: string
  defaultPos: { x: number; y: number; w: number; h: number }
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  isHovered: boolean
  category: string
}

// Sample image URLs for different categories
const sampleImages = {
  SocialPost: [
    "./1/1.jpg",
    "./1/2.jpg",
    "./1/3.jpg",
  ],
  Poster: [
    "/placeholder.svg?height=800&width=600&text=Poster+1",
    "/placeholder.svg?height=800&width=600&text=Poster+2",
  ],
  Logo: ["/placeholder.svg?height=500&width=500&text=Logo+1", "/placeholder.svg?height=500&width=500&text=Logo+2"],
  Shirt: ["/placeholder.svg?height=700&width=600&text=Shirt+1", "/placeholder.svg?height=700&width=600&text=Shirt+2"],
  Art: ["/placeholder.svg?height=800&width=800&text=Art+1"],
  Design: ["/placeholder.svg?height=700&width=900&text=Design+1"],
  "3D": ["/placeholder.svg?height=600&width=800&text=3D+1"],
}

const initialFrames: Frame[] = [
  {
    id: 1,
    media: "./1/1.jpg",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_hori_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    isHovered: false,
    category: "SocialPost",
  },
  {
    id: 2,
    media: "./1/2.jpg",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_hori_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    isHovered: false,
    category: "SocialPost",
  },
  {
    id: 3,
    media: "./1/3.jpg",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Vert_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    isHovered: false,
    category: "SocialPost",
  },
  {
    id: 4,
    media: "./8/1.jpg",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_vert_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    isHovered: false,
    category: "SocialPost",
  },
  {
    id: 5,
    media: "./8/2.jpg",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_verti_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    isHovered: false,
    category: "SocialPost",
  },
  {
    id: 6,
    media: "./2/5.jpg",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/1199340587e8da1d/6_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/1199340587e8da1d/6_corner-1.png",
    edgeVertical: "https://static.cdn-luma.com/files/1199340587e8da1d/6_vert.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    isHovered: false,
    category: "SocialPost",
  },
  {
    id: 7,
    media: "./2/6.jpg",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_vert.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    isHovered: false,
    category: "SocialPost",
  },
  {
    id: 8,
    media: "./2/1.jpg",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/981e483f71aa764b/8_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/981e483f71aa764b/8_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/981e483f71aa764b/8_verticle.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    isHovered: false,
    category: "SocialPost",
  },
  {
    id: 9,
    media: "./2/2.jpg",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/981e483f71aa764b/9_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/981e483f71aa764b/9_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/981e483f71aa764b/9_vert.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    isHovered: false,
    category: "SocialPost",
  },
  // Adding more frames with Art, Design, and 3D categories
  {
    id: 10,
    media: "./2/3.jpg",
    defaultPos: { x: 0, y: 12, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_hori_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    isHovered: false,
    category: "SocialPost",
  },
  {
    id: 11,
    media: "./2/4.jpg",
    defaultPos: { x: 4, y: 12, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Vert_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    isHovered: false,
    category: "SocialPost",
  },
  {
    id: 12,
    media: "./2/7.jpg",
    defaultPos: { x: 8, y: 12, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_vert_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    isHovered: false,
    category: "SocialPost",
  },
]


interface DynamicFrameLayoutProps {
  category?: string // Optional category filter
}

export default function DynamicFrameLayout({ category }: DynamicFrameLayoutProps) {
  const [frames, setFrames] = useState<Frame[]>(initialFrames)
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null)
  const [hoverSize, setHoverSize] = useState(6)
  const [gapSize, setGapSize] = useState(4)
  const [showControls, setShowControls] = useState(false)
  const [cleanInterface, setCleanInterface] = useState(true)
  const [showFrames, setShowFrames] = useState(false)

  // Modal state
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")

  // Function to open modal with selected image
  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl)
    setModalOpen(true)
  }

  // Filter frames by category if provided
  const filteredFrames = category ? frames.filter((frame) => frame.category === category) : frames

  // Adjust grid layout based on number of filtered frames
  const getGridLayout = () => {
    const count = filteredFrames.length

    if (count <= 3) return { rows: 1, cols: count }
    if (count <= 6) return { rows: 2, cols: 3 }
    return { rows: 3, cols: 3 } // Default 3x3 grid
  }

  const { rows, cols } = getGridLayout()

  const getRowSizes = () => {
    if (hovered === null) {
      return Array(rows).fill("1fr").join(" ")
    }
    const { row } = hovered
    const nonHoveredSize = (rows - hoverSize / rows) / (rows - 1)
    return Array(rows)
      .fill(0)
      .map((_, r) => (r === row ? `${hoverSize / rows}fr` : `${nonHoveredSize}fr`))
      .join(" ")
  }

  const getColSizes = () => {
    if (hovered === null) {
      return Array(cols).fill("1fr").join(" ")
    }
    const { col } = hovered
    const nonHoveredSize = (cols - hoverSize / cols) / (cols - 1)
    return Array(cols)
      .fill(0)
      .map((_, c) => (c === col ? `${hoverSize / cols}fr` : `${nonHoveredSize}fr`))
      .join(" ")
  }

  const getTransformOrigin = (x: number, y: number) => {
    const vertical = y === 0 ? "top" : y === 4 ? "center" : "bottom"
    const horizontal = x === 0 ? "left" : x === 4 ? "center" : "right"
    return `${vertical} ${horizontal}`
  }

  const updateFrameProperty = (id: number, property: keyof Frame, value: number) => {
    setFrames(frames.map((frame) => (frame.id === id ? { ...frame, [property]: value } : frame)))
  }

  const toggleControls = () => {
    setShowControls(!showControls)
  }

  const toggleCleanInterface = () => {
    setCleanInterface(!cleanInterface)
    if (!cleanInterface) {
      setShowControls(false)
    }
  }

  const updateCodebase = () => {
    console.log("Updating codebase with current values:")
    console.log("Hover Size:", hoverSize)
    console.log("Gap Size:", gapSize)
    console.log("Frames:", frames)
  }

  // Adjust the grid layout based on filtered frames
  const gridTemplateRows = getRowSizes()
  const gridTemplateColumns = getColSizes()

  return (
    <div className="space-y-4 w-full h-full">
      {/* Image Modal */}
      <ImageModal isOpen={modalOpen} imageUrl={selectedImage} onClose={() => setModalOpen(false)} />

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Switch id="frame-toggle" checked={showFrames} onCheckedChange={setShowFrames} />
            <label htmlFor="frame-toggle" className="text-sm text-white/70">
              {showFrames ? "Hide Frames" : "Show Frames"}
            </label>
          </div>
        </div>
      </div>
      {!cleanInterface && (
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Dynamic Frame Layout</h2>
          <div className="space-x-2">
            <Button onClick={toggleControls}>{showControls ? "Hide Controls" : "Show Controls"}</Button>
            <Button onClick={updateCodebase}>Update Codebase</Button>
            <Button onClick={toggleCleanInterface}>{cleanInterface ? "Show UI" : "Hide UI"}</Button>
          </div>
        </div>
      )}
      {!cleanInterface && showControls && (
        <>
          <div className="space-y-2">
            <label htmlFor="hover-size" className="block text-sm font-medium text-gray-200">
              Hover Size: {hoverSize}
            </label>
            <Slider
              id="hover-size"
              min={4}
              max={8}
              step={0.1}
              value={[hoverSize]}
              onValueChange={(value) => setHoverSize(value[0])}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="gap-size" className="block text-sm font-medium text-gray-200">
              Gap Size: {gapSize}px
            </label>
            <Slider
              id="gap-size"
              min={0}
              max={20}
              step={1}
              value={[gapSize]}
              onValueChange={(value) => setGapSize(value[0])}
            />
          </div>
        </>
      )}
      <div
        className="relative w-full h-full"
        style={{
          display: "grid",
          gridTemplateRows,
          gridTemplateColumns,
          gap: `${gapSize}px`,
          transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
        }}
      >
        {filteredFrames.map((frame) => {
          const row = Math.floor(frame.defaultPos.y / 4)
          const col = Math.floor(frame.defaultPos.x / 4)
          const transformOrigin = getTransformOrigin(frame.defaultPos.x, frame.defaultPos.y)

          return (
            <motion.div
              key={frame.id}
              className="relative"
              style={{
                transformOrigin,
                transition: "transform 0.4s ease",
              }}
              onMouseEnter={() => setHovered({ row, col })}
              onMouseLeave={() => setHovered(null)}
            >
              <FrameComponent
                media={frame.media}
                width="100%"
                height="100%"
                className="absolute inset-0"
                corner={frame.corner}
                edgeHorizontal={frame.edgeHorizontal}
                edgeVertical={frame.edgeVertical}
                mediaSize={frame.mediaSize}
                borderThickness={frame.borderThickness}
                borderSize={frame.borderSize}
                onMediaSizeChange={(value) => updateFrameProperty(frame.id, "mediaSize", value)}
                onBorderThicknessChange={(value) => updateFrameProperty(frame.id, "borderThickness", value)}
                onBorderSizeChange={(value) => updateFrameProperty(frame.id, "borderSize", value)}
                showControls={showControls && !cleanInterface}
                label={`Frame ${frame.id}`}
                showFrame={showFrames}
                isHovered={
                  hovered?.row === Math.floor(frame.defaultPos.y / 4) &&
                  hovered?.col === Math.floor(frame.defaultPos.x / 4)
                }
                onImageClick={() => openImageModal(frame.media)}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
