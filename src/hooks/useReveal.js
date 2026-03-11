import { useEffect, useRef } from 'react';

/**
 * useReveal — attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, adds the "visible" class.
 * @param {object} options - IntersectionObserver options
 */
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, ...options }
    );

    // Observe element and all children with .reveal class
    observer.observe(el);
    const children = el.querySelectorAll('.reveal');
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * useStaggerReveal — like useReveal but adds staggered delays to children
 */
export function useStaggerReveal(delay = 0.07) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = [...el.children];
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * delay}s`;
      child.classList.add('reveal');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}
