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
