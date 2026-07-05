import { motion } from 'motion/react';

export function RefundPolicy() {
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
            <h1 className="text-5xl md:text-6xl mb-4">Refund Policy</h1>
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
                <h2 className="text-3xl mb-4">Our Commitment to You</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Sujaya Herbals, customer satisfaction is our top priority. We stand behind the quality of our products and want you to be completely happy with your purchase. If for any reason you are not satisfied, we offer a hassle-free refund and return policy.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Return Eligibility</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may return products within <strong>5 days</strong> of receiving your order if:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>The product is unused and in its original packaging</li>
                  <li>The product seal is intact (for hygiene and safety reasons)</li>
                  <li>You have the original receipt or proof of purchase</li>
                  <li>The product was damaged during shipping or is defective</li>
                  <li>You received the wrong product</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Non-Returnable Items</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For health and safety reasons, the following items cannot be returned:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Opened or used products</li>
                  <li>Products with broken seals</li>
                  <li>Gift cards or promotional items</li>
                  <li>Sale or clearance items (unless defective)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl mb-4">How to Initiate a Return</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To initiate a return, please follow these steps:
                </p>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>Contact our customer support team via email at <strong>sujayaherbals2025@gmail.com</strong> or WhatsApp at <strong>+91 6238416126</strong></li>
                  <li>Provide your order number and reason for return</li>
                  <li>Our team will review your request and provide a return authorization within 24-48 hours</li>
                  <li>Pack the product securely in its original packaging</li>
                  <li>Ship the product to the address provided by our team</li>
                </ol>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Refund Process</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Once we receive and inspect your returned product:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>If approved, your refund will be processed within 7-10 business days</li>
                  <li>Refunds will be issued to the original payment method</li>
                  <li>You will receive a confirmation email once the refund is processed</li>
                  <li>Please allow 5-7 business days for the refund to reflect in your account</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Exchanges</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We currently do not offer direct exchanges. If you would like a different product, please return the original item for a refund and place a new order for the desired product.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Damaged or Defective Products</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you receive a damaged or defective product, please contact us immediately with photos of the product and packaging. We will arrange for a replacement or full refund at no additional cost to you, including return shipping.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Shipping Costs</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Return shipping costs are the customer's responsibility unless the return is due to our error (wrong product, damaged, or defective item). We recommend using a trackable shipping method for your return.
                </p>
              </div>

              <div>
                <h2 className="text-3xl mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For any questions about our Refund Policy or to initiate a return, please contact us:
                </p>
                <div className="mt-4 p-6 bg-cream rounded-lg">
                  <p className="text-foreground">
                    <strong>Sujaya Herbals Pvt. Ltd.</strong><br />
                    Email: sujayaherbals2025@gmail.com<br />
                    WhatsApp: +91 6238416126<br />
                    Phone: +91 6238416126
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
