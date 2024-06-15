import { Box } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

type SidebarProps = {
  collapse: boolean;
};

export function Sidebar({ collapse }: SidebarProps) {
  return (
    <Box w={"full"}>
      <Logo collapse={collapse} />
      <Navigation collapse={collapse} />
    </Box>
  );
}
