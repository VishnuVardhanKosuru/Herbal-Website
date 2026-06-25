import { Leaf, Award, Shield, Heart, Users, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import './About.css';

const values = [
  { icon: Leaf, title: 'Natural Purity', description: 'We use only the finest botanical ingredients, free from harmful chemicals and synthetic additives.' },
  { icon: Award, title: 'Scientific Excellence', description: 'Our formulations combine ancient Ayurvedic wisdom with modern scientific research and validation.' },
  { icon: Shield, title: 'Quality Assurance', description: 'Every product undergoes rigorous testing to ensure safety, efficacy, and consistency.' },
  { icon: Heart, title: 'Sustainable Practices', description: 'We are committed to ethical sourcing and eco-friendly packaging to protect our planet.' },
  { icon: Users, title: 'Our Mission', description: 'To create premium formulations that deliver visible results while nurturing beauty in its purest and most natural form.' },
  { icon: Sprout, title: 'Our Vision', description: 'To become a globally admired premium beauty brand celebrated for elegance, purity and conscious self care.' },
];

export default function About() {
  return (
    <div className="about">
      {/* Hero */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <h1>Our Story</h1>
            <p>A journey that began with a deep passion for Ayurveda, natural healing, and holistic beauty</p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section">
        <div className="container">
          <div className="about__story">
            <AnimatedSection>
              <div className="about__story-image">
                <img src="/images/ayurvedic-stack.png" alt="Stack of traditional Ayurvedic herbs and ancient texts" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={2}>
              <div className="about__story-text">
                <h2>Rooted in Ancient Wisdom</h2>
                <p>SuJaya Herbals was founded in 2025 with deep passion for Ayurveda, natural healing and holistic beauty by Dr. Sujatha and Dr. Jayakumary. Rooted in the timeless tradition of Ayurveda, our brand is dedicated to creating premium herbal skin and hair care products that nurture beauty naturally and safely.</p>
                <p>Every formulation of SuJaya Herbals is thoughtfully crafted using carefully selected herbs, hot pressed oils and traditional Ayurvedic principles to provide gentle yet effective care for skin and hair.</p>
                <p>At SuJaya Herbals we believe true beauty comes from balance, purity and healthy living. Our products are designed to address everyday concerns such as hairfall, dandruff, dryness, pigmentation, dullness and scalp imbalance while supporting long term wellness.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>



      {/* Values */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <h2>What We Stand For</h2>
              <p>Our core values guide every decision we make</p>
            </div>
          </AnimatedSection>
          <div className="about__values-grid">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index}>
                <div className="about__value-card card">
                  <div className="about__value-icon">
                    <value.icon size={32} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ayurvedic Heritage */}
      <section className="section section--cream">
        <div className="container">
          <div className="about__heritage">
            <AnimatedSection>
              <div className="about__heritage-text">
                <h2>Ayurvedic Heritage</h2>
                <p>Ayurveda, meaning "the science of life," originated in India over 5,000 years ago. It is one of the world's oldest holistic healing systems, emphasizing balance between mind, body, and spirit.</p>
                <p>Our formulations draw from classical Ayurvedic texts which document the therapeutic properties of hundreds of medicinal plants. By honoring these time-tested traditions and combining them with contemporary research, we create products that are both effective and deeply rooted in natural wellness.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={2}>
              <div className="about__stats-grid">
                <div className="about__stat-card card">
                  <Sprout size={40} className="about__stat-icon" />
                  <h3>5000+</h3>
                  <p>Years of Wisdom</p>
                </div>
                <div className="about__stat-card card">
                  <Leaf size={40} className="about__stat-icon" />
                  <h3>100%</h3>
                  <p>Natural Ingredients</p>
                </div>
                <div className="about__stat-card card">
                  <Shield size={40} className="about__stat-icon" />
                  <h3>Patent</h3>
                  <p>Based Formulations</p>
                </div>
                <div className="about__stat-card card">
                  <Users size={40} className="about__stat-icon" />
                  <h3>10,000+</h3>
                  <p>Happy Customers</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about__cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection>
            <h2 style={{ color: 'var(--color-text-on-primary)', marginBottom: '1rem' }}>Join the SuJaya Family</h2>
            <p style={{ fontSize: '1.15rem', color: 'rgba(253,252,249,0.85)', marginBottom: '2rem' }}>
              Experience the difference that pure, authentic Ayurvedic care can make
            </p>
            <Link to="/products" className="btn btn--white btn--lg">
              Explore Our Products <ArrowRight size={20} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
