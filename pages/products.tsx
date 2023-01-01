import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import React from "react"
import { Accessories, ProductCard } from "../components/Products"
import v68 from "../public/v68Iradio.png"
import cp268 from "../public/cp268iRadio.png"
import DM301 from "../public/DM301Mytetra.png"
import Head from "next/head"

const products = () => {
  return (
    <>
      <Head>
        <title>Products｜Banting Communications (M) Sdn Bhd</title>
        <meta content="walkie talkie malaysia" property="og:title" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.bantingcomm.com.my/products" />
        <meta
          name="google-site-verification"
          content="MfgTPPe2ciU33LpFMNzhOmDvCfr0VCBkTJm3Qt_tFMI"
        />
      </Head>
      <div>
        <Box py={{ base: 8, lg: 12 }} px={4}>
          <Container maxW={"1440px"} pb={20}>
            <Heading
              mb={{ base: 8, lg: 12 }}
              pt={24}
              fontSize="4xl"
              color="teal.900"
              textAlign="center"
            >
              Our Products
            </Heading>
            <Text
              fontSize={{ base: "xl", lg: "3xl" }}
              as="h3"
              my={8}
              textAlign={{ base: "center", lg: "left" }}
            >
              Banting Communications (M) Sdn Bhd is Sole Distributor on
              <b> Iradio Walkie Talkie</b> and <b>Mytetra Walkie Talkie</b> in
              Malaysia. We are walkie talkie supplier in Malaysia.
            </Text>

            <SimpleGrid gap={12} columns={{ base: 1, md: 2, xl: 3 }}>
              <ProductCard
                url="/v68Iradio"
                hover
                actionBtn
                noOfLines={3}
                imgSrc={v68}
                name="V68 Iradio"
                desc="Located in China two-way radio town--Quanzhou, Iradio
              Electronics Co., Ltdwas established naturally and is a modern
              technology enterprise integrating R&D manufacture and
              distribution in a rapid developing step."
              />

              <ProductCard
                url="/cp268Iradio"
                hover
                actionBtn
                imgSrc={cp268}
                name="CP-268 Iradio"
                desc="CP-268 iRadio is the latest in RF communication, providing the best long-distance communication solutions in Malaysia."
              />

              <ProductCard
                url="/dm301Mytetra"
                hover
                actionBtn
                imgSrc={DM301}
                name="DM301 Mytetra"
                desc="Mytetra DM301 has features such as Real-time Communication, Battery Save / Warning, Three-pin Plug Charger and IP54."
              />
            </SimpleGrid>
            {/* Accessories */}
            <Heading
              mt={{ base: 8, lg: 12 }}
              mb={{ base: 8, lg: 12 }}
              pt={12}
              fontSize="4xl"
              color="primary.900"
              textAlign="center"
            >
              Accessories
            </Heading>
            <Accessories />
          </Container>
        </Box>
      </div>
    </>
  )
}

export default products
