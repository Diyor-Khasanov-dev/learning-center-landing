'use client'

import React from 'react'
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'
import { Modal } from '@/components/ui/Modal'
import { Dropdown } from '@/components/ui/Dropdown'
import { useDemoModal } from '@/context/DemoModalContext'
import { STUDENT_COUNT_OPTIONS } from '@/data/landing-data'

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

  return (
    <Modal
      isOpen={isDemoModalOpen}
      onClose={closeDemoModal}
      maxWidth='lg'
      title={
        demoSubmitted ? null : (
          <div className='space-y-1.5'>
            <div className='inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 px-3 py-1 text-[11px] font-semibold text-violet-300'>
              <Sparkles className='h-3 w-3 text-amber-300' /> Personalized 1-on-1 Walkthrough
            </div>
            <h3 className='text-2xl font-bold text-white'>Book a Live Demo for Your Center</h3>
          </div>
        )
      }
      description={
        demoSubmitted
          ? null
          : 'See how EduSphere fits your learning center’s exact workflow & branch structure.'
      }
    >
      {demoSubmitted ? (
        <div className='py-8 text-center space-y-4 animate-in zoom-in-95 duration-200'>
          <div className='h-16 w-16 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20'>
            <CheckCircle2 className='h-8 w-8' />
          </div>
          <h3 className='text-2xl font-bold text-white'>Demo Request Confirmed!</h3>
          <p className='text-xs text-slate-300 leading-relaxed max-w-sm mx-auto'>
            Thank you, <span className='text-white font-semibold'>{demoForm.name || 'valued partner'}</span>! Our education systems specialist will reach out to you via WhatsApp / Phone within 15 minutes to schedule your walkthrough.
          </p>
        </div>
      ) : (
        <form onSubmit={handleDemoSubmit} className='space-y-4'>
          {/* Step Indicator */}
          <div className='flex items-center gap-2 pb-2 border-b border-white/10 text-xs font-semibold'>
            <button
              type='button'
              onClick={() => setDemoStep(1)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                demoStep === 1
                  ? 'bg-violet-600 text-white'
                  : 'text-slate-400 hover:text-white bg-white/5'
              }`}
            >
              <span className='h-4 w-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]'>1</span>
              <span>Contact Info</span>
            </button>
            <span className='text-slate-600'>/</span>
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
                  : 'text-slate-400 hover:text-white bg-white/5'
              }`}
            >
              <span className='h-4 w-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]'>2</span>
              <span>Center Scale</span>
            </button>
          </div>

          {demoStep === 1 ? (
            <div className='space-y-4 animate-in fade-in duration-200'>
              <div>
                <label className='block text-xs font-semibold text-slate-300 mb-1.5'>Your Full Name</label>
                <input
                  type='text'
                  required
                  placeholder='e.g., Akmal Umarov'
                  value={demoForm.name}
                  onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                  className='w-full rounded-xl border border-white/10 bg-[#121428] px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30'
                />
              </div>

              <div>
                <label className='block text-xs font-semibold text-slate-300 mb-1.5'>Phone / WhatsApp Number</label>
                <input
                  type='tel'
                  required
                  placeholder='+998 90 123 45 67'
                  value={demoForm.phone}
                  onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                  className='w-full rounded-xl border border-white/10 bg-[#121428] px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30'
                />
              </div>

              <div>
                <label className='block text-xs font-semibold text-slate-300 mb-1.5'>Learning Center Name</label>
                <input
                  type='text'
                  required
                  placeholder='e.g., Cambridge Education Hub'
                  value={demoForm.centerName}
                  onChange={(e) => setDemoForm({ ...demoForm, centerName: e.target.value })}
                  className='w-full rounded-xl border border-white/10 bg-[#121428] px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30'
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
                <span>Next: Select Student Capacity</span>
                <ArrowRight className='h-4 w-4' />
              </button>
            </div>
          ) : (
            <div className='space-y-4 animate-in fade-in duration-200'>
              <Dropdown<string>
                label='Number of Active Students'
                options={STUDENT_COUNT_OPTIONS}
                value={demoForm.studentsCount}
                onChange={(val) => setDemoForm({ ...demoForm, studentsCount: val })}
                searchable={true}
                searchPlaceholder='Filter student capacity...'
              />

              <div>
                <label className='block text-xs font-semibold text-slate-300 mb-1.5'>Preferred Time for Demo Call</label>
                <div className='grid grid-cols-2 gap-2 text-xs'>
                  {['Morning (9:00 - 12:00)', 'Afternoon (12:00 - 17:00)', 'Evening (17:00 - 20:00)', 'Anytime Today'].map((time) => (
                    <button
                      key={time}
                      type='button'
                      onClick={() => setDemoForm({ ...demoForm, preferredTime: time })}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        demoForm.preferredTime === time
                          ? 'border-violet-500 bg-violet-600/30 text-white font-medium'
                          : 'border-white/10 bg-[#121428] text-slate-400 hover:text-white'
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
                  className='w-1/3 rounded-xl border border-white/10 bg-white/5 py-3 text-xs font-bold text-slate-300 hover:bg-white/10 transition-colors cursor-pointer'
                >
                  Back
                </button>

                <button
                  type='submit'
                  className='w-2/3 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 py-3 text-xs font-bold text-white shadow-lg shadow-violet-600/30 hover:opacity-95 transition-all cursor-pointer'
                >
                  Confirm &amp; Book Demo
                </button>
              </div>
            </div>
          )}
        </form>
      )}
    </Modal>
  )
}
