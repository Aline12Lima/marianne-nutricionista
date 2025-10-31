// src/components/Projetos.tsx

// Importa os componentes do carrossel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import ImagemProjeto1 from "@/assets/img8.jpg";
import ImagemProjeto2 from "@/assets/img9.jpg";
import ImagemProjeto3 from "@/assets/img2.jpg";
import ImagemProjeto4 from "@/assets/img3.jpg";

const Projetos = () => {
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
    {
      src: ImagemProjeto4,
      alt: "Descrição da imagem do projeto 3",
    },
  ];

  return (
    <section id="projetos" className="py-10">
      <div className="container mx-auto px-2">
        {" "}
        <div className="text-start mb-12 animate-slide-up">
          {" "}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos   </h2>
          <p className="text-lg text-muted-foreground text-left">
            Projetos que transformam: experiências como nutricionista, <br />{" "}
            estudante e voluntária promovendo hábitos saudáveis e bem-estar em
            diversas comunidades.{" "}
          </p>{" "}
          <p className="text-lg text-muted-foreground text-left">
            {" "}
            Confira alguns eventos abaixo:
          </p>
        </div>
        <div className="flex justify-center animate-fade-in w-full">
          {" "}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          >
            <CarouselContent>
              {listaProjetos.map((projeto, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
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
