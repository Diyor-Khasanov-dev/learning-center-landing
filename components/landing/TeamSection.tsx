'use client'

import Image from 'next/image'
import { ArrowUpRight, BadgeCheck, Github, Linkedin, Sparkles, Users } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { TRANSLATIONS } from '@/data/translations'

const cardAccents = [
  {
    number: '01',
    wash: 'from-violet-500 via-indigo-500 to-sky-400',
    glow: 'bg-violet-500/25',
  },
  {
    number: '02',
    wash: 'from-fuchsia-500 via-violet-500 to-indigo-400',
    glow: 'bg-fuchsia-500/25',
  },
  {
    number: '03',
    wash: 'from-sky-500 via-blue-500 to-violet-500',
    glow: 'bg-sky-500/25',
  },
  {
    number: '04',
    wash: 'from-indigo-500 via-violet-500 to-fuchsia-400',
    glow: 'bg-indigo-500/25',
  },
  {
    number: '05',
    wash: 'from-violet-500 via-purple-500 to-pink-400',
    glow: 'bg-purple-500/25',
  },
]

export function TeamSection() {
  const { language } = useLanguage()
  const t = TRANSLATIONS[language].team

  return (
    <section id='team' className='relative overflow-hidden bg-slate-50/70 py-24 transition-colors duration-200 dark:bg-[#080914]/60 sm:py-28 scroll-mt-28 sm:scroll-mt-32'>
      <div className='pointer-events-none absolute left-[8%] top-28 h-80 w-80 rounded-full bg-violet-500/15 blur-[130px] dark:bg-violet-500/20' />
      <div className='pointer-events-none absolute bottom-0 right-[5%] h-[30rem] w-[30rem] rounded-full bg-sky-500/10 blur-[160px] dark:bg-indigo-500/15' />
      <div className='pointer-events-none absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-violet-400/35 to-transparent' />

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-14 max-w-3xl space-y-4 text-center sm:mb-16'>
          <div className='inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-white/70 px-4 py-1.5 text-xs font-bold text-violet-700 shadow-sm backdrop-blur-md dark:bg-violet-500/10 dark:text-violet-300'>
            <Users className='h-3.5 w-3.5' />
            <span>{t.badge}</span>
          </div>
          <h2 className='text-3xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl'>
            {t.heading}
          </h2>
          <p className='text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg'>
            {t.subheading}
          </p>
        </div>

        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7'>
          {t.members.map((member, index) => {
            const accent = cardAccents[index % cardAccents.length]

            return (
              <article
                key={member.id}
                className='group relative isolate min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/70 bg-white p-2 shadow-[0_18px_55px_-24px_rgba(76,29,149,0.38)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_-22px_rgba(76,29,149,0.5)] dark:border-white/10 dark:bg-[#101226] dark:shadow-[0_18px_55px_-24px_rgba(0,0,0,0.9)]'
              >
                <div className={`absolute -right-16 -top-16 -z-10 h-44 w-44 rounded-full ${accent.glow} blur-3xl transition-transform duration-700 group-hover:scale-150`} />
                <div className={`relative h-64 overflow-hidden rounded-[1.55rem] bg-gradient-to-br ${accent.wash} sm:h-72`}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    className='object-cover object-center mix-blend-luminosity opacity-90 transition duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:mix-blend-normal'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/5 to-transparent' />
                  <div className='absolute inset-x-5 bottom-4 flex items-end justify-between'>
                    <div className='inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/35 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md'>
                      <span className='relative flex h-1.5 w-1.5'>
                        <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75' />
                        <span className='relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300' />
                      </span>
                      {t.badge}
                    </div>
                    <span className='font-mono text-2xl font-bold tracking-tighter text-white/80'>{accent.number}</span>
                  </div>
                </div>

                <div className='relative flex min-h-[13.75rem] flex-col px-4 pb-4 pt-5 sm:px-5'>
                  <div className='mb-3 flex items-start justify-between gap-3'>
                    <div>
                      <h3 className='flex items-center gap-1.5 text-xl font-black tracking-tight text-slate-900 dark:text-white'>
                        {member.name}
                        <BadgeCheck className={`h-4.5 w-4.5 shrink-0 text-violet-500 dark:text-violet-400`} aria-label='Verified team member' />
                      </h3>
                      <p className='mt-1 text-xs font-bold uppercase tracking-[0.11em] text-violet-700 dark:text-violet-300'>{member.role}</p>
                    </div>
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${accent.wash} text-white shadow-lg`}>
                      <Sparkles className='h-4 w-4' />
                    </div>
                  </div>

                  <p className='text-sm leading-6 text-slate-600 dark:text-slate-300'>{member.bio}</p>

                  <div className='mt-auto flex items-center justify-between border-t border-slate-100 pt-4 dark:border-white/10'>
                    <span className='text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500'>A.L.I.A Team</span>
                    <div className='flex items-center gap-2'>
                      <a href={member.github} target='_blank' rel='noopener noreferrer' aria-label={`${member.name}'s GitHub`} className='flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-violet-500 dark:hover:bg-violet-600'>
                        <Github className='h-4 w-4' />
                      </a>
                      <a href={member.linkedin} target='_blank' rel='noopener noreferrer' aria-label={`${member.name}'s LinkedIn`} className='flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-[#0077b5] hover:bg-[#0077b5] hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300'>
                        <Linkedin className='h-4 w-4' />
                      </a>
                      <span className='flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300'>
                        <ArrowUpRight className='h-4 w-4' />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
