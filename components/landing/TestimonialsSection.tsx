'use client'

import React from 'react'
import Image from 'next/image'
import { Award, Star, Quote } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { TRANSLATIONS } from '@/data/translations'

export function TestimonialsSection() {
  const { language } = useLanguage()
  const t = TRANSLATIONS[language].testimonials

  return (
    <section className='py-24 relative overflow-hidden'>
      {/* Glow Effects */}
      <div className='pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-amber-500/10 dark:bg-amber-600/10 blur-[150px]' />

      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center max-w-3xl mx-auto mb-16 space-y-4'>
          <div className='inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 dark:bg-amber-500/15 px-4 py-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300 backdrop-blur-md shadow-2xs'>
            <Award className='h-3.5 w-3.5 text-amber-600 dark:text-amber-400' />
            <span>{t.badge}</span>
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight'>
            {t.heading}
          </h2>
          <p className='text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed'>
            {t.subheading}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {t.testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className='group relative rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-[#0e1022]/90 p-7 flex flex-col justify-between space-y-6 hover:border-amber-500/40 dark:hover:border-amber-500/40 hover:shadow-2xl transition-all duration-300 backdrop-blur-xl'
            >
              <div className='space-y-4 relative'>
                <Quote className='absolute -top-2 -right-2 h-8 w-8 text-amber-500/20 dark:text-amber-400/20 pointer-events-none' />

                {/* Rating Stars */}
                <div className='flex items-center gap-1 text-amber-400'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='h-4 w-4 fill-amber-400 text-amber-400' />
                  ))}
                </div>

                <p className='text-slate-700 dark:text-slate-200 text-sm leading-relaxed italic font-medium'>
                  “{testimonial.quote}”
                </p>
              </div>

              <div className='pt-5 border-t border-slate-200/80 dark:border-white/10 space-y-4'>
                <div className='inline-block rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 shadow-2xs'>
                  {testimonial.stats}
                </div>

                <div className='flex items-center gap-3.5'>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className='h-12 w-12 rounded-full object-cover border-2 border-amber-500/30 shadow-xs'
                  />
                  <div>
                    <div className='text-sm font-extrabold text-slate-900 dark:text-white'>{testimonial.author}</div>
                    <div className='text-xs text-slate-500 dark:text-slate-400 font-medium'>{testimonial.role}</div>
                    <div className='text-xs text-violet-600 dark:text-violet-400 font-bold mt-0.5'>{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
