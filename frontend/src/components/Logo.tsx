import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { SiBitcoinsv } from "react-icons/si";

type LogoProps = {
  collapse: boolean;
};

export function Logo({ collapse }: LogoProps) {
  return (
    <Flex
      w={"full"}
      mt={collapse ? 0 : 2}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={collapse ? "row" : "column"}
    >
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Icon as={SiBitcoinsv} fontSize={30} />
        {collapse && (
          <Box>
            <Text
              fontSize={"3xl"}
              fontWeight={"bold"}
              letterSpacing={"tight"}
              w={64}
            >
              Nairobi
              <Text as={"span"} ml={1} color={"pink.500"}>
                .
              </Text>
              <Text as={"span"} fontSize={"md"} ml={1} color={"pink.500"}>
                Bot Crypto Coin
              </Text>
            </Text>
          </Box>
        )}
      </Box>
    </Flex>
  );
}
