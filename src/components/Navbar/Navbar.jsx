import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import img from "../../assets/th.jpeg";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <HStack p={'2'} bgColor={"blue.100"} justifyContent={"space-between"}>
            <VStack>
            <Image height="50px" width={"50px"} src={img} />
            <Text pl={'4'} fontSize={'md'}>Apna Ghar</Text>
            </VStack>

            <HStack fontSize={'l'} mr={'300'}>
                <Link to={"/contact"} children={"Contact"} />
                <Link to={"/about"} children={"About us"}/>
            </HStack>
        </HStack>
    )
}

export default Navbar;