import {
  Flex,
  Icon,
  HStack,
  Text,
  Box,
  Button,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import { MdOutlineWbSunny } from "react-icons/md";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";
import { SiBitcoinsv } from "react-icons/si";

export function NewHeader() {
  return (
    <Flex
      as={"header"}
      px={6}
      h={"14"}
      w={"100%"}
      mx={"auto"}
      maxW={1480}
      align={"center"}
      bg={"#E8EFE2"}
    >
      <Icon as={SiBitcoinsv} fontSize={28} mr={1} />
      <Text fontSize={"3xl"} fontWeight={"bold"} letterSpacing={"tight"}>
        Nairobi
        <Text as={"span"} ml={1}>
          .
        </Text>
      </Text>

      <Flex ml={"auto"} align={"center"}>
        <HStack
          mx={"8"}
          pr={"8"}
          py={"1"}
          spacing={"2"}
          //color={"gray.600"}
          borderRightWidth={1}
          borderColor={"gray.700"}
        >
          <IconButton
            icon={<MdOutlineWbSunny />}
            aria-label=""
            fontSize={"20"}
            color={"gray.600"}
            bg={"#E2E8DE"}
            _hover={{ bg: "#CCD7C5", color: "gray.900" }}
          />

          <IconButton
            icon={<RiUserAddLine />}
            aria-label=""
            fontSize={"20"}
            color={"gray.600"}
            bg={"#E2E8DE"}
            _hover={{ bg: "#CCD7C5", color: "gray.900" }}
          />
        </HStack>
        <Flex align={"center"}>
          <Box mr={"4"} textAlign={"right"}>
            <Text color={"gray.900"}>Kleiser Nairobi</Text>
            <Text fontSize={"small"} color={"gray.600"}>
              kleiser.nairobi@gmail.com
            </Text>
          </Box>
          <Avatar size={"md"} name="Kleiser Nairobi" />
        </Flex>
      </Flex>
    </Flex>
  );
}
