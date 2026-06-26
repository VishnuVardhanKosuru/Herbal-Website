import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MessageCircle, MapPin, Clock, CheckCircle, X, ChevronDown, CalendarCheck } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export function Contact() {
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [callbackForm, setCallbackForm] = useState({
    name: '',
    phone: '',
    preferredTime: ''
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission configured to send to business email
    // In production, this would integrate with an email service
    setShowSuccessPopup(true);
    // Reset form
    setInquiryForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Callback Request%0AName: ${callbackForm.name}%0APhone: ${callbackForm.phone}%0APreferred Time: ${callbackForm.preferredTime}`;
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hello! I would like to know more about Sujaya Herbals.', '_blank');
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  // General FAQs
  const generalFaqs = [
    {
      question: 'Are your products 100% Ayurvedic?',
      answer: 'Yes, absolutely! All Sujaya Herbals products are formulated using authentic Ayurvedic principles with 100% natural ingredients. We combine traditional wisdom with modern formulation techniques to ensure purity and effectiveness.'
    },
    {
      question: 'Where are your products manufactured?',
      answer: 'Our products are manufactured in India at our state-of-the-art facility that follows strict quality control measures and GMP (Good Manufacturing Practices) standards. Each batch is carefully crafted and tested for quality and safety.'
    },
    {
      question: 'Are your products suitable for all skin types?',
      answer: 'Yes, our products are formulated to be gentle and effective for all skin and hair types. However, individual results may vary. If you have specific concerns or sensitivities, we recommend consulting with our wellness experts or doing a patch test before regular use.'
    },
    {
      question: 'Do you offer consultations?',
      answer: 'Yes! We offer personalized consultations with our Ayurvedic wellness experts. You can book a consultation through our website or contact us via WhatsApp. Our experts will help you choose the right products based on your specific needs and concerns.'
    },
    {
      question: 'How can I place an order?',
      answer: 'You can place an order by contacting us directly via WhatsApp, phone, or email. Simply browse our products, select what you need, and reach out to our team. We\'ll guide you through the ordering process and arrange delivery.'
    },
    {
      question: 'How can I contact your team?',
      answer: 'You can reach us through multiple channels: WhatsApp (+91 98765 43210), phone (+91 98765 43210), or email (info@sujayaherbals.com). We\'re available Monday-Saturday, 9 AM - 7 PM. For instant responses, WhatsApp is the fastest option.'
    },
    {
      question: 'Do you offer nationwide delivery?',
      answer: 'Yes, we deliver across India! Shipping times vary depending on your location. We ensure all products are securely packaged and delivered in perfect condition. Contact us for specific delivery timelines to your area.'
    },
    {
      question: 'Are your products cruelty-free?',
      answer: 'Absolutely! Sujaya Herbals is committed to cruelty-free practices. None of our products or ingredients are tested on animals. We believe in ethical, sustainable, and compassionate beauty solutions rooted in Ayurvedic traditions.'
    }
  ];

  const handleBookConsultation = () => {
    // This would typically open a booking modal or redirect to booking page
    // For now, using WhatsApp as the primary consultation booking method
    window.open('https://wa.me/919876543210?text=Hello! I would like to book a consultation with your wellness experts.', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions about our products? We're here to help you on your Ayurvedic wellness journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-shadow"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary" size={28} />
              </div>
              <h3 className="text-xl mb-2">Phone</h3>
              <p className="text-muted-foreground mb-4">Mon-Sat, 9 AM - 7 PM</p>
              <a href="tel:+919876543210" className="text-primary hover:underline">
                +91 98765 43210
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-shadow"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={28} />
              </div>
              <h3 className="text-xl mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">We'll respond within 24 hours</p>
              <a href="mailto:info@sujayaherbals.com" className="text-primary hover:underline">
                info@sujayaherbals.com
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all cursor-pointer hover:scale-105"
              onClick={handleWhatsApp}
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white" size={28} />
              </div>
              <h3 className="text-xl mb-2">WhatsApp</h3>
              <p className="text-primary-foreground/90 mb-4">Instant responses</p>
              <span className="text-white hover:underline">
                Chat with Us
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* General Inquiry Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl mb-6">Send us a Message</h2>
              <form onSubmit={handleInquirySubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
                <div>
                  <Label htmlFor="inquiry-name">Your Name</Label>
                  <Input
                    id="inquiry-name"
                    type="text"
                    required
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="inquiry-email">Email Address</Label>
                  <Input
                    id="inquiry-email"
                    type="email"
                    required
                    value={inquiryForm.email}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="inquiry-phone">Phone Number</Label>
                  <Input
                    id="inquiry-phone"
                    type="tel"
                    required
                    value={inquiryForm.phone}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="inquiry-subject">Subject</Label>
                  <Input
                    id="inquiry-subject"
                    type="text"
                    required
                    value={inquiryForm.subject}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, subject: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="inquiry-message">Your Message</Label>
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    required
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                    className="mt-2 w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary-dark transition-all hover:scale-105"
                >
                  Submit
                </button>
              </form>
            </motion.div>

            {/* Callback Request Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl mb-6">Request a Callback</h2>
              <form onSubmit={handleCallbackSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
                <div>
                  <Label htmlFor="callback-name">Your Name</Label>
                  <Input
                    id="callback-name"
                    type="text"
                    required
                    value={callbackForm.name}
                    onChange={(e) => setCallbackForm({ ...callbackForm, name: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="callback-phone">Phone Number</Label>
                  <Input
                    id="callback-phone"
                    type="tel"
                    required
                    value={callbackForm.phone}
                    onChange={(e) => setCallbackForm({ ...callbackForm, phone: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="callback-time">Preferred Time</Label>
                  <select
                    id="callback-time"
                    required
                    value={callbackForm.preferredTime}
                    onChange={(e) => setCallbackForm({ ...callbackForm, preferredTime: e.target.value })}
                    className="mt-2 w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a time</option>
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 3 PM)">Afternoon (12 PM - 3 PM)</option>
                    <option value="Evening (3 PM - 7 PM)">Evening (3 PM - 7 PM)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground px-8 py-4 rounded-full hover:bg-accent/80 transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Request Callback
                </button>
              </form>

              {/* Business Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-lg mt-6">
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <Clock className="text-primary" size={24} />
                  Business Hours
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* General FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {generalFaqs.map((faq, index) => (
                <div key={index} className="bg-cream rounded-2xl overflow-hidden shadow-md">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-cream/80 transition-colors"
                  >
                    <span className="text-lg font-semibold pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                      size={24}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl mb-4">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Speak with our wellness experts and get personalized guidance tailored to your needs.
            </p>
            <p className="text-muted-foreground mb-8">
              We're here to help you choose the right Ayurvedic solution with confidence.
            </p>
            <button
              onClick={handleBookConsultation}
              className="bg-primary text-primary-foreground px-10 py-5 rounded-full hover:bg-primary-dark transition-all hover:scale-105 flex items-center gap-3 mx-auto text-lg shadow-lg"
            >
              <CalendarCheck size={24} />
              Book a Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">Visit Our Office</h2>
            <p className="text-xl text-muted-foreground">
              We'd love to meet you in person
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="bg-cream p-8 rounded-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl mb-2">Head Office</h3>
                    <p className="text-muted-foreground">
                      Sujaya Herbals Pvt. Ltd.<br />
                      123, Herbal Garden Complex<br />
                      MG Road, Bangalore - 560001<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      +91 98765 43210<br />
                      +91 98765 43211 (Customer Care)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      info@sujayaherbals.com<br />
                      support@sujayaherbals.com
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-muted rounded-2xl overflow-hidden h-96"
            >
              {/* Map Placeholder */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.713334693892!2d77.59503461280327!3d12.960410499092497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167bb33659c3%3A0xe104fc8110b65!2sMahatma%20Gandhi%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl mb-6">Connect with Us</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Follow us on social media for updates, tips, and exclusive offers
            </p>
            <div className="flex justify-center gap-6">
              {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccessPopup && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowSuccessPopup(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center"
            >
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h2 className="text-2xl mb-2 text-foreground">Message Sent Successfully</h2>
              <p className="text-muted-foreground mb-2">
                Thank you for reaching out to Sujaya Herbals. Our team has received your message and will get back to you as soon as possible.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Typically within 24–48 business hours.
              </p>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary-dark transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
