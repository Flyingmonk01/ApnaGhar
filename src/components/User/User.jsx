import { Table, Thead, Tbody, Tr, Th, Td, Avatar, Container, HStack, Heading, Text, VStack } from "@chakra-ui/react"
import { useParams } from "react-router-dom";


const Users = () => {

    const user_name = useParams().id;
    // console.log(user_name);
    const user = {
        name: 'Sameer rai',
        age: '20',
        place: 'Lucknow'
    }

    const transactions = [
        {
            id: '1',
            propertyId: 'abc123',
            seller: 'John Doe',
            buyer: 'Jane Smith',
            amount: 250000,
            date: '2024-02-10',
            status: 'completed'
        },
        {
            id: '2',
            propertyId: 'def456',
            seller: 'Alice Johnson',
            buyer: 'Bob Williams',
            amount: 180000,
            date: '2024-02-09',
            status: 'completed'
        },
        {
            id: '3',
            propertyId: 'ghi789',
            seller: 'Michael Brown',
            buyer: 'Emily Davis',
            amount: 320000,
            date: '2024-02-08',
            status: 'completed'
        },
        {
            id: '4',
            propertyId: 'jkl012',
            seller: 'David Miller',
            buyer: 'Sarah Wilson',
            amount: 200000,
            date: '2024-02-07',
            status: 'pending'
        },
        {
            id: '5',
            propertyId: 'mno345',
            seller: 'Robert Jones',
            buyer: 'Lisa Garcia',
            amount: 280000,
            date: '2024-02-06',
            status: 'completed'
        }
    ];


    return (
        <Container minW={'80vw'} minH={'100vh'} my={['4', '8']}>
            <HStack>
                <VStack w={'60%'} m={'8'} align={'flex-start'}>
                    <Heading >{user_name}</Heading>
                    <Text>{user.age}</Text>
                    <Text>{user.place}</Text>
                </VStack>
               <VStack w={'30%'}>
               <Avatar size={['lg', '2xl']} />
               </VStack>
            </HStack>
            <VStack align={'flex-start'} m={['0', '8']}>
                <Heading my={'8'} fontSize={'xl'} textAlign={'center'}>
                    History
                </Heading>
                <Table variant="striped" size={['xsm', "md"]}>
                    <Thead>
                        <Tr>
                            <Th fontSize={['x-small', 'md']}>Property ID</Th>
                            <Th fontSize={['x-small', 'md']}>Seller</Th>
                            <Th fontSize={['x-small', 'md']}>Amount</Th>
                            <Th fontSize={['x-small', 'md']}>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {transactions.length > 0 && transactions.map((tran) => (
                            <Tr  key={tran.id}>
                                <Td fontSize={['x-small', 'md']}>{tran.propertyId.toUpperCase()}</Td>
                                <Td fontSize={['x-small', 'md']}>{tran.seller.toUpperCase()}</Td>
                                <Td fontSize={['x-small', 'md']}>{tran.amount}</Td>
                                <Td fontSize={['x-small', 'md']}>{tran.status}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </VStack>
        </Container>
    )
}

export default Users;