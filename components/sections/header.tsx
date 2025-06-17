import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#A4C49A] border-b border-[#A4C49A]">
      <div className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold text-white">Good Karma</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#services" className="text-white hover:text-white/80 transition-colors">
            Услуги
          </Link>
          <Link href="#locations" className="text-white hover:text-white/80 transition-colors">
            Адреса
          </Link>
          <Link href="#reviews" className="text-white hover:text-white/80 transition-colors">
            Отзывы
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="tel:+71234567890" className="text-white hover:text-white/80 transition-colors flex items-center">
            <Phone className="h-5 w-5 mr-2" />
            <span className="hidden md:inline">+7 (123) 456-78-90</span>
          </a>
          <Button className="bg-white hover:bg-white/90 rounded-full text-[#A4C49A]">
            <a href="https://yclients.com" target="_blank" rel="noopener noreferrer">
              Записаться онлайн
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
