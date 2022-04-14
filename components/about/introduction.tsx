import { Box } from '@chakra-ui/react';
import SocialIcons from '@/components/homepage/social-icons';

const Introduction = (): JSX.Element => {
  return (
    <Box
      id="introduction"
      className="aboutPage"
      display="flex"
      justifyContent="center"
      pb={['1rem', '', '', '']}
      alignItems="center"
      textAlign="center">
      <Box display="flex">
        <Box>
          <Box
            as="img"
            margin="0px auto"
            my="2rem"
            src="/myself.jpg"
            borderRadius="50%"
            alt="Ankit"
            height={['100', '150', '200', '200']}
          />
          <Box as="p" fontSize={['1.25rem', '1.5rem', '3rem', '3rem']} mx={['0.5rem', '', '', '']}>
            <strong>
              Hi, I&apos;m&nbsp;
              <Box as="span" color="brand">
                Saiful
              </Box>
              .
            </strong>
          </Box>
          <Box
            as="p"
            fontSize={['1rem', '1rem', '1.4rem', '1.8rem']}
            mt="1rem"
            mx={['2rem', '4rem', '6rem', '8rem']}>
            I&apos;m a Front-end developer. I love JavaScript. which along with other acroynms gives
            me superpowers to develop compelling front-end, intuitive yet minimalistic interfaces
            and engaging designs.I&apos;m quite confident naturally curious, and improving my
            skills.
          </Box>
          <SocialIcons />
        </Box>
      </Box>
    </Box>
  );
};

export default Introduction;
