import { useEffect } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import './Legal.css';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <div className="legal-content-wrap">
            <AnimatedSection>
              <h1>Terms & Conditions</h1>
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
                <h2>Welcome to Sujaya Herbals</h2>
                <p>
                  These Terms and Conditions ("Terms") govern your use of the Sujaya Herbals website and the purchase of products from us. By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website or purchase our products.
                </p>
              </div>

              <div className="legal-section">
                <h2>Use of Website</h2>
                <p>
                  By using our website, you agree to:
                </p>
                <ul>
                  <li>Provide accurate and complete information when placing orders</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use the website only for lawful purposes</li>
                  <li>Not engage in any activity that disrupts or interferes with the website's functionality</li>
                  <li>Not attempt to gain unauthorized access to any part of the website</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>Product Information and Pricing</h2>
                <p>
                  We strive to provide accurate product descriptions, images, and pricing information. However, we do not warrant that product descriptions, images, pricing, or other content on the website is accurate, complete, or error-free. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
                </p>
              </div>

              <div className="legal-section">
                <h2>Orders and Payment</h2>
                <p>
                  When you place an order through our website:
                </p>
                <ul>
                  <li>You are making an offer to purchase the products in your order</li>
                  <li>We reserve the right to accept or decline your order for any reason</li>
                  <li>Order confirmation does not constitute acceptance of your order</li>
                  <li>Payment must be received before we process and ship your order</li>
                  <li>All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>Shipping and Delivery</h2>
                <p>
                  We aim to process and ship orders within 2-3 business days. Delivery times vary based on your location and the shipping method selected. While we make every effort to meet estimated delivery dates, we are not responsible for delays caused by shipping carriers, customs clearance, or other factors beyond our control.
                </p>
              </div>

              <div className="legal-section">
                <h2>Product Usage and Safety</h2>
                <p>
                  Our products are formulated with natural Ayurvedic ingredients. To ensure safe use:
                </p>
                <ul>
                  <li>Always read and follow the product label and directions for use</li>
                  <li>Perform a patch test before using any new product</li>
                  <li>Discontinue use if you experience any adverse reactions</li>
                  <li>Keep products out of reach of children</li>
                  <li>Consult a healthcare professional if you have specific health concerns or are pregnant/nursing</li>
                </ul>
                <p>
                  Individual results may vary. Our products are not intended to diagnose, treat, cure, or prevent any disease.
                </p>
              </div>

              <div className="legal-section">
                <h2>Intellectual Property</h2>
                <p>
                  All content on the Sujaya Herbals website, including but not limited to text, images, logos, designs, and product formulations, is the property of Sujaya Herbals Pvt. Ltd. and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or use any content without our express written permission.
                </p>
              </div>

              <div className="legal-section">
                <h2>Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, Sujaya Herbals shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or products. Our total liability shall not exceed the amount you paid for the product giving rise to the claim.
                </p>
              </div>

              <div className="legal-section">
                <h2>Governing Law</h2>
                <p>
                  These Terms and Conditions are governed by the laws of India. Any disputes arising from these Terms or your use of our website shall be subject to the exclusive jurisdiction of the courts in Kollam, Kerala.
                </p>
              </div>

              <div className="legal-section">
                <h2>Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website. Your continued use of the website after changes are posted constitutes your acceptance of the revised Terms.
                </p>
              </div>

              <div className="legal-section">
                <h2>Contact Information</h2>
                <p>
                  If you have any questions about these Terms and Conditions, please contact us:
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
