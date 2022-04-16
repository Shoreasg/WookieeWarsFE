import { Box, Button, Center } from "@chakra-ui/react"
import { useRouter } from "next/router";




const BackButton = ({backTo}) => {
    const router = useRouter();
    const handleBackButton = () =>
{
    router.push(`/${backTo}`)
}

    return (<Center>
        <Box mt="10">
            <Button color="black" onClick={handleBackButton}>
                Back
            </Button>
        </Box>
    </Center>)
}

export default BackButton