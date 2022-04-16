import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Body from "../../../components/Layout/Body"
import Header from "../../../components/Layout/Header"
import FlimDetails from "../../../components/FlimsPage/FlimDetails"
import BackButton from "../../../components/BackButton"

const Flim = () => {
    const [getFlimDetails, setGetFlimDetails] = useState([]);
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        const getFlim = () => {
            axios.get(`${process.env.NEXT_PUBLIC_SWAPI_URL}/films/?search=${id}`)
                .then((res) => {

                    setGetFlimDetails(res.data.results)

                })
        }
        getFlim()
    }, []);


    return (
        <>
            <Header Loggedin={true} />
            <Body>
                <FlimDetails flimDetails={getFlimDetails} />
                <BackButton backTo={"flims"}/>
            </Body>

        </>
    )
}

export default Flim