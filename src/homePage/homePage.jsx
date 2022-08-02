import React from "react"
import { CheckCircleIcon, EditIcon, HamburgerIcon, SettingsIcon, StarIcon } from "@chakra-ui/icons"
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Box,
    Text,
    Image,
    IconButton,
    HStack,
    StackDivider,
    VStack,
    Badge
} from '@chakra-ui/react'
import '../index.css'

export default function HomePage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Box  bgImage="background-2.svg" bgPosition={'center'} bgRepeat={'no-repeat'} bgSize={'cover'} w={'100vw'} h={'55vh'}>
            <Box>
                <IconButton mt={'4'} ml={'4'} ref={btnRef} onClick={onOpen} variant={'unstyled'} icon={<HamburgerIcon color={'white'} boxSize={6} ></HamburgerIcon>} _hover={{ background: "#515764" }}></IconButton>
                <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={btnRef}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        {/* ------------------------------------------------------------------ */}
                        <Box m={12} boxShadow='2xl' rounded='md' bgColor={'#8DC1D0'}>
                            <Box p={2}>
                                <VStack divider={<StackDivider borderColor='#F4F9FA' />}>
                                    <Box>
                                        <HStack >
                                            <Box>
                                                <Image boxSize={'50px'} src="ppicon.jpg"></Image>
                                            </Box>
                                            <Box pl={6} alignItems={'center'}>
                                                <Text textAlign={'center'} color={'white'} fontWeight={'bold'}>Balance</Text>
                                                <Text textAlign={'center'} color={'white'} fontWeight={'bold'}>100$</Text>
                                            </Box>
                                        </HStack>
                                    </Box>
                                    <Box>
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
                            <Button textAlign={'center'} w={'65vw'} leftIcon={<EditIcon></EditIcon>}>Profile</Button>
                            <Button textAlign={'center'} w={'65vw'} leftIcon={<CheckCircleIcon></CheckCircleIcon>}>Surveys</Button>
                            <Button textAlign={'center'} w={'65vw'} leftIcon={<StarIcon></StarIcon>}>Gifts</Button>
                            <Button textAlign={'center'} w={'65vw'} leftIcon={<SettingsIcon></SettingsIcon>}>Settings</Button>
                        </VStack>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Box>
    )
}