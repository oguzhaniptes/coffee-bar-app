import { Box, Image } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Announcement() {
    return (
        <Carousel showArrows={false} showThumbs={false} showIndicators={false} showStatus={false} className='main-slide' infiniteLoop autoPlay>
            <Box mx={2} borderRadius={12} bgImage="coffee.jpg" p={100} bgPosition={'center'} bgSize={'cover'}></Box>
            <Box mx={2} borderRadius={12} bgImage="kron.png" p={100} bgPosition={'center'} bgSize={'cover'}></Box>
            <Box mx={2} borderRadius={12} bgImage="kron2.png" p={100} bgPosition={'center'} bgSize={'cover'}></Box>
        </Carousel>
    )
}
