import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-[#FDFDFB] bg-opacity-80 p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-opacity-100 group">
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-[#C3B299] group-hover:text-[#A4C49A] transition-colors duration-300 mr-3" />
        <h3 className="text-xl font-semibold text-[#C3B299]">{title}</h3>
      </div>
      <p className="text-[#C3B299] text-opacity-80 mb-4">{description}</p>
    </div>
  )
}
