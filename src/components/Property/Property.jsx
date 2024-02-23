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
                // console.log(typeof products);
            } catch (error) {
                console.log(error);
            }
        }
        loadData();
    }, []);

    // console.log(data);


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
       
        <Box boxShadow={'0 0 5px purple'} borderRadius={'md'} h={'300px'} w={'300px'} border={'2px solid #0001'}>
        <Image p={'2'} h={'200px'} w="100%" objectFit="cover" src={source} alt={`Property`} />
        <Text p={'4'}>{text}</Text>
      </Box>
    )
}

export default Properties;