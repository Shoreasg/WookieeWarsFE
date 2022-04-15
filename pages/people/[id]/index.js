import { useRouter } from "next/router"

const person = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <h1>this is person {id}</h1>
    )
}

export default person