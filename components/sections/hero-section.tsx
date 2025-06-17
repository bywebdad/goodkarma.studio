import { PricingCard } from "@/components/cards/pricing-card"

export function HeroSection() {
  return (
    <section className="relative pt-14 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 pt-16 md:pt-24">
        <div className="text-center py-4 md:py-8">
          <div className="mb-12 md:mb-12">
            <div className="inline-block bg-[#A4C49A] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Ваше время - наша забота
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-[#4E4E4E]">Студия заботы о теле</h2>
            <div className="relative">
              <p className="text-xl md:text-2xl mb-10 text-[#4E4E4E] max-w-3xl mx-auto">
                Платите только за ваше время. Доступно и просто
                <br />
                Онлайн-запись за 1 минуту.
              </p>
              <div className="w-24 h-1 bg-[#A4C49A] mx-auto rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-[#C3B299] rounded-full animate-pulse"></div>
                <div className="absolute left-0 top-0 h-full bg-[#A4C49A] rounded-full animate-[loading_2s_ease-in-out_infinite] w-0"></div>
              </div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <PricingCard
                title="Body-сессия 50 минут"
                price="3500 ₽"
                description="За это время вы и мастер воплотите ваше желание: расслабление, тонус, коррекция или восстановление."
                buttonText="Забронировать время"
              />
              <PricingCard
                title="Body-сессия 100 минут"
                price="6000 ₽"
                description="Глубокая практика или комбинация подходов для комплексного эффекта и максимального погружения."
                buttonText="Забронировать время"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
