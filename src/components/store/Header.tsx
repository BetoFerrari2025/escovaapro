import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    "Ofertas do Dia", "Tintas", "Decoração", "Casa & Jardim",
    "Ferramentas", "Iluminação", "Pisos", "Utilidades"
  ];

  return (
    <header className="bg-store-blue-dark sticky top-0 z-50">
      <div className="container flex items-center gap-3 py-2.5">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-primary-foreground lg:hidden">
          <Menu size={24} />
        </button>

        <h1 className="text-xl font-extrabold text-primary-foreground tracking-tight">
          <span className="text-store-yellow">mega</span>certo
        </h1>

        <div className="hidden md:flex flex-1 mx-4">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="O que deseja procurar?"
              className="w-full rounded-md py-2 px-4 pr-10 text-sm text-foreground bg-card outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-store-blue">
              <Search size={18} />
            </button>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-4 text-primary-foreground">
          <button className="md:hidden">
            <Search size={20} />
          </button>
          <button className="flex items-center gap-1 text-sm">
            <User size={20} />
            <span className="hidden lg:inline">Entre</span>
          </button>
          <button className="relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-store-yellow text-foreground text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Categories bar */}
      <div className="bg-store-blue hidden lg:block border-t border-primary/20">
        <div className="container flex items-center gap-6 py-1.5 overflow-x-auto text-sm text-primary-foreground">
          {categories.map((cat) => (
            <button key={cat} className="whitespace-nowrap hover:text-store-yellow transition-colors font-semibold">
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-card border-t shadow-lg animate-slide-up">
          <div className="p-4 space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="O que deseja procurar?"
                className="w-full rounded-md py-2 px-4 pr-10 text-sm border border-border outline-none"
              />
              <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            </div>
            {categories.map((cat) => (
              <button key={cat} className="block w-full text-left py-2 px-3 text-sm font-semibold text-foreground hover:bg-muted rounded-md transition-colors">
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
