import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Terms() {
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

      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Публичная оферта</h1>

          <div className="prose max-w-none">
            <p>
              Настоящий документ представляет собой предложение ООО «Гуд Карма» (далее — «Исполнитель») заключить
              договор на оказание услуг на изложенных ниже условиях.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Термины и определения</h2>
            <p>
              1.1. В настоящей Оферте, если из контекста не следует иное, нижеприведенные термины имеют следующие
              значения:
            </p>
            <p>
              1.1.1. «Оферта» — настоящий документ, опубликованный в сети Интернет по адресу:
              https://goodkarma.ru/terms.
            </p>
            <p>
              1.1.2. «Акцепт Оферты» — полное и безоговорочное принятие Оферты путем осуществления действий, указанных в
              п. 2.2. Оферты. Акцепт Оферты создает Договор.
            </p>
            <p>
              1.1.3. «Клиент» — лицо, осуществившее Акцепт Оферты и являющееся потребителем услуг по заключенному
              Договору.
            </p>
            <p>
              1.1.4. «Договор» — договор между Исполнителем и Клиентом на оказание услуг, который заключается
              посредством Акцепта Оферты.
            </p>
            <p>
              1.1.5. «Услуги» — комплекс услуг по проведению массажа и других физкультурно-оздоровительных процедур,
              оказываемых Исполнителем.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Предмет договора</h2>
            <p>
              2.1. Исполнитель обязуется оказать Клиенту Услуги, а Клиент обязуется оплатить эти Услуги в соответствии с
              условиями настоящей Оферты.
            </p>
            <p>
              2.2. Акцептом настоящей Оферты является оплата Клиентом выбранной Услуги в соответствии с условиями
              настоящей Оферты.
            </p>

            {/* Дополнительные разделы публичной оферты */}
          </div>
        </div>
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
