import { HStack, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { useTokens } from "../styles/tokens";
import { Header } from "../components/Header";

export default function Home() {
  const tokens = useTokens();
  const [collapse, setCollapse] = useState(true);

  return (
    <HStack w={"full"} h={"100vh"} p={6} gap={0.5}>
      <Flex
        as={"aside"}
        w={"full"}
        h={"full"}
        p={6}
        maxW={collapse ? 300 : 100}
        bg={tokens.corDeFundo}
        alignItems={"start"}
        flexDir={"column"}
        justifyContent={"space-between"}
        transition={"ease-in-out .2s"}
        borderRadius={"3xl"}
      >
        <Sidebar collapse={collapse} />
      </Flex>
      <Flex
        as={"main"}
        p={6}
        w={"full"}
        h={"full"}
        bg={tokens.corDeFundo}
        flexDir={"column"}
        //position={"relative"}
        //alignItems="center"
        //justifyContent="center"
        borderRadius={"3xl"}
      >
        <Header />
        <Text fontSize={100} color="gray.300">
          Main
        </Text>
      </Flex>
    </HStack>
  );
}
