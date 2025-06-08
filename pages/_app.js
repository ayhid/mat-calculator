import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mat Calculator | Professional Photo Framing Tool</title>
        <meta name="description" content="Professional mat calculator for photo framing. Calculate optimal mat dimensions with 5 different styles: proportional, uniform, talon, panoramic, portrait." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🖼️</text></svg>" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mat Calculator - Professional Photo Framing Tool" />
        <meta property="og:description" content="Calculate optimal mat dimensions for photo framing with professional accuracy" />
        <meta property="og:url" content="https://mat-calculator-app.vercel.app" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Mat Calculator - Professional Photo Framing Tool" />
        <meta property="twitter:description" content="Calculate optimal mat dimensions for photo framing with professional accuracy" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

