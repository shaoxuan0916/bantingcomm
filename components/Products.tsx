import { Box, Container } from '@chakra-ui/react'

interface ProductsProps {}

const Products: React.FC<ProductsProps> = ({}) => {
  return (
    <div id="products">
      <Box pt={16} px={4} bgColor="red.100">
        <Container maxW={'1440px'} h="100vh">
          Products
        </Container>
      </Box>
    </div>
  )
}

export default Products
