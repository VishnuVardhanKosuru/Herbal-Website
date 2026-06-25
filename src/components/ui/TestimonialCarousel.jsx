import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './TestimonialCarousel.css';

export default function TestimonialCarousel({ reviews, perPage = 3 }) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(reviews.length / perPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(prev => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const currentReviews = reviews.slice(
    currentPage * perPage,
    (currentPage + 1) * perPage
  );

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-carousel__grid">
        {currentReviews.map((review, index) => (
          <div
            key={`${currentPage}-${index}`}
            className="testimonial-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="testimonial-card__stars">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={18} fill="var(--color-accent)" color="var(--color-accent)" />
              ))}
            </div>
            <p className="testimonial-card__review">"{review.review}"</p>
            <p className="testimonial-card__name">— {review.name}</p>
          </div>
        ))}
      </div>

      <div className="testimonial-carousel__controls">
        <button
          onClick={() => setCurrentPage(prev => (prev - 1 + totalPages) % totalPages)}
          className="testimonial-carousel__arrow"
          aria-label="Previous reviews"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="testimonial-carousel__dots">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`testimonial-carousel__dot ${i === currentPage ? 'testimonial-carousel__dot--active' : ''}`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrentPage(prev => (prev + 1) % totalPages)}
          className="testimonial-carousel__arrow"
          aria-label="Next reviews"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
