import { Button } from "@/components/ui/button";
import heroImage from "@/assets/nutritionist-hero.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-[hsl(var(--hero-bg))] to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Faça as pazes com a comida e com o seu corpo
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Através da nutrição comportamental, ajudo você a construir uma relação saudável e equilibrada com a alimentação, sem dietas restritivas ou culpa.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                Agende sua consulta
              </a>
            </Button>
          </div>
          <div className="animate-fade-in">
            <img
              src={heroImage}
              alt="Nutricionista profissional"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
