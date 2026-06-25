import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { products, WHATSAPP_NUMBER } from '../data/products';
import AnimatedSection from '../components/ui/AnimatedSection';
import ProductCard from '../components/ui/ProductCard';
import './Products.css';

const categories = ['All', 'Skincare', 'Haircare', 'Lip Care'];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I need help choosing the right product.`, '_blank');
  };

  return (
    <div className="products-page">
      {/* Hero */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <h1>Our Products</h1>
            <p>Discover our complete range of Ayurvedic skincare and haircare essentials, crafted with nature's finest ingredients</p>
          </div>
        </div>
      </section>

      {/* Category Filter + Products Grid */}
      <section className="section">
        <div className="container">
          <div className="products-page__filters">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`products-page__filter ${activeCategory === cat ? 'products-page__filter--active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="products-page__grid">
            {filtered.map((product, index) => (
              <AnimatedSection key={product.id} delay={index}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--primary">
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection>
            <h2 style={{ color: 'var(--color-text-on-primary)', marginBottom: '1rem' }}>Need Help Choosing?</h2>
            <p style={{ fontSize: '1.15rem', color: 'rgba(253,252,249,0.85)', marginBottom: '2rem' }}>
              Our Ayurvedic experts are here to guide you to the perfect products for your skin and hair type
            </p>
            <button onClick={handleWhatsApp} className="btn btn--white btn--lg">
              <MessageCircle size={24} />
              Chat with Our Experts
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
