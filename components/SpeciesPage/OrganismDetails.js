
import { Box, Center, Text } from "@chakra-ui/react";
const OrganismDetails = ({ OrganismDetails }) => {
    const details = OrganismDetails.map((data, index) => {
        return (

            <Box key={index}>
                <Text fontSize="2xl" >
                    Name: {data.name}
                </Text>
                <Text fontSize="xl">
                    Classification: {data.classification}
                </Text>
                <Text fontSize="xl">
                    Designation: {data.designation}
                </Text>
                <Text fontSize="xl">
                    Average Height: {data.average_height} CM
                </Text>
                <Text fontSize="xl">
                    Average LifeSpan: {data.average_lifespan} years
                </Text>
                <Text fontSize="xl">
                    Eye Colors: {data.eye_colors}
                </Text>
                <Text fontSize="xl">
                    Hair Colors: {data.hair_colors}
                </Text>
                <Text fontSize="xl">
                    Skin Colors: {data.skin_colors}
                </Text>
                <Text fontSize="xl">
                    Language: {data.language}
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

export default OrganismDetails