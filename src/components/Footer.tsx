import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-4">
              Chrome<span className="text-gold">Traders</span>
            </h3>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Crafting timeless elegance for the modern woman. Each piece is designed 
              to celebrate your unique style and sophistication.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="p-2 rounded-full bg-background/10 hover:bg-gold/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-background/10 hover:bg-gold/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-display font-medium mb-4">Collections</h4>
            <ul className="space-y-3">
              {["Earrings", "Bangles", "Accessories", "New Arrivals"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-background/70 hover:text-gold transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-display font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail size={16} className="text-gold" />
                hello@chrometraders.com
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone size={16} className="text-gold" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin size={16} className="text-gold mt-0.5" />
                123 Fashion Street<br />New York, NY 10001
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/50"
        >
          <p>© {new Date().getFullYear()} Chrome Traders. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
