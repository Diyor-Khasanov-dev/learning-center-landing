'use client'

import React from 'react'
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react'
import { useDemoModal } from '@/context/DemoModalContext'
import { useLanguage } from '@/context/LanguageContext'
import { TRANSLATIONS } from '@/data/translations'

export function CtaSection() {
  const { openDemoModal } = useDemoModal()
  const { language } = useLanguage()
  const t = TRANSLATIONS[language].cta

  return (
    <section className='py-20 relative overflow-hidden'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='relative rounded-3xl border border-violet-500/40 bg-gradient-to-r from-violet-950 via-indigo-900 to-slate-950 p-10 md:p-16 text-center space-y-6 shadow-2xl overflow-hidden backdrop-blur-2xl text-white'>

          {/* Top Ambient Glow */}
          <div className='pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-violet-500/30 blur-[110px]' />

          <h2 className='text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight'>
            {t.heading}
          </h2>

          <p className='text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed'>
            {t.subheading}
          </p>

          <div className='flex flex-wrap items-center justify-center gap-4 pt-4'>
            <button
              onClick={openDemoModal}
              className='inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-extrabold text-slate-950 shadow-2xl hover:bg-slate-100 hover:scale-[1.02] active:scale-98 transition-all cursor-pointer'
            >
              <Sparkles className='h-4 w-4 text-amber-500' />
              <span>{t.bookDemoBtn}</span>
              <ArrowRight className='h-4 w-4' />
            </button>
            <button
              onClick={openDemoModal}
              className='inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white hover:bg-white/20 transition-all backdrop-blur-md cursor-pointer'
            >
              <span>{t.freeTrialBtn}</span>
            </button>
          </div>

          <p className='text-xs text-slate-300 pt-2 flex items-center justify-center gap-2 font-medium'>
            <ShieldCheck className='h-4 w-4 text-emerald-400' />
            <span>{t.guaranteeText}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
