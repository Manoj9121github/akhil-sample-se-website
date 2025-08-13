import React from "react";
import ProductCard from "./ProductCard";


export const PRODUCTS = [
  {
    id: "hdpe-orange-150",
    cat: "HDPE Tarpaulins",
    title: "HDPE Tarpaulin — Orange",
    gsm: 150,
    color: "Orange",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
    bullets: ["UV Stabilized", "Waterproof", "Reinforced Edges"],
  },
  {
    id: "hdpe-black-300",
    cat: "HDPE Tarpaulins",
    title: "HDPE Tarpaulin — Black",
    gsm: 300,
    color: "Black",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
    bullets: ["Tear Resistant", "All-Weather", "Eyelets @ 1m"],
  },
  {
    id: "hdpe-silverblack-350",
    cat: "HDPE Tarpaulins",
    title: "HDPE Tarpaulin — Silver/Black",
    gsm: 350,
    color: "Silver & Black",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
    bullets: ["Heat Reflective", "Heavy Duty", "Anti-Fungal"],
  },
  {
    id: "hdpe-yellow-350",
    cat: "HDPE Tarpaulins",
    title: "HDPE Tarpaulin — Yellow",
    gsm: 350,
    color: "Yellow",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
    bullets: ["High Visibility", "UV Stabilized", "Reinforced Corners"],
  },
  {
    id: "silpaulin-custom",
    cat: "Supreme Silpaulin",
    title: "Supreme Silpaulin — Custom Color & Size",
    gsm: "35–300",
    color: "Custom",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
    bullets: ["IS:7903 Compliant*", "Laminated", "Lightweight to Heavy Duty"],
  },
  {
    id: "rope-hdpe",
    cat: "Ropes & Accessories",
    title: "HDPE Rope — Twisted",
    gsm: "—",
    color: "Blue/Yellow/Green",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
    bullets: ["High Tensile", "Weather Resistant", "Multiple Dia"],
  },
  {
    id: "sutli-pp",
    cat: "Ropes & Accessories",
    title: "PP Sutli — 200 kg Supply",
    gsm: "—",
    color: "Natural/Color",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
    bullets: ["Cost-Effective", "Strong Knotting", "Bulk Rolls"],
  },
];


export default function Products() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {PRODUCTS.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
