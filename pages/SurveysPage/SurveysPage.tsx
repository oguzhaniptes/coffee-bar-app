import React from "react";
import {
  Box,
  Stack,
  StackDivider,
  HStack,
  VStack,
  IconButton,
  Text,
  Circle,
} from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import Link from "next/link";
import { AddIcon, ChevronLeftIcon, InfoIcon } from "@chakra-ui/icons";

export default function SurveysPage() {
  return (
    <Box>
      <NavBar></NavBar>
      <Box mt={6}>
        <Stack divider={<StackDivider h={4} />} mx={8}>
          <HStack justifyContent={"space-around"}>
            <Link href="/HomePage/HomePage">
              <IconButton aria-label=""
                variant={"unstyled"}
                icon={
                  <ChevronLeftIcon
                    color={"#5EA4B7"}
                    boxSize={10}
                  ></ChevronLeftIcon>
                }
                _hover={{ background: "#515764" }}
              ></IconButton>
            </Link>
            <Text fontWeight={"bold"}>Gift Page</Text>
            <IconButton aria-label=""
              color={"#5EA4B7"}
              variant={"unstyled"}
              icon={<InfoIcon boxSize={6}></InfoIcon>}
            ></IconButton>
          </HStack>
          <VStack mt={4}>
            <Box
              borderRadius={12}
              boxShadow={"2xl"}
              bgColor={'#E7F0F1'}
              w={"90vw"}
              h={72}
            >
              <Text m={4} fontWeight={"bold"}>
                {" "}
                Merhaba, Coffee Bar App hizmetimizden memnun kaldiniz mi?
              </Text>
              <HStack justifyContent={"space-around"} spacing={-12}>
                <VStack spacing={4}>
                  <IconButton aria-label=""
                    size={"sm"}
                    icon={<AddIcon></AddIcon>}
                    bgColor={"white"}
                    borderRadius={"100%"}
                  ></IconButton>
                  <IconButton aria-label=""
                    size={"sm"}
                    icon={<AddIcon></AddIcon>}
                    bgColor={"white"}
                    borderRadius={"100%"}
                  ></IconButton>
                  <IconButton aria-label=""
                    size={"sm"}
                    icon={<AddIcon></AddIcon>}
                    bgColor={"white"}
                    borderRadius={"100%"}
                  ></IconButton>
                  <IconButton aria-label=""
                    size={"sm"}
                    icon={<AddIcon></AddIcon>}
                    bgColor={"white"}
                    borderRadius={"100%"}
                  ></IconButton>
                </VStack>
                <VStack spacing={4}>
                  <Box borderRadius={12} bgColor={"white"} w={"60vw"} h={8}>
                    <Text ml={4} fontWeight={"bold"} mt={1}>
                      Evet
                    </Text>
                  </Box>
                  <Box borderRadius={12} bgColor={"white"} w={"60vw"} h={8}>
                    <Text ml={4} fontWeight={"bold"} mt={1}>
                      Fena degil
                    </Text>
                  </Box>
                  <Box borderRadius={12} bgColor={"white"} w={"60vw"} h={8}>
                    <Text ml={4} fontWeight={"bold"} mt={1}>
                      Kararsizim
                    </Text>
                  </Box>
                  <Box borderRadius={12} bgColor={"white"} w={"60vw"} h={8}>
                    <Text ml={4} fontWeight={"bold"} mt={1}>
                      Hayir
                    </Text>
                  </Box>
                </VStack>
              </HStack>
            </Box>
          </VStack>
        </Stack>
      </Box>
    </Box>
  );
}
