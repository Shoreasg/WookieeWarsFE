import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Body from "../../../components/Layout/Body"
import Header from "../../../components/Layout/Header"
import FilmDetails from "../../../components/FilmsPage/FilmDetails"
import BackButton from "../../../components/BackButton"

const Film = () => {
    const [getFilmDetails, setGetFilmDetails] = useState([]);
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        const getFilm = () => {
            axios.get(`${process.env.NEXT_PUBLIC_SWAPI_URL}/films/?search=${id}`)
                .then((res) => {

                    setGetFilmDetails(res.data.results)

                })
        }
        getFilm()
    }, []);


    return (
        <>
            <Header Loggedin={true} />
            <Body>
                <FilmDetails filmDetails={getFilmDetails} />
                <BackButton backTo={"films"}/>
            </Body>

        </>
    )
}

export default Film