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

        <Flex borderTop={'1px solid purple'} minH={'30vh'} bgColor={'gray.900'} p={'8'} flexDirection={['column', 'row']} justifyContent={'center'} alignItems={'center'}>
            <Box mx={'6'} maxW={'20vw'}>
                All Rights are reserved
            </Box>
            <Box mx={'6'} flex="1">
                <Image src={img} alt="Logo" maxW={{ base: "100px", md: "120px" }} mb={4} />
                <Text fontSize="sm">Our vision is to make all people the best place to live for them</Text>
            </Box>
            <Box mx={'6'} flex="1">
                <Heading size="md" mb={4}>Information</Heading>
                <Text>145 New York, FL 5497, USA</Text>
                <HStack mt={2}>
                    <Link to={'https://www.instagram.com'}><FaInstagram size={'50'} /></Link>
                    <Link to={'https://www.youtube.com'}><FaYoutube size={'50'} /></Link>
                    <FaLinkedin size={'50'} />
                    <FaTwitter size={'50'} />
                </HStack>
            </Box>
            <Button onClick={scrollToTop}><FaArrowAltCircleUp fontSize={'25px'} /></Button>
        </Flex>
    )
}

export default Footer;
