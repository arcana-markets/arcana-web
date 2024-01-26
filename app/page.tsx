import React from 'react'
import Hero from './components/home/Hero'
import Products from './components/home/Products'
import Steps from './components/home/Steps'
import Api from './components/home/Api'
//import Faq from './components/home/Faq'
import { GoogleAnalytics } from '@next/third-parties/google'
export default function page() {
  return (
    <>
    <GoogleAnalytics gaId="G-7E13GM6QB3" />
      <Hero />
      <Products />
      <Steps />
      <Api />
      {/*<Faq />*/}
    </>
  )
}
