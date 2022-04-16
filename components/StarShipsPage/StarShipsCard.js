import { Box, Button, Center, SimpleGrid } from "@chakra-ui/react";
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios";
import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate";
import Link from "next/link"



const StarShipsCard = () => {
    const [getStarShips, setGetStarShips] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const PER_PAGE = 4;
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(getStarShips.length / PER_PAGE);

    useEffect(() => {
        const starship = () => {
            axios.get(`${process.env.NEXT_PUBLIC_SWAPI_URL}/starships/`)
                .then((res) => {
                    setGetStarShips(res.data.results)
                })
        }
        starship()
    }, []);

    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage)
    }

    const getStarShipsResult = getStarShips.slice(offset, offset + PER_PAGE).map((data, index) => {
        return <Center key={index}>
            <Link href={`/starships/${data.name}`}>
                <Button w='80%' h="100px" borderWidth='1px' borderRadius='lg' colorScheme="yellow" >
                    {data.name}
                </Button>
            </Link>
        </Center>
    })



    return (
        <>
            <Center>
                <Box w="80vh" >
                    <SimpleGrid columns={2} spacing={10} textAlign="center">
                        {getStarShipsResult}
                    </SimpleGrid>
                </Box>
            </Center >
            <Center mt="20" bg="black">
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageRangeDisplayed={5}
                    renderOnZeroPageCount={null}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    containerClassName={'pagination'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </Center>
        </>
    )
}

export default StarShipsCard