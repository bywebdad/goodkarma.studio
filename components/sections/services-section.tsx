import { Heart, Zap, Stethoscope, Sparkles, Leaf, Target } from "lucide-react"
import { ServiceCard } from "@/components/cards/service-card"

export function ServicesSection() {
  const services = [
    {
      icon: Heart,
      title: "Лимфо-детокс",
      description:
        "Мягкие прикосновения запускают естественное очищение организма, уменьшают отечность и возвращают телу ощущение свежести.",
    },
    {
      icon: Zap,
      title: "Классика прикосновений",
      description:
        "Надежные техники, проверенные временем. Снимают напряжение, улучшают самочувствие и помогают ощутить спокойствие в каждом движении.",
    },
    {
      icon: Stethoscope,
      title: "Сила формы",
      description: "Точные воздействия активизируют кровообращение, улучшают внешний вид кожи и помогают телу стать выразительнее и энергичнее.",
    },
    {
      icon: Sparkles,
      title: "Ручная коррекция",
      description: "Фокус на зонах, снимает локальные зажимы и дискомфорт, улучшает подвижность суставов и мышц.",
    },
    {
      icon: Leaf,
      title: "Восстановление",
      description: "Комплексное воздействие для ускорения восстановления мышц после физических нагрузок, снижения болезненности и спазмов.",
    },
    {
      icon: Target,
      title: "Face-практика",
      description: "Расслабление мышц, улучшение микроциркуляции лица. Сияющий и отдохнувший вид без аппаратных процедур.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-[#F8F1EC]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#4E4E4E]">Что умеют наши мастера</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
