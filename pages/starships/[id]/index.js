import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Body from "../../../components/Layout/Body"
import Header from "../../../components/Layout/Header"
import BackButton from "../../../components/BackButton"
import StarShipsDetails from "../../../components/StarShipsPage/StarShipDetails"

const StarShip = () => {
    const [getStarShipDetails, setGetStarShipDetails] = useState([]);
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        const getStarShip = () => {
            axios.get(`${process.env.NEXT_PUBLIC_SWAPI_URL}/starships/?search=${id}`)
                .then((res) => {
                    setGetStarShipDetails(res.data.results)
                })
        }
        getStarShip()
    }, [id]);


    return (
        <>
            <Header Loggedin={true} />
            <Body>
                <StarShipsDetails StarShipDetails={getStarShipDetails} />
                <BackButton backTo={"starships"} />
            </Body>

        </>
    )
}

export default StarShip