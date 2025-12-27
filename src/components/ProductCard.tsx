import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface Product {
  id: string;
  title: string;
  description: string | null;
  price: number;
  image_url: string;
  category: string;
  is_featured: boolean;
}

interface ProductCardProps {
  product: Product;
  index: number;
  whatsappNumber: string;
}

const ProductCard = ({ product, index, whatsappNumber }: ProductCardProps) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi, I am interested in buying "${product.title}" priced at $${product.price.toFixed(2)}. Please share more details.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        className="relative overflow-hidden rounded-lg bg-card product-card-shadow"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.img
            src={product.image_url}
            alt={product.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          {/* Featured Badge */}
          {product.is_featured && (
            <div className="absolute top-3 left-3 px-3 py-1 text-xs font-medium tracking-wide uppercase bg-primary text-primary-foreground rounded-full">
              Featured
            </div>
          )}

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-foreground/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <motion.button
              onClick={handleWhatsAppClick}
              className="whatsapp-button"
              initial={{ scale: 0.9, opacity: 0 }}
              whileHover={{ scale: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={18} />
              Buy on WhatsApp
            </motion.button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="p-4 md:p-5">
          <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-1 line-clamp-1">
            {product.title}
          </h3>
          {product.description && (
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {product.description}
            </p>
          )}
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-primary">
              ${product.price.toFixed(2)}
            </span>
            <button
              onClick={handleWhatsAppClick}
              className="md:hidden flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <MessageCircle size={14} />
              Buy
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
