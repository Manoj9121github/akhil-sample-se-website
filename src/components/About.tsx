"use client";

import React from "react";
import { Card, CardContent,  } from "./ui/card";
import { Badge, Star } from "lucide-react";
import { BRAND } from "@/data/brand";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
];

const About = () => {
  return (
    <section id="about" className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">About {BRAND.name}</h2>
          <p className="text-gray-700">
            We are wholesale tarpaulins and rope traders based in Vizianagaram.
            Our USP is <em>customized sizing</em> — we cut-to-size and deliver
            heavy-duty, UV-stabilized tarps for agriculture, construction, and
            logistics. As a {BRAND.dealer}, we offer genuine, long-lasting
            sheets across GSM 35–300.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <Star className="w-5 h-5 mt-0.5" /> Premium HDPE & Silpaulin ranges
            </li>
            <li className="flex gap-2">
              <Star className="w-5 h-5 mt-0.5" /> Bulk availability & quick dispatch
            </li>
            <li className="flex gap-2">
              <Star className="w-5 h-5 mt-0.5" /> Professional guidance on GSM & application
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            className="rounded-2xl object-cover h-48 w-full"
            src={HERO_IMAGES[1]}
            alt="Warehouse"
          />
          <img
            className="rounded-2xl object-cover h-48 w-full"
            src={HERO_IMAGES[2]}
            alt="Materials"
          />
          <div className="col-span-2">
            <Card className="rounded-2xl">
              <CardContent className="p-5">
                <div className="flex flex-wrap items-center gap-4">
                  <Badge>Since 2010+</Badge>
                  <Badge variant="secondary">Pan-Andhra Delivery</Badge>
                  <Badge variant="secondary">Customization</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
