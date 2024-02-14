import { Flex, VStack } from "@chakra-ui/react";
import { Box, Container, HStack, Image, Heading, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";




const Properties = () => {


    const url = "https://dummyjson.com/products";
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch(url);
                const {products} = await response.json();
                setData(products);
                console.log(typeof products);
            } catch (error) {
                console.log(error);
            }
        }
        loadData();
    }, []);

    console.log(data);


    return (
        <Container minW="full" p={6} >

            <Stack w={'100%'} h={'100%'} >
                <Flex wrap={'wrap'} gap={'7'} justifyContent={'space-around'}>
                    {
                        data.map((ele) => (
                            <Boxes key={ele.id} source={ele.thumbnail} text={ele.title} />
                        ))
                    }
                </Flex>
            </Stack>
        </Container>
    );
}


const Boxes = ({ source, text }) => {
    return (
        <Box borderWidth={'1px'} borderColor={'black'} maxW={'260px'}>
            <Box borderWidth={'1px'} borderColor={'black'}>
                <Image borderRadius='xl' objectFit={'cover'} w={'260px'} h={'260px'} src={source} />
            </Box>
            <HStack mt={'4'} spacing={'6'} borderRadius={'5'} borderWidth={'1px'} borderColor={'black'} >
                <Box ml={'3'}>
                    {text}
                </Box>
                {/* <Box>Location</Box>
                        <Text>Price</Text> */}

            </HStack>
        </Box>
    )
}

export default Properties;