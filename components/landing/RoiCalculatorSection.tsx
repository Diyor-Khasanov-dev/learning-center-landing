'use client'

import React, { useState } from 'react'
import { Calculator, Clock, UserCheck } from 'lucide-react'
import { useDemoModal } from '@/context/DemoModalContext'

export function RoiCalculatorSection() {
  const [studentCount, setStudentCount] = useState<number>(300)
  const [branchCount, setBranchCount] = useState<number>(2)
  const { openDemoModal } = useDemoModal()

  // ROI Calculations
  const hoursSavedPerWeek = Math.round((studentCount / 20) * branchCount)
  const estimatedMoneySavedMonthly = Math.round(studentCount * 3.5 * branchCount)
  const lostLeadsRecovered = Math.round(studentCount * 0.12)

  return (
    <section id='roi' className='py-24 bg-[#0a0c1a]/80 border-y border-white/10 relative'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
          {/* Left Column: Calculator Inputs */}
          <div className='lg:col-span-6 space-y-6'>
            <div className='inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-300'>
              <Calculator className='h-4 w-4 text-amber-400' />
              <span>Interactive Savings Estimator</span>
            </div>

            <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
              Calculate how much time &amp; money EduSphere will save you
            </h2>

            <p className='text-slate-400 text-sm leading-relaxed'>
              Adjust your center’s numbers to see estimated weekly hours saved on manual admin work, uncollected tuition recovered, and recovered leads.
            </p>

            {/* Slider 1: Student Count */}
            <div className='space-y-2 bg-[#101225] p-5 rounded-2xl border border-white/10'>
              <div className='flex justify-between items-center text-sm font-semibold'>
                <span className='text-slate-300'>Total Active Students</span>
                <span className='text-violet-400 text-lg font-bold'>{studentCount} Students</span>
              </div>
              <input
                type='range'
                min='50'
                max='2000'
                step='25'
                value={studentCount}
                onChange={(e) => setStudentCount(Number(e.target.value))}
                className='w-full accent-violet-500 cursor-pointer h-2 bg-slate-800 rounded-lg'
              />
              <div className='flex justify-between text-[10px] text-slate-500 font-mono'>
                <span>50</span>
                <span>500</span>
                <span>1,000</span>
                <span>2,000+</span>
              </div>
            </div>

            {/* Slider 2: Branch Count */}
            <div className='space-y-2 bg-[#101225] p-5 rounded-2xl border border-white/10'>
              <div className='flex justify-between items-center text-sm font-semibold'>
                <span className='text-slate-300'>Number of Branches</span>
                <span className='text-cyan-400 text-lg font-bold'>{branchCount} Branches</span>
              </div>
              <input
                type='range'
                min='1'
                max='15'
                step='1'
                value={branchCount}
                onChange={(e) => setBranchCount(Number(e.target.value))}
                className='w-full accent-cyan-500 cursor-pointer h-2 bg-slate-800 rounded-lg'
              />
              <div className='flex justify-between text-[10px] text-slate-500 font-mono'>
                <span>1 Single Branch</span>
                <span>5 Branches</span>
                <span>15+ Franchise</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Results Display */}
          <div className='lg:col-span-6'>
            <div className='rounded-3xl border border-violet-500/30 bg-gradient-to-br from-[#12142d] via-[#0f1126] to-[#181230] p-8 shadow-2xl space-y-8 relative overflow-hidden'>
              <div className='absolute top-0 right-0 p-8 opacity-10 pointer-events-none'>
                <Calculator className='h-48 w-48 text-violet-400' />
              </div>

              <div className='border-b border-white/10 pb-4'>
                <div className='text-xs font-semibold uppercase tracking-wider text-violet-300'>Estimated Monthly ROI</div>
                <div className='text-3xl sm:text-5xl font-extrabold text-white mt-2'>
                  ${estimatedMoneySavedMonthly.toLocaleString()}{' '}
                  <span className='text-sm font-normal text-slate-400'>/ month saved</span>
                </div>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='bg-white/[0.03] p-4 rounded-xl border border-white/10 space-y-1'>
                  <div className='flex items-center gap-2 text-xs text-slate-400 font-medium'>
                    <Clock className='h-4 w-4 text-cyan-400' /> Admin Time Saved
                  </div>
                  <div className='text-2xl font-bold text-white'>{hoursSavedPerWeek} Hours</div>
                  <div className='text-[11px] text-slate-400'>Per week in manual work</div>
                </div>

                <div className='bg-white/[0.03] p-4 rounded-xl border border-white/10 space-y-1'>
                  <div className='flex items-center gap-2 text-xs text-slate-400 font-medium'>
                    <UserCheck className='h-4 w-4 text-emerald-400' /> Recovered Leads
                  </div>
                  <div className='text-2xl font-bold text-white'>+{lostLeadsRecovered} Students</div>
                  <div className='text-[11px] text-slate-400'>Via CRM follow-ups</div>
                </div>
              </div>

              <div className='pt-2'>
                <button
                  onClick={openDemoModal}
                  className='w-full rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 py-4 text-center font-bold text-white shadow-xl shadow-violet-600/30 hover:opacity-95 transition-all cursor-pointer'
                >
                  Start Saving Now — Request Custom Audit
                </button>
                <p className='text-center text-[11px] text-slate-400 mt-3'>
                  Based on real customer benchmarks across 350+ learning centers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
