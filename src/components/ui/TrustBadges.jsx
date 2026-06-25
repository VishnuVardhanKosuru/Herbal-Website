import { Award, Shield, Leaf, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import './TrustBadges.css';

const badges = [
  { icon: Award, title: 'Patent-Based', subtitle: 'Formulations' },
  { icon: Shield, title: 'Trademark', subtitle: 'Registered' },
  { icon: Leaf, title: '100% Natural', subtitle: 'Ingredients' },
  { icon: Star, title: 'Trusted by', subtitle: '10,000+ Customers' },
];

export default function TrustBadges() {
  return (
    <section className="trust-badges">
      <div className="container">
        <div className="trust-badges__grid">
          {badges.map((badge, index) => (
            <AnimatedSection key={badge.title} delay={index}>
              <div className="trust-badge">
                <div className="trust-badge__icon">
                  <badge.icon size={32} />
                </div>
                <h4 className="trust-badge__title">{badge.title}</h4>
                <p className="trust-badge__subtitle">{badge.subtitle}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
