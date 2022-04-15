import { Center } from "@chakra-ui/react"
import { useRouter } from "next/router"
import Header from "../../../components/Layout/Header"
import Body from "../../../components/Layout/Body"

const Person = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <Header Loggedin={true} />
            <Body>
                This is people {id}
            </Body>
        </>
    )
}

export default Person