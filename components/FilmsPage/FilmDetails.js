
import { Box, Center, Text } from "@chakra-ui/react";
const FilmDetails = ({ filmDetails }) => {

    const details = filmDetails.map((data, index) => {
        return (
            <Box key={index}>
                <Text fontSize={["md"]}>
                    Title: {data.title}
                </Text>
                <Text fontSize={["sm"]}>
                    Episode: {data.episode_id}
                </Text>
                <Text fontSize={["sm"]}>
                    Director: {data.director}
                </Text>
                <Text fontSize={["sm"]}>
                    Producer:{data.producer}
                </Text>
                <Text fontSize={["sm"]}>
                    Release Date:{data.release_date}
                </Text>
                <Text fontSize={["sm"]}>
                    Synopsis
                    <Text fontSize={["sm"]}>
                        {data.opening_crawl}
                    </Text>
                </Text>
            </Box>
        )
    })

    return (

        <Center>
            <Box w={["300px", "500px"]} h="90%" mt={[10]} boxShadow='xl' p='6' rounded='md' borderColor="gold" border="1px" textAlign="center">
                {details}
            </Box>
        </Center>
    )
}

export default FilmDetails