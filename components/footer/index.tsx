import { Box, HStack, Link as _Link } from '@chakra-ui/react';
import React, { FC } from 'react';

const Footer: FC = () => {
  return (
    <Box p={4} as="footer">
      <Box maxW="6xl" mx="auto" fontSize="xs">
        <Box d="flex" textAlign="center" justifyContent="center" alignItems="center">
          <HStack spacing={2}>
            <Box>
              <_Link href="https://github.com/saiful-70/saifuls.xyz" p={4}>
                Source code on Github
              </_Link>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
