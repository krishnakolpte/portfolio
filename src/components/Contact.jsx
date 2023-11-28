import React, { useState } from 'react';
import {
  Button,
  HStack,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

function Contact() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !message)
      return toast.error('please enter all fields');
    toast.success('message sent successfully');
    setfirstName('');
    setlastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact">
      <VStack
        maxW={['100%', '1100px']}
        minH={['40vh', '400px']}
        m={'auto'}
        spacing={['8', '4']}
        mt={['8']}
        p={'4'}
      >
        <VStack w={'full'} spacing={'0'}>
          <Heading textTransform={'capitalize'} fontWeight={'700'}>
            Contact Me
          </Heading>
          <Text
            fontSize={'xl'}
            textTransform={'capitalize'}
            fontWeight={'700'}
            color={'GrayText'}
          >
            My Contact
          </Text>
        </VStack>

        <form style={{ width: '100%' }}>
          <VStack
            mt={'4'}
            w={['90%', '50%']}
            spacing={'5'}
            align={'flex-start'}
            m={'auto'}
          >
            <HStack w={'100%'} spacing={'3'}>
              <Input
                type="text"
                placeholder="First Name"
                required
                value={firstName}
                onChange={e => setfirstName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={e => setlastName(e.target.value)}
              />
            </HStack>
            <Input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Textarea
              rows={'5'}
              required
              noOfLines={'5'}
              placeholder="Message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <motion.span
              initial={{
                x: '100%',
                opacity: 0,
              }}
              whileInView={{
                x: '0',
                opacity: 1,
              }}
              transition={{ delay: 0.3 }}
            >
              <Button
                onClick={handleSubmit}
                type="submit"
                variant={'solid'}
                colorScheme="purple"
              >
                Send
              </Button>
            </motion.span>
          </VStack>
        </form>
      </VStack>
    </section>
  );
}

export default Contact;
