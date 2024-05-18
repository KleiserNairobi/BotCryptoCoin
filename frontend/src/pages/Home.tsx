import { HStack, Flex, Text, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { Sidebar } from "../components/Sidebar";

export default function Home() {
  const [collapse, setCollapse] = useState(true);
  return (
    <HStack w={"full"} h={"100vh"} p={6}>
      <Flex
        as={"aside"}
        w={"full"}
        h={"full"}
        p={6}
        maxW={collapse ? 300 : 100}
        bg={"gray.800"}
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
        bg={"gray.800"}
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
        <Text fontSize={100} color="gray.300">
          Main
        </Text>
      </Flex>
    </HStack>
  );
}
