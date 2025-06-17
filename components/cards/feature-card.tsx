import type React from "react"
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-[#F8F1EC] p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
      <div className="bg-[#A4C49A] p-3 rounded-full mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2 text-[#4E4E4E]">{title}</h4>
      <p className="text-[#4E4E4E]">{description}</p>
    </div>
  )
}
