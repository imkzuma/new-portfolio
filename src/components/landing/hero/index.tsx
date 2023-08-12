import { CustomContainer } from "@/components/custom";
import { Box, Button, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function LandingHero() {
  return (
    <CustomContainer>
      <Flex as="section"
        w={'full'}
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        py={{ base: 16, md: 0 }}
      >
        <Stack align={'center'} spacing={{ base: '45px', lg: '65px' }}>
          <Box as={motion.div}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3, type: "ease" } }}
            maxW={'270px'}
            maxH={'270px'}
          >
            <Image
              src="/8e5a23221dbe97410ad29ccda3c8e0b0cf477385.jpeg"
              alt="hero"
              objectFit={'cover'}
              w={{ base: '220px', lg: '270px' }}
              h={{ base: '220px', lg: '270px' }}
              rounded={'full'}
            />
          </Box>
          <Stack
            spacing={'50px'}
            align={'center'}
            w={'full'}
          >
            <Stack as={motion.div}
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, type: "ease" } }}
              spacing={2}
              w={{ base: 'full', lg: '1140px' }}
              align={'center'}
              textAlign={'center'}
            >
              <Heading as="h1"
                fontSize={{ base: '3xl', lg: '6xl' }}
                color={useColorModeValue('gray.700', 'white')}
              >
                Hello, I&apos;m Gung Krisna, <Text as="span" color={useColorModeValue('teal.500', 'teal.300')}> Frontend Developer Based in Bali. </Text>
              </Heading>
              <Text as="p"
                color={'gray.500'}
                w={{ base: 'full', lg: '850px' }}
                fontSize={{ base: 'md', lg: '2xl' }}
                lineHeight={'1.8'}
              >
                Experienced Frontend Web Developer adept in Node.js, React.js, Next.js, and PHP.
                Proficient at crafting attractive and responsive UI, skilled in API integration,
                and a strong team collaborator.
              </Text>
            </Stack>
            <Flex as={motion.div}
              listStyleType={'none'}
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7, type: "ease" } }}
              gap={{ base: 2, lg: 1 }}
            >
              <Button
                colorScheme="teal"
                size={{ base: 'lg', md: 'lg' }}
                rounded={'full'}
                py={{ base: 7, lg: 7 }} px={{ lg: 9 }}
              >
                Get In Touch
              </Button>
              <Button
                variant={'ghost'}
                colorScheme="teal"
                size={{ base: 'lg', md: 'lg' }}
                rounded={'full'}
                py={{ base: 7, lg: 7 }} px={{ lg: 9 }}
              >
                View All Works
              </Button>
            </Flex>
          </Stack>
        </Stack>
      </Flex>
    </CustomContainer>
  )
}