'use client'

import React, { useState } from 'react'
import { DollarSign, CheckCircle2 } from 'lucide-react'
import { useDemoModal } from '@/context/DemoModalContext'
import { useLanguage } from '@/context/LanguageContext'
import { TRANSLATIONS } from '@/data/translations'

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual')
  const { openDemoModal } = useDemoModal()
  const { language } = useLanguage()
  const t = TRANSLATIONS[language].pricing

  return (
    <section id='pricing' className='py-24 bg-slate-100/70 dark:bg-[#0a0c1a]/90 border-y border-slate-200/80 dark:border-white/10 relative transition-colors duration-200'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='text-center max-w-3xl mx-auto mb-12 space-y-4'>
          <div className='inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300'>
            <DollarSign className='h-4 w-4 text-emerald-600 dark:text-emerald-400' />
            <span>{t.badge}</span>
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white'>
            {t.heading}
          </h2>
          <p className='text-slate-600 dark:text-slate-400 text-base'>
            {t.subheading}
          </p>

          {/* Monthly / Annual Toggle */}
          <div className='px-2 inline-flex items-center gap-3 bg-white dark:bg-[#121428] p-1.5 rounded-full border border-slate-200 dark:border-white/10 shadow-xs dark:shadow-none'>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all cursor-pointer ${
                billingCycle === 'monthly' ? 'bg-violet-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.monthlyBilling}
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'annual' ? 'bg-violet-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>{t.annualBilling}</span>
              <span className='rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold'>
                {t.savePercent}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch'>
          {t.plans.map((plan, idx) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice
            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  plan.highlight
                    ? 'border-2 border-violet-500 bg-white dark:bg-gradient-to-b dark:from-[#151733] dark:to-[#0e1022] shadow-2xl shadow-violet-600/20 scale-105'
                    : 'border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#0e1022] hover:border-slate-300 dark:hover:border-white/20 shadow-xs dark:shadow-none'
                }`}
              >
                {plan.highlight && (
                  <div className='absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg'>
                    Most Popular
                  </div>
                )}

                <div className='space-y-6'>
                  <div>
                    <h3 className='text-2xl font-bold text-slate-900 dark:text-white'>{plan.name}</h3>
                    <p className='text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed'>{plan.desc}</p>
                  </div>

                  <div className='border-y border-slate-200 dark:border-white/10 py-4 space-y-1'>
                    <div className='flex items-baseline gap-1'>
                      <span className='text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white'>${price}</span>
                      <span className='text-xs text-slate-500 dark:text-slate-400 font-medium'>{t.perMonthBranch}</span>
                    </div>
                    <div className='text-xs text-violet-600 dark:text-violet-400 font-semibold'>
                      {plan.studentsLimit} • {plan.branchesLimit}
                    </div>
                  </div>

                  <div className='space-y-3'>
                    <div className='text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300'>{t.includedFeaturesTitle}</div>
                    {plan.features.map((feat, i) => (
                      <div key={i} className='flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300'>
                        <CheckCircle2 className='h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5' />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='mt-8 pt-6 border-t border-slate-200 dark:border-white/10'>
                  <button
                    onClick={openDemoModal}
                    className={`w-full rounded-2xl py-3.5 text-center text-sm font-bold transition-all cursor-pointer ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-violet-600/30 hover:opacity-95'
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
