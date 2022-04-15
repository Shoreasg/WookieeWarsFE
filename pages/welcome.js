import { Box } from "@chakra-ui/react"
import CategoryCards from "../components/WelcomePage/CategoryCards"
import Header from "../components/Layout/Header"
import WelcomeText from "../components/WelcomePage/WelcomeText"

const Welcome = () => {
    return (
        <>
            <Header Loggedin={true} />
            <Box bg='black' h='100vh' color='gold' >
              <WelcomeText/>
              <CategoryCards/>
            </Box>
        </>
    )

}

export default Welcome