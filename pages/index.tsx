import { Container, Flex } from '@chakra-ui/layout'
import Details from '../src/sections/details'
import Cart from '../src/sections/cart'

const IndexPage = (): React.ReactNode => (
  <Container maxWidth="container.xl" padding={0}>
    <Flex
      h={{ base: 'auto', md: '100vh' }}
      py={[0, 10, 20]}
      direction={{ base: 'column-reverse', md: 'row' }}
    >
      <Details />
      <Cart />
    </Flex>
  </Container>
)

export default IndexPage
