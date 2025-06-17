interface MasterCardProps {
  name: string
  position: string
  description: string
  imageUrl?: string
}

export function MasterCard({ name, position, description, imageUrl }: MasterCardProps) {
  return (
    <div className="bg-[#FDFDFB] rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg?height=300&width=300"}
          alt={`Специалист ${name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="text-lg font-semibold mb-1 text-[#4E4E4E]">{name}</h3>
        <p className="text-[#A4C49A] font-medium mb-2">{position}</p>
        <p className="text-[#4E4E4E] text-xs">{description}</p>
      </div>
    </div>
  )
}
