import { Text, useColorModeValue } from "@chakra-ui/react"

export const LogoFull = () => {
  return (
    <Text as="header"
      fontWeight={'bold'}
      fontSize={'2xl'}
      color={useColorModeValue('gray.700', 'white')}
    >
      <Text as="span"
        color={'teal.500'}
      >
        K
      </Text>
      FOLIO.
    </Text >
  )
}