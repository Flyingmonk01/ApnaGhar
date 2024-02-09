import React from 'react';
import { Box, Button, Container, HStack, Heading, Image, Input, Text, Stack } from '@chakra-ui/react';
import Brands from '../../assets/promotion';
import properties from '../../assets/properties';
import testimonials from '../../assets/testimonial';
import { FaStar } from 'react-icons/fa';
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


const Home = () => {


    return (

        <Box w={'100vw'} minH={'420vh'}>
        <Box maxW={'100vw'} minH={'420vh'}>

            <Box w={'100%'} h={'72vh'} >
                <Input outline={'none'} color={'#000'}focusBorderColor='transparent' bgColor={'white'} textColor={'#000'} type="text" placeholder='Search your city...' pos={'absolute'} zIndex={500} w={'50vw'} mt={['2', '4']} ml={'25vw'} />
                <Button pos={'absolute'} zIndex={500} mt={['2', '4']} ml={'70vw'} children={'Search'} colorScheme='purple' />
                <Carousel
                    autoPlay
                    infiniteLoop
                    showIndicators={false}
                    showStatus={false}
                >
                    {Brands.map((brand) => (
                        <Box mt={0}>
                            <Image h={'500px'} src={brand.image} />
                            <Heading children={brand.name} {...headingOptions} color={"crimson"} />
                        </Box>

                    ))}
                </Carousel>

                <Container mx={['1', '4']} my={['4', '8']}  minW={['100vw', '90vw']}>

                    <HStack overflowY={'hidden'} overflowX={'auto'} px={['2', '8']} mt={['2', '4']} h={'400px'} css={{
                            '&::-webkit-scrollbar': {
                                width: '25px',
                                height: '7px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: 'grey',
                                borderRadius: '8px',
                            },
                            '&::-webkit-scrollbar-track': {
                                backgroundColor: 'transparent',
                            }}}
                    >
                        <Container maxW="full" p={4} >
                            <Heading children={'Property in your country'} pos={'absolute'} />
                            <Box pt={'8'} whiteSpace="nowrap" display="inline-block">
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

                    <HStack
                        maxW="100vw"
                        overflowY="hidden"
                        overflowX="auto"
                        px={['4', '8']}
                        mt={['4', '8']}
                        h="400px"
                        css={{
                            '&::-webkit-scrollbar': {
                                width: '25px',
                                height: '7px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: 'grey',
                                borderRadius: '8px',
                            },
                            '&::-webkit-scrollbar-track': {
                                backgroundColor: 'transparent',
                            },
                        }}
                    >
                        <Container maxW="full" p={4}>
                            <Heading children={'Property in your city'} pos={'absolute'} mb={'8'} />
                            <Box pt={'8'} whiteSpace="nowrap" display="inline-block">
                                {properties.map((property) => (
                                    <Box key={property.id} display="inline-block" w="300px" p={2}>
                                        <Image
                                            mt={['4']}
                                            w={'250px'}
                                            h={'250px'}
                                            src={property.image}
                                            borderRadius="md"
                                            objectFit={'cover'}
                                        />
                                        <Text>{property.name}</Text>
                                    </Box>
                                ))}
                            </Box>
                        </Container>
                    </HStack>
                </Container>

                <hr />

                <Container borderRadius={'xl'} color={'#000'} bgColor={'purple.100'} boxShadow={'0 0 10px purple'} minW={'60vw'} overflowY={'hidden'} overflowX={'auto'} px={['4', '8']} mt={['8', '12']}

                >
                    <Container minH={'80vh'} W={'60vw'} p={4}>
                        <Box m={'8'}><Heading children={'Testimonials'} textAlign={'center'} /></Box>
                        <Carousel autoPlay infiniteLoop showIndicators={false} showStatus={false}>
                            {testimonials.map((testimonial, index) => (
                                <Box key={testimonial.id}>
                                    <Heading m={'8'}>{testimonial.name}</Heading>
                                    <hr />
                                    <Text m={'16'}>{testimonial.testimonial}</Text>
                                    <Text m={['1', '2']} display="flex" justifyContent={'center'} alignItems={'center'}>
                                        {testimonial.rating}<FaStar color="#FFD700" />

                                    </Text>
                                    <hr />
                                    <Text>{testimonial.date} </Text>
                                </Box>
                            ))}
                        </Carousel>
                    </Container>
                </Container>

                <Container borderRadius={'xl'} bgColor={'yellow.100'} color={'#000'} boxShadow={'0 0 10px purple'} minH={'80vh'} minW={'60vw'} my={['6', '20']} p={['6', '12']} >
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
        </Box >
    );
};



export default Home;
