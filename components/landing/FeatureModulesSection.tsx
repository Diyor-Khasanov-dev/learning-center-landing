'use client'

import React, { useState } from 'react'
import { Sparkles, CheckCircle2, ArrowRight, Layers } from 'lucide-react'
import { Dropdown } from '@/components/ui/Dropdown'
import { RoleFilter } from '@/types/landing'
import { useDemoModal } from '@/context/DemoModalContext'
import { useLanguage } from '@/context/LanguageContext'
import { TRANSLATIONS } from '@/data/translations'

export function FeatureModulesSection() {
  const [roleFilter, setRoleFilter] = useState<RoleFilter>('all')
  const { openDemoModal } = useDemoModal()
  const { language } = useLanguage()
  const t = TRANSLATIONS[language].features

  const filteredModules = t.modules.filter(
    (m) => roleFilter === 'all' || m.role === roleFilter
  )

  return (
    <section id='features' className='py-24 bg-slate-100/70 dark:bg-[#080915] relative border-y border-slate-200/80 dark:border-white/10 transition-colors duration-200 overflow-hidden'>
      {/* Background ambient light */}
      <div className='pointer-events-none absolute top-0 right-10 h-96 w-96 rounded-full bg-violet-500/10 dark:bg-violet-600/15 blur-3xl' />
      <div className='pointer-events-none absolute bottom-0 left-10 h-96 w-96 rounded-full bg-cyan-500/10 dark:bg-cyan-600/15 blur-3xl' />

      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Section Header */}
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
          <div className='space-y-3.5 max-w-2xl'>
            <div className='inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 dark:bg-violet-500/15 px-4 py-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300 backdrop-blur-md shadow-2xs'>
              <Layers className='h-3.5 w-3.5 text-violet-600 dark:text-violet-400' />
              <span>{t.badge}</span>
            </div>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight'>
              {t.heading}
            </h2>
            <p className='text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed'>
              {t.subheading}
            </p>
          </div>

          {/* Role Filter Dropdown */}
          <div className='w-full sm:w-72 shrink-0'>
            <Dropdown<RoleFilter>
              options={t.roleFilterOptions}
              value={roleFilter}
              onChange={(val) => setRoleFilter(val)}
              label={t.filterLabel}
              size='md'
            />
          </div>
        </div>

        {/* Feature Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          {filteredModules.map((module) => {
            const IconComp = module.icon
            return (
              <div
                key={module.id}
                className='group relative rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-[#0e1022]/90 p-6 sm:p-7 hover:border-violet-500/50 dark:hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/10 dark:hover:shadow-violet-950/40 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl'
              >
                <div className='space-y-4'>
                  {/* Top Bar: Icon & Badge */}
                  <div className='flex items-center justify-between gap-2'>
                    <div className={`p-3.5 rounded-2xl border ${module.color} inline-flex shadow-xs group-hover:scale-105 transition-transform duration-300`}>
                      <IconComp className='h-6 w-6' />
                    </div>
                    <span className='text-[11px] font-bold px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 shadow-2xs whitespace-nowrap'>
                      {module.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors'>
                      {module.title}
                    </h3>
                    <p className='text-xs font-semibold text-violet-600 dark:text-violet-400 mt-1'>{module.tagline}</p>
                  </div>

                  {/* Description */}
                  <p className='text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal'>{module.description}</p>

                  {/* Highlights List */}
                  <div className='pt-3 border-t border-slate-100 dark:border-white/5 space-y-2'>
                    {module.highlights.map((h, i) => (
                      <div key={i} className='flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200 font-medium'>
                        <CheckCircle2 className='h-4 w-4 text-emerald-500 shrink-0' />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div
                  onClick={openDemoModal}
                  className='mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-bold text-violet-600 dark:text-violet-400 group-hover:text-violet-700 dark:group-hover:text-violet-300 cursor-pointer transition-colors'
                >
                  <span className='flex items-center gap-1.5'>
                    <Sparkles className='h-3.5 w-3.5 text-amber-500' />
                    <span>{t.requestDemo}</span>
                  </span>
                  <ArrowRight className='h-4 w-4 group-hover:translate-x-1.5 transition-transform' />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
