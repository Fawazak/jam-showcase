interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  delay?: number;
}

const ProductCard = ({ name, description, price, image, delay = 0 }: ProductCardProps) => {
  return (
    <div
      className="group opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="overflow-hidden rounded-sm mb-4 bg-card">
        <img
          src={image}
          alt={`${name} jar`}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="text-center">
        <h3 className="font-display text-xl font-semibold text-foreground mb-1">
          {name}
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-2">
          {description}
        </p>
        <p className="font-display text-lg text-primary font-semibold">
          {price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
