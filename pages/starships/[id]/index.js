import { useRouter } from "next/router"
import Body from "../../../components/Layout/Body"
import Header from "../../../components/Layout/Header"

const Starship = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <Header Loggedin={true} />
            <Body>
                This is Starship {id}
            </Body>
        </>
    )
}

export default Starship