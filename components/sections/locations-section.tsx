import { LocationCard } from "@/components/cards/location-card"

export function LocationsSection() {
  const locations = [
    {
      title: "Good Karma Тверская",
      address: "г. Москва, ул. Тверская, д. 10, стр. 1",
      schedule: "Ежедневно: 10:00 - 22:00",
      phone: "+7 (495) 123-45-67",
    },
    {
      title: "Good Karma Арбат",
      address: "г. Москва, ул. Новый Арбат, д. 15, 3 этаж",
      schedule: "Ежедневно: 9:00 - 21:00",
      phone: "+7 (495) 234-56-78",
    },
    {
      title: "Good Karma Кутузовский",
      address: 'г. Москва, Кутузовский проcпект, д. 22, ТЦ "Времена года"',
      schedule: "Ежедневно: 10:00 - 22:00",
      phone: "+7 (495) 345-67-89",
    },
    {
      title: "Good Karma Сокольники",
      address: 'г. Москва, ул. Русаковская, д. 31, БЦ "Сокольники"',
      schedule: "Пн-Пт: 8:00 - 22:00, Сб-Вс: 10:00 - 20:00",
      phone: "+7 (495) 456-78-90",
    },
    {
      title: "Good Karma Парк Культуры",
      address: "г. Москва, ул. Зубовская, д. 5/36",
      schedule: "Ежедневно: 9:00 - 21:00",
      phone: "+7 (495) 567-89-01",
    },
    {
      title: "Good Karma Белорусская",
      address: 'г. Москва, ул. Лесная, д. 5, БЦ "Белая площадь"',
      schedule: "Пн-Пт: 8:00 - 22:00, Сб-Вс: 10:00 - 20:00",
      phone: "+7 (495) 678-90-12",
    },
  ]

  return (
    <section id="locations" className="py-20 bg-[#FDFDFB]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#4E4E4E]">Наши адреса</h2>
        <p className="text-lg text-[#4E4E4E] text-center mb-12 max-w-2xl mx-auto">
          Сеть студий Good Karma расположена в удобных локациях по всей Москве. Выберите ближайшую к вам студию и
          запишитесь на сеанс.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              title={location.title}
              address={location.address}
              schedule={location.schedule}
              phone={location.phone}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
