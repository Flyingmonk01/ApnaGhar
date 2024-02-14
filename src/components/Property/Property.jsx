import { Box, Container, Flex, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Brands from "../../assets/promotion";


const Property = () => {

    const property = {
        "id": 3,
        "address": "789 Oak St",
        "city": "Testville",
        "state": "Teststate",
        "zipcode": "98765",
        "price": 180000,
        "bedrooms": 2,
        "bathrooms": 1,
        "area": 1200,
        "description": "A charming starter home perfect for a small family.",
        "image": "https://example.com/house3.jpg"
    }

    return (
        <Container minH={'100vh'} maxW={['100vw', '60vw']} my={'8'}>
            <Heading fontWeight={'300'} textAlign={"center"}>Property Details</Heading>
            <Carousel autoPlay infiniteLoop showIndicators={true} showArrows={false} showStatus={false}>
                {Brands.map((brand, index) => (
                    <Box key={index} w="959" m={['0', '8']} h="50vh" borderRadius="md" overflow="hidden">
                        <Image src={brand.image} alt={brand.name} h="100%" />
                    </Box>
                ))}
            </Carousel>

            <Flex flexDirection={['column', 'row']}>
                <VStack border={'1px solid red'} p={4} borderRadius={8} alignItems="flex-start">
                    <Text fontWeight="bold">Address:</Text>
                    <Text>{property.address}</Text>
                    <Text fontWeight="bold">City:</Text>
                    <Text>{property.city}</Text>
                    <Text fontWeight="bold">State:</Text>
                    <Text>{property.state}</Text>
                    <Text fontWeight="bold">Zipcode:</Text>
                    <Text>{property.zipcode}</Text>
                    <Text fontWeight="bold">Price:</Text>
                    <Text>{property.price}</Text>
                    <Text fontWeight="bold">Bedrooms:</Text>
                    <Text>{property.bedrooms}</Text>
                    <Text fontWeight="bold">Bathrooms:</Text>
                    <Text>{property.bathrooms}</Text>
                    <Text fontWeight="bold">Area:</Text>
                    <Text>{property.area}</Text>
                    <Text fontWeight="bold">Description:</Text>
                    <Text>{property.description}</Text>
                </VStack>
                <VStack w={'100%'} border={'1px solid red'} p={4} borderRadius={8}>
                    <Text fontWeight="bold">Map</Text>
                    {/* Place your map component here */}
                </VStack>
            </Flex>
        </Container>
    )
}

export default Property;