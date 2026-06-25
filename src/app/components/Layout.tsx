import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, CalendarCheck, MessageCircle, Clock, User, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
];

const CONCERN_OPTIONS = [
  'Skin Consultation', 'Hair Consultation', 'Anti-Aging', 'Acne & Blemishes',
  'Dry / Sensitive Skin', 'Hair Loss & Growth', 'General Wellness',
];

function BookingModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    name: '', phone: '', concern: '', date: '', time: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello! I'd like to book a consultation at Sujaya Herbals.%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Concern:* ${form.concern}%0A*Date:* ${form.date}%0A*Time:* ${form.time}`;
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const inputCls = "w-full border border-border rounded-lg px-4 py-2.5 text-sm text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.2 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
      >
        {/* Header */}
        <div className="bg-primary px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <CalendarCheck size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-white text-lg font-semibold leading-tight">Book a Consultation</h2>
              <p className="text-white/75 text-xs mt-0.5">Personalized Ayurvedic care</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-10 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarCheck size={28} className="text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Request Sent!</h3>
            <p className="text-sm text-muted-foreground mb-6">
              We've opened WhatsApp with your booking details. Our team will confirm your appointment shortly.
            </p>
            <button
              onClick={onClose}
              className="bg-primary text-primary-foreground px-8 py-2.5 rounded-full text-sm hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
            {/* Name */}
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5 block">
                Full Name
              </label>
              <div className="relative">
                <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className={`${inputCls} pl-9`}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5 block">
                Phone Number
              </label>
              <div className="relative">
                <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className={`${inputCls} pl-9`}
                />
              </div>
            </div>

            {/* Concern */}
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5 block">
                Consultation Type
              </label>
              <div className="relative">
                <select
                  required
                  value={form.concern}
                  onChange={e => setForm(f => ({ ...f, concern: e.target.value }))}
                  className={`${inputCls} appearance-none pr-8`}
                >
                  <option value="">Select a concern…</option>
                  {CONCERN_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
                <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Date & Time row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5 block">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  min={today}
                  value={form.date}
                  onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                  className={inputCls}
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5 block">
                  Preferred Time
                </label>
                <div className="relative">
                  <Clock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <select
                    required
                    value={form.time}
                    onChange={e => setForm(f => ({ ...f, time: e.target.value }))}
                    className={`${inputCls} appearance-none pl-9 pr-6`}
                  >
                    <option value="">Select…</option>
                    {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <ChevronDown size={15} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-full font-medium text-sm hover:opacity-90 transition mt-1 flex items-center justify-center gap-2"
            >
              <CalendarCheck size={16} />
              Confirm Booking via WhatsApp
            </button>

            <p className="text-center text-xs text-muted-foreground">
              We'll confirm your appointment on WhatsApp within 30 minutes.
            </p>
          </form>
        )}
      </motion.div>
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isBookingOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isBookingOpen]);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hello! I would like to know more about Sujaya Herbals products.', '_blank');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Promotional Banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        <p>Limited Time Offer: Shop Premium Herbal Care & SAVE UPTO 20%</p>
      </div>

      {/* Sticky Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col items-center">
              <h1 className="text-2xl md:text-3xl text-primary leading-tight">SuJaya Herbals</h1>
              <div className="w-full h-[1px] bg-primary/30 my-1"></div>
              <p className="text-[10px] md:text-xs text-primary/80 tracking-wide text-center">A blend of Purity and Quality</p>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-foreground hover:text-primary transition-colors ${
                    location.pathname === link.path ? 'text-primary' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary-dark transition-colors flex items-center gap-2"
              >
                <CalendarCheck size={18} />
                Book Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-border"
            >
              <div className="px-4 py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-2 text-foreground hover:text-primary transition-colors ${
                      location.pathname === link.path ? 'text-primary' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => { setIsMenuOpen(false); setIsBookingOpen(true); }}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                >
                  <CalendarCheck size={18} />
                  Book Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl mb-4">Sujaya Herbals</h3>
              <p className="text-primary-foreground/80">
                Premium Ayurvedic skincare and haircare products crafted with ancient wisdom and modern science.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
                <li><Link to="/products" className="hover:text-accent transition-colors">Products</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                <li><Link to="/cookie-policy" className="hover:text-accent transition-colors">Cookie Policy</Link></li>
                <li><Link to="/refund-policy" className="hover:text-accent transition-colors">Refund Policy</Link></li>
                <li><Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Contact</h4>
              <p className="text-primary-foreground/80">
                Email: info@sujayaherbals.com<br />
                Phone: +91 98765 43210<br />
                WhatsApp: +91 98765 43210
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2026 Sujaya Herbals. All rights reserved. Patent-based formulations. Trademark registered.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
      >
        <MessageCircle size={28} />
      </button>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingOpen && <BookingModal onClose={() => setIsBookingOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
