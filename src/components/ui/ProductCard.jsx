import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, Leaf } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../data/products';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const handleWhatsApp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I would like to order ${product.name}.`,
      '_blank'
    );
  };

  return (
    <div className="product-card card">
      <Link to={`/product/${product.id}`} className="product-card__link">
        <div className="product-card__image-wrap">
          {product.images && product.images.length > 0 ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="product-card__image"
              loading="lazy"
            />
          ) : (
            <div className="product-card__placeholder">
              <Leaf size={48} />
              <span>Product Image</span>
            </div>
          )}
          <span className="product-card__category">{product.category}</span>
          {discount > 0 && (
            <span className="product-card__discount">Save {discount}%</span>
          )}
        </div>
        <div className="product-card__body">
          <h3 className="product-card__name">{product.name}</h3>
          <p className="product-card__tagline">{product.tagline}</p>
          <p className="product-card__qty">Quantity: {product.qty}</p>
          <div className="product-card__footer">
            <div className="product-card__price-wrap">
              <span className="product-card__price">₹{product.price}</span>
              <span className="product-card__mrp">₹{product.mrp}</span>
            </div>
            <button onClick={handleWhatsApp} className="product-card__inquire">
              Inquire <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
