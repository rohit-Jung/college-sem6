'use client';

import { ViewTransition } from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Import all slides
import IntroSlide from '@/app/slides/Intro';
import ProblemSlide from '@/app/slides/Problem';
import ResearchQuestionSlide from '@/app/slides/ResearchQuestion';
import BasePaperSlide from '@/app/slides/BasePaper';
import DatasetSourceSlide from '@/app/slides/DatasetSource';
import AimObjectivesSlide from '@/app/slides/AimObjectives';
import SolutionSlide from '@/app/slides/Solution';
import ArchitectureSlide from '@/app/slides/Architecture';
import TechnicalComponentsSlide from '@/app/slides/TechnicalComponents';
import SearchDemoSlide from '@/app/slides/SearchDemo';
import RankingSlide from '@/app/slides/Ranking';
import ConclusionSlide from '@/app/slides/Conclusion';
import BibliographySlide from '@/app/slides/Bibliography';
import ImplementationDetailsSlide from '@/app/slides/ImplementationDetails';
import ResearchImplicationsSlide from '@/app/slides/ResearchImplications';
import ThankYouSlide from '@/app/slides/ThankYou';

const slides = [
  IntroSlide,
  ProblemSlide,
  ResearchQuestionSlide,
  BasePaperSlide,
  DatasetSourceSlide,
  AimObjectivesSlide,
  SolutionSlide,
  ArchitectureSlide,
  TechnicalComponentsSlide,
  SearchDemoSlide,
  RankingSlide,
  ConclusionSlide,
  BibliographySlide,
  ImplementationDetailsSlide,
  ResearchImplicationsSlide,
  ThankYouSlide,
];

export default function ClientSlideContent({
  slideNum,
  totalSlides,
}: {
  slideNum: number;
  totalSlides: number;
}) {
  const router = useRouter();
  const SlideComponent = slides[slideNum];
  const previousSlide = slideNum > 0 ? slideNum - 1 : null;
  const nextSlide = slideNum < totalSlides - 1 ? slideNum + 1 : null;

  const navigateToSlide = (newSlide: number) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        router.push(`/slide/${newSlide}`);
      });
    } else {
      router.push(`/slide/${newSlide}`);
    }
  };

  // Keyboard navigation with View Transitions
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const tagName = target?.tagName;

      // Don't handle keys if typing in an input
      if (
        tagName === 'INPUT' ||
        tagName === 'TEXTAREA' ||
        target?.isContentEditable
      ) {
        return;
      }

      let targetSlide: number | null = null;

      if (
        e.key === 'ArrowRight' ||
        e.key === ' ' ||
        e.key === 'PageDown'
      ) {
        e.preventDefault();
        targetSlide = nextSlide;
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        targetSlide = previousSlide;
      } else if (e.key === 'End') {
        e.preventDefault();
        targetSlide = totalSlides - 1;
      } else if (e.key === 'Home') {
        e.preventDefault();
        targetSlide = 0;
      }

      if (targetSlide !== null) {
        navigateToSlide(targetSlide);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slideNum, nextSlide, previousSlide, totalSlides, router]);

  return (
    <div className="w-full h-screen bg-white flex flex-col justify-between overflow-hidden">
      {/* Main slide content wrapped in ViewTransition */}
      <div className="flex-1 overflow-hidden">
        <ViewTransition
          name="slide-content"
          enter={{
            'nav-forward': 'nav-forward',
            'nav-back': 'nav-back',
            default: 'none',
          }}
          exit={{
            'nav-forward': 'nav-forward',
            'nav-back': 'nav-back',
            default: 'none',
          }}
          default="none"
        >
          <SlideComponent key={slideNum} />
        </ViewTransition>
      </div>

      {/* Navigation controls - bottom right */}
      <div className="fixed bottom-6 right-6 flex items-center gap-4 font-mono text-sm">
        {/* Previous button */}
        {previousSlide !== null && (
          <button 
            onClick={() => navigateToSlide(previousSlide)}
            className="text-gray-600 hover:text-gray-900 transition cursor-pointer"
          >
            ←
          </button>
        )}
        
        {/* Slide indicator */}
        <span className="text-gray-500 min-w-[3rem] text-center">
          {slideNum + 1} / {totalSlides}
        </span>
        
        {/* Next button */}
        {nextSlide !== null && (
          <button 
            onClick={() => navigateToSlide(nextSlide)}
            className="text-gray-600 hover:text-gray-900 transition cursor-pointer"
          >
            →
          </button>
        )}
      </div>
    </div>
  );
}
