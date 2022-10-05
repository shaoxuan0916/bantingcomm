import {
  Box,
  Heading,
  Container,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  SimpleGrid,
} from '@chakra-ui/react'
import { MdOutlineEmail } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'
import Image from 'next/image'
import contactImg from '../public/contact.svg'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div id="contact">
      <Box mt={{ base: 8, lg: 12 }} px={4} pb={12}>
        <Container maxW={'1440px'}>
          <Heading
            mb={{ base: 8, lg: 12 }}
            pt={12}
            fontSize="4xl"
            color="teal.900"
            textAlign="center"
          >
            Contact Us
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 4, lg: 16 }}>
            <Box>
              <Image src={contactImg} />
            </Box>
            <Box bg="white" shadow="xl" rounded="5xl" borderRadius="lg">
              <VStack color="teal.900" p={8} spacing={5}>
                <FormControl id="name">
                  <FormLabel>Your Name</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsPerson color="gray.800" />}
                    />
                    <Input type="text" size="md" placeholder="eg.  Henry Lim" />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Your Email</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<MdOutlineEmail color="gray.800" />}
                    />
                    <Input
                      type="email"
                      size="md"
                      placeholder="eg.  henry@gmail.com"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    borderColor="gray.300"
                    _hover={{
                      borderRadius: 'gray.300',
                    }}
                    placeholder="Type your messages here"
                  />
                </FormControl>
                <FormControl id="name" float="right">
                  <Button variant="solid" colorScheme="teal">
                    Send Message
                  </Button>
                </FormControl>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  )
}

export default Contact
