import { Box, ChakraProvider, Link, Text, IconButton, VStack, HStack } from '@chakra-ui/react'
import { ChevronLeftIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import React from 'react'

export default function SignupPage() {
    return (
        <ChakraProvider>
            <Box >
                <Box bgImage="/signUp-background.svg" w={"100vw"} h={"100vh"} backgroundColor={"#fefdf9"} bgPosition={"center"}>
                    <Link href={"#"}>
                        <IconButton ml={6} mt={6} variant={'unstyled'} icon={<ChevronLeftIcon boxSize={8} color={'white'}></ChevronLeftIcon>}></IconButton>
                    </Link>
                    <Box>
                        <Text mt={'100px'} ml={10} color={'white'} fontSize={'4xl'} fontWeight={'bold'}>Create<br></br>Account</Text>
                    </Box>
                    <VStack spacing={10}>
                        <Box pt={20}>
                            form
                        </Box>
                        <Box w={'80vw'}>
                            <HStack justifyContent={"space-between"}>
                                <Text fontWeight={'bold'} fontSize={'2xl'} color={'white'}>Sign up</Text>
                                <Link>
                                    <IconButton boxSize={'90'} borderRadius={'100'} background={'#3f434c'} variant={'unstyled'} icon={<ArrowForwardIcon color={'white'} boxSize={8} ></ArrowForwardIcon>} _hover={{ background: "#515764" }}></IconButton>
                                </Link>
                            </HStack>
                        </Box>
                        <HStack w="80vw">
                            <Text color={'white'} fontWeight={'bold'} as={'u'}><Link href='https://youtube.com'>Sign in</Link></Text>
                        </HStack>
                    </VStack>
                </Box>
            </Box>
        </ChakraProvider>
    )
}
