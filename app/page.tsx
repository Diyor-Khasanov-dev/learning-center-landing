'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  GraduationCap,
  CreditCard,
  QrCode,
  Bell,
  CheckCircle2,
  XCircle,
  BarChart3,
  Building2,
  BookOpen,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Play,
  Star,
  Sparkles,
  Calculator,
  PhoneCall,
  UserCheck,
  Zap,
  Clock,
  HelpCircle,
  Menu,
  X,
  Award,
  DollarSign
} from 'lucide-react'

// --- DATA STRUCTURES ---

type RoleFilter = 'all' | 'admin' | 'teacher' | 'student' | 'sales'

const STATS_DATA = [
  { value: '350+', label: 'Learning Centers', sub: 'Across 12 countries' },
  { value: '180,000+', label: 'Active Students', sub: 'Enrolled & tracked' },
  { value: '$12M+', label: 'Payments Processed', sub: 'Automated billing' },
  { value: '99.9%', label: 'Uptime SLA', sub: 'Enterprise reliability' },
]

const PARTNER_LOGOS = [
  'Cambridge Academy',
  'InterNation Education',
  'Apex Learning Hub',
  'ProData Tech School',
  'Language Excellence',
  'Grand Master Chess',
  'Nova STEM Academy',
]

const OLD_VS_NEW = [
  {
    category: 'Lead & Student Management',
    oldWay: 'Lost leads in Telegram groups and messy Excel sheets with no sales history.',
    newWay: 'Unified CRM pipeline with automatic lead capture, status tags, and SMS follow-ups.',
  },
  {
    category: 'Attendance & Class Tracking',
    oldWay: 'Paper rosters or delayed manual entries leading to unrecorded absences.',
    newWay: 'Instant QR code scanning & face recognition with automated parent SMS alerts.',
  },
  {
    category: 'Financials & Monthly Tuition',
    oldWay: 'Cash recording mistakes, uncollected debts, and chaotic receipt printing.',
    newWay: 'Automated billing, online payment gateway integrations, and instant debtor reports.',
  },
  {
    category: 'Teacher Payroll & KPIs',
    oldWay: 'Complex end-of-month manual KPI calculations for variable hourly salaries.',
    newWay: 'Automated salary calculation based on student retention, hours, and class attendance.',
  },
  {
    category: 'Parent & Student Communication',
    oldWay: 'Scattered phone calls, missed announcements, and untracked student grades.',
    newWay: 'Dedicated Mobile App & Student/Parent portal for grades, schedules, and payments.',
  },
]

const FEATURE_MODULES = [
  {
    id: 'crm',
    role: 'sales' as RoleFilter,
    title: 'Lead CRM & Pipeline',
    tagline: 'Convert inquiries into paying students faster',
    description: 'Track incoming leads from Instagram, Facebook, Website, and Walk-ins. Manage status pipelines, auto-assign managers, and send automated SMS reminders.',
    badge: 'Sales Boost +35%',
    icon: PhoneCall,
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400',
    highlights: ['Multi-channel lead capture', 'Kanban deal board', 'Automated SMS & WhatsApp follow-ups', 'Manager performance stats'],
  },
  {
    id: 'student-mgmt',
    role: 'admin' as RoleFilter,
    title: 'Student & Course Administration',
    tagline: 'Complete student lifecycle management',
    description: 'Manage groups, timetables, student profiles, group transfers, course materials, certificates, and academic histories effortlessly.',
    badge: '90% Less Admin Time',
    icon: GraduationCap,
    color: 'from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-400',
    highlights: ['Group scheduling & capacity limits', 'Student history & status tracking', 'Certificate generation', 'Branch-to-branch transfers'],
  },
  {
    id: 'attendance',
    role: 'teacher' as RoleFilter,
    title: 'Smart Attendance & QR Check-in',
    tagline: 'Instant check-in with auto Parent notifications',
    description: 'Teachers or front-desk admins scan student QR passes or use biometric check-in. Parents receive instant notification when students arrive or miss class.',
    badge: 'Zero Attendance Fraud',
    icon: QrCode,
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
    highlights: ['Student QR pass generator', 'Instant automated Parent SMS', 'Late arrival & sickness tracking', 'Teacher class logs'],
  },
  {
    id: 'finance',
    role: 'admin' as RoleFilter,
    title: 'Billing, Debt Control & Payroll',
    tagline: 'Full financial transparency and automated receipts',
    description: 'Automate monthly tuition billing, handle partial discounts, manage debtor notifications, and calculate teacher salaries based on hourly rates or student count.',
    badge: 'Zero Uncollected Debts',
    icon: CreditCard,
    color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400',
    highlights: ['Online payment integrations', 'Automated debt reminders via SMS', 'Custom discounts & scholarships', 'Teacher KPI & salary auto-calculation'],
  },
  {
    id: 'lms',
    role: 'student' as RoleFilter,
    title: 'LMS, Homework & Quiz Platform',
    tagline: 'Engage students beyond the classroom',
    description: 'Teachers upload homework assignments, video lectures, and quizzes. Students submit work online, view leaderboards, and receive teacher feedback.',
    badge: '2x Student Engagement',
    icon: BookOpen,
    color: 'from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-400',
    highlights: ['Video lesson storage', 'Online homework submission & grading', 'Gamified student rank & coin rewards', 'Automated quiz scoring'],
  },
  {
    id: 'analytics',
    role: 'admin' as RoleFilter,
    title: 'Multi-Branch Analytics & BI',
    tagline: 'Real-time executive dashboard for owners',
    description: 'Monitor key metrics across all branches in real-time. View revenue forecasts, student drop-out rates, marketing ROI, and top-performing teachers.',
    badge: '360° Executive View',
    icon: BarChart3,
    color: 'from-indigo-500/20 to-sky-500/20 border-indigo-500/30 text-indigo-400',
    highlights: ['Multi-branch consolidated view', 'Student retention analytics', 'Financial cashflow forecasting', 'Exportable PDF & Excel reports'],
  },
]

const TOUR_TABS = [
  {
    id: 'crm',
    label: 'Lead CRM',
    title: 'Turn Enquiries into Enrolled Students',
    desc: 'Visual Kanban pipeline designed specifically for educational centers. Never lose track of prospective students.',
    metrics: [
      { label: 'Conversion Rate', val: '28.4%', trend: '+4.2%' },
      { label: 'New Leads Today', val: '42 leads', trend: 'Active' },
      { label: 'Avg Follow-up', val: '12 mins', trend: '-8 mins' },
    ],
  },
  {
    id: 'attendance',
    label: 'QR Attendance',
    title: 'Contactless Check-In in Seconds',
    desc: 'Students scan their QR badge on a tablet at entrance. Parents instantly receive a notification that their child arrived safely.',
    metrics: [
      { label: 'Check-in Speed', val: '1.2 sec', trend: 'Ultra fast' },
      { label: 'Parent SMS Sent', val: '1,420 today', trend: '100% delivered' },
      { label: 'Unexcused Absences', val: '1.8%', trend: '-65% drop' },
    ],
  },
  {
    id: 'payments',
    label: 'Billing & Debtors',
    title: 'Automated Tuition Collection',
    desc: 'Stop chasing payments. Automatic SMS reminders with payment links let parents pay tuition in two clicks from their phones.',
    metrics: [
      { label: 'On-time Payment', val: '94.2%', trend: '+22%' },
      { label: 'Overdue Debts', val: '$1,200', trend: '-78%' },
      { label: 'Auto Receipts', val: '100%', trend: 'Verified' },
    ],
  },
  {
    id: 'app',
    label: 'Parent Mobile App',
    title: 'Transparency That Builds Trust',
    desc: 'Parents view child attendance history, teacher comments, homework progress, test scores, and account balance anytime.',
    metrics: [
      { label: 'Parent App Usage', val: '89%', trend: 'High engagement' },
      { label: 'Rating on App Store', val: '4.9 ★', trend: 'Top rated' },
      { label: 'Support Inquiries', val: '-40%', trend: 'Fewer calls' },
    ],
  },
]

