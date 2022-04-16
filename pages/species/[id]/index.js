import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Body from "../../../components/Layout/Body"
import Header from "../../../components/Layout/Header"
import BackButton from "../../../components/BackButton"
import OrganismDetails from "../../../components/SpeciesPage/OrganismDetails"

const Organism = () => {
    const [getOrganismDetails, setGetOrganismDetails] = useState([]);
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        const getOrganism = () => {
            axios.get(`${process.env.NEXT_PUBLIC_SWAPI_URL}/species/?search=${id}`)
                .then((res) => {

                    setGetOrganismDetails(res.data.results)

                })
        }
        getOrganism()
    }, [id]);


    return (
        <>
            <Header Loggedin={true} />
            <Body>
                <OrganismDetails OrganismDetails={getOrganismDetails} />
                <BackButton backTo={"species"} />
            </Body>

        </>
    )
}

export default Organism