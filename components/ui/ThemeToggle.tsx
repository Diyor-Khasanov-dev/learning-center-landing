'use client'

import React, { useSyncExternalStore } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

interface ThemeToggleProps {
  className?: string
}

const emptySubscribe = () => () => {}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  if (!isMounted) {
    return (
      <div className={`h-9 w-9 rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5 ${className}`} />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      type='button'
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-500 ${
        theme === 'dark'
          ? 'border-white/15 bg-white/5 text-amber-300 hover:bg-white/10 hover:text-amber-200'
          : 'border-slate-200 bg-slate-100 text-indigo-600 hover:bg-slate-200 hover:text-indigo-700 shadow-xs'
      } ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className='h-4 w-4 transition-transform duration-300 rotate-0 hover:rotate-45' />
      ) : (
        <Moon className='h-4 w-4 transition-transform duration-300 rotate-0 hover:-rotate-12' />
      )}
    </button>
  )
}
