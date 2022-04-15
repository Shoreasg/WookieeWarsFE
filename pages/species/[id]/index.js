import { useRouter } from "next/router"

const organism = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <h1>this is species {id}</h1>
    )
}

export default organism