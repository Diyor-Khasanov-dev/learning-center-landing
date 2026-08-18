'use client'

import React, { useState } from 'react'
import { DollarSign, CheckCircle2, Sparkles } from 'lucide-react'
import { useDemoModal } from '@/context/DemoModalContext'
import { useLanguage } from '@/context/LanguageContext'
import { TRANSLATIONS } from '@/data/translations'

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual')
  const { openDemoModal } = useDemoModal()
  const { language } = useLanguage()
  const t = TRANSLATIONS[language].pricing

  return (
    <section id='pricing' className='py-24 bg-slate-100/70 dark:bg-[#080915] border-y border-slate-200/80 dark:border-white/10 relative transition-colors duration-200 overflow-hidden'>
      {/* Ambient background light */}
      <div className='pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-emerald-500/10 dark:bg-emerald-600/15 blur-[140px]' />

      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center max-w-3xl mx-auto mb-12 space-y-4'>
          <div className='inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-500/15 px-4 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300 backdrop-blur-md shadow-2xs'>
            <DollarSign className='h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400' />
            <span>{t.badge}</span>
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight'>
            {t.heading}
          </h2>
          <p className='text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed'>
            {t.subheading}
          </p>

          {/* Billing Cycle Toggle */}
          <div className='pt-2 inline-flex items-center gap-2 bg-white/90 dark:bg-[#121428]/90 p-1.5 rounded-full border border-slate-200 dark:border-white/15 shadow-md backdrop-blur-xl'>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`rounded-full px-5 py-2 text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.monthlyBilling}
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`rounded-full px-5 py-2 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>{t.annualBilling}</span>
              <span className='rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-extrabold'>
                {t.savePercent}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4'>
          {t.plans.map((plan, idx) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice
            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.highlight
                    ? 'border-2 border-violet-500 bg-white dark:bg-gradient-to-b dark:from-[#151733] dark:to-[#0e1022] shadow-2xl shadow-violet-600/30 scale-105 z-10'
                    : 'border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-[#0e1022]/90 hover:border-slate-300 dark:hover:border-white/20 shadow-lg backdrop-blur-xl'
                }`}
              >
                {plan.highlight && (
                  <div className='absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-lg flex items-center gap-1.5 whitespace-nowrap'>
                    <Sparkles className='h-3 w-3 text-amber-300' />
                    <span>Most Popular</span>
                  </div>
                )}

                <div className='space-y-6'>
                  <div>
                    <h3 className='text-2xl font-black text-slate-900 dark:text-white'>{plan.name}</h3>
                    <p className='text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-normal'>{plan.desc}</p>
                  </div>

                  <div className='border-y border-slate-200/80 dark:border-white/10 py-5 space-y-1.5'>
                    <div className='flex items-baseline gap-1.5'>
                      <span className='text-4xl sm:text-5xl font-black text-slate-900 dark:text-white'>${price}</span>
                      <span className='text-xs text-slate-500 dark:text-slate-400 font-semibold'>{t.perMonthBranch}</span>
                    </div>
                    <div className='text-xs text-violet-600 dark:text-violet-400 font-bold'>
                      {plan.studentsLimit} • {plan.branchesLimit}
                    </div>
                  </div>

                  <div className='space-y-3.5'>
                    <div className='text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200'>{t.includedFeaturesTitle}</div>
                    {plan.features.map((feat, i) => (
                      <div key={i} className='flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200 font-medium'>
                        <CheckCircle2 className='h-4 w-4 text-emerald-500 shrink-0 mt-0.5' />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='mt-8 pt-6 border-t border-slate-200/80 dark:border-white/10'>
                  <button
                    onClick={openDemoModal}
                    className={`w-full rounded-2xl py-3.5 text-center text-sm font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white shadow-xl shadow-violet-600/30 hover:opacity-95 hover:scale-[1.01] active:scale-98'
                        : 'bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
