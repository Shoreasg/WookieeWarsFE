import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'

const Header = (children) => {

  return (
    <>
      {children.Loggedin ? <Flex>
        <Box bg='black' w='100%' textAlign={"left"} border='1px' color='Gold' borderRight="0px" borderTop="0px">
          <Link href="/welcome">
            Home
          </Link>
        </Box>
        <Box bg='black' w='100%' textAlign={"center"} color='Gold' border='1px' borderLeft="0px" borderRight="0px" borderTop="0px">
          WookieWars
        </Box>
        <Box bg='black' w='100%' textAlign={"right"} color='Gold' border='1px' borderLeft="0px" borderTop="0px">
          Logout
        </Box>
      </Flex> : ""}
    </>
  )
}
export default Header