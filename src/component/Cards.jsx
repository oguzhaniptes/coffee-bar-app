import { Box, HStack, Image, Text, Badge, VStack, IconButton } from '@chakra-ui/react';
import { StarIcon,ArrowUpIcon } from '@chakra-ui/icons';
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../index.css'

export default function Cards(){
}

export function CoffeeCards() {
    return (
        <HStack mt={10}>
            <Coffee></Coffee>
            <Coffee2></Coffee2>
            <Coffee3></Coffee3>
        </HStack>
    )
}
export function TeaCards() {
    return (
        <HStack mt={10}>
            <Tea></Tea>
        </HStack>
    )
}
export function DrinkCards(){
    return(
        <HStack mt={10}>
            <Lemonade></Lemonade>
        </HStack>
    )
}
export function DessertCards(){
    return(
        <HStack mt={10}>
            <Dessert1></Dessert1>
            <Dessert2></Dessert2>
            <Dessert3></Dessert3>
        </HStack>
    )
}
export function Coffee() {
    return (
        <Box bgColor={'#5EA4B7'} w={"50vw"} h={"50vw"} borderRadius={12} position={'relative'}>
            <Image src='/drinks/Coffee-4.svg' w={"28vw"} position={'absolute'} right={2} top={-10}></Image>
            <Badge m={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'1em'}>30$</Badge>
            <VStack position={'absolute'} bottom={2} pl={4} spacing={0} alignItems={"flex-start"}>
                <Text fontWeight={'bold'} color={'white'}>Americano</Text>
                <HStack position={'relative'} justifyContent={'space-between'} w={'40'}>
                    <HStack spacing={0.5}>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange.200'}></StarIcon>
                    </HStack>
                    <IconButton size={'sm'} icon={<ArrowUpIcon></ArrowUpIcon>}></IconButton>
                </HStack>
            </VStack>
        </Box>
    )
}
export function Coffee2() {
    return (
        <Box bgColor={'#5EA4B7'} w={"50vw"} h={"50vw"} borderRadius={12} position={'relative'}>
            <Image src='/drinks/Coffee-2.svg' w={"28vw"} position={'absolute'} right={2} top={-10}></Image>
            <Badge m={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'1em'}>30$</Badge>
            <VStack position={'absolute'} bottom={2} pl={4} spacing={0} alignItems={"flex-start"}>
                <Text fontWeight={'bold'} color={'white'}>Latte</Text>
                <HStack position={'relative'} justifyContent={'space-between'} w={'40'}>
                    <HStack spacing={0.5}>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange.200'}></StarIcon>
                    </HStack>
                    <IconButton size={'sm'} icon={<ArrowUpIcon></ArrowUpIcon>}></IconButton>
                </HStack>
            </VStack>
        </Box>
    )
}
export function Coffee3() {
    return (
        <Box bgColor={'#5EA4B7'} w={"50vw"} h={"50vw"} borderRadius={12} position={'relative'}>
            <Image src='/drinks/Coffee-1.svg' w={"28vw"} position={'absolute'} right={2} top={-10}></Image>
            <Badge m={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'1em'}>30$</Badge>
            <VStack position={'absolute'} bottom={2} pl={4} spacing={0} alignItems={"flex-start"}>
                <Text fontWeight={'bold'} color={'white'}>Cold Coffee</Text>
                <HStack position={'relative'} justifyContent={'space-between'} w={'40'}>
                    <HStack spacing={0.5}>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange.200'}></StarIcon>
                    </HStack>
                    <IconButton size={'sm'} icon={<ArrowUpIcon></ArrowUpIcon>}></IconButton>
                </HStack>
            </VStack>
        </Box>
    )
}

