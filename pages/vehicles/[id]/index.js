import { useRouter } from "next/router"
import Body from "../../../components/Layout/Body"
import Header from "../../../components/Layout/Header"

const vehicle = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <Header Loggedin={true} />
            <Body>
                This is vehicle {id}
            </Body>
        </>
    )
}

export default vehicle