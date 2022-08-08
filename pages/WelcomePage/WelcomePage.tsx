import React from 'react'
import { Box, Button, Link, VStack } from '@chakra-ui/react';
import SigninPage from '../SignIn/SigninPage';
import SignupPage from '../SignUp/SignupPage';

export default function Welcomepage() {
  return (
        <Box bgColor={"#F4F9FA"} w={"100vw"} h={"100vh"}>
            <VStack justifyContent={"center"} h={"100vh"}> 
                <Box alignItems="center" padding={"5px 0px 200px"}>
                    <p style={{fontSize:34}}>Welcome</p>
                    <p style={{fontSize:14}}>best coffee in the world</p>
                </Box>
                <Button bgColor={"#5EA4B7"} w={'25vw'}>
                    <Link href='/SignIn/SigninPage' >Sign In</Link>
                </Button>
                <Button bgColor={"#5EA4B7"} w={'25vw'}>
                    <Link href='/SignUp/SignupPage'>Sign Up</Link>
                </Button>
            </VStack>
        </Box>
  )
}