import React from 'react';
import { Container, Heading, VStack, Text, Box, Input, Textarea, Button } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Container borderRadius={'lg'} boxShadow={'0 0 10px #0006'} mt={'8'} maxW="xl" minH={'100vh'} centerContent>
      <Heading mt={['4', '8']} as="h2" mb={8} textAlign="center">
        Contact ApnaGhar
      </Heading>

      <VStack spacing={8} align="start" width="100%" maxW="lg">
        <Text>
          Thank you for your interest in ApnaGhar! Whether you have questions about our properties, want to inquire about our services, or provide feedback, we are here to assist you.
        </Text>

        <Box width="100%">
          <form>
            <VStack spacing={4} align="start" width="100%">
              <Input type="text" placeholder="Your Name" size="md" />
              <Input type="email" placeholder="Your Email" size="md" />
              <Textarea placeholder="Your Message" size="md" />
              <Button colorScheme="blue" size="md" type="submit">
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;
