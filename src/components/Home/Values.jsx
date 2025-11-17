import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { NaturalIcon, HandmadeIcon, ScentIcon, FlameIcon } from '../UI/Icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const values = [
  {
    icon: NaturalIcon,
    title: 'Naturel',
    description: 'Cire végétale 100% naturelle et mèches en coton bio',
    stat: '100%',
  },
  {
    icon: HandmadeIcon,
    title: 'Artisanal',
    description: 'Chaque bougie est coulée à la main avec amour',
    stat: 'Fait main',
  },
  {
    icon: ScentIcon,
    title: 'Parfums uniques',
    description: 'Compositions olfactives exclusives et raffinées',
    stat: '8 parfums',
  },
  {
    icon: Clock,
    title: 'Longue durée',
    description: "Jusqu'à 50 heures de combustion pour plus de plaisir",
    stat: '50h+',
  },
];

export default function Values() {
  return (
    <section className="section-padding bg-charcoal text-cream-100 relative overflow-hidden">
      {/* Glow effects */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-b from-amber-warm/15 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-t from-caramel/15 to-transparent rounded-full blur-3xl"
      />

      {/* Decorative flame */}
      <div className="absolute top-10 right-20 opacity-20 hidden lg:block">
        <FlameIcon className="w-16 h-16 text-amber-warm" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-amber-warm to-caramel mx-auto mb-8 rounded-full"
          />
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Nos <span className="text-amber-warm">Valeurs</span>
          </h2>
          <p className="text-cream-100/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ce qui fait la différence NessyCrea
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="text-center group cursor-default"
            >
              <div className="relative inline-block mb-8">
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center group-hover:bg-amber-warm/10 group-hover:border-amber-warm/30 transition-all duration-500"
                >
                  <value.icon className="w-12 h-12 text-amber-warm" />
                </motion.div>
                <div className="absolute -inset-3 bg-amber-warm/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Stat badge */}
                <div className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-amber-warm to-caramel text-cream-50 text-xs font-bold rounded-full shadow-glow opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  {value.stat}
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-amber-warm transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-cream-100/50 leading-relaxed group-hover:text-cream-100/70 transition-colors duration-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
