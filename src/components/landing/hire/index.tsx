import { CustomContainer } from "@/components/custom";
import { Button, Container, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function SectionHire() {
  return (
    <CustomContainer
      bg={useColorModeValue('gray.900', 'gray.800')}
      overflow={'hidden'}
      roundedBottomRight={{ lg: '300px' }}
    >
      <Container as="section"
        maxW={'1280px'}
        px={{ base: 0, md: 'auto' }}
      >
        <Flex
          w={'full'}
          align={'center'}
          justify={'center'}
          py={{ base: 20 }}
        >
          <Stack align={'center'} spacing={32}>
            <Stack align={'center'} spacing={{ base: '20px', md: '40px' }}>
              <Stack as={motion.div}
                initial={{ opacity: 0, y: -70 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, type: "ease" } }}
                spacing={2}
                w={{ base: 'full', lg: '900px' }}
                align={'center'}
                textAlign={'center'}
              >
                <Heading as="h1"
                  fontSize={{ base: '3xl', lg: '6xl' }}
                  color={'white'}
                >
                  Ready to <Text as="span" color={'blue.500'}>Create Excellence? </Text> Hire Me for Your Projects
                </Heading>
                <Text as="p"
                  color={'gray.500'}
                  w={{ base: 'full', lg: '710px' }}
                  fontSize={{ base: 'md', lg: '2xl' }}
                  lineHeight={'1.8'}
                >
                  Turn visions into reality. Let&apos;s collaborate on your next project. Contact me to get started.
                </Text>
              </Stack>
              <Button as="a"
                href="https://wa.me/62895386231326"
                colorScheme="blue"
                h={{ base: '60px', md: '70px' }}
                w={{ base: 'fit-content', md: '318px' }}
                px={{ base: 12, lg: 0 }}
                size={'lg'}
                rounded={'full'}
              >
                Hire Me
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Image
          src="/section-hire.png"
          alt="hire"
          w={'full'}
        />
      </Container>

    </CustomContainer>
  )
}