import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import '@/styles/global.scss';

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    colors: {
      brand: '#ff851b',
      link: '#1890ff',
      project: '#0275d8',
      blog: 'tomato',
      textColor: 'black',
      bgColor: 'white'
    },
    fonts: {
      body: 'Titillium Web'
    }
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
