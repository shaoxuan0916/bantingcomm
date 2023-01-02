import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  Text,
} from "@chakra-ui/react"
import Head from "next/head"
import Image from "next/image"
import heroEdited from "../public/heroEdited.png"
import React from "react"
import Link from "next/link"

const about = () => {
  return (
    <>
      <Head>
        <title>About Us｜Banting Communications (M) Sdn Bhd</title>
        <meta content="walkie talkie supplier" property="og:title" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.bantingcomm.com.my/about" />
        <meta
          name="google-site-verification"
          content="MfgTPPe2ciU33LpFMNzhOmDvCfr0VCBkTJm3Qt_tFMI"
        />
      </Head>
      <Box bgColor="gray.100" py={{ base: 8, lg: 12 }} px={4}>
        <Container maxW={"1440px"}>
          <Heading
            mb={{ base: 8, lg: 20 }}
            pt={20}
            fontSize="4xl"
            color="teal.900"
            textAlign="center"
          >
            About Us
          </Heading>

          <SimpleGrid
            maxW={"800px"}
            mx="auto"
            alignItems="center"
            columns={{ base: 1 }}
            gap={{ base: 4, lg: 16 }}
          >
            <Box bg="whiteAlpha.800" shadow="xl" borderRadius="lg" rounded="xl">
              <VStack color="teal.900" p={8} spacing={8}>
                <VStack alignItems="left" gap={8} width="full">
                  <Box textAlign={"center"}>
                    <Image src={heroEdited} alt="contact" priority={true} />
                  </Box>
                  <Box>
                    <Text
                      as={"h2"}
                      my={4}
                      textAlign={"center"}
                      fontWeight="700"
                      fontSize="2xl"
                    >
                      Banting Communications (M) Sdn Bhd
                    </Text>

                    <Text fontSize="xl" pb={4}>
                      For many years, Banting Communications (M) Sdn Bhd has
                      successfully developed, deployed and supported turnkey
                      telecommunication systems. Our business strategy is to
                      deliver solutions that are flexible and adaptable. We
                      engineer our solutions jointly with our customers. This
                      ensure our solutions address the needs, solve problem and
                      enhance the level of services. We are walkie talkie
                      supplier in Malaysia!
                    </Text>
                    <Text
                      fontSize="xl"
                      fontWeight={"bold"}
                      textAlign="center"
                      pb={4}
                      pt={12}
                    >
                      Our Walkie-Talkie covers :
                    </Text>
                    <Text fontSize="xl" py={2} textAlign="center">
                      - Two-Way Radio Systems
                    </Text>
                    <Text fontSize="xl" py={2} textAlign="center">
                      - Telemetry Systems
                    </Text>
                    <Text fontSize="xl" py={2} textAlign="center">
                      -Telephony & Contact centre solutions
                    </Text>
                    <Text fontSize="xl" py={2} textAlign="center">
                      - Paging System
                    </Text>

                    <Text
                      fontSize="xl"
                      fontWeight={"bold"}
                      textAlign="center"
                      pb={4}
                      pt={12}
                    >
                      Our Main Walkie-Talkie Products :
                    </Text>
                    <Link href={"/v68Iradio"}>
                      <Text fontSize="xl" py={2} textAlign="center">
                        - Iradio V68
                      </Text>
                    </Link>

                    <Link href={"/cp268Iradio"}>
                      <Text fontSize="xl" py={2} textAlign="center">
                        - Iradio CP-268
                      </Text>
                    </Link>
                    <Link href={"/dm301Mytetra"}>
                      <Text fontSize="xl" py={2} textAlign="center">
                        - Mytetra DM301
                      </Text>
                    </Link>
                  </Box>
                </VStack>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}

export default about
