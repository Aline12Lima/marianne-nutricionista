import { Card } from "@/components/ui/card";
import { Soup, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const posts = [
    {
      title: "Café da manhã saudável em 5 minutos, saudável e simples",
      excerpt:
        "Entenda a diferença entre fome física e emocional e aprenda estratégias para lidar com cada uma delas.",

      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
    },
    {
      title: "Almoço nutritivo: receitas rápidas para o dia a dia",
      excerpt:
        "Desconstrua crenças limitantes sobre alimentação e descubra o que realmente importa para sua saúde.",

      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
    },
    {
      title: "Jantar leve: opções deliciosas para uma boa noite de sono",
      excerpt:
        "Como a prática da atenção plena pode transformar sua experiência com a alimentação.",

      image:
        "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog  Receitas e Dicas </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Receitas, dicas de nutrição e bem-estar para uma vida mais saudável.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index}>
              <Card
                onClick={() => setSelectedPost(post)} // define o post clicado
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
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        {selectedPost && (
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedPost.title}</DialogTitle>
              <DialogDescription>{selectedPost.date}</DialogDescription>
            </DialogHeader>
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-muted-foreground">
              Aqui você pode colocar o conteúdo completo da receita,
              ingredientes e modo de preparo. Esse texto pode vir de uma
              propriedade “content” no seu objeto `post`.
            </p>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default BlogSection;
