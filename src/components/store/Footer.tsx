import { ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-store-blue-dark text-primary-foreground">
      <div className="container py-6 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-lg font-extrabold">
            <span className="text-store-yellow">mega</span>certo
          </h2>
          <div className="flex items-center gap-2 text-xs opacity-80">
            <ShieldCheck size={16} />
            <span>Compra 100% Segura e Protegida</span>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-4 text-center text-[11px] opacity-60">
          <p>MegaCerto © 2025 - Todos os direitos reservados</p>
          <p className="mt-1">CNPJ: 37.812.915/0001-75 | Loja oficial e autorizada</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
