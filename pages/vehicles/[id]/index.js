import { useRouter } from "next/router"

const vehicle = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <h1>this is vehicle {id}</h1>
    )
}

export default vehicle