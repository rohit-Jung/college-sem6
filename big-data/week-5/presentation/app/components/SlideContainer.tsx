'use client';

import { ReactNode, useEffect, useState, ViewTransition } from 'react';

interface Slide {
  id: number;
  component: ReactNode;
}

interface SlideContainerProps {
  slides: Slide[];
}

type TransitionDirection = 'forward' | 'back';

export default function SlideContainer({ slides }: SlideContainerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<TransitionDirection>('forward');

  const handleNavigation = (newSlide: number) => {
    if (newSlide >= 0 && newSlide < slides.length && newSlide !== currentSlide) {
      setDirection(newSlide > currentSlide ? 'forward' : 'back');
      setCurrentSlide(newSlide);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault();
          handleNavigation(currentSlide + 1);
          break;

        case 'ArrowLeft':
          e.preventDefault();
          handleNavigation(currentSlide - 1);
          break;

        case 'End':
          e.preventDefault();
          handleNavigation(slides.length - 1);
          break;

        case 'Home':
          e.preventDefault();
          handleNavigation(0);
          break;

        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slides.length]);

  return (
    <>
      <style>{`
        :root {
          --duration-enter: 300ms;
          --duration-exit: 250ms;
        }

        /* Forward slide animations */
        @keyframes slide-forward-out {
          to {
            opacity: 0;
            transform: translateX(-60px);
          }
        }

        @keyframes slide-forward-in {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
        }

        /* Backward slide animations */
        @keyframes slide-back-out {
          to {
            opacity: 0;
            transform: translateX(60px);
          }
        }

        @keyframes slide-back-in {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
        }

        /* Apply animations to view transitions */
        ::view-transition-old(slide-forward) {
          animation: slide-forward-out var(--duration-exit) cubic-bezier(0.4, 0, 1, 1) forwards;
        }

        ::view-transition-new(slide-forward) {
          animation: slide-forward-in var(--duration-enter) cubic-bezier(0, 0, 0.2, 1) forwards;
        }

        ::view-transition-old(slide-back) {
          animation: slide-back-out var(--duration-exit) cubic-bezier(0.4, 0, 1, 1) forwards;
        }

        ::view-transition-new(slide-back) {
          animation: slide-back-in var(--duration-enter) cubic-bezier(0, 0, 0.2, 1) forwards;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          ::view-transition-old(slide-forward),
          ::view-transition-new(slide-forward),
          ::view-transition-old(slide-back),
          ::view-transition-new(slide-back) {
            animation: none !important;
          }
        }
      `}</style>

      <ViewTransition
        key={currentSlide}
        name={direction === 'forward' ? 'slide-forward' : 'slide-back'}
        enter={{
          forward: 'slide-forward-in',
          back: 'slide-back-in',
          default: 'none',
        }}
        exit={{
          forward: 'slide-forward-out',
          back: 'slide-back-out',
          default: 'none',
        }}
      >
        <div>
          {slides[currentSlide].component}
        </div>
      </ViewTransition>

      {/* Navigation Indicator */}
      <div className="fixed bottom-4 right-4 text-sm text-gray-600 font-mono">
        <span>{currentSlide + 1} / {slides.length}</span>
      </div>
    </>
  );
}
