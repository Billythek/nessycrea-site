import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../Cart/CartContext';

export default function CartDrawer() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-cream-50 shadow-glow-lg z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-caramel/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-warm to-caramel rounded-xl flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-cream-50" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-charcoal">
                  Votre Panier
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center hover:bg-cream-300 transition-colors"
              >
                <X className="w-5 h-5 text-charcoal" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-24 h-24 bg-cream-200 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-10 h-10 text-caramel/40" />
                  </div>
                  <p className="font-display text-xl text-charcoal/60 mb-2">
                    Votre panier est vide
                  </p>
                  <p className="text-sm text-charcoal/40">
                    Découvrez nos bougies artisanales
                  </p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="bg-cream-100 rounded-2xl p-4 flex gap-4"
                  >
                    <div
                      className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0"
                      style={{ backgroundColor: item.image_color }}
                    >
                      {item.image_url && (
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-lg font-medium text-charcoal truncate">
                        {item.name}
                      </h4>
                      <p className="text-sm text-charcoal/60 mb-2">
                        {item.sizeLabel}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 rounded-lg bg-cream-200 flex items-center justify-center hover:bg-cream-300 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 rounded-lg bg-cream-200 flex items-center justify-center hover:bg-cream-300 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-charcoal/40 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-lg font-semibold text-amber-warm">
                        {(item.price * item.quantity).toFixed(2)} €
                      </p>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-caramel/10 bg-cream-100/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-lg text-charcoal">
                    Total
                  </span>
                  <span className="font-display text-2xl font-semibold text-gradient">
                    {cartTotal.toFixed(2)} €
                  </span>
                </div>
                <button className="btn-primary w-full text-lg">
                  Commander
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full mt-3 text-center text-sm text-charcoal/60 hover:text-charcoal transition-colors"
                >
                  Continuer mes achats
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
