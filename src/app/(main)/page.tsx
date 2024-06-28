import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'

  
export default function Home() {
  return (
    <>
      <Hero />
      <Schedule />
      <Speakers />
      <Sponsors />
      <Pricing />
    </>
  )
}

