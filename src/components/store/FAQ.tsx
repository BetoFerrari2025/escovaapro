import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Como funciona a Tinta Espelho?", a: "A Tinta Espelho possui micropartículas metálicas que criam um efeito reflexivo na parede. Basta aplicar como uma tinta comum com rolo ou pincel, e após a secagem a parede ganha um acabamento espelhado impressionante." },
  { q: "Quanto rende uma lata?", a: "Uma lata rende aproximadamente 10m² de parede, ideal para uma parede de destaque em sala, quarto ou corredor." },
  { q: "É difícil aplicar?", a: "Não! A aplicação é simples como uma tinta comum. Basta preparar a superfície, aplicar 2-3 demãos e aguardar a secagem. Qualquer pessoa consegue fazer." },
  { q: "Envia pra minha cidade?", a: "Sim! Enviamos para todo o Brasil com frete grátis. Entrega em até 5 dias úteis." },
  { q: "Tem garantia?", a: "Oferecemos garantia de 30 dias de satisfação. Se não gostar do resultado, devolvemos seu dinheiro." },
];

const FAQ = () => {
  return (
    <section className="bg-card rounded-lg p-4 md:p-6">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem value={`faq-${i}`} key={i}>
            <AccordionTrigger className="text-sm font-bold text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-foreground/70 leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
