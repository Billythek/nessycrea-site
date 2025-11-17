# NessyCrea - Bougies Artisanales

Site e-commerce moderne pour bougies artisanales, construit avec React + Tailwind CSS.

## Design

**Style Chaleureux Cosy / Hygge Scandinave**
- Tons chauds : ambre, caramel, crème
- Effets de lumière douce (glow effects)
- Typographie élégante : Cormorant Garamond + DM Sans
- Animations fluides avec Framer Motion
- Design responsive

## Fonctionnalités

- 🛒 Panier persistant (localStorage)
- 🔍 Filtres dynamiques (type, prix, taille)
- 📱 Design responsive
- ✨ Animations et micro-interactions
- 🎨 Interface moderne et chaleureuse
- 📄 4 pages : Accueil, Boutique, À propos, Contact

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la build
npm run preview
```

## Structure du projet

```
src/
├── components/
│   ├── Cart/           # Panier (CartDrawer)
│   ├── Home/           # Hero, FeaturedProducts, Testimonials, Values
│   ├── Layout/         # Navbar, Footer
│   ├── Shop/           # ProductCard, ProductModal, Filters
│   └── UI/             # Toast notifications
├── pages/              # Home, Shop, About, Contact
├── Cart/               # CartContext (gestion d'état)
├── hooks/              # useLocalStorage
├── data/               # Données produits et témoignages
└── App.jsx             # Application principale
```

## Technologies

- **React 18** - Interface utilisateur
- **Vite** - Build tool rapide
- **Tailwind CSS** - Styling utility-first
- **Framer Motion** - Animations
- **Lucide React** - Icônes
- **React Router** - Navigation

## Anciens fichiers

Les fichiers de l'ancienne version sont sauvegardés dans le dossier `_backup/`.

---

Fait avec ♥ par NessyCrea
