import { motion } from 'motion/react';
import { Leaf, Award, Shield, Heart, Users, Sprout } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import ayurvedicImage from '../../imports/ayurveda-formulas-001.jpg';

export function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const values = [
    {
      icon: <Award size={32} />,
      title: 'Our Mission',
      description: 'Our mission is to create premium formulations that deliver visible results while nurturing beauty in its purest and most natural form.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Our Vision',
      description: 'To become globally admired premium beauty brand celebrated for elegance, purity and conscious self care.'
    },
    {
      icon: <Leaf size={32} />,
      title: 'Natural Purity',
      description: 'We use only the finest botanical ingredients, free from harmful chemicals and synthetic additives.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Sustainable Practices',
      description: 'We are committed to ethical sourcing and eco-friendly packaging to protect our planet.'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl mb-6 text-foreground">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground">
              A journey that began with a simple belief: nature holds the secret to timeless beauty
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="/images/ayurvedic-stack.png"
                alt="Ayurvedic tradition"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6">About Us</h2>
              <p className="text-lg text-muted-foreground mb-6">
                SuJaya herbals was founded in 2025 with deep passion for Ayurveda, natural heeling and holistic beauty by Dr. Sujatha and Dr. Jayakumary. Rooted in timeless tradition of Ayurveda, our brand is dedicated for creating premium herbal skin and hair care products that nurture beauty naturally and safely.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Every formulation of SuJaya herbals is thoughtfully crafted using carefully selected herbs, hot pressed oils and traditional ayurvedic principles to provide gentle yet effective care for skin and hair.
              </p>
              <p className="text-lg text-muted-foreground">
                At SuJaya herbals we believe true beauty comes to balance, purity and healthy living. Our products are designed to address everyday concerns such as hairfall, dandruff, dryness, pigmentation dullness (sun tan) and scalp imbalance while supporting long term wellness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl mb-6">Our Philosophy</h2>
              <p className="text-xl mb-6 text-primary-foreground/90">
                We believe that true beauty is a reflection of inner health and balance. Ayurveda teaches us that when we align with nature, we unlock our body's innate ability to heal, nourish, and radiate.
              </p>
              <p className="text-lg text-primary-foreground/80">
                This philosophy guides everything we do—from the ingredients we choose to the way we formulate our products. We don't just create skincare and haircare; we create rituals of self-care that honor the wisdom of the earth and the rhythm of your body.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src={ayurvedicImage}
                alt="Natural ingredients"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">What We Stand For</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-2xl mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ayurvedic Heritage */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl mb-6">Ayurvedic Heritage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Ayurveda, meaning "the science of life," originated in India over 5,000 years ago. It is one of the world's oldest holistic healing systems, emphasizing balance between mind, body, and spirit.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our formulations draw from classical Ayurvedic texts such as the Charaka Samhita and Sushruta Samhita, which document the therapeutic properties of hundreds of medicinal plants.
              </p>
              <p className="text-lg text-muted-foreground">
                By honoring these time-tested traditions and combining them with contemporary research, we create products that are both effective and deeply rooted in natural wellness.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white p-6 rounded-2xl text-center shadow-lg">
                <Sprout className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-3xl text-primary mb-2">5000+</h3>
                <p className="text-muted-foreground">Years of Wisdom</p>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center shadow-lg">
                <Leaf className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-3xl text-primary mb-2">100%</h3>
                <p className="text-muted-foreground">Natural Ingredients</p>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center shadow-lg">
                <Shield className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-3xl text-primary mb-2">Patent</h3>
                <p className="text-muted-foreground">Based Formulations</p>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center shadow-lg">
                <Users className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-3xl text-primary mb-2">10,000+</h3>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Patents & Trust */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Certified & Trusted</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality is validated by industry certifications and scientific research
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-cream p-8 rounded-2xl text-center"
            >
              <Award className="text-primary mx-auto mb-6" size={64} />
              <h3 className="text-2xl mb-4">Patent-Based Formulations</h3>
              <p className="text-muted-foreground">
                Our unique formulations are protected by patents, ensuring you receive authentic, scientifically-backed products.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="bg-cream p-8 rounded-2xl text-center"
            >
              <Shield className="text-primary mx-auto mb-6" size={64} />
              <h3 className="text-2xl mb-4">Trademark Registered</h3>
              <p className="text-muted-foreground">
                Sujaya Herbals is a registered trademark, a symbol of our brand's authenticity and commitment to excellence.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-cream p-8 rounded-2xl text-center"
            >
              <Leaf className="text-primary mx-auto mb-6" size={64} />
              <h3 className="text-2xl mb-4">Ayurvedic Certified</h3>
              <p className="text-muted-foreground">
                All our products comply with Ayurvedic standards and are formulated following traditional principles.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Join the Sujaya Family</h2>
            <p className="text-xl mb-8">
              Experience the difference that pure, authentic Ayurvedic care can make
            </p>
            <a
              href="/products"
              className="inline-block bg-primary text-primary-foreground px-10 py-5 rounded-full hover:bg-primary-dark transition-all hover:scale-105 text-lg"
            >
              Explore Our Products
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
