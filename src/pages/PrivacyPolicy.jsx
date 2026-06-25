import { useEffect } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import './Legal.css';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <div className="legal-content-wrap">
            <AnimatedSection>
              <h1>Privacy Policy</h1>
              <p className="last-updated">Last updated: May 20, 2026</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-content-wrap">
            <AnimatedSection delay={1}>
              <div className="legal-section">
                <h2>Introduction</h2>
                <p>
                  At Sujaya Herbals, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.
                </p>
              </div>

              <div className="legal-section">
                <h2>Information We Collect</h2>
                <p>
                  We collect information that you provide directly to us when you:
                </p>
                <ul>
                  <li>Place an order or make a purchase</li>
                  <li>Create an account on our website</li>
                  <li>Subscribe to our newsletter or promotional communications</li>
                  <li>Contact us for customer support or inquiries</li>
                  <li>Participate in surveys, contests, or promotions</li>
                </ul>
                <p>
                  This information may include your name, email address, phone number, shipping address, billing address, payment information, and any other details you choose to provide.
                </p>
              </div>

              <div className="legal-section">
                <h2>How We Use Your Information</h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul>
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your orders and account</li>
                  <li>Send you marketing and promotional materials (with your consent)</li>
                  <li>Improve our products and services</li>
                  <li>Personalize your shopping experience</li>
                  <li>Detect and prevent fraud or unauthorized activities</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>Information Sharing and Disclosure</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, such as payment processors, shipping companies, and marketing platforms. These partners are contractually obligated to keep your information confidential and use it only for the purposes we specify.
                </p>
              </div>

              <div className="legal-section">
                <h2>Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="legal-section">
                <h2>Your Rights</h2>
                <p>
                  You have the right to:
                </p>
                <ul>
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications at any time</li>
                  <li>Withdraw your consent where we rely on it</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. You can control cookies through your browser settings. For more information, please see our Cookie Policy.
                </p>
              </div>

              <div className="legal-section">
                <h2>Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
                </p>
              </div>

              <div className="legal-section">
                <h2>Contact Us</h2>
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="legal-card">
                  <p><strong>SuJaya Herbals</strong></p>
                  <p>Email: sujayaherbals2025@gmail.com</p>
                  <p>Phone: +91 6238416126</p>
                  <p>Address: SuJaya Herbals, Door No 8/513, Kandachira, Panyam, Kollam (PIN: 691601)</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
