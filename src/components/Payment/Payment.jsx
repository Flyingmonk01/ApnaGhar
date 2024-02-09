import {Box, Container, Heading , HStack, VStack, Input, Text ,Button} from "@chakra-ui/react";


const Payment = () =>{
    return(
        <Container minH={'Full'} maxW={['sm', 'md', 'lg', 'xl']} p={['4', '6']} boxShadow={'0 0 10px purple'} borderRadius={'lg'}>
            <Heading m={'auto'} w={'fit-content'} mb={['4', '6']} textAlign={'center'} borderWidth={'2px'} p={3} borderRadius={'10px'} fontSize={['xl', '2xl']}>Select payment method</Heading>
            <VStack>
                <Box>
                    <HStack spacing={4}>
                        <Button fontSize={['md', 'lg']} fontWeight={'500'} borderRadius={'10px'} borderWidth={'2px'} borderColor={'whilte'} p={4} boxShadow={'2px 2px 5px purple'}>Credit card</Button>
                        <Button fontSize={['md', 'lg']} fontWeight={'500'} borderRadius={'10px'} borderWidth={'2px'} borderColor={'whilte'} p={4} boxShadow={'2px 2px 5px purple'}>debit card</Button>
                        <Button fontSize={['md', 'lg']} fontWeight={'500'} borderRadius={'10px'} borderWidth={'2px'} borderColor={'whilte'} p={4} boxShadow={'2px 2px 5px purple'}>net banking</Button>
                        <Button fontSize={['md', 'lg']} fontWeight={'500'} borderRadius={'10px'} borderWidth={'2px'} borderColor={'whilte'} p={4} boxShadow={'2px 2px 5px purple'}>paypal</Button>
                    </HStack>
                </Box>
                <VStack borderRadius={'10px'} borderWidth={'2px'} w={'100%'} p={4} spacing={4}>
                    <Box borderRadius={'10px'} borderWidth={'2px'} w={'100%'}>
                        <Text p={'3'}textAlign={'center'} mb={['2', '2']} fontSize={['xl', '2xl']}>Personal Details</Text>
                        <VStack>
                        <HStack>
                        <Text fontSize={['md', 'lg']} fontWeight={'500'} children='Email:' />
                        <Input type="email" placeholder="Enter your email..." />
                        </HStack>
                        <HStack>
                        <Text fontSize={['md', 'lg']} fontWeight={'500'} children='FirstName:' />
                        <Input type="Text" placeholder="Enter your FirstName..." />
                        </HStack>                        </VStack>
                    </Box>
                    <Box borderRadius={'10px'} borderWidth={'2px'} w={'100%'}>
                        <Text p={'3'}textAlign={'center'} mb={['2', '2']} fontSize={['xl', '2xl']}>credit card info</Text>
                        <VStack>
                        <HStack>
                        <Text fontSize={['md', 'lg']} fontWeight={'500'} children='Name:' />
                        <Input type="Text" placeholder="Name on the card..." />
                        </HStack>                            
                        <HStack>
                        <Text fontSize={['md', 'lg']} fontWeight={'500'} children='CardNumber:' />
                        <Input type="Text" placeholder="XXXX XXXX..." />
                        </HStack>                            
                            <HStack>

                                <Box>
                                <Text fontSize={['md', 'lg']} fontWeight={'500'} children='Expiration:' />
                                <HStack p={4}>
                                <Input w={'50px'}type="Text" placeholder="00" /> 
                                <Input w={'70px'}type="Text" placeholder="0000" /> 
                                </HStack>

                                </Box>
                                <Text fontSize={['md', 'lg']} fontWeight={'500'} children='CVV:' />
                                <Input w={'70px'} type="Text" placeholder="0000" />
                                
                            </HStack>
                            <Button colorScheme="purple" fontSize={['md', 'lg']}>Submit</Button>

                            <Text>terms and conditions.</Text>
                        </VStack>
                    </Box>
                </VStack>

            </VStack>
        </Container>
    )
}

export default Payment;