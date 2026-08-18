'use client'

import React, { useState } from 'react'
import { GraduationCap, Menu, X, Sparkles } from 'lucide-react'
import { useDemoModal } from '@/context/DemoModalContext'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openDemoModal } = useDemoModal()

  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-[#07080e]/80 backdrop-blur-xl'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
        {/* Brand Logo */}
        <a href='#' className='flex items-center gap-3 group'>
          <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 shadow-lg shadow-violet-500/30 group-hover:scale-105 transition-transform'>
            <GraduationCap className='h-5 w-5 text-white' />
          </div>
          <div>
            <span className='text-lg font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent'>
              EduSphere
            </span>
            <span className='hidden sm:inline-block ml-2 rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] font-semibold text-violet-300 border border-violet-500/30'>
              ERP &amp; CRM
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className='hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex'>
          <a href='#comparison' className='hover:text-white transition-colors'>Why EduSphere</a>
          <a href='#features' className='hover:text-white transition-colors'>Modules</a>
          <a href='#tour' className='hover:text-white transition-colors'>Platform Tour</a>
          <a href='#roi' className='hover:text-white transition-colors'>ROI Calculator</a>
          <a href='#pricing' className='hover:text-white transition-colors'>Pricing</a>
          <a href='#faq' className='hover:text-white transition-colors'>FAQ</a>
        </div>

        {/* Desktop CTAs */}
        <div className='hidden items-center gap-4 md:flex'>
          <button
            onClick={openDemoModal}
            className='text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer'
          >
            Log In
          </button>
          <button
            onClick={openDemoModal}
            className='relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-600/50 transition-all active:scale-95 cursor-pointer'
          >
            <Sparkles className='h-4 w-4 text-amber-300' />
            Book Free Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className='md:hidden text-slate-300 hover:text-white p-2 cursor-pointer'
          aria-label='Toggle Menu'
        >
          {mobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className='md:hidden border-t border-white/10 bg-[#0c0d18] px-6 py-6 space-y-4'>
          <a
            href='#comparison'
            onClick={() => setMobileMenuOpen(false)}
            className='block text-base text-slate-300 hover:text-white'
          >
            Why EduSphere
          </a>
          <a
            href='#features'
            onClick={() => setMobileMenuOpen(false)}
            className='block text-base text-slate-300 hover:text-white'
          >
            Modules
          </a>
          <a
            href='#tour'
            onClick={() => setMobileMenuOpen(false)}
            className='block text-base text-slate-300 hover:text-white'
          >
            Platform Tour
          </a>
          <a
            href='#roi'
            onClick={() => setMobileMenuOpen(false)}
            className='block text-base text-slate-300 hover:text-white'
          >
            ROI Calculator
          </a>
          <a
            href='#pricing'
            onClick={() => setMobileMenuOpen(false)}
            className='block text-base text-slate-300 hover:text-white'
          >
            Pricing
          </a>
          <a
            href='#faq'
            onClick={() => setMobileMenuOpen(false)}
            className='block text-base text-slate-300 hover:text-white'
          >
            FAQ
          </a>
          <div className='pt-4 border-t border-white/10 flex flex-col gap-3'>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                openDemoModal()
              }}
              className='w-full rounded-xl border border-white/20 py-3 text-center text-sm font-semibold text-white cursor-pointer'
            >
              Log In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                openDemoModal()
              }}
              className='w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 text-center text-sm font-semibold text-white shadow-lg cursor-pointer'
            >
              Book Free Demo
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
