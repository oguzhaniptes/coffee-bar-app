import React from 'react'
import {
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    Text,
    Image,
    HStack,
    StackDivider,
    VStack,
    Badge,
    useDisclosure,
    IconButton
} from '@chakra-ui/react'
import { CheckCircleIcon, EditIcon, SettingsIcon, StarIcon, HamburgerIcon } from "@chakra-ui/icons"
import Link from 'next/link'


export default function DrawerMy() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <Box>
            <IconButton aria-label='' mt={'4'} ml={'4'} onClick={onOpen} variant={'unstyled'} icon={<HamburgerIcon color={'white'} boxSize={6} ></HamburgerIcon>} _hover={{ background: "#515764" }}></IconButton>
            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    {/* ------------------------------------------------------------------ */}
                    <Box m={10} boxShadow='2xl' rounded='md' bgColor={'#8DC1D0'}>
                        <Box p={2}>
                            <VStack divider={<StackDivider borderColor='#F4F9FA' />}>
                                <Box>
                                    <HStack >
                                        <Box>
                                            <Image boxSize={'50px'} src="../ppicon.jpg"></Image>
                                        </Box>
                                        <Box pl={6} alignItems={'center'}>
                                            <Text textAlign={'center'} color={'white'} fontWeight={'bold'}>Balance</Text>
                                            <Text textAlign={'center'} color={'white'} fontWeight={'bold'}>100$</Text>
                                        </Box>
                                    </HStack>
                                </Box>
                                <Box >
                                    <HStack>
                                        <Text color={'#F4F9FA'}>Gifts</Text>
                                        <Badge colorScheme='green' fontSize={'0.65em'}>1 COFFEE</Badge>
                                        <Badge colorScheme='green' fontSize={'0.65em'}>1 DESSERT</Badge>
                                    </HStack>
                                </Box>
                            </VStack>
                        </Box>
                    </Box>
                    {/* ------------------------------------------------------------------ */}
                    <VStack spacing={4}>
                        <VStack spacing={4}>
                            <Link href='/ProfilePage/ProfilePage'>
                                <Button w={60} boxShadow='lg' textAlign={'center'} leftIcon={<EditIcon></EditIcon>}>Profile</Button>
                            </Link>
                            <Link href='/SurveysPage/SurveysPage'>
                                <Button w={60} boxShadow='lg' textAlign={'center'} leftIcon={<CheckCircleIcon></CheckCircleIcon>}>Surveys</Button>
                            </Link>
                            <Link href='/GiftPage/GiftPage'>
                                <Button w={60} boxShadow='lg' textAlign={'center'} leftIcon={<StarIcon></StarIcon>}>Gifts</Button>
                            </Link>
                        </VStack>
                        <VStack >
                            <Button w={60} boxShadow='lg' textAlign={'center'} leftIcon={<SettingsIcon></SettingsIcon>}>Settings</Button>
                        </VStack>
                    </VStack>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}
