// ProductCard.tsx
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export default function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden shadow-md rounded-2xl">
      <CardHeader className="p-0">
        <Image
          src={product.img}
          alt={product.title}
          width={500}
          height={300}
          className="object-cover h-48 w-full"
        />
      </CardHeader>
      <CardContent className="p-4">
        <Badge className="mb-2">{product.cat}</Badge>
        <CardTitle className="text-lg">{product.title}</CardTitle>
        <div className="text-sm text-muted-foreground mt-1">
          GSM: {product.gsm} | Color: {product.color}
        </div>
        <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
          {product.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <button className="mt-4 w-full border rounded-md py-2">View Details</button>
      </CardContent>
    </Card>
  );
}
