'use client';

import { useState, useEffect, ReactNode } from 'react';

interface Slide {
  id: number;
  component: ReactNode;
}

interface SlideContainerProps {
  slides: Slide[];
}

export default function SlideContainer({ slides }: SlideContainerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isTransitioning) return;

    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        if (currentSlide < slides.length - 1) {
          setDirection('right');
          setIsTransitioning(true);
          setCurrentSlide((prev) => prev + 1);
        }
        break;

      case 'ArrowLeft':
        e.preventDefault();
        if (currentSlide > 0) {
          setDirection('left');
          setIsTransitioning(true);
          setCurrentSlide((prev) => prev - 1);
        }
        break;

      case 'End':
        e.preventDefault();
        if (currentSlide !== slides.length - 1) {
          setDirection('right');
          setIsTransitioning(true);
          setCurrentSlide(slides.length - 1);
        }
        break;

      case 'Home':
        e.preventDefault();
        if (currentSlide !== 0) {
          setDirection('left');
          setIsTransitioning(true);
          setCurrentSlide(0);
        }
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isTransitioning, slides.length]);

  const handleAnimationEnd = () => {
    setIsTransitioning(false);
  };

  // Determine animation classes based on direction
  const getSlideClass = (index: number) => {
    const isActive = index === currentSlide;
    const isExiting = index === currentSlide - (direction === 'right' ? 1 : -1);

    if (isActive && !isTransitioning) {
      return 'slide-active';
    }

    if (isExiting && isTransitioning) {
      return direction === 'right' ? 'slide-exit-left' : 'slide-exit-right';
    }

    if (isActive && isTransitioning) {
      return direction === 'right' ? 'slide-enter-right' : 'slide-enter-left';
    }

    return 'slide-hidden';
  };

  return (
    <>
      <style>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutToLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-100%);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutToRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(100%);
          }
        }

        .slide-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .slide-wrapper {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .slide-hidden {
          display: none;
        }

        .slide-active {
          animation: none;
          opacity: 1;
        }

        .slide-enter-right {
          animation: slideInFromRight 400ms linear forwards;
        }

        .slide-exit-left {
          animation: slideOutToLeft 400ms linear forwards;
        }

        .slide-enter-left {
          animation: slideInFromLeft 400ms linear forwards;
        }

        .slide-exit-right {
          animation: slideOutToRight 400ms linear forwards;
        }
      `}</style>

      <div className="slide-container">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`slide-wrapper ${getSlideClass(slide.id)}`}
            onAnimationEnd={handleAnimationEnd}
          >
            {slide.component}
          </div>
        ))}
      </div>

      {/* Navigation Indicator */}
      <div className="fixed bottom-4 right-4 micro text-gray-600">
        <span>{currentSlide + 1} / {slides.length}</span>
      </div>
    </>
  );
}
