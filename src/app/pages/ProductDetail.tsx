import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Star, Leaf, Shield, Award, ArrowLeft, ChevronLeft, ChevronRight, Phone, Mail, X, CheckCircle, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import zrikaImage from '../../imports/WhatsApp_Image_2026-05-23_at_01.32.33.JPG';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const productData: Record<string, any> = {
  'venika-hair-oil': {
    name: 'Venika - Hair Oil',
    category: 'Haircare',
    price: '₹595',
    mrp: '₹700',
    description: 'Venika is the art of Ayurveda refined into a rare elixir for hair that deserves the finest care. Formulated with handpicked herbs, Venika by SuJaya Herbals delivers stronger roots, natural growth, and protection against premature greying. It enhances every strand with a lustrous glow, while its cooling essence brings soothing calm to the scalp. A celebration of botanical richness and luxury, Venika transforms hair care into a ritual of indulgence, radiance, and enduring beauty.',
    images: [
      '/images/venika/Venika_00.jpg',
      '/images/venika/Venika_01.jpg',
      '/images/venika/Venika_02.jpg',
      '/images/venika/Venika_03.jpg',
      '/images/venika/Venika_04a.jpg',
      '/images/venika/Venika_00a.jpg',
      '/images/venika/Venika_00b.jpg',
      '/images/venika/Venika_02_a.jpg'
    ],
    benefits: [
      'Regular use of Venika Hair Oil helps strengthen hair strands',
      'Reduce breakage and delay premature greying of hair',
      'Maintain naturally black, lustrous hair'
    ],
    ingredients: [
      { name: 'Bhringraj', benefit: 'Promotes hair growth and prevents premature graying' },
      { name: 'Amla', benefit: 'Rich in Vitamin C, strengthens hair follicles', image: '/images/ingredients/4.Amla.jpeg' },
      { name: 'Indigo', benefit: 'Maintains naturally black, lustrous hair', image: '/images/ingredients/3.Indigo.JPG' },
      { name: 'Brahmi', benefit: 'Nourishes the scalp and reduces hair fall' },
      { name: 'Coconut Oil', benefit: 'Deep conditioning and moisturizing base' }
    ],
    directions: 'Warm the oil slightly. Massage gently into scalp and hair from roots to tips. Leave on for at least 2 hours or overnight for deep nourishment. Wash with a mild shampoo. Use 2-3 times a week for best results.',
    volume: '100ml'
  },
  'medhini-anti-dandruff-oil': {
    name: 'Medhini - Anti Dandruff & Hair Oil',
    category: 'Haircare',
    price: '₹289',
    mrp: '₹340',
    description: 'Medhini, an exquisite blend crafted to embody nature’s cure for a clear scalp. With the nourishing depth of virgin coconut oil and the restorative strength of fenugreek, this elixir breathes life into every strand, bringing balance, vitality, and grace to your hair. Medhini purifies the scalp with gentle clarity, strengthens roots with natural resilience, and stimulates healthy growth for hair. Each drop is a harmony of tradition and refinement, transforming daily care into a ritual of indulgence. With Medhini, every strand is guided towards a journey of strength, clarity, and lustrous growth.',
    images: [
      '/images/medhini/Medhini_01.jpg',
      '/images/medhini/Medhini_02.jpg',
      '/images/medhini/Medhini_03.jpg',
      '/images/medhini/Medhini_04.jpg',
      '/images/medhini/Medhini_02a.jpg',
      '/images/medhini/Medhini_05a.jpg'
    ],
    benefits: [
      'Formulated with powerful herbal ingredients',
      'Medhini works effectively to reduce dandruff',
      'Soothe itchiness and cleanse the scalp'
    ],
    ingredients: [
      { name: 'Neem', benefit: 'Antibacterial properties that combat dandruff' },
      { name: 'Tea Tree Oil', benefit: 'Natural antifungal that soothes scalp' },
      { name: 'Methi (Fenugreek)', benefit: 'Strengthens hair roots and promotes growth', image: '/images/ingredients/2.Fenugreek.jpg' },
      { name: 'Sesame Oil', benefit: 'Moisturizing base that nourishes scalp' }
    ],
    directions: 'Apply oil to scalp and massage gently in circular motions. Leave on for 1-2 hours or overnight. Wash thoroughly with a mild shampoo. Use regularly for best results in controlling dandruff and promoting hair growth.',
    volume: '100ml'
  },
  'vama-lip-balm': {
    name: 'Vama Lip Balm',
    category: 'Lip Care',
    price: '₹234',
    mrp: '₹275',
    description: 'Vama Lip Balm is a naturally crafted lip care essential made with carefully selected ingredients to nourish and protect your lips. Its smooth, buttery texture glides effortlessly, keeping lips soft, moisturised, and comfortable throughout the day. Infused with a pleasant, gentle fragrance and available in three beautiful shades, VAMA adds a subtle touch of colour while caring for your lips. Free from harsh chemicals, sulphates, and other harmful additives, it is a safe and authentic choice for naturally healthy, beautiful lips.',
    images: [
      '/images/vama/Vama_00.jpg',
      '/images/vama/Vama_01.jpg',
      '/images/vama/Vama_02.jpg',
      '/images/vama/Vama_03.jpg',
      '/images/vama/Vama_04.jpg',
      '/images/vama/Vama_05.jpg',
      '/images/vama/Vama_06.jpg',
      '/images/vama/Vama_00a.jpg',
      '/images/vama/Vama_05a.jpg'
    ],
    benefits: [
      'Keeps lips soft, smooth and naturally healthy',
      'Reduce pigmentation',
      'Helps to heal rough and chapped lips'
    ],
    ingredients: [
      { name: 'Beeswax', benefit: 'Creates a protective barrier and locks in moisture' },
      { name: 'Shea Butter', benefit: 'Deeply nourishes and softens lips' },
      { name: 'Vitamin E', benefit: 'Antioxidant protection and healing' },
      { name: 'Vetiver', benefit: 'Gentle care with natural medicinal cooling benefits', image: '/images/ingredients/8.Vetiver.jpg' }
    ],
    directions: 'Apply generously to lips as needed throughout the day. For extra hydration, apply before bedtime. Use regularly to keep lips soft, smooth, and protected.',
    volume: '5gms'
  },
  'zrika-premium-face-oil': {
    name: 'Zrika Premium Face Oil',
    category: 'Skincare',
    price: '₹979',
    mrp: '₹1224',
    description: 'Zrika is a magical elixir for your skin, enriched with the golden touch of pure Kashmiri saffron and the richness of 16 precious herbs. This exquisite blend, enriched with nutrient dense wood-pressed sesame oil and the velvety richness of goat milk, is meticulously crafted to drench your skin in deep nourishment and luminous vitality. With every touch, it imparts a delicate warmth and a natural radiance, as if kissed by sunlight. More than a skincare product, Zrika is a ritual of elegance—restoring, brightening, and unveiling the glow that lies within.',
    images: [
      '/images/zrika/Zrika_00.jpg',
      '/images/zrika/Zrika_01.jpg',
      '/images/zrika/Zrika_02.jpg',
      '/images/zrika/Zrika_03.jpg',
      '/images/zrika/Zrika_04.jpg',
      '/images/zrika/Zrika_05.jpg',
      '/images/zrika/Zrika_06.jpg',
      '/images/zrika/Zrika_01a.jpg',
      '/images/zrika/Zrika_03b.jpg'
    ],
    benefits: [
      'Enhances complexion and skin tone',
      'Fades fine lines and wrinkles',
      'Even out undereye circles',
      'Enhance skin’s natural glow',
      'Overall Rejuvenation',
      'Suitable for men and women'
    ],
    ingredients: [
      { name: 'Saffron', benefit: 'Enhances radiance and brightens complexion', image: '/images/ingredients/1.Saffron.jpg' },
      { name: 'Kumkumadi Oil', benefit: 'Traditional blend for glowing skin' },
      { name: 'Sandalwood', benefit: 'Cools, clarifies and refines skin tone', image: '/images/ingredients/7.Sandalwood.jpg' },
      { name: 'Goat Milk', benefit: 'Velvety richness that provides deep nourishment', image: '/images/ingredients/6.Goat_milk.jpeg' },
      { name: 'Almond Oil', benefit: 'Nourishes and softens skin' }
    ],
    directions: 'After cleansing, apply 2-3 drops to face and neck. Gently massage in upward circular motions until absorbed. Use daily, preferably at night, for best results. Can also be mixed with your moisturizer.',
    volume: '10ml'
  },
  'laya-face-care-oil': {
    name: 'Laya - Face Care Oil',
    category: 'Skincare',
    price: '₹595',
    mrp: '₹700',
    description: 'Laya is a refined pre-bath face care oil, designed to reveal a luminous, eventoned complexion while diminishing tan and pigmentation. At its heart lies the ruby richness of fresh pomegranate juice, a potent antioxidant that shields the skin from damage, boosts collagen production, and restores a healthy, youthful glow. Paired with Manjishta, an age old Ayurvedic herb known for its purifying, circulation-boosting, and anti-aging properties, this luxurious blend deeply hydrates and revitalises. With every use, Laya gently erases dullness and unevenness, unveiling skin that radiates clarity, brightness, and natural beauty.',
    images: [
      '/images/laya/Laya_00.jpg',
      '/images/laya/Laya_01.jpg',
      '/images/laya/Laya_02.jpg',
      '/images/laya/Laya_03.jpg',
      '/images/laya/Laya_04.jpg',
      '/images/laya/Laya_05.jpg',
      '/images/laya/Laya_06.jpg',
      '/images/laya/Laya_07.jpg',
      '/images/laya/Laya_01a.jpg'
    ],
    benefits: [
      'Beneficial against sun tan and pigmentation',
      'Prevent dark circles',
      'Enhances skin tone and radiance',
      'Suitable for men and women'
    ],
    ingredients: [
      { name: 'Manjishta (Indian Maddar)', benefit: 'Age old Ayurvedic herb known for purifying and anti-aging', image: '/images/ingredients/5.Indian_maddar.png' },
      { name: 'Turmeric', benefit: 'Natural skin brightening and tan reduction' },
      { name: 'Vitamin C', benefit: 'Powerful antioxidant that evens skin tone' },
      { name: 'Licorice Extract', benefit: 'Reduces hyperpigmentation and brightens' },
      { name: 'Jojoba Oil', benefit: 'Lightweight moisturization and protection' }
    ],
    directions: 'Apply oil evenly to face and neck before bathing. Gently massage for 2-3 minutes. Leave on for 15-20 minutes. Rinse with lukewarm water and cleanse as usual. Use regularly for visible reduction in tan and brighter skin.',
    volume: '15ml'
  },
};

