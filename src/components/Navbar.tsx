import { Button } from "@/components/ui/button";
import { BRAND } from "@/data/brand";

export default function Navbar({ whatsappLink }: { whatsappLink: (msg: string) => string }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-900 to-gray-400 grid place-content-center text-white font-bold">SE</div>
            <div className="leading-tight">
              <div className="font-semibold">{BRAND.name}</div>
              <div className="text-xs text-gray-500">{BRAND.tagline}</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:text-blue-900">Products</a>
            <a href="#about" className="hover:text-blue-900">About</a>
            <a href="#contact" className="hover:text-blue-900">Contact</a>
            <a href="#enquire" className="hover:text-blue-900">Enquire</a>
            <Button asChild className="rounded-2xl">
              <a href={whatsappLink("Hello, I’d like to enquire about tarpaulins/ropes.")}>WhatsApp</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
