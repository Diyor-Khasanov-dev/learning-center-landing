'use client'

import React, { useState } from 'react'
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'
import { Dropdown } from '@/components/ui/Dropdown'
import { RoleFilter } from '@/types/landing'
import { FEATURE_MODULES, ROLE_FILTER_OPTIONS } from '@/data/landing-data'
import { useDemoModal } from '@/context/DemoModalContext'

export function FeatureModulesSection() {
  const [roleFilter, setRoleFilter] = useState<RoleFilter>('all')
  const { openDemoModal } = useDemoModal()

  const filteredModules = FEATURE_MODULES.filter(
    (m) => roleFilter === 'all' || m.role === roleFilter
  )

  return (
    <section id='features' className='py-24 bg-[#0a0c1a]/80 relative border-y border-white/10'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
          <div className='space-y-3 max-w-2xl'>
            <div className='inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300'>
              <Sparkles className='h-3.5 w-3.5 text-amber-300' />
              <span>Complete Functionality</span>
            </div>
            <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
              Everything you need to scale your learning center
            </h2>
            <p className='text-slate-400 text-base'>
              Tailored views and tools for Administrators, Sales Managers, Teachers, Students, and Parents.
            </p>
          </div>

          {/* Role Filter Dropdown */}
          <div className='w-full sm:w-72 shrink-0'>
            <Dropdown<RoleFilter>
              options={ROLE_FILTER_OPTIONS}
              value={roleFilter}
              onChange={(val) => setRoleFilter(val)}
              label='Filter Modules by Role'
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
                className='group relative rounded-2xl border border-white/10 bg-[#0e1022] p-6 hover:border-violet-500/50 hover:bg-[#12152b] transition-all duration-300 flex flex-col justify-between'
              >
                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <div className={`p-3 rounded-xl border ${module.color} inline-flex`}>
                      <IconComp className='h-6 w-6' />
                    </div>
                    <span className='text-[11px] font-bold px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300'>
                      {module.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className='text-xl font-bold text-white group-hover:text-violet-300 transition-colors'>
                      {module.title}
                    </h3>
                    <p className='text-xs font-medium text-violet-400 mt-1'>{module.tagline}</p>
                  </div>

                  <p className='text-xs text-slate-400 leading-relaxed'>{module.description}</p>

                  <div className='pt-2 border-t border-white/5 space-y-2'>
                    {module.highlights.map((h, i) => (
                      <div key={i} className='flex items-center gap-2 text-xs text-slate-300'>
                        <CheckCircle2 className='h-3.5 w-3.5 text-emerald-400 shrink-0' />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  onClick={openDemoModal}
                  className='mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-violet-400 group-hover:text-violet-300 cursor-pointer'
                >
                  <span>Request live demo of this module</span>
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
