import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria ",
      text: "Transformou completamente minha relação com a comida. Pela primeira vez em anos, consigo comer sem culpa e ouvir os sinais do meu corpo. Gratidão infinita!",
      rating: 5,
    },
    {
      name: "Ana Silva",
      text: "Profissional incrível! Me ajudou a entender que nutrição vai muito além de dietas. Aprendi a me alimentar com consciência e respeito pelo meu corpo.",
      rating: 5,
    },
    {
      name: "Juliana Lima",
      text: "Atendimento acolhedor e humanizado. Me senti ouvida e compreendida desde a primeira consulta. Recomendo de olhos fechados!",
      rating: 5,
    },
    {
      name: "Jaiane Costa",
      text: "Depois de anos lutando contra a balança e fazendo dietas malucas, finalmente encontrei uma abordagem que faz sentido. Estou muito mais leve e feliz!",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Depoimentos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O que dizem as pessoas que passaram por esse processo de
            transformação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card hover:shadow-lg transition-all duration-300 animate-fade-in"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-primary text-primary"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-foreground">
                {testimonial.name}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
