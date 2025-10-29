import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const posts = [
    {
      title: "Como identificar a fome emocional",
      excerpt: "Entenda a diferença entre fome física e emocional e aprenda estratégias para lidar com cada uma delas.",
      date: "15 de março, 2024",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
    },
    {
      title: "5 mitos sobre nutrição que você precisa esquecer",
      excerpt: "Desconstrua crenças limitantes sobre alimentação e descubra o que realmente importa para sua saúde.",
      date: "10 de março, 2024",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
    },
    {
      title: "Mindful Eating: o poder da atenção plena",
      excerpt: "Como a prática da atenção plena pode transformar sua experiência com a alimentação.",
      date: "5 de março, 2024",
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Artigos, reflexões e dicas sobre nutrição comportamental e bem-estar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden bg-card hover:shadow-xl transition-all duration-300 animate-fade-in group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  Ler mais <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
