import { ReviewCard } from "@/components/cards/review-card"

export function ReviewsSection() {
  const reviews = [
    {
      name: "Виктор К.",
      initials: "ВК",
      rating: 5,
      review:
        "Все было отлично! Был на сеансе 100 минут, специалист очень внимательный и профессиональный. Обязательно вернусь снова.",
    },
    {
      name: "Михаил С.",
      initials: "МС",
      rating: 5,
      review:
        "Регулярно хожу в Good Karma после тренировок. Специалисты знают свое дело, всегда помогают снять напряжение. Рекомендую!",
    },
    {
      name: "Елена В.",
      initials: "ЕВ",
      rating: 4,
      review:
        "Приятная атмосфера и хороший сервис. Единственное, хотелось бы больше вариантов времени для записи в вечерние часы.",
    },
  ]

  return (
    <section id="reviews" className="py-20 bg-[#F8F1EC]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#4E4E4E]">Отзывы наших клиентов</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              initials={review.initials}
              rating={review.rating}
              review={review.review}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
