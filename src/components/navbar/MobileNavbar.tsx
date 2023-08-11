import { CloseButton, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { LogoFull } from "../logo";
import { useRouter } from "next/router";

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ name: string, href: string }>;
};

export default function MobileNavbar({ isOpen, onClose, links }: MobileNavbarProps) {
  const router = useRouter();
  const { pathname } = router;

  const hoverBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="left"
      size={{ base: 'xs', md: 'lg' }}
    >
      <DrawerOverlay />
      <DrawerContent display={{ base: 'block', lg: 'none' }} bg={useColorModeValue('white', 'gray.800')}>
        <DrawerHeader bg={useColorModeValue('white', 'gray.900')}>
          <Flex align={'center'} justify={'space-between'}>
            <LogoFull />
            <CloseButton onClick={onClose} colorScheme="blue" />
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          <Stack spacing={7} py={4}>
            {links.map((link, index) => {
              return (
                <Text key={index}
                  as="a"
                  href={link.href}
                  fontWeight={pathname === link.href ? 'bold' : 'semibold'}
                  color={pathname === link.href ? 'teal.500' : 'gray.500'}
                >
                  {link.name}
                </Text>
              )
            })}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer >
  )
}