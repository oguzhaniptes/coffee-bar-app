import React from 'react'
import NavBar from '../Components/NavBar'
import { Box, HStack, IconButton, Text, StackDivider, Stack, VStack, Image } from '@chakra-ui/react'
import { ChevronLeftIcon, InfoIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default function GiftPage() {
    return (
        <Box>
            <NavBar></NavBar>
            <Box mt={6} >
                <Stack divider={<StackDivider h={4} />} mx={8} >
                    <HStack justifyContent={'space-around'}>
                        <Link href='/HomePage/HomePage'>
                            <IconButton aria-label=''variant={'unstyled'} icon={<ChevronLeftIcon color={'#5EA4B7'} boxSize={10}></ChevronLeftIcon>} _hover={{ background: "#515764" }}></IconButton>
                        </Link>
                        <Text fontWeight={'bold'}>Gift Page</Text>
                        <IconButton aria-label='' color={'#5EA4B7'} variant={'unstyled'} icon={<InfoIcon boxSize={6} ></InfoIcon>} ></IconButton>
                    </HStack>
                    <VStack>
                        <GiftCards></GiftCards>
                    </VStack>
                </Stack>
            </Box>
        </Box>
    )
}

export function GiftCards() {
    return (
        <div>
            <Drink></Drink>
            <Coffee></Coffee>
            <Tea></Tea>
            <Dessert></Dessert>
            <Latte></Latte>
        </div>
    )
}

function Coffee() {
    return (
        <Box bgColor={'#5EA4B7'} w={"80vw"} h={"28vw"} borderRadius={12}>
            <Stack m={4}>
                <HStack m={4} justifyContent={'space-between'}>
                    <IconButton aria-label='' ></IconButton>
                    <VStack px={6}>
                        <Text textAlign={'center'} fontWeight={'bold'} color={'white'}>Americano</Text>
                        <Text fontSize={12} fontWeight={'thin'} color={'white'}>01/01/2023</Text>
                    </VStack>
                    <Image src='/drinks/Coffee-4.svg' w={"15vw"}></Image>
                </HStack>
            </Stack>
        </Box>
    )
}
function Tea() {
    return (
        <Box bgColor={'#5EA4B7'} w={"80vw"} h={"28vw"} borderRadius={12}>
            <Stack m={4}>
                <HStack m={4} justifyContent={'space-between'}>
                    <IconButton aria-label=''></IconButton>
                    <VStack px={6}>
                        <Text textAlign={'center'} fontWeight={'bold'} color={'white'}>Tea</Text>
                        <Text fontSize={12} fontWeight={'thin'} color={'white'}>01/01/2023</Text>
                    </VStack>
                    <Image src='/drinks/Coffee-5.svg' w={"15vw"}></Image>
                </HStack>
            </Stack>
        </Box>
    )
}

function Drink() {
    return (
        <Box bgColor={'#5EA4B7'} w={"80vw"} h={"28vw"} borderRadius={12}>
            <Stack m={4}>
                <HStack m={4} justifyContent={'space-between'}>
                    <IconButton aria-label='' ></IconButton>
                    <VStack px={6}>
                        <Text fontWeight={'bold'} color={'white'}>Lemonade</Text>
                        <Text fontSize={12} fontWeight={'thin'} color={'white'}>01/01/2023</Text>
                    </VStack>
                    <Image src='/drinks/Lemonade.svg' w={"15vw"}></Image>
                </HStack>
            </Stack>
        </Box>
    )
}
function Dessert() {
    return (
        <Box bgColor={'#5EA4B7'} w={"80vw"} h={"28vw"} borderRadius={12}>
            <Stack m={4}>
                <HStack m={4} justifyContent={'space-between'}>
                    <IconButton aria-label='' ></IconButton>
                    <VStack px={6}>
                        <Text textAlign={'center'} fontWeight={'bold'} color={'white'}>Cold Coffee</Text>
                        <Text fontSize={12} fontWeight={'thin'} color={'white'}>01/01/2023</Text>
                    </VStack>
                    <Image src='/drinks/Coffee-1.svg' w={"15vw"}></Image>
                </HStack>
            </Stack>
        </Box>
    )
}
function Latte() {
    return (
        <Box bgColor={'#5EA4B7'} w={"80vw"} h={"28vw"} borderRadius={12}>
            <Stack m={4}>
                <HStack m={4} justifyContent={'space-between'}>
                    <IconButton aria-label='' ></IconButton>
                    <VStack px={6}>
                        <Text textAlign={'center'} fontWeight={'bold'} color={'white'}>Latte</Text>
                        <Text fontSize={12} fontWeight={'thin'} color={'white'}>01/01/2023</Text>
                    </VStack>
                    <Image src='/drinks/Coffee-2.svg' w={"15vw"}></Image>
                </HStack>
            </Stack>
        </Box>
    )
}