'use client'

import { useState } from 'react'

const FEATURE_COLORS = {
  violet: 'bg-violet-100 text-violet-500',
  blue: 'bg-blue-100 text-blue-500',
  emerald: 'bg-emerald-100 text-emerald-500',
  orange: 'bg-orange-100 text-orange-500',
  pink: 'bg-pink-100 text-pink-500',
  cyan: 'bg-cyan-100 text-cyan-500',
  purple: 'bg-purple-100 text-purple-500',
  amber: 'bg-amber-100 text-amber-500',
  rose: 'bg-rose-100 text-rose-500',
  teal: 'bg-teal-100 text-teal-500',
} as const

export default function Home() {
  const [tab, setTab] = useState<'all' | 'admin' | 'teacher' | 'student' | 'parent'>('all')

  return (
    <div className='min-h-screen bg-[#0a0a14] text-white'>
      {/* ============ NAVBAR ============ */}
      <header className='sticky top-0 z-50 border-b border-white/5 bg-[#0a0a14]/80 backdrop-blur-md'>
        <nav className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
          <div className='flex items-center gap-2'>
            <div className='flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500'>
              <span className='h-2.5 w-2.5 rounded-full bg-white' />
            </div>
            <span className='text-[15px] font-semibold tracking-tight'>EduSphere</span>
          </div>

          <div className='hidden items-center gap-7 text-[13.5px] text-white/70 md:flex'>
            {['Product', 'Solutions', 'Resources', 'Company'].map((item) => (
              <button
                key={item}
                className='flex items-center gap-1 hover:text-white transition-colors'
              >
                {item}
                <svg width='10' height='6' viewBox='0 0 10 6' fill='none' className='opacity-60'>
                  <path
                    d='M1 1L5 5L9 1'
                    stroke='currentColor'
                    strokeWidth='1.4'
                    strokeLinecap='round'
                  />
                </svg>
              </button>
            ))}
            <button className='hover:text-white transition-colors'>Pricing</button>
          </div>

          <div className='flex items-center gap-3'>
            <button className='text-[13.5px] text-white/70 hover:text-white transition-colors'>
              Log In
            </button>
            <button className='rounded-full bg-white px-4 py-2 text-[13px] font-medium text-black hover:bg-white/90 transition-colors'>
              Book a Demo
            </button>
          </div>
        </nav>
      </header>

      {/* ============ HERO ============ */}
      <section className='relative overflow-hidden'>
        {/* ambient glow */}
        <div className='pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-violet-600/20 blur-[120px]' />
        <div className='pointer-events-none absolute top-20 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]' />

        <div className='relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-24 pt-14 lg:grid-cols-2 lg:gap-6 lg:pt-16'>
          {/* LEFT */}
          <div className='flex flex-col justify-center'>
            <div className='mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[12px] text-white/70'>
              <span className='h-1.5 w-1.5 rounded-full bg-violet-400' />
              All-in-One Education ERP &amp; CRM Platform
            </div>

            <h1 className='text-[42px] font-semibold leading-[1.08] tracking-tight sm:text-[52px]'>
              Run your entire
              <br />
              learning center
              <br />
              like a{' '}
              <span className='bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent'>
                masterpiece.
              </span>
            </h1>

            <p className='mt-5 max-w-md text-[15px] leading-relaxed text-white/50'>
              Manage students, teachers, classes, attendance, exams, finance, CRM and more — all
              from a single intelligent platform.
            </p>

            <div className='mt-7 flex flex-wrap items-center gap-3'>
              <button className='rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-3 text-[14px] font-medium text-white shadow-lg shadow-violet-500/25 hover:opacity-90 transition-opacity'>
                Book a Demo
              </button>
              <button className='rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-[14px] font-medium text-white hover:bg-white/[0.08] transition-colors'>
                Start Free Trial
              </button>
            </div>

            <div className='mt-4 flex flex-wrap items-center gap-4 text-[12px] text-white/40'>
              <span className='flex items-center gap-1.5'>
                <CheckDot /> 14-day free trial
              </span>
              <span className='flex items-center gap-1.5'>
                <CheckDot /> No credit card
              </span>
              <span className='flex items-center gap-1.5'>
                <CheckDot /> Setup in 15 mins
              </span>
            </div>

            <div className='mt-10 grid grid-cols-4 gap-4 border-t border-white/10 pt-6'>
              {[
                ['150+', 'Learning Centers'],
                ['50K+', 'Students'],
                ['1M+', 'Attendance Records'],
                ['99.9%', 'Uptime'],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className='text-[19px] font-semibold'>{num}</div>
                  <div className='mt-0.5 text-[11px] leading-tight text-white/40'>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — dashboard mockup */}
          <div className='relative flex items-center justify-center'>
            <div className='w-full max-w-[560px] rounded-2xl border border-white/10 bg-[#12121e] p-4 shadow-2xl shadow-black/50'>
              <div className='flex items-center justify-between px-1 pb-4'>
                <div className='flex items-center gap-2 text-[13px] font-medium text-white/80'>
                  <span className='flex h-6 w-6 items-center justify-center rounded-md bg-violet-500/20 text-violet-300'>
                    <svg width='12' height='12' viewBox='0 0 24 24' fill='none'>
                      <path
                        d='M3 10L12 3l9 7v9a2 2 0 01-2 2h-4v-6H9v6H5a2 2 0 01-2-2v-9z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                  Dashboard
                </div>
                <div className='flex items-center gap-2 rounded-full bg-white/5 px-2 py-1 text-[11px] text-white/60'>
                  <span className='h-5 w-5 rounded-full bg-gradient-to-br from-orange-300 to-pink-400' />
                  Diyor K.
                </div>
              </div>

              <div className='grid grid-cols-4 gap-2.5'>
                {[
                  ['Students', '23,849', '+11.6%', 'text-emerald-400'],
                  ['Teachers', '1,248', '+4.9% this month', 'text-emerald-400'],
                  ['Revenue', '$45,298', '+18.6% this month', 'text-emerald-400'],
                  ['Admin', '92.6%', '+2.4% this month', 'text-emerald-400'],
                ].map(([label, val, delta, color]) => (
                  <div
                    key={label}
                    className='rounded-lg border border-white/5 bg-white/[0.03] p-2.5'
                  >
                    <div className='text-[10px] text-white/40'>{label}</div>
                    <div className='mt-1 text-[14px] font-semibold'>{val}</div>
                    <div className={`mt-0.5 text-[9px] ${color}`}>{delta}</div>
                  </div>
                ))}
              </div>

              <div className='mt-2.5 grid grid-cols-3 gap-2.5'>
                <div className='col-span-2 rounded-lg border border-white/5 bg-white/[0.03] p-3'>
                  <div className='flex items-center justify-between'>
                    <div className='text-[11px] text-white/50'>Revenue Overview</div>
                    <div className='rounded-full bg-white/5 px-2 py-0.5 text-[9px] text-white/40'>
                      Monthly
                    </div>
                  </div>
                  <div className='mt-1 text-[16px] font-semibold'>
                    $45,298 <span className='text-[10px] font-normal text-white/30'>June 2024</span>
                  </div>
                  <svg viewBox='0 0 220 60' className='mt-2 w-full'>
                    <defs>
                      <linearGradient id='rev' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='0%' stopColor='#a78bfa' stopOpacity='0.5' />
                        <stop offset='100%' stopColor='#a78bfa' stopOpacity='0' />
                      </linearGradient>
                    </defs>
                    <path
                      d='M0 45 L20 38 L40 48 L60 30 L80 35 L100 15 L120 25 L140 10 L160 22 L180 12 L200 20 L220 8 L220 60 L0 60 Z'
                      fill='url(#rev)'
                    />
                    <path
                      d='M0 45 L20 38 L40 48 L60 30 L80 35 L100 15 L120 25 L140 10 L160 22 L180 12 L200 20 L220 8'
                      fill='none'
                      stroke='#a78bfa'
                      strokeWidth='1.5'
                    />
                  </svg>
                </div>

                <div className='rounded-lg border border-white/5 bg-white/[0.03] p-3'>
                  <div className='text-[11px] text-white/50'>Recent Activity</div>
                  <div className='mt-2 space-y-2 text-[9.5px]'>
                    <div className='flex justify-between'>
                      <span className='text-white/60'>New admission</span>
                      <span className='text-emerald-400'>●</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-white/60'>Payment received</span>
                      <span className='text-emerald-400'>●</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-white/60'>Homework submitted</span>
                      <span className='text-amber-400'>●</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-white/60'>Attendance marked</span>
                      <span className='text-blue-400'>●</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-2.5 rounded-lg border border-white/5 bg-white/[0.03] p-3'>
                <div className='mb-2 flex items-center justify-between text-[11px] text-white/50'>
                  <span>June 2024</span>
                  <span className='text-white/30'>Mo Tu We Th Fr Sa Su</span>
                </div>
                <div className='grid grid-cols-7 gap-1 text-center text-[9px] text-white/40'>
                  {Array.from({ length: 21 }).map((_, i) => (
                    <span
                      key={i}
                      className={`rounded py-1 ${i === 12 ? 'bg-violet-500 text-white' : ''}`}
                    >
                      {i + 1}
                    </span>
                  ))}
                </div>
              </div>

              <div className='mt-2.5 grid grid-cols-4 gap-2.5'>
                {[
                  ['AI Assistant', 'Smart insights & help'],
                  ['Automatic Reports', 'Save 20+ hours/week'],
                  ['Smart Notifications', 'Keep parents informed'],
                  ['Secure & Reliable', 'Your data is protected'],
                ].map(([t, s]) => (
                  <div
                    key={t}
                    className='rounded-lg border border-white/5 bg-white/[0.03] p-2 text-center'
                  >
                    <div className='text-[9.5px] font-medium text-white/70'>{t}</div>
                    <div className='mt-0.5 text-[8px] text-white/30'>{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHITE SECTION ============ */}
      <section className='rounded-t-[36px] bg-[#fafafa] text-[#111] pb-20 pt-14'>
        {/* Trusted by */}
        <div className='mx-auto max-w-5xl px-6 text-center'>
          <p className='text-[12px] font-medium text-black/40'>Trusted by amazing institutions</p>
          <div className='mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4'>
            {[
              'Cambridge International',
              'Bright Future Academy',
              'Oxford Learning Center',
              'New Horizon College',
              'Elite Academy',
              'Greenfield School',
              'Future Kids Academy',
            ].map((name) => (
              <div
                key={name}
                className='flex items-center gap-1.5 text-[12.5px] font-medium text-black/50'
              >
                <span className='h-4 w-4 rounded-full bg-gradient-to-br from-violet-400 to-blue-400' />
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Old way vs smarter way */}
        <div className='mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 px-6 lg:grid-cols-2'>
          <div className='relative rounded-2xl border border-red-100 bg-red-50/60 p-7'>
            <h3 className='text-[19px] font-semibold text-red-500'>The old way is slow</h3>
            <ul className='mt-4 space-y-3 text-[13.5px] text-black/60'>
              {[
                'Data in Excel and Papers',
                'Communication on Telegram',
                'Manual Attendance',
                'Payment Tracking Issues',
                'Lost Homework & Assignments',
                'No Clear Reports',
              ].map((t) => (
                <li key={t} className='flex items-center gap-2.5'>
                  <span className='flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-100 text-[9px] text-red-500'>
                    ✕
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className='relative rounded-2xl border border-emerald-100 bg-emerald-50/60 p-7'>
            <h3 className='text-[19px] font-semibold text-emerald-600'>The smarter way</h3>
            <ul className='mt-4 space-y-3 text-[13.5px] text-black/60'>
              {[
                'Everything in One Platform',
                'Centralized Dashboard',
                'Automated Attendance',
                'Online Payments & Invoices',
                'Homework & Exams Management',
                'Real-time Reports & Analytics',
              ].map((t) => (
                <li key={t} className='flex items-center gap-2.5'>
                  <span className='flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[9px] text-emerald-600'>
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className='pointer-events-none absolute left-1/2 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-[#0a0a14] text-[11px] font-medium text-white lg:flex'>
            VS
          </div>
        </div>

        {/* Everything you need */}
        <div className='mx-auto mt-24 max-w-5xl px-6'>
          <div className='flex flex-wrap items-end justify-between gap-4'>
            <h2 className='text-[26px] font-semibold tracking-tight'>
              Everything you need.{' '}
              <span className='bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent'>
                All in one place.
              </span>
            </h2>
            <div className='flex gap-1 rounded-full bg-black/5 p-1 text-[12px]'>
              {(['all', 'admin', 'teacher', 'student', 'parent'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setTab(key as any)}
                  className={`rounded-full px-3.5 py-1.5 capitalize transition-colors ${
                    tab === key ? 'bg-black text-white' : 'text-black/50 hover:text-black'
                  }`}
                >
                  {key === 'all' ? 'All Features' : key}
                </button>
              ))}
            </div>
          </div>

          <div className='mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
            {[
              [
                'Student Management',
                'Admissions, profiles, groups, transfers & certificates',
                FEATURE_COLORS.violet,
              ],
              ['Teacher Management', 'Schedules, salary, performance & more', FEATURE_COLORS.blue],
              ['Attendance', 'QR, face recognition & digital tracking', FEATURE_COLORS.emerald],
              ['CRM', 'Leads, pipeline, calls & follow-ups', FEATURE_COLORS.orange],
              ['Finance', 'Invoices, payments, payroll & more', FEATURE_COLORS.pink],
              ['Exams', 'Online exams, marks, certificates & ranking', FEATURE_COLORS.cyan],
              ['Homework', 'Assignments, submission, feedback & deadlines', FEATURE_COLORS.purple],
              ['Parent Portal', 'Progress, attendance, payments & deadlines', FEATURE_COLORS.amber],
              ['Analytics', 'Revenue, growth, performance & reports', FEATURE_COLORS.rose],
              ['Multi-Branch', 'Manage multiple branches easily', FEATURE_COLORS.teal],
            ].map(([title, desc, classes]) => (
              <div
                key={title as string}
                className='group rounded-xl border border-black/5 bg-white p-4 transition-shadow hover:shadow-md'
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${classes}`}>
                  <span className='h-3 w-3 rounded-sm bg-current' />
                </div>
                <div className='mt-3 text-[13.5px] font-medium'>{title}</div>
                <div className='mt-1 text-[12px] leading-snug text-black/45'>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function CheckDot() {
  return (
    <svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
      <circle cx='6' cy='6' r='6' fill='currentColor' opacity='0.15' />
      <path
        d='M3.5 6L5.2 7.7L8.5 4.2'
        stroke='currentColor'
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

