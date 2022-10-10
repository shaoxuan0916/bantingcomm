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
  Textarea,
  SimpleGrid,
} from '@chakra-ui/react'
import Image from 'next/image'
import contactImg from '../public/contact.svg'
import contact2 from '../public/contact2.svg'

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

          <SimpleGrid
            mb={{ base: 8, lg: 20 }}
            alignItems="center"
            columns={{ base: 1, lg: 2 }}
            gap={{ base: 4, lg: 16 }}
          >
            <Box>
              <Image src={contactImg} alt="contact" />
            </Box>
            <Box bg="whiteAlpha.800" shadow="xl" borderRadius="lg" rounded="xl">
              <VStack
                color="teal.900"
                p={8}
                spacing={8}
                as="form"
                // action="mailto:kkwong@banting.com.my"
                // target="_blank"
                action="https://postmail.invotes.com/send"
                method="post"
                id="email_form"
              >
                <VStack alignItems="left" gap={8} width="full">
                  <input
                    type="hidden"
                    name="access_token"
                    value="ny7zzlf7yvedajdmy1amzj8m"
                  />
                  <input type="hidden" name="success_url" value="." />
                  <input type="hidden" name="error_url" value=".?err=1" />

                  <FormControl width="" isRequired>
                    <FormLabel>Your Name</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      {/* <InputLeftElement
                        pointerEvents="none"
                        children={<BsPerson color="gray.800" />}
                      /> */}
                      <Input
                        type="text"
                        name="extra_name"
                        size="md"
                        placeholder="Henry Lim"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Your Email</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      {/* <InputLeftElement
                        pointerEvents="none"
                        children={<MdOutlineEmail color="gray.800" />}
                      /> */}
                      <Input
                        type="email"
                        name="extra_email"
                        size="md"
                        placeholder="henrylim@gmail.com"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Email Subject</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <Input
                        type="text"
                        name="subject"
                        size="md"
                        placeholder="Type your email subject here"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Your Messages</FormLabel>
                    <Textarea
                      name="text"
                      borderColor="gray.300"
                      _hover={{
                        borderRadius: 'gray.300',
                      }}
                      placeholder="Type your messages here"
                    />
                  </FormControl>
                </VStack>

                <Button
                  mt={8}
                  width="full"
                  variant="solid"
                  color="white"
                  bgColor="teal.600"
                  _hover={{ bgColor: 'teal.700' }}
                  type="submit"
                >
                  Email Us Now !
                </Button>
              </VStack>
            </Box>
          </SimpleGrid>

          <SimpleGrid
            alignItems="center"
            columns={{ base: 1, lg: 2 }}
            gap={{ base: 4, lg: 16 }}
          >
            <Box bg="whiteAlpha.800" shadow="xl" borderRadius="lg" rounded="xl">
              <VStack
                color="teal.900"
                p={8}
                spacing={8}
                as="form"
                // action="mailto:kkwong@banting.com.my"
                // target="_blank"
                action="https://postmail.invotes.com/send"
                method="post"
                id="email_form"
              >
                <VStack alignItems="left" gap={8} width="full">
                  <Box>
                    <Text mb={2} fontWeight="700" fontSize="xl">
                      Address :
                    </Text>
                    <Text fontSize="xl" pb={4}>
                      130, Jalan Sultan Alam Shah, 42700, Banting, Selangor
                      Darul Ehsan, Malaysia
                    </Text>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15940.109114623865!2d101.4958925!3d2.8081449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3d45c17c6f63d839!2sBanting%20Communications!5e0!3m2!1sen!2smy!4v1665131859914!5m2!1sen!2smy"
                      width="100%"
                      // height="auto"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
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
              </VStack>
            </Box>
            <Box display={{ base: 'none', lg: 'flex' }}>
              <Image src={contact2} alt="contact" />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  )
}

export default Contact
