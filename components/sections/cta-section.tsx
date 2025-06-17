import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section>
      {/* CTA с изображением на фоне */}
      <div className="relative mt-20 ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/massage-therapy.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Подарите себе момент релаксации</h3>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Запишитесь на сеанс прямо сейчас и получите скидку 10% на первое посещение
            </p>
            <Button className="bg-[#A4C49A] hover:bg-[#8fb085] text-white px-8 py-6 rounded-full text-lg">
              Записаться со скидкой
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
