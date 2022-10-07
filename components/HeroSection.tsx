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
} from '@chakra-ui/react'
import { GiRadioTower, GiDatabase, GiHeadphones } from 'react-icons/gi'
import { IoRadioOutline } from 'react-icons/io5'
import { ReactElement } from 'react'
import Image from 'next/image'
import heroPhoto from '../public/heroEdited.png'
import v68Iradio from '../public/v68Iradio.png'
import cp268iRadio from '../public/cp268iRadio.png'
import DM301Mytetra from '../public/DM301Mytetra.png'
import about1 from '../public/about1.jpg'
import about2 from '../public/about2.jpg'
import about3 from '../public/about3.jpg'
import about4 from '../public/about4.jpg'

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
          <Stack spacing={4}>
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
              size={{ base: '2xl', xl: '3xl' }}
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
                color={'gray.900'}
                fontSize={'xl'}
                p={4}
              >
                Established in 1999, Banting Communications is a 100% Malaysian
                company. Our combined strengths and capital resources enable us
                to deliver sophisticated telecommunication solutions to
                individuals, businesses, governments and institutions across the
                country.
              </Text>
            </Box>
          </Stack>

          <Image
            alt={'Banting Communications walkie talkie image'}
            src={heroPhoto}
            objectFit={'contain'}
            // style={{ borderRadius: '30px' }}
          />
        </SimpleGrid>

        <VStack
          mt={{ base: 12, lg: 24 }}
          py={4}
          px={8}
          rounded="3xl"
          alignItems="center"
          shadow="xl"
          bgColor="whiteAlpha.800"
        >
          <Text
            color="gray.800"
            mb={{ base: 8, lg: 4 }}
            fontSize="xl"
            fontWeight="500"
          >
            Our Walkie-Talkie covers :
          </Text>
          <SimpleGrid
            w="full"
            mx="auto"
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={{ base: 8, lg: 12 }}
          >
            <Feature
              icon={<Icon as={GiRadioTower} color={'yellow.800'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Two-Way Radio Systems'}
            />
            <Feature
              icon={<Icon as={GiDatabase} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Telemetry Systems'}
            />
            <Feature
              icon={<Icon as={IoRadioOutline} color={'blue.500'} w={5} h={5} />}
              iconBg={useColorModeValue('blue.100', 'blue.900')}
              text={'Paging Systems'}
            />
            <Feature
              icon={<Icon as={GiHeadphones} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Telephony & Contact centre solutions'}
            />
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
