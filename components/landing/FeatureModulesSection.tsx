'use client'

import React, { useState } from 'react'
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'
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
    <section id='features' className='py-24 bg-slate-100/70 dark:bg-[#0a0c1a]/80 relative border-y border-slate-200/80 dark:border-white/10 transition-colors duration-200'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
          <div className='space-y-3 max-w-2xl'>
            <div className='inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300'>
              <Sparkles className='h-3.5 w-3.5 text-amber-500 dark:text-amber-300' />
              <span>{t.badge}</span>
            </div>
            <h2 className='text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white'>
              {t.heading}
            </h2>
            <p className='text-slate-600 dark:text-slate-400 text-base'>
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredModules.map((module) => {
            const IconComp = module.icon
            return (
              <div
                key={module.id}
                className='group relative rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#0e1022] p-6 hover:border-violet-500/50 dark:hover:border-violet-500/50 hover:bg-slate-50 dark:hover:bg-[#12152b] transition-all duration-300 flex flex-col justify-between shadow-xs dark:shadow-none'
              >
                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <div className={`p-3 rounded-xl border ${module.color} inline-flex`}>
                      <IconComp className='h-6 w-6' />
                    </div>
                    <span className='text-[11px] font-bold px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300'>
                      {module.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors'>
                      {module.title}
                    </h3>
                    <p className='text-xs font-medium text-violet-600 dark:text-violet-400 mt-1'>{module.tagline}</p>
                  </div>

                  <p className='text-xs text-slate-600 dark:text-slate-400 leading-relaxed'>{module.description}</p>

                  <div className='pt-2 border-t border-slate-100 dark:border-white/5 space-y-2'>
                    {module.highlights.map((h, i) => (
                      <div key={i} className='flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300'>
                        <CheckCircle2 className='h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0' />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  onClick={openDemoModal}
                  className='mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-violet-600 dark:text-violet-400 group-hover:text-violet-700 dark:group-hover:text-violet-300 cursor-pointer'
                >
                  <span>{t.requestDemo}</span>
                  <ArrowRight className='h-4 w-4 group-hover:translate-x-1 transition-transform' />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
