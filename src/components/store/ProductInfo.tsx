import { Star, Heart, ShieldCheck, Truck, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import CountdownTimer from "./CountdownTimer";

interface ProductInfoProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const ProductInfo = ({ selectedColor, onColorChange }: ProductInfoProps) => {
  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);

  return (
    <div className="space-y-4">
      {/* Title */}
      <div>
        <h1 className="text-xl md:text-2xl font-extrabold text-foreground leading-tight">
          Escova Alisadora de Cabelo 5 em 1 Sem Fio PureGlam
        </h1>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={14} className="fill-store-yellow text-store-yellow" />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">1475 avaliações</span>
          <span className="text-xs text-muted-foreground">| 8462 vendidos</span>
        </div>
        <span className="inline-block mt-2 bg-store-blue/10 text-store-blue text-xs font-bold px-2 py-0.5 rounded">
          LOJA 100% BRASILEIRA 🇧🇷
        </span>
      </div>

      {/* Color Selector */}
      <div className="space-y-2">
        <span className="text-sm font-semibold text-foreground">Cor:</span>
        <div className="flex gap-3">
          <button
            onClick={() => onColorChange("rosa")}
            className={`w-10 h-10 rounded-full border-2 transition ${
              selectedColor === "rosa" ? "border-store-blue ring-2 ring-store-blue/30" : "border-border"
            }`}
            style={{ background: "linear-gradient(135deg, #f472b6, #ec4899)" }}
            title="Rosa"
          />
          <button
            onClick={() => onColorChange("preto")}
            className={`w-10 h-10 rounded-full border-2 transition ${
              selectedColor === "preto" ? "border-store-blue ring-2 ring-store-blue/30" : "border-border"
            }`}
            style={{ background: "linear-gradient(135deg, #404040, #1a1a1a)" }}
            title="Preto"
          />
        </div>
      </div>

      {/* Price */}
      <div className="bg-card rounded-lg p-4 space-y-1.5 border border-border">
        <div className="flex items-center gap-3">
          <span className="bg-store-green text-primary-foreground text-xs font-bold px-2 py-0.5 rounded">
            ECONOMIZE R$ 60,00
          </span>
          <button onClick={() => setLiked(!liked)}>
            <Heart
              size={20}
              className={liked ? "fill-store-red text-store-red" : "text-muted-foreground"}
            />
          </button>
        </div>
        <p className="text-sm text-muted-foreground line-through">R$ 97,90</p>
        <p className="text-3xl font-black text-store-green">
          R$ 37,90
        </p>
        <p className="text-xs text-muted-foreground">
          ou 3x de <span className="font-bold">R$ 12,63</span> sem juros
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
          🔥 Corra! Restam só 3 unidades. Garanta já!
        </p>
      </div>

      {/* Quantity + Buy */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-foreground">Qtd:</span>
          <div className="flex items-center border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="px-3 py-2 hover:bg-muted transition"
            >
              <Minus size={14} />
            </button>
            <span className="px-4 py-2 text-sm font-bold border-x border-border">{qty}</span>
            <button
              onClick={() => setQty(qty + 1)}
              className="px-3 py-2 hover:bg-muted transition"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>

        <a
          href="https://adsroi.com.br/checkout/h20NOn?aff=[ID_AFILIADO]"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-store-green hover:bg-store-green-dark text-primary-foreground font-extrabold text-lg py-4 rounded-lg transition-all animate-pulse-green flex items-center justify-center gap-2"
        >
          <ShoppingCart size={22} />
          Comprar Agora
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
