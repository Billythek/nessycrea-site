/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF9',
          100: '#FDF8F0',
          200: '#F9F1E3',
          300: '#F5E6D3',
          warm: '#FFF5E6',
        },
        amber: {
          warm: '#D4A574',
          deep: '#B8860B',
          glow: '#FFE4B5',
          light: '#FFD89B',
          muted: '#C9A77D',
        },
        caramel: {
          light: '#DEB887',
          DEFAULT: '#C9A86C',
          dark: '#8B7355',
          rich: '#A67C52',
        },
        charcoal: {
          light: '#4A4A4A',
          DEFAULT: '#2B2B2B',
          dark: '#1A1A1A',
          soft: '#3D3D3D',
        },
        honey: {
          light: '#FFE5B4',
          DEFAULT: '#F5D76E',
          dark: '#D4AC2B',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
        '11xl': ['12rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        'tightest': '-0.075em',
        'extra-tight': '-0.05em',
      },
      boxShadow: {
        'glow': '0 0 60px -12px rgba(212, 165, 116, 0.4)',
        'glow-lg': '0 0 80px -8px rgba(212, 165, 116, 0.5)',
        'glow-xl': '0 0 100px -10px rgba(212, 165, 116, 0.6)',
        'soft': '0 4px 30px rgba(139, 115, 85, 0.08)',
        'soft-lg': '0 8px 40px rgba(139, 115, 85, 0.12)',
        'soft-xl': '0 12px 50px rgba(139, 115, 85, 0.16)',
        'inner-glow': 'inset 0 2px 20px rgba(212, 165, 116, 0.1)',
        'layered': '0 1px 2px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05), 0 16px 32px rgba(0,0,0,0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'wiggle': 'wiggle 0.5s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-3deg)' },
          '75%': { transform: 'rotate(3deg)' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
