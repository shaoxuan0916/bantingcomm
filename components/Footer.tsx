import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaFacebook } from 'react-icons/fa'
import { ReactNode } from 'react'
import Image from 'next/image'
import logo from '../public/BatingCommunicationWalkieTalkieIradio.png'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      target="_blank"
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'1440px'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Image
          src={logo}
          height="40px"
          objectFit={'contain'}
          alt="banting communications logo"
        />
        <Stack direction={'row'} spacing={6}>
          <Link href={'/'}>Home</Link>
          <Link href={'/#products'}>Products</Link>
          <Link href={'/#contact'}>Contact</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Box>
            <Text>© 2022 Banting Communications (M) Sdn Bhd.</Text>
            <Text pb={4} textAlign={{ base: 'center', md: 'left' }} ml={5}>
              All rights reserved
            </Text>
          </Box>
          <Stack direction={'row'} spacing={6}>
            <SocialButton
              label={'Facebook'}
              href={'https://www.facebook.com/bantingcommunications'}
            >
              <FaFacebook />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
