import { DemoModalProvider } from '@/context/DemoModalContext'
import { Navbar } from '@/components/landing/Navbar'
import { HeroSection } from '@/components/landing/HeroSection'
import { StatsSection } from '@/components/landing/StatsSection'
import { ComparisonSection } from '@/components/landing/ComparisonSection'
import { FeatureModulesSection } from '@/components/landing/FeatureModulesSection'
import { PlatformTourSection } from '@/components/landing/PlatformTourSection'
import { RoiCalculatorSection } from '@/components/landing/RoiCalculatorSection'
import { TestimonialsSection } from '@/components/landing/TestimonialsSection'
import { PricingSection } from '@/components/landing/PricingSection'
import { FaqSection } from '@/components/landing/FaqSection'
import { CtaSection } from '@/components/landing/CtaSection'
import { Footer } from '@/components/landing/Footer'
import { DemoModal } from '@/components/landing/DemoModal'

export default function Home() {
  return (
    <DemoModalProvider>
      <div className='min-h-screen bg-slate-50 dark:bg-[#07080e] text-slate-800 dark:text-slate-100 font-sans selection:bg-violet-500 selection:text-white relative overflow-x-hidden transition-colors duration-200'>
        <Navbar />
        <main>
          <HeroSection />
          <StatsSection />
          <ComparisonSection />
          <FeatureModulesSection />
          <PlatformTourSection />
          <RoiCalculatorSection />
          <TestimonialsSection />
          <PricingSection />
          <FaqSection />
          <CtaSection />
        </main>
        <Footer />
        <DemoModal />
      </div>
    </DemoModalProvider>
  )
}
