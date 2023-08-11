import { Box, useColorModeValue } from "@chakra-ui/react";
import SectionSosialMedia from "@/components/landing/sosmed";
import ContentFooter from "./ContentFooter";

export default function Footer() {
  return (
    <Box as="footer"
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
    >
      <SectionSosialMedia />
      <ContentFooter />
    </Box >
  )
}