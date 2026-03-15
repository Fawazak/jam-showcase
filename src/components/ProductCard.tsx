import { useState } from "react";

interface Size {
  label: string;
  volume: string;
  price: string;
}

interface ProductCardProps {
  name: string;
  description: string;
  image?: string;
  category: string;
  sizes: Size[];
  delay?: number;
  soldOut?: boolean;

}

const ProductCard = ({ name, description, image, sizes, delay = 0, soldOut  }: ProductCardProps) => {
  const [selected, setSelected] = useState(0);
  const currentImage = sizes[selected].image || image;


  return (
    <div
      className="group opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {soldOut && (
        <div className="absolute top-3 left-3 z-10 bg-background/90 text-foreground font-body text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-foreground/20">
        Currently Unavailable
      </div>
      )}
<div className={`overflow-hidden rounded-sm mb-4 bg-card ${soldOut ? "opacity-50 " : ""}`}>
<img
          src={currentImage}
          alt={name}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className={`text-center ${soldOut ? "opacity-60" : ""}`}>
        <h3 className="font-display text-xl font-semibold text-foreground mb-1">
          {name}
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-3">
          {description}
        </p>

        {sizes.length > 1 && (
          <div className="flex justify-center gap-2 mb-3">
            {sizes.map((size, i) => (
              <button
                key={size.label}
                onClick={() => setSelected(i)}
                className={`px-3 py-1 rounded-full text-xs font-body border transition-colors ${
                  selected === i
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-muted-foreground/30 text-muted-foreground hover:border-primary"
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        )}

        <p className="font-body text-xs text-muted-foreground mb-1">
          {sizes[selected].volume}
        </p>
        <p className="font-display text-lg text-primary font-semibold">
          {sizes[selected].price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;