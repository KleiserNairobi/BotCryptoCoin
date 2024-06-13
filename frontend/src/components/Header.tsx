import { Flex, IconButton, useColorMode, Heading } from "@chakra-ui/react";
import { MdMenu, MdBrightness2, MdOutlineWbSunny } from "react-icons/md";
import { useTokens } from "../styles/tokens";

type HeaderProps = {
  titulo?: string;
  collapse: boolean;
  setCollapse: (collapse: boolean) => void;
};

export function Header({ titulo, collapse, setCollapse }: HeaderProps) {
  const tokens = useTokens();
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex gap={1} pb={5} borderColor={tokens.line} borderBottomWidth={1}>
      <IconButton
        variant={"solid"}
        fontSize={"20px"}
        icon={<MdMenu />}
        aria-label="Menu"
        onClick={() => setCollapse(!collapse)}
        //colorScheme={"teal"}
        bg={"yellow.200"}
        color={tokens.subtitle}
        _hover={{
          color: tokens.title,
          bgColor: "yellow.400",
        }}
      />
      <IconButton
        variant={"solid"}
        fontSize={"20px"}
        icon={colorMode === "light" ? <MdOutlineWbSunny /> : <MdBrightness2 />}
        aria-label="Menu"
        onClick={toggleColorMode}
        bg={"white"}
        color={tokens.subtitle}
        _hover={{
          color: tokens.title,
          bgColor: "yellow.400",
        }}
      />
      <Heading ml={4}>{titulo}</Heading>
    </Flex>
  );
}
