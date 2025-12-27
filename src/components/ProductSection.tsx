import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  description: string | null;
  price: number;
  image_url: string;
  category: string;
  is_featured: boolean;
}

interface ProductSectionProps {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
  whatsappNumber: string;
}

const ProductSection = ({ id, title, subtitle, products, whatsappNumber }: ProductSectionProps) => {
  if (products.length === 0) return null;

  return (
    <section id={id} className="py-16 md:py-24">
      <div className="luxury-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {subtitle}
          </p>
          <div className="mt-6 w-24 h-0.5 bg-primary mx-auto" />
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              whatsappNumber={whatsappNumber}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
