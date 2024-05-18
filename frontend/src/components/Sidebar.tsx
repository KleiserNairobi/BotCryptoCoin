import { Box } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { AvatarBox } from "./AvatarBox";

type SidebarProps = {
  collapse: boolean;
};

export function Sidebar({ collapse }: SidebarProps) {
  return (
    <>
      <Box w={"full"}>
        <Logo collapse={collapse} />
        <Navigation collapse={collapse} />
      </Box>
      <AvatarBox collapse={collapse} />
    </>
  );
}
