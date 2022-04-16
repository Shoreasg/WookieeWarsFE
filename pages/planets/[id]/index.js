import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Body from "../../../components/Layout/Body"
import Header from "../../../components/Layout/Header"
import BackButton from "../../../components/BackButton"
import PlanetDetails from "../../../components/PlanetsPage/PlanetDetails"

const Planets = () => {
    const [getPlanetsDetails, setGetPlanetsDetails] = useState([]);
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        const getPlanets = () => {
            axios.get(`${process.env.NEXT_PUBLIC_SWAPI_URL}/planets/?search=${id}`)
                .then((res) => {

                    setGetPlanetsDetails(res.data.results)

                })
        }
        getPlanets()
    }, []);


    return (
        <>
            <Header Loggedin={true} />
            <Body>
                <PlanetDetails planetDetails={getPlanetsDetails} />
                <BackButton backTo={"planets"}/>
            </Body>

        </>
    )
}

export default Planets