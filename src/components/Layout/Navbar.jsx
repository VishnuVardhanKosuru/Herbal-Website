import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, CalendarCheck } from 'lucide-react';
import BookingModal from './BookingModal';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
    // Close mobile menu on scroll for better UX
    if (isMenuOpen && window.scrollY > 50) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isBookingOpen || isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isBookingOpen, isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Sticky Header Wrapper — contains both promo banner and navbar */}
      <header
        ref={headerRef}
        className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}
      >
        {/* Promotional Banner */}
        <div className={`promo-banner ${isScrolled ? 'promo-banner--hidden' : ''}`}>
          <p>Limited Time Offer: Shop Premium Herbal Care &amp; SAVE UPTO 20%</p>
        </div>

        {/* Navigation */}
        <nav className="navbar">
          <div className="container navbar__inner">
            <Link to="/" className="navbar__logo">
              <span className="navbar__logo-text">SuJaya Herbals</span>
              <span className="navbar__logo-divider"></span>
              <span className="navbar__logo-tagline">A blend of Purity and Quality</span>
            </Link>

            {/* Desktop Nav */}
            <div className="navbar__links">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => setIsBookingOpen(true)}
                className="btn btn--primary navbar__cta"
              >
                <CalendarCheck size={18} />
                Book Consultation
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="navbar__toggle"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay — outside the sticky header to avoid stacking context issues */}
      {isMenuOpen && (
        <div className="navbar__mobile-overlay" onClick={() => setIsMenuOpen(false)} />
      )}
      <div className={`navbar__mobile ${isMenuOpen ? 'navbar__mobile--open' : ''}`}>
        <div className="navbar__mobile-inner">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__mobile-link ${location.pathname === link.path ? 'navbar__mobile-link--active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => { setIsMenuOpen(false); setIsBookingOpen(true); }}
            className="btn btn--primary"
            style={{ width: '100%' }}
          >
            <CalendarCheck size={18} />
            Book Consultation
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      {isBookingOpen && <BookingModal onClose={() => setIsBookingOpen(false)} />}
    </>
  );
}
