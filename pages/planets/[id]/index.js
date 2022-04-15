import { useRouter } from "next/router"

const planet = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <h1>this is planet {id}</h1>
    )
}

export default planet