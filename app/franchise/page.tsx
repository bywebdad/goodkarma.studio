import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Franchise() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Хедер */}
      <header className="bg-[#F15A24] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/">Good Karma</Link>
          </div>
          <Button variant="outline" className="text-white border-white hover:bg-[#d94e1f]">
            <Link href="/">На главную</Link>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero-блок */}
        <section className="relative bg-[#1D6430] text-white">
          <div className="container mx-auto px-4 py-20 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Франшиза Good Karma</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Откройте собственную студию массажа под брендом Good Karma и станьте частью успешной сети
            </p>
            <Button className="rounded-full bg-[#F15A24] hover:bg-[#d94e1f] px-8 py-6 text-lg">Узнать подробнее</Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-white fill-current">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
          </div>
        </section>

        {/* Преимущества франшизы */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Преимущества франшизы Good Karma</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#FDF5EC] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Проверенная бизнес-модель</h3>
                <p className="text-gray-700">
                  Мы разработали и отточили бизнес-модель, которая успешно работает в нескольких студиях. Вы получаете
                  готовое решение, которое уже доказало свою эффективность.
                </p>
              </div>
              <div className="bg-[#FDF5EC] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Полное сопровождение</h3>
                <p className="text-gray-700">
                  Мы помогаем на всех этапах: от выбора помещения и ремонта до подбора персонала и запуска рекламы. Вы
                  никогда не останетесь один на один с проблемами.
                </p>
              </div>
              <div className="bg-[#FDF5EC] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Узнаваемый бренд</h3>
                <p className="text-gray-700">
                  Good Karma — это уже известный бренд с хорошей репутацией. Вы получаете готовую клиентскую базу и
                  доверие клиентов с первого дня работы.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Форма заявки */}
        <section className="py-20 bg-[#F15A24] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white text-black p-8 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Хочу стать партнером Good Karma</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D6430]"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      Ваш телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D6430]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Ваш email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@mail.ru"
                    className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D6430]"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block mb-2 font-medium">
                    Город
                  </label>
                  <input
                    type="text"
                    id="city"
                    placeholder="Москва"
                    className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D6430]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    placeholder="Расскажите немного о себе и своих ожиданиях"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D6430]"
                  ></textarea>
                </div>
                <div className="pt-4">
                  <Button className="rounded-full bg-[#1D6430] hover:bg-[#164d25] w-full py-6 text-white text-lg">
                    Отправить заявку
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Футер */}
      <footer className="bg-[#1D6430] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="border-t border-white/30 pt-8 text-sm text-center">
            <p>© {new Date().getFullYear()} Good Karma. Все права защищены.</p>
            <p className="mt-2">ООО «Гуд Карма»</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
