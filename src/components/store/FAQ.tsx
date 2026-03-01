import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Os resultados são rápidos?", a: "Sim! Com apenas uma passada você já nota a diferença. Em poucos minutos seu cabelo fica liso, brilhoso e sem frizz." },
  { q: "Como usar?", a: "Basta ligar a escova, esperar aquecer (cerca de 30 segundos) e escovar o cabelo normalmente. Simples assim!" },
  { q: "É seguro usar?", a: "Totalmente! A escova possui tecnologia anti-queimadura com cerdas isolantes que protegem o couro cabeludo." },
  { q: "Envia pra minha cidade?", a: "Sim! Enviamos para todo o Brasil com frete grátis. Entrega em até 5 dias úteis." },
  { q: "Envio & Garantia", a: "Oferecemos garantia de 30 dias de satisfação. Se não gostar, devolvemos seu dinheiro." },
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
