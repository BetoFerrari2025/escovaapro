import { Star, ThumbsUp } from "lucide-react";
import { useState } from "react";
import resultado1 from "@/assets/resultado-espelho-1.jpg";
import resultado2 from "@/assets/resultado-espelho-2.jpg";
import resultado3 from "@/assets/resultado-espelho-3.jpg";

const reviews = [
  {
    name: "Carlos Eduardo",
    date: "10/03/2026",
    rating: 5,
    text: "Incrível! Apliquei na parede da sala e ficou parecendo um espelho de verdade. Todos os visitantes ficam impressionados. Super recomendo!",
    helpful: 234,
    image: resultado1,
  },
  {
    name: "Fernanda Lima",
    date: "05/03/2026",
    rating: 5,
    text: "Melhor compra que fiz para minha casa! O acabamento espelhado ficou perfeito no corredor, deu uma sensação de amplitude incrível.",
    helpful: 189,
  },
  {
    name: "Roberto Santos",
    date: "01/03/2026",
    rating: 5,
    text: "Usei no salão de beleza e ficou maravilhoso! As clientes adoraram. Parece que instalei espelhos enormes na parede. Chegou rápido e bem embalado.",
    helpful: 156,
    image: resultado2,
  },
];

const CustomerReviews = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? reviews : reviews.slice(0, 2);

  return (
    <section className="bg-card rounded-lg p-4 md:p-6">
      <h2 className="text-lg font-extrabold text-foreground mb-4">
        Avaliações de clientes
      </h2>

      {/* Summary */}
      <div className="flex items-center gap-4 mb-5 pb-4 border-b border-border">
        <div className="text-center">
          <p className="text-3xl font-black text-foreground">5.0<span className="text-sm font-normal text-muted-foreground">/5</span></p>
          <div className="flex mt-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={14} className="fill-store-yellow text-store-yellow" />
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground mt-0.5">2.341 avaliações</p>
        </div>
        <div className="flex gap-1.5 overflow-x-auto flex-1">
          {[resultado1, resultado2, resultado3, resultado1].map((img, i) => (
            <div key={i} className="w-14 h-14 rounded-md overflow-hidden flex-shrink-0 border border-border">
              <img src={img} alt={`Foto cliente ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Reviews list */}
      <div className="space-y-4">
        {displayed.map((review, i) => (
          <div key={i} className="border-b border-border pb-4 last:border-0 last:pb-0">
            <div className="flex items-center justify-between">
              <p className="font-bold text-sm text-foreground">{review.name}</p>
              <span className="text-[10px] text-muted-foreground">{review.date}</span>
            </div>
            <div className="flex mt-0.5 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={12} className={s <= review.rating ? "fill-store-yellow text-store-yellow" : "text-border"} />
              ))}
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">{review.text}</p>
            {review.image && (
              <div className="mt-2 w-16 h-16 rounded-md overflow-hidden border border-border">
                <img src={review.image} alt="Foto da avaliação" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
              <ThumbsUp size={12} />
              <span>Isso ajudou? ({review.helpful})</span>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 w-full py-2.5 border-2 border-store-blue text-store-blue font-bold text-sm rounded-lg hover:bg-store-blue/5 transition"
        >
          Mostrar mais avaliações
        </button>
      )}
    </section>
  );
};

export default CustomerReviews;
