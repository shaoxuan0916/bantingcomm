import { Box, Button, HStack, Icon, Text, VStack, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { HiMenu } from 'react-icons/hi'
import { RiWhatsappFill, RiFacebookFill } from 'react-icons/ri'
import LogoImage from '../../public/BatingCommunicationWalkieTalkieIradio.png'

type Props = {}

const Header = (props: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>()

  const menus = [
    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'Our Products',
      to: '/#products',
    },
    {
      label: 'Contact',
      to: '/#contact',
    },
  ]

  return (
    <Box
      position="fixed"
      zIndex={10}
      w="full"
      bgColor="gray.50"
      shadow="lg"
      px={4}
    >
      <Flex
        justify="space-between"
        alignItems="center"
        maxWidth="1440px"
        mx="auto"
        h="70px"
      >
        <HStack spacing="8">
          {/* TODO: ICON */}

          <Box
            pl={{ base: 4, lg: 0 }}
            cursor="pointer"
            onClick={() => Router.push('/')}
          >
            <Image src={LogoImage} height={45} width={113} layout="fixed" />
          </Box>

          <HStack pl={40} spacing="16" display={{ base: 'none', lg: 'flex' }}>
            {menus.map((menu) => (
              <Box key={menu.label}>
                <Link href={menu.to}>
                  <Text
                    fontSize={20}
                    cursor="pointer"
                    color="blackAlpha.800"
                    _hover={{ color: 'blackAlpha.600' }}
                  >
                    {menu.label}
                  </Text>
                </Link>
              </Box>
            ))}
          </HStack>
        </HStack>

        <Flex
          display={{ base: 'none', lg: 'flex' }}
          gap={2}
          p={2}
          rounded="lg"
          border="1px solid #128c7e"
          as="a"
          cursor={'pointer'}
          target="_blank"
          align="center"
          _hover={{ bgColor: 'green.50' }}
          href="https://wa.link/rqdzh2"
        >
          <RiWhatsappFill color="#128c7e" fontSize="1.2rem" />
          <Text fontWeight="600" color="#128c7e">
            Whatsapp
          </Text>
        </Flex>
        {/* Mobile Menu*/}

        <Button
          display={{ base: 'flex', lg: 'none' }}
          rightIcon={
            <Box
              transform={`rotate(${showMenu ? 180 : 0}deg)`}
              transition="transform ease-in-out 300ms"
            >
              <AiOutlineDown size={20} />
            </Box>
          }
          variant="ghost"
          onClick={() => setShowMenu(!showMenu)}
        >
          <HiMenu size={20} />
        </Button>
      </Flex>

      {showMenu && (
        <Box
          mt={16}
          py={4}
          bg=""
          shadow="lg"
          bgColor="gray.50"
          position="absolute"
          left={0}
          top={0}
          width="100%"
        >
          <VStack spacing="8" alignItems="center" justifyContent="center" p="4">
            {menus.map((menu) => (
              <Box
                key={menu.label}
                fontSize={20}
                _hover={{ color: 'blackAlpha.600' }}
                onClick={() => setShowMenu(false)}
              >
                <Link href={menu.to}>{menu.label}</Link>
              </Box>
            ))}
            <Flex
              w="full"
              maxWidth="500px"
              gap={2}
              p={2}
              rounded="lg"
              border="1px solid #128c7e"
              as="a"
              cursor={'pointer'}
              target="_blank"
              align="center"
              href="https://wa.link/rqdzh2"
              justify="center"
            >
              <RiWhatsappFill color="#128c7e" fontSize="1.2rem" />
              <Text fontWeight="600" color="#128c7e">
                Whatsapp
              </Text>
            </Flex>
            <Flex
              w="full"
              maxWidth="500px"
              gap={2}
              p={2}
              rounded="lg"
              border="1px solid #3b5998"
              as="a"
              cursor={'pointer'}
              target="_blank"
              align="center"
              href={'https://www.facebook.com/bantingcommunications'}
              justify="center"
            >
              <RiFacebookFill color="#3b5998" fontSize="1.2rem" />
              <Text fontWeight="600" color="#3b5998">
                Facebook
              </Text>
            </Flex>
          </VStack>
        </Box>
      )}
    </Box>
  )
}

export default Header