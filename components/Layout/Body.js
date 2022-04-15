import { Box, Center, Flex } from '@chakra-ui/react'

const Body = ({children}) => {
    return (
        <Center bg='black' h='100vh' color='gold'>
            {children}
        </Center>

    )
}
export default Body