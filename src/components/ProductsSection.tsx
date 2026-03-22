import { useState } from "react";
import ProductCard from "./ProductCard";
import jamStrawberry from "@/assets/jam-strawberry.jpg";
import jamPrune from "@/assets/jam-prune.jpg";
import jamFig from "@/assets/jam-fig.jpg";
import jamApricot from "@/assets/jam-apricot.jpg";
import jamCherry from "@/assets/jam-cherry.jpg";
import juiceLemon from "@/assets/juice-lemon.jpg";
import juiceK from "@/assets/juice-K.jpg";
import gift2 from "@/assets/small-gift.jpg";
import jamK from "@/assets/jam-kumquat.jpg";
import jamKhush from "@/assets/jam-k.jpeg";
import pie from "@/assets/pie.jpg";
import gift from "@/assets/gift.jpg";
import biscuits from "@/assets/biscuits.jpg";
import bites from "@/assets/bites-k.jpg";
import smallgift2 from "@/assets/small-gift2.jpg";
import largeGift from "@/assets/large-gift.jpg";

const products = [
  {
    name: "Strawberry Jam",
    nameAr: "مربى الفراولة",
    description: "Sun-ripened summer strawberries",
    image: jamStrawberry,
    category: "jam",
    sizes: [
      { label: "S", volume: "~250g", price: "5 JOD" },
      { label: "M", volume: "~400g", price: "7 JOD" },
      // { label: "L", volume: "450g", price: "10 JOD" },
    ],
    soldOut: false,
  },
  {
    name: "Apricot Jam",
    nameAr: "مربى المشمش",
    description: "Sweet apricot preserves",
    image: jamApricot,
    category: "jam",
    sizes: [
      { label: "S", volume: "~250g", price: "5 JOD" },
      { label: "M", volume: "~400g", price: "7 JOD" },
      // { label: "L", volume: "450g", price: "10 JOD" },
    ],
    soldOut: false,
  },
  {
    name: "Khushkhash Jam",
    nameAr: "مربى الخشخاش",
    description: "A Seville orange marmalade",
    image: jamKhush,
    category: "jam",
    sizes: [
      { label: "S", volume: "~250g", price: "5 JOD" },
      { label: "M", volume: "~400g", price: "7 JOD" },
      // { label: "L", volume: "450g", price: "10 JOD" },
    ],
    soldOut: false,
  },
  {
    name: "Prune Jam",
    nameAr: "مربى القراصيا",
    description: "Dark velvety prunes",
    image: jamPrune,
    category: "jam",
    sizes: [
      { label: "S", volume: "~250g", price: "5 JOD" },
      { label: "M", volume: "~400g", price: "7 JOD" },
      // { label: "L", volume: "450g", price: "10 JOD" },
    ],
    soldOut: true,
  },
  {
    name: "Kumquat Jam",
    nameAr: "مربى الكمقوات",
    description: "Bright tangy kumquats",
    image: jamK,
    category: "jam",
    sizes: [
      { label: "S", volume: "~250g", price: "5 JOD" },
      { label: "M", volume: "~400g", price: "7 JOD" },
      // { label: "L", volume: "450g", price: "10 JOD" },
    ],
    soldOut: false,
  },
  
  {
    name: "Fig & Walnut Jam",
    nameAr: "مربى التين والجوز",
    description: "A deeply flavoured preserve of sweet figs and roasted walnuts",
    image: jamFig,
    category: "jam",
    sizes: [
      { label: "S", volume: "~250g", price: "5 JOD" },
      { label: "M", volume: "~400g", price: "7 JOD" },
      // { label: "L", volume: "450g", price: "10 JOD" },
    ],
    soldOut: false,
  },
  {
    name: "Cherry Jam",
    nameAr: "مربى الكرز",
    description: "Tart red cherry conserve",
    image: jamCherry,
    category: "jam",
    sizes: [
      { label: "S", volume: "~250g", price: "5 JOD" },
      { label: "M", volume: "~400g", price: "7 JOD" },
      // { label: "L", volume: "450g", price: "10 JOD" },
    ],
    soldOut: false,
  },
  
  {
    name: "Ramadan Gift Basket",
    description: "A thoughtful selection to sweeten the holy month",
    image: gift,
    category: "gift",
    occasion: "Ramadan 2026",
    sizes: [
      { label: "Small", volume: "1 medium jam, 1 small juice, jam biscuits, decorations", price: "25 JOD",image: smallgift2 },
      { label: "Large", volume: "2 medium + 1 small jam, 1 small juice, jam biscuits, decorations", price: "40 JOD",image: largeGift },
      { label: "Custom", volume: "Customise your own basket!", price: "From 25 JOD",image: gift },

    ],
    soldOut: false,
  },
  {
    name: "Tasting Set",
    description: "A small tasting set with your choice of 3 jams",
    image: gift2,
    category: "gift",
    occasion: "Year Round",
    sizes: [
      { label: "One size", volume: "3 mini jars", price: "5 JOD" },
    ],
    soldOut: true,
  },
  {
    name: "Concentrated Lemon",
    description: "A sweet lemon cordial made from fresh lemons — just add water",
    image: juiceLemon,
    category: "juice",
    sizes: [
      { label: "750ml", volume: "750ml", price: "6 JOD" },
    ],
    soldOut: false,
  },
  {
    name: "Concentrated Khushkhash",
    description: "A sweet Seville orange cordial",
    image: juiceK,
    category: "juice",
    sizes: [
      { label: "750ml", volume: "750ml", price: "6 JOD" },
    ],
    soldOut: false,
  },
  {
    name: "Austrian Pastry",
    description: "Buttery pastry filled with our homemade jam, baked fresh to order",
    image: pie,
    category: "sweets",
    sizes: [
      { label: "Whole", volume: "Whole", price: "25 JOD" },
    ],
    soldOut: false,
    preOrder: true
  },
  {
    name: "Jam Biscuits",
    description: "Crumbly biscuits with a jammy centre",
    image: biscuits,
    category: "sweets",
    sizes: [
      { label: "500g", volume: "0.5kg", price: "15 JOD" },
      { label: "1kg", volume: "1kg", price: "25 JOD" },
    ],
    soldOut: false,
    preOrder: true
  },
  {
    name: "Khushkhash Bites",
    description: "Tender orange peel in a sweet jam glaze, skewered and ready to enjoy",
    image: bites,
    category: "sweets",
    sizes: [
      { label: "Box", volume: "Box", price: "4 JOD" },
      // { label: "1kg", volume: "1kg", price: "25 JOD" },
    ],
    soldOut: false,
  },
];

