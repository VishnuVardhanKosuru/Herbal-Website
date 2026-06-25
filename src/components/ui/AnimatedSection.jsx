import { useEffect, useRef } from 'react';

// Shared IntersectionObserver for all AnimatedSection instances — avoids creating
// one observer per component which hurts performance on pages with many sections.
let sharedObserver = null;
const callbacks = new Map();

function getObserver() {
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cb = callbacks.get(entry.target);
          if (cb) cb();
          sharedObserver.unobserve(entry.target);
          callbacks.delete(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  return sharedObserver;
}

export default function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getObserver();

    callbacks.set(el, () => {
      setTimeout(() => {
        el.classList.add('visible');
      }, delay * 100);
    });

    observer.observe(el);

    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
