import { useRouter } from "next/router";
import { Box, Button, Flex, Text, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { LogoFull } from "@/components/logo";
import { CustomContainer } from "@/components/custom";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import MobileNavbar from "./MobileNavbar";

export const links = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;

  const { toggleColorMode, colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const hoverBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box as="nav"
      w={'full'}
      pos={'sticky'}
      top={0}
      borderBottom={'1px'}
      bg={useColorModeValue('white', 'gray.900')}
      borderColor={useColorModeValue('gray.200', 'gray.800')}
      zIndex={10}
    >
      <MobileNavbar
        isOpen={isOpen}
        onClose={onClose}
        links={links}
      />

      <CustomContainer>
        <Flex
          justify={'space-between'}
          align={'center'}
          h={20}
        >
          <Flex as="header"
            align={'center'}
            gap={4}
          >
            <HamburgerIcon as="button"
              fontSize={'xl'}
              cursor={'pointer'}
              display={{ base: 'flex', lg: 'none' }}
              onClick={onOpen}
            />
            <LogoFull />
          </Flex>

          <Flex as="ul" gap={2}>
            {links.map((link, index) => {
              return (
                <Text key={index}
                  as="a"
                  href={link.href}
                  display={{ base: 'none', lg: 'block' }}
                >
                  <Button
                    size={'sm'}
                    fontSize={'md'}
                    fontWeight={pathname === link.href ? "semibold" : "medium"}
                    w={'fit-content'}
                    variant={pathname === link.href ? 'solid' : 'ghost'}
                    bg={pathname === link.href ? 'teal.500' : 'transparent'}
                    color={pathname === link.href ? 'white' : 'gray.500'}
                    _hover={pathname === link.href ? {} : { bg: hoverBg, color: 'teal.500' }}
                    transition={'all .3s ease'}
                  >
                    {link.name}
                  </Button>
                </Text>
              )
            })}
            <Button onClick={toggleColorMode} size={{ base: 'lg', lg: 'sm' }} variant={'ghost'} colorScheme="teal">
              {colorMode === 'light'
                ? <MoonIcon />
                : <SunIcon />
              }
            </Button>
          </Flex>
        </Flex>
      </CustomContainer>
    </Box >
  )
}