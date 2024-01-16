import { HStack, Image, Text } from "@chakra-ui/react";


const Navbar = () => {
    return (
        <HStack p={'2'} bgColor={"blueviolet"}>
            <div>
            <Image height="50px" width={"50px"} src="public\vite1.jpeg" />
            <Text color={"black"}>Apna Ghar</Text>
            </div>
        </HStack>
    )
}

export default Navbar;