import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';

export default function Filters({ filters, onChange, onReset }) {
  const hasActiveFilters =
    filters.type || filters.price || filters.size;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-cream-100/80 backdrop-blur-sm rounded-2xl p-6 mb-10 sticky top-24 z-10"
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-caramel-dark" />
          <span className="font-display text-lg font-semibold text-charcoal">
            Filtres
          </span>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Type filter */}
          <div>
            <label className="block text-sm font-medium text-charcoal/70 mb-2">
              Type
            </label>
            <select
              value={filters.type}
              onChange={(e) => onChange('type', e.target.value)}
              className="input-cosy py-3"
            >
              <option value="">Tous les types</option>
              <option value="Gourmand">Gourmand</option>
              <option value="Relaxation">Relaxation</option>
              <option value="Naturel">Naturel</option>
              <option value="Luxe">Luxe</option>
            </select>
          </div>

          {/* Price filter */}
          <div>
            <label className="block text-sm font-medium text-charcoal/70 mb-2">
              Prix
            </label>
            <select
              value={filters.price}
              onChange={(e) => onChange('price', e.target.value)}
              className="input-cosy py-3"
            >
              <option value="">Tous les prix</option>
              <option value="low">Moins de 25€</option>
              <option value="mid">25€ - 30€</option>
              <option value="high">Plus de 30€</option>
            </select>
          </div>

          {/* Size filter */}
          <div>
            <label className="block text-sm font-medium text-charcoal/70 mb-2">
              Taille
            </label>
            <select
              value={filters.size}
              onChange={(e) => onChange('size', e.target.value)}
              className="input-cosy py-3"
            >
              <option value="">Toutes tailles</option>
              <option value="petit">Petit (90-100g)</option>
              <option value="moyen">Moyen (160-180g)</option>
              <option value="grand">Grand (250-300g)</option>
            </select>
          </div>
        </div>

        {hasActiveFilters && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={onReset}
            className="flex items-center gap-2 text-charcoal/60 hover:text-charcoal transition-colors"
          >
            <X className="w-4 h-4" />
            <span className="text-sm">Réinitialiser</span>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
