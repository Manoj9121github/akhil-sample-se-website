import React from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export interface Product {
  id: string
  cat: string
  title: string
  gsm: string | number
  color: string
  img: string
  bullets: string[]
}

export default function ProductCard({ product }: { product: Product }) {
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
        <Button variant="outline" className="mt-4 w-full">
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}
