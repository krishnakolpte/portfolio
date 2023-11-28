import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import krishnaImage from '../assests/krishna.png';
import { motion } from 'framer-motion';

function Card() {
  return (
    <Stack
      maxW={['90%', '1100px']}
      h={['400px', '300px']}
      m={'auto'}
      mt={['8']}
      p={['4', '6']}
      bgColor={'#6b46c1'}
      rounded={'30px'}
      backgroundImage={krishnaImage}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'contain'}
      backgroundPosition={['center', 'right']}
    >
      <VStack
        w={['100%', '60%']}
        h={'100%'}
        alignItems={'flex-start'}
        justifyContent={'space-evenly'}
        spacing={'4'}
      >
        <Heading fontSize={'3xl'} color={'white'} textTransform={'capitalize'}>
          Elevate your brand with innovation
        </Heading>
        <Text fontSize={'xl'} color={'white'} textTransform={'capitalize'}>
          Embrace challenges as opportunities, failures as lessons, and let your
          passion drive you to new heights. Your journey is the masterpiece
          you're creating.
        </Text>
        <motion.div
          initial={{
            y: '100%',
            opacity: 0,
          }}
          whileInView={{
            y: '0',
            opacity: 1,
          }}
          transition={{ delay: 0.3 }}
        >
          <Button variant={'solid'} colorScheme={'yellow'}>
            Hurry Up
          </Button>
        </motion.div>
      </VStack>
    </Stack>
  );
}

export default Card;
