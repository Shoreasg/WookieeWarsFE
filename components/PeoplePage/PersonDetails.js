
import { Box, Center, Text } from "@chakra-ui/react";
const PeopleDetails = ({ peopleDetails }) => {

    const details = peopleDetails.map((data, index) => {
        return (
            <Box key={index}>
                <Text fontSize="2xl">
                    Name: {data.name}
                </Text>
                <Text fontSize="xl">
                    Gender: {data.gender}
                </Text>
                <Text fontSize="xl">
                    Birth Year: {data.birth_year}
                </Text>
                <Text fontSize="xl">
                    Eye Color: {data.eye_color}
                </Text>
                <Text fontSize="xl">
                    Height: {data.height} CM
                </Text>
                <Text fontSize="xl">
                    Skin Color: {data.skin_color}
                </Text>
                <Text fontSize="xl">
                    Mass: {data.mass} KG
                </Text>

            </Box>
        )
    })

    return (

        <Center>
            <Box w="400px" h="90%" mt={50} boxShadow='xl' p='6' rounded='md' borderColor="gold" border="1px" textAlign="center">
                {details}
            </Box>
        </Center>
    )
}

export default PeopleDetails