'use client'

import React, { useState } from 'react'
import { Calculator, Clock, UserCheck, Sparkles } from 'lucide-react'
import { useDemoModal } from '@/context/DemoModalContext'
import { useLanguage } from '@/context/LanguageContext'
import { TRANSLATIONS } from '@/data/translations'

export function RoiCalculatorSection() {
  const [studentCount, setStudentCount] = useState<number>(300)
  const [branchCount, setBranchCount] = useState<number>(2)
  const { openDemoModal } = useDemoModal()
  const { language } = useLanguage()
  const t = TRANSLATIONS[language].roi

  // ROI Calculations
  const hoursSavedPerWeek = Math.round((studentCount / 20) * branchCount)
  const estimatedMoneySavedMonthly = Math.round(studentCount * 3.5 * branchCount)
  const lostLeadsRecovered = Math.round(studentCount * 0.12)

  return (
    <section id='roi' className='py-24 bg-slate-100/70 dark:bg-[#080915] border-y border-slate-200/80 dark:border-white/10 relative transition-colors duration-200 overflow-hidden'>
      {/* Background ambient light */}
      <div className='pointer-events-none absolute top-1/2 right-0 h-96 w-96 rounded-full bg-amber-500/10 dark:bg-amber-600/15 blur-3xl' />

      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>

          {/* Left Column: Calculator Inputs */}
          <div className='lg:col-span-6 space-y-6'>
            <div className='inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 dark:bg-amber-500/15 px-4 py-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300 backdrop-blur-md shadow-2xs'>
              <Calculator className='h-3.5 w-3.5 text-amber-600 dark:text-amber-400' />
              <span>{t.badge}</span>
            </div>

            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight'>
              {t.heading}
            </h2>

            <p className='text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed'>
              {t.subheading}
            </p>

            {/* Slider 1: Student Count */}
            <div className='space-y-3 bg-white/90 dark:bg-[#0f1126]/90 p-6 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-lg backdrop-blur-xl'>
              <div className='flex justify-between items-center text-sm font-bold'>
                <span className='text-slate-800 dark:text-slate-200'>{t.slider1Label}</span>
                <span className='text-violet-600 dark:text-violet-400 text-xl font-extrabold'>{studentCount} {t.slider1Unit}</span>
              </div>
              <input
                type='range'
                min='50'
                max='2000'
                step='25'
                value={studentCount}
                onChange={(e) => setStudentCount(Number(e.target.value))}
                className='w-full accent-violet-600 dark:accent-violet-500 cursor-pointer h-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg'
              />
              <div className='flex justify-between text-[10px] text-slate-400 font-mono font-semibold'>
                <span>50</span>
                <span>500</span>
                <span>1,000</span>
                <span>2,000+</span>
              </div>
            </div>

            {/* Slider 2: Branch Count */}
            <div className='space-y-3 bg-white/90 dark:bg-[#0f1126]/90 p-6 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-lg backdrop-blur-xl'>
              <div className='flex justify-between items-center text-sm font-bold'>
                <span className='text-slate-800 dark:text-slate-200'>{t.slider2Label}</span>
                <span className='text-cyan-600 dark:text-cyan-400 text-xl font-extrabold'>{branchCount} {t.slider2Unit}</span>
              </div>
              <input
                type='range'
                min='1'
                max='15'
                step='1'
                value={branchCount}
                onChange={(e) => setBranchCount(Number(e.target.value))}
                className='w-full accent-cyan-600 dark:accent-cyan-500 cursor-pointer h-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg'
              />
              <div className='flex justify-between text-[10px] text-slate-400 font-mono font-semibold'>
                <span>1</span>
                <span>5</span>
                <span>15+</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Results Box */}
          <div className='lg:col-span-6'>
            <div className='rounded-3xl border border-violet-500/40 bg-gradient-to-br from-violet-950 via-indigo-950 to-slate-950 dark:from-[#12142d] dark:via-[#0f1126] dark:to-[#181230] p-8 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden text-white backdrop-blur-2xl'>

              <div className='absolute -top-10 -right-10 opacity-10 pointer-events-none'>
                <Calculator className='h-64 w-64 text-violet-400' />
              </div>

              <div className='border-b border-white/10 pb-6'>
                <div className='text-xs font-bold uppercase tracking-wider text-violet-300 flex items-center gap-2'>
                  <Sparkles className='h-3.5 w-3.5 text-amber-400' />
                  <span>{t.roiTitle}</span>
                </div>
                <div className='text-4xl sm:text-5xl font-black text-white mt-3'>
                  ${estimatedMoneySavedMonthly.toLocaleString()}{' '}
                  <span className='text-base font-medium text-slate-300'>{t.perMonthSaved}</span>
                </div>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='bg-white/10 dark:bg-white/[0.04] p-5 rounded-2xl border border-white/10 space-y-1 backdrop-blur-md'>
                  <div className='flex items-center gap-2 text-xs text-slate-200 font-bold'>
                    <Clock className='h-4 w-4 text-cyan-400' />
                    <span>{t.timeSavedLabel}</span>
                  </div>
                  <div className='text-3xl font-black text-white mt-1'>{hoursSavedPerWeek} h</div>
                  <div className='text-[11px] text-slate-300 font-medium'>{t.timeSavedSub}</div>
                </div>

                <div className='bg-white/10 dark:bg-white/[0.04] p-5 rounded-2xl border border-white/10 space-y-1 backdrop-blur-md'>
                  <div className='flex items-center gap-2 text-xs text-slate-200 font-bold'>
                    <UserCheck className='h-4 w-4 text-emerald-400' />
                    <span>{t.leadsRecoveredLabel}</span>
                  </div>
                  <div className='text-3xl font-black text-white mt-1'>+{lostLeadsRecovered}</div>
                  <div className='text-[11px] text-slate-300 font-medium'>{t.leadsRecoveredSub}</div>
                </div>
              </div>

              <div className='pt-2 space-y-3'>
                <button
                  onClick={openDemoModal}
                  className='w-full rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 py-4 text-center text-sm font-extrabold text-white shadow-xl shadow-violet-600/40 hover:opacity-95 hover:scale-[1.01] active:scale-98 transition-all cursor-pointer'
                >
                  {t.auditBtn}
                </button>
                <p className='text-center text-[11px] text-slate-300 font-medium'>
                  {t.benchmarkNote}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
