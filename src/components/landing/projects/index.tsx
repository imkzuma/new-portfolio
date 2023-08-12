import { ChildListAnimate, ParentListAnimate } from "@/components/animation/ListTypeAnimate";
import { CustomContainer } from "@/components/custom";
import { Button, Card, CardBody, Container, Flex, Grid, GridItem, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 6,
    name: "SIC Udayana",
    description: "As the frontend lead, I played a pivotal role in conceptualizing and crafting the visually stunning SIC Udayana website. This platform serves as a hub for students to access information, resources, and updates about the Student Information Center.",
    image: "sicudayana.png"
  },
  {
    id: 3,
    name: "Foody Web App",
    description: "In the role of frontend lead, I successfully developed the Foody web application, a seamless solution for food ordering. The platform provides users with a convenient and intuitive experience to order their favorite meals while enjoying an engaging interface.",
    image: "foody.png"
  },
  {
    id: 5,
    name: "Sales Web App",
    description: "As the frontend lead, I masterminded the creation of a cutting-edge Sales Web App for Magnum Solution. This dynamic application empowers sales teams with efficient tools, streamlining their operations and enhancing overall productivity.",
    image: "sales-app.png"
  },
  {
    id: 1,
    name: "Invasi Udayana",
    description: "Fronting the frontend team, I was instrumental in designing and implementing the landing page for Invasi Udayana. This captivating page serves as the face of the event, delivering an impactful first impression to visitors.",
    image: "invasiudayana.png"
  },
  {
    id: 2,
    name: "De-Talks",
    description: "I spearheaded the development of De-Talks, a website designed for the esteemed Web Competition 2022. The project showcases my proficiency in creating innovative web solutions that captivate audiences and meet competition standards.",
    image: "detalks.png"
  },
  {
    id: 7,
    name: "SIPOMAS Web App",
    description: "Undertaking the role of frontend lead, I led the creation of SIPOMAS, an event booking web application. The platform seamlessly facilitates event registration and management, offering attendees an intuitive way to secure their spots.",
    image: "sipomas.png"
  },
];

export default function SectionProjects() {
  const cardTextPrimary = useColorModeValue('gray.700', 'white');
  const cardTextSecondary = useColorModeValue('gray.500', 'gray.400');
  const borderColor = useColorModeValue('gray.300', 'gray.600');

  return (
    <CustomContainer
      bg={useColorModeValue('white', 'gray.800')}
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
          <Stack align={'center'} spacing={32}>
            <Stack align={'center'} spacing={{ base: '20px', md: '40px' }}>
              <Stack as={motion.div}
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, type: "ease" } }}
                spacing={2}
                w={{ base: 'full', lg: '900px' }}
                align={'center'}
                textAlign={'center'}
              >
                <Heading as="h1"
                  fontSize={{ base: '3xl', lg: '6xl' }}
                  color={useColorModeValue('gray.700', 'white')}
                >
                  Showcasing My Portfolio. <Text as="span" color={useColorModeValue('teal.500', 'teal.300')}>Projects </Text> Developed by Me
                </Heading>
                <Text as="p"
                  color={'gray.500'}
                  w={{ base: 'full', lg: '850px' }}
                  fontSize={{ base: 'md', lg: '2xl' }}
                  lineHeight={'1.8'}
                >
                  My Projects look as good as the others! Check them out.
                </Text>
              </Stack>
              <Button as={motion.div}
                initial={{ opacity: 0, y: -70 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, type: "ease" } }}
                colorScheme="teal"
                h={{ base: '60px', md: '70px' }}
                w={{ base: 'fit-content', md: '318px' }}
                px={{ base: 12, lg: 0 }}
                size={'lg'}
                rounded={'full'}
              >
                See Projects
              </Button>
            </Stack>

            <Grid as={motion.ul}
              variants={ParentListAnimate}
              initial="hidden"
              whileInView="show"
              gridTemplateColumns={'repeat(2, 1fr)'}
              gap={8}
            >
              {projects.map((project, index) => (
                <GridItem key={index}
                  as={motion.li}
                  variants={ChildListAnimate}
                  listStyleType={'none'}
                  colSpan={{ base: 2, lg: 1 }}
                >
                  <Card
                    w={'full'}
                    rounded={'xl'}
                    border={'1px'}
                    borderColor={borderColor}
                    p={0}
                  >
                    <CardBody p={0}>
                      <Image
                        src={`/projects/${project.image}`}
                        alt={project.name}
                        w={'full'}
                        roundedTop={'xl'}
                      />
                      <Stack
                        py={4}
                        px={5}
                      >
                        <Text as="h5"
                          fontSize={'2xl'}
                          fontWeight={'semibold'}
                          color={cardTextPrimary}
                        >
                          {project.name}
                        </Text>
                        <Text as="p"
                          color={cardTextSecondary}
                          lineHeight={1.8}
                        >
                          {project.description}
                        </Text>
                      </Stack>
                    </CardBody>
                  </Card>
                </GridItem>
              ))}

            </Grid>
          </Stack>
        </Flex>
      </Container>
    </CustomContainer>
  )
}