const categories = [
  { key: "jam", label: "Jams" },
  { key: "gift", label: "Gift Packages" },
  { key: "juice", label: "Juices" },
  { key: "sweets", label: "Sweets & Bites" },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Our Collection
          </h2>
        </div>

        {categories.map(({ key, label }) => {
          const items = products.filter((p) => p.category === key);
          if (!items.length) return null;

          // Special rendering for gifts grouped by occasion
          if (key === "gift") {
            const byOccasion = items.reduce((acc, product) => {
              const occasion = product.occasion || "Year Round";
              if (!acc[occasion]) acc[occasion] = [];
              acc[occasion].push(product);
              return acc;
            }, {} as Record<string, typeof items>);
          
            return (
              <div key={key} className="mb-16">
                <h3 className="font-display text-2xl text-center text-foreground mb-10">
                  {label}
                </h3>
                <div className="flex flex-wrap justify-center gap-16 max-w-5xl mx-auto">
                  {Object.entries(byOccasion).map(([occasion, occasionItems]) => (
                    <div key={occasion} className="flex flex-col items-center">
                      <p className="font-body text-sm tracking-[0.2em] uppercase text-accent text-center mb-6">
                        {occasion}
                      </p>
                      <div className="flex flex-wrap justify-center gap-10">
                        {occasionItems.map((product, index) => (
                          <div key={product.name} className="w-64">
                            <ProductCard {...product} delay={index * 100} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          // Default rendering other categories
          return (
            <div key={key} className="mb-16">
              <h3 className="font-display text-2xl text-center text-foreground mb-8">
                {label}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
                {items.map((product, index) => (
                  <ProductCard
                    key={product.name}
                    {...product}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsSection;