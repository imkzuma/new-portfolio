import { ChildListAnimate, ParentListAnimate } from "@/components/animation/ListTypeAnimate";
import { CustomContainer } from "@/components/custom";
import { Button, Container, Flex, Grid, GridItem, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const sosmeds = [
  { id: 1, name: "Github", href: "https://github.com/imkzuma", color: 'gray' },
  { id: 2, name: "Linkedin", href: "https://linkedin.com/in/gung-krisna/", color: 'linkedin' },
  { id: 3, name: "Email", href: "mailto:edu.gungkrisna@gmail.com", color: 'red' },
  { id: 4, name: "Whatsapp", href: "https://wa.me/62895386231326", color: 'whatsapp' }
] as { id: number, name: string, href: string, color: any }[];

export default function SectionSosialMedia() {
  return (
    <CustomContainer
      overflow={'hidden'}
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
          <Stack align={'center'} spacing={20}>
            <Stack align={'center'} spacing={{ base: '20px', md: '40px' }}>
              <Stack as={motion.div}
                initial={{ opacity: 0, y: -70 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, type: "ease" } }}
                spacing={2}
                w={{ base: 'full', lg: '1000px' }}
                align={'center'}
                textAlign={'center'}
              >
                <Heading as="h1"
                  fontSize={{ base: '3xl', lg: '6xl' }}
                  color={useColorModeValue('gray.700', 'white')}
                >
                  Follow the Journey. Connect on <Text as="span" color={useColorModeValue('teal.500', 'teal.300')}>Social Platforms </Text>
                </Heading>
                <Text as="p"
                  color={'gray.500'}
                  w={{ base: 'full', lg: '850px' }}
                  fontSize={{ base: 'md', lg: '2xl' }}
                  lineHeight={'1.8'}
                >
                  Join me on social media for updates, insights, and inspiration. Let&apos;s connect and stay engaged!
                </Text>
              </Stack>
            </Stack>

            <Grid as={motion.ul}
              variants={ParentListAnimate}
              initial="hidden"
              whileInView="show"
              gridTemplateColumns={'repeat(4, 1fr)'}
              gap={{ base: 5, lg: 8 }}
              w={'full'}
            >
              {sosmeds.map((sosmed, index) => (
                <GridItem key={index}
                  as={motion.li}
                  listStyleType={'none'}
                  variants={ChildListAnimate}
                  colSpan={{ base: 2, lg: 1 }}
                >
                  <Button as="a"
                    href={sosmed.href}
                    target="_blank"
                    colorScheme={'teal'}
                    w={'full'}
                    h={16}
                    size={'lg'}
                    rounded={'lg'}
                  >
                    {sosmed.name}
                  </Button>
                </GridItem>
              ))}

            </Grid>
          </Stack>
        </Flex>
      </Container>
    </CustomContainer>
  )
}