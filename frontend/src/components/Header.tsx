import { Flex, IconButton, useColorMode, Heading } from "@chakra-ui/react";
import { MdMenu, MdBrightness2, MdOutlineWbSunny } from "react-icons/md";

type HeaderProps = {
  titulo: string;
  collapse: boolean;
  setCollapse: (collapse: boolean) => void;
};

export function Header({ titulo, collapse, setCollapse }: HeaderProps) {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex gap={1} pb={4} borderColor="gray.600" borderBottomWidth={1}>
      <IconButton
        variant={"solid"}
        fontSize={"20px"}
        icon={<MdMenu />}
        aria-label="Menu"
        onClick={() => setCollapse(!collapse)}
      />
      <IconButton
        variant={"solid"}
        fontSize={"20px"}
        icon={colorMode === "light" ? <MdOutlineWbSunny /> : <MdBrightness2 />}
        aria-label="Menu"
        onClick={toggleColorMode}
      />
      <Heading ml={4}>{titulo}</Heading>
    </Flex>
  );
}
