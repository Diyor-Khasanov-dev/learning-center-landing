'use client'

import React from 'react'
import { GraduationCap, ShieldCheck, MessageSquare } from 'lucide-react'
import { useDemoModal } from '@/context/DemoModalContext'

export function Footer() {
  const { openDemoModal } = useDemoModal()

  return (
    <footer className='border-t border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-[#05060c] py-16 text-slate-600 dark:text-slate-400 text-sm transition-colors duration-200'>
      <div className='mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-5 gap-10'>
        {/* Brand Col */}
        <div className='md:col-span-2 space-y-4'>
          <div className='flex items-center gap-3'>
            <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 text-white font-bold'>
              <GraduationCap className='h-5 w-5' />
            </div>
            <span className='text-xl font-bold text-slate-900 dark:text-white tracking-tight'>EduSphere</span>
          </div>

          <p className='text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm'>
            The all-in-one ERP &amp; CRM management operating system built for modern learning centers, tutoring hubs, and language academies.
          </p>

          <div className='flex items-center gap-3 pt-2 text-xs text-slate-500'>
            <ShieldCheck className='h-4 w-4 text-emerald-600 dark:text-emerald-400' />
            <span>SOC2 Compliant &amp; Bank-Grade Data Encryption</span>
          </div>
        </div>

        {/* Product Links */}
        <div className='space-y-3'>
          <div className='text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white'>Modules</div>
          <ul className='space-y-2 text-xs'>
            <li><a href='#features' className='hover:text-slate-900 dark:hover:text-white transition-colors'>Lead CRM Pipeline</a></li>
            <li><a href='#features' className='hover:text-slate-900 dark:hover:text-white transition-colors'>QR Attendance</a></li>
            <li><a href='#features' className='hover:text-slate-900 dark:hover:text-white transition-colors'>Tuition &amp; Debt Control</a></li>
            <li><a href='#features' className='hover:text-slate-900 dark:hover:text-white transition-colors'>Parent &amp; Student App</a></li>
            <li><a href='#features' className='hover:text-slate-900 dark:hover:text-white transition-colors'>LMS &amp; Online Homework</a></li>
          </ul>
        </div>

        {/* Solutions */}
        <div className='space-y-3'>
          <div className='text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white'>Solutions For</div>
          <ul className='space-y-2 text-xs'>
            <li><a href='#' className='hover:text-slate-900 dark:hover:text-white transition-colors'>Language Centers</a></li>
            <li><a href='#' className='hover:text-slate-900 dark:hover:text-white transition-colors'>IT &amp; Coding Academies</a></li>
            <li><a href='#' className='hover:text-slate-900 dark:hover:text-white transition-colors'>IELTS &amp; Test Prep Studios</a></li>
            <li><a href='#' className='hover:text-slate-900 dark:hover:text-white transition-colors'>Multi-Branch Franchises</a></li>
            <li><a href='#' className='hover:text-slate-900 dark:hover:text-white transition-colors'>Kids &amp; STEM Schools</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className='space-y-3'>
          <div className='text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white'>Get in Touch</div>
          <p className='text-xs text-slate-600 dark:text-slate-400'>Need help selecting a plan?</p>
          <button
            onClick={openDemoModal}
            className='inline-flex items-center gap-2 rounded-lg bg-violet-500/10 dark:bg-violet-600/20 border border-violet-500/30 px-3 py-2 text-xs font-semibold text-violet-700 dark:text-violet-300 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 transition-all cursor-pointer'
          >
            <MessageSquare className='h-3.5 w-3.5' /> Contact Product Team
          </button>
        </div>
      </div>

      <div className='mx-auto max-w-7xl px-6 pt-12 mt-12 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-500 gap-4'>
        <div>© {new Date().getFullYear()} EduSphere Inc. All rights reserved.</div>
        <div className='flex gap-6'>
          <a href='#' className='hover:text-slate-900 dark:hover:text-slate-300'>Privacy Policy</a>
          <a href='#' className='hover:text-slate-900 dark:hover:text-slate-300'>Terms of Service</a>
          <a href='#' className='hover:text-slate-900 dark:hover:text-slate-300'>Security</a>
        </div>
      </div>
    </footer>
  )
}
