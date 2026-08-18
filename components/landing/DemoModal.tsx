'use client'

import React from 'react'
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'
import { Modal } from '@/components/ui/Modal'
import { Dropdown } from '@/components/ui/Dropdown'
import { useDemoModal } from '@/context/DemoModalContext'
import { useLanguage } from '@/context/LanguageContext'
import { TRANSLATIONS } from '@/data/translations'

export function DemoModal() {
  const {
    isDemoModalOpen,
    closeDemoModal,
    demoStep,
    setDemoStep,
    demoForm,
    setDemoForm,
    demoSubmitted,
    handleDemoSubmit,
  } = useDemoModal()

  const { language } = useLanguage()
  const t = TRANSLATIONS[language].demoModal

  return (
    <Modal
      isOpen={isDemoModalOpen}
      onClose={closeDemoModal}
      maxWidth='lg'
      title={
        demoSubmitted ? null : (
          <div className='space-y-1.5'>
            <div className='inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 px-3 py-1 text-[11px] font-semibold text-violet-700 dark:text-violet-300'>
              <Sparkles className='h-3 w-3 text-amber-500 dark:text-amber-300' /> {t.personalizedWalkthrough}
            </div>
            <h3 className='text-2xl font-bold text-slate-900 dark:text-white'>{t.title}</h3>
          </div>
        )
      }
      description={
        demoSubmitted
          ? null
          : t.subtitle
      }
    >
      {demoSubmitted ? (
        <div className='py-8 text-center space-y-4 animate-in zoom-in-95 duration-200'>
          <div className='h-16 w-16 bg-emerald-500/20 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20'>
            <CheckCircle2 className='h-8 w-8' />
          </div>
          <h3 className='text-2xl font-bold text-slate-900 dark:text-white'>{t.confirmedTitle}</h3>
          <p className='text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm mx-auto'>
            {t.confirmedMessage}
          </p>
        </div>
      ) : (
        <form onSubmit={handleDemoSubmit} className='space-y-4'>
          {/* Step Indicator */}
          <div className='flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-white/10 text-xs font-semibold'>
            <button
              type='button'
              onClick={() => setDemoStep(1)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                demoStep === 1
                  ? 'bg-violet-600 text-white'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5'
              }`}
            >
              <span className='h-4 w-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]'>1</span>
              <span>{t.stepContact}</span>
            </button>
            <span className='text-slate-400 dark:text-slate-600'>/</span>
            <button
              type='button'
              onClick={() => {
                if (demoForm.name && demoForm.phone && demoForm.centerName) {
                  setDemoStep(2)
                }
              }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                demoStep === 2
                  ? 'bg-violet-600 text-white'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5'
              }`}
            >
              <span className='h-4 w-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]'>2</span>
              <span>{t.stepScale}</span>
            </button>
          </div>

          {demoStep === 1 ? (
            <div className='space-y-4 animate-in fade-in duration-200'>
              <div>
                <label className='block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5'>{t.fullNameLabel}</label>
                <input
                  type='text'
                  required
                  placeholder={t.fullNamePlaceholder}
                  value={demoForm.name}
                  onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                  className='w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#121428] px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30'
                />
              </div>

              <div>
                <label className='block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5'>{t.phoneLabel}</label>
                <input
                  type='tel'
                  required
                  placeholder={t.phonePlaceholder}
                  value={demoForm.phone}
                  onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                  className='w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#121428] px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30'
                />
              </div>

              <div>
                <label className='block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5'>{t.centerNameLabel}</label>
                <input
                  type='text'
                  required
                  placeholder={t.centerNamePlaceholder}
                  value={demoForm.centerName}
                  onChange={(e) => setDemoForm({ ...demoForm, centerName: e.target.value })}
                  className='w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#121428] px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30'
                />
              </div>

              <button
                type='button'
                onClick={() => {
                  if (demoForm.name && demoForm.phone && demoForm.centerName) {
                    setDemoStep(2)
                  }
                }}
                disabled={!demoForm.name || !demoForm.phone || !demoForm.centerName}
                className='w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 text-xs font-bold text-white shadow-lg shadow-violet-600/30 hover:opacity-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
              >
                <span>{t.nextCapacityBtn}</span>
                <ArrowRight className='h-4 w-4' />
              </button>
            </div>
          ) : (
            <div className='space-y-4 animate-in fade-in duration-200'>
              <Dropdown<string>
                label={t.studentsDropdownLabel}
                options={t.studentsOptions}
                value={demoForm.studentsCount}
                onChange={(val) => setDemoForm({ ...demoForm, studentsCount: val })}
                searchable={true}
                searchPlaceholder={t.studentsSearchPlaceholder}
              />

              <div>
                <label className='block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5'>{t.preferredTimeLabel}</label>
                <div className='grid grid-cols-2 gap-2 text-xs'>
                  {t.timeOptions.map((time) => (
                    <button
                      key={time}
                      type='button'
                      onClick={() => setDemoForm({ ...demoForm, preferredTime: time })}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        demoForm.preferredTime === time
                          ? 'border-violet-500 bg-violet-600/15 dark:bg-violet-600/30 text-violet-900 dark:text-white font-medium'
                          : 'border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#121428] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className='flex gap-3 pt-2'>
                <button
                  type='button'
                  onClick={() => setDemoStep(1)}
                  className='w-1/3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 py-3 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer'
                >
                  {t.backBtn}
                </button>

                <button
                  type='submit'
                  className='w-2/3 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 py-3 text-xs font-bold text-white shadow-lg shadow-violet-600/30 hover:opacity-95 transition-all cursor-pointer'
                >
                  {t.confirmBtn}
                </button>
              </div>
            </div>
          )}
        </form>
      )}
    </Modal>
  )
}
