import { Box, Tab, Tabs, TabList, TabPanel, TabPanels, HStack, VStack, Text, Image, Badge, IconButton } from '@chakra-ui/react'
import { StarIcon, ArrowUpIcon } from '@chakra-ui/icons'
import React from 'react'
import DrawerMy from '../component/DrawerMy'
import NavBar from '../component/NavBar'

export default function MenuPage() {
    return (
        <Box h={'100vh'} style={{ background: `linear-gradient(190deg, #8DC1D0 30%, rgba(0, 0, 0, 0)30%)` }}>
            <DrawerMy></DrawerMy>
            <NavBar></NavBar>
            <Box p={4}>
                <Tabs pl={'1.2em'} pt={'2em'} variant='soft-rounded' colorScheme={'teal'}>
                    <TabList justifyContent={'space-around'}>
                        <Tab color={'white'}>Coffee</Tab>
                        <Tab color={'white'}>Tea</Tab>
                        <Tab color={'white'}>Cold Drink</Tab>
                        <Tab color={'white'}>Dessert</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <HStack pt={'4vh'}>
                                <VStack>
                                    <C1></C1>
                                    <C2></C2>
                                    <C3></C3>
                                </VStack>
                                <VStack>
                                    <C1></C1>
                                    <C2></C2>
                                    <C3></C3>
                                </VStack>
                            </HStack>
                            <HStack pt={2}>
                                <VStack>
                                    <C1></C1>
                                    <C2></C2>
                                    <C3></C3>
                                </VStack>
                                <VStack>
                                    <C1></C1>
                                    <C2></C2>
                                    <C3></C3>
                                </VStack>
                            </HStack>
                        </TabPanel>
                        <TabPanel>
                            <HStack pt={'4vh'}>
                                <VStack>
                                    <T></T>
                                    <T></T>
                                    <T></T>
                                </VStack>
                                <VStack>
                                    <T></T>
                                    <T></T>
                                    <T></T>
                                </VStack>
                            </HStack>
                            <HStack pt={2}>
                                <VStack>
                                    <T></T>
                                    <T></T>
                                    <T></T>
                                </VStack>
                                <VStack>
                                    <T></T>
                                    <T></T>
                                    <T></T>
                                </VStack>
                            </HStack>
                        </TabPanel>
                        <TabPanel>
                            <HStack pt={'4vh'}>
                                <VStack>
                                    <L></L>
                                    <L></L>
                                    <L></L>
                                </VStack>
                                <VStack>
                                    <L></L>
                                    <L></L>
                                    <L></L>
                                </VStack>
                            </HStack>
                            <HStack pt={2}>
                                <VStack>
                                    <L></L>
                                    <L></L>
                                    <L></L>
                                </VStack>
                                <VStack>
                                    <L></L>
                                    <L></L>
                                    <L></L>
                                </VStack>
                            </HStack>
                        </TabPanel>
                        <TabPanel>
                            <HStack pt={'4vh'}>
                                <VStack>
                                    <D></D>
                                    <D2></D2>
                                    <D3></D3>
                                </VStack>
                                <VStack>
                                    <D></D>
                                    <D2></D2>
                                    <D3></D3>
                                </VStack>
                            </HStack>
                            <HStack pt={2}>
                                <VStack>
                                    <D></D>
                                    <D2></D2>
                                    <D3></D3>
                                </VStack>
                                <VStack>
                                    <D></D>
                                    <D2></D2>
                                    <D3></D3>
                                </VStack>
                            </HStack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

        </Box>

    )
}


export function C1() {
    return (
        <Box bgColor={'#5EA4B7'} w={"40vw"} h={"40vw"} borderRadius={12} position={'relative'}>
            <Image src='/drinks/Coffee-4.svg' w={"18vw"} position={'absolute'} right={4} top={2}></Image>
            <Badge m={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'1em'}>30$</Badge>
            <VStack position={'absolute'} bottom={2} pl={'2vw'} spacing={2} alignItems={"flex-start"}>
                <Text fontSize={'3vw'} fontWeight={'bold'} color={'white'}>Americano</Text>
                <HStack w={"35vw"} justifyContent={'space-between'} spacing={8}>
                    <HStack spacing={0.5}>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange.200'}></StarIcon>
                    </HStack>
                    <Text boxShadow={'md'} textAlign={'center'} bgColor={'white'} borderRadius={12} w={'10vw'}>30$</Text>
                </HStack>
            </VStack>
        </Box>
    )
}
export function C2() {
    return (
        <Box bgColor={'#5EA4B7'} w={"40vw"} h={"40vw"} borderRadius={12} position={'relative'}>
            <Image src='/drinks/Coffee-1.svg' w={"18vw"} position={'absolute'} right={4} top={2}></Image>
            <Badge m={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'1em'}>30$</Badge>
            <VStack position={'absolute'} bottom={2} pl={'2vw'} spacing={2} alignItems={"flex-start"}>
                <Text fontSize={'3vw'} fontWeight={'bold'} color={'white'}>Americano</Text>
                <HStack w={"35vw"} justifyContent={'space-between'} spacing={8}>
                    <HStack spacing={0.5}>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange.200'}></StarIcon>
                    </HStack>
                    <Text boxShadow={'md'} textAlign={'center'} bgColor={'white'} borderRadius={12} w={'10vw'}>30$</Text>
                </HStack>
            </VStack>
        </Box>
    )
}
export function C3() {
    return (
        <Box bgColor={'#5EA4B7'} w={"40vw"} h={"40vw"} borderRadius={12} position={'relative'}>
            <Image src='/drinks/Coffee-2.svg' w={"18vw"} position={'absolute'} right={4} top={2}></Image>
            <Badge m={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'1em'}>30$</Badge>
            <VStack position={'absolute'} bottom={2} pl={'2vw'} spacing={2} alignItems={"flex-start"}>
                <Text fontSize={'3vw'} fontWeight={'bold'} color={'white'}>Americano</Text>
                <HStack w={"35vw"} justifyContent={'space-between'} spacing={8}>
                    <HStack spacing={0.5}>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange.200'}></StarIcon>
                    </HStack>
                    <Text boxShadow={'md'} textAlign={'center'} bgColor={'white'} borderRadius={12} w={'10vw'}>30$</Text>
                </HStack>
            </VStack>
        </Box>
    )
}

