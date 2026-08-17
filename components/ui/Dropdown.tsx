'use client'

import React, { useState, useRef, useEffect, useId } from 'react'
import { ChevronDown, Check, Search, X } from 'lucide-react'

export interface DropdownOption<T extends string | number = string> {
  value: T
  label: string
  description?: string
  icon?: React.ComponentType<{ className?: string }>
  badge?: string
  disabled?: boolean
}

export interface DropdownProps<T extends string | number = string> {
  options: DropdownOption<T>[]
  value: T
  onChange: (value: T) => void
  label?: string
  placeholder?: string
  searchable?: boolean
  searchPlaceholder?: string
  disabled?: boolean
  error?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Dropdown<T extends string | number = string>({
  options,
  value,
  onChange,
  label,
  placeholder = 'Select an option',
  searchable = false,
  searchPlaceholder = 'Search...',
  disabled = false,
  error,
  className = '',
  size = 'md',
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1)

  const containerRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const listboxRef = useRef<HTMLUListElement>(null)
  const id = useId()

  const selectedOption = options.find((opt) => opt.value === value)

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (option.description && option.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  // Handle click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearchQuery('')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Auto focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen, searchable])

  // Scroll highlighted item into view
  useEffect(() => {
    if (isOpen && listboxRef.current && highlightedIndex >= 0) {
      const highlightedEl = listboxRef.current.children[highlightedIndex] as HTMLElement
      if (highlightedEl) {
        highlightedEl.scrollIntoView({ block: 'nearest' })
      }
    }
  }, [highlightedIndex, isOpen])

  const toggleOpen = () => {
    if (disabled) return
    if (!isOpen) {
      const selectedIdx = filteredOptions.findIndex((opt) => opt.value === value)
      setHighlightedIndex(selectedIdx >= 0 ? selectedIdx : 0)
      setIsOpen(true)
    } else {
      setIsOpen(false)
      setSearchQuery('')
      setHighlightedIndex(-1)
    }
  }

  const handleSelect = (optionValue: T, optDisabled?: boolean) => {
    if (optDisabled) return
    onChange(optionValue)
    setIsOpen(false)
    setSearchQuery('')
    setHighlightedIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return

    switch (e.key) {
      case 'Enter':
      case ' ':
        if (!isOpen) {
          e.preventDefault()
          toggleOpen()
        } else if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
          e.preventDefault()
          const opt = filteredOptions[highlightedIndex]
          handleSelect(opt.value, opt.disabled)
        }
        break
      case 'ArrowDown':
        e.preventDefault()
        if (!isOpen) {
          toggleOpen()
        } else {
          setHighlightedIndex((prev) =>
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          )
        }
        break
      case 'ArrowUp':
        e.preventDefault()
        if (!isOpen) {
          toggleOpen()
        } else {
          setHighlightedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          )
        }
        break
      case 'Escape':
        if (isOpen) {
          e.preventDefault()
          setIsOpen(false)
          setSearchQuery('')
          setHighlightedIndex(-1)
        }
        break
      case 'Tab':
        if (isOpen) {
          setIsOpen(false)
          setSearchQuery('')
          setHighlightedIndex(-1)
        }
        break
      default:
        break
    }
  }

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs rounded-lg',
    md: 'px-4 py-2.5 text-xs sm:text-sm rounded-xl',
    lg: 'px-5 py-3 text-sm sm:text-base rounded-2xl',
  }

  const IconComponent = selectedOption?.icon

  return (
    <div className={`relative w-full ${className}`} ref={containerRef}>
      {label && (
        <label
          id={`${id}-label`}
          className='block text-xs font-semibold text-slate-300 mb-1.5'
        >
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type='button'
        aria-haspopup='listbox'
        aria-expanded={isOpen}
        aria-labelledby={label ? `${id}-label` : undefined}
        disabled={disabled}
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        className={`w-full flex items-center justify-between gap-3 text-left transition-all duration-200 border bg-[#121428] text-white shadow-sm hover:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/40 ${
          sizeClasses[size]
        } ${
          error
            ? 'border-rose-500/80 ring-1 ring-rose-500/30'
            : isOpen
            ? 'border-violet-500 ring-2 ring-violet-500/30 bg-[#161933]'
            : 'border-white/10 hover:bg-[#161830]'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <div className='flex items-center gap-2.5 truncate min-w-0'>
          {IconComponent && (
            <IconComponent className='h-4 w-4 text-violet-400 shrink-0' />
          )}
          {selectedOption ? (
            <div className='flex items-center gap-2 truncate'>
              <span className='font-medium text-slate-100 truncate'>
                {selectedOption.label}
              </span>
              {selectedOption.badge && (
                <span className='text-[10px] font-semibold px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 shrink-0'>
                  {selectedOption.badge}
                </span>
              )}
            </div>
          ) : (
            <span className='text-slate-400 font-normal truncate'>{placeholder}</span>
          )}
        </div>

        <ChevronDown
          className={`h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-violet-400' : ''
          }`}
        />
      </button>

      {error && (
        <p className='mt-1 text-[11px] text-rose-400 font-medium'>{error}</p>
      )}

      {/* Dropdown Menu Overlay */}
      {isOpen && (
        <div className='absolute left-0 right-0 top-full mt-2 z-50 rounded-2xl border border-white/15 bg-[#12142a]/95 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden animate-in fade-in zoom-in-95 duration-150'>
          {/* Search Box if enabled */}
          {searchable && (
            <div className='p-2.5 border-b border-white/10 flex items-center gap-2 bg-[#0d0e1e]'>
              <Search className='h-3.5 w-3.5 text-slate-400 shrink-0 ml-1' />
              <input
                ref={searchInputRef}
                type='text'
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setHighlightedIndex(0)
                }}
                onKeyDown={handleKeyDown}
                placeholder={searchPlaceholder}
                className='w-full bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none'
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className='p-1 text-slate-400 hover:text-white'
                >
                  <X className='h-3 w-3' />
                </button>
              )}
            </div>
          )}

          {/* Options List */}
          <ul
            ref={listboxRef}
            role='listbox'
            tabIndex={-1}
            className='max-h-60 overflow-y-auto p-1.5 space-y-0.5 scrollbar-thin scrollbar-thumb-slate-700'
          >
            {filteredOptions.length === 0 ? (
              <li className='px-4 py-3 text-xs text-slate-400 text-center italic'>
                No matching options found
              </li>
            ) : (
              filteredOptions.map((option, idx) => {
                const isSelected = option.value === value
                const isHighlighted = idx === highlightedIndex
                const OptionIcon = option.icon

                return (
                  <li
                    key={String(option.value)}
                    role='option'
                    aria-selected={isSelected}
                    onClick={() => handleSelect(option.value, option.disabled)}
                    onMouseEnter={() => setHighlightedIndex(idx)}
                    className={`flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-sm rounded-xl transition-all cursor-pointer ${
                      option.disabled ? 'opacity-40 cursor-not-allowed' : ''
                    } ${
                      isSelected
                        ? 'bg-violet-600/30 text-white font-semibold border border-violet-500/30'
                        : isHighlighted
                        ? 'bg-white/10 text-white'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <div className='flex items-center gap-3 min-w-0 pr-2'>
                      {OptionIcon && (
                        <OptionIcon
                          className={`h-4 w-4 shrink-0 ${
                            isSelected ? 'text-violet-300' : 'text-slate-400'
                          }`}
                        />
                      )}
                      <div className='min-w-0'>
                        <div className='flex items-center gap-2'>
                          <span className='truncate'>{option.label}</span>
                          {option.badge && (
                            <span className='text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 shrink-0'>
                              {option.badge}
                            </span>
                          )}
                        </div>
                        {option.description && (
                          <div className='text-[10px] text-slate-400 font-normal truncate mt-0.5'>
                            {option.description}
                          </div>
                        )}
                      </div>
                    </div>

                    {isSelected && (
                      <Check className='h-4 w-4 text-violet-400 shrink-0 ml-2' />
                    )}
                  </li>
                )
              })
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
