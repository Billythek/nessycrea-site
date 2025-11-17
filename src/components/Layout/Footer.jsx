import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '../UI/Logo';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream-100 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-amber-warm/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[200px] bg-gradient-to-tl from-caramel/5 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Logo size="lg" animated={false} />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight">
                  NessyCrea
                </span>
                <span className="text-xs text-cream-100/40 font-medium tracking-wider uppercase">
                  Depuis 2020
                </span>
              </div>
            </div>
            <p className="text-cream-100/60 leading-relaxed mb-6">
              Bougies artisanales faites à la main avec passion et créativité
              depuis 2020. Chaque bougie est unique, créée pour transformer
              votre intérieur en sanctuaire de bien-être.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-warm/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-warm/30 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-6">
              Navigation
            </h4>
            <div className="space-y-3">
              {[
                { to: '/', label: 'Accueil' },
                { to: '/boutique', label: 'Boutique' },
                { to: '/a-propos', label: 'À propos' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-cream-100/60 hover:text-amber-warm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-cream-100/60">
                <MapPin className="w-5 h-5 text-amber-warm" />
                <span>Paris, France</span>
              </div>
              <div className="flex items-center gap-3 text-cream-100/60">
                <Mail className="w-5 h-5 text-amber-warm" />
                <span>contact@nessycrea.fr</span>
              </div>
              <div className="flex items-center gap-3 text-cream-100/60">
                <Phone className="w-5 h-5 text-amber-warm" />
                <span>+33 1 23 45 67 89</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-cream-100/40 text-sm">
            © 2024 NessyCrea. Tous droits réservés. Fait avec ♥ en France
          </p>
        </div>
      </div>
    </footer>
  );
}
