import { Star, Heart, ShieldCheck, Truck, ShoppingCart } from "lucide-react";
import { useState } from "react";
import CountdownTimer from "./CountdownTimer";

const ProductInfo = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="space-y-4">
      {/* Title */}
      <div>
        <h1 className="text-xl md:text-2xl font-extrabold text-foreground leading-tight">
          🪞 Tinta Espelho – Efeito Reflexo Ultra
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Transforma paredes em espelho! | <span className="font-bold">3,6 litros</span></p>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={14} className="fill-store-yellow text-store-yellow" />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">2.341 avaliações</span>
          <span className="text-xs text-muted-foreground">| 5.780 vendidos</span>
        </div>
        <span className="inline-block mt-2 bg-store-blue/10 text-store-blue text-xs font-bold px-2 py-0.5 rounded">
          LOJA 100% BRASILEIRA 🇧🇷
        </span>
      </div>

      {/* Price */}
      <div className="bg-card rounded-lg p-4 space-y-1.5 border border-border">
        <div className="flex items-center gap-3">
          <span className="bg-store-green text-primary-foreground text-xs font-bold px-2 py-0.5 rounded">
            PROMOÇÃO DE LANÇAMENTO 🔥
          </span>
          <button onClick={() => setLiked(!liked)}>
            <Heart
              size={20}
              className={liked ? "fill-store-red text-store-red" : "text-muted-foreground"}
            />
          </button>
        </div>
        <p className="text-sm text-muted-foreground line-through">R$ 197,90</p>
        <p className="text-3xl font-black text-store-green">
          R$ 27,00
        </p>
        <p className="text-xs text-muted-foreground">
          ou 3x de <span className="font-bold">R$ 9,00</span> sem juros
        </p>
      </div>

      {/* Countdown */}
      <CountdownTimer />

      {/* Shipping */}
      <div className="flex items-start gap-2 bg-store-green/10 rounded-lg p-3">
        <Truck size={18} className="text-store-green mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm font-bold text-store-green">
            Frete Grátis pra todo Brasil hoje
          </p>
          <p className="text-xs text-muted-foreground">
            Receba em 5 dias. Aproveite agora!
          </p>
        </div>
      </div>

      {/* Urgency */}
      <div className="bg-store-orange/10 rounded-lg p-3 border border-store-orange/30">
        <p className="text-sm font-bold text-store-orange">
          🔥 Corra! Restam só 7 unidades do lote promocional. Garanta já!
        </p>
      </div>

      {/* Buy */}
      <div className="space-y-3">
        <a
          href="https://adsroi.com.br/checkout/h20NOn?aff=[ID_AFILIADO]"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-store-green hover:bg-store-green-dark text-primary-foreground font-extrabold text-lg py-4 rounded-lg transition-all animate-pulse-green flex items-center justify-center gap-2"
        >
          <ShoppingCart size={22} />
          QUERO MINHA TINTA ESPELHO AGORA
        </a>

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck size={14} className="text-store-green" />
          <span>Pagamento Seguro | Compra Protegida</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
