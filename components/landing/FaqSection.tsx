'use client'

import React, { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'
import { FAQS } from '@/data/landing-data'

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <section id='faq' className='py-24 relative'>
      <div className='mx-auto max-w-5xl px-6'>
        <div className='text-center max-w-2xl mx-auto mb-16 space-y-4'>
          <div className='inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300'>
            <HelpCircle className='h-4 w-4 text-violet-400' />
            <span>Got Questions?</span>
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
            Frequently Asked Questions
          </h2>
          <p className='text-slate-400 text-base'>
            Everything you need to know about setting up EduSphere in your learning center.
          </p>
        </div>

        <div className='space-y-4'>
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx
            return (
              <div
                key={idx}
                className='rounded-2xl border border-white/10 bg-[#0e1022] overflow-hidden transition-all'
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className='w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer'
                >
                  <span className='text-base font-semibold text-white'>{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-violet-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className='px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4'>
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
