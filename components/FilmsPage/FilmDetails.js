
import { Box, Center, Text } from "@chakra-ui/react";
const FilmDetails = ({ filmDetails }) => {

    const details = filmDetails.map((data, index) => {
        return (
            <Box key={index}>
                <Text fontSize="2xl">
                    Title: {data.title}
                </Text>
                <Text fontSize="xl">
                    Episode: {data.episode_id}
                </Text>
                <Text fontSize="xl">
                    Director: {data.director}
                </Text>
                <Text fontSize="xl">
                    Producer:{data.producer}
                </Text>
                <Text fontSize="xl">
                    Release Date:{data.release_date}
                </Text>
                <Text fontSize="lg">
                    Synopsis
                    <Text fontSize="lg">
                        {data.opening_crawl}
                    </Text>
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

export default FilmDetails