import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';
import { expertTestimonials } from '../../data/testimonials';
import AnimatedSection from './AnimatedSection';
import './ExpertTestimonials.css';

export default function ExpertTestimonials() {
  return (
    <section className="section section--cream expert-testimonials">
      <div className="container">
        <AnimatedSection>
          <p className="expert-testimonials__intro">
            Trusted by wellness experts, Ayurvedic practitioners, and skincare professionals for purity, authenticity, and results.
          </p>
        </AnimatedSection>

        <div className="expert-testimonials__grid">
          {expertTestimonials.map((expert, index) => (
            <AnimatedSection key={expert.name} delay={index}>
              <article className="expert-card">
                <div className="expert-card__media">
                  <img src={expert.image} alt={expert.name} />
                  <button className="expert-card__play" aria-label={`Play ${expert.name} testimonial`}>
                    <Play size={22} fill="currentColor" />
                  </button>
                </div>
                <div className="expert-card__body">
                  <h3>{expert.name}</h3>
                  <p className="expert-card__title">{expert.title}</p>
                  <p className="expert-card__quote">"{expert.quote}"</p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="expert-testimonials__cta">
            <h2>Experience the Difference Trusted by Experts</h2>
            <Link to="/products" className="btn btn--primary btn--lg">
              Explore Our Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
