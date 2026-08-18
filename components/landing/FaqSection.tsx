'use client'

import React, { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { TRANSLATIONS } from '@/data/translations'

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const { language } = useLanguage()
  const t = TRANSLATIONS[language].faq

  return (
    <section id='faq' className='py-24 relative overflow-hidden'>
      {/* Glow Effects */}
      <div className='pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-violet-500/10 dark:bg-violet-600/10 blur-[130px]' />

      <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center max-w-2xl mx-auto mb-16 space-y-4'>
          <div className='inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 dark:bg-violet-500/15 px-4 py-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300 backdrop-blur-md shadow-2xs'>
            <HelpCircle className='h-3.5 w-3.5 text-violet-600 dark:text-violet-400' />
            <span>{t.badge}</span>
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight'>
            {t.heading}
          </h2>
          <p className='text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed'>
            {t.subheading}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className='space-y-4'>
          {t.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx
            return (
              <div
                key={idx}
                className={`rounded-3xl border transition-all duration-200 overflow-hidden backdrop-blur-xl ${
                  isOpen
                    ? 'border-violet-500/50 bg-white dark:bg-[#0e1022] shadow-xl shadow-violet-500/5'
                    : 'border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-[#0e1022]/80 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className='w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer'
                >
                  <span className='text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug'>{faq.q}</span>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-xl transition-all shrink-0 ${
                    isOpen
                      ? 'bg-violet-600 text-white'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400'
                  }`}>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className='px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4 font-normal'>
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
