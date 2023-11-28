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
import { motion } from 'framer-motion';

import aboutImage from '../assests/about.JPG';

function About() {
  return (
    <section id="about">
      <VStack
        maxW={['100%', '1100px']}
        minH={['100vh', '500px']}
        m={'auto'}
        spacing={['8', '4']}
        mt={['8']}
        p={'4'}
      >
        <VStack w={'full'} spacing={'0'}>
          <Heading textTransform={'capitalize'} fontWeight={'700'}>
            About Me
          </Heading>
          <Text
            fontSize={'xl'}
            textTransform={'capitalize'}
            fontWeight={'700'}
            color={'GrayText'}
          >
            My Introduction
          </Text>
        </VStack>

        <Stack
          w={'full'}
          mt={'4'}
          justifyContent={'space-evenly'}
          direction={['column', 'row']}
          spacing={['8', '0']}
        >
          <Box width={['350px', '40%']}>
            <motion.div
              initial={{
                x: '-100%',
                opacity: 0,
              }}
              whileInView={{
                x: '0',
                opacity: 1,
              }}
              transition={{ delay: 0.4 }}
            >
              <Img
                w={'350px'}
                h={'350px'}
                rounded={'lg'}
                objectFit={'cover'}
                src={aboutImage}
                alt="Krishnas Image"
              />
            </motion.div>
          </Box>
          <VStack
            width={['100%', '50%']}
            alignItems={'flex-start'}
            justifyContent={'center'}
            spacing={'8'}
          >
            <Text
              color={'GrayText'}
              fontSize={'md'}
              textTransform={'capitalize'}
              fontWeight={'500'}
            >
              Hi Iam Krishna Kolapte, Experienced React developer passionate
              about crafting elegant and efficient user interfaces. Committed to
              continuous learning, teamwork, and delivering impactful solutions
              for enhanced user experiences.
            </Text>
            <Stack
              direction={'row'}
              width={'full'}
              alignItems={'flex-start'}
              justifyContent={['center', 'space-evenly']}
              w={'full'}
              wrap={'wrap'}
              spacing={'3'}
            >
              <Box textAlign={'center'} w={'150px'} height={'130px'} p={'4'}>
                <Heading textTransform={'capitalize'} fontWeight={'700'}>
                  01+
                </Heading>
                <Text
                  color={'GrayText'}
                  fontSize={'md'}
                  textTransform={'capitalize'}
                  fontWeight={'500'}
                >
                  Years Of experience
                </Text>
              </Box>
              <Box textAlign={'center'} w={'150px'} height={'130px'} p={'4'}>
                <Heading textTransform={'capitalize'} fontWeight={'700'}>
                  25+
                </Heading>
                <Text
                  color={'GrayText'}
                  fontSize={'md'}
                  textTransform={'capitalize'}
                  fontWeight={'500'}
                >
                  Projects Done
                </Text>
              </Box>
              <Box textAlign={'center'} w={'150px'} height={'130px'} p={'4'}>
                <Heading textTransform={'capitalize'} fontWeight={'700'}>
                  02+
                </Heading>
                <Text
                  color={'GrayText'}
                  fontSize={'md'}
                  textTransform={'capitalize'}
                  fontWeight={'500'}
                >
                  clients Closed
                </Text>
              </Box>
            </Stack>
            <motion.div
              initial={{
                x: '100%',
                opacity: 0,
              }}
              whileInView={{
                x: '0',
                opacity: 1,
              }}
            >
              <a href="#contact">
                <Button size={'lg'} variant={'solid'} colorScheme={'purple'}>
                  <Text textTransform={'capitalize'}>Contact Me</Text>
                </Button>
              </a>
            </motion.div>
          </VStack>
        </Stack>
      </VStack>
    </section>
  );
}

export default About;
