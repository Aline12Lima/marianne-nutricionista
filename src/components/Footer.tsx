import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5EBE0] border-t border-[#e0d6cd] py-8">
      {/* 1. Adicionei 'px-8 md:px-12' para dar bastante espaço nas laterais e não colar na borda */}
      <div className="container mx-auto px-8 md:px-12">
        {/* 2. Adicionei 'place-items-center' para forçar o grid a centralizar os blocos */}
        <div className="grid md:grid-cols-3 gap-8 mb-8 place-items-center text-center">
          {/* Coluna 1: Centralizada */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Nutrição & Bem-Estar
            </h3>
            <p className="text-gray-600">
              Marianne Lima <br /> Especialista em nutrição.
            </p>
          </div>

          {/* Coluna 2: Centralizada */}
          <div className="flex flex-col items-center w-full">
            <h4 className="font-semibold mb-4 text-gray-900">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sobre"
                  className="text-gray-600 hover:text-[#C59C95] transition-colors"
                >
                  Sobre Mim
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-gray-600 hover:text-[#C59C95] transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-600 hover:text-[#C59C95] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-gray-600 hover:text-[#C59C95] transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Centralizada */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-4 text-gray-900">Redes Sociais</h4>
            <div className="flex gap-4 items-center justify-center">
              <a
                href="https://www.instagram.com/marianne_lima2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#C59C95] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#C59C95] transition-colors"
                aria-label="WhatsApp"
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
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e0d6cd] pt-6 text-center text-sm text-gray-500">
          <p>
            © {currentYear} Nutrição & Bem-Estar. Todos os direitos reservados.
          </p>
          <p className="mt-2">CRN-3: 12345/P</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
