import { useRouter } from "next/router"

const starship = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <h1>this is starship {id}</h1>
    )
}

export default starship