import React from 'react';
import { VStack, Image, Text, Heading } from '@chakra-ui/react';

export const Header: React.FC = () => {
  return (
    <VStack spacing={2}>
      <Image src="/logo.png" alt="NO7 Logo" boxSize="60px" />
      <Heading as="h1" size="lg" color="white" textAlign="center">
        Book for the Conference
      </Heading>
      <Text fontSize="sm" color="gray.400" textAlign="center">
        Crafted by iManipur Team
      </Text>
      <Text fontSize="md" fontWeight="bold" color="white" textAlign="center">
        Eriecha Singgi Campaign
      </Text>
    </VStack>
  );
};
