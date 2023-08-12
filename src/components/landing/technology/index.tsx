import { CustomContainer } from "@/components/custom";
import { Card, CardBody, Container, Flex, Grid, GridItem, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ParentListAnimate, ChildListAnimate } from "@/components/animation/ListTypeAnimate";

const technology = [
  {
    id: 1,
    name: 'Typescript',
    image: 'typescript.png',
    description: 'TypeScript is a superset of JavaScript that compiles to clean JavaScript output.'
  },
  {
    id: 2,
    name: 'React',
    image: 'react.png',
    description: 'React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components.'
  },
  {
    id: 3,
    name: 'Chakra UI',
    image: 'chakra.png',
    description: 'Chakra UI is a modular, accessible component library for building React applications.'
  },
  {
    id: 4,
    name: "ExpressJS",
    image: "express.png",
    description: "Express.js is a back-end web application framework for Node.js, known for its simplicity and flexibility."
  },
  {
    id: 5,
    name: 'Next.js',
    image: 'next.png',
    description: 'Next.js is a React-based framework that enables server-side rendering and generates static websites.'
  },
  {
    id: 6,
    name: 'Bootstrap',
    image: 'bootstrap.png',
    description: 'Bootstrap is a CSS framework focused on responsive, mobile-first front-end web development.'
  }
] as { id: number, name: string, image: string, description: string }[];

export default function SectionTechnology() {
  const cardTextPrimary = useColorModeValue('gray.700', 'white');
  const cardTextSecondary = useColorModeValue('gray.500', 'gray.400');

  return (
    <CustomContainer
      bg={useColorModeValue('gray.50', 'gray.900')}
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
          <Stack align={'center'} spacing={'50px'}>
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
                <Text as="span" color={useColorModeValue('teal.500', 'teal.300')}>Technological </Text> Proficiency. <br />
                Powering Web Projects
              </Heading>
              <Text as="p"
                color={'gray.500'}
                w={{ base: 'full', lg: '850px' }}
                fontSize={{ base: 'md', lg: '2xl' }}
                lineHeight={'1.8'}
              >
                The technology I use to build web applications.
              </Text>
            </Stack>

            <Grid as={motion.ul}
              variants={ParentListAnimate}
              initial="hidden"
              whileInView="show"
              gridTemplateColumns={'repeat(3, 1fr)'}
              gap={10}
            >
              {technology.map((tech, index) => (
                <GridItem key={index}
                  as={motion.li}
                  listStyleType={'none'}
                  variants={ChildListAnimate}
                  colSpan={{ base: 3, lg: 1 }}
                >
                  <Card
                    rounded={'xl'}
                    minH={{ base: 'fit-content', lg: '323px' }}
                    boxShadow={'base'}
                  >
                    <CardBody p={{ base: 7, md: 10 }}>
                      <Image
                        src={`/tech/${tech.image}`}
                        alt="typescript"
                      />
                      <Text as="h5"
                        fontSize={'xl'}
                        fontWeight={'semibold'}
                        py={"12px"}
                        color={cardTextPrimary}
                      >
                        {tech.name}
                      </Text>
                      <Text as="p"
                        color={cardTextSecondary}
                        fontSize={'lg'}
                        lineHeight={'1.8'}
                      >
                        {tech.description}
                      </Text>
                    </CardBody>
                  </Card>
                </GridItem>
              ))}
            </Grid>
          </Stack>
        </Flex >
      </Container>
    </CustomContainer>
  )
}