'use client'

import React from 'react'
import Image from 'next/image'
import { Award, Star } from 'lucide-react'
import { TESTIMONIALS } from '@/data/landing-data'

export function TestimonialsSection() {
  return (
    <section className='py-24 relative'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='text-center max-w-3xl mx-auto mb-16 space-y-4'>
          <div className='inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300'>
            <Award className='h-4 w-4 text-amber-600 dark:text-amber-400' />
            <span>Proven Results</span>
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white'>
            Loved by learning center directors &amp; founders
          </h2>
          <p className='text-slate-600 dark:text-slate-400 text-base'>
            Hear how leaders transformed their educational operations, student retention, and revenue with EduSphere.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className='rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#0e1022] p-8 flex flex-col justify-between space-y-6 hover:border-violet-500/40 transition-all shadow-xs dark:shadow-none'
            >
              <div className='space-y-4'>
                {/* Rating */}
                <div className='flex items-center gap-1 text-amber-400'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='h-4 w-4 fill-amber-400' />
                  ))}
                </div>

                <p className='text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic'>“{t.quote}”</p>
              </div>

              <div className='pt-6 border-t border-slate-100 dark:border-white/10 space-y-4'>
                <div className='inline-block rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-400'>
                  {t.stats}
                </div>

                <div className='flex items-center gap-3'>
                  <Image
                    src={t.image}
                    alt={t.author}
                    width={44}
                    height={44}
                    className='h-11 w-11 rounded-full object-cover border border-violet-500/30'
                  />
                  <div>
                    <div className='text-sm font-bold text-slate-900 dark:text-white'>{t.author}</div>
                    <div className='text-xs text-slate-500 dark:text-slate-400'>{t.role}</div>
                    <div className='text-[11px] text-violet-600 dark:text-violet-400 font-medium'>{t.company}</div>
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
