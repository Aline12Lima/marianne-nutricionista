import { Button } from "@/components/ui/button";
import heroImage from "@/assets/Gemini_Generated_Image_gwi140gwi140gwi1.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      // FUNDO: Cor areia (#F5EBE0)
      className="min-h-screen flex items-center py-48 md:py-32 px-4 bg-[#F5EBE0]"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">
          {/* Texto + botão */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              A jornada para se tornar
              <br /> a melhor versão de si mesmo começa aqui!
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Bem-vindo(a) ao meu Site, um espaço onde movimento, mentalidade e
              nutrição equilibrada se unem. Descubra uma abordagem holística
              para saúde e bem-estar, combinando treinamento baseado em
              evidências, nutrição e coaching de mentalidade.
            </p>

            {/* BOTÃO ALTERADO: 
                1. size="sm" para ficar pequeno.
                2. bg-[#C59C95] para um tom Rosê Areia (mais terroso).
                3. w-fit para ajustar a largura ao texto.
            */}
            <Button
              variant="default"
              size="lg"
              className="w-fit  rounded-full bg-[#C59C95] hover:bg-[#b08b84] text-white shadow-md"
              asChild
            >
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agende sua consulta
              </a>
            </Button>
          </div>

          {/* Imagem */}
          <div className="flex justify-center md:justify-end animate-fade-in">
            <img
              src={heroImage}
              alt="Nutricionista profissional"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
