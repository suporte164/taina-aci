"use client"

import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
  onClick?: () => void
  children: React.ReactNode
  className?: string
  fullWidth?: boolean
}

export function CTAButton({ onClick, children, className, fullWidth }: CTAButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14",
        "bg-[#AABB6A] text-white cursor-pointer overflow-hidden",
        "transition-all duration-500 group hover:ps-14 hover:pe-6",
        "shadow-md hover:shadow-[0_4px_20px_rgba(170,187,106,0.45)]",
        fullWidth && "w-full justify-center",
        className
      )}
    >
      <span className="relative z-10 transition-all duration-500 whitespace-nowrap">
        {children}
      </span>
      <div className="absolute right-1 w-10 h-10 bg-white text-[#AABB6A] rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45 flex-shrink-0">
        <ArrowUpRight size={16} strokeWidth={2.5} />
      </div>
    </button>
  )
}
