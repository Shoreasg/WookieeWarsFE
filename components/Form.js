import { Box, Button, Heading, Input, useToast, VStack } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { useForm } from "react-hook-form"
import axios from "axios";

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const toast = useToast();
    const router = useRouter();
    const onSubmit = async (data) => {
        await axios.post(`${process.env.NEXT_PUBLIC_backendURL}/login`,
            { ...data },
            { withCredetnials: true }).then((res) => {
                if (res.status === 200) {
                    toast({
                        title: "Successfully logged in",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    })
                    router.push('/welcome');

                }
                else {
                    toast({
                        title: "Error logging in",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                    })
                }
            }).catch((err) => {
                if (err) {

                    toast({
                        title: "Error logging in",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                    })
                }
            })
    }

    return (
        <Box boxShadow='xl' p='6' rounded='md' bg='white' textAlign={"center"}>
            <Heading as="h1">Login</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <VStack mt={8} spacing="20px">
                    <Input
                        type="text"
                        placeholder="Username"
                        {...register("username")} />

                    <Input
                        type="password"
                        placeholder="Password"
                        {...register("password")} />

                    <Button
                        borderRadius="md"
                        bg="cyan.600"
                        _hover={{ bg: "cyan.200" }}
                        variant="ghost"
                        type="submit">
                        Submit
                    </Button>
                </VStack>
            </form>
        </Box>
    )
}

export default Form