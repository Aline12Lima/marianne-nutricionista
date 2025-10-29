import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Clock, Target, HeartHandshake } from "lucide-react";
import healthyFoodImage from "@/assets/img3.jpg";

const ServicesSection = () => {
  const features = [
    {
      icon: <Users className="text-primary" size={32} />,
      title: "Atendimento Personalizado",
      description:
        "Cada pessoa é única. Juntos, vamos entender sua história com a comida e criar estratégias que façam sentido para você.",
    },
    {
      icon: <Clock className="text-primary" size={32} />,
      title: "Consultas online e Presenciais",
      description:
        "Tempo dedicado para conversar, entender suas necessidades e trabalhar de forma acolhedora e sem julgamentos.",
    },
    {
      icon: <Target className="text-primary" size={32} />,
      title: "Foco em Comportamento",
      description:
        "Não trabalhamos com dietas restritivas. O objetivo é construir uma relação saudável e sustentável com a alimentação.",
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
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como Funciona o Acompanhamento Nutricional
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma abordagem humanizada e baseada em evidências científicas para
            transformar sua relação com a comida
          </p>
        </div>

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

        <div className="bg-[hsl(var(--section-bg))] rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              O que é Nutrição Comportamental?
            </h3>
            <p className="text-muted-foreground mb-4">
              A nutrição comportamental é uma abordagem que vai além dos
              nutrientes. Ela considera seus hábitos, emoções, ambiente e
              história pessoal para promover mudanças reais e duradouras.
            </p>
            <p className="text-muted-foreground mb-6">
              Juntos, vamos trabalhar para que você desenvolva autonomia
              alimentar, aprenda a ouvir os sinais do seu corpo e construa uma
              relação de paz com a comida.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agende sua consulta
              </a>
            </Button>
          </div>
          <div>
            <img
              src={healthyFoodImage}
              alt="Alimentação saudável"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
