'use client'

import Image from 'next/image'
import { ArrowUpRight, BadgeCheck, Users } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { useLanguage } from '@/context/LanguageContext'
import { TRANSLATIONS } from '@/data/translations'

const cardAccents = [
  {
    wash: 'from-violet-500 via-indigo-500 to-sky-400',
    glow: 'bg-violet-500/25',
    ring: 'group-hover:ring-violet-400/40',
  },
  {
    wash: 'from-fuchsia-500 via-violet-500 to-indigo-400',
    glow: 'bg-fuchsia-500/25',
    ring: 'group-hover:ring-fuchsia-400/40',
  },
  {
    wash: 'from-sky-500 via-blue-500 to-violet-500',
    glow: 'bg-sky-500/25',
    ring: 'group-hover:ring-sky-400/40',
  },
  {
    wash: 'from-indigo-500 via-violet-500 to-fuchsia-400',
    glow: 'bg-indigo-500/25',
    ring: 'group-hover:ring-indigo-400/40',
  },
  {
    wash: 'from-violet-500 via-purple-500 to-pink-400',
    glow: 'bg-purple-500/25',
    ring: 'group-hover:ring-purple-400/40',
  },
]

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}

export function TeamSection() {
  const { language } = useLanguage()
  const t = TRANSLATIONS[language].team

  return (
    <section
      id='team'
      className='relative overflow-hidden bg-slate-50/70 py-24 transition-colors duration-200 dark:bg-[#080914]/60 sm:py-28 scroll-mt-28 sm:scroll-mt-32'
    >
      <div className='pointer-events-none absolute left-[8%] top-28 h-80 w-80 rounded-full bg-violet-500/15 blur-[130px] dark:bg-violet-500/20' />
      <div className='pointer-events-none absolute bottom-0 right-[5%] h-[30rem] w-[30rem] rounded-full bg-sky-500/10 blur-[160px] dark:bg-indigo-500/15' />
      <div className='pointer-events-none absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-violet-400/35 to-transparent' />

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-14 max-w-3xl space-y-4 text-center sm:mb-16'>
          <div className='inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-white/70 px-4 py-1.5 text-xs font-bold text-violet-700 shadow-sm backdrop-blur-md dark:bg-violet-500/10 dark:text-violet-300'>
            <Users className='h-3.5 w-3.5' aria-hidden='true' />
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
                className={`group relative isolate flex min-h-[30rem] flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white p-2 shadow-[0_18px_55px_-24px_rgba(76,29,149,0.38)] ring-1 ring-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_-22px_rgba(76,29,149,0.5)] dark:border-white/10 dark:bg-[#101226] dark:shadow-[0_18px_55px_-24px_rgba(0,0,0,0.9)] ${accent.ring}`}
              >
                <div
                  className={`absolute -right-16 -top-16 -z-10 h-44 w-44 rounded-full ${accent.glow} blur-3xl transition-transform duration-700 group-hover:scale-150`}
                />

                <div className='relative h-64 overflow-hidden rounded-[1.55rem] bg-gradient-to-br sm:h-72'>
                  <div className={`absolute inset-0 bg-gradient-to-br ${accent.wash}`} />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    className='object-cover object-center mix-blend-luminosity opacity-90 transition duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:mix-blend-normal'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent' />

                  {/* Monogram replaces the arbitrary 01–05 index: it identifies this person specifically, rather than implying a ranked order. */}
                  <div
                    className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent.wash} font-mono text-sm font-bold text-white shadow-lg ring-2 ring-white/30`}
                    aria-hidden='true'
                  >
                    {getInitials(member.name)}
                  </div>

                  <div className='absolute inset-x-5 bottom-4'>
                    <p className='text-xs font-bold uppercase tracking-[0.16em] text-white/90 drop-shadow-sm'>
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className='relative flex flex-1 flex-col px-4 pb-4 pt-5 sm:px-5'>
                  <h3 className='flex items-center gap-1.5 text-xl font-black leading-tight tracking-tight text-slate-900 dark:text-white'>
                    {member.name}
                    <BadgeCheck
                      className='h-4.5 w-4.5 shrink-0 text-violet-500 dark:text-violet-400'
                      aria-label={`${member.name} is a verified team member`}
                    />
                  </h3>

                  <div className='mt-auto flex items-center justify-between border-t border-slate-100 pt-4 dark:border-white/10'>
                    <span className='inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500'>
                      <span className='relative flex h-1.5 w-1.5'>
                        <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
                        <span className='relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400' />
                      </span>
                      Active
                    </span>
                    <div className='flex items-center gap-2'>
                      {member.github && (
                        <a
                          href={member.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={`${member.name}'s GitHub`}
                          className='flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-violet-500 dark:hover:bg-violet-600 dark:focus-visible:ring-offset-[#101226]'
                        >
                          <FaGithub className='h-4 w-4' aria-hidden='true' />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={`${member.name}'s LinkedIn`}
                          className='flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-[#0077b5] hover:bg-[#0077b5] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:focus-visible:ring-offset-[#101226]'
                        >
                          <FaLinkedinIn className='h-4 w-4' aria-hidden='true' />
                        </a>
                      )}
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
