
import { Box, Center, Text } from "@chakra-ui/react";
const PlanetDetails = ({ planetDetails }) => {
    const details = planetDetails.map((data, index) => {
        return (

            <Box key={index}>
                <Text fontSize="2xl" >
                    Name: {data.name}
                </Text>
                <Text fontSize="xl">
                    Diameter: {data.diamter} KM
                </Text>
                <Text fontSize="xl">
                    Rotation Period: {data.rotation_period}
                </Text>
                <Text fontSize="xl">
                    Gravity: {data.gravity}
                </Text>
                <Text fontSize="xl">
                    Population: {data.population}
                </Text>
                <Text fontSize="xl">
                    Climate: {data.climate}
                </Text>
                <Text fontSize="xl">
                    Terrain: {data.terrain}
                </Text>
                <Text fontSize="xl">
                    Water Percentage: {data.surface_water}%
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

export default PlanetDetails