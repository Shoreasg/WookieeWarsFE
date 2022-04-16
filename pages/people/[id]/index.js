import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Body from "../../../components/Layout/Body"
import Header from "../../../components/Layout/Header"
import BackButton from "../../../components/BackButton"
import PeopleDetails from "../../../components/PeoplePage/PersonDetails"

const Person = () => {
    const [getPeopleDetails, setGetPeopleDetails] = useState([]);
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        const getPeople = () => {
            axios.get(`${process.env.NEXT_PUBLIC_SWAPI_URL}/people/?search=${id}`)
                .then((res) => {

                    setGetPeopleDetails(res.data.results)

                })
        }
        getPeople()
    }, [id]);


    return (
        <>
            <Header Loggedin={true} />
            <Body>
                <PeopleDetails peopleDetails={getPeopleDetails} />
                <BackButton backTo={"people"} />
            </Body>

        </>
    )
}

export default Person