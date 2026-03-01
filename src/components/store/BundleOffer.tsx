import { Check, ShoppingCart } from "lucide-react";
import productRosa from "@/assets/product-rosa.webp";
import productPreto from "@/assets/product-preto.webp";

const BundleOffer = () => {
  return (
    <section className="bg-card rounded-lg p-4 md:p-6">
      <h2 className="text-lg font-extrabold text-foreground mb-4">
        Promoção Leve Mais Pague Menos! 🎉
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center">
        {/* Product 1 - Rosa */}
        <div className="bg-muted rounded-lg p-3 text-center relative">
          <span className="absolute -top-2 -left-2 bg-store-blue text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded">
            R$ 37,90
          </span>
          <div className="w-20 h-20 mx-auto">
            <img src={productRosa} alt="Escova Rosa" className="w-full h-full object-contain" />
          </div>
          <p className="text-xs font-bold mt-2 text-foreground">Escova Alisadora - Rosa</p>
          <p className="text-xs text-muted-foreground">R$ 37,90</p>
        </div>

        <span className="text-2xl font-black text-muted-foreground text-center">+</span>

        {/* Product 2 - Preto */}
        <div className="bg-muted rounded-lg p-3 text-center relative">
          <span className="absolute -top-2 -left-2 bg-store-green text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded">
            R$ 37,90
          </span>
          <div className="w-20 h-20 mx-auto">
            <img src={productPreto} alt="Escova Preta" className="w-full h-full object-contain" />
          </div>
          <p className="text-xs font-bold mt-2 text-foreground">Escova Alisadora - Preto</p>
          <p className="text-xs text-muted-foreground">R$ 37,90</p>
        </div>

        <span className="text-2xl font-black text-muted-foreground text-center">=</span>

        {/* Bundle Price */}
        <div className="bg-store-green/10 rounded-lg p-4 border-2 border-store-green">
          <span className="inline-block bg-store-yellow text-foreground text-xs font-black px-2 py-0.5 rounded mb-2 uppercase">
            Leve mais, pague menos
          </span>
          <p className="text-sm text-muted-foreground line-through">R$ 75,80</p>
          <p className="text-2xl font-black text-store-green">R$ 57,90</p>
          <p className="text-[11px] text-muted-foreground mt-1">
            ou 3x de R$ 19,30 sem juros
          </p>
          <p className="text-[11px] text-store-green font-bold mt-0.5">
            Cada produto sai por apenas R$ 28,95
          </p>
          <p className="flex items-center gap-1 text-xs text-store-green font-bold mt-2">
            <Check size={14} /> Frete Grátis incluso nesta promoção
          </p>

          <a
            href="https://adsroi.com.br/checkout/UlyzKS?aff=[ID_AFILIADO]"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full bg-store-green hover:bg-store-green-dark text-primary-foreground font-extrabold py-3 rounded-lg transition flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            Comprar junto - R$ 57,90
          </a>

          <div className="mt-3 space-y-1.5 text-xs text-foreground/70">
            <p className="font-bold">Com 2 unidades você pode:</p>
            <p className="flex items-center gap-1"><Check size={12} className="text-store-green" /> Presentear alguém especial</p>
            <p className="flex items-center gap-1"><Check size={12} className="text-store-green" /> Ter um produto extra</p>
            <p className="flex items-center gap-1"><Check size={12} className="text-store-green" /> Economize R$ 17,90 no combo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundleOffer;
