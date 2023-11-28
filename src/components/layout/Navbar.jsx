import { Button, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MdMenu } from 'react-icons/md';

function Navbar() {
  const [openModal, setModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`${scrolled ? 'sticky-header' : ''}`}>
      <Stack
        direction={'row'}
        maxW={['full', '1100px']}
        m={'auto'}
        h={'80px'}
        align={'center'}
        justifyContent={'space-between'}
        p={'4'}
      >
        <motion.div
          initial={{
            x: '-100%',
            opacity: 0,
          }}
          whileInView={{
            x: '0',
            opacity: 1,
          }}
        >
          <Heading fontSize={'2xl'} textTransform={'capitalize'}>
            Krishna.
          </Heading>
        </motion.div>
        <HStack display={['none', 'flex']}>
          <a href="#home">
            <Button variant={'ghost'} colorScheme="purple">
              Home
            </Button>
          </a>

          <a href="#about">
            <Button variant={'ghost'} colorScheme="purple">
              About
            </Button>
          </a>

          <a href="#services">
            <Button variant={'ghost'} colorScheme="purple">
              Services
            </Button>
          </a>

          <a href="#contact">
            <Button variant={'ghost'} colorScheme="purple">
              Contact
            </Button>
          </a>
        </HStack>
        <HStack>
          <ColorModeSwitcher />
          <Button
            onClick={() => setModal(!openModal)}
            display={['', 'none']}
            variant={'ghost'}
            colorScheme="purple"
          >
            <MdMenu size={'30px'} />
          </Button>
        </HStack>
      </Stack>
      <NavModal setModal={setModal} openModal={openModal} />
    </nav>
  );
}

const NavModal = ({ setModal, openModal }) => (
  <VStack
    className={`navphone ${openModal ? 'navPhoneComes' : ''}`}
    display={['', 'none']}
    w={'100vw'}
    h={'100vh'}
    bgColor={'#6b46c1'}
    position={'fixed'}
    zIndex={'overlay'}
    top={'0'}
    left={'0'}
    p={'8'}
  >
    <HStack w={'full'} justifyContent={'space-between'}>
      <Heading fontSize={'2xl'} textTransform={'capitalize'}>
        Krishna.
      </Heading>

      <Button
        onClick={() => setModal(!openModal)}
        variant={'ghost'}
        colorScheme="black"
      >
        Close
      </Button>
    </HStack>
    <VStack
      spacing={'8'}
      w={'full'}
      h={'80%'}
      align={'center'}
      justifyContent={'center'}
    >
      <a href="#home">
        <Button
          onClick={() => setModal(!openModal)}
          variant={'ghost'}
          colorScheme="black"
        >
          Home
        </Button>
      </a>

      <a href="#about">
        <Button
          onClick={() => setModal(!openModal)}
          variant={'ghost'}
          colorScheme="black"
        >
          About
        </Button>
      </a>

      <a href="#services">
        <Button
          onClick={() => setModal(!openModal)}
          variant={'ghost'}
          colorScheme="black"
        >
          Services
        </Button>
      </a>

      <a href="#contact">
        <Button
          onClick={() => setModal(!openModal)}
          variant={'ghost'}
          colorScheme="black"
        >
          Contact
        </Button>
      </a>
    </VStack>
  </VStack>
);

export default Navbar;
