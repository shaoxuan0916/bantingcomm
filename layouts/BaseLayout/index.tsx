import { Box, Flex, IconButton, Spacer } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import Header from './Header'
import { BsFacebook } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'
import Footer from '../../components/Footer'

interface Props {}

const BaseLayout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Box>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Box>
  )
}

export default BaseLayout
