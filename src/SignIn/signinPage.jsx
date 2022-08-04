import { ChevronLeftIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, HStack, IconButton, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Form from '../component/Form'
import '../index.css'

export default function SigninPage() {
    return (
        <Box  bgImage="signIn-background.svg" w={'100vw'} h={'60vh'} bgRepeat={'no-repeat'}>
            <Box>
                <Link href='https://twitter.com'>
                    <IconButton ml={6} mt={6} variant={'unstyled'} icon={<ChevronLeftIcon boxSize={8} color={'white'}></ChevronLeftIcon>}></IconButton>
                </Link>
                <Box>
                    <Text mt={'100px'} ml={'50px'} color={'white'} fontSize={'4xl'} fontWeight={'bold'}>Welcome<br></br>Back</Text>
                </Box>
            <VStack spacing={10} mt={'40'}>
                <Form></Form>
                <Box w={'80vw'}>
                    <HStack justifyContent={'space-between'}>
                        <Text fontWeight={'bold'} fontSize={'2xl'} color={'black'}>Sign In</Text>
                        <Link>
                            <IconButton boxSize={'90'} borderRadius={'100'} background={'#3f434c'} variant={'unstyled'} icon={<ArrowForwardIcon color={'white'} boxSize={8} ></ArrowForwardIcon>} _hover={{ background: "#515764" }}></IconButton>
                        </Link>
                    </HStack>
                </Box>
                <HStack w={'80vw'} justifyContent={"space-between"} alignItems={"center"}>
                    <Text color={'black'} fontWeight={'bold'} as={'u'}><Link href='https://youtube.com'>Sign up</Link></Text>
                    <Text color={'black'} fontWeight={'bold'} as={'u'}>Forgot password</Text>
                </HStack>
            </VStack>
            </Box>
        </Box>
    )
}