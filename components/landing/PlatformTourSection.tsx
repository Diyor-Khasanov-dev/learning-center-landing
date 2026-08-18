'use client'

import React, { useState } from 'react'
import { BarChart3, ArrowRight, Bell, Sparkles, CheckCircle2 } from 'lucide-react'
import { useDemoModal } from '@/context/DemoModalContext'
import { useLanguage } from '@/context/LanguageContext'
import { TRANSLATIONS } from '@/data/translations'

export function PlatformTourSection() {
  const [activeTourTab, setActiveTourTab] = useState('crm')
  const { openDemoModal } = useDemoModal()
  const { language } = useLanguage()
  const t = TRANSLATIONS[language].tour

  const currentTourData = t.tabs.find((tab) => tab.id === activeTourTab) || t.tabs[0]

  return (
    <section id='tour' className='py-24 relative overflow-hidden'>
      {/* Glow Effects */}
      <div className='pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-cyan-500/10 dark:bg-cyan-600/15 blur-[140px]' />

      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center max-w-3xl mx-auto mb-14 space-y-4'>
          <div className='inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 dark:bg-cyan-500/15 px-4 py-1.5 text-xs font-semibold text-cyan-700 dark:text-cyan-300 backdrop-blur-md shadow-2xs'>
            <BarChart3 className='h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400' />
            <span>{t.badge}</span>
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight'>
            {t.heading}
          </h2>
          <p className='text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed'>
            {t.subheading}
          </p>
        </div>

        {/* Tab Selector Pills */}
        <div className='flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10'>
          {t.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTourTab(tab.id)}
              className={`rounded-2xl px-5 py-3 text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                activeTourTab === tab.id
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/25 scale-105 border border-violet-400/30'
                  : 'border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-[#0e1022]/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Workflow Card */}
        <div className='rounded-3xl border border-slate-200/90 dark:border-white/15 bg-white/95 dark:bg-[#0d0f20]/95 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-2xl transition-all duration-300'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>

            {/* Left Column: Workflow Info */}
            <div className='lg:col-span-5 space-y-6'>
              <span className='inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300 bg-violet-500/10 dark:bg-violet-500/20 px-3 py-1 rounded-full border border-violet-500/25'>
                <Sparkles className='h-3 w-3 text-amber-500' />
                <span>{currentTourData.label}</span>
              </span>

              <h3 className='text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight'>
                {currentTourData.title}
              </h3>

              <p className='text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-normal'>
                {currentTourData.desc}
              </p>

              {/* Metrics Grid */}
              <div className='grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80 dark:border-white/10'>
                {currentTourData.metrics.map((m, idx) => (
                  <div key={idx} className='bg-slate-50 dark:bg-white/[0.03] p-3 sm:p-3.5 rounded-2xl border border-slate-200/80 dark:border-white/5 shadow-2xs'>
                    <div className='text-[10px] text-slate-500 dark:text-slate-400 font-semibold truncate'>{m.label}</div>
                    <div className='text-sm sm:text-base font-extrabold text-slate-900 dark:text-white mt-1'>{m.val}</div>
                    <div className='text-[10px] text-emerald-600 dark:text-emerald-400 font-bold mt-0.5'>{m.trend}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={openDemoModal}
                className='inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-indigo-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] active:scale-98 transition-all cursor-pointer'
              >
                <span>{t.seeDemoBtn}</span>
                <ArrowRight className='h-4 w-4' />
              </button>
            </div>

            {/* Right Column: Graphical Live Interface Mockup */}
            <div className='lg:col-span-7 bg-slate-950 dark:bg-[#060710] text-white rounded-2xl border border-slate-800 dark:border-white/10 p-5 sm:p-6 space-y-4 shadow-2xl relative overflow-hidden'>
              <div className='flex items-center justify-between border-b border-white/10 pb-3.5'>
                <div className='flex items-center gap-2 text-xs font-mono text-slate-400'>
                  <div className='h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse' />
                  <span>{t.liveInterface}: {currentTourData.label}</span>
                </div>
                <span className='text-[10px] font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30 px-2.5 py-0.5 rounded-full'>
                  {t.synced}
                </span>
              </div>

              {/* Dynamic Content Views */}
              {activeTourTab === 'crm' && (
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2'>
                  <div className='bg-white/[0.03] p-3 rounded-xl border border-white/5 space-y-2'>
                    <div className='text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center justify-between'>
                      <span>New Leads</span>
                      <span className='bg-amber-500/20 px-1.5 rounded text-[10px]'>12</span>
                    </div>
                    <div className='bg-[#13162a] p-2.5 rounded-lg text-xs border border-white/5 space-y-1 shadow-xs'>
                      <div className='font-bold text-white'>Anvar K.</div>
                      <div className='text-[10px] text-slate-400'>General English</div>
                      <span className='inline-block text-[9px] font-bold bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded'>Instagram</span>
                    </div>
                    <div className='bg-[#13162a] p-2.5 rounded-lg text-xs border border-white/5 space-y-1 shadow-xs'>
                      <div className='font-bold text-white'>Malika S.</div>
                      <div className='text-[10px] text-slate-400'>IELTS Intensive</div>
                      <span className='inline-block text-[9px] font-bold bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded'>Website</span>
                    </div>
                  </div>

                  <div className='bg-white/[0.03] p-3 rounded-xl border border-white/5 space-y-2'>
                    <div className='text-[11px] font-bold text-violet-400 uppercase tracking-wider flex items-center justify-between'>
                      <span>Trial Class</span>
                      <span className='bg-violet-500/20 px-1.5 rounded text-[10px]'>8</span>
                    </div>
                    <div className='bg-[#13162a] p-2.5 rounded-lg text-xs border border-white/5 space-y-1 shadow-xs'>
                      <div className='font-bold text-white'>Rustam T.</div>
                      <div className='text-[10px] text-slate-400'>Trial: Today 15:00</div>
                      <span className='inline-block text-[9px] font-bold bg-violet-500/20 text-violet-300 px-1.5 py-0.5 rounded'>SMS Sent</span>
                    </div>
                  </div>

                  <div className='bg-white/[0.03] p-3 rounded-xl border border-white/5 space-y-2'>
                    <div className='text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center justify-between'>
                      <span>Enrolled</span>
                      <span className='bg-emerald-500/20 px-1.5 rounded text-[10px]'>5</span>
                    </div>
                    <div className='bg-[#13162a] p-2.5 rounded-lg text-xs border border-emerald-500/30 space-y-1 shadow-xs'>
                      <div className='font-bold text-emerald-300'>Shahzod B.</div>
                      <div className='text-[10px] text-slate-400'>Tuition Paid</div>
                      <span className='inline-block text-[9px] font-bold bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded'>Contract Active</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTourTab === 'attendance' && (
                <div className='space-y-3 pt-2'>
                  <div className='flex items-center justify-between bg-white/[0.03] p-3.5 rounded-xl border border-white/5'>
                    <div className='flex items-center gap-3'>
                      <div className='h-10 w-10 rounded-xl bg-violet-600/30 flex items-center justify-center text-violet-300 font-bold text-xs border border-violet-500/30'>
                        QR
                      </div>
                      <div>
                        <div className='text-xs font-bold text-white'>Kamila Y. — IELTS Group #4</div>
                        <div className='text-[10px] text-slate-400 font-mono'>Pass ID: #884192</div>
                      </div>
                    </div>
                    <span className='text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1'>
                      <CheckCircle2 className='h-3.5 w-3.5 text-emerald-400' /> Checked In 14:02
                    </span>
                  </div>

                  <div className='bg-violet-950/30 border border-violet-500/25 p-3.5 rounded-xl text-xs space-y-2'>
                    <div className='font-bold text-violet-300 flex items-center gap-1.5'>
                      <Bell className='h-3.5 w-3.5 text-violet-400' /> Automated Parent SMS Dispatch
                    </div>
                    <div className='text-slate-300 text-[11px] bg-black/50 p-2.5 rounded-lg border border-white/5 font-mono'>
                      “Dear parent, Kamila checked in at Bright Academy branch #1 at 14:02.”
                    </div>
                  </div>
                </div>
              )}

              {activeTourTab === 'payments' && (
                <div className='space-y-3 pt-2'>
                  <div className='grid grid-cols-2 gap-3'>
                    <div className='bg-white/[0.03] p-3.5 rounded-xl border border-white/5'>
                      <div className='text-[10px] text-slate-400 font-medium'>Tuition Collected</div>
                      <div className='text-xl font-black text-emerald-400 mt-1'>$42,850</div>
                      <div className='text-[10px] text-slate-400 mt-0.5'>890 Students Paid</div>
                    </div>
                    <div className='bg-white/[0.03] p-3.5 rounded-xl border border-white/5'>
                      <div className='text-[10px] text-slate-400 font-medium'>Overdue Debts</div>
                      <div className='text-xl font-black text-rose-400 mt-1'>$1,120</div>
                      <div className='text-[10px] text-slate-400 mt-0.5'>Auto SMS Active</div>
                    </div>
                  </div>
                  <div className='bg-white/[0.02] p-3 rounded-xl border border-white/5 text-xs space-y-2'>
                    <div className='flex justify-between font-bold text-slate-200'>
                      <span>Recent Online Transactions</span>
                      <span className='text-violet-400 text-[11px]'>Auto-Receipts</span>
                    </div>
                    <div className='flex justify-between text-[11px] text-slate-300 border-t border-white/5 pt-2'>
                      <span>Student: Sardor M.</span>
                      <span className='text-emerald-400 font-bold'>+$120 (Payme / Click)</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTourTab === 'app' && (
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2'>
                  <div className='bg-white/[0.03] p-3.5 rounded-xl border border-white/5 space-y-2'>
                    <div className='text-xs font-bold text-slate-200'>Parent App Interface</div>
                    <div className='bg-[#111326] p-3 rounded-lg space-y-1.5 text-[11px] border border-white/5'>
                      <div className='flex justify-between font-bold text-white'>
                        <span>Jasur (9th Grade)</span>
                        <span className='text-emerald-400'>98% Attendance</span>
                      </div>
                      <div className='text-[10px] text-slate-400'>Homework Score: 95/100</div>
                      <div className='mt-2 bg-violet-600/20 text-violet-300 p-2 rounded text-[10px] border border-violet-500/20'>
                        Teacher Note: “Great progress in fluency today!”
                      </div>
                    </div>
                  </div>
                  <div className='bg-white/[0.03] p-3.5 rounded-xl border border-white/5 space-y-2'>
                    <div className='text-xs font-bold text-slate-200'>1-Click Mobile Payment</div>
                    <div className='bg-[#111326] p-3 rounded-lg space-y-2 text-[11px] text-center border border-white/5'>
                      <div className='text-slate-400'>Tuition Due</div>
                      <div className='text-lg font-black text-white'>$120.00</div>
                      <button className='w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded-lg text-xs cursor-pointer transition-colors shadow-md'>
                        Pay via Payme / Click / Card
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