export function T() {
    return (
        <Box bgColor={'#5EA4B7'} w={"40vw"} h={"40vw"} borderRadius={12} position={'relative'}>
            <Image src='/drinks/Coffee-6.svg' w={"18vw"} position={'absolute'} right={4} top={2}></Image>
            <Badge m={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'1em'}>30$</Badge>
            <VStack position={'absolute'} bottom={2} pl={'2vw'} spacing={2} alignItems={"flex-start"}>
                <Text fontSize={'3vw'} fontWeight={'bold'} color={'white'}>Tea</Text>
                <HStack w={"35vw"} justifyContent={'space-between'} spacing={8}>
                    <HStack spacing={0.5}>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange.200'}></StarIcon>
                    </HStack>
                    <Text boxShadow={'md'} textAlign={'center'} bgColor={'white'} borderRadius={12} w={'10vw'}>30$</Text>
                </HStack>
            </VStack>
        </Box>
    )
}
export function L() {
    return (
        <Box bgColor={'#5EA4B7'} w={"40vw"} h={"40vw"} borderRadius={12} position={'relative'}>
            <Image src='/drinks/Lemonade.svg' w={"18vw"} position={'absolute'} right={4} top={2}></Image>
            <Badge m={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'1em'}>30$</Badge>
            <VStack position={'absolute'} bottom={2} pl={'2vw'} spacing={2} alignItems={"flex-start"}>
                <Text fontSize={'3vw'} fontWeight={'bold'} color={'white'}>Lemonade</Text>
                <HStack w={"35vw"} justifyContent={'space-between'} spacing={8}>
                    <HStack spacing={0.5}>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange.200'}></StarIcon>
                    </HStack>
                    <Text boxShadow={'md'} textAlign={'center'} bgColor={'white'} borderRadius={12} w={'10vw'}>30$</Text>
                </HStack>
            </VStack>
        </Box>
    )
}

export function D() {
    return (
        <Box bgColor={'#5EA4B7'} w={"40vw"} h={"40vw"} borderRadius={12} position={'relative'}>
            <Image src='/dessert/d1.png' w={"18vw"} position={'absolute'} right={4} top={2}></Image>
            <Badge m={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'1em'}>30$</Badge>
            <VStack position={'absolute'} bottom={2} pl={'2vw'} spacing={2} alignItems={"flex-start"}>
                <Text fontSize={'3vw'} fontWeight={'bold'} color={'white'}>Americano</Text>
                <HStack w={"35vw"} justifyContent={'space-between'} spacing={8}>
                    <HStack spacing={0.5}>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange.200'}></StarIcon>
                    </HStack>
                    <Text boxShadow={'md'} textAlign={'center'} bgColor={'white'} borderRadius={12} w={'10vw'}>30$</Text>
                </HStack>
            </VStack>
        </Box>
    )
}
export function D2() {
    return (
        <Box bgColor={'#5EA4B7'} w={"40vw"} h={"40vw"} borderRadius={12} position={'relative'}>
            <Image src='/dessert/d2.png' w={"18vw"} position={'absolute'} right={4} top={2}></Image>
            <Badge m={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'1em'}>30$</Badge>
            <VStack position={'absolute'} bottom={2} pl={'2vw'} spacing={2} alignItems={"flex-start"}>
                <Text fontSize={'3vw'} fontWeight={'bold'} color={'white'}>Americano</Text>
                <HStack w={"35vw"} justifyContent={'space-between'} spacing={8}>
                    <HStack spacing={0.5}>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange.200'}></StarIcon>
                    </HStack>
                    <Text boxShadow={'md'} textAlign={'center'} bgColor={'white'} borderRadius={12} w={'10vw'}>30$</Text>
                </HStack>
            </VStack>
        </Box>
    )
}
export function D3() {
    return (
        <Box bgColor={'#5EA4B7'} w={"40vw"} h={"40vw"} borderRadius={12} position={'relative'}>
            <Image src='/dessert/d3.png' w={"18vw"} position={'absolute'} right={4} top={2}></Image>
            <Badge m={4} color={'#8DC1D0'} textColor={'#5EA4B7'} fontSize={'1em'}>30$</Badge>
            <VStack position={'absolute'} bottom={2} pl={'2vw'} spacing={2} alignItems={"flex-start"}>
                <Text fontSize={'3vw'} fontWeight={'bold'} color={'white'}>Americano</Text>
                <HStack w={"35vw"} justifyContent={'space-between'} spacing={8}>
                    <HStack spacing={0.5}>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange'}></StarIcon>
                        <StarIcon boxSize={'3vw'} color={'orange.200'}></StarIcon>
                    </HStack>
                    <Text boxShadow={'md'} textAlign={'center'} bgColor={'white'} borderRadius={12} w={'10vw'}>30$</Text>
                </HStack>
            </VStack>
        </Box>
    )
}