import React from 'react'
import Hero from './components/home/Hero'
import Products from './components/home/Products'
import Steps from './components/home/Steps'
import Api from './components/home/Api'
import Faq from './components/home/Faq'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
export default function page() {
  return (
    <>
    <GoogleAnalytics gaId="G-7E13GM6QB3" />
    <>
      {/* Google Tag Manager - Global site tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7E13GM6QB3"
        strategy="afterInteractive"
        async
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7E13GM6QB3');
        `}
      </Script>
    </>
      <Hero />
      <Products />
      <Steps />
      <Api />
      <Faq />
    </>
  )
}
