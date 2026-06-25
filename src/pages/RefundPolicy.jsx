import { useEffect } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import './Legal.css';

export default function RefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <div className="legal-content-wrap">
            <AnimatedSection>
              <h1>Refund Policy</h1>
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
                <h2>Our Commitment to You</h2>
                <p>
                  At Sujaya Herbals, customer satisfaction is our top priority. We stand behind the quality of our products and want you to be completely happy with your purchase. If for any reason you are not satisfied, we offer a hassle-free refund and return policy.
                </p>
              </div>

              <div className="legal-section">
                <h2>Return Eligibility</h2>
                <p>
                  You may return products within <strong>15 days</strong> of receiving your order if:
                </p>
                <ul>
                  <li>The product is unused and in its original packaging</li>
                  <li>The product seal is intact (for hygiene and safety reasons)</li>
                  <li>You have the original receipt or proof of purchase</li>
                  <li>The product was damaged during shipping or is defective</li>
                  <li>You received the wrong product</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>Non-Returnable Items</h2>
                <p>
                  For health and safety reasons, the following items cannot be returned:
                </p>
                <ul>
                  <li>Opened or used products</li>
                  <li>Products with broken seals</li>
                  <li>Gift cards or promotional items</li>
                  <li>Sale or clearance items (unless defective)</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>How to Initiate a Return</h2>
                <p>
                  To initiate a return, please follow these steps:
                </p>
                <ol>
                  <li>Contact our customer support team via email at <strong>sujayaherbals2025@gmail.com</strong> or WhatsApp at <strong>+91 6238416126</strong></li>
                  <li>Provide your order number and reason for return</li>
                  <li>Our team will review your request and provide a return authorization within 24-48 hours</li>
                  <li>Pack the product securely in its original packaging</li>
                  <li>Ship the product to the address provided by our team</li>
                </ol>
              </div>

              <div className="legal-section">
                <h2>Refund Process</h2>
                <p>
                  Once we receive and inspect your returned product:
                </p>
                <ul>
                  <li>If approved, your refund will be processed within 7-10 business days</li>
                  <li>Refunds will be issued to the original payment method</li>
                  <li>You will receive a confirmation email once the refund is processed</li>
                  <li>Please allow 5-7 business days for the refund to reflect in your account</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>Exchanges</h2>
                <p>
                  We currently do not offer direct exchanges. If you would like a different product, please return the original item for a refund and place a new order for the desired product.
                </p>
              </div>

              <div className="legal-section">
                <h2>Damaged or Defective Products</h2>
                <p>
                  If you receive a damaged or defective product, please contact us immediately with photos of the product and packaging. We will arrange for a replacement or full refund at no additional cost to you, including return shipping.
                </p>
              </div>

              <div className="legal-section">
                <h2>Shipping Costs</h2>
                <p>
                  Return shipping costs are the customer's responsibility unless the return is due to our error (wrong product, damaged, or defective item). We recommend using a trackable shipping method for your return.
                </p>
              </div>

              <div className="legal-section">
                <h2>Contact Us</h2>
                <p>
                  For any questions about our Refund Policy or to initiate a return, please contact us:
                </p>
                <div className="legal-card">
                  <p><strong>SuJaya Herbals</strong></p>
                  <p>Email: sujayaherbals2025@gmail.com</p>
                  <p>WhatsApp: +91 6238416126</p>
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
