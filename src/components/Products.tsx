// Products.tsx
import React from "react";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/data/products";

const Products = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {PRODUCTS.map((p) => (
      <ProductCard key={p.id} product={p} />
    ))}
  </div>
);

export default Products;
