import { Box, Flex, IconButton, Spacer } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import Header from './Header'
import { BsFacebook } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'

interface Props {}

const BaseLayout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Box>
      {/* Icon Bar */}
      {/* <Box bg="blackAlpha.800">
        <Flex
          h={8}
          align="center"
          display={{ base: 'none', lg: 'flex' }}
          maxW="1440px"
          mx="auto"
        >
          <Spacer />
          <IconButton
            aria-label="Facbook"
            fontSize="16px"
            colorScheme="white"
            icon={<BsFacebook />}
            _hover={{ color: 'whiteAlpha.800' }}
          />
          <IconButton
            aria-label="Facbook"
            fontSize="16px"
            colorScheme="white"
            icon={<BsFacebook />}
            _hover={{ color: 'whiteAlpha.800' }}
          />
          <IconButton
            aria-label="Facbook"
            fontSize="16px"
            colorScheme="white"
            icon={<BsFacebook />}
            _hover={{ color: 'whiteAlpha.800' }}
          />
        </Flex>
      </Box> */}

      {/* Navbar */}
      {/* <Box> */}
      <Header />
      <Box>{children}</Box>
      {/* </Box> */}
    </Box>
  )
}

export default BaseLayout
