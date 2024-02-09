import { Box, Container, Heading, HStack, Stack, VStack, Input, Text, Button, FormControl, FormLabel, Flex } from "@chakra-ui/react";
import { useState } from "react";


const Payment = () => {

    const [credit, setCredit] = useState(false);
    const [net, setNet] = useState(false);
    const [upi, setUpi] = useState(false);

    function setCre(){
        setCredit(true)
        setNet(false);
        setUpi(false);
    }
    function setN(){
        setCredit(false)
        setNet(true);
        setUpi(false);
    }
    function setU(){
        setCredit(false)
        setNet(false);
        setUpi(true);
    }


    return (
        <Container my={'8'} minH={'100vh'} maxW={['sm', 'md', 'lg', 'xl']} p={['4', '6']} boxShadow={'0 0 10px purple'} borderRadius={'lg'}>
            <Heading m={'auto'} w={'fit-content'} mb={['4', '6']} textAlign={'center'} borderWidth={'2px'} p={3} borderRadius={'10px'} fontSize={['xl', '2xl']}>Select payment method</Heading>
            <VStack>
                <Box>
                    <HStack justifyContent={'center'} wrap={'wrap'} spacing={4}>
                        <Button onClick={setCre} borderRadius={'10px'} borderWidth={'2px'} borderColor={'whilte'} boxShadow={'2px 2px 5px purple'}>Credit Card / Debit Card</Button>

                        <Button onClick={setN}  borderRadius={'10px'} borderWidth={'2px'} borderColor={'whilte'} boxShadow={'2px 2px 5px purple'}>Net Banking</Button>
                        <Button onClick={setU} borderRadius={'10px'} borderWidth={'2px'} borderColor={'whilte'} boxShadow={'2px 2px 5px purple'}>Upi</Button>
                    </HStack>
                </Box>
                {credit && <CreditCard />}
                {upi && <Upi />}                
                {net && <NetBanking />}
            </VStack>
        </Container>
    )
}

const CreditCard = () => {
    return (
        <Box my={'8'} borderWidth="1px" borderRadius="lg" p="4" boxShadow="md">
            <Heading size="md" mb="4">Enter Credit Card Details</Heading>
            <FormControl mb="4">
                <FormLabel>Cardholder Name</FormLabel>
                <Input type="text" placeholder="Enter cardholder name" />
            </FormControl>
            <FormControl mb="4">
                <FormLabel>Card Number</FormLabel>
                <Input type="text" placeholder="Enter card number" />
            </FormControl>
            <Flex mb="4">
                <FormControl mr="2">
                    <FormLabel>Expiration Date</FormLabel>
                    <Input type="text" placeholder="MM/YY" />
                </FormControl>
                <FormControl>
                    <FormLabel>CVV</FormLabel>
                    <Input type="text" placeholder="Enter CVV" />
                </FormControl>
            </Flex>
            <Button colorScheme="blue" type="submit">Submit</Button>
        </Box>
    )
}

const NetBanking = () => {
    return (
        <Box my={'8'} borderWidth="1px" borderRadius="lg" p="4" boxShadow="md">
            <Heading size="md" mb="4">Enter Net Banking Details</Heading>
            <FormControl mb="4">
                <FormLabel>Bank Name</FormLabel>
                <Input type="text" placeholder="Enter bank name" />
            </FormControl>
            <FormControl mb="4">
                <FormLabel>Account Number</FormLabel>
                <Input type="text" placeholder="Enter account number" />
            </FormControl>
            <FormControl mb="4">
                <FormLabel>Username</FormLabel>
                <Input type="text" placeholder="Enter username" />
            </FormControl>
            <FormControl mb="4">
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter password" />
            </FormControl>
            {/* You can include more fields as needed */}
            <Button colorScheme="blue" type="submit">Submit</Button>
        </Box>
    );
}
const Upi = () => {
    return (
        <Box my={'8'} borderWidth="1px" borderRadius="lg" p="4" boxShadow="md">
            <Heading size="md" mb="4">Enter UPI Details</Heading>
            <FormControl mb="4">
                <FormLabel>UPI ID</FormLabel>
                <Input type="text" placeholder="Enter UPI ID" />
            </FormControl>
            {/* You can include more fields as needed */}
            <Button colorScheme="blue" type="submit">Submit</Button>
        </Box>
    );
}

export default Payment;