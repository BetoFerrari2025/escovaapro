import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import productRosa from "@/assets/product-rosa.webp";
import productPreto from "@/assets/product-preto.webp";
import productPretaRosa from "@/assets/product-preta-rosa.jfif";
import productDoisRosas from "@/assets/product-dois-rosas.avif";
import productDoisPretos from "@/assets/product-dois-pretos.avif";

const images = [productRosa, productPreto, productPretaRosa, productDoisRosas, productDoisPretos];

const ImageGallery = () => {
  const [selected, setSelected] = useState(0);

  const prev = () => setSelected((s) => (s === 0 ? images.length - 1 : s - 1));
  const next = () => setSelected((s) => (s === images.length - 1 ? 0 : s + 1));

  return (
    <div className="w-full">
      {/* Main image */}
      <div className="relative bg-card rounded-lg overflow-hidden aspect-square flex items-center justify-center">
        <img
          src={images[selected]}
          alt="Escova Alisadora PureGlam"
          className="w-full h-full object-contain p-4"
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-card/80 rounded-full p-1.5 shadow-md hover:bg-card transition"
        >
          <ChevronLeft size={20} className="text-foreground" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-card/80 rounded-full p-1.5 shadow-md hover:bg-card transition"
        >
          <ChevronRight size={20} className="text-foreground" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition ${
              selected === i ? "border-store-blue" : "border-border"
            }`}
          >
            <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
