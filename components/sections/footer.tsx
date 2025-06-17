import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#A4C49A] text-white py-8">
      <div className="container mx-auto px-3">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#FDFDFB]">Good Karma</h3>
            <p className="text-[#FDFDFB]/80 mb-4">
              Сеть центров в Москве <br /> Профессиональная забота о теле за фиксированную цену.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-neutral-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-neutral-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
            </div> */}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#FDFDFB]">Контакты</h3>
            <p className="text-[#FDFDFB]/80 mb-2">
              <a href="tel:+71234567890" className="hover:text-white transition-colors">
                +7 (123) 456-78-90
              </a>
            </p>
            <p className="text-[#FDFDFB]/80 mb-2">г. Москва, ул. Тверская, д. 10, стр. 1</p>
            <p className="text-[#FDFDFB]/80 mb-2">+7 (123) 456-78-90</p>
            <p className="text-[#FDFDFB]/80">info@goodkarma.ru</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#FDFDFB]">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#FDFDFB]/80 hover:text-white transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link href="/" className="text-[#FDFDFB]/80 hover:text-white transition-colors">
                  Пользовательское соглашение
                </Link>
              </li>
              <li>
                <Link href="/" className="text-[#FDFDFB]/80 hover:text-white transition-colors">
                  Обработка персональных данных
                </Link>
              </li>

            </ul>
            <a href="https://webdad.by" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity mt-5 block">
            <Image 
              src="/logowebdad3.png" 
              alt="Webdad" 
              width={110} 
              height={40} 
              className="object-contain"
            />
          </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
