import ProductCard from "./ProductCard";
import jamStrawberry from "@/assets/jam-strawberry.jpg";
import jamBlueberry from "@/assets/jam-blueberry.jpg";
import jamPeach from "@/assets/jam-peach.jpg";
import jamFig from "@/assets/jam-fig.jpg";
import jamApricot from "@/assets/jam-apricot.jpg";
import jamRaspberry from "@/assets/jam-raspberry.jpg";

const products = [
  {
    name: "Strawberry",
    description: "Sun-ripened summer strawberries",
    price: "$12.00",
    image: jamStrawberry,
  },
  {
    name: "Blueberry",
    description: "Wild mountain blueberries",
    price: "$13.00",
    image: jamBlueberry,
  },
  {
    name: "Peach",
    description: "Golden orchard peaches",
    price: "$12.00",
    image: jamPeach,
  },
  {
    name: "Fig",
    description: "Dark honey figs with vanilla",
    price: "$14.00",
    image: jamFig,
  },
  {
    name: "Apricot",
    description: "Sweet apricot preserves",
    price: "$12.00",
    image: jamApricot,
  },
  {
    name: "Raspberry",
    description: "Tart red raspberry conserve",
    price: "$13.00",
    image: jamRaspberry,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-3">
            Our Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Seasonal Jams
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              {...product}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
