import { Box, Stack } from "@chakra-ui/react";
import HeaderFooter from "./HeaderFooter";
import ContentFooter from "./ContentFooter";

export default function Footer() {
  return (
    <Box w={'full'}>
      <Stack spacing={5}>
        <HeaderFooter />
        <ContentFooter />
      </Stack>
    </Box >
  )
}