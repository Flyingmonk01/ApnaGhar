import { Avatar, Box, Button, Container, HStack, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";



const Signup = () => {

    const [avatar, setAvatar] = useState(null);

    const handleChangeAvatar = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    }

    return (
        <Container minH={'80vh'} maxW={['sm', 'md', 'lg', 'xl']} p={['4', '6']} boxShadow={'0 0 10px purple'} borderRadius={'lg'}>
            <Heading m={'auto'} w={'fit-content'} mb={['4', '6']} textAlign={'center'} borderBottom={'2px solid black'} fontSize={['xl', '2xl']}>Signup</Heading>
            <VStack spacing={4} align="stretch">
                <Box>
                    {avatar ? (
                        <Avatar alignContent={'center'} src={URL.createObjectURL(avatar)} />
                    ) : (<Avatar />)}
                    <Input type="file" onChange={handleChangeAvatar} mt="2" />
                </Box>
                <HStack>
                    <Text fontSize={['md', 'lg']} fontWeight={'500'} children='Name:' />
                    <Input type="text" placeholder="Enter your name..." />
                </HStack>
                <HStack>
                    <Text fontSize={['md', 'lg']} fontWeight={'500'} children='Email:' />
                    <Input type="email" placeholder="Enter your email..." />
                </HStack>
                <HStack>
                    <Text fontSize={['md', 'lg']} fontWeight={'500'} children='Password:' />
                    <Input type="password" placeholder="Enter your password..." />
                </HStack>
                <Button colorScheme="purple" fontSize={['md', 'lg']}>Signup</Button>
            </VStack>
            <Text textAlign="center" mt={['2', '4']}>Existing User? Click <Link style={{ color: "#FF86F9" }} to={'/login'}>here</Link></Text>
        </Container>
    );
}

export default Signup;
