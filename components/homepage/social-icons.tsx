import React from 'react';
import { Box } from '@chakra-ui/react';
import { AiOutlineGithub, AiOutlineTwitter, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

const SocialIcons = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="flex-end">
      <Box
        as="a"
        color="#273c75"
        fontSize={['1.4rem', '2.4rem', '3rem', '3rem']}
        mt="2.5rem"
        mr="20px"
        href="https://facebook.com/saiful70.me">
        <AiFillFacebook />
      </Box>
      <Box
        as="a"
        fontSize={['1.4rem', '2.4rem', '3rem', '3rem']}
        mt="2.5rem"
        mr="20px"
        href="https://github.com/saiful-70">
        <AiOutlineGithub />
      </Box>
      <Box
        as="a"
        color="#1DA1F2"
        fontSize={['1.4rem', '2.4rem', '3rem', '3rem']}
        mt="2.5rem"
        mr="20px"
        href="https://twitter.com/saiful70_">
        <AiOutlineTwitter />
      </Box>
      <Box
        as="a"
        color="#0c66c2"
        fontSize={['1.4rem', '2.4rem', '3rem', '3rem']}
        mt="2.5rem"
        href="https://www.linkedin.com/in/saiful70/">
        <AiFillLinkedin />
      </Box>
    </Box>
  );
};

export default SocialIcons;
