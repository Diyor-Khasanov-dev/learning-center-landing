'use client'

import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { useLanguage, LANGUAGE_OPTIONS, Language } from '@/context/LanguageContext'

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentOption = LANGUAGE_OPTIONS.find((opt) => opt.code === language) || LANGUAGE_OPTIONS[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (code: Language) => {
    setLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className='relative inline-block text-left' ref={dropdownRef}>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer'
        aria-label='Select language'
      >
        <Globe className='h-3.5 w-3.5 text-violet-600 dark:text-violet-400' />
        <span className='mr-0.5'>{currentOption.flag}</span>
        <span className='uppercase font-bold tracking-wider text-[11px]'>{currentOption.code}</span>
        <ChevronDown className={`h-3 w-3 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-36 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-[#12142a]/95 backdrop-blur-xl shadow-xl z-50 p-1.5 animate-in fade-in zoom-in-95 duration-150'>
          {LANGUAGE_OPTIONS.map((option) => {
            const isSelected = option.code === language
            return (
              <button
                key={option.code}
                type='button'
                onClick={() => handleSelect(option.code)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-violet-500/15 dark:bg-violet-600/30 text-violet-900 dark:text-white font-bold border border-violet-500/30'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                <div className='flex items-center gap-2'>
                  <span>{option.flag}</span>
                  <span>{option.label}</span>
                </div>
                <span className='text-[10px] uppercase text-slate-400 font-mono'>{option.code}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
