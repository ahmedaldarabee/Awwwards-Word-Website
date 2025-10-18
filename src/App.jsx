import React from 'react'
import NavBar from './components/Navbar/NavBar'
import HeroSection from './sections/Hero/HeroSection'
import gsap from 'gsap'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import MessageSection from './sections/Messages/MessageSection'
import FlavorSection from './sections/FlavorSection/FlavorSection'
import { useGSAP } from '@gsap/react'
import NutrationSection from './sections/Nutration/NutrationSection'
import BenefitSection from './sections/Benefits/BenefitSection'
import TestimonialSection from './sections/Testimonial/TestimonialSection'
import FooterSection from './sections/Footer/FooterSection'

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

function App() {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth:3,
      effects:true,
    })
  })

    return (
      <main >
        <NavBar />
        <div id='smooth-wrapper'>
            <div id='smooth-content'>
              <HeroSection/>
              <MessageSection/>
              <FlavorSection/>
              <NutrationSection/>
              <div>
                  <BenefitSection/>
                  <TestimonialSection/>
              </div>
              <FooterSection />
            </div>
        </div>
      </main>
    )
}

export default App
