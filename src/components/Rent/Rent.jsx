import { Box, Container, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Rent = () => {
  const url = "https://jsonplaceholder.typicode.com/photos?_limit=100";
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const response_data = await response.json();
        setData(response_data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const filteredData = data.filter((photo) =>
    photo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // console.log(filteredData);

  return (
    <Container py={['4', '8']} minH={'100vh'} minW={'80vw'}>
      <Heading m={'10px'} textAlign={'center'} fontSize={'4xl'} fontFamily={'sans-serif'}>
        Properties
      </Heading>
      <Input
        outlineColor={'purple'}
        focusBorderColor="transparent"
        placeholder="Search for your place..."
        w={'50vw'}
        ml={'15vw'}
        my={'8'}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Flex justifyContent={'space-around'} gap={'4'} wrap={'wrap'}>
        {filteredData.map((photo) => (
          <Boxes key={photo.id} imageUrl={photo.url} title={photo.title} />
        ))}
      </Flex>
    </Container>
  );
};

const Boxes = ({ imageUrl, title }) => {
  return (
    <Box boxShadow={'0 0 5px purple'} borderRadius={'md'} h={'300px'} w={'300px'} border={'2px solid #0001'}>
      <Image p={'2'} h={'200px'} w="100%" objectFit="cover" src={imageUrl} alt={`Property`} />
      <Text p={'4'}>{title}</Text>
    </Box>
  );
};

export default Rent;
