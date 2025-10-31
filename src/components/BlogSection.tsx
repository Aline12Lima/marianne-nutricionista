import { Card } from "@/components/ui/card";
import { Soup, ArrowRight } from "lucide-react";
import CoffeeImage from "@/assets/Cuscuz-nordestino.jpg";
import lunchImage from "@/assets/Frango.png";
import dinnerImage from "@/assets/Cuscuz-nordestino.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

interface Post {
  title: string;
  excerpt: string;
  image: string;
  ingredients: string[];
  preparation: string;
  date?: string;
}

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const posts: Post[] = [
    {
      title: "Café da manhã saudável em 5 minutos, saudável e simples",
      excerpt: "Cuscuz Nordestino com Ovo e Queijo Coalho",
      image: CoffeeImage,
      ingredients: [
        "½ xícara (chá) de flocos de milho para cuscuz",
        "3 colheres (sopa) de água",
        "1 ovo",
        "1 fatia pequena de queijo coalho (ou minas padrão)",
        "1 pitada de sal",
        "1 fio de azeite de oliva",
      ],
      preparation: `Em uma tigela, hidrate o floco de milho com a água e o sal. Deixe descansar por cerca de 5 minutos. Coloque na cuscuzeira (ou improvise com peneira e panela) e cozinhe por 5 a 7 minutos até ficar bem soltinho. Enquanto isso, em uma frigideira antiaderente, grelhe o queijo coalho e o ovo no azeite. Monte o prato: cuscuz + ovo + queijo. Pode adicionar uma salada de frutas ou café preto para acompanhar.`,
    },
    {
      title: "Almoço nutritivo e simples",
      excerpt: "Frango Grelhado com Feijão, Arroz e Legumes Coloridos",
      image: lunchImage,
      ingredients: [
        "100g de peito de frango grelhado",
        "½ xícara de arroz integral cozido",
        "½ xícara de feijão",
        "Legumes variados (cenoura, brócolis, abobrinha)",
        "1 colher de chá de azeite",
      ],
      preparation: `Tempere o peito de frango com sal e pimenta e grelhe até dourar. Em uma panela, aqueça o azeite e refogue os legumes até ficarem macios. Sirva o frango fatiado sobre uma cama de arroz e feijão, acompanhado dos legumes.`,
    },
    {
      title: "Jantar leve e delicioso",
      excerpt: "Peixe Grelhado com Purê de Macaxeira e Legumes",
      image: dinnerImage,
      ingredients: [
        "½ xícara de macaxeira (aipim/mandioca) cozida",
        "1 colher de chá de azeite de oliva",
        "Legumes variados (cenoura, abobrinha, couve, pimentão)",
        "Suco de ½ limão",
        "Sal e pimenta a gosto",
        "Ervas frescas (coentro ou salsinha)",
      ],
      preparation: `Tempere o peixe com sal, pimenta e suco de limão. Cozinhe a macaxeira até ficar macia e faça um purê com azeite. Grelhe o peixe em frigideira antiaderente. Refogue os legumes rapidamente. Monte o prato: purê de macaxeira + peixe + legumes. Finalize com ervas frescas.`,
    },
  ];

  return (
    <section id="blog" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Blog Receitas e Dicas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Receitas, dicas de nutrição e bem-estar para uma vida mais saudável.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index}>
              <Card
                onClick={() => setSelectedPost(post)}
                className="overflow-hidden bg-card hover:shadow-xl transition-all duration-300 animate-fade-in group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Soup size={16} />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    Ler mais{" "}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* DIALOG */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        {selectedPost && (
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedPost.title}</DialogTitle>
              {selectedPost.date && (
                <DialogDescription>{selectedPost.date}</DialogDescription>
              )}
            </DialogHeader>
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold mb-2">Ingredientes:</h4>
            <ul className="list-disc list-inside text-muted-foreground mb-4">
              {selectedPost.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <h4 className="font-semibold mb-2">Modo de preparo:</h4>
            <p>{selectedPost.preparation}</p>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default BlogSection;
