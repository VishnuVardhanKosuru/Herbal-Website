import { useState } from 'react';
import { CalendarCheck, X, User, Phone, ChevronDown, Clock } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../data/products';
import './BookingModal.css';

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

export default function BookingModal({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', concern: '', date: '', time: '' });
  const [submitted, setSubmitted] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello! I'd like to book a consultation at SuJaya Herbals.%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Concern:* ${form.concern}%0A*Date:* ${form.date}%0A*Time:* ${form.time}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal booking-modal" onClick={e => e.stopPropagation()}>
        <div className="booking-modal__header">
          <div className="booking-modal__header-left">
            <div className="booking-modal__icon">
              <CalendarCheck size={20} />
            </div>
            <div>
              <h2>Book a Consultation</h2>
              <p>Personalized Ayurvedic care</p>
            </div>
          </div>
          <button onClick={onClose} className="booking-modal__close">
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="booking-modal__success">
            <div className="booking-modal__success-icon">
              <CalendarCheck size={28} />
            </div>
            <h3>Request Sent!</h3>
            <p>We've opened WhatsApp with your booking details. Our team will confirm your appointment shortly.</p>
            <button onClick={onClose} className="btn btn--primary">Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="booking-modal__form">
            <div className="form-group">
              <label>Full Name</label>
              <div className="input-icon">
                <User size={15} />
                <input type="text" required placeholder="Your name" value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
              </div>
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <div className="input-icon">
                <Phone size={15} />
                <input type="tel" required placeholder="+91 XXXXX XXXXX" value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
              </div>
            </div>
            <div className="form-group">
              <label>Consultation Type</label>
              <div className="input-icon">
                <select required value={form.concern}
                  onChange={e => setForm(f => ({ ...f, concern: e.target.value }))}>
                  <option value="">Select a concern…</option>
                  {CONCERN_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
                <ChevronDown size={15} className="select-arrow" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Preferred Date</label>
                <input type="date" required min={today} value={form.date}
                  onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
              </div>
              <div className="form-group">
                <label>Preferred Time</label>
                <div className="input-icon">
                  <Clock size={15} />
                  <select required value={form.time}
                    onChange={e => setForm(f => ({ ...f, time: e.target.value }))}>
                    <option value="">Select…</option>
                    {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <ChevronDown size={15} className="select-arrow" />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>
              <CalendarCheck size={16} />
              Confirm Booking via WhatsApp
            </button>
            <p className="booking-modal__note">We'll confirm your appointment on WhatsApp within 30 minutes.</p>
          </form>
        )}
      </div>
    </div>
  );
}