export function Tea() {
    return (
        <Box bgColor={'#5EA4B7'} w={"50vw"} h={"50vw"} borderRadius={12} position={'relative'}>
            <Image src='/drinks/Coffee-5.svg' w={"28vw"} position={'absolute'} right={2} top={-10}></Image>
            <Badge m={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'1em'}>30$</Badge>
            <VStack position={'absolute'} bottom={2} pl={4} spacing={0} alignItems={"flex-start"}>
                <Text fontWeight={'bold'} color={'white'}>Tea</Text>
                <HStack position={'relative'} justifyContent={'space-between'} w={'40'}>
                    <HStack spacing={0.5}>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange.200'}></StarIcon>
                    </HStack>
                    <IconButton size={'sm'} icon={<ArrowUpIcon></ArrowUpIcon>}></IconButton>
                </HStack>
            </VStack>
        </Box>
    )
}
export function Lemonade() {
    return (
        <Box bgColor={'#5EA4B7'} w={"50vw"} h={"50vw"} borderRadius={12} position={'relative'}>
            <Image src='/drinks/Lemonade.svg' w={"28vw"} position={'absolute'} right={2} top={-10}></Image>
            <Badge m={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'1em'}>30$</Badge>
            <VStack position={'absolute'} bottom={2} pl={4} spacing={0} alignItems={"flex-start"}>
                <Text fontWeight={'bold'} color={'white'}>Lemonade</Text>
                <HStack position={'relative'} justifyContent={'space-between'} w={'40'}>
                    <HStack spacing={0.5}>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange.200'}></StarIcon>
                    </HStack>
                    <IconButton size={'sm'} icon={<ArrowUpIcon></ArrowUpIcon>}></IconButton>
                </HStack>
            </VStack>
        </Box>
    )
}

export function Dessert1() {
    return (
        <Box bgColor={'#5EA4B7'} w={"50vw"} h={"50vw"} borderRadius={12} position={'relative'}>
            <Image src='/dessert/d1.png' w={"35vw"} position={'absolute'} right={2} top={-2}></Image>
            <Badge m={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'1em'}>30$</Badge>
            <VStack position={'absolute'} bottom={2} pl={4} spacing={0} alignItems={"flex-start"}>
                <Text fontWeight={'bold'} color={'white'}>Cheescake</Text>
                <HStack position={'relative'} justifyContent={'space-between'} w={'40'}>
                    <HStack spacing={0.5}>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange.200'}></StarIcon>
                    </HStack>
                    <IconButton size={'sm'} icon={<ArrowUpIcon></ArrowUpIcon>}></IconButton>
                </HStack>
            </VStack>
        </Box>
    )
}
export function Dessert2() {
    return (
        <Box bgColor={'#5EA4B7'} w={"50vw"} h={"50vw"} borderRadius={12} position={'relative'}>
            <Image src='/dessert/d2.png' w={"35vw"} position={'absolute'} right={2} top={-2}></Image>
            <Badge m={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'1em'}>30$</Badge>
            <VStack position={'absolute'} bottom={2} pl={4} spacing={0} alignItems={"flex-start"}>
                <Text fontWeight={'bold'} color={'white'}>Cheescake</Text>
                <HStack position={'relative'} justifyContent={'space-between'} w={'40'}>
                    <HStack spacing={0.5}>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange.200'}></StarIcon>
                    </HStack>
                    <IconButton size={'sm'} icon={<ArrowUpIcon></ArrowUpIcon>}></IconButton>
                </HStack>
            </VStack>
        </Box>
    )
}
export function Dessert3() {
    return (
        <Box bgColor={'#5EA4B7'} w={"50vw"} h={"50vw"} borderRadius={12} position={'relative'}>
            <Image src='/dessert/d3.png' w={"35vw"} position={'absolute'} right={2} top={-2}></Image>
            <Badge m={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'1em'}>30$</Badge>
            <VStack position={'absolute'} bottom={2} pl={4} spacing={0} alignItems={"flex-start"}>
                <Text fontWeight={'bold'} color={'white'}>Cheescake</Text>
                <HStack position={'relative'} justifyContent={'space-between'} w={'40'}>
                    <HStack spacing={0.5}>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange'}></StarIcon>
                        <StarIcon color={'orange.200'}></StarIcon>
                    </HStack>
                    <IconButton size={'sm'} icon={<ArrowUpIcon></ArrowUpIcon>}></IconButton>
                </HStack>
            </VStack>
        </Box>
    )
}
