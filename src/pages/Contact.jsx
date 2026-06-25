import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { PHONE_NUMBER, EMAIL, ADDRESS, WHATSAPP_NUMBER } from '../data/products';
import AnimatedSection from '../components/ui/AnimatedSection';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => setSubmitted(true), 500);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I have an inquiry.`, '_blank');
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="section section--cream" style={{ textAlign: 'center' }}>
        <div className="container">
          <AnimatedSection>
            <h1>Get in Touch</h1>
            <p className="subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Have questions about our products? We're here to help you on your Ayurvedic wellness journey.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Contact Info */}
            <AnimatedSection>
              <div className="contact-info">
                <h2>Contact Information</h2>
                <p style={{ marginBottom: '2rem' }}>Reach out to us through any of these channels. We'd love to hear from you.</p>

                <div className="info-item">
                  <div className="icon-wrap"><Phone size={24} /></div>
                  <div>
                    <h3>Phone</h3>
                    <p>{PHONE_NUMBER}</p>
                    <p className="sub">Mon-Sat, 9 AM - 7 PM</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-wrap"><Mail size={24} /></div>
                  <div>
                    <h3>Email</h3>
                    <p>{EMAIL}</p>
                    <p className="sub">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-wrap"><MapPin size={24} /></div>
                  <div>
                    <h3>Head Office</h3>
                    <p style={{ lineHeight: 1.5 }}>{ADDRESS}</p>
                  </div>
                </div>

                <div className="contact-card whatsapp" onClick={handleWhatsApp}>
                  <h3>Need an instant response?</h3>
                  <p>Chat with our team directly on WhatsApp for quick support.</p>
                  <button className="btn btn--white">Chat on WhatsApp</button>
                </div>

                <div className="contact-map" style={{ marginTop: '2rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.983960113115!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0, display: 'block' }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SuJaya Herbals Location"
                  ></iframe>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection delay={1}>
              <div className="contact-form-wrap">
                {submitted ? (
                  <div className="success-state">
                    <CheckCircle size={64} className="success-icon" />
                    <h2>Message Sent!</h2>
                    <p>Thank you for reaching out to SuJaya Herbals. Our team will get back to you within 24 hours.</p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }} className="btn btn--primary">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Send us a Message</h2>
                    <div className="form-group">
                      <label>Your Name</label>
                      <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input type="text" required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label>Your Message</label>
                      <textarea rows={5} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%' }}>Submit Message</button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
