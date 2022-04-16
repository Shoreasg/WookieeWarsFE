import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Body from "../../../components/Layout/Body"
import Header from "../../../components/Layout/Header"
import BackButton from "../../../components/BackButton"
import StarShipDetails from "../../../components/StarShipsPage/StarShipDetails"
const StarShip = () => {
    const [getStarShipsDetails, setGetStarShipsDetails] = useState([]);
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        const getStarShips = () => {
            axios.get(`${process.env.NEXT_PUBLIC_SWAPI_URL}/starships/?search=${id}`)
                .then((res) => {

                    setGetStarShipsDetails(res.data.results)

                })
        }
        getStarShips()
    }, [id]);


    return (
        <>
            <Header Loggedin={true} />
            <Body>
                <StarShipDetails starShipDetails={getStarShipsDetails} />
                <BackButton backTo={"starships"}/>
            </Body>

        </>
    )
}

export default StarShip