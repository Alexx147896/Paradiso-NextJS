import '../styles/globals.css'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
 
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <Head>
      {/* Load Google Fonts */}
      <link href="https://fonts.googleapis.com/css?family=Russo+One&display=swap" rel='stylesheet' />
      <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel='stylesheet' />
      <link href="https://fonts.googleapis.com/css2?family=Michroma&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
    </Head>
    {/* Apply the font to all h1 elements */}
    <style jsx global>{`
      h1 {
        font-family: 'Russo One', sans-serif;
      }
      h2 {
        font-family: 'Orbitron', sans-serif;
    }
      h3 {
        font-family: 'Michroma', sans-serif;
      }
      p,a {
        font-family: 'Montserrat', sans-serif;
      }

    `}</style>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
