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
      //h={"60px"}
      //bg={"cyan.100"}
      //pb={collapse ? 4 : 6}
      //w={"full"}
      //mt={collapse ? 0 : 2}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={collapse ? "row" : "column"}
      borderColor={tokens.line}
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
        <Icon as={SiBitcoinsv} fontSize={42} color={tokens.titleYellow} />
        {collapse && (
          <Box>
            <Text
              //w={64}
              fontSize={"2.5rem"}
              fontWeight={"bold"}
              letterSpacing={"tight"}
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
                fontFamily={"Roboto"}
                fontWeight={"400"}
                color={tokens.titleYellow}
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
