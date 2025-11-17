import Hero from '../components/Home/Hero';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import Testimonials from '../components/Home/Testimonials';
import Values from '../components/Home/Values';
import AnimatedBackground from '../components/UI/AnimatedBackground';

export default function Home({ onAddToCart }) {
  return (
    <AnimatedBackground>
      <main>
        <Hero />
        <FeaturedProducts onAddToCart={onAddToCart} />
        <Values />
        <Testimonials />
      </main>
    </AnimatedBackground>
  );
}
