import { useState } from "react";

const ProductDescription = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-store-blue-dark rounded-lg p-4 md:p-6 text-primary-foreground">
      <h2 className="text-lg font-extrabold mb-3">Informações do produto</h2>

      <div className={`space-y-3 text-sm leading-relaxed ${!expanded ? "max-h-40 overflow-hidden relative" : ""}`}>
        <h3 className="text-base font-extrabold text-store-yellow">
          Descubra a Escova Alisadora de Cabelos Sem Fio PureGlam que faz o MESMO EFEITO de Progressiva em SEGUNDOS! 🌟✨
        </h3>
        <p className="opacity-90">
          Diga ADEUS à quebra, ressecamento e opacidade!
        </p>
        <p className="opacity-90">
          Você está cansada de <strong>perder tempo e dinheiro</strong> com horas no salão de beleza? Cobra de arrumar tudo e na hora de sair seu cabelo não está como queria e você se sente mal ou até desanima de sair?
        </p>
        <p className="opacity-90">
          Imagine agora <strong>você ter cabelos sempre bem arrumados</strong> sem ter que gastar dinheiro e horas no salão de beleza ou passar muito tempo na frente do espelho?
        </p>
        <p className="opacity-90">
          Com a <strong>Escova Alisadora de Cabelo Sem Fio</strong> você não precisa mais passar por essas situações frustrantes!
        </p>
        <ul className="space-y-2 opacity-90">
          <li>✅ Alisa em segundos sem danificar o cabelo</li>
          <li>✅ Tecnologia de íons para mais brilho</li>
          <li>✅ Sem fio - use em qualquer lugar</li>
          <li>✅ 5 temperaturas ajustáveis</li>
          <li>✅ Bateria de longa duração</li>
        </ul>
        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-store-blue-dark to-transparent" />
        )}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 bg-store-green hover:bg-store-green-dark text-primary-foreground font-bold text-sm py-2.5 px-6 rounded-lg transition"
      >
        {expanded ? "Mostrar menos" : "Mostrar mais"}
      </button>
    </section>
  );
};

export default ProductDescription;
