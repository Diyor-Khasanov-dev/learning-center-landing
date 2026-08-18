'use client'

import React, { useState } from 'react'
import { BarChart3, ArrowRight, Bell } from 'lucide-react'
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
      <div className='mx-auto max-w-7xl px-6'>
        <div className='text-center max-w-3xl mx-auto mb-16 space-y-4'>
          <div className='inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-700 dark:text-cyan-300'>
            <BarChart3 className='h-4 w-4 text-cyan-600 dark:text-cyan-400' />
            <span>{t.badge}</span>
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white'>
            {t.heading}
          </h2>
          <p className='text-slate-600 dark:text-slate-400 text-base'>
            {t.subheading}
          </p>
        </div>

        {/* Tabs */}
        <div className='flex flex-wrap items-center justify-center gap-3 mb-10'>
          {t.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTourTab(tab.id)}
              className={`rounded-xl px-5 py-3 text-sm font-semibold transition-all border cursor-pointer ${
                activeTourTab === tab.id
                  ? 'border-violet-500 bg-violet-600 text-white dark:bg-violet-600/20 shadow-lg shadow-violet-600/20'
                  : 'border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e1022] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Workflow Card */}
        <div className='rounded-2xl border border-slate-200/80 dark:border-white/15 bg-white dark:bg-[#0d0f20] p-6 md:p-10 shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors duration-200'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
            <div className='lg:col-span-5 space-y-6'>
              <span className='inline-block text-xs font-bold uppercase tracking-wider text-violet-700 dark:text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20'>
                {currentTourData.label}
              </span>

              <h3 className='text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white'>{currentTourData.title}</h3>

              <p className='text-slate-600 dark:text-slate-300 text-sm leading-relaxed'>{currentTourData.desc}</p>

              <div className='grid grid-cols-3 gap-3 pt-4 border-t border-slate-200 dark:border-white/10'>
                {currentTourData.metrics.map((m, idx) => (
                  <div key={idx} className='bg-slate-50 dark:bg-white/[0.03] p-3 rounded-xl border border-slate-200/80 dark:border-white/5'>
                    <div className='text-[10px] text-slate-500 dark:text-slate-400 font-medium'>{m.label}</div>
                    <div className='text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1'>{m.val}</div>
                    <div className='text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5'>{m.trend}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={openDemoModal}
                className='inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 hover:scale-[1.02] transition-all cursor-pointer'
              >
                <span>{t.seeDemoBtn}</span>
                <ArrowRight className='h-4 w-4' />
              </button>
            </div>

            {/* Graphical Preview Window */}
            <div className='lg:col-span-7 bg-slate-900 dark:bg-[#070812] text-white rounded-xl border border-slate-800 dark:border-white/10 p-5 space-y-4 shadow-inner'>
              <div className='flex items-center justify-between border-b border-white/10 pb-3'>
                <div className='flex items-center gap-2 text-xs font-mono text-slate-400'>
                  <div className='h-2.5 w-2.5 rounded-full bg-violet-400' />
                  {t.liveInterface}: {currentTourData.label}
                </div>
                <span className='text-[10px] bg-white/10 text-slate-300 px-2 py-0.5 rounded'>{t.synced}</span>
              </div>

              {activeTourTab === 'crm' && (
                <div className='grid grid-cols-3 gap-3 pt-2'>
                  <div className='bg-white/[0.03] p-3 rounded-lg border border-white/5 space-y-2'>
                    <div className='text-[11px] font-bold text-amber-400 uppercase'>New Leads (12)</div>
                    <div className='bg-[#13162a] p-2 rounded text-xs border border-white/5 space-y-1'>
                      <div className='font-semibold text-white'>Anvar K.</div>
                      <div className='text-[10px] text-slate-400'>General English</div>
                      <span className='inline-block text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded'>Instagram</span>
                    </div>
                    <div className='bg-[#13162a] p-2 rounded text-xs border border-white/5 space-y-1'>
                      <div className='font-semibold text-white'>Malika S.</div>
                      <div className='text-[10px] text-slate-400'>IELTS Intensive</div>
                      <span className='inline-block text-[9px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded'>Website</span>
                    </div>
                  </div>

                  <div className='bg-white/[0.03] p-3 rounded-lg border border-white/5 space-y-2'>
                    <div className='text-[11px] font-bold text-violet-400 uppercase'>Trial Scheduled (8)</div>
                    <div className='bg-[#13162a] p-2 rounded text-xs border border-white/5 space-y-1'>
                      <div className='font-semibold text-white'>Rustam T.</div>
                      <div className='text-[10px] text-slate-400'>Trial: 15:00</div>
                      <span className='inline-block text-[9px] bg-violet-500/20 text-violet-300 px-1.5 py-0.5 rounded'>SMS Sent</span>
                    </div>
                  </div>

                  <div className='bg-white/[0.03] p-3 rounded-lg border border-white/5 space-y-2'>
                    <div className='text-[11px] font-bold text-emerald-400 uppercase'>Enrolled Today (5)</div>
                    <div className='bg-[#13162a] p-2 rounded text-xs border border-emerald-500/20 space-y-1'>
                      <div className='font-semibold text-emerald-300'>Shahzod B.</div>
                      <div className='text-[10px] text-slate-400'>Tuition Paid</div>
                      <span className='inline-block text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded'>Contract Signed</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTourTab === 'attendance' && (
                <div className='space-y-3 pt-2'>
                  <div className='flex items-center justify-between bg-white/[0.03] p-3 rounded-lg border border-white/5'>
                    <div className='flex items-center gap-3'>
                      <div className='h-10 w-10 rounded-full bg-violet-600/30 flex items-center justify-center text-violet-300 font-bold'>
                        QR
                      </div>
                      <div>
                        <div className='text-xs font-bold text-white'>Kamila Y. — IELTS Group #4</div>
                        <div className='text-[10px] text-slate-400'>Pass ID: #884192</div>
                      </div>
                    </div>
                    <span className='text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20'>
                      Checked In 14:02
                    </span>
                  </div>

                  <div className='bg-violet-950/20 border border-violet-500/20 p-3 rounded-lg text-xs space-y-1'>
                    <div className='font-semibold text-violet-300 flex items-center gap-1.5'>
                      <Bell className='h-3.5 w-3.5 text-violet-400' /> Auto Parent Notification Sent
                    </div>
                    <div className='text-slate-300 italic text-[11px] bg-black/40 p-2 rounded'>
                      “Dear parent, Kamila checked in at Bright Academy branch #1 at 14:02.”
                    </div>
                  </div>
                </div>
              )}

              {activeTourTab === 'payments' && (
                <div className='space-y-3 pt-2'>
                  <div className='grid grid-cols-2 gap-3'>
                    <div className='bg-white/[0.03] p-3 rounded-lg border border-white/5'>
                      <div className='text-[10px] text-slate-400'>Tuition Collected</div>
                      <div className='text-xl font-bold text-emerald-400 mt-1'>$42,850</div>
                      <div className='text-[10px] text-slate-400 mt-0.5'>890 Students Paid</div>
                    </div>
                    <div className='bg-white/[0.03] p-3 rounded-lg border border-white/5'>
                      <div className='text-[10px] text-slate-400'>Overdue Debts</div>
                      <div className='text-xl font-bold text-rose-400 mt-1'>$1,120</div>
                      <div className='text-[10px] text-slate-400 mt-0.5'>Auto SMS Active</div>
                    </div>
                  </div>
                  <div className='bg-white/[0.02] p-3 rounded-lg border border-white/5 text-xs space-y-2'>
                    <div className='flex justify-between font-semibold text-slate-200'>
                      <span>Recent Online Payments</span>
                      <span className='text-violet-400'>Receipts</span>
                    </div>
                    <div className='flex justify-between text-[11px] text-slate-400 border-t border-white/5 pt-1.5'>
                      <span>Student: Sardor M.</span>
                      <span className='text-emerald-400 font-bold'>+$120 (Payme / Click)</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTourTab === 'app' && (
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2'>
                  <div className='bg-white/[0.03] p-3 rounded-lg border border-white/5 space-y-2'>
                    <div className='text-xs font-bold text-slate-200'>Parent App</div>
                    <div className='bg-[#111326] p-3 rounded-lg space-y-1.5 text-[11px]'>
                      <div className='flex justify-between font-semibold text-white'>
                        <span>Jasur (9th Grade)</span>
                        <span className='text-emerald-400'>98% Attendance</span>
                      </div>
                      <div className='text-[10px] text-slate-400'>Homework Score: 95/100</div>
                      <div className='mt-2 bg-violet-600/20 text-violet-300 p-2 rounded text-[10px] border border-violet-500/20'>
                        Teacher Note: “Great progress in fluency today!”
                      </div>
                    </div>
                  </div>
                  <div className='bg-white/[0.03] p-3 rounded-lg border border-white/5 space-y-2'>
                    <div className='text-xs font-bold text-slate-200'>1-Click Payment</div>
                    <div className='bg-[#111326] p-3 rounded-lg space-y-2 text-[11px] text-center'>
                      <div className='text-slate-400'>Tuition Due</div>
                      <div className='text-base font-bold text-white'>$120.00</div>
                      <button className='w-full bg-emerald-600 text-white font-semibold py-1.5 rounded-lg text-xs cursor-pointer'>
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
