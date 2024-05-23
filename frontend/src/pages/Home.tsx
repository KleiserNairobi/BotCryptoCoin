import { HStack, Flex, Text, IconButton, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { MdMenu, MdShieldMoon } from "react-icons/md";
import { Sidebar } from "../components/Sidebar";
import { useTokens } from "../styles/tokens";

export default function Home() {
  const tokens = useTokens();
  const [collapse, setCollapse] = useState(true);
  const { toggleColorMode } = useColorMode();

  return (
    <HStack w={"full"} h={"100vh"} p={3} gap={0.5}>
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
        borderRadius={"2xl"}
      >
        <Sidebar collapse={collapse} />
      </Flex>
      <Flex
        as={"main"}
        w={"full"}
        h={"full"}
        bg={tokens.corDeFundo}
        flexDir={"column"}
        position={"relative"}
        alignItems="center"
        justifyContent="center"
        borderRadius={"2xl"}
      >
        <IconButton
          top={6}
          left={6}
          icon={<MdMenu />}
          aria-label="Menu"
          position={"absolute"}
          onClick={() => setCollapse(!collapse)}
        />
        <IconButton
          top={6}
          left={12}
          icon={<MdShieldMoon />}
          aria-label="Menu"
          position={"absolute"}
          onClick={toggleColorMode}
        />
        <Text fontSize={100} color="gray.300">
          Main
        </Text>
      </Flex>
    </HStack>
  );
}
