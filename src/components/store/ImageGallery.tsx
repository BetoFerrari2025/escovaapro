import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import tintaEspelho1 from "@/assets/tinta-espelho-1.png";
import tintaEspelho2 from "@/assets/tinta-espelho-2.png";
import tintaEspelho3 from "@/assets/tinta-espelho-3.png";
import resultado1 from "@/assets/resultado-espelho-1.jpg";
import resultado2 from "@/assets/resultado-espelho-2.jpg";
import resultado3 from "@/assets/resultado-espelho-3.jpg";

const images = [tintaEspelho1, tintaEspelho3, tintaEspelho2, resultado1, resultado2, resultado3];

interface ImageGalleryProps {
  selectedColor?: string;
}

const ImageGallery = ({ selectedColor }: ImageGalleryProps) => {
  const [selected, setSelected] = useState(0);

  const prev = () => setSelected((s) => (s === 0 ? images.length - 1 : s - 1));
  const next = () => setSelected((s) => (s === images.length - 1 ? 0 : s + 1));

  return (
    <div className="w-full">
      <div className="relative bg-card rounded-lg overflow-hidden aspect-square flex items-center justify-center">
        <img
          src={images[selected]}
          alt="Tinta Espelho - Efeito Reflexo Ultra"
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
