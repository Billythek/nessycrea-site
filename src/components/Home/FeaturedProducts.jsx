import { motion } from 'framer-motion';
import { Star, ShoppingBag, Eye, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { useCart } from '../../Cart/CartContext';
import { CandleIcon } from '../UI/Icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FeaturedProducts({ onAddToCart }) {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 3);

  const handleAdd = (product) => {
    addToCart(product);
    onAddToCart(product.name);
  };

  return (
    <section className="section-padding bg-cream-100/40 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <CandleIcon className="w-32 h-32 text-caramel" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 rotate-12">
        <CandleIcon className="w-24 h-24 text-amber-warm" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-warm/10 rounded-full mb-6"
          >
            <Star className="w-4 h-4 text-amber-warm fill-amber-warm" />
            <span className="text-sm font-medium text-caramel-dark">Best-sellers</span>
          </motion.div>
          <h2 className="section-title">
            Nos <span className="text-gradient">Vedettes</span>
          </h2>
          <p className="section-subtitle">
            Découvrez notre sélection de bougies les plus appréciées par nos
            clients
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="group"
            >
              <div className="card-cosy h-full flex flex-col">
                {/* Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div
                    className="aspect-square w-full relative"
                    style={{ backgroundColor: product.image_color }}
                  >
                    {product.image_url && (
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" style={{ transitionDuration: '1s' }} />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handleAdd(product)}
                      className="btn-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Ajouter
                    </motion.button>
                  </div>
                  {/* Type badge */}
                  <div className="absolute top-4 left-4 px-4 py-2 bg-white/95 backdrop-blur-md rounded-xl text-sm font-semibold text-caramel-dark shadow-soft">
                    {product.type}
                  </div>
                  {/* Best seller badge for first product */}
                  {index === 0 && (
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-amber-warm to-caramel text-cream-50 rounded-full text-xs font-bold shadow-glow">
                      #1
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="font-display text-2xl font-bold text-charcoal mb-3 group-hover:text-caramel-dark transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-warm text-amber-warm"
                      />
                    ))}
                    <span className="text-xs text-charcoal/50 ml-2">({product.rating}.0)</span>
                  </div>

                  <p className="text-charcoal/60 text-sm leading-relaxed mb-5 flex-1">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-5 border-t border-caramel/10">
                    <span className="font-display text-2xl font-bold text-gradient">
                      {product.price.toFixed(2)} €
                    </span>
                    <span className="text-xs font-medium text-charcoal/50 bg-cream-200/50 px-3 py-1.5 rounded-full">
                      {product.sizeLabel}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link to="/boutique">
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 text-caramel-dark font-semibold text-lg hover:text-amber-warm transition-colors group"
            >
              <span>Voir toute la collection</span>
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
