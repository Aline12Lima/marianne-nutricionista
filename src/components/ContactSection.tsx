import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato para agendar sua consulta ou tirar suas dúvidas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 bg-card hover:shadow-lg transition-shadow animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium mb-1">Telefone / WhatsApp</h4>
                  <p className="text-muted-foreground">(11) 99999-9999</p>
                  <Button variant="link" className="px-0 h-auto mt-1" asChild>
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                      Enviar mensagem
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium mb-1">E-mail</h4>
                  <p className="text-muted-foreground">contato@nutricionista.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium mb-1">Endereço</h4>
                  <p className="text-muted-foreground">
                    Rua das Flores, 123 - Sala 45<br />
                    Jardim Paulista, São Paulo - SP<br />
                    CEP: 01234-567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium mb-1">Horário de Atendimento</h4>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-[hsl(var(--hero-bg))] border-primary/20 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">Pronto para começar?</h3>
            <p className="text-muted-foreground mb-6">
              Agende sua primeira consulta e dê o primeiro passo para transformar sua relação com a alimentação.
            </p>
            <p className="text-muted-foreground mb-8">
              O atendimento pode ser presencial ou online, de acordo com sua preferência e necessidade.
            </p>
            <Button variant="hero" size="lg" className="w-full" asChild>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                Agendar Consulta pelo WhatsApp
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
