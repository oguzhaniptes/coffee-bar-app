import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, HStack,IconButton } from '@chakra-ui/react'
import React from 'react'

export default function NavBar() {
  return (
    <Box>
        <HStack>
            <IconButton icon={<ArrowBackIcon></ArrowBackIcon>}></IconButton>
            <IconButton></IconButton>
            <IconButton></IconButton>
            <IconButton></IconButton>
        </HStack>
    </Box>
  )
}
