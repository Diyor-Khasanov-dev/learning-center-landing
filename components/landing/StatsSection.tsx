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
    <section className='border-y border-slate-200/80 dark:border-white/10 bg-slate-100/80 dark:bg-[#0a0c1a]/60 py-12 backdrop-blur-md transition-colors duration-200'>
      <div className='mx-auto max-w-7xl px-6'>
        {/* Stats Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-center'>
          {t.stats.map((stat, idx) => (
            <div key={idx} className='space-y-1'>
              <div className='text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-300 dark:via-white dark:to-cyan-300 bg-clip-text text-transparent'>
                {stat.value}
              </div>
              <div className='text-sm font-semibold text-slate-800 dark:text-slate-200'>{stat.label}</div>
              <div className='text-xs text-slate-500 dark:text-slate-400'>{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Trusted Institutions Marquee */}
        <div className='pt-6 border-t border-slate-200 dark:border-white/5'>
          <p className='text-center text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-6'>
            {t.partnerHeading}
          </p>
          <div className='flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80 dark:opacity-70'>
            {PARTNER_LOGOS.map((partner, idx) => (
              <div key={idx} className='flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:opacity-100 transition-opacity'>
                <Building2 className='h-4 w-4 text-violet-600 dark:text-violet-400' />
                <span>{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
