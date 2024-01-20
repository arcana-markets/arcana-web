import React from 'react'
import Hero from './components/home/Hero'
import Products from './components/home/Products'
import Steps from './components/home/Steps'
import Api from './components/home/Api'
import Faq from './components/home/Faq'
export default function page() {
  return (
    <>
      <Hero />
      <Products />
      <Steps />
      <Api />
      <Faq />
    </>
  )
}
