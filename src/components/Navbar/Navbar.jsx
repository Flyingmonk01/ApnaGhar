// Import useEffect from React to handle window resize
import React, { useState, useEffect } from 'react';
import {
    Button,
    HStack,
    Image,
    Text,
    VStack,
    Link,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerCloseButton,
} from "@chakra-ui/react";
import { FaBars } from 'react-icons/fa';
import img from "../../assets/logo.png";
import { Link as ReactRouterLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const handleToggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        // Update the width when the window is resized
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <HStack w={'100vw'} boxShadow={'0 0 10px purple'} justifyContent={"space-between"}>
            {width < 780 ? (
                <HStack justifyContent={'space-between'}>
                    <IconButton
                        display={{ base: 'block', md: 'none' }}
                        icon={<FaBars />}
                        onClick={handleToggle}
                        variant="ghost"
                        colorScheme="purple"
                        ml={'55'}
                    />

                    <Link as={ReactRouterLink} to={'/'}>
                        <Image h={['50px', '100px']} src={img} />
                    </Link>

                </HStack>
            ) : (
                <>
                    {/* Rest of your JSX for larger screens */}
                    <HStack mx={'auto'} display={{ base: isOpen ? 'none' : 'flex', md: 'flex' }}>
                        <Link as={ReactRouterLink} mx={['1', '2']} to={"/property"} children={"Property"} />
                        <Link variant="brandPrimary" as={ReactRouterLink} mx={['1', '2']} to={"/buy"} children={"Buy"} />
                        <Link as={ReactRouterLink} mx={['1', '2']} to={"/rent"} children={"Rent"} />
                    </HStack>

                    <HStack>
                        <Link as={ReactRouterLink} to={'/'}>
                            <Image h={['50px', '100px']} src={img} />
                        </Link>
                    </HStack>

                    <HStack mx={'auto'} fontSize={'l'} px={'8'} display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}>
                        <Link as={ReactRouterLink} mx={['1', '2']} to={"/contact"} children={"Contact"} />
                        <Link as={ReactRouterLink} mx={['1', '2']} to={"/about"} children={"About us"} />
                        <Button variant={'outline'} colorScheme="purple">
                            <Link as={ReactRouterLink} mx={['1', '2']} to={'/signup'}>Signup</Link>
                        </Button>
                    </HStack>
                </>
            )}

            {/* Drawer for Mobile */}
            <Drawer isOpen={isOpen} onClose={handleToggle} placement="left">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing="4">
                        <Link onClick={handleToggle} as={ReactRouterLink} to={"/"} children={"Home"} />
                            <Link onClick={handleToggle} as={ReactRouterLink} to={"/property"} children={"Property"} />
                            <Link onClick={handleToggle}variant="brandPrimary" as={ReactRouterLink} to={"/buy"} children={"Buy"} />
                            <Link onClick={handleToggle} as={ReactRouterLink} to={"/rent"} children={"Rent"} />
                            <Link onClick={handleToggle} as={ReactRouterLink} to={"/contact"} children={"Contact"} />
                            <Link onClick={handleToggle} as={ReactRouterLink} to={"/about"} children={"About us"} />
                            <Button onClick={handleToggle} variant={'outline'} colorScheme="purple">
                                <Link as={ReactRouterLink} to={'/signup'}>Signup</Link>
                            </Button>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </HStack>
    );
}

export default Navbar;
