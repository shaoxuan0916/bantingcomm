import React from "react"
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
} from "@chakra-ui/react"
import Image from "next/image"
import contactImg from "../public/contact.svg"
import contact2 from "../public/contact2.svg"
import Head from "next/head"

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us｜Banting Communications (M) Sdn Bhd</title>
        <meta
          content="contact us | banting communications"
          property="og:title"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.bantingcomm.com.my/contact" />
        <meta
          name="google-site-verification"
          content="MfgTPPe2ciU33LpFMNzhOmDvCfr0VCBkTJm3Qt_tFMI"
        />
      </Head>
      <div>
        <Box bgColor="gray.100" py={{ base: 8, lg: 12 }} px={4}>
          <Container maxW={"1440px"}>
            <Heading
              mb={{ base: 8, lg: 20 }}
              pt={20}
              fontSize="4xl"
              color="teal.900"
              textAlign="center"
            >
              Contact Us
            </Heading>

            <SimpleGrid
              alignItems="center"
              columns={{ base: 1, lg: 2 }}
              gap={{ base: 4, lg: 16 }}
            >
              <Box display={{ base: "none", lg: "flex" }}>
                <Image src={contact2} alt="contact" priority={true} />
              </Box>
              <Box
                bg="whiteAlpha.800"
                shadow="xl"
                borderRadius="lg"
                rounded="xl"
              >
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
                      <Text my={2} fontWeight="700" fontSize="xl" as="h3">
                        Banting Communication (M) Sdn Bhd
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
                      <Text fontSize="xl">+603-3181 2233 / +6012-391 3333</Text>
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
            </SimpleGrid>
          </Container>
        </Box>
      </div>
    </>
  )
}

export default contact
