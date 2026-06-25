import { motion } from 'motion/react';

export function CookiePolicy() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-cream py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: May 20, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl mb-4">What Are Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">How We Use Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sujaya Herbals uses cookies to improve your browsing experience, understand how you interact with our website, and deliver personalized content and advertisements. Cookies help us remember your preferences, analyze site traffic, and ensure our website functions properly.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Types of Cookies We Use</h2>

                <div className="space-y-6">
                  <div className="bg-cream p-6 rounded-lg">
                    <h3 className="text-2xl mb-3">Essential Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.
                    </p>
                  </div>

                  <div className="bg-cream p-6 rounded-lg">
                    <h3 className="text-2xl mb-3">Performance Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies collect information about how you use our website, such as which pages you visit most often. This data helps us improve website performance and user experience.
                    </p>
                  </div>

                  <div className="bg-cream p-6 rounded-lg">
                    <h3 className="text-2xl mb-3">Functionality Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies allow the website to remember choices you make (such as your language or region) and provide enhanced, personalized features.
                    </p>
                  </div>

                  <div className="bg-cream p-6 rounded-lg">
                    <h3 className="text-2xl mb-3">Marketing Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies track your browsing habits to deliver advertisements that are relevant to you and your interests. They may also limit the number of times you see an ad and measure the effectiveness of advertising campaigns.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Third-Party Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Some cookies on our website are placed by third-party services that appear on our pages. We use third-party analytics tools (such as Google Analytics) to help us understand how visitors engage with our website. These third parties may also use cookies to deliver targeted advertising.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Managing Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Delete all cookies stored on your device</li>
                  <li>Block all cookies from being set</li>
                  <li>Allow cookies only from specific websites</li>
                  <li>Receive a notification each time a cookie is sent</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Please note that blocking or deleting cookies may impact your experience on our website and limit the functionality of certain features.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Changes to This Cookie Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. Any changes will be posted on this page with an updated "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about our use of cookies, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-cream rounded-lg">
                  <p className="text-foreground">
                    <strong>Sujaya Herbals Pvt. Ltd.</strong><br />
                    Email: privacy@sujayaherbals.com<br />
                    Phone: +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
