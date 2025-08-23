import { useEffect } from 'react';

export const useScrollAnimation = (selector = '.fade-element', threshold = 0.1) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold]);
};

export const useSlideAnimation = (selector = '.slide-element', threshold = 0.1) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold]);
};

export const useScaleAnimation = (selector = '.scale-element', threshold = 0.1) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold]);
};

export const useFadeUpAnimation = (selector = '.fade-up-element', threshold = 0.1) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold]);
};
