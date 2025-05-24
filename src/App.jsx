import React from 'react'
import { Navbar } from './components/Navbar'
import { Products } from './components/Products'
import { About } from './components/About'
import { Footer } from './components/Footer'
import WhatsAppStickyButton from './components/WhatsappIcon'
import ContactPage from './components/Contact'


export const App = () => {
  return (
    <div>
      <Navbar />
      <Products />
      <WhatsAppStickyButton />
      <About />
      <ContactPage />
      <Footer />
    </div>
  )
}
