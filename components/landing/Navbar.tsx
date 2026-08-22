'use client'

import React, { useState } from 'react'
import { GraduationCap, Menu, X, Sparkles, LogIn } from 'lucide-react'
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
    <header className='sticky top-0 z-50 border-b border-slate-200/80 dark:border-white/10 bg-white/85 dark:bg-[#07080e]/85 backdrop-blur-3xl transition-colors duration-200'>
      {/* Top glowing ambient highlight line */}
      <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500/70 via-indigo-500/70 to-transparent' />

      <nav className='mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 py-3.5'>
        {/* Brand Logo */}
        <a href='#' className='flex items-center gap-2.5 group shrink-0'>
          <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 shadow-lg shadow-violet-500/25 dark:shadow-violet-500/30 group-hover:scale-105 group-hover:shadow-violet-500/40 transition-all duration-300'>
            <GraduationCap className='h-5 w-5 text-white' />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-lg font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent whitespace-nowrap'>
              A.L.I.A
            </span>
            <span className='hidden 2xl:inline-block rounded-full bg-violet-500/10 dark:bg-violet-500/20 px-2.5 py-0.5 text-[10px] font-bold text-violet-700 dark:text-violet-300 border border-violet-500/20 dark:border-violet-500/30 whitespace-nowrap'>
              ERP &amp; CRM
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className='hidden lg:flex items-center gap-2 lg:gap-3 xl:gap-6 2xl:gap-8 text-xs xl:text-sm font-medium xl:font-semibold text-slate-600 dark:text-slate-300'>
          <a
            href='#comparison'
            className='px-3 py-1.5 xl:px-3.5 rounded-full hover:text-violet-600 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/10 transition-all whitespace-nowrap'
          >
            {t.whyUs}
          </a>
          <a
            href='#features'
            className='px-3 py-1.5 xl:px-3.5 rounded-full hover:text-violet-600 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/10 transition-all whitespace-nowrap'
          >
            {t.modules}
          </a>
          <a
            href='#tour'
            className='px-3 py-1.5 xl:px-3.5 rounded-full hover:text-violet-600 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/10 transition-all whitespace-nowrap'
          >
            {t.tour}
          </a>
          <a
            href='#roi'
            className='px-3 py-1.5 xl:px-3.5 rounded-full hover:text-violet-600 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/10 transition-all whitespace-nowrap'
          >
            {t.roi}
          </a>
          <a
            href='#pricing'
            className='px-3 py-1.5 xl:px-3.5 rounded-full hover:text-violet-600 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/10 transition-all whitespace-nowrap'
          >
            {t.pricing}
          </a>
          <a
            href='#faq'
            className='px-3 py-1.5 xl:px-3.5 rounded-full hover:text-violet-600 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/10 transition-all whitespace-nowrap'
          >
            {t.faq}
          </a>
        </div>

        {/* Desktop CTAs, Language Selector & Theme Toggle */}
        <div className='hidden lg:flex items-center gap-3 xl:gap-4 shrink-0'>
          <div className='flex items-center gap-2 xl:gap-2.5'>
            <LanguageSelector />
            <ThemeToggle />
          </div>

          <div className='h-4 w-[1px] bg-slate-200 dark:bg-white/15 mx-0.5' />

          <button
            onClick={openDemoModal}
            className='flex items-center gap-1.5 text-xs xl:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer px-3 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 whitespace-nowrap'
          >
            <LogIn className='h-3.5 w-3.5 text-slate-500 dark:text-slate-400' />
            <span>{t.login}</span>
          </button>

          <button
            onClick={openDemoModal}
            className='relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-indigo-700 px-4 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm font-semibold text-white shadow-lg shadow-violet-600/25 dark:shadow-violet-600/35 hover:from-violet-500 hover:to-indigo-600 hover:shadow-violet-600/45 hover:scale-[1.02] transition-all active:scale-95 cursor-pointer whitespace-nowrap'
          >
            <Sparkles className='h-4 w-4 text-amber-300 shrink-0' />
            <span>{t.bookDemo}</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className='flex items-center gap-2 lg:hidden shrink-0'>
          <LanguageSelector />
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 cursor-pointer transition-colors'
            aria-label='Toggle Menu'
          >
            {mobileMenuOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className='lg:hidden border-t border-slate-200/80 dark:border-white/10 bg-white/95 dark:bg-[#0c0d18]/95 backdrop-blur-2xl px-6 py-6 space-y-3.5 animate-in slide-in-from-top-2 duration-200 shadow-2xl'>
          <a
            href='#comparison'
            onClick={() => setMobileMenuOpen(false)}
            className='block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors'
          >
            {t.whyUs}
          </a>
          <a
            href='#features'
            onClick={() => setMobileMenuOpen(false)}
            className='block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors'
          >
            {t.modules}
          </a>
          <a
            href='#tour'
            onClick={() => setMobileMenuOpen(false)}
            className='block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors'
          >
            {t.tour}
          </a>
          <a
            href='#roi'
            onClick={() => setMobileMenuOpen(false)}
            className='block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors'
          >
            {t.roi}
          </a>
          <a
            href='#pricing'
            onClick={() => setMobileMenuOpen(false)}
            className='block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors'
          >
            {t.pricing}
          </a>
          <a
            href='#faq'
            onClick={() => setMobileMenuOpen(false)}
            className='block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors'
          >
            {t.faq}
          </a>
          <div className='pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3'>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                openDemoModal()
              }}
              className='w-full rounded-xl border border-slate-300 dark:border-white/20 py-3 text-center text-sm font-semibold text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all cursor-pointer whitespace-nowrap'
            >
              {t.login}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                openDemoModal()
              }}
              className='w-full rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-indigo-700 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2'
            >
              <Sparkles className='h-4 w-4 text-amber-300' />
              <span>{t.bookDemo}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
