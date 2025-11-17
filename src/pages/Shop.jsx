import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import { useCart } from '../Cart/CartContext';
import ProductCard from '../components/Shop/ProductCard';
import ProductModal from '../components/Shop/ProductModal';
import Filters from '../components/Shop/Filters';

export default function Shop({ onAddToCart }) {
  const { addToCart } = useCart();
  const [filters, setFilters] = useState({
    type: '',
    price: '',
    size: '',
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({ type: '', price: '', size: '' });
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (filters.type && product.type !== filters.type) return false;
      if (filters.price === 'low' && product.price >= 25) return false;
      if (
        filters.price === 'mid' &&
        (product.price < 25 || product.price > 30)
      )
        return false;
      if (filters.price === 'high' && product.price <= 30) return false;
      if (filters.size && product.size !== filters.size) return false;
      return true;
    });
  }, [filters]);

  const handleAddToCart = (product) => {
    addToCart(product);
    onAddToCart(product.name);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold text-charcoal mb-4">
            Notre <span className="text-gradient">Boutique</span>
          </h1>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            Découvrez notre collection complète de bougies artisanales,
            fabriquées avec passion et des ingrédients naturels.
          </p>
        </motion.div>

        {/* Filters */}
        <Filters
          filters={filters}
          onChange={handleFilterChange}
          onReset={resetFilters}
        />

        {/* Products count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 text-charcoal/60"
        >
          {filteredProducts.length} produit
          {filteredProducts.length > 1 ? 's' : ''} trouvé
          {filteredProducts.length > 1 ? 's' : ''}
        </motion.div>

        {/* Products grid */}
        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-cream-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🕯️</span>
            </div>
            <h3 className="font-display text-2xl font-semibold text-charcoal mb-2">
              Aucun produit trouvé
            </h3>
            <p className="text-charcoal/60 mb-6">
              Essayez de modifier vos filtres pour voir plus de produits.
            </p>
            <button onClick={resetFilters} className="btn-secondary">
              Réinitialiser les filtres
            </button>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </main>
  );
}
