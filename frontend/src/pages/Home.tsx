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
    <HStack w={"full"} h={"100vh"} gap={0.5}>
      <Flex
        as={"aside"}
        w={"full"}
        h={"full"}
        p={6}
        maxW={collapse ? 300 : 100}
        bg={tokens.bgMenu}
        alignItems={"start"}
        flexDir={"column"}
        justifyContent={"space-between"}
        transition={"ease-in-out .2s"}
        //borderRadius={"3xl"}
      >
        <Sidebar collapse={collapse} />
      </Flex>
      <Flex
        as={"main"}
        pl={6}
        pt={6}
        //pb={6}
        w={"full"}
        h={"full"}
        bg={tokens.bgMain}
        flexDir={"column"}
        //position={"relative"}
        //alignItems="center"
        //justifyContent="center"
        //borderRadius={"3xl"}
      >
        <Header collapse={collapse} setCollapse={setCollapse} />
        <Box overflowX="auto">
          <Outlet />
        </Box>
      </Flex>
    </HStack>
  );
}
