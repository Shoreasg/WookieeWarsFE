
import { Box, Center, Text } from "@chakra-ui/react";
const VehicleDetails = ({ vehicleDetails }) => {
    const details = vehicleDetails.map((data, index) => {
        return (
            <Box key={index}>
                <Text fontSize="2xl" >
                    Name: {data.name}
                </Text>
                <Text fontSize="xl">
                    Model: {data.model}
                </Text>
                <Text fontSize="xl">
                    Vehicle Class: {data.vehicle_class}
                </Text>
                <Text fontSize="xl">
                    Manufacturer: {data.manufacturer}
                </Text>
                <Text fontSize="xl">
                    Cost in Credits: {data.cost_in_credits} Glalactic Credits
                </Text>
                <Text fontSize="xl">
                    Length: {data.length} M
                </Text>
                <Text fontSize="xl">
                    Number of Crews Needed: {data.crew}
                </Text>
                <Text fontSize="xl">
                    Number of Passengers: {data.passengers}
                </Text>
                <Text fontSize="xl">
                    Max Atmosphering Speed: {data.max_atmosphering_speed}
                </Text>
                <Text fontSize="xl">
                    Cargo Capacity: {data.cargo_capacity}
                </Text>
                <Text fontSize="xl">
                    Consumables : {data.consumables}
                </Text>
            </Box>

        )
    })

    return (

        <Center>
            <Box mt={50} boxShadow='xl' p='6' rounded='md' borderColor="gold" border="1px" textAlign="center">
                {details}
            </Box>
        </Center>
    )
}

export default VehicleDetails