import { Button, Divider, Flex, Icon, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { CustomContainer } from "../custom";
import { LogoFull } from "../logo";
import { links } from "../navbar";

const FooterLink = ({ children, href }: { children: ReactNode, href: string }) => {
  return (
    <Text
      as="a"
      href={href}
      color={useColorModeValue('gray.600', 'gray.500')}
      fontWeight={'semibold'}
      cursor={'pointer'}
      fontSize={{ base: 'md', lg: "lg" }}
      _hover={{
        color: useColorModeValue('blue.500', 'blue.500'),
        transition: 'all 0.3s ease'
      }}
      transition={'all 0.3s ease'}
    >
      {children}
    </Text>
  )
}

export default function ContentFooter() {
  return (
    <CustomContainer>
      <Stack justify={'center'} align={'center'} spacing={8} pt={14}>
        <Flex alignItems={'center'} gap={2} fontWeight={'semibold'} color={'blue.400'}>
          <LogoFull />
        </Flex>

        <Flex gap={7} flexWrap={'wrap'} justify={'center'} align={'center'}>
          {links.map((link, index) => (
            <FooterLink key={index} href={link.href}>
              {link.name}
            </FooterLink>
          ))}
        </Flex>

        <Flex gap={7}>
          <Button variant={'outline'} >
            Twitter
          </Button>
        </Flex>

        <Stack w={'full'} align={'center'} py={5} spacing={6}>
          <Divider borderColor={'blue.300'} />
          <Text color={useColorModeValue('gray.500', 'gray.500')}>
            &copy; Copyright 2023. All right reserved.
          </Text>
        </Stack>
      </Stack>
    </CustomContainer>
  )
}