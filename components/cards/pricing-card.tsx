import { Button } from "@/components/ui/button"

interface PricingCardProps {
  title: string
  price: string
  description: string
  buttonText: string
}

export function PricingCard({ title, price, description, buttonText }: PricingCardProps) {
  return (
    <div className="bg-[#A4C49A] p-5 rounded-xl border-l-4 border-[#A4C49A] shadow-lg flex-1 transform transition-transform hover:scale-105">
      <h3 className="font-semibold text-lg mb-1 text-white">{title}</h3>
      <p className="text-2xl font-bold text-white">{price}</p>
      <p className="text-sm text-white/90 mt-2">{description}</p>
      <Button size="sm" className="w-full mt-3 bg-white text-[#A4C49A] hover:bg-white/90">
        {buttonText}
      </Button>
    </div>
  )
}
