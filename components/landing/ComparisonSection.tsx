'use client'

import React from 'react'
import { XCircle, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { TRANSLATIONS } from '@/data/translations'

export function ComparisonSection() {
  const { language } = useLanguage()
  const t = TRANSLATIONS[language].comparison

  return (
    <section id='comparison' className='py-24 relative overflow-hidden'>
      {/* Background ambient accents */}
      <div className='pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] bg-gradient-to-r from-rose-500/10 via-indigo-500/10 to-emerald-500/10 blur-[140px] rounded-full' />

      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center max-w-3xl mx-auto mb-16 space-y-4'>
          <div className='inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 dark:bg-rose-500/15 px-4 py-1.5 text-xs font-semibold text-rose-700 dark:text-rose-300 backdrop-blur-md shadow-2xs'>
            <AlertTriangle className='h-3.5 w-3.5 text-rose-500 dark:text-rose-400' />
            <span>{t.badge}</span>
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight'>
            {t.heading}
          </h2>
          <p className='text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed'>
            {t.subheading}
          </p>
        </div>

        {/* Side-by-Side Cards */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch'>

          {/* The Old Way */}
          <div className='rounded-3xl border border-rose-500/30 bg-rose-500/5 dark:bg-rose-950/20 p-6 sm:p-8 space-y-6 relative overflow-hidden backdrop-blur-2xl shadow-xl transition-all duration-300 hover:border-rose-500/50 hover:shadow-2xl'>
            {/* Ambient Red Glow */}
            <div className='pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-rose-500/25 blur-3xl' />

            <div className='flex flex-wrap items-center justify-between border-b border-rose-500/20 pb-4 gap-2'>
              <h3 className='text-xl font-extrabold text-rose-800 dark:text-rose-300 flex items-center gap-2.5'>
                <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30 shadow-xs'>
                  <XCircle className='h-5 w-5' />
                </div>
                <span>{t.oldWayTitle}</span>
              </h3>
              <span className='text-xs font-bold bg-rose-500/15 text-rose-800 dark:text-rose-300 px-3.5 py-1.5 rounded-full border border-rose-500/30 shadow-2xs'>
                {t.oldWayTag}
              </span>
            </div>

            <div className='space-y-3.5'>
              {t.items.map((item, idx) => (
                <div key={idx} className='flex items-start gap-3.5 p-4 rounded-2xl bg-white/80 dark:bg-rose-950/30 border border-rose-500/20 shadow-xs hover:border-rose-500/40 hover:scale-[1.01] transition-all'>
                  <XCircle className='h-5 w-5 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5' />
                  <div>
                    <div className='text-sm font-bold text-rose-950 dark:text-rose-200'>{item.category}</div>
                    <div className='text-xs text-slate-700 dark:text-slate-300 mt-1 leading-relaxed font-medium'>{item.oldWay}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The EduSphere Way */}
          <div className='rounded-3xl border border-emerald-500/45 bg-emerald-500/10 dark:bg-emerald-950/25 p-6 sm:p-8 space-y-6 relative overflow-hidden backdrop-blur-2xl shadow-2xl shadow-emerald-950/20 transition-all duration-300 hover:border-emerald-500/70 hover:shadow-emerald-500/15 hover:scale-[1.01]'>
            {/* Ambient Green Glow */}
            <div className='pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-emerald-500/30 blur-3xl' />

            <div className='flex flex-wrap items-center justify-between border-b border-emerald-500/30 pb-4 gap-2'>
              <h3 className='text-xl font-extrabold text-emerald-900 dark:text-emerald-300 flex items-center gap-2.5'>
                <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/25 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 shadow-xs'>
                  <CheckCircle2 className='h-5 w-5' />
                </div>
                <span>{t.newWayTitle}</span>
              </h3>
              <span className='text-xs font-bold bg-emerald-500/20 text-emerald-900 dark:text-emerald-300 px-3.5 py-1.5 rounded-full border border-emerald-500/40 shadow-2xs flex items-center gap-1.5'>
                <Sparkles className='h-3.5 w-3.5 text-amber-500 dark:text-amber-400 fill-amber-500' />
                <span>{t.newWayTag}</span>
              </span>
            </div>

            <div className='space-y-3.5'>
              {t.items.map((item, idx) => (
                <div key={idx} className='flex items-start gap-3.5 p-4 rounded-2xl bg-white/90 dark:bg-emerald-950/40 border border-emerald-500/30 shadow-xs hover:border-emerald-500/50 hover:scale-[1.01] transition-all'>
                  <CheckCircle2 className='h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5' />
                  <div>
                    <div className='text-sm font-bold text-emerald-950 dark:text-emerald-200'>{item.category}</div>
                    <div className='text-xs text-slate-800 dark:text-slate-200 mt-1 leading-relaxed font-medium'>{item.newWay}</div>
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
