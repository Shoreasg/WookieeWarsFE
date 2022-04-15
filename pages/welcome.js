import { Center } from "@chakra-ui/react"
import Header from "../components/Layout/Header"

const Welcome = () =>
{
    return(
        <>
        <Header Loggedin={true} />
        <Center bg='black' h='100vh' color='gold'>
            Welcome
        </Center>
    </>
    )

}

export default Welcome