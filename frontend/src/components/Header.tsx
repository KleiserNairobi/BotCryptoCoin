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
import { useAppContext } from "../contexts/AppContext";

type HeaderProps = {
  titulo?: string;
  collapse: boolean;
  setCollapse: (collapse: boolean) => void;
};

export function Header({ collapse, setCollapse }: HeaderProps) {
  const tokens = useTokens();
  const { title } = useAppContext();
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex
      pl={6}
      pr={6}
      h={"full"}
      w={"full"}
      alignItems={"center"}
      justifyContent={"space-between"}
      bg={tokens.headerBg}
    >
      <Flex gap={1}>
        <IconButton
          variant={"solid"}
          fontSize={"20px"}
          icon={<MdMenu />}
          aria-label="Menu"
          onClick={() => setCollapse(!collapse)}
          bgColor={tokens.headerBtnBg}
          color={tokens.headerBtnIcon}
          _hover={{
            color: tokens.headerBtnIconHover,
            bgColor: tokens.headerBtnBgHover,
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
          bgColor={tokens.headerBtnBg}
          color={tokens.headerBtnIcon}
          _hover={{
            color: tokens.headerBtnIconHover,
            bgColor: tokens.headerBtnBgHover,
          }}
        />
        <Heading
          ml={4}
          color={tokens.headerTitle}
          fontFamily={"Inter Tight"}
          fontWeight={500}
          letterSpacing={"tight"}
        >
          {title}
        </Heading>
      </Flex>
      <Flex gap={2} alignItems={"center"} justifyContent={"space-between"}>
        <Flex
          gap={4}
          flexDir={"column"}
          alignItems={"flex-end"}
          justifyContent={"center"}
        >
          <Text
            fontSize="sm"
            color={tokens.headerTitle}
            pb="0"
            lineHeight={0}
            fontFamily={"Inter Tight"}
          >
            Kleiser Nairobi
          </Text>
          <Text
            as={"small"}
            color={tokens.headerSubtitle}
            fontSize={13}
            lineHeight={0}
            fontFamily={"Inter Tight"}
          >
            kleiser.nairobi@gmail.com
          </Text>
        </Flex>
        <Avatar
          name="Kleiser Nairobi"
          color={"white"}
          bg={tokens.headerAvatarBg}
        />
      </Flex>
    </Flex>
  );
}
