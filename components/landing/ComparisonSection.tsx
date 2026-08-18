'use client'

import React from 'react'
import { XCircle, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { TRANSLATIONS } from '@/data/translations'

export function ComparisonSection() {
  const { language } = useLanguage()
  const t = TRANSLATIONS[language].comparison

  return (
    <section id='comparison' className='py-24 relative'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='text-center max-w-3xl mx-auto mb-16 space-y-4'>
          <div className='inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold text-rose-700 dark:text-rose-300'>
            <XCircle className='h-4 w-4 text-rose-500 dark:text-rose-400' />
            <span>{t.badge}</span>
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white'>
            {t.heading}
          </h2>
          <p className='text-slate-600 dark:text-slate-400 text-base'>
            {t.subheading}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch'>
          {/* The Old Way */}
          <div className='rounded-2xl border border-rose-500/20 bg-rose-50/50 dark:bg-rose-950/10 p-8 space-y-6 relative overflow-hidden transition-colors duration-200'>
            <div className='flex items-center justify-between border-b border-rose-500/20 pb-4'>
              <h3 className='text-xl font-bold text-rose-800 dark:text-rose-300 flex items-center gap-2'>
                <XCircle className='h-6 w-6 text-rose-500 dark:text-rose-400' />
                {t.oldWayTitle}
              </h3>
              <span className='text-xs font-semibold bg-rose-500/10 dark:bg-rose-500/20 text-rose-800 dark:text-rose-300 px-3 py-1 rounded-full border border-rose-500/30'>
                {t.oldWayTag}
              </span>
            </div>

            <div className='space-y-4'>
              {t.items.map((item, idx) => (
                <div key={idx} className='flex items-start gap-3 p-3 rounded-xl bg-rose-500/5 dark:bg-rose-500/[0.03] border border-rose-500/10'>
                  <XCircle className='h-5 w-5 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5' />
                  <div>
                    <div className='text-sm font-semibold text-rose-900 dark:text-rose-200'>{item.category}</div>
                    <div className='text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed'>{item.oldWay}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The EduSphere Way */}
          <div className='rounded-2xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/10 p-8 space-y-6 relative overflow-hidden shadow-xl dark:shadow-2xl shadow-emerald-950/10 dark:shadow-emerald-950/30 transition-colors duration-200'>
            <div className='flex items-center justify-between border-b border-emerald-500/20 pb-4'>
              <h3 className='text-xl font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-2'>
                <CheckCircle2 className='h-6 w-6 text-emerald-600 dark:text-emerald-400' />
                {t.newWayTitle}
              </h3>
              <span className='text-xs font-semibold bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30'>
                {t.newWayTag}
              </span>
            </div>

            <div className='space-y-4'>
              {t.items.map((item, idx) => (
                <div key={idx} className='flex items-start gap-3 p-3 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/[0.05] border border-emerald-500/20'>
                  <CheckCircle2 className='h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5' />
                  <div>
                    <div className='text-sm font-semibold text-emerald-900 dark:text-emerald-200'>{item.category}</div>
                    <div className='text-xs text-slate-700 dark:text-slate-300 mt-1 leading-relaxed'>{item.newWay}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
