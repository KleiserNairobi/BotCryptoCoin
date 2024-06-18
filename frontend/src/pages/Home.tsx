import { HStack, Flex, Box } from "@chakra-ui/react";
import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { useTokens } from "../styles/tokens";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Home() {
  const tokens = useTokens();
  const [collapse, setCollapse] = useState(true);

  return (
    <HStack w={"full"} h={"100vh"} gap={0.5} overflowX="hidden">
      <Flex
        as={"aside"}
        w={"full"}
        h={"full"}
        maxW={collapse ? 260 : 90}
        bg={tokens.bgMenu}
        alignItems={"start"}
        flexDir={"column"}
        justifyContent={"space-between"}
        transition={"ease-in-out .2s"}
      >
        <Sidebar collapse={collapse} />
      </Flex>
      <Flex flexDir={"column"} h={"full"} w={"full"}>
        <Flex minH={20} w={"full"}>
          <Header collapse={collapse} setCollapse={setCollapse} />
        </Flex>
        <Flex
          as={"main"}
          pl={6}
          w={"full"}
          h={"full"}
          bg={tokens.bgMain}
          flexDir={"column"}
          overflow="hidden"
        >
          <Box h={"full"} w={"full"} overflowX="auto">
            <Outlet />
          </Box>
        </Flex>
      </Flex>
    </HStack>
  );
}
