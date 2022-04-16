import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Body from "../../../components/Layout/Body"
import Header from "../../../components/Layout/Header"
import BackButton from "../../../components/BackButton"
import VehicleDetails from "../../../components/VehiclesPage/VehicleDetails"
const Vehicle = () => {
    const [getVehiclesDetails, setGetVehiclesDetails] = useState([]);
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        const getVehicles = () => {
            axios.get(`${process.env.NEXT_PUBLIC_SWAPI_URL}/vehicles/?search=${id}`)
                .then((res) => {

                    setGetVehiclesDetails(res.data.results)

                })
        }
        getVehicles()
    }, [id]);


    return (
        <>
            <Header Loggedin={true} />
            <Body>
                <VehicleDetails vehicleDetails={getVehiclesDetails} />
                <BackButton backTo={"vehicles"} />
            </Body>

        </>
    )
}

export default Vehicle