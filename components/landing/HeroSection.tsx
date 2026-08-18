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
    <section className='relative pt-12 pb-24 md:pt-20 md:pb-36 overflow-hidden'>
      {/* Background Ambient Glows */}
      <div className='pointer-events-none absolute -top-40 right-1/4 h-[600px] w-[600px] rounded-full bg-violet-500/15 dark:bg-violet-600/20 blur-[150px]' />
      <div className='pointer-events-none absolute top-1/4 left-0 h-[500px] w-[500px] rounded-full bg-indigo-500/15 dark:bg-indigo-600/20 blur-[140px]' />
      <div className='pointer-events-none absolute bottom-10 right-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-[130px]' />

      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center'>

          {/* Left Column: Hero Copy */}
          <div className='lg:col-span-6 space-y-7 text-center lg:text-left'>
            {/* Announcement Badge */}
            <div className='inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 dark:bg-violet-500/15 px-4 py-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300 backdrop-blur-md shadow-xs hover:border-violet-500/50 transition-colors'>
              <Sparkles className='h-3.5 w-3.5 text-amber-500 dark:text-amber-400 fill-amber-500 dark:fill-amber-400 animate-pulse' />
              <span>{t.badge}</span>
            </div>

            {/* Title */}
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-slate-900 dark:text-white'>
              {t.titlePart1}{' '}
              <span className='bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 dark:from-violet-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent underline decoration-violet-500/30 decoration-wavy decoration-2 underline-offset-8'>
                {t.titleHighlight}
              </span>{' '}
              {t.titlePart2}
            </h1>

            {/* Description */}
            <p className='text-base sm:text-lg text-slate-600 dark:text-slate-300/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal'>
              {t.description}
            </p>

            {/* Primary Action Buttons */}
            <div className='flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2'>
              <button
                onClick={openDemoModal}
                className='group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-violet-600/30 dark:shadow-violet-600/40 hover:shadow-violet-600/60 hover:scale-[1.02] active:scale-98 transition-all cursor-pointer overflow-hidden'
              >
                <div className='absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity' />
                <span className='relative z-10'>{t.bookDemoBtn}</span>
                <ArrowRight className='h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform' />
              </button>

              <a
                href='#tour'
                className='inline-flex items-center gap-2.5 rounded-full border border-slate-300/80 dark:border-white/15 bg-white/80 dark:bg-white/5 px-6 py-4 text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-all backdrop-blur-md shadow-xs hover:border-slate-400 dark:hover:border-white/30'
              >
                <div className='flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/10 dark:bg-violet-400/20 text-violet-600 dark:text-violet-300'>
                  <Play className='h-3 w-3 fill-current ml-0.5' />
                </div>
                <span>{t.watchTourBtn}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className='flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-7 text-xs font-semibold text-slate-600 dark:text-slate-400 pt-3 border-t border-slate-200/60 dark:border-white/5 max-w-xl mx-auto lg:mx-0'>
              <span className='flex items-center gap-2'>
                <ShieldCheck className='h-4 w-4 text-emerald-500 shrink-0' />
                {t.trustTrial}
              </span>
              <span className='flex items-center gap-2'>
                <Zap className='h-4 w-4 text-amber-500 shrink-0' />
                {t.trustSetup}
              </span>
              <span className='flex items-center gap-2'>
                <CheckCircle2 className='h-4 w-4 text-cyan-500 shrink-0' />
                {t.trustMigration}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Dashboard Preview Glass Card */}
          <div className='lg:col-span-6 relative group'>
            {/* Glow Behind Preview Frame */}
            <div className='absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 opacity-20 dark:opacity-30 blur-2xl group-hover:opacity-40 transition-opacity duration-500' />

            <div className='relative rounded-3xl border border-slate-200/90 dark:border-white/15 bg-white/95 dark:bg-[#0c0e1e]/95 p-5 sm:p-7 shadow-2xl shadow-violet-900/10 dark:shadow-indigo-950/80 backdrop-blur-2xl transition-colors duration-200'>

              {/* Window Controls & Live Pill */}
              <div className='flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-white/10 mb-6'>
                <div className='flex items-center gap-2'>
                  <div className='h-3 w-3 rounded-full bg-rose-500/90' />
                  <div className='h-3 w-3 rounded-full bg-amber-500/90' />
                  <div className='h-3 w-3 rounded-full bg-emerald-500/90' />
                  <span className='ml-2 text-xs font-mono font-medium text-slate-400 dark:text-slate-400 hidden sm:inline-block'>
                    {t.dashboardTitle}
                  </span>
                </div>
                <div className='flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 rounded-full text-xs font-semibold text-emerald-700 dark:text-emerald-400 shadow-2xs'>
                  <span className='relative flex h-2 w-2'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75' />
                    <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500' />
                  </span>
                  <span>{t.liveSystem}</span>
                </div>
              </div>

              {/* Top Metric Cards Grid */}
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6'>
                <div className='rounded-2xl border border-slate-200/80 dark:border-white/5 bg-slate-50/80 dark:bg-white/[0.03] p-3.5 hover:border-violet-500/30 transition-all'>
                  <div className='text-[11px] font-semibold text-slate-500 dark:text-slate-400 truncate'>{t.activeStudents}</div>
                  <div className='text-xl font-extrabold text-slate-900 dark:text-white mt-1'>1,428</div>
                  <div className='text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-0.5'>
                    <TrendingUp className='h-3 w-3' />
                    <span>{t.thisMonth}</span>
                  </div>
                </div>

                <div className='rounded-2xl border border-slate-200/80 dark:border-white/5 bg-slate-50/80 dark:bg-white/[0.03] p-3.5 hover:border-violet-500/30 transition-all'>
                  <div className='text-[11px] font-semibold text-slate-500 dark:text-slate-400 truncate'>{t.monthlyTuition}</div>
                  <div className='text-xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1'>$48,920</div>
                  <div className='text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-1'>{t.collected}</div>
                </div>

                <div className='rounded-2xl border border-slate-200/80 dark:border-white/5 bg-slate-50/80 dark:bg-white/[0.03] p-3.5 hover:border-violet-500/30 transition-all'>
                  <div className='text-[11px] font-semibold text-slate-500 dark:text-slate-400 truncate'>{t.newLeads}</div>
                  <div className='text-xl font-extrabold text-amber-600 dark:text-amber-400 mt-1'>184</div>
                  <div className='text-[10px] font-bold text-amber-600 dark:text-amber-300 mt-1'>{t.readyToEnroll}</div>
                </div>

                <div className='rounded-2xl border border-slate-200/80 dark:border-white/5 bg-slate-50/80 dark:bg-white/[0.03] p-3.5 hover:border-violet-500/30 transition-all'>
                  <div className='text-[11px] font-semibold text-slate-500 dark:text-slate-400 truncate'>{t.attendanceToday}</div>
                  <div className='text-xl font-extrabold text-violet-600 dark:text-violet-400 mt-1'>96.8%</div>
                  <div className='text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-1'>{t.qrActive}</div>
                </div>
              </div>

              {/* Chart & Real-Time Feed */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {/* SVG Revenue Graph */}
                <div className='sm:col-span-2 rounded-2xl border border-slate-200/80 dark:border-white/5 bg-slate-50/80 dark:bg-white/[0.03] p-4 flex flex-col justify-between'>
                  <div className='flex items-center justify-between text-xs mb-3'>
                    <span className='font-bold text-slate-800 dark:text-slate-200'>{t.revenueChartTitle}</span>
                    <span className='text-[11px] font-medium text-slate-400'>{t.revenueChartSub}</span>
                  </div>

                  {/* Histogram Bars */}
                  <div className='h-32 w-full flex items-end gap-1.5 pt-2 border-b border-slate-200 dark:border-white/10 pb-1.5'>
                    {[38, 52, 60, 48, 72, 80, 92, 68, 88, 98, 108, 124].map((height, idx) => (
                      <div key={idx} className='flex-1 flex flex-col items-center gap-1 group/bar relative'>
                        <div
                          style={{ height: `${height}%` }}
                          className={`w-full rounded-t-lg transition-all duration-300 ${
                            idx === 11
                              ? 'bg-gradient-to-t from-violet-600 via-indigo-500 to-cyan-400 shadow-lg shadow-cyan-400/40'
                              : 'bg-violet-500/25 dark:bg-violet-500/30 group-hover/bar:bg-violet-500/60'
                          }`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className='flex justify-between text-[10px] font-semibold text-slate-400 pt-2'>
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>May</span>
                    <span>Jul</span>
                    <span>Sep</span>
                    <span className='text-violet-600 dark:text-violet-400 font-bold'>{t.chartCurrent}</span>
                  </div>
                </div>

                {/* Live Activity Stream */}
                <div className='rounded-2xl border border-slate-200/80 dark:border-white/5 bg-slate-50/80 dark:bg-white/[0.03] p-4 space-y-3'>
                  <div className='text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between'>
                    <span>{t.liveStreamTitle}</span>
                    <Users className='h-3.5 w-3.5 text-slate-400' />
                  </div>

                  <div className='space-y-2'>
                    <div className='flex items-center justify-between text-[11px] bg-white dark:bg-white/[0.03] p-2.5 rounded-xl border border-slate-200/80 dark:border-white/5 shadow-2xs'>
                      <div className='flex items-center gap-2 truncate'>
                        <span className='h-2 w-2 rounded-full bg-emerald-500 shrink-0' />
                        <span className='text-slate-700 dark:text-slate-300 font-medium truncate'>{t.tuitionPaid}</span>
                      </div>
                      <span className='text-[10px] font-mono text-slate-400 shrink-0 ml-1'>1m</span>
                    </div>

                    <div className='flex items-center justify-between text-[11px] bg-white dark:bg-white/[0.03] p-2.5 rounded-xl border border-slate-200/80 dark:border-white/5 shadow-2xs'>
                      <div className='flex items-center gap-2 truncate'>
                        <span className='h-2 w-2 rounded-full bg-violet-500 shrink-0' />
                        <span className='text-slate-700 dark:text-slate-300 font-medium truncate'>{t.qrCheckin}</span>
                      </div>
                      <span className='text-[10px] font-mono text-slate-400 shrink-0 ml-1'>3m</span>
                    </div>

                    <div className='flex items-center justify-between text-[11px] bg-white dark:bg-white/[0.03] p-2.5 rounded-xl border border-slate-200/80 dark:border-white/5 shadow-2xs'>
                      <div className='flex items-center gap-2 truncate'>
                        <span className='h-2 w-2 rounded-full bg-amber-500 shrink-0' />
                        <span className='text-slate-700 dark:text-slate-300 font-medium truncate'>{t.newLeadIg}</span>
                      </div>
                      <span className='text-[10px] font-mono text-slate-400 shrink-0 ml-1'>5m</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Notification Badge */}
              <div className='absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3.5 rounded-2xl border border-slate-200 dark:border-white/20 bg-white/95 dark:bg-[#14172c]/95 p-4 shadow-2xl backdrop-blur-2xl animate-bounce-slow'>
                <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shrink-0'>
                  <Bell className='h-5 w-5' />
                </div>
                <div>
                  <div className='text-xs font-bold text-slate-900 dark:text-white'>{t.smsBadgeTitle}</div>
                  <div className='text-[11px] text-slate-600 dark:text-slate-300 font-medium'>{t.smsBadgeSub}</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