export function ProductDetail() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [showSubmitConfirmation, setShowSubmitConfirmation] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const product = id ? productData[id] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:underline">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/919876543210?text=Hello! I would like to know more about ${product.name}.`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Just show confirmation, don't connect to WhatsApp
    setShowSubmitConfirmation(true);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/919876543210?text=Hello! I would like to know more about your products.', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:info@sujayaherbals.com';
  };

  const nextImage = () => {
    if (product.images && product.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = () => {
    if (product.images && product.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  // Get 3 related products - prefer same category, but fill with others if needed
  const relatedProducts = Object.keys(productData)
    .filter(key => key !== id)
    .sort((a, b) => {
      // Prioritize same category
      const aMatch = productData[a].category === product.category ? 0 : 1;
      const bMatch = productData[b].category === product.category ? 0 : 1;
      return aMatch - bMatch;
    })
    .slice(0, 3);

  // Product-specific FAQs
  const productFaqs: Record<string, Array<{ question: string; answer: string }>> = {
    'venika-hair-oil': [
      {
        question: 'How often should I use Venika Hair Oil?',
        answer: 'For best results, use Venika Hair Oil 2-3 times per week. Apply it at least 2 hours before washing, or leave it overnight for deep nourishment.'
      },
      {
        question: 'How long does it take to see results?',
        answer: 'Most customers notice improvements in hair texture and reduced hair fall within 3-4 weeks of regular use. Visible reduction in premature graying typically appears after 2-3 months of consistent application.'
      },
      {
        question: 'Can I use this oil on colored or chemically treated hair?',
        answer: 'Yes, Venika Hair Oil is made with 100% natural ingredients and is safe for colored or chemically treated hair. It actually helps nourish and repair damaged hair.'
      },
      {
        question: 'Is this product suitable for all hair types?',
        answer: 'Absolutely! Venika Hair Oil is formulated to work effectively on all hair types - straight, wavy, curly, or coily, and for both men and women.'
      },
      {
        question: 'Can I use this product daily?',
        answer: 'While you can use it daily, we recommend 2-3 times per week for optimal results. Daily use is safe but may not be necessary unless your hair is extremely dry or damaged.'
      },
      {
        question: 'Are there any precautions before use?',
        answer: 'Venika Hair Oil is made from natural ingredients and is generally safe. However, if you have any known allergies to specific herbs, please check the ingredient list. We recommend doing a patch test before first use.'
      }
    ],
    'medhini-anti-dandruff-oil': [
      {
        question: 'How often should I use Medhini Anti Dandruff Oil?',
        answer: 'For active dandruff, use 2-3 times per week until the condition improves. Once controlled, you can reduce to once a week for maintenance.'
      },
      {
        question: 'How long does it take to see results?',
        answer: 'Most users experience a noticeable reduction in dandruff and itching within 1-2 weeks of regular use. Complete dandruff control typically occurs within 4-6 weeks.'
      },
      {
        question: 'Is it suitable for sensitive scalp?',
        answer: 'Yes, Medhini is formulated with gentle, natural ingredients suitable for sensitive scalps. The neem and tea tree oil soothe irritation while combating dandruff.'
      },
      {
        question: 'Can I use this product with other hair care products?',
        answer: 'Yes, Medhini works well alongside other Ayurvedic products. However, avoid using chemical-heavy shampoos immediately after application for best results.'
      },
      {
        question: 'Does this oil help with hair growth too?',
        answer: 'Absolutely! While primarily formulated for dandruff control, Medhini also contains fenugreek and sesame oil that strengthen roots and promote healthy hair growth.'
      },
      {
        question: 'Will this oil make my hair greasy?',
        answer: 'Medhini is designed to absorb well. Use the recommended amount and wash thoroughly with a mild shampoo. If you have very fine hair, use slightly less oil.'
      }
    ],
    'vama-lip-balm': [
      {
        question: 'How often should I apply Vama Lip Balm?',
        answer: 'Apply Vama Lip Balm as needed throughout the day. For best results, apply before bedtime and first thing in the morning. Reapply after eating or drinking.'
      },
      {
        question: 'Is Vama Lip Balm truly mercury and paraben-free?',
        answer: 'Yes, absolutely! Vama Lip Balm is completely free from mercury, parabens, and other harmful chemicals. It\'s crafted with pure, natural ingredients.'
      },
      {
        question: 'Can I use this under lipstick?',
        answer: 'Yes, Vama Lip Balm makes an excellent base for lipstick. Apply it first, let it absorb for a minute, then apply your lipstick as usual.'
      },
      {
        question: 'Is this product suitable for sensitive lips?',
        answer: 'Absolutely! Vama is formulated with gentle, medicinal herbs and natural ingredients, making it perfect for even the most sensitive lips.'
      },
      {
        question: 'How long does one balm last?',
        answer: 'With regular use (3-4 times daily), one 5gm Vama Lip Balm typically lasts 4-6 weeks, depending on usage frequency.'
      },
      {
        question: 'Can children use this lip balm?',
        answer: 'Yes, Vama Lip Balm is safe for children above 3 years of age. The natural formulation makes it gentle enough for young, delicate lips.'
      }
    ],
    'zrika-premium-face-oil': [
      {
        question: 'How often should I use Zrika Premium Face Oil?',
        answer: 'Use Zrika Premium Face Oil once daily, preferably at night after cleansing. For very dry skin, you can use it twice daily - morning and evening.'
      },
      {
        question: 'How long does it take to see results?',
        answer: 'You\'ll notice immediate hydration and glow. Visible improvements in complexion and skin tone typically appear within 2-3 weeks of regular use. Optimal results show after 6-8 weeks.'
      },
      {
        question: 'Is it suitable for oily or acne-prone skin?',
        answer: 'Yes! Despite being an oil, Zrika is lightweight and non-comedogenic. The saffron and sandalwood help balance oil production while providing nourishment.'
      },
      {
        question: 'Can I use this product daily?',
        answer: 'Absolutely! Zrika is designed for daily use. The premium formulation is gentle enough for everyday application and delivers cumulative benefits over time.'
      },
      {
        question: 'Can this be used with other skincare products?',
        answer: 'Yes, Zrika integrates beautifully into your routine. Apply it after water-based serums but before heavy creams. You can also mix 1-2 drops with your moisturizer.'
      },
      {
        question: 'Will this oil make my skin greasy?',
        answer: 'No, Zrika absorbs quickly without leaving a greasy residue. Use 2-3 drops for the entire face and neck. If you have very oily skin, start with 1-2 drops.'
      }
    ],
    'laya-face-care-oil': [
      {
        question: 'How often should I use Laya Face Care Oil?',
        answer: 'Use Laya as a pre-bath ritual 3-4 times per week for best results. Apply 15-20 minutes before bathing to allow the active ingredients to work on tan reduction.'
      },
      {
        question: 'How long does it take to see reduction in tan?',
        answer: 'Visible tan reduction typically begins within 2-3 weeks of regular use. Complete tan removal depends on skin type and tan severity, usually taking 4-8 weeks.'
      },
      {
        question: 'Is it suitable for sensitive skin?',
        answer: 'Yes, Laya is formulated with gentle, natural ingredients. However, if you have very sensitive skin, do a patch test first. The turmeric and antioxidants are generally well-tolerated.'
      },
      {
        question: 'Can I use this product on my body as well?',
        answer: 'Absolutely! While formulated for the face, Laya works wonderfully on tanned areas of your body like arms, neck, and hands. Apply and leave for 15-20 minutes before bathing.'
      },
      {
        question: 'Can this be used with other Ayurvedic products?',
        answer: 'Yes, Laya complements other Ayurvedic skincare products. Use it as your pre-bath treatment, then follow your regular cleansing and moisturizing routine.'
      },
      {
        question: 'Will this oil clog my pores?',
        answer: 'No, Laya contains jojoba oil which is non-comedogenic. The lightweight formulation cleanses and brightens without clogging pores. Always rinse thoroughly after use.'
      }
    ]
  };

  const faqs = id ? productFaqs[id] || [] : [];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-cream py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-4 bg-gradient-to-br from-primary/10 via-cream to-accent/10">
                {product.images ? (
                  <>
                    <ImageWithFallback
                      src={product.images[currentImageIndex]}
                      alt={product.name}
                      className="w-full h-96 object-contain mix-blend-multiply p-4"
                    />
                    {product.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  <div className="w-full h-96 flex items-center justify-center bg-gradient-to-br from-primary/10 via-cream to-accent/10">
                    <div className="text-center p-8">
                      <Leaf className="text-primary/30 mx-auto mb-4" size={64} />
                      <p className="text-muted-foreground text-lg">Product Image</p>
                    </div>
                  </div>
                )}
              </div>
              {product.images && product.images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {product.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-24 h-24 object-contain mix-blend-multiply bg-gradient-to-br from-primary/10 via-cream to-accent/10"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm inline-block mb-4">
                {product.category}
              </div>
              <h1 className="text-4xl md:text-5xl mb-4">{product.name}</h1>
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={20} />
                ))}
                <span className="text-muted-foreground">(4.8/5 from 234 reviews)</span>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl text-primary">{product.price}</span>
                  {product.mrp && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">{product.mrp}</span>
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                        Save {Math.round(((parseInt(product.mrp.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.mrp.slice(1))) * 100)}%
                      </span>
                    </>
                  )}
                </div>
                <p className="text-muted-foreground mt-2">Quantity: {product.volume}</p>
              </div>
              <p className="text-lg text-muted-foreground mb-8">{product.description}</p>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <Leaf className="text-primary mx-auto mb-2" size={24} />
                  <p className="text-sm">100% Natural</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <Shield className="text-primary mx-auto mb-2" size={24} />
                  <p className="text-sm">Patent-Based</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <Award className="text-primary mx-auto mb-2" size={24} />
                  <p className="text-sm">Certified</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary-dark transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Order via WhatsApp
                </button>
                <button
                  onClick={() => setShowContactPopup(true)}
                  className="flex-1 bg-accent text-accent-foreground px-8 py-4 rounded-full hover:bg-accent/80 transition-all hover:scale-105"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION A: About This Product */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl mb-8">About This Product</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                <h3 className="text-2xl mb-4 mt-8">Key Benefits</h3>
                <ul className="space-y-4">
                  {product.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-primary/20 p-1 rounded-full mt-1">
                        <Leaf className="text-primary" size={16} />
                      </div>
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl mb-6">Why Customers Choose {product.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="text-primary mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Premium Quality</h4>
                      <p className="text-muted-foreground">Crafted with the finest Ayurvedic ingredients</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="text-primary mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Authentic Formulation</h4>
                      <p className="text-muted-foreground">Based on traditional Ayurvedic wisdom</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="text-accent fill-accent mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Proven Results</h4>
                      <p className="text-muted-foreground">Trusted by thousands of satisfied customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION B: Product Description */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl mb-8">Product Description</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>
              <h3 className="text-2xl mb-4 mt-8">How to Use</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.directions}
              </p>
              <div className="bg-cream p-6 rounded-2xl mt-8">
                <h3 className="text-xl mb-4">The Ayurvedic Advantage</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our {product.name} embodies the timeless wisdom of Ayurveda, combining ancient healing knowledge with modern formulation techniques. Each ingredient is carefully selected and traditionally processed to preserve its therapeutic properties, ensuring you receive the full benefits of nature's pharmacy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION C: Product Specifications & Ingredients */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-serif font-bold text-primary mb-12">
              Specifications & Ingredients
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* LEFT COLUMN: Specifications (1/3 width) */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border">
                  <h3 className="text-xl font-bold text-primary mb-6">Specifications</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground font-medium text-sm">Size</span>
                      <span className="text-primary font-semibold text-sm">{product.volume}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground font-medium text-sm">Category</span>
                      <span className="text-primary font-semibold text-sm">{product.category}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground font-medium text-sm">Usage</span>
                      <span className="text-primary font-semibold text-sm">2-3 times/week</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground font-medium text-sm">Suitable For</span>
                      <span className="text-primary font-semibold text-sm">All types</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground font-medium text-sm">Storage</span>
                      <span className="text-primary font-semibold text-sm">Cool, dry place</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-muted-foreground font-medium text-sm">Shelf Life</span>
                      <span className="text-primary font-semibold text-sm">24 months</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Ingredients (2/3 width) */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold text-primary mb-6">Key Ingredients</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {product.ingredients.map((ingredient: any, index: number) => {
                    // Extract scientific name if present in parentheses e.g., "Saffron (Crocus sativus)"
                    let displayName = ingredient.name;
                    let scientificName = "";
                    const match = ingredient.name.match(/^(.*?)\s*\((.*?)\)$/);
                    if (match) {
                      displayName = match[1];
                      scientificName = match[2];
                    }

                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-cream">
                          {ingredient.image ? (
                            <ImageWithFallback
                              src={ingredient.image}
                              alt={displayName}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary">
                              <Leaf size={24} />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 mt-1">
                          <h4 className="text-base font-semibold text-primary">
                            {displayName}
                            {scientificName && (
                              <span className="text-xs font-normal text-muted-foreground italic ml-1 block sm:inline">
                                ({scientificName})
                              </span>
                            )}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                            {ingredient.benefit}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION E: Product Reviews - Auto-scrolling Carousel */}
      <section className="py-16 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">What Our Customers Are Saying</h2>
            <p className="text-xl text-muted-foreground">Real experiences from verified customers.</p>
          </motion.div>

          <div className="relative">
            <div className="flex gap-6 animate-scroll">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-6 w-max flex-nowrap">
                  {[
                    {
                      name: 'Rajesh Kumar',
                      location: 'Chennai',
                      rating: 5,
                      review: 'Absolutely amazing product! My hair has never felt healthier. The natural ingredients make all the difference.',
                      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'
                    },
                    {
                      name: 'Sneha Kapoor',
                      location: 'Pune',
                      rating: 5,
                      review: 'I\'ve been using this for 2 months and the results are incredible. Highly recommend to anyone looking for authentic Ayurvedic products.',
                      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
                    },
                    {
                      name: 'Arjun Nair',
                      location: 'Kochi',
                      rating: 5,
                      review: 'Best investment for my skincare routine. Natural, effective, and truly delivers on its promises.',
                      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80'
                    },
                    {
                      name: 'Divya Iyer',
                      location: 'Hyderabad',
                      rating: 5,
                      review: 'The quality is outstanding! You can feel the difference from the first use. Pure Ayurvedic goodness.',
                      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80'
                    },
                    {
                      name: 'Vikram Rao',
                      location: 'Bangalore',
                      rating: 5,
                      review: 'Finally found a product that actually works! The traditional formulation is evident in the results.',
                      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80'
                    },
                    {
                      name: 'Kavita Singh',
                      location: 'Jaipur',
                      rating: 5,
                      review: 'Love the natural approach! No harsh chemicals, just pure Ayurvedic ingredients that work wonders.',
                      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80'
                    },
                    {
                      name: 'Amit Patel',
                      location: 'Ahmedabad',
                      rating: 5,
                      review: 'Exceptional quality and visible results. This is what authentic Ayurvedic products should be like.',
                      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80'
                    },
                    {
                      name: 'Neha Joshi',
                      location: 'Kolkata',
                      rating: 5,
                      review: 'I\'m impressed with how quickly I saw results. The product is gentle yet effective. Will definitely repurchase!',
                      image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=100&q=80'
                    },
                  ].map((review, index) => (
                    <div key={`${setIndex}-${index}`} className="bg-white p-6 rounded-2xl shadow-lg w-[350px] h-[280px] flex-shrink-0 flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <ImageWithFallback
                          src={review.image}
                          alt={review.name}
                          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <h4 className="font-bold truncate">{review.name}</h4>
                          <p className="text-sm text-muted-foreground truncate">{review.location}</p>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="text-accent fill-accent" size={16} />
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed line-clamp-5">{review.review}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product-Specific FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl mb-12 text-center">Frequently Asked Questions About This Product</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-cream rounded-2xl overflow-hidden shadow-md">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-cream/80 transition-colors"
                    >
                      <span className="text-lg font-semibold pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                          openFaqIndex === index ? 'rotate-180' : ''
                        }`}
                        size={24}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaqIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Inquiry Form */}
      <section id="inquiry" className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl mb-8 text-center">Product Inquiry</h2>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="message">Message (Optional)</Label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2 w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary-dark transition-all hover:scale-105"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl mb-12 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((productId, index) => {
                const relatedProduct = productData[productId];
                return (
                  <motion.div
                    key={productId}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={`/product/${productId}`}>
                      <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 group">
                        {relatedProduct.images && relatedProduct.images.length > 0 ? (
                          <ImageWithFallback
                            src={relatedProduct.images[0]}
                            alt={relatedProduct.name}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                            <div className="text-center p-6">
                              <Leaf className="text-primary/30 mx-auto mb-2" size={48} />
                              <p className="text-muted-foreground text-sm">Product Image</p>
                            </div>
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="text-xl mb-2 font-bold min-h-[3.5rem]">{relatedProduct.name}</h3>
                          <div className="flex justify-between items-center mt-4">
                            <span className="text-2xl text-primary">{relatedProduct.price}</span>
                            <span className="text-primary">View Details →</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Contact Us Popup */}
      <AnimatePresence>
        {showContactPopup && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowContactPopup(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
            >
              <button
                onClick={() => setShowContactPopup(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl mb-2 text-foreground">Contact Us</h2>
              <p className="text-muted-foreground mb-6">Choose your preferred method to reach us</p>

              <div className="space-y-4">
                <button
                  onClick={handleCall}
                  className="w-full flex items-center gap-4 p-4 bg-primary/10 hover:bg-primary/20 rounded-xl transition-colors"
                >
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">Call Us</p>
                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                  </div>
                </button>

                <button
                  onClick={handleWhatsAppContact}
                  className="w-full flex items-center gap-4 p-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 rounded-xl transition-colors"
                >
                  <div className="bg-[#25D366] text-white p-3 rounded-full">
                    <MessageCircle size={24} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Chat with us instantly</p>
                  </div>
                </button>

                <button
                  onClick={handleEmail}
                  className="w-full flex items-center gap-4 p-4 bg-accent/10 hover:bg-accent/20 rounded-xl transition-colors"
                >
                  <div className="bg-accent text-accent-foreground p-3 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">info@sujayaherbals.com</p>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Submit Confirmation Popup */}
      <AnimatePresence>
        {showSubmitConfirmation && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowSubmitConfirmation(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h2 className="text-2xl mb-2 text-foreground">Thank You!</h2>
              <p className="text-muted-foreground mb-6">
                Your inquiry has been submitted successfully. We'll get back to you soon.
              </p>
              <button
                onClick={() => setShowSubmitConfirmation(false)}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary-dark transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
