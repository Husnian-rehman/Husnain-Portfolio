import React from 'react'
import FeatureCards from '../components/FeatureCards'
// import AboutMe from '../components/AboutMe'
// import Experience from '../components/Experience'
// import Hero from '../components/Hero'
// import Testimonial from '../components/testimonial'
import Hero1 from '../components/Hero1'
function Home() {
  return (
   <div className='bg-primary'>
    <Hero1 />
    {/* <Hero /> */}
   <FeatureCards />
   {/* <AboutMe />
   <Experience />
   <Testimonial /> */}
   </div>
  )
}

export default Home