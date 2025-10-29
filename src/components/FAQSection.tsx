import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Você atende por convênio?",
      answer: "Atualmente não atendo por convênio, mas forneço recibo para que você possa solicitar reembolso junto ao seu plano de saúde. Entre em contato para mais informações sobre valores e condições de pagamento.",
    },
    {
      question: "Como funciona a primeira consulta?",
      answer: "Na primeira consulta, vamos conversar sobre sua história com a alimentação, seus objetivos, rotina e desafios. É um momento de acolhimento e conhecimento mútuo, onde começamos a construir juntos o caminho para uma relação mais saudável com a comida.",
    },
    {
      question: "Qual a diferença entre nutrição tradicional e nutrição comportamental?",
      answer: "A nutrição comportamental vai além de prescrições e dietas. Focamos em entender seus comportamentos alimentares, emoções relacionadas à comida e padrões que influenciam suas escolhas. O objetivo é promover autonomia e uma relação de paz com a alimentação, sem restrições desnecessárias.",
    },
    {
      question: "Com que frequência preciso fazer as consultas?",
      answer: "A frequência é individualizada. Geralmente, iniciamos com consultas quinzenais ou mensais, e vamos ajustando conforme sua evolução e necessidade. O importante é manter um acompanhamento que faça sentido para você.",
    },
    {
      question: "Você trabalha com emagrecimento?",
      answer: "Não trabalho com foco em emagrecimento ou perda de peso como objetivo principal. O foco é ajudar você a construir uma relação saudável com a comida e com seu corpo. Mudanças no peso podem acontecer naturalmente como consequência de hábitos mais equilibrados, mas não são o centro do trabalho.",
    },
    {
      question: "Atende crianças e adolescentes?",
      answer: "Sim, atendo todas as faixas etárias. Para crianças e adolescentes, é importante a participação da família no processo, pois trabalhamos com toda a dinâmica familiar em relação à alimentação.",
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Respostas para as perguntas mais comuns sobre o atendimento
          </p>
        </div>

        <Accordion type="single" collapsible className="animate-fade-in">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
