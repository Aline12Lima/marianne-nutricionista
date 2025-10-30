import { Button } from "@/components/ui/button";
import heroImage from "@/assets/Gemini_Generated_Image_gwi140gwi140gwi1.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex justify-center items-start pt-16 bg-gradient-to-br from-[hsl(var(--hero-bg))] to-background"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">
          <div className="mt-8 md:mt-0 animate-fade-in">
            <h1 className="text-2xl md:text-2xl lg:text-5xl font-bold mb-6 leading-tight ">
              A jornada para se tornar
              <br /> a melhor versão de si mesmo começa aqui!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Bem-vindo(a) ao meu Site um espaço onde movimento, mentalidade e
              nutrição equilibrada se unem. Descubra uma abordagem holística
              para saúde e bem-estar, que combina treinamento baseado em
              evidências, nutrição e coaching de mentalidade, tudo para te
              ajudar a se sentir mais forte, confiante e no controle do seu dia
              a dia.
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
          <div className="animate-fade-in py-4">
            <img
              src={heroImage}
              alt="Nutricionista profissional"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
