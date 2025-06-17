import { MasterCard } from "@/components/cards/master-card"

export function MastersSection() {
  const masters = [
    {
      name: "Анна Петрова",
      position: "Ведущий специалист",
      description: "Специализируется на расслаблении.",
    },
    {
      name: "Дмитрий Волков",
      position: "Специалист",
      description: "Работает с профессиональными спортсменами. Эксперт по восстановлению после травм.",
    },
    {
      name: "Елена Смирнова",
      position: "СПА-терапевт",
      description: "Специалист раслаблению тела.",
    },
    {
      name: "Алексей Козлов",
      position: "СПА-специалист",
      description: "Работает с проблемами опорно-двигательного аппарата. Высшее медицинское образование.",
    },
    {
      name: "Мария Иванова",
      position: "Релакс-специалист",
      description: "Специализируется на техниках глубокого расслабления и снятия стресса.",
    },
    {
      name: "Сергей Лебедев",
      position: "СПА-специалист",
      description: "Мастер восточных техник. Обучался в Таиланде.",
    },
  ]

  return (
    <section className="py-20 bg-[#F8F1EC]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#4E4E4E]">Наши специалисты</h2>
        <p className="text-lg text-[#4E4E4E] text-center mb-12 max-w-2xl mx-auto">
          Команда профессионалов с многолетним опытом работы и постоянным стремлением к совершенству
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
          {masters.map((master, index) => (
            <MasterCard key={index} name={master.name} position={master.position} description={master.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
