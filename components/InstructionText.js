import { Box, Center, Text } from "@chakra-ui/react"

const InstructionText = ({children}) => {
    return (
        <>
            <Center>
                <Box textAlign={"center"}  mt={["0","10"]} mb="20">
                    <Text fontSize="5xl" bgGradient='linear(to-l,black,gold,gold,black)' bgClip='text'>
                      {children}
                    </Text>
                </Box>
            </Center>
        </>
    )
}
export default InstructionText