import { Box } from '@chakra-ui/react'

const Body = ({ children }) => {
    return (
        <Box bg='black' h='100vh' color='gold' >
            {children}
        </Box>

    )
}
export default Body