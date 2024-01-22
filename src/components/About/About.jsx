import {Container, Heading, Image, Stack, VStack } from "@chakra-ui/react"
import TermsAndConditions from "../../assets/T&C";
import img from '../../assets/th.jpeg';


const About = () => {

    return (
        <Container mt={'8'} minHeight={['120vh', '100vh']} minW={'70vw'} boxShadow={'0 0 10px purple'} borderRadius={'lg'}>
            <Heading textAlign={'center'} borderBottom={'2px solid black'} m={'auto'} w={"fit-content"} children={'About Us'} />

           <Stack  direction={['column', 'row']} >
           <VStack w={['100vw', '100vw']}>
                <Image w={['250px', '500px']} my={['8', '6']} src={img} />
                {/* <Text children={`${data}`} /> */}
                <TermsAndConditions />
            </VStack>
      

           </Stack>
        </Container>
    )
}


export default About;