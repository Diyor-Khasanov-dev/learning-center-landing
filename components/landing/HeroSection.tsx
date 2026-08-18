'use client'

import React from 'react'
import { Zap, ArrowRight, Play, CheckCircle2, Bell } from 'lucide-react'
import { useDemoModal } from '@/context/DemoModalContext'

export function HeroSection() {
  const { openDemoModal } = useDemoModal()

  return (
    <section className='relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden'>
      {/* Glow Effects */}
      <div className='pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/25 blur-[140px]' />
      <div className='pointer-events-none absolute top-1/3 left-10 h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-[130px]' />
      <div className='pointer-events-none absolute bottom-10 right-10 h-[350px] w-[350px] rounded-full bg-cyan-600/15 blur-[120px]' />

      <div className='mx-auto max-w-7xl px-6 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
          {/* Left Column: Copy */}
          <div className='lg:col-span-6 space-y-6 text-center lg:text-left'>
            <div className='inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300 backdrop-blur-md'>
              <Zap className='h-3.5 w-3.5 text-amber-400 fill-amber-400' />
              <span>Next-Gen Education Management Platform</span>
            </div>

            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]'>
              Run your{' '}
              <span className='bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent'>
                learning center
              </span>{' '}
              with 100% clarity &amp; zero loss.
            </h1>

            <p className='text-lg text-slate-300/90 leading-relaxed max-w-2xl mx-auto lg:mx-0'>
              All-in-one ERP &amp; CRM system built specifically for modern education centers, language academies, and IT schools like Modme. Automate sales, attendance, billing, parent SMS, and multi-branch operations.
            </p>

            {/* Action Buttons */}
            <div className='flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2'>
              <button
                onClick={openDemoModal}
                className='flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-violet-600/35 hover:scale-[1.02] hover:shadow-violet-600/50 transition-all active:scale-95 cursor-pointer'
              >
                <span>Book Free 1-on-1 Demo</span>
                <ArrowRight className='h-5 w-5' />
              </button>
              <a
                href='#tour'
                className='flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-base font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md'
              >
                <Play className='h-4 w-4 fill-current text-violet-400' />
                <span>Watch Interactive Tour</span>
              </a>
            </div>

            {/* Trust Subtext */}
            <div className='flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-medium text-slate-400 pt-3'>
              <span className='flex items-center gap-1.5'>
                <CheckCircle2 className='h-4 w-4 text-emerald-400' /> 14-Day Free Trial
              </span>
              <span className='flex items-center gap-1.5'>
                <CheckCircle2 className='h-4 w-4 text-emerald-400' /> Instant Setup in 15 Mins
              </span>
              <span className='flex items-center gap-1.5'>
                <CheckCircle2 className='h-4 w-4 text-emerald-400' /> Free Data Migration
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Dashboard Mockup */}
          <div className='lg:col-span-6 relative'>
            <div className='relative rounded-2xl border border-white/15 bg-[#0e101f]/90 p-4 sm:p-6 shadow-2xl shadow-indigo-950/60 backdrop-blur-2xl'>
              {/* Window Header */}
              <div className='flex items-center justify-between pb-4 border-b border-white/10 mb-5'>
                <div className='flex items-center gap-2'>
                  <div className='h-3 w-3 rounded-full bg-rose-500/80' />
                  <div className='h-3 w-3 rounded-full bg-amber-500/80' />
                  <div className='h-3 w-3 rounded-full bg-emerald-500/80' />
                  <span className='ml-2 text-xs font-mono text-slate-400'>edusphere.app/admin/dashboard</span>
                </div>
                <div className='flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full text-xs font-medium text-emerald-400'>
                  <span className='h-2 w-2 rounded-full bg-emerald-400 animate-pulse' />
                  Live System
                </div>
              </div>

              {/* Dashboard Key Metrics */}
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5'>
                <div className='rounded-xl border border-white/5 bg-white/[0.03] p-3'>
                  <div className='text-[11px] font-medium text-slate-400'>Active Students</div>
                  <div className='text-lg font-bold text-white mt-1'>1,428</div>
                  <div className='text-[10px] font-medium text-emerald-400 mt-0.5'>↑ +12.4% this mo</div>
                </div>
                <div className='rounded-xl border border-white/5 bg-white/[0.03] p-3'>
                  <div className='text-[11px] font-medium text-slate-400'>Monthly Tuition</div>
                  <div className='text-lg font-bold text-emerald-400 mt-1'>$48,920</div>
                  <div className='text-[10px] font-medium text-emerald-400 mt-0.5'>98% collected</div>
                </div>
                <div className='rounded-xl border border-white/5 bg-white/[0.03] p-3'>
                  <div className='text-[11px] font-medium text-slate-400'>New Leads CRM</div>
                  <div className='text-lg font-bold text-amber-400 mt-1'>184</div>
                  <div className='text-[10px] font-medium text-amber-300 mt-0.5'>32 ready to enroll</div>
                </div>
                <div className='rounded-xl border border-white/5 bg-white/[0.03] p-3'>
                  <div className='text-[11px] font-medium text-slate-400'>Attendance Today</div>
                  <div className='text-lg font-bold text-violet-400 mt-1'>96.8%</div>
                  <div className='text-[10px] font-medium text-slate-400 mt-0.5'>QR check-in active</div>
                </div>
              </div>

              {/* Simulated Chart & Recent Activity */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4'>
                <div className='sm:col-span-2 rounded-xl border border-white/5 bg-white/[0.03] p-4'>
                  <div className='flex items-center justify-between text-xs mb-3'>
                    <span className='font-semibold text-slate-200'>Revenue &amp; Debtors Overview</span>
                    <span className='text-slate-400'>June 2024</span>
                  </div>
                  {/* SVG Chart Graphic */}
                  <div className='h-28 w-full flex items-end gap-1.5 pt-2 border-b border-white/10 pb-1'>
                    {[40, 55, 65, 50, 75, 85, 95, 70, 90, 100, 110, 125].map((h, idx) => (
                      <div key={idx} className='flex-1 flex flex-col items-center gap-1 group/bar relative'>
                        <div
                          style={{ height: `${h}%` }}
                          className={`w-full rounded-t-md transition-all duration-300 ${
                            idx === 11
                              ? 'bg-gradient-to-t from-violet-600 to-cyan-400 shadow-md shadow-cyan-400/30'
                              : 'bg-violet-500/30 group-hover/bar:bg-violet-500/60'
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className='flex justify-between text-[10px] text-slate-400 pt-2'>
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>May</span>
                    <span>Jul</span>
                    <span>Sep</span>
                    <span>Current</span>
                  </div>
                </div>

                {/* Live Activity Feed */}
                <div className='rounded-xl border border-white/5 bg-white/[0.03] p-3.5 space-y-2.5'>
                  <div className='text-xs font-semibold text-slate-200 mb-1'>Live Branch Stream</div>

                  <div className='flex items-center justify-between text-[11px] bg-white/[0.02] p-2 rounded-lg border border-white/5'>
                    <div className='flex items-center gap-2'>
                      <span className='h-2 w-2 rounded-full bg-emerald-400' />
                      <span className='text-slate-300'>Tuition Paid ($120)</span>
                    </div>
                    <span className='text-[10px] text-slate-400'>1m ago</span>
                  </div>

                  <div className='flex items-center justify-between text-[11px] bg-white/[0.02] p-2 rounded-lg border border-white/5'>
                    <div className='flex items-center gap-2'>
                      <span className='h-2 w-2 rounded-full bg-violet-400' />
                      <span className='text-slate-300'>QR Check-In #492</span>
                    </div>
                    <span className='text-[10px] text-slate-400'>3m ago</span>
                  </div>

                  <div className='flex items-center justify-between text-[11px] bg-white/[0.02] p-2 rounded-lg border border-white/5'>
                    <div className='flex items-center gap-2'>
                      <span className='h-2 w-2 rounded-full bg-amber-400' />
                      <span className='text-slate-300'>New Lead from IG</span>
                    </div>
                    <span className='text-[10px] text-slate-400'>5m ago</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className='absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 rounded-2xl border border-white/15 bg-[#14172c] p-3.5 shadow-2xl backdrop-blur-xl'>
                <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'>
                  <Bell className='h-5 w-5' />
                </div>
                <div>
                  <div className='text-xs font-bold text-white'>Automated Parent SMS</div>
                  <div className='text-[11px] text-slate-400'>“Your child entered class at 14:00”</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
