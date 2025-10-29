import { Card } from "@/components/ui/card";
import aboutImage from "@/assets/nutritionist-about.jpg";
import { GraduationCap, Award, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img
              src={aboutImage}
              alt="Sobre a nutricionista"
              className="w-full h-auto rounded-3xl shadow-xl"
            />
          </div>
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre Mim
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sou nutricionista especializada em nutrição comportamental e transtornos alimentares, 
              com mais de 10 anos de experiência ajudando pessoas a transformarem sua relação com a comida.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Acredito que a nutrição vai muito além de contar calorias. Meu trabalho é ajudar você 
              a entender seus padrões alimentares, respeitar os sinais do seu corpo e fazer as pazes 
              com a comida de forma leve e sustentável.
            </p>
            
            <div className="space-y-4">
              <Card className="p-4 bg-card hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <GraduationCap className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Formação Acadêmica</h3>
                    <p className="text-sm text-muted-foreground">
                      Nutrição - Universidade Federal de São Paulo (UNIFESP)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Pós-graduação em Nutrição Comportamental - Instituto de Nutrição Comportamental
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <Award className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Registro Profissional</h3>
                    <p className="text-sm text-muted-foreground">
                      CRN-3: 12345/P
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <Heart className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Especialização</h3>
                    <p className="text-sm text-muted-foreground">
                      Nutrição Comportamental, Transtornos Alimentares, Mindful Eating
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
