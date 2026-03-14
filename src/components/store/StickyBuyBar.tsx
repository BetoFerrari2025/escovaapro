import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

const StickyBuyBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border p-3 lg:hidden">
      <a
        href="https://adsroi.com.br/checkout/h20NOn?aff=[ID_AFILIADO]"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-store-green hover:bg-store-green-dark text-primary-foreground font-extrabold text-base py-3.5 rounded-lg animate-pulse-green flex items-center justify-center gap-2"
      >
        <ShoppingCart size={20} />
        Comprar Agora - R$ 89,90
      </a>
    </div>
  );
};

export default StickyBuyBar;
