import { Box, Button, Container, HStack, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Container minH={'70vh'} boxShadow={'0 0 10px purple'} my={['4', '8']} p={['2', '4']} maxW={'xl'} borderRadius={'lg'}>
            <Heading m={'auto'} w={'fit-content'} textAlign={'center'} p={'2'} fontSize={['xl', '2xl']}>Login</Heading>
            <VStack spacing={4} m={['2', '4']} p={['2', '4']} align="stretch">
                <HStack>
                    <Text fontSize={['md', 'lg']} fontWeight={'500'} children='Email:' />
                    <Input type="email" placeholder="Enter your email..." />
                </HStack>
                <HStack>
                    <Text fontSize={['md', 'lg']} fontWeight={'500'} children='Password:' />
                    <Input type={'password'} placeholder="Enter your password..." />
                </HStack>
                <Button  colorScheme="purple" fontSize={['md', 'lg']}>Login</Button>
            </VStack>
            <Text textAlign="center" fontSize={['sm', 'md']}>New User? Click <Link style={{ color: "#FF86F9" }} to={'/signup'}>here</Link></Text>
        </Container>
    );
}

export default Login;
