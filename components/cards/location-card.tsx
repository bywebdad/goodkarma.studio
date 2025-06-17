import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone } from "lucide-react"

interface LocationCardProps {
  title: string
  address: string
  schedule: string
  phone: string
}

export function LocationCard({ title, address, schedule, phone }: LocationCardProps) {
  return (
    <div className="bg-[#F8F1EC] rounded-lg shadow-sm p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group">
      <h3 className="text-xl font-semibold mb-4 text-[#4E4E4E]">{title}</h3>
      <div className="flex items-start mb-3">
        <MapPin className="h-5 w-5 text-[#A4C49A] mr-3 mt-0.5 flex-shrink-0" />
        <p className="text-[#4E4E4E]">{address}</p>
      </div>
      <div className="flex items-start mb-3">
        <Clock className="h-5 w-5 text-[#A4C49A] mr-3 mt-0.5 flex-shrink-0" />
        <p className="text-[#4E4E4E]">{schedule}</p>
      </div>
      <div className="flex items-start mb-4">
        <Phone className="h-5 w-5 text-[#A4C49A] mr-3 mt-0.5 flex-shrink-0" />
        <a href={`tel:${phone.replace(/\D/g, "")}`} className="text-[#4E4E4E] hover:text-[#A4C49A] transition-colors">
          {phone}
        </a>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-3">
        <Button
          variant="outline"
          className="w-full border-[#A4C49A] text-[#A4C49A] hover:bg-[#A4C49A] hover:text-white"
        >
          <MapPin className="h-4 w-4 mr-2" />
          Посмотреть на карте
        </Button>
      </div>
      <Button className="w-full bg-[#A4C49A] hover:bg-[#8fb085] text-white">
        <a href="https://yclients.com" target="_blank" rel="noopener noreferrer">
          Записаться
        </a>
      </Button>
    </div>
  )
}
