// src/components/Projetos.tsx

// Importa os componentes do carrossel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"; // Usado para formatar a imagem

// --- IMPORTE SUAS IMAGENS AQUI ---
// Lembre-se de colocar suas imagens na pasta 'src/assets/'
import ImagemProjeto1 from "@/assets/im4.jpg"; // Exemplo
import ImagemProjeto2 from "@/assets/im5.jpg"; // Exemplo
import ImagemProjeto3 from "@/assets/im6.jpg"; // Exemplo

const Projetos = () => {
  // Lista de imagens para o carrossel
  const listaProjetos = [
    {
      src: ImagemProjeto1,
      alt: "Descrição da imagem do projeto 1",
    },
    {
      src: ImagemProjeto2,
      alt: "Descrição da imagem do projeto 2",
    },
    {
      src: ImagemProjeto3,
      alt: "Descrição da imagem do projeto 3",
    },
  ];

  return (
    // CORREÇÃO: O 'id' agora é "projetos" para combinar com seu menu
    <section id="projetos" className="py-10">
      {" "}
      <div className="container mx-auto px-2">
        {" "}
        <div className="text-center mb-12 animate-slide-up">
          {" "}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos   </h2>
          <p className="text-lg text-muted-foreground">
            Conheça alguns projetos{" "}
          </p>{" "}
        </div>
        {/* SUBSTITUIÇÃO: Sai o Accordion, entra o Carousel */}
        <div className="flex justify-center animate-fade-in">
          {" "}
          <Carousel
            opts={{
              align: "start",
              loop: true, // Faz o carrossel girar infinitamente
            }}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg" // Define a largura
          >
            <CarouselContent>
              {listaProjetos.map((projeto, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                  <div className="p-1">
                    <Card>
                      {" "}
                      <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden rounded-lg">
                        <img
                          src={projeto.src}
                          alt={projeto.alt}
                          className="w-full h-full object-cover"
                        />{" "}
                      </CardContent>{" "}
                    </Card>
                     {" "}
                  </div>{" "}
                </CarouselItem>
              ))}{" "}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />{" "}
          </Carousel>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Projetos;
