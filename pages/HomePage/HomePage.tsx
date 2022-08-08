import React from "react"
import {
    Box,
    Text,
    HStack,
    Tab,
    Tabs,
    TabPanel,
    TabList,
    TabPanels
} from '@chakra-ui/react'
import Announcement from "../Components/Announcement"
import { DessertCards, DrinkCards, TeaCards } from "../Components/Cards"
import Popular from "../Components/Popular"
import { CoffeeCards } from "../Components/Cards"
import NavBar from "../Components/NavBar"
import DrawerMy from "../Components/DrawerMy"


export default function HomePage() {


    return (
        <Box h={'200vh'} overflow={'hidden'}>
            
            <Box bgImage="../background-2.svg" bgPosition={'center'} bgRepeat={'no-repeat'} bgSize={'cover'}>
                <DrawerMy></DrawerMy>
                <Announcement></Announcement>
                <NavBar></NavBar>
                <Text fontWeight={'bold'} fontSize={24} pl={'1.2em'} color={'teal.900'}>Best Coffee In Town</Text>

                <Tabs pl={'1.2em'} pt={'2em'} variant='soft-rounded' colorScheme={'teal'}>
                    <TabList>
                        <Tab color={'white'}>Coffee</Tab>
                        <Tab color={'white'}>Tea</Tab>
                        <Tab color={'white'}>Cold Drink</Tab>
                        <Tab color={'white'}>Dessert</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <HStack overflow={'auto'} w={'90vw'}>
                                <CoffeeCards></CoffeeCards>
                            </HStack>
                        </TabPanel>
                        <TabPanel>
                            <HStack overflow={'auto'} w={'90vw'}>
                                <TeaCards></TeaCards>
                            </HStack>
                        </TabPanel>
                        <TabPanel>
                            <HStack overflow={'auto'} w={'90vw'}>
                                <DrinkCards></DrinkCards>
                            </HStack>
                        </TabPanel>
                        <TabPanel>
                            <HStack overflow={'auto'} w={'90vw'}>
                                <DessertCards></DessertCards>
                            </HStack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
            <Box>
                <Text fontWeight={'bold'} color={'teal.900'} fontSize={'2xl'} pl={'1.2em'} pt={'2em'}>Most popular</Text>
                <Popular></Popular>
            </Box>
        </Box>
    )
}