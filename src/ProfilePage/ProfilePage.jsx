import React from 'react'
import { Box, Stack, HStack, VStack, StackDivider, Text, IconButton, Image, Badge } from '@chakra-ui/react'
import { ChevronLeftIcon, InfoIcon, SettingsIcon } from '@chakra-ui/icons'
import NavBar from '../component/NavBar'
import { GiftCards } from '../GiftPage/GiftPage'

export default function ProfilePage() {
    return (
        <Box>
            <NavBar></NavBar>
            <Box boxShadow={'2xl'} pt={'4vh'} bgColor={'#F4F9FA'} h={'55vh'} borderBottomRadius={32} bgImage='profile-background.svg' bgPos={'center'} bgSize={'60vh'} bgRepeat={'no-repeat'}>
                <HStack justifyContent={'space-around'} >
                    <IconButton variant={'unstyled'} icon={<ChevronLeftIcon color={'#5EA4B7'} boxSize={10}></ChevronLeftIcon>} _hover={{ background: "#515764" }}></IconButton>
                    <Text fontWeight={'bold'} fontSize={'3vh'}>Your Profile</Text>
                    <IconButton color={'#5EA4B7'} variant={'unstyled'} icon={<SettingsIcon boxSize={6} ></SettingsIcon>} ></IconButton>
                </HStack>
                <VStack mt={'2vh'} spacing={'8vh'}>
                    <Image zIndex={0} position={'absolute'} src=''></Image>
                    <Image zIndex={1} src='HAN2.png' h={'16vh'} borderRadius={'100%'}></Image>
                    <HStack spacing={12}>
                        <VStack spacing={0}>
                            <Text color={'teal.900'} fontSize={'2vh'}>Coffees</Text>
                            <Text fontSize={'3vh'} color={'teal.900'} fontWeight={'bold'}>42</Text>

                        </VStack>
                        <VStack spacing={0}>
                            <Text color={'teal.900'} fontSize={'2vh'}>Desserts</Text>
                            <Text fontSize={'3vh'} color={'teal.900'} fontWeight={'bold'}>10</Text>

                        </VStack>
                        <VStack spacing={0}>
                            <Text color={'teal.900'} fontSize={'2vh'}>Drinks</Text>
                            <Text fontSize={'3vh'} color={'teal.900'} fontWeight={'bold'}>12</Text>

                        </VStack>
                    </HStack>
                </VStack>
            </Box>
            <Box>
                <VStack my={'2vh'}>
                    <Text fontWeight={'bold'} fontSize={'3vh'}>History</Text>
                </VStack>
                <VStack maxHeight={"32vh"} overflowY={"auto"}>
                    <HistoryBoxBuilder imgUrl={"/drinks/Coffee-1.svg"} foodName={"Cold Coffee"} date={"01/01/2022"} price={"12$"} ></HistoryBoxBuilder>
                    <HistoryBoxBuilder imgUrl={"/dessert/d1.png"} foodName={"Cheescake"} date={"02/04/2022"} price={"10$"} />
                    <HistoryBoxBuilder imgUrl={"/drinks/Coffee-2.svg"} foodName={"Cafe Latte"} date={"19/05/2022"} price={"15$"} />
                    <HistoryBoxBuilder imgUrl={"/drinks/Coffee-4.svg"} foodName={"Americano"} date={"12/05/2022"} price={"25$"} />
                    <HistoryBoxBuilder imgUrl={"/drinks/Coffee-5.svg"} foodName={"Tea"} date={"07/04/2022"} price={"10$"} />
                </VStack>
            </Box>
        </Box >
    )
}
function HistoryBoxBuilder({ imgUrl, foodName, date, price }: { imgUrl: string, foodName: string, date: string, price: string }) {
    return (
        <Box bgColor={"#8DC1D0"} w={'70vw'} h={'10vh'} borderRadius={12} boxShadow={'2xl'}>
            <Box mx={'4vw'}  display={'flex'} justifyContent={'space-between'} alignItems={'center'} h={'10vh'}>
                <Image w={'6vh'} src={imgUrl}></Image>
                <VStack >
                    <Text shadow color={'white'} fontWeight={'bold'}>{foodName}</Text>
                    <Text color={'white'}>{date}</Text>
                </VStack>
                <Text boxShadow={'md'} textAlign={'center'} bgColor={'white'} borderRadius={12} w={12}>{price}</Text>
            </Box>
        </Box>
    )
}
