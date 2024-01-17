import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import img from "../../assets/logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <HStack bgColor={"#DDC8C4"} justifyContent={"space-between"}>
            <Image ml={'8'} height="70px" width={"70px"} src={img} />

            <HStack fontSize={'l'} px={'8'} mr={'300'}>
                <Link to={"/contact"} children={"Contact"} />
                <Link to={"/about"} children={"About us"} />
            </HStack>
        </HStack>
    )
}

export default Navbar;