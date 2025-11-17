import { motion } from 'framer-motion';

export default function Logo({ size = 'md', animated = true }) {
  const sizes = {
    sm: { container: 'w-10 h-10', text: 'text-lg', flame: 'w-3 h-4' },
    md: { container: 'w-12 h-12', text: 'text-xl', flame: 'w-4 h-5' },
    lg: { container: 'w-16 h-16', text: 'text-2xl', flame: 'w-5 h-6' },
  };

  const s = sizes[size];

  return (
    <div className={`${s.container} relative`}>
      {/* Main container */}
      <div className="absolute inset-0 bg-gradient-to-br from-caramel-dark via-caramel to-amber-warm rounded-xl shadow-soft overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)`
        }} />

        {/* Letter N with integrated flame */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`font-display ${s.text} font-bold text-cream-50 relative`}>
            N
            {/* Flame on top of N */}
            {animated ? (
              <motion.div
                animate={{
                  y: [0, -2, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.9, 1, 0.9]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute -top-2 left-1/2 -translate-x-1/2 ${s.flame}`}
              >
                <svg viewBox="0 0 20 24" fill="none" className="w-full h-full">
                  <path
                    d="M10 0C10 0 5 6 5 10C5 13 7.5 16 10 16C12.5 16 15 13 15 10C15 6 10 0 10 0Z"
                    fill="url(#flameGrad)"
                  />
                  <path
                    d="M10 4C10 4 7.5 8 7.5 10C7.5 11.5 8.75 13 10 13C11.25 13 12.5 11.5 12.5 10C12.5 8 10 4 10 4Z"
                    fill="#FFF8DC"
                    opacity="0.8"
                  />
                  <defs>
                    <linearGradient id="flameGrad" x1="10" y1="0" x2="10" y2="16" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FFE4B5"/>
                      <stop offset="50%" stopColor="#FFD700"/>
                      <stop offset="100%" stopColor="#FFA500"/>
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            ) : (
              <div className={`absolute -top-2 left-1/2 -translate-x-1/2 ${s.flame}`}>
                <svg viewBox="0 0 20 24" fill="none" className="w-full h-full">
                  <path
                    d="M10 0C10 0 5 6 5 10C5 13 7.5 16 10 16C12.5 16 15 13 15 10C15 6 10 0 10 0Z"
                    fill="#FFD700"
                  />
                </svg>
              </div>
            )}
          </span>
        </div>
      </div>

      {/* Glow effect */}
      {animated && (
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -inset-1 bg-gradient-to-r from-amber-warm/40 to-caramel/30 rounded-xl blur-lg -z-10"
        />
      )}
    </div>
  );
}
