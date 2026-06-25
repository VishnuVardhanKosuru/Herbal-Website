import { motion } from 'motion/react';

export function Terms() {
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
            <h1 className="text-5xl md:text-6xl mb-4">Terms & Conditions</h1>
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
                <h2 className="text-3xl mb-4">Welcome to Sujaya Herbals</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions ("Terms") govern your use of the Sujaya Herbals website and the purchase of products from us. By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website or purchase our products.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Use of Website</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By using our website, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information when placing orders</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use the website only for lawful purposes</li>
                  <li>Not engage in any activity that disrupts or interferes with the website's functionality</li>
                  <li>Not attempt to gain unauthorized access to any part of the website</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Product Information and Pricing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to provide accurate product descriptions, images, and pricing information. However, we do not warrant that product descriptions, images, pricing, or other content on the website is accurate, complete, or error-free. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Orders and Payment</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you place an order through our website:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>You are making an offer to purchase the products in your order</li>
                  <li>We reserve the right to accept or decline your order for any reason</li>
                  <li>Order confirmation does not constitute acceptance of your order</li>
                  <li>Payment must be received before we process and ship your order</li>
                  <li>All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Shipping and Delivery</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We aim to process and ship orders within 2-3 business days. Delivery times vary based on your location and the shipping method selected. While we make every effort to meet estimated delivery dates, we are not responsible for delays caused by shipping carriers, customs clearance, or other factors beyond our control.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Product Usage and Safety</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our products are formulated with natural Ayurvedic ingredients. To ensure safe use:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Always read and follow the product label and directions for use</li>
                  <li>Perform a patch test before using any new product</li>
                  <li>Discontinue use if you experience any adverse reactions</li>
                  <li>Keep products out of reach of children</li>
                  <li>Consult a healthcare professional if you have specific health concerns or are pregnant/nursing</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Individual results may vary. Our products are not intended to diagnose, treat, cure, or prevent any disease.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on the Sujaya Herbals website, including but not limited to text, images, logos, designs, and product formulations, is the property of Sujaya Herbals Pvt. Ltd. and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or use any content without our express written permission.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, Sujaya Herbals shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or products. Our total liability shall not exceed the amount you paid for the product giving rise to the claim.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions are governed by the laws of India. Any disputes arising from these Terms or your use of our website shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website. Your continued use of the website after changes are posted constitutes your acceptance of the revised Terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="mt-4 p-6 bg-cream rounded-lg">
                  <p className="text-foreground">
                    <strong>Sujaya Herbals Pvt. Ltd.</strong><br />
                    Email: legal@sujayaherbals.com<br />
                    Phone: +91 98765 43210<br />
                    Address: 123, Herbal Garden Complex, MG Road, Bangalore - 560001
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
