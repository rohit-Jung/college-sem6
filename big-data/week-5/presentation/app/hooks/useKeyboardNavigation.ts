'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function useKeyboardNavigation(currentSlide: number, totalSlides: number) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
        e.preventDefault();
        router.push(`/slide/${currentSlide + 1}`);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        e.preventDefault();
        router.push(`/slide/${currentSlide - 1}`);
      } else if (e.key === 'End') {
        e.preventDefault();
        router.push(`/slide/${totalSlides - 1}`);
      } else if (e.key === 'Home') {
        e.preventDefault();
        router.push(`/slide/0`);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides, router]);
}
