'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import {
  Users,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { TRANSLATIONS } from '@/data/translations'

export function TeamSection() {
  const { language } = useLanguage()
  const t = TRANSLATIONS[language].team
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const totalMembers = t.members.length

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalMembers)
  }, [totalMembers])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalMembers) % totalMembers)
  }, [totalMembers])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      handleNext()
    }, 4500)
    return () => clearInterval(interval)
  }, [handleNext, isPaused])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    if (distance > 50) {
      handleNext()
    } else if (distance < -50) {
      handlePrev()
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section id='team' className='pt-24 sm:pt-28 pb-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#080914]/50 transition-colors duration-200 scroll-mt-28 sm:scroll-mt-32'>
      {/* Background Ambient Glows */}
      <div className='pointer-events-none absolute -top-20 left-1/3 h-[500px] w-[500px] rounded-full bg-violet-600/10 dark:bg-violet-600/15 blur-[160px]' />
      <div className='pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 blur-[140px]' />

      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16 space-y-4'>
          <div className='inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 dark:bg-violet-500/15 px-4 py-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300 backdrop-blur-md shadow-xs'>
            <Users className='h-3.5 w-3.5 text-violet-600 dark:text-violet-400' />
            <span>{t.badge}</span>
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight'>
            {t.heading}
          </h2>
          <p className='text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed'>
            {t.subheading}
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className='relative max-w-5xl mx-auto px-2 sm:px-12'
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Card Carousel Track */}
          <div className='overflow-hidden py-4'>
            <div
              className='flex transition-transform duration-500 ease-out'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {t.members.map((member) => (
                <div
                  key={member.id}
                  className='w-full shrink-0 px-2 sm:px-4'
                >
                  <div className='group relative mx-auto max-w-md rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-[#0e1022]/90 p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:border-violet-500/40 dark:hover:border-violet-500/40 transition-all duration-300 backdrop-blur-xl flex flex-col items-center text-center'>

                    {/* Image with Decorative Glow Ring */}
                    <div className='relative mb-6'>
                      <div className='absolute -inset-1.5 rounded-full bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 opacity-70 dark:opacity-80 blur-xs group-hover:scale-105 transition-transform duration-300' />
                      <div className='relative h-32 w-32 sm:h-36 sm:w-36 overflow-hidden rounded-full border-2 border-white dark:border-[#0e1022] shadow-md'>
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes='(max-width: 640px) 128px, 144px'
                          className='object-cover group-hover:scale-110 transition-transform duration-500'
                        />
                      </div>
                    </div>

                    {/* Name & Job Role */}
                    <h3 className='text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-1'>
                      {member.name}
                    </h3>
                    <div className='inline-block rounded-full bg-violet-500/10 dark:bg-violet-500/20 border border-violet-500/20 px-3 py-1 text-xs font-extrabold text-violet-700 dark:text-violet-300 mb-4'>
                      {member.role}
                    </div>

                    {/* Bio */}
                    {member.bio && (
                      <p className='text-xs sm:text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed font-normal mb-6 max-w-sm'>
                        {member.bio}
                      </p>
                    )}

                    {/* Social Links: GitHub & LinkedIn */}
                    <div className='flex items-center gap-3 pt-2 border-t border-slate-200/80 dark:border-white/10 w-full justify-center'>
                      <a
                        href={member.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={`${member.name}'s GitHub`}
                        className='flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-violet-600 hover:border-slate-900 dark:hover:border-violet-600 transition-all duration-200 cursor-pointer shadow-2xs'
                      >
                        <svg className='h-5 w-5 fill-current' viewBox='0 0 24 24'>
                          <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
                        </svg>
                      </a>
                      <a
                        href={member.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={`${member.name}'s LinkedIn`}
                        className='flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-200 cursor-pointer shadow-2xs'
                      >
                        <svg className='h-5 w-5 fill-current' viewBox='0 0 24 24'>
                          <path d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z' />
                        </svg>
                      </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrow Buttons */}
          <button
            onClick={handlePrev}
            className='absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-[#12142a] border border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-200 shadow-xl hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 hover:border-violet-600 transition-all duration-200 cursor-pointer z-20 focus:outline-hidden'
            aria-label='Previous slide'
          >
            <ChevronLeft className='h-6 w-6' />
          </button>

          <button
            onClick={handleNext}
            className='absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-[#12142a] border border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-200 shadow-xl hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 hover:border-violet-600 transition-all duration-200 cursor-pointer z-20 focus:outline-hidden'
            aria-label='Next slide'
          >
            <ChevronRight className='h-6 w-6' />
          </button>

          {/* Indicator Dots */}
          <div className='flex items-center justify-center gap-2 mt-8'>
            {t.members.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-gradient-to-r from-violet-600 to-indigo-600'
                    : 'w-2.5 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
