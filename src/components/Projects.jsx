import {
  Box,
  Button,
  Heading,
  Img,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import krishnaImage from '../assests/portFolio.png';

function Projects() {
  return (
    <VStack
      maxW={['100%', '1100px']}
      minH={['40vh', '400px']}
      m={'auto'}
      mt={['8']}
      p={'4'}
    >
      <Carousel
        autoPlay={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        useKeyboardArrows
        infiniteLoop
        interval={2000}
        className="overFlow"
      >
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </VStack>
  );
}

export default Projects;

const CarouselItem = () => (
  <VStack w={'100%'} spacing={'6'} m={'0 auto'}>
    <VStack w={'100%'} spacing={'0'}>
      <Heading
        fontSize={'3xl'}
        textTransform={'capitalize'}
        fontWeight={'700'}
        color={'#6b46c1'}
      >
        Portfolio
      </Heading>
      <Text
        fontSize={'lg'}
        textTransform={'capitalize'}
        fontWeight={'700'}
        color={'GrayText'}
      >
        My Portfolio Project
      </Text>
    </VStack>
    <Stack
      direction={['column', 'row']}
      w={'80%'}
      minH={['450px', '350px']}
      spacing={['5', '20']}
      p={'20px'}
      alignItems={'center'}
    >
      <Box
        w={['full', '50%']}
        h={['50%', 'full']}
        rounded={'md'}
        border={'1px solid purple'}
      >
        <Img
          rounded={'md'}
          w={'100%'}
          h={'100%'}
          objectFit={'cover'}
          src={krishnaImage}
          alt="Project Screenshot"
        />
      </Box>
      <VStack
        w={['100%', '50%']}
        h={['50%', 'full']}
        alignItems={'flex-start'}
        justifyContent={'space-evenly'}
        spacing={'4'}
      >
        <Text
          fontSize={['large', 'xl']}
          textTransform={'capitalize'}
          fontWeight={'700'}
        >
          Portfolio web app
        </Text>
        <Text
          fontSize={['large', 'xl']}
          textTransform={'capitalize'}
          fontWeight={'500'}
          color={'GrayText'}
          textAlign={'left'}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          repellendus asperiores itaque tempora
        </Text>
        <Text
          fontSize={'md'}
          textTransform={'capitalize'}
          fontWeight={'500'}
          color={'GrayText'}
        >
          20/11/2023
        </Text>
        <Button variant={'solid'} colorScheme="purple">
          Visite Site
        </Button>
      </VStack>
    </Stack>
  </VStack>
);