const TESTIMONIALS = [
  {
    quote:
      'Modme-style system transformed our learning center completely. Before, we lost 30% of incoming leads because managers forgot to call back. Now everything is tracked, and our monthly revenue grew by 45% in 6 months.',
    author: 'Dilshod Rahmatov',
    role: 'Founder & CEO',
    company: 'Apex Education Center (4 Branches)',
    stats: '+45% Revenue Growth',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  },
  {
    quote:
      'The automated QR attendance and instant SMS to parents saved us 2 hours every day at the front desk. Parents love the transparency, and our tuition collection is on time every month.',
    author: 'Elena Smirnova',
    role: 'Academic Director',
    company: 'Bright Minds Language Academy',
    stats: '2 Hours Saved Daily',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  },
  {
    quote:
      'Managing 6 branches used to be a nightmare with Excel. With EduSphere, I can see real-time student count, cash flow, teacher attendance, and sales performance from my smartphone anywhere in the world.',
    author: 'Jasur Alimov',
    role: 'General Director',
    company: 'ProTech IT Academy',
    stats: '6 Branches Unified',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
]

const PRICING_PLANS = [
  {
    name: 'Starter',
    desc: 'Perfect for single-branch boutique learning centers & private tutoring studios.',
    monthlyPrice: 49,
    annualPrice: 39,
    studentsLimit: 'Up to 200 Students',
    branchesLimit: '1 Branch Included',
    features: [
      'Core Student & Group Management',
      'Lead CRM Kanban Pipeline',
      'QR Code Attendance Scanning',
      'Tuition & Debtor Management',
      'Automated SMS Notifications (Basic)',
      'Teacher Schedule Calendar',
      'Standard Financial Reports',
    ],
    highlight: false,
    cta: 'Start 14-Day Free Trial',
  },
  {
    name: 'Growth Standard',
    desc: 'Designed for growing educational centers wanting maximum automation & mobile app.',
    monthlyPrice: 99,
    annualPrice: 79,
    studentsLimit: 'Up to 700 Students',
    branchesLimit: 'Up to 3 Branches',
    features: [
      'Everything in Starter Plan',
      'Parent & Student Mobile Web Portal',
      'LMS, Online Homework & Quizzes',
      'Automated Teacher Salary & KPI Calculator',
      'Multi-channel CRM Integration (IG, Web)',
      'Advanced Multi-branch Analytics',
      'Dedicated Customer Onboarding Manager',
      'Priority 24/7 Phone & Telegram Support',
    ],
    highlight: true,
    cta: 'Get Started Now',
  },
  {
    name: 'Enterprise / Franchise',
    desc: 'Custom enterprise scale for large academy networks & multi-city franchises.',
    monthlyPrice: 199,
    annualPrice: 159,
    studentsLimit: 'Unlimited Students',
    branchesLimit: 'Unlimited Branches',
    features: [
      'Everything in Growth Plan',
      'Custom White-Label Mobile App on App Store',
      'Custom Payment Gateway Integrations',
      'Custom API & Webhook Access',
      'Franchise Owner Command Center',
      'Dedicated Infrastructure & SLA 99.9%',
      'Custom Feature Engineering on Request',
    ],
    highlight: false,
    cta: 'Contact Sales',
  },
]

const FAQS = [
  {
    q: 'How long does it take to migrate our data from Excel or another system?',
    a: 'Data migration is extremely fast! Our team provides pre-formatted Excel/CSV templates. You can import all your students, groups, teachers, and financial records in under 30 minutes. We also offer free hands-on onboarding support.',
  },
  {
    q: 'Can parents pay tuition online through the system?',
    a: 'Yes! EduSphere integrates with popular online payment gateways (Payme, Click, Stripe, PayPal, local bank cards). Parents receive a direct payment link in SMS or inside their Parent Portal.',
  },
  {
    q: 'Does EduSphere support multiple branches and franchises?',
    a: 'Absolutely. EduSphere was engineered specifically for multi-branch learning centers. Branch managers see only their branch data, while central directors and owners have a unified global dashboard.',
  },
  {
    q: 'How does the QR Code attendance system work?',
    a: 'Each student receives a unique digital QR pass on their phone or printed student ID card. Front desk staff or teachers scan the code using any tablet, smartphone, or webcam. The system instantly marks attendance and sends an SMS to parents.',
  },
  {
    q: 'Is our student and financial data secure?',
    a: 'Security is our top priority. We use SSL encryption in transit, daily database backups, strict role-based access control (RBAC), and SOC2 compliant cloud server infrastructure.',
  },
  {
    q: 'Can I try EduSphere before purchasing?',
    a: 'Yes, we offer a 14-day full feature free trial with no credit card required. You can also book a live 1-on-1 demo with our product expert.',
  },
]

export default function Home() {
  // State
  const [roleFilter, setRoleFilter] = useState<RoleFilter>('all')
  const [activeTourTab, setActiveTourTab] = useState('crm')
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Interactive ROI Calculator State
  const [studentCount, setStudentCount] = useState<number>(300)
  const [branchCount, setBranchCount] = useState<number>(2)

  // Demo Form State
  const [demoForm, setDemoForm] = useState({ name: '', phone: '', centerName: '', studentsCount: '100-300' })
  const [demoSubmitted, setDemoSubmitted] = useState(false)

  // ROI Calculations
  const hoursSavedPerWeek = Math.round((studentCount / 20) * branchCount)
  const estimatedMoneySavedMonthly = Math.round(studentCount * 3.5 * branchCount)
  const lostLeadsRecovered = Math.round(studentCount * 0.12)

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDemoSubmitted(true)
    setTimeout(() => {
      setDemoSubmitted(false)
      setIsDemoModalOpen(false)
      setDemoForm({ name: '', phone: '', centerName: '', studentsCount: '100-300' })
    }, 2500)
  }

  const filteredModules = FEATURE_MODULES.filter(
    (m) => roleFilter === 'all' || m.role === roleFilter
  )

  const currentTourData = TOUR_TABS.find((t) => t.id === activeTourTab) || TOUR_TABS[0]

  return (
    <div className='min-h-screen bg-[#07080e] text-slate-100 font-sans selection:bg-violet-500 selection:text-white relative overflow-x-hidden'>
      {/* ================= HEADER / NAVBAR ================= */}
      <header className='sticky top-0 z-50 border-b border-white/10 bg-[#07080e]/80 backdrop-blur-xl'>
        <nav className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
          {/* Brand Logo */}
          <a href='#' className='flex items-center gap-3 group'>
            <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 shadow-lg shadow-violet-500/30 group-hover:scale-105 transition-transform'>
              <GraduationCap className='h-5 w-5 text-white' />
            </div>
            <div>
              <span className='text-lg font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent'>
                EduSphere
              </span>
              <span className='hidden sm:inline-block ml-2 rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] font-semibold text-violet-300 border border-violet-500/30'>
                ERP &amp; CRM
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className='hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex'>
            <a href='#comparison' className='hover:text-white transition-colors'>Why EduSphere</a>
            <a href='#features' className='hover:text-white transition-colors'>Modules</a>
            <a href='#tour' className='hover:text-white transition-colors'>Platform Tour</a>
            <a href='#roi' className='hover:text-white transition-colors'>ROI Calculator</a>
            <a href='#pricing' className='hover:text-white transition-colors'>Pricing</a>
            <a href='#faq' className='hover:text-white transition-colors'>FAQ</a>
          </div>

          {/* Desktop CTAs */}
          <div className='hidden items-center gap-4 md:flex'>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className='text-sm font-medium text-slate-300 hover:text-white transition-colors'
            >
              Log In
            </button>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className='relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-600/50 transition-all active:scale-95'
            >
              <Sparkles className='h-4 w-4 text-amber-300' />
              Book Free Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='md:hidden text-slate-300 hover:text-white p-2'
            aria-label='Toggle Menu'
          >
            {mobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className='md:hidden border-t border-white/10 bg-[#0c0d18] px-6 py-6 space-y-4'>
            <a
              href='#comparison'
              onClick={() => setMobileMenuOpen(false)}
              className='block text-base text-slate-300 hover:text-white'
            >
              Why EduSphere
            </a>
            <a
              href='#features'
              onClick={() => setMobileMenuOpen(false)}
              className='block text-base text-slate-300 hover:text-white'
            >
              Modules
            </a>
            <a
              href='#tour'
              onClick={() => setMobileMenuOpen(false)}
              className='block text-base text-slate-300 hover:text-white'
            >
              Platform Tour
            </a>
            <a
              href='#roi'
              onClick={() => setMobileMenuOpen(false)}
              className='block text-base text-slate-300 hover:text-white'
            >
              ROI Calculator
            </a>
            <a
              href='#pricing'
              onClick={() => setMobileMenuOpen(false)}
              className='block text-base text-slate-300 hover:text-white'
            >
              Pricing
            </a>
            <a
              href='#faq'
              onClick={() => setMobileMenuOpen(false)}
              className='block text-base text-slate-300 hover:text-white'
            >
              FAQ
            </a>
            <div className='pt-4 border-t border-white/10 flex flex-col gap-3'>
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setIsDemoModalOpen(true)
                }}
                className='w-full rounded-xl border border-white/20 py-3 text-center text-sm font-semibold text-white'
              >
                Log In
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setIsDemoModalOpen(true)
                }}
                className='w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 text-center text-sm font-semibold text-white shadow-lg'
              >
                Book Free Demo
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className='relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden'>
        {/* Glow Effects */}
        <div className='pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/25 blur-[140px]' />
        <div className='pointer-events-none absolute top-1/3 left-10 h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-[130px]' />
        <div className='pointer-events-none absolute bottom-10 right-10 h-[350px] w-[350px] rounded-full bg-cyan-600/15 blur-[120px]' />

        <div className='mx-auto max-w-7xl px-6 relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
            {/* Left Column: Copy */}
            <div className='lg:col-span-6 space-y-6 text-center lg:text-left'>
              <div className='inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300 backdrop-blur-md'>
                <Zap className='h-3.5 w-3.5 text-amber-400 fill-amber-400' />
                <span>Next-Gen Education Management Platform</span>
              </div>

              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]'>
                Run your{' '}
                <span className='bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent'>
                  learning center
                </span>{' '}
                with 100% clarity &amp; zero loss.
              </h1>

              <p className='text-lg text-slate-300/90 leading-relaxed max-w-2xl mx-auto lg:mx-0'>
                All-in-one ERP &amp; CRM system built specifically for modern education centers, language academies, and IT schools like Modme. Automate sales, attendance, billing, parent SMS, and multi-branch operations.
              </p>

              {/* Action Buttons */}
              <div className='flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2'>
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className='flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-violet-600/35 hover:scale-[1.02] hover:shadow-violet-600/50 transition-all active:scale-95'
                >
                  <span>Book Free 1-on-1 Demo</span>
                  <ArrowRight className='h-5 w-5' />
                </button>
                <a
                  href='#tour'
                  className='flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-base font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md'
                >
                  <Play className='h-4 w-4 fill-current text-violet-400' />
                  <span>Watch Interactive Tour</span>
                </a>
              </div>

              {/* Trust Subtext */}
              <div className='flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-medium text-slate-400 pt-3'>
                <span className='flex items-center gap-1.5'>
                  <CheckCircle2 className='h-4 w-4 text-emerald-400' /> 14-Day Free Trial
                </span>
                <span className='flex items-center gap-1.5'>
                  <CheckCircle2 className='h-4 w-4 text-emerald-400' /> Instant Setup in 15 Mins
                </span>
                <span className='flex items-center gap-1.5'>
                  <CheckCircle2 className='h-4 w-4 text-emerald-400' /> Free Data Migration
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Dashboard Mockup */}
            <div className='lg:col-span-6 relative'>
              <div className='relative rounded-2xl border border-white/15 bg-[#0e101f]/90 p-4 sm:p-6 shadow-2xl shadow-indigo-950/60 backdrop-blur-2xl'>
                {/* Window Header */}
                <div className='flex items-center justify-between pb-4 border-b border-white/10 mb-5'>
                  <div className='flex items-center gap-2'>
                    <div className='h-3 w-3 rounded-full bg-rose-500/80' />
                    <div className='h-3 w-3 rounded-full bg-amber-500/80' />
                    <div className='h-3 w-3 rounded-full bg-emerald-500/80' />
                    <span className='ml-2 text-xs font-mono text-slate-400'>edusphere.app/admin/dashboard</span>
                  </div>
                  <div className='flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full text-xs font-medium text-emerald-400'>
                    <span className='h-2 w-2 rounded-full bg-emerald-400 animate-pulse' />
                    Live System
                  </div>
                </div>

                {/* Dashboard Key Metrics */}
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5'>
                  <div className='rounded-xl border border-white/5 bg-white/[0.03] p-3'>
                    <div className='text-[11px] font-medium text-slate-400'>Active Students</div>
                    <div className='text-lg font-bold text-white mt-1'>1,428</div>
                    <div className='text-[10px] font-medium text-emerald-400 mt-0.5'>↑ +12.4% this mo</div>
                  </div>
                  <div className='rounded-xl border border-white/5 bg-white/[0.03] p-3'>
                    <div className='text-[11px] font-medium text-slate-400'>Monthly Tuition</div>
                    <div className='text-lg font-bold text-emerald-400 mt-1'>$48,920</div>
                    <div className='text-[10px] font-medium text-emerald-400 mt-0.5'>98% collected</div>
                  </div>
                  <div className='rounded-xl border border-white/5 bg-white/[0.03] p-3'>
                    <div className='text-[11px] font-medium text-slate-400'>New Leads CRM</div>
                    <div className='text-lg font-bold text-amber-400 mt-1'>184</div>
                    <div className='text-[10px] font-medium text-amber-300 mt-0.5'>32 ready to enroll</div>
                  </div>
                  <div className='rounded-xl border border-white/5 bg-white/[0.03] p-3'>
                    <div className='text-[11px] font-medium text-slate-400'>Attendance Today</div>
                    <div className='text-lg font-bold text-violet-400 mt-1'>96.8%</div>
                    <div className='text-[10px] font-medium text-slate-400 mt-0.5'>QR check-in active</div>
                  </div>
                </div>

                {/* Simulated Chart & Recent Activity */}
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4'>
                  <div className='sm:col-span-2 rounded-xl border border-white/5 bg-white/[0.03] p-4'>
                    <div className='flex items-center justify-between text-xs mb-3'>
                      <span className='font-semibold text-slate-200'>Revenue &amp; Debtors Overview</span>
                      <span className='text-slate-400'>June 2024</span>
                    </div>
                    {/* SVG Chart Graphic */}
                    <div className='h-28 w-full flex items-end gap-1.5 pt-2 border-b border-white/10 pb-1'>
                      {[40, 55, 65, 50, 75, 85, 95, 70, 90, 100, 110, 125].map((h, idx) => (
                        <div key={idx} className='flex-1 flex flex-col items-center gap-1 group/bar relative'>
                          <div
                            style={{ height: `${h}%` }}
                            className={`w-full rounded-t-md transition-all duration-300 ${
                              idx === 11
                                ? 'bg-gradient-to-t from-violet-600 to-cyan-400 shadow-md shadow-cyan-400/30'
                                : 'bg-violet-500/30 group-hover/bar:bg-violet-500/60'
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                    <div className='flex justify-between text-[10px] text-slate-400 pt-2'>
                      <span>Jan</span>
                      <span>Mar</span>
                      <span>May</span>
                      <span>Jul</span>
                      <span>Sep</span>
                      <span>Current</span>
                    </div>
                  </div>

                  {/* Live Activity Feed */}
                  <div className='rounded-xl border border-white/5 bg-white/[0.03] p-3.5 space-y-2.5'>
                    <div className='text-xs font-semibold text-slate-200 mb-1'>Live Branch Stream</div>

                    <div className='flex items-center justify-between text-[11px] bg-white/[0.02] p-2 rounded-lg border border-white/5'>
                      <div className='flex items-center gap-2'>
                        <span className='h-2 w-2 rounded-full bg-emerald-400' />
                        <span className='text-slate-300'>Tuition Paid ($120)</span>
                      </div>
                      <span className='text-[10px] text-slate-400'>1m ago</span>
                    </div>

                    <div className='flex items-center justify-between text-[11px] bg-white/[0.02] p-2 rounded-lg border border-white/5'>
                      <div className='flex items-center gap-2'>
                        <span className='h-2 w-2 rounded-full bg-violet-400' />
                        <span className='text-slate-300'>QR Check-In #492</span>
                      </div>
                      <span className='text-[10px] text-slate-400'>3m ago</span>
                    </div>

                    <div className='flex items-center justify-between text-[11px] bg-white/[0.02] p-2 rounded-lg border border-white/5'>
                      <div className='flex items-center gap-2'>
                        <span className='h-2 w-2 rounded-full bg-amber-400' />
                        <span className='text-slate-300'>New Lead from IG</span>
                      </div>
                      <span className='text-[10px] text-slate-400'>5m ago</span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className='absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 rounded-2xl border border-white/15 bg-[#14172c] p-3.5 shadow-2xl backdrop-blur-xl'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'>
                    <Bell className='h-5 w-5 animate-bounce' />
                  </div>
                  <div>
                    <div className='text-xs font-bold text-white'>Automated Parent SMS</div>
                    <div className='text-[11px] text-slate-400'>“Your child entered class at 14:00”</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS & TRUST STRIP ================= */}
      <section className='border-y border-white/10 bg-[#0a0c1a]/60 py-12 backdrop-blur-md'>
        <div className='mx-auto max-w-7xl px-6'>
          {/* Stats Grid */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-center'>
            {STATS_DATA.map((stat, idx) => (
              <div key={idx} className='space-y-1'>
                <div className='text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-transparent'>
                  {stat.value}
                </div>
                <div className='text-sm font-semibold text-slate-200'>{stat.label}</div>
                <div className='text-xs text-slate-400'>{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Trusted Institutions Marquee */}
          <div className='pt-6 border-t border-white/5'>
            <p className='text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6'>
              Trusted by 350+ Leading Educational Centers &amp; Academies
            </p>
            <div className='flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70'>
              {PARTNER_LOGOS.map((partner, idx) => (
                <div key={idx} className='flex items-center gap-2 text-sm font-semibold text-slate-300 hover:opacity-100 transition-opacity'>
                  <Building2 className='h-4 w-4 text-violet-400' />
                  <span>{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM VS SOLUTION ================= */}
      <section id='comparison' className='py-24 relative'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='text-center max-w-3xl mx-auto mb-16 space-y-4'>
            <div className='inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold text-rose-300'>
              <XCircle className='h-4 w-4 text-rose-400' />
              <span>Stop Chaos in Excel &amp; Telegram</span>
            </div>
            <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
              Why traditional management tools are costlier than you think
            </h2>
            <p className='text-slate-400 text-base'>
              Managing a learning center on paper or disjointed apps causes uncollected debts, lost leads, parent complaints, and administrative burnout.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch'>
            {/* The Old Way */}
            <div className='rounded-2xl border border-rose-500/20 bg-rose-950/10 p-8 space-y-6 relative overflow-hidden'>
              <div className='flex items-center justify-between border-b border-rose-500/20 pb-4'>
                <h3 className='text-xl font-bold text-rose-300 flex items-center gap-2'>
                  <XCircle className='h-6 w-6 text-rose-400' />
                  The Old Way (Excel, Papers &amp; Chat)
                </h3>
                <span className='text-xs font-semibold bg-rose-500/20 text-rose-300 px-3 py-1 rounded-full border border-rose-500/30'>
                  High Risk &amp; Loss
                </span>
              </div>

              <div className='space-y-4'>
                {OLD_VS_NEW.map((item, idx) => (
                  <div key={idx} className='flex items-start gap-3 p-3 rounded-xl bg-rose-500/[0.03] border border-rose-500/10'>
                    <XCircle className='h-5 w-5 text-rose-400 shrink-0 mt-0.5' />
                    <div>
                      <div className='text-sm font-semibold text-rose-200'>{item.category}</div>
                      <div className='text-xs text-slate-400 mt-1 leading-relaxed'>{item.oldWay}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The EduSphere Way */}
            <div className='rounded-2xl border border-emerald-500/30 bg-emerald-950/10 p-8 space-y-6 relative overflow-hidden shadow-2xl shadow-emerald-950/30'>
              <div className='flex items-center justify-between border-b border-emerald-500/20 pb-4'>
                <h3 className='text-xl font-bold text-emerald-300 flex items-center gap-2'>
                  <CheckCircle2 className='h-6 w-6 text-emerald-400' />
                  The EduSphere Solution
                </h3>
                <span className='text-xs font-semibold bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30'>
                  100% Automated
                </span>
              </div>

              <div className='space-y-4'>
                {OLD_VS_NEW.map((item, idx) => (
                  <div key={idx} className='flex items-start gap-3 p-3 rounded-xl bg-emerald-500/[0.05] border border-emerald-500/20'>
                    <CheckCircle2 className='h-5 w-5 text-emerald-400 shrink-0 mt-0.5' />
                    <div>
                      <div className='text-sm font-semibold text-emerald-200'>{item.category}</div>
                      <div className='text-xs text-slate-300 mt-1 leading-relaxed'>{item.newWay}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE MODULES BY ROLE ================= */}
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

            {/* Role Filter Tabs */}
            <div className='flex flex-wrap gap-2 bg-[#121427] p-1.5 rounded-full border border-white/10'>
              {[
                { id: 'all' as RoleFilter, label: 'All Modules' },
                { id: 'admin' as RoleFilter, label: 'Admin & Owners' },
                { id: 'sales' as RoleFilter, label: 'CRM & Sales' },
                { id: 'teacher' as RoleFilter, label: 'Teachers' },
                { id: 'student' as RoleFilter, label: 'Students & Parents' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setRoleFilter(tab.id)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    roleFilter === tab.id
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
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

                  <div className='mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-violet-400 group-hover:text-violet-300 cursor-pointer'>
                    <span onClick={() => setIsDemoModalOpen(true)}>Request live demo of this module</span>
                    <ArrowRight className='h-4 w-4 group-hover:translate-x-1 transition-transform' />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= PLATFORM INTERACTIVE TOUR ================= */}
      <section id='tour' className='py-24 relative overflow-hidden'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='text-center max-w-3xl mx-auto mb-16 space-y-4'>
            <div className='inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300'>
              <BarChart3 className='h-4 w-4 text-cyan-400' />
              <span>Interactive Workflow</span>
            </div>
            <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
              Take a closer look inside the platform
            </h2>
            <p className='text-slate-400 text-base'>
              Click through the core workflows to experience how EduSphere simplifies daily management for learning centers.
            </p>
          </div>

          {/* Tabs */}
          <div className='flex flex-wrap items-center justify-center gap-3 mb-10'>
            {TOUR_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTourTab(tab.id)}
                className={`rounded-xl px-5 py-3 text-sm font-semibold transition-all border ${
                  activeTourTab === tab.id
                    ? 'border-violet-500 bg-violet-600/20 text-white shadow-lg shadow-violet-600/20'
                    : 'border-white/10 bg-[#0e1022] text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Workflow Card */}
          <div className='rounded-2xl border border-white/15 bg-[#0d0f20] p-6 md:p-10 shadow-2xl relative overflow-hidden'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
              <div className='lg:col-span-5 space-y-6'>
                <span className='inline-block text-xs font-bold uppercase tracking-wider text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20'>
                  {currentTourData.label} Module
                </span>

                <h3 className='text-2xl sm:text-3xl font-bold text-white'>{currentTourData.title}</h3>

                <p className='text-slate-300 text-sm leading-relaxed'>{currentTourData.desc}</p>

                <div className='grid grid-cols-3 gap-3 pt-4 border-t border-white/10'>
                  {currentTourData.metrics.map((m, idx) => (
                    <div key={idx} className='bg-white/[0.03] p-3 rounded-xl border border-white/5'>
                      <div className='text-[10px] text-slate-400 font-medium'>{m.label}</div>
                      <div className='text-sm sm:text-base font-bold text-white mt-1'>{m.val}</div>
                      <div className='text-[10px] text-emerald-400 font-semibold mt-0.5'>{m.trend}</div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className='inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 hover:scale-[1.02] transition-all'
                >
                  <span>See Full Demo in Action</span>
                  <ArrowRight className='h-4 w-4' />
                </button>
              </div>

              {/* Graphical Preview Window */}
              <div className='lg:col-span-7 bg-[#070812] rounded-xl border border-white/10 p-5 space-y-4 shadow-inner'>
                <div className='flex items-center justify-between border-b border-white/10 pb-3'>
                  <div className='flex items-center gap-2 text-xs font-mono text-slate-400'>
                    <div className='h-2.5 w-2.5 rounded-full bg-violet-400' />
                    Live Interface: {currentTourData.label} Screen
                  </div>
                  <span className='text-[10px] bg-white/10 text-slate-300 px-2 py-0.5 rounded'>100% Synced</span>
                </div>

                {activeTourTab === 'crm' && (
                  <div className='grid grid-cols-3 gap-3 pt-2'>
                    <div className='bg-white/[0.03] p-3 rounded-lg border border-white/5 space-y-2'>
                      <div className='text-[11px] font-bold text-amber-400 uppercase'>New Leads (12)</div>
                      <div className='bg-[#13162a] p-2 rounded text-xs border border-white/5 space-y-1'>
                        <div className='font-semibold text-white'>Anvar K.</div>
                        <div className='text-[10px] text-slate-400'>Interested: General English</div>
                        <span className='inline-block text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded'>From Instagram</span>
                      </div>
                      <div className='bg-[#13162a] p-2 rounded text-xs border border-white/5 space-y-1'>
                        <div className='font-semibold text-white'>Malika S.</div>
                        <div className='text-[10px] text-slate-400'>Interested: IELTS Intensive</div>
                        <span className='inline-block text-[9px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded'>From Website</span>
                      </div>
                    </div>

                    <div className='bg-white/[0.03] p-3 rounded-lg border border-white/5 space-y-2'>
                      <div className='text-[11px] font-bold text-violet-400 uppercase'>Trial Scheduled (8)</div>
                      <div className='bg-[#13162a] p-2 rounded text-xs border border-white/5 space-y-1'>
                        <div className='font-semibold text-white'>Rustam T.</div>
                        <div className='text-[10px] text-slate-400'>Trial: Tomorrow 15:00</div>
                        <span className='inline-block text-[9px] bg-violet-500/20 text-violet-300 px-1.5 py-0.5 rounded'>SMS Sent</span>
                      </div>
                    </div>

                    <div className='bg-white/[0.03] p-3 rounded-lg border border-white/5 space-y-2'>
                      <div className='text-[11px] font-bold text-emerald-400 uppercase'>Enrolled Today (5)</div>
                      <div className='bg-[#13162a] p-2 rounded text-xs border border-emerald-500/20 space-y-1'>
                        <div className='font-semibold text-emerald-300'>Shahzod B.</div>
                        <div className='text-[10px] text-slate-400'>Tuition Paid: $150</div>
                        <span className='inline-block text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded'>Contract Signed</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTourTab === 'attendance' && (
                  <div className='space-y-3 pt-2'>
                    <div className='flex items-center justify-between bg-white/[0.03] p-3 rounded-lg border border-white/5'>
                      <div className='flex items-center gap-3'>
                        <div className='h-10 w-10 rounded-full bg-violet-600/30 flex items-center justify-center text-violet-300 font-bold'>
                          QR
                        </div>
                        <div>
                          <div className='text-xs font-bold text-white'>Kamila Y. — IELTS Group #4</div>
                          <div className='text-[10px] text-slate-400'>Scanned Pass ID: #884192</div>
                        </div>
                      </div>
                      <span className='text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20'>
                        Checked In 14:02
                      </span>
                    </div>

                    <div className='bg-violet-950/20 border border-violet-500/20 p-3 rounded-lg text-xs space-y-1'>
                      <div className='font-semibold text-violet-300 flex items-center gap-1.5'>
                        <Bell className='h-3.5 w-3.5 text-violet-400' /> Auto Parent Notification Sent:
                      </div>
                      <div className='text-slate-300 italic text-[11px] bg-black/40 p-2 rounded'>
                        “Dear parent, Kamila checked in at Bright Academy branch #1 at 14:02.”
                      </div>
                    </div>
                  </div>
                )}

                {activeTourTab === 'payments' && (
                  <div className='space-y-3 pt-2'>
                    <div className='grid grid-cols-2 gap-3'>
                      <div className='bg-white/[0.03] p-3 rounded-lg border border-white/5'>
                        <div className='text-[10px] text-slate-400'>Tuition Collected (June)</div>
                        <div className='text-xl font-bold text-emerald-400 mt-1'>$42,850</div>
                        <div className='text-[10px] text-slate-400 mt-0.5'>890 Students Paid</div>
                      </div>
                      <div className='bg-white/[0.03] p-3 rounded-lg border border-white/5'>
                        <div className='text-[10px] text-slate-400'>Overdue Debts</div>
                        <div className='text-xl font-bold text-rose-400 mt-1'>$1,120</div>
                        <div className='text-[10px] text-slate-400 mt-0.5'>Auto SMS Reminder Active</div>
                      </div>
                    </div>
                    <div className='bg-white/[0.02] p-3 rounded-lg border border-white/5 text-xs space-y-2'>
                      <div className='flex justify-between font-semibold text-slate-200'>
                        <span>Recent Online Payments</span>
                        <span className='text-violet-400'>View All Receipts</span>
                      </div>
                      <div className='flex justify-between text-[11px] text-slate-400 border-t border-white/5 pt-1.5'>
                        <span>Student: Sardor M.</span>
                        <span className='text-emerald-400 font-bold'>+$120 (Payme)</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTourTab === 'app' && (
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2'>
                    <div className='bg-white/[0.03] p-3 rounded-lg border border-white/5 space-y-2'>
                      <div className='text-xs font-bold text-slate-200'>Parent App Home Screen</div>
                      <div className='bg-[#111326] p-3 rounded-lg space-y-1.5 text-[11px]'>
                        <div className='flex justify-between font-semibold text-white'>
                          <span>Student: Jasur (9th Grade)</span>
                          <span className='text-emerald-400'>98% Attendance</span>
                        </div>
                        <div className='text-[10px] text-slate-400'>Latest Homework Score: 95/100 (IELTS Listening)</div>
                        <div className='mt-2 bg-violet-600/20 text-violet-300 p-2 rounded text-[10px] border border-violet-500/20'>
                          Teacher Note: “Jasur showed great improvement in speaking fluency today!”
                        </div>
                      </div>
                    </div>
                    <div className='bg-white/[0.03] p-3 rounded-lg border border-white/5 space-y-2'>
                      <div className='text-xs font-bold text-slate-200'>1-Click Tuition Payment</div>
                      <div className='bg-[#111326] p-3 rounded-lg space-y-2 text-[11px] text-center'>
                        <div className='text-slate-400'>Next Month Tuition Due: July 1</div>
                        <div className='text-base font-bold text-white'>$120.00</div>
                        <button className='w-full bg-emerald-600 text-white font-semibold py-1.5 rounded-lg text-xs'>
                          Pay via Card / Gateway
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE ROI & SAVINGS CALCULATOR ================= */}
      <section id='roi' className='py-24 bg-[#0a0c1a]/80 border-y border-white/10 relative'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
            {/* Left Column: Calculator Inputs */}
            <div className='lg:col-span-6 space-y-6'>
              <div className='inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-300'>
                <Calculator className='h-4 w-4 text-amber-400' />
                <span>Interactive Savings Estimator</span>
              </div>

              <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
                Calculate how much time &amp; money EduSphere will save you
              </h2>

              <p className='text-slate-400 text-sm leading-relaxed'>
                Adjust your center’s numbers to see estimated weekly hours saved on manual admin work, uncollected tuition recovered, and recovered leads.
              </p>

              {/* Slider 1: Student Count */}
              <div className='space-y-2 bg-[#101225] p-5 rounded-2xl border border-white/10'>
                <div className='flex justify-between items-center text-sm font-semibold'>
                  <span className='text-slate-300'>Total Active Students</span>
                  <span className='text-violet-400 text-lg font-bold'>{studentCount} Students</span>
                </div>
                <input
                  type='range'
                  min='50'
                  max='2000'
                  step='25'
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className='w-full accent-violet-500 cursor-pointer h-2 bg-slate-800 rounded-lg'
                />
                <div className='flex justify-between text-[10px] text-slate-500 font-mono'>
                  <span>50</span>
                  <span>500</span>
                  <span>1,000</span>
                  <span>2,000+</span>
                </div>
              </div>

              {/* Slider 2: Branch Count */}
              <div className='space-y-2 bg-[#101225] p-5 rounded-2xl border border-white/10'>
                <div className='flex justify-between items-center text-sm font-semibold'>
                  <span className='text-slate-300'>Number of Branches</span>
                  <span className='text-cyan-400 text-lg font-bold'>{branchCount} Branches</span>
                </div>
                <input
                  type='range'
                  min='1'
                  max='15'
                  step='1'
                  value={branchCount}
                  onChange={(e) => setBranchCount(Number(e.target.value))}
                  className='w-full accent-cyan-500 cursor-pointer h-2 bg-slate-800 rounded-lg'
                />
                <div className='flex justify-between text-[10px] text-slate-500 font-mono'>
                  <span>1 Single Branch</span>
                  <span>5 Branches</span>
                  <span>15+ Franchise</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Results Display */}
            <div className='lg:col-span-6'>
              <div className='rounded-3xl border border-violet-500/30 bg-gradient-to-br from-[#12142d] via-[#0f1126] to-[#181230] p-8 shadow-2xl space-y-8 relative overflow-hidden'>
                <div className='absolute top-0 right-0 p-8 opacity-10 pointer-events-none'>
                  <Calculator className='h-48 w-48 text-violet-400' />
                </div>

                <div className='border-b border-white/10 pb-4'>
                  <div className='text-xs font-semibold uppercase tracking-wider text-violet-300'>Estimated Monthly ROI</div>
                  <div className='text-3xl sm:text-5xl font-extrabold text-white mt-2'>
                    ${estimatedMoneySavedMonthly.toLocaleString()}{' '}
                    <span className='text-sm font-normal text-slate-400'>/ month saved</span>
                  </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div className='bg-white/[0.03] p-4 rounded-xl border border-white/10 space-y-1'>
                    <div className='flex items-center gap-2 text-xs text-slate-400 font-medium'>
                      <Clock className='h-4 w-4 text-cyan-400' /> Admin Time Saved
                    </div>
                    <div className='text-2xl font-bold text-white'>{hoursSavedPerWeek} Hours</div>
                    <div className='text-[11px] text-slate-400'>Per week in manual work</div>
                  </div>

                  <div className='bg-white/[0.03] p-4 rounded-xl border border-white/10 space-y-1'>
                    <div className='flex items-center gap-2 text-xs text-slate-400 font-medium'>
                      <UserCheck className='h-4 w-4 text-emerald-400' /> Recovered Leads
                    </div>
                    <div className='text-2xl font-bold text-white'>+{lostLeadsRecovered} Students</div>
                    <div className='text-[11px] text-slate-400'>Via CRM follow-ups</div>
                  </div>
                </div>

                <div className='pt-2'>
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className='w-full rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 py-4 text-center font-bold text-white shadow-xl shadow-violet-600/30 hover:opacity-95 transition-all'
                  >
                    Start Saving Now — Request Custom Audit
                  </button>
                  <p className='text-center text-[11px] text-slate-400 mt-3'>
                    Based on real customer benchmarks across 350+ learning centers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS / CASE STUDIES ================= */}
      <section className='py-24 relative'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='text-center max-w-3xl mx-auto mb-16 space-y-4'>
            <div className='inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-300'>
              <Award className='h-4 w-4 text-amber-400' />
              <span>Proven Results</span>
            </div>
            <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
              Loved by learning center directors &amp; founders
            </h2>
            <p className='text-slate-400 text-base'>
              Hear how leaders transformed their educational operations, student retention, and revenue with EduSphere.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className='rounded-2xl border border-white/10 bg-[#0e1022] p-8 flex flex-col justify-between space-y-6 hover:border-violet-500/40 transition-all'
              >
                <div className='space-y-4'>
                  {/* Rating */}
                  <div className='flex items-center gap-1 text-amber-400'>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className='h-4 w-4 fill-amber-400' />
                    ))}
                  </div>

                  <p className='text-slate-300 text-sm leading-relaxed italic'>“{t.quote}”</p>
                </div>

                <div className='pt-6 border-t border-white/10 space-y-4'>
                  <div className='inline-block rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-400'>
                    {t.stats}
                  </div>

                  <div className='flex items-center gap-3'>
                    <Image
                      src={t.image}
                      alt={t.author}
                      width={44}
                      height={44}
                      className='h-11 w-11 rounded-full object-cover border border-violet-500/30'
                    />
                    <div>
                      <div className='text-sm font-bold text-white'>{t.author}</div>
                      <div className='text-xs text-slate-400'>{t.role}</div>
                      <div className='text-[11px] text-violet-400 font-medium'>{t.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING CALCULATOR & PLANS ================= */}
      <section id='pricing' className='py-24 bg-[#0a0c1a]/90 border-y border-white/10 relative'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='text-center max-w-3xl mx-auto mb-12 space-y-4'>
            <div className='inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300'>
              <DollarSign className='h-4 w-4 text-emerald-400' />
              <span>Transparent Pricing</span>
            </div>
            <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
              Simple plans for centers of all sizes
            </h2>
            <p className='text-slate-400 text-base'>
              No hidden setup fees. Upgrade or adjust your branch plan anytime as you grow.
            </p>

            {/* Monthly / Annual Toggle */}
            <div className='pt-4 inline-flex items-center gap-3 bg-[#121428] p-1.5 rounded-full border border-white/10'>
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                  billingCycle === 'monthly' ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  billingCycle === 'annual' ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Annual Billing</span>
                <span className='rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold'>
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch'>
            {PRICING_PLANS.map((plan, idx) => {
              const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice
              return (
                <div
                  key={idx}
                  className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${
                    plan.highlight
                      ? 'border-2 border-violet-500 bg-gradient-to-b from-[#151733] to-[#0e1022] shadow-2xl shadow-violet-600/20 scale-105'
                      : 'border border-white/10 bg-[#0e1022] hover:border-white/20'
                  }`}
                >
                  {plan.highlight && (
                    <div className='absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg'>
                      Most Popular Plan
                    </div>
                  )}

                  <div className='space-y-6'>
                    <div>
                      <h3 className='text-2xl font-bold text-white'>{plan.name}</h3>
                      <p className='text-xs text-slate-400 mt-2 leading-relaxed'>{plan.desc}</p>
                    </div>

                    <div className='border-y border-white/10 py-4 space-y-1'>
                      <div className='flex items-baseline gap-1'>
                        <span className='text-4xl sm:text-5xl font-extrabold text-white'>${price}</span>
                        <span className='text-xs text-slate-400 font-medium'>/ month per branch</span>
                      </div>
                      <div className='text-xs text-violet-400 font-semibold'>
                        {plan.studentsLimit} • {plan.branchesLimit}
                      </div>
                    </div>

                    <div className='space-y-3'>
                      <div className='text-xs font-bold uppercase tracking-wider text-slate-300'>Included Features:</div>
                      {plan.features.map((feat, i) => (
                        <div key={i} className='flex items-start gap-2.5 text-xs text-slate-300'>
                          <CheckCircle2 className='h-4 w-4 text-emerald-400 shrink-0 mt-0.5' />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='mt-8 pt-6 border-t border-white/10'>
                    <button
                      onClick={() => setIsDemoModalOpen(true)}
                      className={`w-full rounded-2xl py-3.5 text-center text-sm font-bold transition-all ${
                        plan.highlight
                          ? 'bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-violet-600/30 hover:opacity-95'
                          : 'bg-white/10 border border-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section id='faq' className='py-24 relative'>
        <div className='mx-auto max-w-5xl px-6'>
          <div className='text-center max-w-2xl mx-auto mb-16 space-y-4'>
            <div className='inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300'>
              <HelpCircle className='h-4 w-4 text-violet-400' />
              <span>Got Questions?</span>
            </div>
            <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
              Frequently Asked Questions
            </h2>
            <p className='text-slate-400 text-base'>
              Everything you need to know about setting up EduSphere in your learning center.
            </p>
          </div>

          <div className='space-y-4'>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className='rounded-2xl border border-white/10 bg-[#0e1022] overflow-hidden transition-all'
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className='w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none'
                  >
                    <span className='text-base font-semibold text-white'>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 text-violet-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className='px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4'>
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA BANNER ================= */}
      <section className='py-20 relative overflow-hidden'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='relative rounded-3xl border border-violet-500/40 bg-gradient-to-r from-violet-900/60 via-indigo-900/60 to-slate-900/80 p-10 md:p-16 text-center space-y-6 shadow-2xl overflow-hidden backdrop-blur-xl'>
            <div className='pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-violet-500/30 blur-[100px]' />

            <h2 className='text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight'>
              Ready to transform your learning center operations?
            </h2>

            <p className='text-slate-300 text-base max-w-2xl mx-auto'>
              Join 350+ modern education centers today. Get a customized demo and see how EduSphere can eliminate chaos and boost your revenue.
            </p>

            <div className='flex flex-wrap items-center justify-center gap-4 pt-4'>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className='rounded-full bg-white px-8 py-4 text-base font-bold text-slate-950 shadow-2xl hover:bg-slate-100 transition-all active:scale-95'
              >
                Book Your Live Demo Now
              </button>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className='rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white hover:bg-white/20 transition-all backdrop-blur-md'
              >
                Start 14-Day Free Trial
              </button>
            </div>

            <p className='text-xs text-slate-400 pt-2'>No credit card required • Instant setup • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className='border-t border-white/10 bg-[#05060c] py-16 text-slate-400 text-sm'>
        <div className='mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-5 gap-10'>
          {/* Brand Col */}
          <div className='md:col-span-2 space-y-4'>
            <div className='flex items-center gap-3'>
              <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 text-white font-bold'>
                <GraduationCap className='h-5 w-5' />
              </div>
              <span className='text-xl font-bold text-white tracking-tight'>EduSphere</span>
            </div>

            <p className='text-xs text-slate-400 leading-relaxed max-w-sm'>
              The all-in-one ERP &amp; CRM management operating system built for modern learning centers, tutoring hubs, and language academies.
            </p>

            <div className='flex items-center gap-3 pt-2 text-xs text-slate-500'>
              <ShieldCheck className='h-4 w-4 text-emerald-400' />
              <span>SOC2 Compliant &amp; Bank-Grade Data Encryption</span>
            </div>
          </div>

          {/* Product Links */}
          <div className='space-y-3'>
            <div className='text-xs font-bold uppercase tracking-wider text-white'>Modules</div>
            <ul className='space-y-2 text-xs'>
              <li><a href='#features' className='hover:text-white transition-colors'>Lead CRM Pipeline</a></li>
              <li><a href='#features' className='hover:text-white transition-colors'>QR Attendance</a></li>
              <li><a href='#features' className='hover:text-white transition-colors'>Tuition &amp; Debt Control</a></li>
              <li><a href='#features' className='hover:text-white transition-colors'>Parent &amp; Student App</a></li>
              <li><a href='#features' className='hover:text-white transition-colors'>LMS &amp; Online Homework</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className='space-y-3'>
            <div className='text-xs font-bold uppercase tracking-wider text-white'>Solutions For</div>
            <ul className='space-y-2 text-xs'>
              <li><a href='#' className='hover:text-white transition-colors'>Language Centers</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>IT &amp; Coding Academies</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>IELTS &amp; Test Prep Studios</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>Multi-Branch Franchises</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>Kids &amp; STEM Schools</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className='space-y-3'>
            <div className='text-xs font-bold uppercase tracking-wider text-white'>Get in Touch</div>
            <p className='text-xs text-slate-400'>Need help selecting a plan?</p>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className='inline-flex items-center gap-2 rounded-lg bg-violet-600/20 border border-violet-500/30 px-3 py-2 text-xs font-semibold text-violet-300 hover:bg-violet-600 hover:text-white transition-all'
            >
              <MessageSquare className='h-3.5 w-3.5' /> Contact Product Team
            </button>
          </div>
        </div>

        <div className='mx-auto max-w-7xl px-6 pt-12 mt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4'>
          <div>© {new Date().getFullYear()} EduSphere Inc. All rights reserved.</div>
          <div className='flex gap-6'>
            <a href='#' className='hover:text-slate-300'>Privacy Policy</a>
            <a href='#' className='hover:text-slate-300'>Terms of Service</a>
            <a href='#' className='hover:text-slate-300'>Security</a>
          </div>
        </div>
      </footer>

      {/* ================= DEMO REQUEST MODAL ================= */}
      {isDemoModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200'>
          <div className='relative w-full max-w-lg rounded-3xl border border-white/15 bg-[#101226] p-6 sm:p-8 shadow-2xl space-y-6'>
            <button
              onClick={() => setIsDemoModalOpen(false)}
              className='absolute top-5 right-5 text-slate-400 hover:text-white p-1'
            >
              <X className='h-5 w-5' />
            </button>

            {demoSubmitted ? (
              <div className='py-8 text-center space-y-4'>
                <div className='h-16 w-16 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto'>
                  <CheckCircle2 className='h-8 w-8' />
                </div>
                <h3 className='text-2xl font-bold text-white'>Demo Request Received!</h3>
                <p className='text-xs text-slate-300 leading-relaxed max-w-sm mx-auto'>
                  Thank you! Our education systems specialist will reach out to you via phone/WhatsApp within 15 minutes to schedule your live walkthrough.
                </p>
              </div>
            ) : (
              <>
                <div className='space-y-2'>
                  <div className='inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 px-3 py-1 text-[11px] font-semibold text-violet-300'>
                    <Sparkles className='h-3 w-3 text-amber-300' /> Free 1-on-1 Personalized Walkthrough
                  </div>
                  <h3 className='text-2xl font-bold text-white'>Book a Demo for Your Center</h3>
                  <p className='text-xs text-slate-400'>
                    See how EduSphere fits your learning center’s exact workflow &amp; branch structure.
                  </p>
                </div>

                <form onSubmit={handleDemoSubmit} className='space-y-4'>
                  <div>
                    <label className='block text-xs font-semibold text-slate-300 mb-1'>Your Full Name</label>
                    <input
                      type='text'
                      required
                      placeholder='e.g., Akmal Umarov'
                      value={demoForm.name}
                      onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                      className='w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none'
                    />
                  </div>

                  <div>
                    <label className='block text-xs font-semibold text-slate-300 mb-1'>Phone / WhatsApp Number</label>
                    <input
                      type='tel'
                      required
                      placeholder='+998 90 123 45 67'
                      value={demoForm.phone}
                      onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                      className='w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none'
                    />
                  </div>

                  <div>
                    <label className='block text-xs font-semibold text-slate-300 mb-1'>Learning Center Name</label>
                    <input
                      type='text'
                      required
                      placeholder='e.g., Cambridge Education'
                      value={demoForm.centerName}
                      onChange={(e) => setDemoForm({ ...demoForm, centerName: e.target.value })}
                      className='w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none'
                    />
                  </div>

                  <div>
                    <label className='block text-xs font-semibold text-slate-300 mb-1'>Number of Active Students</label>
                    <select
                      value={demoForm.studentsCount}
                      onChange={(e) => setDemoForm({ ...demoForm, studentsCount: e.target.value })}
                      className='w-full rounded-xl border border-white/10 bg-[#121428] px-4 py-2.5 text-xs text-white focus:border-violet-500 focus:outline-none'
                    >
                      <option value='Under 100'>Under 100 Students</option>
                      <option value='100-300'>100 - 300 Students</option>
                      <option value='300-800'>300 - 800 Students</option>
                      <option value='800+'>800+ Students (Multi-Branch)</option>
                    </select>
                  </div>

                  <button
                    type='submit'
                    className='w-full rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 py-3 text-xs font-bold text-white shadow-lg shadow-violet-600/30 hover:opacity-95 transition-all'
                  >
                    Confirm Demo Request
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
