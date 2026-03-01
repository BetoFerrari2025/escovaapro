import { Star, ThumbsUp } from "lucide-react";
import { useState } from "react";
import productModel from "@/assets/product-model.png";
import productResult from "@/assets/product-result.png";

const reviews = [
  {
    name: "Silvana Gonçalves",
    date: "12/01/2025",
    rating: 5,
    text: "Excelente produto. Funciona tudo como descrito. Estou amando, faz liso bem, cabelo fica lindo e brilhoso, chega rápido sim.",
    helpful: 49,
    image: productModel,
  },
  {
    name: "Maria Moreira",
    date: "08/01/2025",
    rating: 5,
    text: "Melhor compra que fiz! Meu cabelo ficou liso perfeito em casa, super fácil de usar. Recomendo!",
    helpful: 198,
  },
  {
    name: "Raquel Silveira",
    date: "05/01/2025",
    rating: 5,
    text: "Chegou no prazo. Bem embalada. A textura é profissional. Bom alisar, liso lindo, duradouro. Maravilhosa!",
    helpful: 122,
    image: productResult,
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
          <p className="text-[10px] text-muted-foreground mt-0.5">1.175 avaliações</p>
        </div>
        <div className="flex gap-1.5 overflow-x-auto flex-1">
          {[productModel, productResult, productModel, productResult].map((img, i) => (
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
