import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Select,
  Checkbox,
  Button,
} from '@chakra-ui/react'

const Details = (): JSX.Element => (
  <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
    <VStack spacing={3} alignItems="flex-start">
      <Heading size="2xl">Your Details</Heading>
      <Text>If you already have an acccount, click here</Text>
    </VStack>
    <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input placeholder="John" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input placeholder="Doe" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input placeholder="123 Main St" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input placeholder="Anytown" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Country</FormLabel>
          <Select>
            <option value="usa">United States</option>
            <option value="uk">United Kingdom 2</option>
            <option value="canada">Canada</option>
          </Select>
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <Checkbox>Ship to Billing Address</Checkbox>
      </GridItem>
      <GridItem colSpan={2}>
        <Button size="lg" w="full">
          Place Order
        </Button>
      </GridItem>
    </SimpleGrid>
  </VStack>
)

export default Details
