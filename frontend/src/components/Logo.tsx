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
      pb={collapse ? 4 : 6}
      w={"full"}
      mt={collapse ? 0 : 2}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={collapse ? "row" : "column"}
      borderColor={tokens.line}
      borderBottomWidth={1}
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
              color={tokens.title}
            >
              Nairobi
              <Text as={"span"} ml={1} color={tokens.titleYellow}>
                .
              </Text>
              <Text
                as={"span"}
                fontSize={"md"}
                ml={1}
                color={tokens.titleYellow}
              >
                Bot Crypto Coin
              </Text>
            </Text>
          </Box>
        )}
      </Box>
    </Flex>
  );
}
