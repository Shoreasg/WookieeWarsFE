import { useRouter } from "next/router"
import Body from "../../../components/Layout/Body"
import Header from "../../../components/Layout/Header"

const Planet = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <Header Loggedin={true} />
            <Body>
                This is planets {id}
            </Body>
        </>
    )
}

export default Planet