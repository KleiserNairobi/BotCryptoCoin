import { Box, Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

type SidebarProps = {
  collapse: boolean;
};

export function Sidebar({ collapse }: SidebarProps) {
  return (
    <Box h={"full"} w={"full"}>
      <Flex minH={20} w={"full"}>
        <Logo collapse={collapse} />
      </Flex>
      <Navigation collapse={collapse} />
    </Box>
  );
}
