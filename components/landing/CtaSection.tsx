'use client'

import React from 'react'
import { useDemoModal } from '@/context/DemoModalContext'
import { useLanguage } from '@/context/LanguageContext'
import { TRANSLATIONS } from '@/data/translations'

export function CtaSection() {
  const { openDemoModal } = useDemoModal()
  const { language } = useLanguage()
  const t = TRANSLATIONS[language].cta

  return (
    <section className='py-20 relative overflow-hidden'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='relative rounded-3xl border border-violet-500/40 bg-gradient-to-r from-violet-900 via-indigo-900 to-slate-900 dark:from-violet-900/60 dark:via-indigo-900/60 dark:to-slate-900/80 p-10 md:p-16 text-center space-y-6 shadow-2xl overflow-hidden backdrop-blur-xl text-white'>
          <div className='pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-violet-500/30 blur-[100px]' />

          <h2 className='text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight'>
            {t.heading}
          </h2>

          <p className='text-slate-200 dark:text-slate-300 text-base max-w-2xl mx-auto'>
            {t.subheading}
          </p>

          <div className='flex flex-wrap items-center justify-center gap-4 pt-4'>
            <button
              onClick={openDemoModal}
              className='rounded-full bg-white px-8 py-4 text-base font-bold text-slate-950 shadow-2xl hover:bg-slate-100 transition-all active:scale-95 cursor-pointer'
            >
              {t.bookDemoBtn}
            </button>
            <button
              onClick={openDemoModal}
              className='rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white hover:bg-white/20 transition-all backdrop-blur-md cursor-pointer'
            >
              {t.freeTrialBtn}
            </button>
          </div>

          <p className='text-xs text-slate-300 dark:text-slate-400 pt-2'>{t.guaranteeText}</p>
        </div>
      </div>
    </section>
  )
}
