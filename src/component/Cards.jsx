import { Box, HStack, Image, Text, Badge, VStack, IconButton } from '@chakra-ui/react';
import { StarIcon,ArrowUpIcon } from '@chakra-ui/icons';
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../index.css'

export default function Cards() {
    return (
        <HStack mt={10}>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </HStack>
    )
}
function Product() {
    return (
        <Box bgColor={'#5EA4B7'} w={"50vw"} h={"50vw"} borderRadius={12} position={'relative'}>
            <Image src='/drinks/Coffee-1.svg' w={"28vw"} position={'absolute'} right={2} top={-10}></Image>
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

