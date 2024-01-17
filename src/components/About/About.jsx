import { Box, Container, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"
import TermsAndConditions from "../../assets/T&C";
import img from '../../assets/th.jpeg';


const About = () => {

    return (
        <Container mt={'8'} minHeight={['200vh', '160vh']} minW={'90vw'} border={'2px solid red'}>
            <Heading textAlign={'center'} borderBottom={'2px solid black'} m={'auto'} w={"fit-content"} children={'About Us'} />

           <Stack direction={['column', 'row']} >
           <VStack w={['100vw', '50vw']}>
                {/* <Text children={`${data}`} /> */}
                <TermsAndConditions />
            </VStack>
            <VStack  m={'auto'} justifyContent={'center'} alignItems={'center'}>
                <Image w={'800px'} src={img} />
            </VStack>
           </Stack>
        </Container>
    )
}


export default About;