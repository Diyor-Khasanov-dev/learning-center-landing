'use client'

import React from 'react'
import { XCircle, CheckCircle2 } from 'lucide-react'
import { OLD_VS_NEW } from '@/data/landing-data'

export function ComparisonSection() {
  return (
    <section id='comparison' className='py-24 relative'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='text-center max-w-3xl mx-auto mb-16 space-y-4'>
          <div className='inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold text-rose-300'>
            <XCircle className='h-4 w-4 text-rose-400' />
            <span>Stop Chaos in Excel &amp; Telegram</span>
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
            Why traditional management tools are costlier than you think
          </h2>
          <p className='text-slate-400 text-base'>
            Managing a learning center on paper or disjointed apps causes uncollected debts, lost leads, parent complaints, and administrative burnout.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch'>
          {/* The Old Way */}
          <div className='rounded-2xl border border-rose-500/20 bg-rose-950/10 p-8 space-y-6 relative overflow-hidden'>
            <div className='flex items-center justify-between border-b border-rose-500/20 pb-4'>
              <h3 className='text-xl font-bold text-rose-300 flex items-center gap-2'>
                <XCircle className='h-6 w-6 text-rose-400' />
                The Old Way (Excel, Papers &amp; Chat)
              </h3>
              <span className='text-xs font-semibold bg-rose-500/20 text-rose-300 px-3 py-1 rounded-full border border-rose-500/30'>
                High Risk &amp; Loss
              </span>
            </div>

            <div className='space-y-4'>
              {OLD_VS_NEW.map((item, idx) => (
                <div key={idx} className='flex items-start gap-3 p-3 rounded-xl bg-rose-500/[0.03] border border-rose-500/10'>
                  <XCircle className='h-5 w-5 text-rose-400 shrink-0 mt-0.5' />
                  <div>
                    <div className='text-sm font-semibold text-rose-200'>{item.category}</div>
                    <div className='text-xs text-slate-400 mt-1 leading-relaxed'>{item.oldWay}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The EduSphere Way */}
          <div className='rounded-2xl border border-emerald-500/30 bg-emerald-950/10 p-8 space-y-6 relative overflow-hidden shadow-2xl shadow-emerald-950/30'>
            <div className='flex items-center justify-between border-b border-emerald-500/20 pb-4'>
              <h3 className='text-xl font-bold text-emerald-300 flex items-center gap-2'>
                <CheckCircle2 className='h-6 w-6 text-emerald-400' />
                The EduSphere Solution
              </h3>
              <span className='text-xs font-semibold bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30'>
                100% Automated
              </span>
            </div>

            <div className='space-y-4'>
              {OLD_VS_NEW.map((item, idx) => (
                <div key={idx} className='flex items-start gap-3 p-3 rounded-xl bg-emerald-500/[0.05] border border-emerald-500/20'>
                  <CheckCircle2 className='h-5 w-5 text-emerald-400 shrink-0 mt-0.5' />
                  <div>
                    <div className='text-sm font-semibold text-emerald-200'>{item.category}</div>
                    <div className='text-xs text-slate-300 mt-1 leading-relaxed'>{item.newWay}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
