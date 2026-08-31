'use client'

import React from 'react'
import { Building2 } from 'lucide-react'
import { PARTNER_LOGOS } from '@/data/landing-data'
import { useLanguage } from '@/context/LanguageContext'
import { TRANSLATIONS } from '@/data/translations'

export function StatsSection() {
  const { language } = useLanguage()
  const t = TRANSLATIONS[language].stats

  return (
    <section className='border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-black py-10 transition-colors duration-200'>
      <div className='mx-auto max-w-7xl px-6'>
        {/* Stats Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-center'>
          {t.stats.map((stat, idx) => (
            <div key={idx} className='space-y-1'>
              <div className='text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-500'>
                {stat.value}
              </div>
              <div className='text-sm font-bold text-neutral-900 dark:text-neutral-100'>{stat.label}</div>
              <div className='text-xs text-neutral-500 dark:text-neutral-400'>{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Trusted Institutions Marquee */}
        <div className='pt-6 border-t border-neutral-200 dark:border-neutral-800'>
          <p className='text-center text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-6'>
            {t.partnerHeading}
          </p>
          <div className='flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80'>
            {PARTNER_LOGOS.map((partner, idx) => (
              <div key={idx} className='flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
                <Building2 className='h-4 w-4 text-blue-600 dark:text-blue-500' />
                <span>{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
