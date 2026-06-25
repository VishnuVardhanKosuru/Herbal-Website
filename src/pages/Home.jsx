import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { products, WHATSAPP_NUMBER, getFeaturedProducts } from '../data/products';
import { generalTestimonials } from '../data/testimonials';
import AnimatedSection from '../components/ui/AnimatedSection';
import ProductCard from '../components/ui/ProductCard';
import TrustBadges from '../components/ui/TrustBadges';
import TestimonialCarousel from '../components/ui/TestimonialCarousel';
import ExpertTestimonials from '../components/ui/ExpertTestimonials';
import './Home.css';

const ingredients = [
  { name: 'Saffron', benefit: 'Revives & Radiates', description: 'Precious spice that enhances skin luminosity, improves complexion, and brings a natural glow.', image: '/images/ingredients/1.Saffron.jpg' },
  { name: 'Gooseberry', benefit: 'Strengthens & Rejuvenates', description: 'Rich in Vitamin C, strengthens hair follicles, promotes growth, and rejuvenates the scalp.', image: '/images/ingredients/4.Amla.jpeg' },
  { name: 'Fenugreek', benefit: 'Purifies & Heals', description: 'Powerful herb that fights dandruff, strengthens roots, and promotes healthy hair growth.', image: '/images/ingredients/2.Fenugreek.jpg' },
  { name: 'Sandalwood', benefit: 'Cools & Clarifies', description: 'Cooling properties that clarify skin, reduce inflammation, and provide a calming effect.', image: '/images/ingredients/7.Sandalwood.jpg' },
  { name: 'Vetiver', benefit: 'Soothes & Restores', description: 'Aromatic root that soothes skin, reduces blemishes, and restores natural balance.', image: '/images/ingredients/8.Vetiver.jpg' },
  { name: 'Indian Madder', benefit: 'Brightens & Evens', description: 'Natural skin brightener that reduces hyperpigmentation and evens skin tone beautifully.', image: '/images/ingredients/5.Indian%20maddar.png' },
  { name: 'Indigo', benefit: 'Colors & Nourishes', description: 'Traditional herb that naturally darkens hair, prevents premature greying, and nourishes strands.', image: '/images/ingredients/3.Indigo.JPG' },
  { name: 'Goat Milk', benefit: 'Hydrates & Nourishes', description: 'Rich in vitamins and proteins, deeply hydrates, soothes skin, and provides intense nourishment.', image: '/images/ingredients/6.Goat%20milk.jpeg' },
];

export default function Home() {
  const featured = getFeaturedProducts();

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I would like to know more about SuJaya Herbals products.`, '_blank');
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content animate-fade-in-up">
            <h1>Pure Ayurvedic Beauty, Naturally Yours</h1>
            <p className="hero__subtitle">
              Experience the ancient wisdom of Ayurveda blended with modern science. Premium herbal formulations for radiant skin and healthy hair.
            </p>
            <div className="hero__actions">
              <button onClick={handleWhatsApp} className="btn btn--primary btn--lg">
                <MessageCircle size={20} />
                Shop via WhatsApp
              </button>
              <Link to="/products" className="btn btn--accent btn--lg">
                Explore Products
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
          <div className="hero__image-wrap animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="hero__image-container">
              <img
                src="/images/hero-products.jpg"
                alt="SuJaya Herbals Ayurvedic product range — Medhini, Venika, Laya, Zrika, and Vama"
                className="hero__image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <h2>Our Signature Products</h2>
              <p>Discover our carefully crafted range of Ayurvedic skincare and haircare essentials</p>
            </div>
          </AnimatedSection>
          <div className="home__products-grid">
            {featured.map((product, index) => (
              <AnimatedSection key={product.id} delay={index}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link to="/products" className="btn btn--primary btn--lg">
                View All Products <ArrowRight size={20} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="section section--primary">
        <div className="container">
          <div className="home__story">
            <AnimatedSection>
              <div className="home__story-content">
                <h2>Rooted in Tradition, Refined by Science</h2>
                <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem' }}>
                  At SuJaya Herbals, we honor the 5,000-year-old wisdom of Ayurveda while embracing modern scientific validation. Every product is a testament to our commitment to purity, efficacy, and sustainability.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  Founded by Dr. Sujatha and Dr. Jayakumary in 2025, our formulations are crafted with hand-selected botanical ingredients, following ancient texts and validated by contemporary research.
                </p>
                <Link to="/about" className="btn btn--white">
                  Our Story <ArrowRight size={20} />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={2}>
              <div className="home__story-image">
                <img
                  src="/images/zrika/Zrika%2000.jpg"
                  alt="SuJaya Herbals premium Ayurvedic product"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Ingredients Showcase */}
      <section className="section section--cream">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <h2>Nature's Finest Ingredients</h2>
              <p>Each ingredient is carefully sourced and traditionally processed to preserve its therapeutic properties</p>
            </div>
          </AnimatedSection>
          <div className="home__ingredients-grid">
            {ingredients.map((ingredient, index) => (
              <AnimatedSection key={ingredient.name} delay={index}>
                <div className="ingredient-card">
                  <div className="ingredient-card__front">
                    {ingredient.image ? (
                      <div className="ingredient-card__img">
                        <img src={ingredient.image} alt={ingredient.name} loading="lazy" />
                      </div>
                    ) : (
                      <div className="ingredient-card__emoji">🌿</div>
                    )}
                    <h3>{ingredient.name}</h3>
                    <p className="ingredient-card__benefit">{ingredient.benefit}</p>
                  </div>
                  <div className="ingredient-card__back">
                    <h3>{ingredient.name}</h3>
                    <p>{ingredient.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Testimonials */}
      <ExpertTestimonials />

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <h2>Loved by Thousands</h2>
              <p>Real results from real customers</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <TestimonialCarousel reviews={generalTestimonials} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section home__cta">
        <div className="container home__cta-inner">
          <AnimatedSection>
            <h2>Begin Your Ayurvedic Journey Today</h2>
            <p>
              Experience the transformative power of nature with our premium herbal formulations
            </p>
            <button onClick={handleWhatsApp} className="btn btn--primary btn--lg">
              <MessageCircle size={24} />
              Start Shopping on WhatsApp
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
