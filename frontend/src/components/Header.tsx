import {
  Flex,
  Text,
  Input,
  Icon,
  HStack,
  Box,
  Avatar,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdMenu, MdShieldMoon } from "react-icons/md";
import { RiNotificationLine, RiSearchLine } from "react-icons/ri";

export function Header() {
  const [collapse, setCollapse] = useState(true);
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      as={"header"}
      w={"100%"}
      //maxWidth={1480}
      h={20}
      //mx={"auto"}
      //mt={4}
      px={6}
      //align={"flex-start"}
      //justifyContent={"center"}
    >
      <IconButton
        top={6}
        left={6}
        icon={<MdMenu />}
        aria-label="Menu"
        onClick={() => setCollapse(!collapse)}
      />

      <Flex
        as={"label"}
        flex={1}
        py={4}
        px={8}
        ml={6}
        maxWidth={400}
        alignSelf={"center"}
        color={"gray.200"}
        position={"relative"}
        bg={"gray.800"}
        borderRadius={"full"}
      >
        <Input
          px={4}
          mr={4}
          color={"gray.50"}
          variant={"unstyled"}
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon as={RiSearchLine} fontSize={20} />
      </Flex>
      <Flex ml={"auto"} align={"center"}>
        <HStack
          mx={8}
          pr={8}
          py={1}
          spacing={4}
          color={"gray.300"}
          borderRightWidth={1}
          borderColor={"gray.700"}
        >
          <Icon as={RiNotificationLine} fontSize={20} />
          <IconButton
            icon={<MdShieldMoon />}
            aria-label="Menu"
            onClick={toggleColorMode}
          />
        </HStack>
        <Flex align={"center"}>
          <Box mr={4} textAlign={"right"}>
            <Text>Kleiser Nairobi</Text>
            <Text color={"gray.300"} fontSize={"small"}>
              kleiser.nairobi@gmail.com
            </Text>
          </Box>
          <Avatar size={"md"} name="Kleiser Nairobi" />
        </Flex>
      </Flex>
    </Flex>
  );
}
