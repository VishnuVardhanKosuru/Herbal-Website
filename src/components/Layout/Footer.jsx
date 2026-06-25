import { Link } from 'react-router-dom';
import { PHONE_NUMBER, EMAIL, ADDRESS, WHATSAPP_NUMBER } from '../../data/products';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3 className="footer__logo">SuJaya Herbals</h3>
            <p>Premium Ayurvedic skincare and haircare products crafted with ancient wisdom. Founded by Dr. Sujatha and Dr. Jayakumary in 2025.</p>
          </div>
          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy">Cookie Policy</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li>Email: {EMAIL}</li>
              <li>Phone: {PHONE_NUMBER}</li>
              <li>WhatsApp: {PHONE_NUMBER}</li>
              <li style={{ marginTop: '0.5rem', lineHeight: 1.5 }}>{ADDRESS}</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} SuJaya Herbals. All rights reserved. Patent-based formulations. Trademark registered.</p>
        </div>
      </div>
    </footer>
  );
}
