import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { MessageCircle, Leaf, Award, Shield, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import heroImage from '../../imports/New_Product_Image.JPG';
import ayurvedicImage from '../../imports/ayurveda-formulas-001.jpg';
import zrikaImage from '../../imports/WhatsApp_Image_2026-05-23_at_01.32.33.JPG';

export function Home() {
  const [currentReviewPage, setCurrentReviewPage] = useState(0);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hello! I would like to know more about Sujaya Herbals products.', '_blank');
  };

  const products = [
    {
      id: 'venika-hair-oil',
      name: 'Venika - Hair Oil',
      category: 'Haircare',
      description: 'Longer hair, stronger roots, No more premature greys',
      qty: '100ml',
      price: '₹595',
      mrp: '₹700',
      discount: '15%',
      image: '/images/venika/Venika 00.jpg'
    },
    {
      id: 'medhini-anti-dandruff-oil',
      name: 'Medhini - Anti Dandruff & Hair Oil',
      category: 'Haircare',
      description: "Anti Dandruff & hair growth oil. Nature's cure for clear scalp",
      qty: '100ml',
      price: '₹289',
      mrp: '₹340',
      discount: '15%',
      image: '/images/medhini/Medhini 01.jpg'
    },
    {
      id: 'zrika-premium-face-oil',
      name: 'Zrika Premium Face Oil',
      category: 'Skincare',
      description: 'Every drop glows with the essence of Saffron',
      qty: '10ml',
      price: '₹979',
      mrp: '₹1224',
      discount: '20%',
      image: '/images/zrika/Zrika 00.jpg'
    },
  ];

  const testimonials = [
    { name: 'Priya Sharma', review: 'Venika Hair Oil has completely transformed my hair! Stronger roots and no more grey hair. Highly recommend!', rating: 5 },
    { name: 'Anjali Reddy', review: 'Medhini Oil cleared my dandruff in just 2 weeks. My hair feels healthier and grows faster.', rating: 5 },
    { name: 'Meera Patel', review: 'Vama Lip Balm is a game changer! Natural, moisturizing, and lasts all day. Love it!', rating: 5 },
    { name: 'Rahul Verma', review: 'Zrika Face Oil gave me glowing skin within a week. The saffron essence is truly premium!', rating: 5 },
    { name: 'Sneha Kapoor', review: 'Laya Face Oil reduced my tan so effectively. Perfect pre-bath ritual for luminous skin!', rating: 5 },
    { name: 'Arjun Nair', review: 'Amazing quality and authentic Ayurvedic formulations. SuJaya Herbals is now my go-to brand!', rating: 5 },
    { name: 'Divya Iyer', review: 'The hair oils are incredible! My hair is longer, thicker, and healthier than ever before.', rating: 5 },
    { name: 'Kavita Singh', review: 'Natural ingredients that actually work. No harsh chemicals, just pure Ayurvedic goodness!', rating: 5 },
    { name: 'Rohan Das', review: 'Impressed with the results! Every product delivers exactly what it promises. Excellent brand!', rating: 5 },
    { name: 'Pooja Menon', review: 'My skin has never looked better. Zrika Premium Face Oil is worth every penny!', rating: 5 },
    { name: 'Amit Kumar', review: 'Medhini Anti-Dandruff Oil solved my scalp issues. No more itching or flakes. Thank you!', rating: 5 },
    { name: 'Neha Joshi', review: 'Vama Lip Balm keeps my lips soft and protected all day. Mercury and paraben-free perfection!', rating: 5 },
    { name: 'Vikram Rao', review: 'Quality products at fair prices. SuJaya Herbals has earned a loyal customer in me!', rating: 5 },
    { name: 'Shalini Gupta', review: 'Laya Face Oil is my secret weapon against tan. Luminous skin in just a few uses!', rating: 5 },
    { name: 'Karthik Reddy', review: 'Finally, authentic Ayurvedic products that work! Highly recommend SuJaya Herbals to everyone!', rating: 5 },
  ];

  const reviewsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / reviewsPerPage);

  const nextReviews = () => {
    setCurrentReviewPage((prev) => (prev + 1) % totalPages);
  };

  const prevReviews = () => {
    setCurrentReviewPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentReviews = testimonials.slice(
    currentReviewPage * reviewsPerPage,
    (currentReviewPage + 1) * reviewsPerPage
  );

  // Auto-scroll reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 md:pt-48 md:pb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl mb-6 text-foreground leading-tight">
                Pure Ayurvedic Beauty, Naturally Yours
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the ancient wisdom of Ayurveda blended with modern science. Premium herbal formulations for radiant skin and healthy hair.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary-dark transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Shop via WhatsApp
                </button>
                <Link
                  to="/products"
                  className="bg-accent text-accent-foreground px-8 py-4 rounded-full hover:bg-accent/80 transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Explore Products
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={heroImage}
                  alt="Ayurvedic herbs and products"
                  className="w-full max-h-[600px] object-contain bg-cream"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={32} />
              </div>
              <h4 className="mb-2">Patent-Based</h4>
              <p className="text-sm text-muted-foreground">Formulations</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary" size={32} />
              </div>
              <h4 className="mb-2">Trademark</h4>
              <p className="text-sm text-muted-foreground">Registered</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-primary" size={32} />
              </div>
              <h4 className="mb-2">100% Natural</h4>
              <p className="text-sm text-muted-foreground">Ingredients</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-primary" size={32} />
              </div>
              <h4 className="mb-2">Trusted by</h4>
              <p className="text-sm text-muted-foreground">10,000+ Customers</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Our Signature Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully crafted range of Ayurvedic skincare and haircare essentials
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 group h-full flex flex-col">
                  <Link to={`/product/${product.id}`}>
                    <div className="relative overflow-hidden bg-cream">
                      {product.image ? (
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-80 flex items-center justify-center bg-cream">
                          <div className="text-center p-6">
                            <Leaf className="text-primary/30 mx-auto mb-2" size={48} />
                            <p className="text-muted-foreground text-sm">Product Image</p>
                          </div>
                        </div>
                      )}
                      <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
                        {product.category}
                      </div>
                      {product.discount && (
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                          Save {product.discount}
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="p-6 flex-1 flex flex-col">
                    <Link to={`/product/${product.id}`} className="flex-1 flex flex-col">
                      <h3 className="text-xl mb-2 font-bold">{product.name}</h3>
                      <p className="text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                      <p className="text-sm text-muted-foreground mb-4">Quantity: {product.qty}</p>
                    </Link>
                    <div className="flex justify-between items-center mt-auto">
                      <div>
                        <span className="text-2xl text-primary font-semibold">{product.price}</span>
                        {product.mrp && (
                          <span className="text-sm text-muted-foreground line-through ml-2">{product.mrp}</span>
                        )}
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleWhatsApp();
                        }}
                        className="text-primary hover:text-primary-dark transition-colors flex items-center gap-1 font-medium"
                      >
                        Inquire <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary-dark transition-all hover:scale-105"
            >
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl mb-6">Rooted in Tradition, Refined by Science</h2>
              <p className="text-xl mb-6 text-primary-foreground/90">
                At Sujaya Herbals, we honor the 5,000-year-old wisdom of Ayurveda while embracing modern scientific validation. Every product is a testament to our commitment to purity, efficacy, and sustainability.
              </p>
              <p className="text-lg mb-8 text-primary-foreground/80">
                Our formulations are crafted with hand-selected botanical ingredients, following ancient texts and validated by contemporary research. We believe in beauty that nourishes from within.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full hover:bg-cream transition-all hover:scale-105"
              >
                Our Story
                <ArrowRight size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src={ayurvedicImage}
                alt="Traditional Ayurvedic herbs and spices"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ingredient Storytelling */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Nature's Finest Ingredients</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each ingredient is carefully sourced and traditionally processed to preserve its therapeutic properties
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Neem',
                benefit: 'Purifies & Protects',
                description: 'Known as the "village pharmacy," neem has powerful antibacterial and anti-inflammatory properties that cleanse and protect the skin.',
                image: 'https://images.unsplash.com/photo-1669574753113-6442f2cc69b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWVtJTIwbGVhdmVzfGVufDF8fHx8MTc3OTY2MzkxOHww&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                name: 'Turmeric',
                benefit: 'Brightens & Heals',
                description: 'Golden spice rich in curcumin, renowned for its anti-inflammatory and skin-brightening benefits. A timeless beauty secret.',
                image: 'https://images.unsplash.com/photo-1615485500834-bc10199bc727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJtZXJpYyUyMHJvb3QlMjBpc29sYXRlZHxlbnwxfHx8fDE3Nzk3MzQ2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                name: 'Bhringraj',
                benefit: 'Nourishes & Strengthens',
                description: 'The "king of herbs" for hair, promoting growth, preventing premature graying, and strengthening roots from within.',
                image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&q=80'
              },
              {
                name: 'Saffron',
                benefit: 'Revives & Radiates',
                description: 'Precious spice that enhances skin luminosity, improves complexion, and brings a natural glow to your skin.',
                image: 'https://images.unsplash.com/photo-1631189945107-34e33ff1c648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZmcm9uJTIwZmxvd2VyfGVufDF8fHx8MTc3OTY2MzkxN3ww&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                name: 'Amla',
                benefit: 'Strengthens & Rejuvenates',
                description: 'Rich in Vitamin C and antioxidants, amla strengthens hair follicles, promotes growth, and rejuvenates the scalp.',
                image: 'https://images.unsplash.com/photo-1600445512359-cc7e5c51bf75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29zZWJlcnJ5JTIwZnJ1aXQlMjBncmVlbnxlbnwxfHx8fDE3Nzk2NjM5MjR8MA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                name: 'Sandalwood',
                benefit: 'Cools & Clarifies',
                description: 'Cooling and soothing properties that clarify the skin, reduce inflammation, and provide a calming effect.',
                image: 'https://images.unsplash.com/photo-1583418007992-a8e33a92e7ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kYWx3b29kfGVufDF8fHx8MTc3OTY2MzkxOXww&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                name: 'Rose',
                benefit: 'Hydrates & Soothes',
                description: 'Timeless beauty ingredient that hydrates, tones, and soothes the skin while balancing pH levels naturally.',
                image: 'https://images.unsplash.com/photo-1578439231583-9eca0a363860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwcGV0YWxzfGVufDF8fHx8MTc3OTY2MzkxOXww&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                name: 'Aloe Vera',
                benefit: 'Heals & Moisturizes',
                description: 'Nature\'s healing plant that deeply moisturizes, soothes irritation, and promotes skin repair and regeneration.',
                image: 'https://images.unsplash.com/photo-1702416062979-dc44baa952c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG9lJTIwdmVyYSUyMGxlYWYlMjBpc29sYXRlZHxlbnwxfHx8fDE3Nzk3MzQ2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
              },
            ].map((ingredient, index) => (
              <motion.div
                key={ingredient.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group h-80 [perspective:1000px]"
              >
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl [backface-visibility:hidden]">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
                      <ImageWithFallback
                        src={ingredient.image}
                        alt={ingredient.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6 flex-1 flex flex-col justify-center text-center">
                        <h3 className="text-2xl mb-2">{ingredient.name}</h3>
                        <p className="text-accent">{ingredient.benefit}</p>
                      </div>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-primary text-primary-foreground [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                      <h3 className="text-2xl mb-4">{ingredient.name}</h3>
                      <p className="text-primary-foreground/90 leading-relaxed">{ingredient.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Loved by Thousands</h2>
            <p className="text-xl text-muted-foreground">Real results from real customers</p>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentReviews.map((testimonial, index) => (
                <motion.div
                  key={currentReviewPage * reviewsPerPage + index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-cream p-8 rounded-2xl"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-lg mb-4 text-foreground">{testimonial.review}</p>
                  <p className="text-primary">— {testimonial.name}</p>
                </motion.div>
              ))}
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={prevReviews}
                className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary-dark transition-colors shadow-lg"
                aria-label="Previous reviews"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentReviewPage(i)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i === currentReviewPage ? 'bg-primary' : 'bg-primary/30'
                    }`}
                    aria-label={`Go to review page ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextReviews}
                className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary-dark transition-colors shadow-lg"
                aria-label="Next reviews"
              >
                <ChevronRight size={24} />
              </button>
            </div>
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
            <h2 className="text-4xl md:text-5xl mb-6">Begin Your Ayurvedic Journey Today</h2>
            <p className="text-xl mb-8">
              Experience the transformative power of nature with our premium herbal formulations
            </p>
            <button
              onClick={handleWhatsApp}
              className="bg-primary text-primary-foreground px-10 py-5 rounded-full hover:bg-primary-dark transition-all hover:scale-105 flex items-center gap-2 mx-auto text-lg"
            >
              <MessageCircle size={24} />
              Start Shopping on WhatsApp
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
