import { Box, Heading, Text, HStack, Image, Flex, Button } from "@chakra-ui/react";
import { FaArrowAltCircleUp, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import img from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (

        <Flex borderTop={'1px solid purple'} color={'#fff'} minH={'30vh'} bgColor={'gray.900'} p={'8'} flexDirection={['column', 'row']} justifyContent={'center'} alignItems={'center'}>
            <HStack flexDir={'column'} mx={'6'} maxW={'20vw'}>
                <Heading fontWeight={'400'} textAlign={'center'} w={'fit-content'} children={'Flying_Monk'}/>
                <Text>All Rights Reserved</Text>
            </HStack>
            <HStack flexDir={'column'} mx={'6'} flex="1">
                <Image src={img} alt="Logo" maxW={{ base: "100px", md: "120px" }} mb={4} />
                <Text fontSize="sm">Our vision is to make all people the best place to live for them</Text>
            </HStack>
            <HStack flexDir={'column'} mx={'6'} flex="1">
                <Heading size="md" mb={4}>Information</Heading>
                <Text>145 New York, FL 5497, USA</Text>
                <HStack mt={2}>
                    <Link to={'https://www.instagram.com'}><FaInstagram size={'50'} /></Link>
                    <Link to={'https://www.youtube.com'}><FaYoutube size={'50'} /></Link>
                    <Link to={'https://www.linkedin.com/in/pronita-barman/'}><FaLinkedin size={'50'} /></Link>
                    <Link to={'https://www.twitter.com/Flying_Monk_'}><FaTwitter size={'50'} /></Link>
                    
                    
                </HStack>
            </HStack>
            <Button pos={'absolute'} bottom={['400','2']} right={'2'} background={'transparent'} color={'#fff'} onClick={scrollToTop}><FaArrowAltCircleUp fontSize={'25px'} /></Button>
        </Flex>
    )
}

export default Footer;
