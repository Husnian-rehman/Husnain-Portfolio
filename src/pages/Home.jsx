import React from 'react'
import FeatureCards from '../components/FeatureCards'
import AboutMe from '../components/AboutMe'
// import Experience from '../components/Experience'
// import Hero from '../components/Hero'
import Testimonial from '../components/testimonial'
import Coursetabs from '../components/ProjectsTabs'
import Hero1 from '../components/Hero1'
import Contact from '../components/Contact'
function Home() {
  return (
   <div className='bg-primary'>
    <Hero1 />
    {/* <Hero /> */}
   <FeatureCards />
   <AboutMe />
   {/* <Experience /> */}
   < Coursetabs />
   <Testimonial /> 
   <Contact />
   </div>
  )
}

export default Home