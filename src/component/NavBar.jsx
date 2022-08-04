import React from 'react'
import { BiHomeAlt, BiHeart, BiSearch, BiUser, BiQrScan } from "react-icons/bi";
import { BottomNavigation, BottomNavigationItem, BottomNavigationIcon, BottomNavigationLabel } from 'chakra-ui-bottom-navigation';
import { Box, HStack } from '@chakra-ui/react';


export default function NavBar() {
    return (
        <BottomNavigation  > 
        <HStack  zIndex={2} background={'#E7F0F1'} justifyContent={'space-around'} position={"fixed"} bottom={-1} w={'100vw'} h={12}>
            <BottomNavigationItem boxSize={8}>
                <BottomNavigationIcon boxSize={8} as={BiHomeAlt}></BottomNavigationIcon>
            </BottomNavigationItem>
            <BottomNavigationItem boxSize={8}>
                <BottomNavigationIcon boxSize={8} as={BiHeart}></BottomNavigationIcon>
            </BottomNavigationItem>
            <Box boxShadow='dark-lg' borderTopRadius={12} h={20} w={90}  bgColor={'#5EA4B7'} display={"flex"} justifyContent={"center"} >
                <BottomNavigationItem>
                    <BottomNavigationIcon mb={2} boxSize={12} color={'white'} as={BiQrScan}></BottomNavigationIcon>
                </BottomNavigationItem>
            </Box>
            <BottomNavigationItem boxSize={8}>
                <BottomNavigationIcon boxSize={8} as={BiSearch}></BottomNavigationIcon>
            </BottomNavigationItem>
            <BottomNavigationItem boxSize={8}>
                <BottomNavigationIcon boxSize={8} as={BiUser}></BottomNavigationIcon>
            </BottomNavigationItem>
        </HStack>
        </BottomNavigation>
    )
}
