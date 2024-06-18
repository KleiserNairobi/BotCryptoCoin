import { Flex } from "@chakra-ui/react";
import { NewHeader } from "../components/NewHeader";
import { Menu } from "../components/Menu";

export function Principal() {
  return (
    <Flex h={"100vh"} direction={"column"}>
      <NewHeader />
      <Flex w={"100%"} my={"6"} mx={"auto"} maxW={1480} px={"6"}>
        <Menu />
      </Flex>
    </Flex>
  );
}
