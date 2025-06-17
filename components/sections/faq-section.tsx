import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как записаться?",
      answer:
        "Записаться можно несколькими способами: через онлайн-форму на нашем сайте, по телефону любого из наших филиалов или через приложение. Мы рекомендуем бронировать сеанс заранее, особенно в вечернее время и выходные дни, когда у нас наибольшая загрузка.",
    },
    {
      question: "Какие виды заботы о теле вы предлагаете?",
      answer:
        "Мы предлагаем широкий спектр техник: классическая, спортивная, релаксационная, тайская и другие восточные техники. Наши специалисты могут комбинировать разные техники в одном сеансе в зависимости от ваших потребностей и пожеланий.",
    },
    {
      question: "Сколько длится сеанс?",
      answer:
        "Мы предлагаем сеансы продолжительностью 50 минут и 100 минут. Для первого посещения рекомендуем выбрать сеанс 50 минут, чтобы познакомиться с техникой. Для более глубокой проработки мышц и полного расслабления подойдет сеанс 100 минут.",
    },
    {
      question: "Какие способы оплаты вы принимаете?",
      answer:
        "Мы принимаем оплату наличными, банковскими картами (Visa, MasterCard, МИР), а также через электронные кошельки и мобильные приложения (Apple Pay, Google Pay). Также у нас есть возможность приобрести абонементы со скидкой на несколько сеансов.",
    },
    {
      question: "Нужно ли приходить заранее?",
      answer:
        "Да, мы рекомендуем приходить за 10-15 минут до начала сеанса. Это даст вам время переодеться, заполнить необходимые формы (для новых клиентов) и немного расслабиться перед процедурой. Если вы опаздываете, пожалуйста, предупредите нас по телефону.",
    },
    {
      question: "Можно ли отменить или перенести запись?",
      answer:
        "Да, вы можете отменить или перенести запись не позднее чем за 3 часа до начала сеанса без штрафных санкций. Для этого позвоните нам по телефону или воспользуйтесь функцией отмены в приложении. Отмена менее чем за 3 часа может привести к списанию стоимости сеанса или его части.",
    },
  ]

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-[#FDFDFB]">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center text-[#4E4E4E]">Часто задаваемые вопросы</h2>
        <p className="text-base sm:text-lg text-[#4E4E4E] text-center mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-2">
          Ответы на самые популярные вопросы о наших услугах, записи и оплате
        </p>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index + 1}`} 
                className="border-b border-[#C3B299]/30 mb-1 sm:mb-2"
              >
                <AccordionTrigger 
                  className="text-base sm:text-lg font-medium py-3 sm:py-4 md:py-5 text-[#4E4E4E] hover:text-[#A4C49A] text-left"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-sm sm:text-base text-[#4E4E4E]/80 text-justify sm:text-left px-1 sm:px-2 leading-relaxed"
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
