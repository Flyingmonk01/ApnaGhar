import React from 'react';
import { Box, Center, Container, Heading, Image, Input, Text } from '@chakra-ui/react';
import Brands from '../../assets/promotion';
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
        <Center w={'100vw'}>
            <Box w={'full'} h={'90vh'}>
                <Input color={"crimson"} type="text" placeholder='Search your city...' pos={'absolute'} zIndex={500} background={'white'} w={'50vw'} mt={['2', '4']} ml={'25vw'} />
                <Carousel
                    autoPlay
                    infiniteLoop >
                    {Brands.map((brand) => (
                        <Box mt={0}>
                            <Image w={'1200px'} h={'500px'} src={brand.image} />
                            <Heading children={brand.name} {...headingOptions} color={"crimson"} />
                        </Box>

                    ))}
                </Carousel>
            </Box>
        </Center>
    );
};



export default Home;
