import { Box, Button, Center, SimpleGrid } from "@chakra-ui/react"
import Link from "next/link"


const CategoryCards = () => {
    return (
        <Center>
            <Box w={["80vh"]} mt={["-30","-30","-10"]}>
                <SimpleGrid columns={2} spacing={10} textAlign="center">
                    <Center>
                        <Link href="/films">
                            <Button w='80%' h="100px" borderWidth='1px' borderRadius='lg' colorScheme="yellow">
                                Films
                            </Button>
                        </Link>
                    </Center>
                    <Center>
                        <Link href="/people">
                            <Button w='80%' h="100px" borderWidth='1px' borderRadius='lg' colorScheme="yellow">
                                People
                            </Button>
                        </Link>
                    </Center>
                    <Center>
                        <Link href="/planets">
                            <Button w='80%' h="100px" borderWidth='1px' borderRadius='lg' colorScheme="yellow">
                                Planets
                            </Button>
                        </Link>
                    </Center>
                    <Center>
                        <Link href="/species">
                            <Button w='80%' h="100px" borderWidth='1px' borderRadius='lg' colorScheme="yellow">
                                Species
                            </Button>
                        </Link>
                    </Center>
                    <Center>
                        <Link href="/starships">
                            <Button w='80%' h="100px" borderWidth='1px' borderRadius='lg' colorScheme="yellow">
                                StarShips
                            </Button>
                        </Link>
                    </Center>
                    <Center>
                        <Link href="/vehicles">
                            <Button w='80%' h="100px" borderWidth='1px' borderRadius='lg' colorScheme="yellow">
                                Vehicles
                            </Button>
                        </Link>
                    </Center>
                </SimpleGrid>
            </Box>
        </Center>
    )
}
export default CategoryCards