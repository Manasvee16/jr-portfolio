"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
}

export const Particles = ({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const particles = useRef<Array<Particle>>([])
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
  const gradient = useRef<CanvasGradient | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d")
    }

    initCanvas()
    animate()
    window.addEventListener("resize", initCanvas)

    return () => {
      window.removeEventListener("resize", initCanvas)
    }
  }, [refresh])

  useEffect(() => {
    initCanvas()
  }, [quantity])

  const initCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      containerSize.current.w = canvasContainerRef.current.offsetWidth
      containerSize.current.h = canvasContainerRef.current.offsetHeight
      canvasRef.current.width = containerSize.current.w
      canvasRef.current.height = containerSize.current.h

      particles.current = []
      for (let i = 0; i < quantity; i++) {
        particles.current.push(
          new Particle(containerSize.current.w, containerSize.current.h, staticity, ease, context.current),
        )
      }

      if (context.current) {
        gradient.current = context.current.createLinearGradient(0, 0, containerSize.current.w, containerSize.current.h)
        gradient.current.addColorStop(0, "#6366f1")
        gradient.current.addColorStop(0.5, "#8b5cf6")
        gradient.current.addColorStop(1, "#ec4899")
      }
    }
  }

  const animate = () => {
    if (context.current && canvasRef.current) {
      context.current.clearRect(0, 0, containerSize.current.w, containerSize.current.h)

      particles.current.forEach((particle) => {
        particle.update(mouse.current)
        particle.draw()
      })
    }
    requestAnimationFrame(animate)
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect()
      mouse.current.x = e.clientX - rect.left
      mouse.current.y = e.clientY - rect.top
    }
  }

  return (
    <div ref={canvasContainerRef} className={cn("fixed inset-0", className)} onMouseMove={onMouseMove}>
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}

class Particle {
  private x: number
  private y: number
  private size: number
  private vx: number
  private vy: number
  private accX = 0
  private accY = 0
  private friction = 0.95
  private staticity: number
  private ease: number
  private context: CanvasRenderingContext2D
  private color: string
  private opacity: number

  constructor(
    canvasWidth: number,
    canvasHeight: number,
    staticity: number,
    ease: number,
    context: CanvasRenderingContext2D,
  ) {
    this.x = Math.random() * canvasWidth
    this.y = Math.random() * canvasHeight
    this.size = Math.random() * 2 + 0.5
    this.vx = Math.random() * 1 - 0.5
    this.vy = Math.random() * 1 - 0.5
    this.staticity = staticity
    this.ease = ease
    this.context = context

    // Create a gradient of colors
    const colors = ["#6366f1", "#8b5cf6", "#ec4899", "#f43f5e"]
    this.color = colors[Math.floor(Math.random() * colors.length)]
    this.opacity = Math.random() * 0.6 + 0.2
  }

  update(mouse: { x: number; y: number }) {
    const distX = mouse.x - this.x
    const distY = mouse.y - this.y
    const distance = Math.sqrt(distX ** 2 + distY ** 2)
    const force = Math.min(this.staticity / distance ** 2, this.staticity)

    if (distance < 100) {
      this.accX = (distX / distance) * force
      this.accY = (distY / distance) * force
    }

    this.vx += this.accX / this.ease
    this.vy += this.accY / this.ease
    this.vx *= this.friction
    this.vy *= this.friction
    this.x += this.vx
    this.y += this.vy
    this.accX = 0
    this.accY = 0
  }

  draw() {
    this.context.beginPath()
    this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    this.context.fillStyle = this.color
    this.context.globalAlpha = this.opacity
    this.context.fill()
    this.context.globalAlpha = 1
  }
}
