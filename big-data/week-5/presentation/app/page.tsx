'use client';

import SlideContainer from './components/SlideContainer';
import IntroSlide from './slides/Intro';
import ProblemSlide from './slides/Problem';
import SolutionSlide from './slides/Solution';
import ArchitectureSlide from './slides/Architecture';
import SearchDemoSlide from './slides/SearchDemo';
import RankingSlide from './slides/Ranking';
import ConclusionSlide from './slides/Conclusion';
import BibliographySlide from './slides/Bibliography';

export default function Home() {
  const slides = [
    { id: 0, component: <IntroSlide /> },
    { id: 1, component: <ProblemSlide /> },
    { id: 2, component: <SolutionSlide /> },
    { id: 3, component: <ArchitectureSlide /> },
    { id: 4, component: <SearchDemoSlide /> },
    { id: 5, component: <RankingSlide /> },
    { id: 6, component: <ConclusionSlide /> },
    { id: 7, component: <BibliographySlide /> },
  ];

  return <SlideContainer slides={slides} />;
}
