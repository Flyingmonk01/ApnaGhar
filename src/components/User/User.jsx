import { useState } from "react";
import { useParams } from "react-router-dom";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Avatar,
    Container,
    HStack,
    Heading,
    Text,
    VStack,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
    Textarea,
} from "@chakra-ui/react";

const Users = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const [details, setDetails] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        area: '',
        description: '',
        pictures: [],
    })

    const handleFileChange = (e) => {
        const fileList = e.target.files;
        console.log(fileList);
    }

    const handleCreateProperty = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const user_name = useParams().id;
    // console.log(user_name);
    const user = {
        name: "Sameer rai",
        age: "20",
        place: "Lucknow",
    };

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

    const handleSaveButton = (e) =>{
        e.preventDefault();
        
        setDetails({
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            price: '',
            bedrooms: '',
            bathrooms: '',
            area: '',
            description: '',
            pictures: [],
        })
        // console.log(details);

        handleCloseModal();
    }


    return (
        <Container minW={"80vw"} minH={"100vh"} my={["4", "8"]}>
            <HStack>
                <VStack w={"60%"} m={"8"} align={"flex-start"}>
                    <Heading>{user_name}</Heading>
                    <Text>{user.age}</Text>
                    <Text>{user.place}</Text>
                    <Button onClick={handleCreateProperty} colorScheme="green">
                        Create Property
                    </Button>
                </VStack>
                <VStack w={"30%"}>
                    <Avatar size={["lg", "2xl"]} />
                </VStack>
            </HStack>
            <VStack align={"flex-start"} m={["0", "8"]}>
                <Heading my={"8"} fontSize={"xl"} textAlign={"center"}>
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
                            <Tr key={tran.id}>
                                <Td fontSize={['x-small', 'md']}>{tran.propertyId.toUpperCase()}</Td>
                                <Td fontSize={['x-small', 'md']}>{tran.seller.toUpperCase()}</Td>
                                <Td fontSize={['x-small', 'md']}>{tran.amount}</Td>
                                <Td fontSize={['x-small', 'md']}>{tran.status}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </VStack>

            {/* Modal for Create Property */}
            <Modal size={['lg', '2xl']} isOpen={isModalOpen} onClose={handleCloseModal} >
                <ModalOverlay backdropFilter={'blur(5px)'} />
                <ModalContent>
                    <ModalHeader>Create Property</ModalHeader>
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Property Holder Name</FormLabel>
                            <Input value={details.name} onChange={(e)=> setDetails({...details, name: e.target.value})} placeholder="Enter property name" />
                            <FormLabel>Property Address</FormLabel>
                            <Input value={details.address} onChange={(e)=> setDetails({...details, address: e.target.value})} placeholder="Enter property Address" />
                            <FormLabel>Property City</FormLabel>
                            <Input value={details.city} onChange={(e)=> setDetails({...details, city: e.target.value})} placeholder="Enter property City" />
                            <FormLabel>Property State</FormLabel>
                            <Input value={details.state} onChange={(e)=> setDetails({...details, state: e.target.value})} placeholder="Enter property State" />
                            <FormLabel>Property Zipcode</FormLabel>
                            <Input value={details.zipcode} onChange={(e)=> setDetails({...details, zipcode: e.target.value})} placeholder="Enter property Zipcode" />
                            <FormLabel>Property Price</FormLabel>
                            <Input value={details.price} onChange={(e)=> setDetails({...details, price: e.target.value})} type="number" placeholder="Enter property Price" />
                            <FormLabel>Property Bedrooms</FormLabel>
                            <Input value={details.bedrooms} onChange={(e)=> setDetails({...details, bedrooms: e.target.value})} type="number" placeholder="Enter property Bedrooms" />
                            <FormLabel>Property Bathrooms</FormLabel>
                            <Input value={details.bathrooms} onChange={(e)=> setDetails({...details, bathrooms: e.target.value})} type="number" placeholder="Enter property Bathrooms" />
                            <FormLabel>Property Area</FormLabel>
                            <Input value={details.area} onChange={(e)=> setDetails({...details, area: e.target.value})} type="number" placeholder="Enter property Area" />
                            <FormLabel>Property Description</FormLabel>
                            <Textarea value={details.description} onChange={(e)=> setDetails({...details, description: e.target.value})} placeholder="Enter property Description" />
                           
                            <FormLabel htmlFor="pictures">Select Pictures:</FormLabel>
                            <Input type="file" id="pictures" name="pictures" multiple value={details.pictures} onChange={(e)=> setDetails({ pictures: e.target.value})} accept="image/*" />
                        </FormControl>

                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={handleSaveButton} colorScheme="purple" mr={3}>
                            Save
                        </Button>
                        <Button onClick={handleCloseModal}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    );
};

export default Users;