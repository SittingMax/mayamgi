import React from 'react';
import { ChakraProvider, Box, VStack, Image, Heading, Text } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RegistrationForm } from './components/RegistrationForm';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" bg="#0E1116" display="flex" alignItems="center" justifyContent="center" p={4}>
        <Box bg="#1E2329" borderRadius="lg" boxShadow="lg" p={8} width="100%" maxWidth="400px">
          <VStack spacing={4}>
            <Image src="/logo.png" alt="NO7 Logo" boxSize="60px" />
            <Heading as="h1" size="lg" color="white" textAlign="center">
              Ereicha Singgi Camapign
            </Heading>
            <Text fontSize="sm" color="gray.400" textAlign="center">
              Crafted by iManipur Team
            </Text>
            <Text fontSize="md" fontWeight="bold" color="white" textAlign="center">
              Achumba Information Mensinbi O
            </Text>
            <RegistrationForm />
          </VStack>
          <ToastContainer position="top-center" />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;