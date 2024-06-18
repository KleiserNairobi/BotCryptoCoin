import {
  Flex,
  IconButton,
  useColorMode,
  Heading,
  Avatar,
  Text,
} from "@chakra-ui/react";
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
    <Flex
      //pb={3}
      //mr={6}
      pl={6}
      pr={6}
      h={"full"}
      w={"full"}
      alignItems={"center"}
      justifyContent={"space-between"}
      bg={tokens.bgHeader}
    >
      <Flex gap={1}>
        <IconButton
          variant={"solid"}
          fontSize={"20px"}
          icon={<MdMenu />}
          aria-label="Menu"
          onClick={() => setCollapse(!collapse)}
          //colorScheme={"teal"}
          bgColor={tokens.bgMenu}
          color={"#537D3D"}
          _hover={{
            color: "gray.800",
            bgColor: "#D5E3C8",
          }}
        />
        <IconButton
          variant={"solid"}
          fontSize={"20px"}
          icon={
            colorMode === "light" ? <MdOutlineWbSunny /> : <MdBrightness2 />
          }
          aria-label="Menu"
          onClick={toggleColorMode}
          bgColor={tokens.bgMenu}
          color={"#537D3D"}
          _hover={{
            color: "gray.800",
            bgColor: "#D5E3C8",
          }}
        />
        <Heading ml={4}>{titulo}</Heading>
      </Flex>
      <Flex
        //p={2}
        gap={2}
        alignItems={"center"}
        justifyContent={"space-between"}
        //flexDirection={collapse ? "row" : "column-reverse"}
        //borderRadius="full"
        //borderColor="gray.600"
        //borderWidth={collapse ? 1 : 0}
      >
        <Flex
          gap={4}
          flexDir={"column"}
          alignItems={"flex-end"}
          justifyContent={"center"}
        >
          <Text fontSize="sm" fontWeight="bold" pb="0" lineHeight={0}>
            Kleiser Nairobi
          </Text>
          <Text as={"small"} color="gray.500" fontSize={13} lineHeight={0}>
            kleiser.nairobi@gmail.com
          </Text>
        </Flex>
        <Avatar name="Kleiser Nairobi" bg={tokens.titleYellow} />
      </Flex>
    </Flex>
  );
}
