import { CustomContainer } from "@/components/custom";
import { Button, Container, Flex, Grid, GridItem, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const journey = [
  { id: 1, value: '03', name: 'Years of Experience' },
  { id: 2, value: '100+', name: 'Clients Handled' },
  { id: 3, value: '15+', name: 'Projects Done' },
] as { id: number, value: string, name: string }[];

export default function SectionJourney() {
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
          <Stack align={'center'} spacing={24} w={'full'}>
            <Stack
              spacing={2}
              w={{ base: 'full', lg: '1426px' }}
              align={'center'}
              textAlign={'center'}
            >
              <Heading as="h1"
                fontSize={{ base: '3xl', lg: '6xl' }}
                color={useColorModeValue('gray.700', 'white')}
              >
                <Text as="span" color={useColorModeValue('teal.500', 'teal.300')}>My Journey </Text> Through Web Development.
                Unveiling Projects and Progress
              </Heading>
              <Text as="p"
                color={'gray.500'}
                w={{ base: 'full', lg: '850px' }}
                fontSize={{ base: 'md', lg: '2xl' }}
                lineHeight={'1.8'}
              >
                My Journey as a Frontend Web Developer
              </Text>
            </Stack>

            <Grid
              gridTemplateColumns={'repeat(3, 1fr)'}
              gap={10}
              w={'full'}
            >
              {journey.map((item, index) => (
                <GridItem key={index}
                  colSpan={{ base: 3, md: 1 }}
                  bg={'teal.500'}
                  p={10}
                  rounded={'xl'}
                >
                  <Stack color={'white'}>
                    <Heading as="h2"
                      fontSize={'6xl'}
                    >
                      {item.value}
                    </Heading>
                    <Text as="p"
                      fontSize={'2xl'}
                    >
                      {item.name}
                    </Text>
                  </Stack>
                </GridItem>
              ))}

            </Grid>
          </Stack>
        </Flex>
      </Container>
    </CustomContainer >
  )
}