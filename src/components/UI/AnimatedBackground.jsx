import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Simple floating orb - only 3-4 instead of many
function FloatingOrb({ size = 400, color, x, y, delay = 0 }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        left: x,
        top: y,
        filter: 'blur(60px)',
      }}
      animate={{
        x: [0, 100, -50, 0],
        y: [0, -80, 50, 0],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{
        duration: 20,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

// Simple sparkles - reduced count
function Sparkles() {
  const sparkles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 6 + 3,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <>
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.x}%`,
            bottom: '-20px',
            background: 'rgba(255, 200, 100, 0.8)',
            boxShadow: '0 0 8px rgba(255, 200, 100, 0.6)',
          }}
          animate={{
            y: [0, -600],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </>
  );
}

export default function AnimatedBackground({ children }) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-50" />

      {/* Animated gradient mesh */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(212, 165, 116, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(201, 168, 108, 0.25) 0%, transparent 50%)',
            'radial-gradient(circle at 60% 70%, rgba(212, 165, 116, 0.3) 0%, transparent 50%), radial-gradient(circle at 30% 30%, rgba(201, 168, 108, 0.25) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(212, 165, 116, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(201, 168, 108, 0.25) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating orbs - only 3 */}
      <FloatingOrb size={500} color="rgba(212, 165, 116, 0.25)" x="15%" y="20%" delay={0} />
      <FloatingOrb size={450} color="rgba(201, 168, 108, 0.2)" x="70%" y="60%" delay={5} />
      <FloatingOrb size={400} color="rgba(245, 215, 110, 0.15)" x="50%" y="80%" delay={10} />

      {/* Sparkles rising */}
      <Sparkles />

      {/* Mouse follow glow */}
      <div
        className="absolute w-[500px] h-[500px] pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(255, 200, 100, 0.2) 0%, transparent 60%)',
          filter: 'blur(60px)',
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Subtle moving lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-amber-warm to-transparent"
            style={{ top: `${25 + i * 25}%` }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleX: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8,
              delay: i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
