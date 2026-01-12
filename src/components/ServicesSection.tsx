import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Clock, Target, HeartHandshake } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import healthyFoodImage from "@/assets/im6.jpg";

import imag from "@/assets/im5.jpg";

const ServicesSection = () => {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const features = [
    {
      icon: <Users className="text-primary" size={32} />,
      title: "Palestras e Workshops Personalizados",
      description:
        "Transformo conhecimento em saúde com palestras que inspiram mudanças reais nos hábitos alimentares.",
    },
    {
      icon: <Clock className="text-primary" size={32} />,
      title: "Consultas Online e Presenciais",
      description:
        "Realizo acompanhamento nutricional através de consultas online e presenciais, conforme preferencia e possibilidade do paciente. Você receberá seu plano nutricional personalizado e acessível.",
    },
    {
      icon: <Target className="text-primary" size={32} />,
      title: "Foco em diversos objetivos Nutricionais",
      description:
        "Emagrecimento saudável, Nutrição comportamental, Nutrição esportiva, Saúde digestiva, Alimentação infantil e muito mais.",
    },
    {
      icon: <HeartHandshake className="text-primary" size={32} />,
      title: "Acompanhamento Contínuo",
      description:
        "Suporte constante entre as consultas, para que você se sinta acompanhado em toda sua jornada.",
    },
  ];

  return (
    <section
      id="servicos"
      // 1. Fundo da seção cor Areia (igual ao Hero)
      className="py-20 bg-[#F5EBE0]"
    >
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mt-10 mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Como Funciona o Acompanhamento Nutricional
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhamento nutricional individualizado que valoriza a
            alimentação tradicional nordestina, promovendo saúde, bem-estar e
            equilíbrio em todas as fases da vida — com atendimentos presenciais
            e online.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              // 2. Cards Brancos e Redondos levemente (rounded-2xl)
              className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in border-none"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bloco Palestras */}
        {/* 3. Fundo Branco para destacar do fundo Areia */}
        <div className="bg-white rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-start animate-slide-up shadow-sm">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mt-5 text-gray-900">
              Palestras e Workshops de Nutrição
            </h3>
            <p className="text-muted-foreground mb-4 mt-8">
              Levo educação nutricional de forma leve, prática e inspiradora,
              ajudando pessoas, empresas e comunidades a transformarem seus
              hábitos alimentares. Minhas palestras abordam temas como
              alimentação saudável, energia no trabalho, nutrição comportamental
              e bem-estar.
            </p>
            <p className="text-muted-foreground mb-2">
              🎓 Escolas: educação alimentar para crianças, adolescentes e pais.
            </p>
            <p className="text-muted-foreground mb-2">
              💪🏽 Academias: alimentação para performance, recuperação e
              motivação.
            </p>
            <p className="text-muted-foreground mb-2">
              👷🏽 Empresas : como se alimentar melhor e aumentar a produtividade.
            </p>
            <p className="text-muted-foreground mb-2">
              💻 Online: palestras e workshops interativos via Meet ou Zoom.
            </p>

            {/* 4. Botão atualizado para o estilo Rose/Redondo */}
            <Button
              size="lg"
              className="mt-6 w-fit bg-[#C59C95] hover:bg-[#b08b84] text-white shadow-md rounded-full"
              asChild
            >
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agende uma Palestra
              </a>
            </Button>
          </div>

          <div>
            <div className="w-full h-64 md:h-80 overflow-hidden rounded-2xl">
              <img
                src={imag}
                alt={`Imagem  da palestra`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
