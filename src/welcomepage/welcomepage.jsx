import React from 'react'
import { Box, Button,ChakraProvider, Link, VStack } from '@chakra-ui/react';

export default function Welcomepage() {
  return (
    <ChakraProvider>
        <Box bgColor={"#F4F9FA"} w={"100vw"} h={"100vh"}>
            <VStack justifyContent={"center"} h={"100vh"}> 
                <Box align="center" padding={"5px 0px 200px"}>
                    <p style={{fontSize:34}}>Welcome</p>
                    <p style={{fontSize:14}}>best coffee in the world</p>
                </Box>
                <Button bgColor={"#5EA4B7"} w={'25vw'}>
                    <Link href='/signinPage' >Sign In</Link>
                </Button>
                <Button bgColor={"#5EA4B7"} w={'25vw'}>
                    <Link href='/signupPage' >Sign Up</Link>
                </Button>
            </VStack>
        </Box>
    </ChakraProvider>
  )
}