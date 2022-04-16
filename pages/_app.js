import { ChakraProvider } from '@chakra-ui/react'
import MyHead from '../components/MyHead'
import Footer from "../components/Layout/Footer"



function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MyHead />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp