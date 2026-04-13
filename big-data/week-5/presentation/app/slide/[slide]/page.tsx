import Link from 'next/link';
import { ViewTransition } from 'react';
import ClientSlideContent from './client-slide';

interface SlideProps {
  params: Promise<{ slide: string }>;
}

export default async function SlidePage({ params }: SlideProps) {
  const { slide } = await params;
  const slideNum = parseInt(slide) || 0;
  const totalSlides = 16;

  return (
    <ClientSlideContent slideNum={slideNum} totalSlides={totalSlides} />
  );
}
