import { ChakraProvider } from '@chakra-ui/react'
import MyHead from '../components/MyHead'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MyHead/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp