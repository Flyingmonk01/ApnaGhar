import { Box, Button, Container, HStack, Heading, Input, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";

const Login = () => {
    return < >
        <Container mt={'8'} p={'4'} maxW={'xl'} h={'xl'} border={'2px solid violet'} borderRadius={'xl'}>
            <Heading m={'auto'} w={'fit-content'} borderBottom={'2px solid black'} textAlign={'center'} p={'4'}>Login</Heading>
            <Box m={'4'} p={'4'}>
                <HStack>
                <Text fontSize={'l'} fontWeight={'500'} children='Email:'/>
                <Input type="email" placeholder="Enter your email..." />
                </HStack>
                <HStack>
                <Text fontSize={'l'} fontWeight={'500'} children='Password:'/>
                <Input type={'password'} placeholder="Enter your password..." />
                </HStack>
                <Button>Login</Button>
            </Box>
            <Text>New User ? Click <Link style={{color:"#FF86F9"}} to={'/signup'}>here</Link></Text>
        </Container>
    </>
}


export default Login;