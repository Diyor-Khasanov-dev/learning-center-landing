'use client'

import React, { useState } from 'react'
import { GraduationCap, Menu, X, Sparkles } from 'lucide-react'
import { useDemoModal } from '@/context/DemoModalContext'
import { useLanguage } from '@/context/LanguageContext'
import { TRANSLATIONS } from '@/data/translations'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { LanguageSelector } from '@/components/ui/LanguageSelector'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openDemoModal } = useDemoModal()
  const { language } = useLanguage()
  const t = TRANSLATIONS[language].nav

  return (
    <header className='sticky top-0 z-50 border-b border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-[#07080e]/80 backdrop-blur-xl transition-colors duration-200'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
        {/* Brand Logo */}
        <a href='#' className='flex items-center gap-3 group'>
          <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 shadow-lg shadow-violet-500/30 group-hover:scale-105 transition-transform'>
            <GraduationCap className='h-5 w-5 text-white' />
          </div>
          <div>
            <span className='text-lg font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-slate-100 dark:to-slate-400 bg-clip-text text-transparent'>
              EduSphere
            </span>
            <span className='hidden sm:inline-block ml-2 rounded-full bg-violet-500/10 dark:bg-violet-500/20 px-2 py-0.5 text-[10px] font-semibold text-violet-700 dark:text-violet-300 border border-violet-500/20 dark:border-violet-500/30'>
              ERP &amp; CRM
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className='hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex'>
          <a href='#comparison' className='hover:text-slate-900 dark:hover:text-white transition-colors'>{t.whyUs}</a>
          <a href='#features' className='hover:text-slate-900 dark:hover:text-white transition-colors'>{t.modules}</a>
          <a href='#tour' className='hover:text-slate-900 dark:hover:text-white transition-colors'>{t.tour}</a>
          <a href='#roi' className='hover:text-slate-900 dark:hover:text-white transition-colors'>{t.roi}</a>
          <a href='#pricing' className='hover:text-slate-900 dark:hover:text-white transition-colors'>{t.pricing}</a>
          <a href='#faq' className='hover:text-slate-900 dark:hover:text-white transition-colors'>{t.faq}</a>
        </div>

        {/* Desktop CTAs, Language Selector & Theme Toggle */}
        <div className='hidden items-center gap-3 md:flex'>
          <LanguageSelector />
          <ThemeToggle />
          <button
            onClick={openDemoModal}
            className='text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer px-2'
          >
            {t.login}
          </button>
          <button
            onClick={openDemoModal}
            className='relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-600/50 transition-all active:scale-95 cursor-pointer'
          >
            <Sparkles className='h-4 w-4 text-amber-300' />
            {t.bookDemo}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className='flex items-center gap-2.5 md:hidden'>
          <LanguageSelector />
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-2 cursor-pointer'
            aria-label='Toggle Menu'
          >
            {mobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className='md:hidden border-t border-slate-200/80 dark:border-white/10 bg-slate-50 dark:bg-[#0c0d18] px-6 py-6 space-y-4'>
          <a
            href='#comparison'
            onClick={() => setMobileMenuOpen(false)}
            className='block text-base text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          >
            {t.whyUs}
          </a>
          <a
            href='#features'
            onClick={() => setMobileMenuOpen(false)}
            className='block text-base text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          >
            {t.modules}
          </a>
          <a
            href='#tour'
            onClick={() => setMobileMenuOpen(false)}
            className='block text-base text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          >
            {t.tour}
          </a>
          <a
            href='#roi'
            onClick={() => setMobileMenuOpen(false)}
            className='block text-base text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          >
            {t.roi}
          </a>
          <a
            href='#pricing'
            onClick={() => setMobileMenuOpen(false)}
            className='block text-base text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          >
            {t.pricing}
          </a>
          <a
            href='#faq'
            onClick={() => setMobileMenuOpen(false)}
            className='block text-base text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          >
            {t.faq}
          </a>
          <div className='pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3'>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                openDemoModal()
              }}
              className='w-full rounded-xl border border-slate-300 dark:border-white/20 py-3 text-center text-sm font-semibold text-slate-800 dark:text-white hover:bg-slate-200/50 dark:hover:bg-white/5 cursor-pointer'
            >
              {t.login}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                openDemoModal()
              }}
              className='w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 text-center text-sm font-semibold text-white shadow-lg cursor-pointer'
            >
              {t.bookDemo}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
