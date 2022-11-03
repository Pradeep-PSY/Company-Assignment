import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './components/Navbar';
import MainRoutes from './pages/MainRoutes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <MainRoutes />
    </ChakraProvider>
  );
}

export default App;
