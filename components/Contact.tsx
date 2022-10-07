import {
  Box,
  Heading,
  Container,
  Button,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  SimpleGrid,
  Highlight,
} from '@chakra-ui/react'
import { MdOutlineEmail } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'
import Image from 'next/image'
import contactImg from '../public/contact.svg'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div id="contact">
      <Box bgColor="gray.100" mt={{ base: 8, lg: 12 }} px={4} pb={32} mb={12}>
        <Container maxW={'1440px'}>
          <Heading
            mb={{ base: 8, lg: 12 }}
            pt={20}
            fontSize="4xl"
            color="teal.900"
            textAlign="center"
          >
            Contact Us
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 4, lg: 16 }}>
            <Box>
              <Image src={contactImg} alt="contact" />
            </Box>
            <Box bg="whiteAlpha.800" shadow="xl" borderRadius="lg" rounded="xl">
              <VStack
                color="teal.900"
                p={8}
                spacing={8}
                as="form"
                action="mailto:kkwong@banting.com.my"
              >
                <VStack alignItems="left" gap={8}>
                  <Box>
                    <Text mb={2} fontWeight="700" fontSize="xl">
                      Address :
                    </Text>
                    <Text fontSize="xl">
                      130, Jalan Sultan Alam Shah, 42700, Banting, Selangor
                      Darul Ehsan, Malaysia
                    </Text>
                  </Box>

                  <Box>
                    <Text mb={2} fontWeight="700" fontSize="xl">
                      Contact us at :
                    </Text>
                    <Text fontSize="xl">+6 03-3181 2233 / +6 012-391 3333</Text>
                    <Text fontSize="xl">kkwong@banting.com.my</Text>
                  </Box>

                  <Box>
                    <Text mb={2} fontWeight="700" fontSize="xl">
                      Opening hours
                    </Text>
                    <Text fontSize="xl">
                      Monday to Friday 9:00 AM to 6:00 PM
                    </Text>
                  </Box>
                </VStack>

                <Button
                  width="full"
                  variant="solid"
                  colorScheme="blue"
                  type="submit"
                >
                  Email Us Now !
                </Button>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  )
}

export default Contact
