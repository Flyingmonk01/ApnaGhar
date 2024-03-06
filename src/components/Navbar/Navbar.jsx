// Import useEffect from React to handle window resize
import React, { useState, useEffect } from 'react';
import {
    Button,
    HStack,
    Image,
    VStack,
    Link,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerCloseButton
} from "@chakra-ui/react";
import { FaBars, FaUser } from 'react-icons/fa';
import img from "../../assets/logo.png";
import { Link as ReactRouterLink } from "react-router-dom";




const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [userAddress, setUserAddress] = useState('');

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

    const openDrawer = () => {
        console.log('Drawer is open')
    }



    const handleLogin = async () => {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            const address = accounts[0];
            setUserAddress(address);

            console.log('User authenticated with address:', address);
        } catch (error) {
            console.error('Error connecting to MetaMask:', error.message);
        }
    };


    return (
        <HStack w={'95vw'} justifyContent={"space-between"}>
            {width < 780 ? (
                <HStack >
                    <IconButton
                        display={{ base: 'block', md: 'none', lg: 'none' }}
                        icon={<FaBars />}
                        onClick={handleToggle}
                        variant="ghost"
                        colorScheme="purple"
                        pos={'absolute'}
                        pl={'3'}
                        ml={'50'}
                    />

                    <Link ml={'100'} as={ReactRouterLink} to={'/'}>
                        <Image h={['50px', '100px']} src={img} />
                    </Link>

                </HStack>
            ) : (
                <>
                    {/* Rest of your JSX for larger screens */}
                    <HStack px={'12'} mx={'auto'} display={{ base: isOpen ? 'none' : 'flex', md: 'flex' }}>
                        <Link as={ReactRouterLink} mx={['1', '2']} to={"/property"} children={"Property"} />
                        <Link variant="brandPrimary" as={ReactRouterLink} mx={['1', '2']} to={"/buy"} children={"Buy"} />
                        <Link as={ReactRouterLink} mx={['1', '2']} to={"/rent"} children={"Rent"} />
                    </HStack>

                    <HStack >
                        <Link as={ReactRouterLink} to={'/'}>
                            <Image h={['50px', '100px']} src={img} />
                        </Link>
                    </HStack>

                    <HStack mx={'auto'} fontSize={'l'} display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}>
                        <Link as={ReactRouterLink} mx={['1', '2']} to={"/contact"} children={"Contact"} />
                        <Link as={ReactRouterLink} mx={['1', '2']} to={"/about"} children={"About us"} />
                        {
                            userAddress ? (
                                <>
                                    <Link as={ReactRouterLink} to={'/people'}> People </Link>

                                    <IconButton aria-label="User" _hover={{ fontSize: "lg" }} onClick={openDrawer}><FaUser /></IconButton> <Link as={ReactRouterLink} to={'/user/:id'}></Link>
                                </> // Have to add the function here

                            ) : (<>
                                <Button variant={'ghost'} onClick={handleLogin} colorScheme="purple">
                                    <Link as={ReactRouterLink} to={'/login'}>Login</Link>
                                </Button>
                                <Button variant={'ghost'} colorScheme="purple">
                                    <Link as={ReactRouterLink} to={'/signup'}>Signup</Link>
                                </Button>
                            </>)
                        }
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
                            <Link onClick={handleToggle} variant="brandPrimary" as={ReactRouterLink} to={"/buy"} children={"Buy"} />
                            <Link onClick={handleToggle} as={ReactRouterLink} to={"/rent"} children={"Rent"} />
                            <Link onClick={handleToggle} as={ReactRouterLink} to={"/contact"} children={"Contact"} />
                            <Link onClick={handleToggle} as={ReactRouterLink} to={"/about"} children={"About us"} />
                            {
                                userAddress ? (

                                    <>
                                        <Link onClick={handleToggle} as={ReactRouterLink} to={'/people'}> People </Link>
                                        <Link onClick={handleToggle} as={ReactRouterLink} to={'/user/:id'}></Link>
                                        <FaUser onClick={openDrawer} />
                                    </>

                                ) : (<>
                                    <Button onClick={handleToggle} variant={'ghost'} colorScheme="purple">
                                        <Link as={ReactRouterLink} to={'/login'}>Login</Link>
                                    </Button>
                                    <Button onClick={handleToggle} variant={'ghost'} colorScheme="purple">
                                        <Link as={ReactRouterLink} to={'/signup'}>Signup</Link>
                                    </Button>
                                </>)
                            }
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </HStack>
    );
}

export default Navbar;
