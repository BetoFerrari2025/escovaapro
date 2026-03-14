import { useState } from "react";

const ProductDescription = () => {
  return (
    <section className="bg-store-blue-dark rounded-lg p-4 md:p-6 text-primary-foreground">
      <h2 className="text-lg font-extrabold mb-3">Informações do produto</h2>

      <div className="space-y-4 text-sm leading-relaxed">
        <h3 className="text-base font-extrabold text-store-yellow">
          ✨ TRANSFORME QUALQUER PAREDE EM UM ESPELHO LUXUOSO
        </h3>
        <p className="opacity-90">
          Imagine entrar em um ambiente comum… e ele parecer um espaço moderno, elegante e futurista, como aqueles apartamentos de alto padrão.
        </p>
        <p className="opacity-90">
          Agora imagine fazer isso <strong>sem quebrar paredes, sem instalar espelhos caros e sem reforma complicada.</strong>
        </p>
        <p className="opacity-90">
          Apresentamos a revolucionária:
        </p>
        <p className="text-store-yellow font-extrabold text-base">
          🪞 TINTA ESPELHO – EFEITO REFLEXO ULTRA
        </p>
        <p className="opacity-90">
          A tinta inovadora que transforma qualquer parede em um espelho brilhante e sofisticado em poucas aplicações.
        </p>
        <p className="opacity-90">Com apenas uma pintura simples, suas paredes ganham:</p>
        <ul className="space-y-2 opacity-90">
          <li>✔ Efeito espelhado impressionante</li>
          <li>✔ Ambientes mais iluminados e sofisticados</li>
          <li>✔ Sensação de espaço maior</li>
          <li>✔ Visual moderno digno de revista de decoração</li>
        </ul>

        <h3 className="text-base font-extrabold text-store-yellow mt-4">
          🏠 DEIXE SUA CASA COM APARÊNCIA DE MILHÕES
        </h3>
        <p className="opacity-90">
          Salas comuns viram ambientes luxuosos. Corredores ficam mais amplos e iluminados. Quartos ganham um toque moderno e elegante.
        </p>
        <p className="opacity-90">
          Tudo isso com uma única lata de tinta. Sem gastar milhares em espelhos ou reformas.
        </p>

        <h3 className="text-base font-extrabold text-store-yellow mt-4">
          ⚡ RESULTADO QUE IMPRESSIONA NA HORA
        </h3>
        <p className="opacity-90">Assim que a tinta seca, você vê:</p>
        <ul className="space-y-2 opacity-90">
          <li>✨ Reflexo brilhante</li>
          <li>✨ Acabamento metálico premium</li>
          <li>✨ Parede com efeito espelho realista</li>
        </ul>
        <p className="opacity-90 italic">
          Seus visitantes vão perguntar: "Que espelho gigante é esse na parede?"
        </p>
        <p className="opacity-90 font-bold">
          E você vai responder: Não é espelho… é tinta. 😎
        </p>

        <h3 className="text-base font-extrabold text-store-yellow mt-4">
          🎯 PERFEITA PARA
        </h3>
        <ul className="space-y-2 opacity-90">
          <li>✔ Salas modernas</li>
          <li>✔ Quartos sofisticados</li>
          <li>✔ Escritórios</li>
          <li>✔ Lojas e vitrines</li>
          <li>✔ Salões de beleza</li>
          <li>✔ Academias</li>
          <li>✔ Restaurantes</li>
        </ul>
        <p className="opacity-90 font-bold">
          Qualquer ambiente fica mais luxuoso imediatamente.
        </p>

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
