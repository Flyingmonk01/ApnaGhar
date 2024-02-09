import { Box, Heading, Text, HStack, Image, Flex } from "@chakra-ui/react";
import { MdContacts } from "react-icons/md";
import { RiHomeSmileFill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import { FaProductHunt } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa";
import img from "../../assets/logo.png";

const Footer = () => {
    return (
        <Box bg="gray.800" color="white" py={12}>
            <Flex direction={{ base: "column", md: "row" }} maxW="1200px" mx="auto" justifyContent="space-between" px={8}>
                <Box flex="1">
                    <Image src={img} alt="Logo" maxW={{ base: "100px", md: "120px" }} mb={4} />
                    <Text fontSize="sm">Our vision is to make all people the best place to live for them</Text>
                </Box>
                <Box flex="1">
                    <Heading size="md" mb={4}>Information</Heading>
                    <Text>145 New York, FL 5497, USA</Text>
                    <HStack mt={2}>
                        <MdContacts />
                        <RiHomeSmileFill />
                        <FcAbout />
                        <FaProductHunt />
                        <FaServicestack />
                    </HStack>
                </Box>
            </Flex>
        </Box>
    )
}

export default Footer;
