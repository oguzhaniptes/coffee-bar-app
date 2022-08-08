import { Box, HStack, Image, Text, Badge, VStack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Popular() {
    return (
        <VStack mt={10}>
            <Coffee></Coffee>
            <Tea></Tea>
            <Drink></Drink>
            <Dessert></Dessert>
        </VStack>
    )
}
function Coffee() {
    return (
        <Box bgColor={'#5EA4B7'} w={"80vw"} h={"28vw"} borderRadius={12} position={'relative'}>
            <Image src='/drinks/Coffee-4.svg' w={"15vw"} position={'absolute'} right={4} top={2}></Image>
            <HStack ml={4} mt={2}>
                <StarIcon color={'orange'}></StarIcon>
                <Text fontWeight={'thin'} color={'white'} textAlign={'center'}>4,9</Text>
            </HStack>
            <VStack alignItems={'start'} ml={4} mt={2}>
                <Text fontWeight={'bold'} color={'white'} >Americano</Text>
                <Badge ml={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'0.8em'}>30$</Badge>
            </VStack>
            <VStack position={'absolute'} bottom={2} pl={4} spacing={0} alignItems={"flex-start"}>
            </VStack>
        </Box>
    )
}
function Tea() {
    return (
        <Box bgColor={'#5EA4B7'} w={"80vw"} h={"28vw"} borderRadius={12} position={'relative'}>
            <Image src='/drinks/Coffee-5.svg' w={"15vw"} position={'absolute'} right={4} top={2}></Image>
            <HStack ml={4} mt={2}>
                <StarIcon color={'orange'}></StarIcon>
                <Text fontWeight={'thin'} color={'white'} textAlign={'center'}>4,4</Text>
            </HStack>
            <VStack alignItems={'start'} ml={4} mt={2}>
                <Text fontWeight={'bold'} color={'white'} >Tea</Text>
                <Badge ml={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'0.8em'}>10$</Badge>
            </VStack>
            <VStack position={'absolute'} bottom={2} pl={4} spacing={0} alignItems={"flex-start"}>
            </VStack>
        </Box>
    )
}

function Drink() {
    return (
        <Box bgColor={'#5EA4B7'} w={"80vw"} h={"28vw"} borderRadius={12} position={'relative'}>
            <Image src='/drinks/Lemonade.svg' w={"15vw"} position={'absolute'} right={4} top={2}></Image>
            <HStack ml={4} mt={2}>
                <StarIcon color={'orange'}></StarIcon>
                <Text fontWeight={'thin'} color={'white'} textAlign={'center'}>4,1</Text>
            </HStack>
            <VStack alignItems={'start'} ml={4} mt={2}>
                <Text fontWeight={'bold'} color={'white'} >Lemonade</Text>
                <Badge ml={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'0.8em'}>20$</Badge>
            </VStack>
            <VStack position={'absolute'} bottom={2} pl={4} spacing={0} alignItems={"flex-start"}>
            </VStack>
        </Box>
    )
}
function Dessert() {
    return (
        <Box bgColor={'#5EA4B7'} w={"80vw"} h={"28vw"} borderRadius={12} position={'relative'}>
            <Image src='/dessert/d1.png' w={"30vw"} position={'absolute'} right={4} ></Image>
            <HStack ml={4} mt={2}>
                <StarIcon color={'orange'}></StarIcon>
                <Text fontWeight={'thin'} color={'white'} textAlign={'center'}>3,9</Text>
            </HStack>
            <VStack alignItems={'start'} ml={4} mt={2}>
                <Text fontWeight={'bold'} color={'white'} >Cheescake</Text>
                <Badge ml={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'0.8em'}>25$</Badge>
            </VStack>
            <VStack position={'absolute'} bottom={2} pl={4} spacing={0} alignItems={"flex-start"}>
            </VStack>
        </Box>
    )
}