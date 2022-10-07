import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  Icon,
  useColorModeValue,
  Box,
  VStack,
  Button,
  HStack,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import Image from 'next/image'
import heroPhoto from '../public/heroEdited.png'
import MytetraLogo from '../public/MytetraLogo.png'
import iRadioLogo from '../public/iRadioLogo.png'
import v68Iradio from '../public/v68Iradio.png'
import cp268iRadio from '../public/cp268iRadio.png'
import DM301Mytetra from '../public/DM301Mytetra.png'

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text color="gray.700" fontWeight={600}>
        {text}
      </Text>
    </Stack>
  )
}

export default function SplitWithImage() {
  return (
    <Box
      // backgroundImage="url('https://source.unsplash.com/LVewTMR-J-A')"
      // bgSize="cover"
      // bgRepeat="no-repeat"
      bgColor={'gray.100'}
      h={{ lg: '100vh' }}
      pt={{ base: 32, lg: 40 }}
      pb={24}
      px={4}
    >
      <Container maxW={'1440px'}>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 2 }}
          spacing={10}
        >
          <Stack mt={{ base: 2, lg: 8 }} mb={{ base: 12, lg: 0 }} spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'green.400'}
              fontWeight={700}
              fontSize={'sm'}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              as="b"
              alignSelf={'flex-start'}
              rounded={'md'}
            >
              About Us
            </Text>
            <Heading
              // color={'white'}
              color="green.900"
              as="h1"
              size={{ base: '2xl', xl: '4xl' }}
            >
              Banting Communications
            </Heading>
            <Heading
              pt={{ base: 0, md: 2 }}
              // color={'white'}
              color="green.800"
              as="h1"
              size={{ base: 'lg', xl: 'xl' }}
            >
              (M) SDN BHD
            </Heading>

            <Box pt={{ base: 4, lg: 8 }}>
              <Text
                rounded="lg"
                // bgColor="whiteAlpha.700"
                color={'gray.600'}
                fontSize={{ base: 'xl', lg: '2xl' }}
                mt={{ base: 4, lg: 8 }}
              >
                Banting Communications (M) Sdn Bhd is Sole Distributor on Iradio
                and Mytetra Walkie Talkie in Malaysia
              </Text>
            </Box>

            <Box
              maxWidth={{ base: 'none', lg: '450px' }}
              as="form"
              action="mailto:kkwong@banting.com.my"
              target="_top"
            >
              <Button
                rounded="2xl"
                py={8}
                mt={{ base: 8, lg: 16 }}
                width="full"
                variant="solid"
                color="white"
                bgColor="teal.600"
                _hover={{ bgColor: 'teal.700' }}
                // colorScheme="green"
                type="submit"
              >
                <Text fontSize="xl">Email Us Now !</Text>
              </Button>
            </Box>
          </Stack>

          <VStack alignItems="center" justify="center">
            <Image
              alt={'Banting Communications walkie talkie image'}
              src={heroPhoto}
              objectFit={'contain'}
            />

            <HStack opacity="" pt={{ base: 16, lg: 24 }} gap={8}>
              <Image
                src={iRadioLogo}
                height={50}
                width={200}
                objectFit="contain"
                alt="Iradio Logo"
              />
              <Image
                src={MytetraLogo}
                height={50}
                width={200}
                objectFit="contain"
                alt="mytetra logo"
              />
            </HStack>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
