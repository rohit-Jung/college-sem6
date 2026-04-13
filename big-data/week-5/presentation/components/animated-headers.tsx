'use client';

import { ViewTransition } from 'react';

interface AnimatedHeaderProps {
  children: React.ReactNode;
  delay?: number;
  transitionName?: string;
}

/**
 * AnimatedHeader Component
 * Wraps header elements with View Transition support and staggered animation
 * 
 * Features:
 * - Dynamic transition naming for proper CSS animation targeting
 * - Configurable delay for staggered cascade effects
 * - Smooth scale-in animations using View Transition API
 * - Preserves layout hierarchy
 */
export function AnimatedHeader({
  children,
  delay = 0,
  transitionName = 'header-item',
}: AnimatedHeaderProps) {
  return (
    <ViewTransition
      name={`${transitionName}-${delay}`}
      enter={{
        'nav-forward': 'scale-in-fade',
        'nav-back': 'scale-in-fade',
        default: 'none',
      }}
      exit={{
        'nav-forward': 'scale-out-fade',
        'nav-back': 'scale-out-fade',
        default: 'none',
      }}
      default="none"
    >
      <div style={{ '--animation-delay': `${delay}ms` } as React.CSSProperties}>
        {children}
      </div>
    </ViewTransition>
  );
}

/**
 * PhotoPageHeader Component
 * Main header container with staggered animations for all elements
 */
interface PhotoPageHeaderProps {
  title: string;
  description?: string;
  photographer?: string;
  date?: string;
  location?: string;
  tags?: string[];
}

export function PhotoPageHeader({
  title,
  description,
  photographer,
  date,
  location,
  tags = [],
}: PhotoPageHeaderProps) {
  return (
    <>
      <style>{`
        /* Staggered animation delays */
        .header-stagger-1 { --animation-delay: 0ms; }
        .header-stagger-2 { --animation-delay: 80ms; }
        .header-stagger-3 { --animation-delay: 160ms; }
        .header-stagger-4 { --animation-delay: 240ms; }
        .header-stagger-5 { --animation-delay: 320ms; }
        .header-stagger-6 { --animation-delay: 400ms; }

        /* Scale-in animations */
        @keyframes scale-in-fade {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(8px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes scale-out-fade {
          from {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          to {
            opacity: 0;
            transform: scale(0.95) translateY(-8px);
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          ::view-transition-old(header-item-*),
          ::view-transition-new(header-item-*) {
            animation: none !important;
          }
        }
      `}</style>

      <div className="space-y-6 mb-8 sm:mb-12">
        {/* Title */}
        <AnimatedHeader delay={0} transitionName="header-title">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            {title}
          </h1>
        </AnimatedHeader>

        {/* Description */}
        {description && (
          <AnimatedHeader delay={80} transitionName="header-desc">
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
              {description}
            </p>
          </AnimatedHeader>
        )}

        {/* Metadata Grid */}
        {(photographer || date || location) && (
          <AnimatedHeader delay={160} transitionName="header-meta">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 py-4 border-y border-white/10">
              {photographer && (
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-white/40">
                    Photographer
                  </p>
                  <p className="text-base sm:text-lg text-white font-medium mt-2">
                    {photographer}
                  </p>
                </div>
              )}

              {date && (
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-white/40">
                    Date
                  </p>
                  <p className="text-base sm:text-lg text-white font-medium mt-2">
                    {new Date(date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              )}

              {location && (
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-white/40">
                    Location
                  </p>
                  <p className="text-base sm:text-lg text-white font-medium mt-2">
                    {location}
                  </p>
                </div>
              )}
            </div>
          </AnimatedHeader>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <AnimatedHeader delay={240} transitionName="header-tags">
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-4">
              {tags.map((tag, idx) => (
                <span
                  key={tag}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs sm:text-sm font-mono text-white/60 transition-colors"
                  style={{ transitionDelay: `${idx * 30}ms` }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </AnimatedHeader>
        )}
      </div>
    </>
  );
}

/**
 * GalleryHeaderControls Component
 * Animated controls/filters for gallery view
 */
interface GalleryHeaderControlsProps {
  sortOptions: { label: string; value: string }[];
  currentSort: string;
  onSortChange: (sort: string) => void;
}

export function GalleryHeaderControls({
  sortOptions,
  currentSort,
  onSortChange,
}: GalleryHeaderControlsProps) {
  return (
    <>
      <style>{`
        @keyframes fade-slide-down {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        ::view-transition-old(gallery-controls) {
          animation: fade-slide-down 200ms cubic-bezier(0.4, 0, 1, 1) reverse;
        }

        ::view-transition-new(gallery-controls) {
          animation: fade-slide-down 200ms cubic-bezier(0, 0, 0.2, 1);
        }
      `}</style>

      <ViewTransition
        name="gallery-controls"
        enter={{
          'nav-forward': 'fade-slide-down',
          'nav-back': 'fade-slide-down',
          default: 'none',
        }}
        exit={{
          'nav-forward': 'fade-slide-down',
          'nav-back': 'fade-slide-down',
          default: 'none',
        }}
        default="none"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Gallery</h2>

          <div className="flex items-center gap-3">
            <label className="text-xs font-mono uppercase tracking-widest text-white/40">
              Sort by:
            </label>
            <select
              value={currentSort}
              onChange={(e) => onSortChange(e.target.value)}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </ViewTransition>
    </>
  );
}
