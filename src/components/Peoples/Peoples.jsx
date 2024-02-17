import { Avatar, Box, Container, HStack, Heading, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom";


const Peoples = () => {

    const dummyPersonsData = [
        { name: "John Doe", age: 35, occupation: "Engineer", budget: 150000 },
        { name: "Jane Smith", age: 28, occupation: "Teacher", budget: 120000 },
        { name: "Michael Johnson", age: 45, occupation: "Doctor", budget: 250000 },
        { name: "Emily Brown", age: 40, occupation: "Lawyer", budget: 200000 },
        { name: "David Wilson", age: 32, occupation: "Software Developer", budget: 180000 },
        { name: "Sarah Taylor", age: 30, occupation: "Accountant", budget: 160000 },
        { name: "James Martinez", age: 38, occupation: "Architect", budget: 220000 },
        { name: "Amanda Jones", age: 42, occupation: "Marketing Manager", budget: 190000 },
        { name: "Robert Anderson", age: 48, occupation: "Business Owner", budget: 300000 },
        { name: "Jennifer Thomas", age: 36, occupation: "Nurse", budget: 140000 },
        { name: "John Doe", age: 35, occupation: "Engineer", budget: 150000 },
        { name: "Jane Smith", age: 28, occupation: "Teacher", budget: 120000 },
        { name: "Michael Johnson", age: 45, occupation: "Doctor", budget: 250000 },
        { name: "Emily Brown", age: 40, occupation: "Lawyer", budget: 200000 },
        { name: "David Wilson", age: 32, occupation: "Software Developer", budget: 180000 },
        { name: "Sarah Taylor", age: 30, occupation: "Accountant", budget: 160000 },
        { name: "James Martinez", age: 38, occupation: "Architect", budget: 220000 },
        { name: "Amanda Jones", age: 42, occupation: "Marketing Manager", budget: 190000 },
        { name: "Robert Anderson", age: 48, occupation: "Business Owner", budget: 300000 },
        { name: "Jennifer Thomas", age: 36, occupation: "Nurse", budget: 140000 }
    ];

    return (
        <Box my={'8'} minH={'100vh'}>
            <Heading textAlign={'center'}>People List</Heading>
            <Container minW={'60vw'}  minH={'100vh'} >
                {dummyPersonsData.length > 0 && dummyPersonsData.map((person, idx) =>(
                    <VStack key={idx} alignItems={'space-between'}>
                    <HStack justifyContent={'space-between'}>
                        <Heading fontSize={'xl'}>
                            <Link to={`/user/${person.name}`}>{person.name}</Link>
                        </Heading>
                        <Avatar mt={'2'} mr={'8'}/>
                    </HStack>
                        <Text fontSize={'sm'}>{person.occupation}</Text>
                        <hr/></VStack>
                ))}
            </Container>
        </Box>
    )
}

export default Peoples;