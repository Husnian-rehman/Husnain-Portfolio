import React from 'react'
import FeatureCards from '../components/FeatureCards'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import Testimonial from '../components/testimonial'
function Home() {
  return (
   <div>
    <Hero />
   <FeatureCards />
   <AboutMe />
   <Experience />
   <Testimonial />
   </div>
  )
}

export default Home