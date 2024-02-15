import { Box, Container, Flex, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Brands from "../../assets/promotion";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";


const Property = () => {

    const markerRef = useRef(null);

    useEffect(() => {
        // Access the marker's Leaflet instance
        const marker = markerRef.current;

        // Check if the marker exists
        if (marker) {
            // Get the marker's Leaflet LatLng object
            const markerLatLng = marker.getLatLng();

            // Update the map's center and zoom level to fit the marker
            marker._map.setView(markerLatLng, 13);
        }
    }, []);

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
        <Box minH={'100vh'} maxW={'100vw'} my={'8'}>
            <Heading mb={'6'} fontWeight={'300'} textAlign={"center"}>Property Details</Heading>
            <Carousel autoPlay infiniteLoop showIndicators={true} showArrows={false} showStatus={false}>
                {Brands.map((brand, index) => (
                    <Box w={['100vw', '60vw']} key={index} m='auto' h="50vh" borderRadius="md" overflow="hidden">
                        <Image src={brand.image} alt={brand.name} h="100%" />
                    </Box>
                ))}
            </Carousel>

            <Flex color={"white"} flexDirection={['column', 'row']} mx={'12'}>
                <VStack p={8} bgColor={'green.900'} px={4} borderRadius={8} alignItems="flex-start">
                    <Text fontWeight="bold">Address:</Text>
                    <Text fontFamily={'italic'}>{property.address}</Text>
                    <Text fontWeight="bold">City:</Text>
                    <Text fontFamily={'italic'}>{property.city}</Text>
                    <Text fontWeight="bold">State:</Text>
                    <Text fontFamily={'italic'}>{property.state}</Text>
                    <Text fontWeight="bold">Zipcode:</Text>
                    <Text fontFamily={'italic'}>{property.zipcode}</Text>
                    <Text fontWeight="bold">Price:</Text>
                    <Text fontFamily={'italic'}>{property.price}</Text>
                    <Text fontWeight="bold">Bedrooms:</Text>
                    <Text fontFamily={'italic'}>{property.bedrooms}</Text>
                    <Text fontWeight="bold">Bathrooms:</Text>
                    <Text fontFamily={'italic'}>{property.bathrooms}</Text>
                    <Text fontWeight="bold">Area:</Text>
                    <Text fontFamily={'italic'}>{property.area}</Text>
                    <Text fontWeight="bold">Description:</Text>
                    <Text fontFamily={'italic'}>{property.description}</Text>
                </VStack>
                <VStack mx={['0', '4']} bgColor={'green.900'} border='2px solid black' h={'100vh'} w={'100%'} p={4} borderRadius={8}>
                    {/* <Text fontWeight="bold">Location</Text> */}
                    <MapContainer style={{ width: "100%", height: "100%" }} center={[28.644800, 77.216721]} zoom={13}>
                        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[26.83928000, 80.92313000]} color='red' ref={markerRef} />
                    </MapContainer>
                </VStack>
            </Flex>
        </Box>
    )
}

export default Property;