import React from 'react';
import { Box, Container, HStack, Heading, Image, Input, Text } from '@chakra-ui/react';
import Brands from '../../assets/promotion';
import properties from '../../assets/properties';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '85%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
};


const Images = ({ srcs, heading }) => (
    <Box mx={['4', '8']}>
        <Image
            h={'250px'}
            w={'250px'}
            src={srcs}
            alt={heading}
            objectFit="cover"
            borderRadius="md"
            mb={4}
        />
        <Heading as="h3" size="md" mb={2} color="teal.500">
            {heading}
        </Heading>
    </Box>
);

const Home = () => {


    return (
        <Box w={'100vw'} minH={'320vh'}>
            <Box w={'100%'} h={'72vh'} boxShadow={'0 5px 10px purple'}>
                <Input bgColor={'white'} textColor={'#000'} type="text" placeholder='Search your city...' pos={'absolute'} zIndex={500} w={'50vw'} mt={['2', '4']} ml={'25vw'} />
                <Carousel
                    autoPlay
                    infiniteLoop
                >
                    {Brands.map((brand) => (
                        <Box mt={0}>
                            <Image h={'500px'} src={brand.image} />
                            <Heading children={brand.name} {...headingOptions} color={"crimson"} />
                        </Box>

                    ))}
                </Carousel>

                <HStack boxShadow={'0 5px 10px purple'} maxW={'100vw'} overflowY={'hidden'} overflowX={'auto'} px={['4', '8']} mt={['8', '12']} h={'350px'}
                    css={{
                        '&::-webkit-scrollbar': {
                            display: 'hidden'
                        }
                    }} >
                    <Container maxW="full" p={4} >
                        <Heading children={' Categories 1'} />
                        <Box whiteSpace="nowrap" display="inline-block">
                            {properties.map((property) => (
                                <Box
                                    key={property.id}
                                    display="inline-block"
                                    w="300px"  // Set the minimum width of each property box
                                    p={2}
                                >
                                    <Image mt={['4']} w={'250px'} h={'250px'} src={property.image} borderRadius="md" objectFit={'cover'} />
                                    <Text>{property.name}</Text>
                                </Box>
                            ))}
                        </Box>
                    </Container>
                </HStack>
                <hr />
                <HStack boxShadow={'0 5px 10px purple'} maxW={'100vw'} overflowY={'hidden'} overflowX={'auto'} px={['4', '8']} mt={['8', '12']} h={'350px'}
                    css={{
                        '&::-webkit-scrollbar': {
                            display: 'hidden'
                        }
                    }} >
                    <Container maxW="full" p={4} >
                        <Heading children={'Categories 2'} />
                        <Box whiteSpace="nowrap" display="inline-block">
                            {properties.map((property) => (
                                <Box
                                    key={property.id}
                                    display="inline-block"
                                    w="300px"  // Set the minimum width of each property box
                                    p={2}
                                >
                                    <Image mt={['4']} w={'250px'} h={'250px'} src={property.image} borderRadius="md" objectFit={'cover'} />
                                    <Text>{property.name}</Text>
                                </Box>
                            ))}
                        </Box>
                    </Container>
                </HStack>

                <hr />

                <HStack boxShadow={'0 5px 10px purple'} maxW={'100vw'} overflowY={'hidden'} overflowX={'auto'} px={['4', '8']} mt={['8', '12']} h={'350px'}
                    css={{
                        '&::-webkit-scrollbar': {
                            display: 'hidden'
                        }
                    }} >
                    <Container maxW="full" p={4} >
                        <Heading children={'Testimonials'} />
                        <Box whiteSpace="nowrap" display="inline-block">
                            {properties.map((property) => (
                                <Box
                                    key={property.id}
                                    display="inline-block"
                                    w="300px"  // Set the minimum width of each property box
                                    p={2}
                                >
                                    <Image mt={['4']} w={'250px'} h={'250px'} src={property.image} borderRadius="md" objectFit={'cover'} />
                                    <Text>{property.name}</Text>
                                </Box>
                            ))}
                        </Box>
                    </Container>
                </HStack>

                <Container minW={'90vw'} my={['6', '10']} >
                    <Heading textAlign={'center'}>Our Vision</Heading>
                    <Text>
                        The application of blockchain technology in the real estate industry has the potential to bring about significant changes and improvements. Here's a vision of how blockchain could impact the real estate sector:

                        Transparent and Efficient Transactions:

                        Blockchain can provide a transparent and immutable ledger for real estate transactions. All relevant information, including property details, ownership history, and transaction records, could be stored on a blockchain. This transparency can reduce fraud, errors, and disputes, making transactions more efficient and secure.
                        Smart Contracts:

                        Smart contracts, which are self-executing contracts with the terms of the agreement directly written into code, can automate and streamline various processes in real estate transactions. For example, smart contracts could automatically execute property transfers, handle payments, and enforce contract terms, reducing the need for intermediaries and paperwork.

                        <Heading mt={['4', '8']} textAlign={'center'}>Our Contact</Heading>
                        ApnaGhar Real Estate Company: Dream Homes Realty

                        Address: 123 Hollywood Blvd, Suite 567
                        City: Beverly Hills
                        State: California
                        ZIP Code: 90210
                        Phone: (555) 123-4567
                        Email: info@dreamhomesrealty.com
                        Website: www.dreamhomesrealty.com
                    </Text>
                </Container>
            </Box>
        </Box>
    );
};



export default Home;
