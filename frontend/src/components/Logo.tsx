import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { SiBitcoinsv } from "react-icons/si";
import { useTokens } from "../styles/tokens";

type LogoProps = {
  collapse: boolean;
};

export function Logo({ collapse }: LogoProps) {
  const tokens = useTokens();
  return (
    <Flex
      w={"full"}
      bg={tokens.bgHeader}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={collapse ? "row" : "column"}
      borderBottomWidth={1}
    >
      <Box
        gap={2}
        h={"full"}
        w={"full"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Icon as={SiBitcoinsv} fontSize={42} color={"gray.700"} />
        {collapse && (
          <Box>
            <Text
              color={"gray.700"}
              fontSize={"2.5rem"}
              fontWeight={"bold"}
              letterSpacing={"tight"}
              fontFamily={"Inter Tight"}
            >
              Nairobi
              <Text as={"span"} ml={1} fontFamily={"Inter Tight"}>
                .
              </Text>
              <Text
                as={"span"}
                fontSize={"md"}
                ml={1}
                fontFamily={"Inter Tight"}
                fontWeight={"400"}
              >
                Bot
              </Text>
            </Text>
          </Box>
        )}
      </Box>
    </Flex>
  );
}
