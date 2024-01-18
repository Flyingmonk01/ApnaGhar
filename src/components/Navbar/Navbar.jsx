import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import img from "../../assets/logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <HStack bgColor={"#DDC8C4"} justifyContent={"space-between"}>
            <HStack mx={'auto'}>
                <Link to={"/buy"} children={"Buy"} />
                <Link to={"/sell"} children={"Sell"} />
                <Link to={"/rent"} children={"Rent"} />
            </HStack>
            <HStack mx={'auto'}>
                <Image ml={'8'} height="70px" width={"70px"} src={img} />
            </HStack>

            <HStack mx={'auto'} fontSize={'l'} px={'8'}>
                <Link to={"/contact"} children={"Contact"} />
                <Link to={"/about"} children={"About us"} />
            </HStack>
        </HStack>
    )
}

export default Navbar;