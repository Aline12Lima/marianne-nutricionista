import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Clock, Target, HeartHandshake } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import healthyFoodImage from "@/assets/im6.jpg";
import image2 from "@/assets/im4.jpg";
import image3 from "@/assets/im5.jpg";

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
        "Realizo acompanhamento nutricional através de consultas online e presenciais, conforme preferencia e possibilidade do paciente.Você receberá seu plano nutricional personalizado e acessível.",
    },
    {
      icon: <Target className="text-primary" size={32} />,
      title: "Foco em diversos objetivos Nutricional ",
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
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
              className="p-6 bg-card hover:shadow-lg transition-all duration-300 animate-fade-in"
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
        <div className="bg-[hsl(var(--section-bg))] rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-start animate-slide-up">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mt-5">
              Palestras e Workshops de Nutrição
            </h3>
            <p className="text-muted-foreground mb-4 mt-8">
              Levo educação nutricional de forma leve, prática e inspiradora,
              ajudando pessoas, empresas e comunidades a transformarem seus
              hábitos alimentares. Minhas palestras abordam temas como
              alimentação saudável, energia no trabalho, nutrição comportamental
              e bem-estar, sempre com foco em resultados reais e aplicáveis no
              dia a dia.
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
              💻 Online: palestras e workshops interativos via Meet ou Zoom, com
              material digital incluso.
            </p>

            <Button variant="hero" size="lg" asChild>
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
            <Carousel
              plugins={[autoplay.current]}
              className="max-w-sm md:max-w-md mx-auto rounded-2xl shadow-lg"
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
            >
              <CarouselContent>
                {[healthyFoodImage, image2, image3].map((img, i) => (
                  <CarouselItem key={i}>
                    <div className="w-full h-64 md:h-80 overflow-hidden rounded-2xl">
                      <img
                        src={img}
                        alt={`Imagem ${i + 1} da palestra`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
