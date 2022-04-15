import { useRouter } from "next/router"

const flim = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <h1>this is flim {id}</h1>
    )
}

export default flim