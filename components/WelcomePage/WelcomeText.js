import { Box, Center, Text } from "@chakra-ui/react"

const WelcomeText = () => {
    return (
        <>
            <Center>
                <Box textAlign={"center"}  mt="20" mb="20">
                    <Text fontSize="5xl" bgGradient='linear(to-l,black,gold,gold,black)' bgClip='text'>
                        Welcome to WookieWars! Select a category!
                    </Text>
                </Box>
            </Center>
        </>
    )
}
export default WelcomeText