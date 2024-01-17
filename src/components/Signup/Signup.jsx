import { Avatar, Box, Button, Container, HStack, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {

    const [avatar, setAvatar] = useState(null);

    const handleChangeAvatar = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    }

    return (
        <Container maxW={'xl'} h={'xl'} style={{ border: '1px solid red' }}>
            <Heading m={'auto'} w={'fit-content'} borderBottom={'2px solid black'} textAlign={'center'} p={'4'}>Signup</Heading>
            <Box w={'full'}>
                {avatar ? (
                    <Avatar src={URL.createObjectURL(avatar)}/>
                ):(<Avatar />)}   
                <Input type="file" onChange={handleChangeAvatar}/>
                <HStack>
                    <Text fontSize={'l'} fontWeight={'500'} children='Name:' />
                    <Input type="text" placeholder="Enter your name..." />
                </HStack>
                <HStack>
                    <Text fontSize={'l'} fontWeight={'500'} children='Email:' />
                    <Input type="email" placeholder="Enter your email..." />
                </HStack>
                <HStack>
                    <Text fontSize={'l'} fontWeight={'500'} children='Password:' />
                    <Input type="password" placeholder="Enter your password..." />
                </HStack>
                <Button>Signup</Button>
            </Box>
            <Text>Existing User? Click <Link style={{color:"#FF86F9"}} to={'/login'}>here</Link></Text>
        </Container>
    );
}

export default Signup;
