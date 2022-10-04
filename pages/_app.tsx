import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../utils/theme'
import BaseLayout from '../layouts/BaseLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </ChakraProvider>
  )
}

export default MyApp
