import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../data/products';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I would like to know more about SuJaya Herbals products.`,
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <style>{`
        .whatsapp-fab {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 90;
          background: #25D366;
          color: white;
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
          will-change: transform;
        }
        .whatsapp-fab:hover {
          transform: scale(1.12);
          box-shadow: 0 6px 28px rgba(37, 211, 102, 0.5);
        }
      `}</style>
    </button>
  );
}
