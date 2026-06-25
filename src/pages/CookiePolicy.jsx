import { useEffect } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import './Legal.css';

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <div className="legal-content-wrap">
            <AnimatedSection>
              <h1>Cookie Policy</h1>
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
                <h2>What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
              </div>

              <div className="legal-section">
                <h2>How We Use Cookies</h2>
                <p>
                  Sujaya Herbals uses cookies to improve your browsing experience, understand how you interact with our website, and deliver personalized content and advertisements. Cookies help us remember your preferences, analyze site traffic, and ensure our website functions properly.
                </p>
              </div>

              <div className="legal-section">
                <h2>Types of Cookies We Use</h2>
                <div className="cookie-grid">
                  <div className="cookie-card">
                    <h3>Essential Cookies</h3>
                    <p>
                      These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.
                    </p>
                  </div>

                  <div className="cookie-card">
                    <h3>Performance Cookies</h3>
                    <p>
                      These cookies collect information about how you use our website, such as which pages you visit most often. This data helps us improve website performance and user experience.
                    </p>
                  </div>

                  <div className="cookie-card">
                    <h3>Functionality Cookies</h3>
                    <p>
                      These cookies allow the website to remember choices you make (such as your language or region) and provide enhanced, personalized features.
                    </p>
                  </div>

                  <div className="cookie-card">
                    <h3>Marketing Cookies</h3>
                    <p>
                      These cookies track your browsing habits to deliver advertisements that are relevant to you and your interests. They may also limit the number of times you see an ad and measure the effectiveness of advertising campaigns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="legal-section" style={{ marginTop: '2.5rem' }}>
                <h2>Third-Party Cookies</h2>
                <p>
                  Some cookies on our website are placed by third-party services that appear on our pages. We use third-party analytics tools (such as Google Analytics) to help us understand how visitors engage with our website. These third parties may also use cookies to deliver targeted advertising.
                </p>
              </div>

              <div className="legal-section">
                <h2>Managing Cookies</h2>
                <p>
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul>
                  <li>Delete all cookies stored on your device</li>
                  <li>Block all cookies from being set</li>
                  <li>Allow cookies only from specific websites</li>
                  <li>Receive a notification each time a cookie is sent</li>
                </ul>
                <p style={{ marginTop: '1rem' }}>
                  Please note that blocking or deleting cookies may impact your experience on our website and limit the functionality of certain features.
                </p>
              </div>

              <div className="legal-section">
                <h2>Changes to This Cookie Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. Any changes will be posted on this page with an updated "Last updated" date.
                </p>
              </div>

              <div className="legal-section">
                <h2>Contact Us</h2>
                <p>
                  If you have questions about our use of cookies, please contact us at:
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
