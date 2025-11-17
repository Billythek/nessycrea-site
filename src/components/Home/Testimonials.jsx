import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';
import { testimonials } from '../../data/products';

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
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-cream-50 to-cream-100/50">
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-10 opacity-10"
      >
        <Sparkles className="w-32 h-32 text-amber-warm" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 left-10 opacity-10"
      >
        <Sparkles className="w-24 h-24 text-caramel" />
      </motion.div>

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-warm/15 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-caramel/10 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
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
            <Star className="w-4 h-4 fill-amber-warm text-amber-warm" />
            <span className="text-sm font-semibold text-caramel-dark">Avis vérifiés</span>
          </motion.div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight">
            Ce qu'ils <span className="text-gradient">disent</span>
          </h2>
          <p className="text-charcoal/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Découvrez les expériences de nos clients satisfaits
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative group perspective-1000"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-warm/20 to-caramel/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-105" />

              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-soft border border-white/50 h-full transition-all duration-500 group-hover:shadow-glow-lg group-hover:border-amber-warm/20">
                {/* Quote icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  className="absolute -top-5 -left-3 z-10"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-warm to-caramel rounded-2xl flex items-center justify-center transform -rotate-12 shadow-glow">
                    <Quote className="w-7 h-7 text-cream-50" />
                  </div>
                </motion.div>

                <div className="pt-8">
                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                      >
                        <Star className="w-5 h-5 fill-amber-warm text-amber-warm drop-shadow-sm" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-charcoal/75 leading-relaxed mb-8 text-lg italic font-light">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-caramel/10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 bg-gradient-to-br from-amber-warm/20 to-caramel/20 rounded-2xl flex items-center justify-center border border-amber-warm/20"
                    >
                      <span className="font-display text-xl font-bold text-caramel-dark">
                        {testimonial.name.charAt(0)}
                      </span>
                    </motion.div>
                    <div>
                      <div className="font-semibold text-charcoal text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-charcoal/50 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Client vérifié
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
