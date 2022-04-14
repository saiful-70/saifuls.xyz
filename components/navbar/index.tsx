import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useColorMode } from '@chakra-ui/react';
import { BsMoon, BsSun } from 'react-icons/bs';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  const loadMenu = () => {
    const menus = [
      { name: 'Home', link: '/' },
      { name: 'Projects', link: '/projects' },
      { name: 'About me', link: '/about' }
    ];

    return menus.map((menu, index) => (
      <Box
        mr="20px"
        key={index}
        cursor="pointer"
        fontWeight="bold"
        color={router.asPath === menu.link ? 'brand' : ''}>
        <Link href={menu.link} passHref>
          <Box as="span" fontWeight="bold">
            {menu.name}
          </Box>
        </Link>
      </Box>
    ));
  };

  return (
    <Box display="flex" justifyContent="space-between" height="10vh">
      <Box height="20px" m="1.5rem">
        <IconButton
          icon={colorMode === 'light' ? <BsMoon /> : <BsSun />}
          aria-label="change mode"
          borderRadius="md"
          onClick={toggleColorMode}
        />
      </Box>
      <Box display="flex" alignItems="center" fontSize="1.2rem">
        {loadMenu()}
      </Box>
    </Box>
  );
};

export default Navbar;
