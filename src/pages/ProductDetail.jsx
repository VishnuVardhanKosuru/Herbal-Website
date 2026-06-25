import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, MessageCircle, Star, Shield, Award, Leaf } from 'lucide-react';
import { getProduct, getRelatedProducts, WHATSAPP_NUMBER } from '../data/products';
import { testimonials } from '../data/testimonials';
import AnimatedSection from '../components/ui/AnimatedSection';
import TestimonialCarousel from '../components/ui/TestimonialCarousel';
import ProductCard from '../components/ui/ProductCard';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const product = getProduct(id);

  // Reset scroll and image index on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
    setOpenFaqIndex(null);
  }, [id]);

  if (!product) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '10rem 0' }}>
        <h2>Product Not Found</h2>
        <Link to="/products" className="btn btn--primary" style={{ marginTop: '2rem' }}>Return to Products</Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(id);
  const productReviews = testimonials[id] || [];

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I would like to order ${product.name}.`, '_blank');
  };

  const nextImage = () => {
    if (product.images?.length > 1) {
      setCurrentImageIndex(prev => (prev + 1) % product.images.length);
    }
  };

  const prevImage = () => {
    if (product.images?.length > 1) {
      setCurrentImageIndex(prev => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="product-detail">
      {/* Breadcrumb */}
      <div className="product-detail__breadcrumb">
        <div className="container">
          <Link to="/products"><ArrowLeft size={18} /> Back to Products</Link>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="section">
        <div className="container">
          <div className="product-detail__grid">
            
            {/* Gallery */}
            <AnimatedSection>
              <div className="product-gallery">
                <div className="product-gallery__main">
                  {product.images && product.images.length > 0 ? (
                    <>
                      <img src={product.images[currentImageIndex]} alt={product.name} />
                      {product.images.length > 1 && (
                        <>
                          <button onClick={prevImage} className="product-gallery__nav left"><ChevronLeft size={24} /></button>
                          <button onClick={nextImage} className="product-gallery__nav right"><ChevronRight size={24} /></button>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="product-gallery__placeholder">
                      <Leaf size={64} />
                      <span>{product.name}</span>
                    </div>
                  )}
                </div>
                {product.images && product.images.length > 1 && (
                  <div className="product-gallery__thumbs">
                    {product.images.map((img, i) => (
                      <button 
                        key={i} 
                        className={`product-gallery__thumb ${currentImageIndex === i ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(i)}
                      >
                        <img src={img} alt={`Thumbnail ${i}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={1}>
              <div className="product-info">
                <span className="product-info__category">{product.category}</span>
                <h1 className="product-info__name">{product.name}</h1>
                <div className="product-info__rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="var(--color-accent)" color="var(--color-accent)" />)}
                  </div>
                  <span>(4.8/5 from {productReviews.length * 3 + 15} reviews)</span>
                </div>
                
                <div className="product-info__pricing">
                  <span className="price">₹{product.price}</span>
                  {product.mrp && (
                    <>
                      <span className="mrp">₹{product.mrp}</span>
                      <span className="discount">Save {discount}%</span>
                    </>
                  )}
                </div>
                <p className="product-info__qty">Quantity: {product.qty}</p>

                <p className="product-info__description">{product.description}</p>

                <div className="product-info__badges">
                  <div className="badge"><Leaf size={20} /> 100% Natural</div>
                  <div className="badge"><Shield size={20} /> Patent-Based</div>
                  <div className="badge"><Award size={20} /> Certified</div>
                </div>

                <button onClick={handleWhatsApp} className="btn btn--primary btn--lg" style={{ width: '100%', marginBottom: '1rem' }}>
                  <MessageCircle size={20} /> Order via WhatsApp
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits & Why Choose */}
      <section className="section section--cream">
        <div className="container">
          <div className="product-details-grid">
            <AnimatedSection>
              <div>
                <h2>Key Benefits</h2>
                <ul className="product-benefits">
                  {product.benefits.map((b, i) => (
                    <li key={i}>
                      <Leaf size={20} className="icon" /> {b}
                    </li>
                  ))}
                </ul>
                <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>How to Use</h2>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>{product.howToUse}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={1}>
              <div className="product-why-choose">
                <h3>Why Customers Choose {product.name}</h3>
                <div className="reason">
                  <Award size={28} className="icon" />
                  <div>
                    <h4>Premium Quality</h4>
                    <p>Crafted with the finest Ayurvedic ingredients</p>
                  </div>
                </div>
                <div className="reason">
                  <Shield size={28} className="icon" />
                  <div>
                    <h4>Authentic Formulation</h4>
                    <p>Based on traditional Ayurvedic wisdom</p>
                  </div>
                </div>
                <div className="reason">
                  <Star size={28} className="icon" />
                  <div>
                    <h4>Proven Results</h4>
                    <p>Trusted by thousands of satisfied customers</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Specifications & Ingredients */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Specifications & Ingredients</h2>
          </AnimatedSection>
          <div className="product-specs-grid">
            <AnimatedSection>
              <div className="specs-card">
                <h3>Specifications</h3>
                <div className="spec-row"><span>Size</span><span>{product.qty}</span></div>
                <div className="spec-row"><span>Category</span><span>{product.category}</span></div>
                <div className="spec-row"><span>Suitable For</span><span>All types</span></div>
                <div className="spec-row"><span>Storage</span><span>Cool, dry place</span></div>
                <div className="spec-row"><span>Shelf Life</span><span>24 months</span></div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={1}>
              <div className="specs-card">
                <h3>Key Ingredients</h3>
                <div className="ingredients-list">
                  {product.ingredients.map((ing, i) => (
                    <div key={i} className="ingredient-item">
                      <Leaf size={20} className="icon" />
                      <div>
                        <h4>{ing.name}</h4>
                        <p>{ing.benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Reviews */}
      {productReviews.length > 0 && (
        <section className="section section--cream">
          <div className="container">
            <AnimatedSection>
              <div className="section-header">
                <h2>What Our Customers Say</h2>
                <p>Real experiences with {product.name}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <TestimonialCarousel reviews={productReviews} />
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section">
          <div className="container">
            <AnimatedSection>
              <div className="section-header">
                <h2>You May Also Like</h2>
              </div>
            </AnimatedSection>
            <div className="home__products-grid">
              {relatedProducts.map((p, i) => (
                <AnimatedSection key={p.id} delay={i}>
                  <ProductCard product={p} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
