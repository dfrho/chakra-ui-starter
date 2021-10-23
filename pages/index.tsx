import { Container, Flex } from '@chakra-ui/layout'
import Details from '../src/sections/details'
import Cart from '../src/sections/cart'

const IndexPage = (): React.ReactNode => (
  <Container maxWidth="container.xl" padding={0}>
    <Flex h="100vh" py={20}>
      <Details />
      <Cart />
    </Flex>
  </Container>
)

export default IndexPage
