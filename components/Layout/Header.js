import { Box, Button, Flex, useToast } from '@chakra-ui/react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from "next/router";

const Header = (children) => {
  const toast = useToast();
  const router = useRouter();
  const handleLogOut = async () => {
    await axios.delete(`${process.env.NEXT_PUBLIC_backendURL}/logout`,
      { withCredetnials: true }).then((res) => {
        if (res.status === 200) {
          toast({
            title: "Successfully logged Out",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
          router.push('/');

        }
        else {
          toast({
            title: "Error logging Out",
            status: "error",
            duration: 9000,
            isClosable: true,
          })
        }
      }).catch((err) => {
        if (err) {

          toast({
            title: "Error logging Out",
            status: "error",
            duration: 9000,
            isClosable: true,
          })
        }
      })
  }

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
          <Button variant='link' color="gold" onClick={handleLogOut}>
            Logout
          </Button>
        </Box>
      </Flex> : ""}
    </>
  )
}
export default Header