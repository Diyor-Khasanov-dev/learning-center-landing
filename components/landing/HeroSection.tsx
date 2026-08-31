'use client'

import React from 'react'
import { Zap, ArrowRight, Play, CheckCircle2, Bell, TrendingUp, Users, ShieldCheck, Sparkles } from 'lucide-react'
import { useDemoModal } from '@/context/DemoModalContext'
import { useLanguage } from '@/context/LanguageContext'
import { TRANSLATIONS } from '@/data/translations'

export function HeroSection() {
  const { openDemoModal } = useDemoModal()
  const { language } = useLanguage()
  const t = TRANSLATIONS[language].hero

  return (
    <section className='relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 transition-colors duration-200'>
      {/* Subtle Minimalist Background Aura */}
      <div className='pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-[120px]' />

      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center'>

          {/* Left Column: Hero Copy */}
          <div className='lg:col-span-6 space-y-6 text-center lg:text-left'>
            {/* Announcement Badge */}
            <div className='inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/80 px-3.5 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400'>
              <Sparkles className='h-3.5 w-3.5 text-blue-600 dark:text-blue-400' />
              <span>{t.badge}</span>
            </div>

            {/* Title */}
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-neutral-900 dark:text-white'>
              {t.titlePart1}{' '}
              <span className='text-blue-600 dark:text-blue-500 underline decoration-blue-600/30 underline-offset-8'>
                {t.titleHighlight}
              </span>{' '}
              {t.titlePart2}
            </h1>

            {/* Description */}
            <p className='text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal'>
              {t.description}
            </p>

            {/* Action Buttons */}
            <div className='flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2'>
              <button
                onClick={openDemoModal}
                className='inline-flex items-center gap-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 text-base font-semibold shadow-xs transition-all cursor-pointer'
              >
                <span>{t.bookDemoBtn}</span>
                <ArrowRight className='h-4 w-4' />
              </button>

              <a
                href='#tour'
                className='inline-flex items-center gap-2.5 rounded-md border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-6 py-3.5 text-base font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all'
              >
                <Play className='h-3.5 w-3.5 fill-current text-blue-600 dark:text-blue-400 ml-0.5' />
                <span>{t.watchTourBtn}</span>
              </a>
            </div>

            {/* Minimalist Trust Badges */}
            <div className='flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-7 text-xs font-semibold text-neutral-500 dark:text-neutral-400 pt-4 border-t border-neutral-200 dark:border-neutral-800 max-w-xl mx-auto lg:mx-0'>
              <span className='flex items-center gap-1.5'>
                <ShieldCheck className='h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0' />
                {t.trustTrial}
              </span>
              <span className='flex items-center gap-1.5'>
                <Zap className='h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0' />
                {t.trustSetup}
              </span>
              <span className='flex items-center gap-1.5'>
                <CheckCircle2 className='h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0' />
                {t.trustMigration}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Dashboard Preview Card */}
          <div className='lg:col-span-6 relative'>
            <div className='rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-5 sm:p-6 shadow-xl relative overflow-hidden transition-colors duration-200'>

              {/* Window Bar */}
              <div className='flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800 mb-5'>
                <div className='flex items-center gap-2'>
                  <div className='h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700' />
                  <div className='h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700' />
                  <div className='h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700' />
                  <span className='ml-2 text-xs font-mono text-neutral-400 hidden sm:inline-block'>
                    {t.dashboardTitle}
                  </span>
                </div>
                <div className='flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-900 px-2.5 py-0.5 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400'>
                  <span className='relative flex h-2 w-2'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75' />
                    <span className='relative inline-flex rounded-full h-2 w-2 bg-blue-600' />
                  </span>
                  <span>{t.liveSystem}</span>
                </div>
              </div>

              {/* Metric Cards Grid */}
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5'>
                <div className='rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-3'>
                  <div className='text-[11px] font-semibold text-neutral-500 truncate'>{t.activeStudents}</div>
                  <div className='text-xl font-black text-neutral-900 dark:text-white mt-1'>1,428</div>
                  <div className='text-[10px] font-bold text-blue-600 dark:text-blue-400 mt-1 flex items-center gap-0.5'>
                    <TrendingUp className='h-3 w-3' />
                    <span>{t.thisMonth}</span>
                  </div>
                </div>

                <div className='rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-3'>
                  <div className='text-[11px] font-semibold text-neutral-500 truncate'>{t.monthlyTuition}</div>
                  <div className='text-xl font-black text-blue-600 dark:text-blue-400 mt-1'>$48,920</div>
                  <div className='text-[10px] font-bold text-neutral-500 dark:text-neutral-400 mt-1'>{t.collected}</div>
                </div>

                <div className='rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-3'>
                  <div className='text-[11px] font-semibold text-neutral-500 truncate'>{t.newLeads}</div>
                  <div className='text-xl font-black text-neutral-900 dark:text-white mt-1'>184</div>
                  <div className='text-[10px] font-bold text-neutral-500 dark:text-neutral-400 mt-1'>{t.readyToEnroll}</div>
                </div>

                <div className='rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-3'>
                  <div className='text-[11px] font-semibold text-neutral-500 truncate'>{t.attendanceToday}</div>
                  <div className='text-xl font-black text-blue-600 dark:text-blue-400 mt-1'>96.8%</div>
                  <div className='text-[10px] font-bold text-neutral-500 dark:text-neutral-400 mt-1'>{t.qrActive}</div>
                </div>
              </div>

              {/* Revenue Graph & Real-Time Feed */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {/* Minimal Histogram Graph */}
                <div className='sm:col-span-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 flex flex-col justify-between'>
                  <div className='flex items-center justify-between text-xs mb-3'>
                    <span className='font-bold text-neutral-900 dark:text-white'>{t.revenueChartTitle}</span>
                    <span className='text-[11px] text-neutral-400'>{t.revenueChartSub}</span>
                  </div>

                  {/* Histogram Bars */}
                  <div className='h-28 w-full flex items-end gap-1.5 border-b border-neutral-200 dark:border-neutral-800 pb-1'>
                    {[38, 52, 60, 48, 72, 80, 92, 68, 88, 98, 108, 124].map((height, idx) => (
                      <div key={idx} className='flex-1 flex flex-col items-center gap-1 group/bar relative'>
                        <div
                          style={{ height: `${height}%` }}
                          className={`w-full rounded-t-sm transition-all duration-300 ${
                            idx === 11
                              ? 'bg-blue-600'
                              : 'bg-neutral-300 dark:bg-neutral-800 group-hover/bar:bg-blue-500/50'
                          }`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className='flex justify-between text-[10px] font-semibold text-neutral-400 pt-2'>
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>May</span>
                    <span>Jul</span>
                    <span>Sep</span>
                    <span className='text-blue-600 dark:text-blue-400 font-bold'>{t.chartCurrent}</span>
                  </div>
                </div>

                {/* Live Stream Card */}
                <div className='rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 space-y-3'>
                  <div className='text-xs font-bold text-neutral-900 dark:text-white flex items-center justify-between'>
                    <span>{t.liveStreamTitle}</span>
                    <Users className='h-3.5 w-3.5 text-neutral-400' />
                  </div>

                  <div className='space-y-2'>
                    <div className='flex items-center justify-between text-[11px] bg-white dark:bg-black p-2 rounded border border-neutral-200 dark:border-neutral-800'>
                      <div className='flex items-center gap-2 truncate'>
                        <span className='h-2 w-2 rounded-full bg-blue-600 shrink-0' />
                        <span className='text-neutral-700 dark:text-neutral-300 font-medium truncate'>{t.tuitionPaid}</span>
                      </div>
                      <span className='text-[10px] font-mono text-neutral-400 shrink-0 ml-1'>1m</span>
                    </div>

                    <div className='flex items-center justify-between text-[11px] bg-white dark:bg-black p-2 rounded border border-neutral-200 dark:border-neutral-800'>
                      <div className='flex items-center gap-2 truncate'>
                        <span className='h-2 w-2 rounded-full bg-blue-600 shrink-0' />
                        <span className='text-neutral-700 dark:text-neutral-300 font-medium truncate'>{t.qrCheckin}</span>
                      </div>
                      <span className='text-[10px] font-mono text-neutral-400 shrink-0 ml-1'>3m</span>
                    </div>

                    <div className='flex items-center justify-between text-[11px] bg-white dark:bg-black p-2 rounded border border-neutral-200 dark:border-neutral-800'>
                      <div className='flex items-center gap-2 truncate'>
                        <span className='h-2 w-2 rounded-full bg-blue-600 shrink-0' />
                        <span className='text-neutral-700 dark:text-neutral-300 font-medium truncate'>{t.newLeadIg}</span>
                      </div>
                      <span className='text-[10px] font-mono text-neutral-400 shrink-0 ml-1'>5m</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Notification Badge */}
              <div className='absolute -bottom-4 -left-4 hidden sm:flex items-center gap-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-3 shadow-xl'>
                <div className='relative flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900 shrink-0'>
                  <Bell className='h-5 w-5' />
                </div>
                <div>
                  <div className='text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-1.5'>
                    <span>{t.smsBadgeTitle}</span>
                    <span className='text-[9px] bg-blue-600 text-white px-1.5 py-0.2 rounded font-mono uppercase tracking-wide'>
                      Live
                    </span>
                  </div>
                  <div className='text-[11px] text-neutral-500 dark:text-neutral-400 font-medium'>{t.smsBadgeSub}</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
