import React from 'react'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Services from './sections/Services'
import ChooseUs from './sections/ChooseUs'
import Portfolio from './sections/Portfolio'
import Testimonial from './sections/Testimonial'
import ContactUs from './sections/ContactUs'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
    <header className='pb-[140px]'>
      <Nav/>
    </header>
    <main>
      <section className='pb-[200px]'>
        <Hero/>
      </section>
      <section className='pb-[200px]'>
        <Services/>
      </section>
      <section className='pb-[200px]'>
        <ChooseUs/>
      </section>
      <section className='bg-primary py-[180px] rounded-[60px]'>
        <Portfolio/>
      </section>
      <section className='py-[200px]'>
        <Testimonial/>
      </section>
      <section className='pb-[200px]'>
        <ContactUs/>
      </section>
    </main>
    <footer className='bg-alpha-blue  rounded-t-[60px]'>
      <Footer/>
    </footer> 
    </>
  )
}

export default App