import { motion } from 'motion/react';
import { Link } from 'react-router';
import { MessageCircle, ArrowRight, Leaf } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Products() {
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
      description: 'Anti Dandruff & hair growth oil. Nature’s cure for clear scalp',
      qty: '100ml',
      price: '₹289',
      mrp: '₹340',
      discount: '15%',
      image: '/images/medhini/Medhini 01.jpg'
    },
    {
      id: 'vama-lip-balm',
      name: 'Vama Lip Balm',
      category: 'Lip Care',
      description: 'Where nature kisses your lip',
      qty: '5gms',
      price: '₹234',
      mrp: '₹275',
      discount: '15%',
      image: '/images/vama/Vama 00.jpg'
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
    {
      id: 'laya-face-care-oil',
      name: 'Laya - Face Care Oil',
      category: 'Skincare',
      description: 'No more tan just luminous skin',
      qty: '15ml',
      price: '₹595',
      mrp: '₹700',
      discount: '15%',
      image: '/images/laya/Laya 00.jpg'
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
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
            <h1 className="text-5xl md:text-7xl mb-6">Our Products</h1>
            <p className="text-xl text-muted-foreground">
              Discover our complete range of Ayurvedic skincare and haircare essentials, crafted with nature's finest ingredients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/product/${product.id}`}>
                  <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 group h-full flex flex-col">
                    <div className="relative overflow-hidden bg-cream">
                      {product.image ? (
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-72 flex items-center justify-center bg-cream">
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
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl mb-2 font-bold">{product.name}</h3>
                      <p className="text-muted-foreground mb-3 flex-1">{product.description}</p>
                      <p className="text-sm text-muted-foreground mb-4">Quantity: {product.qty}</p>
                      <div className="flex justify-between items-center">
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
                          className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary-dark transition-colors flex items-center gap-2"
                        >
                          <MessageCircle size={16} />
                          Inquire
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Need Help Choosing?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Our Ayurvedic experts are here to guide you to the perfect products for your skin and hair type
            </p>
            <button
              onClick={handleWhatsApp}
              className="bg-white text-primary px-10 py-5 rounded-full hover:bg-cream transition-all hover:scale-105 flex items-center gap-2 mx-auto text-lg"
            >
              <MessageCircle size={24} />
              Chat with Our Experts
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
