import { useEffect, useRef } from 'react';

/**
 * useReveal — attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, adds the "visible" class.
 */
export function useReveal() {
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
      { threshold: 0.12 }
    );

    observer.observe(el);
    const children = el.querySelectorAll('.reveal');
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return ref;
}

/**
 * useStaggerReveal — adds staggered delays to direct children
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
