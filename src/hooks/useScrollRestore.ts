import { useEffect } from 'react';

export function useScrollRestore() {
  // Save scroll position before unload
  useEffect(() => {
    const save = () => {
      sessionStorage.setItem('lowkey-scroll', String(window.scrollY));
    };
    window.addEventListener('beforeunload', save);
    return () => window.removeEventListener('beforeunload', save);
  }, []);

  // Restore scroll position after page loads
  useEffect(() => {
    const saved = sessionStorage.getItem('lowkey-scroll');
    if (saved) {
      const y = parseInt(saved, 10);
      // Wait for content to render then scroll
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo(0, y);
        });
      });
    }
  }, []);
}
