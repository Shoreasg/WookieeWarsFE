import axios from "axios";
import { useEffect, useState } from "react"

const FlimsCard = () =>
{
    const [getFlims, setGetFlims] = useState([]);
    useEffect(() => {
      const flims =  () =>
      {
           axios.get(`${process.env.NEXT_PUBLIC_SWAPI_URL}/films/`)
           .then((res)=>
           {
               console.log(res.data.results)
           })
      }
      flims()
    }, []);
    return(
        <h1>Hello</h1>
    )
}

export default FlimsCard