import React from 'react'
import { BiHomeAlt, BiHeart, BiSearch, BiUser, BiQrScan } from "react-icons/bi";
import { BottomNavigation, BottomNavigationItem, BottomNavigationIcon, BottomNavigationLabel } from 'chakra-ui-bottom-navigation';
import { Box, HStack } from '@chakra-ui/react';
import { useRouter } from "next/router";
import { useCallback } from "react";
import GiftPage from '../GiftPage/GiftPage';


export default function NavBar() {
    const router = useRouter();

    const handleChange = useCallback(
        (path: any) => {
            router.push(path);
        },
        [router.push]
    );

    
    
    return (
        
        <BottomNavigation  value={router.pathname} onChange={handleChange} >
            <HStack zIndex={2} background={'#E7F0F1'} justifyContent={'space-around'} position={"fixed"} bottom={-1} w={'100vw'} h={12}>
                <BottomNavigationItem boxSize={8} value='/HomePage/HomePage'>
                    <BottomNavigationIcon boxSize={8} as={BiHomeAlt}></BottomNavigationIcon>
                </BottomNavigationItem>
                <BottomNavigationItem boxSize={8} value='/GiftPage/GiftPage'>
                    <BottomNavigationIcon  boxSize={8} as={BiHeart}></BottomNavigationIcon>
                </BottomNavigationItem>
                <Box boxShadow='dark-lg' borderTopRadius={12} h={20} w={90} bgColor={'#5EA4B7'} display={"flex"} justifyContent={"center"} >
                    <BottomNavigationItem>
                        <BottomNavigationIcon mb={2} boxSize={12} color={'white'} as={BiQrScan}></BottomNavigationIcon>
                    </BottomNavigationItem>
                </Box>
                <BottomNavigationItem boxSize={8} value='/MenuPage/MenuPage'>
                    <BottomNavigationIcon boxSize={8} as={BiSearch}></BottomNavigationIcon>
                </BottomNavigationItem>
                <BottomNavigationItem boxSize={8} value='/ProfilePage/ProfilePage'>
                    <BottomNavigationIcon boxSize={8} as={BiUser}></BottomNavigationIcon>
                </BottomNavigationItem>
            </HStack>
        </BottomNavigation>
    )
}