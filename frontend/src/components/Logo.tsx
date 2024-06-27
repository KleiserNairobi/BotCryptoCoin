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
      bg={tokens.headerBg}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={collapse ? "row" : "column"}
    >
      <Box
        gap={2}
        h={"full"}
        w={"full"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Icon as={SiBitcoinsv} fontSize={42} color={tokens.headerTitle} />
        {collapse && (
          <Box>
            <Text
              color={tokens.headerTitle}
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
                ml={1}
                as={"span"}
                fontSize={"md"}
                fontFamily={"Inter Tight"}
                fontWeight={"400"}
                color={tokens.headerSubtitle}
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
