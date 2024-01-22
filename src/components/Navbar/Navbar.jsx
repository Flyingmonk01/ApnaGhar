import { Button, HStack, Image, Text, VStack, Link, LinkBox } from "@chakra-ui/react";
import img from "../../assets/logo.png";
import { Link as ReactRouterLink } from "react-router-dom";


const Navbar = () => {
    return (
        <HStack w={'100vw'} boxShadow={'0 0 10px purple'} justifyContent={"space-between"}>
            <HStack mx={'auto'}>
            <Link as={ReactRouterLink} mx={['1', '2']} to={"/property"} children={"Property"} />
                <Link variant="brandPrimary" as={ReactRouterLink} mx={['1', '2']} to={"/buy"} children={"Buy"} />
                <Link as={ReactRouterLink} mx={['1', '2']} to={"/sell"} children={"Sell"} />
                <Link as={ReactRouterLink} mx={['1', '2']} to={"/rent"} children={"Rent"} />
            </HStack>
            <HStack >

                <Link as={ReactRouterLink} to={'/'}>
                    <Image h={'100px'} src={img} />
                </Link>
            </HStack>

            <HStack mx={'auto'} fontSize={'l'} px={'8'}>
               
                <Link as={ReactRouterLink} mx={['1', '2']} to={"/contact"} children={"Contact"} />
                <Link as={ReactRouterLink} mx={['1', '2']} to={"/about"} children={"About us"} />
                <Button variant={'outline'} colorScheme="purple"><Link as={ReactRouterLink} mx={['1', '2']} to={'/signup'}>Signup</Link></Button>
            </HStack>
        </HStack>
    )
}

export default Navbar;