import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" mt="8" p="4" bg="#13070C" color="white" position="fixed" bottom="0" width="100%">
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            ApnaGhar Real Estate
          </Text>
          <Text fontSize="sm">Selling and Renting Properties with Blockchain Technology</Text>
        </Box>
        <Box>
          <Text>Follow Us:</Text>
          <Flex>
            <Link mx="2" href="#" target="_blank" rel="noopener noreferrer">
              Twitter
            </Link>
            <Link mx="2" href="#" target="_blank" rel="noopener noreferrer">
              Facebook
            </Link>
            <Link mx="2" href="#" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Text mt="4" textAlign="center">
        © 2024 ApnaGhar Real Estate. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
