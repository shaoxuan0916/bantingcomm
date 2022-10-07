import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react'
import Image from 'next/image'
import v68 from '../public/v68Iradio.png'
import cp268 from '../public/cp268iRadio.png'
import DM301 from '../public/DM301Mytetra.png'
import Link from 'next/link'

interface ProductsProps {}

interface ProductCardProps {
  url?: string
  hover?: boolean
  imgSrc: any
  name: string
  desc: string
  actionBtn?: boolean
  noOfLines?: number
}

export const ProductCard: React.FC<ProductCardProps> = ({
  url,
  hover,
  imgSrc,
  name,
  desc,
  actionBtn,
  noOfLines,
}) => {
  return (
    <Link href={url ? url : ''}>
      <VStack
        _hover={hover ? { shadow: 'xl', transform: 'scale(1.05)' } : {}}
        transition="transform 0.15s ease-in-out"
        cursor="pointer"
        shadow="md"
        rounded="3xl"
        px={2}
        py={8}
        bgColor="gray.50"
      >
        <Image
          src={imgSrc}
          objectFit={'contain'}
          height="350px"
          alt="product"
        />
        <Text as="b" py={4} fontSize="3xl">
          {name}
        </Text>
        <Text
          px={4}
          noOfLines={noOfLines && noOfLines}
          color="gray.500"
          fontSize="md"
        >
          {desc}
        </Text>
        {actionBtn && (
          <Box pt={4}>
            <Button colorScheme="teal" variant="outline" size="md">
              See Details
            </Button>
          </Box>
        )}
      </VStack>
    </Link>
  )
}

const Products: React.FC<ProductsProps> = ({}) => {
  return (
    <div id="products">
      <Box py={{ base: 8, lg: 12 }} px={4}>
        <Container maxW={'1440px'}>
          <Heading
            mb={{ base: 8, lg: 12 }}
            pt={12}
            fontSize="4xl"
            color="teal.900"
            textAlign="center"
          >
            Our Products
          </Heading>
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
              technology enterprise integrating R&D, manufacture and
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
        </Container>
      </Box>
    </div>
  )
}

export default Products
