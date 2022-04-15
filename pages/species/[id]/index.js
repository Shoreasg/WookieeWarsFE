import { useRouter } from "next/router"
import Body from "../../../components/Layout/Body"
import Header from "../../../components/Layout/Header"

const organism = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <Header Loggedin={true} />
            <Body>
                This is organism {id}
            </Body>
        </>
    )
}

export default organism