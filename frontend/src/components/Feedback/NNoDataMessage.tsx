import { Box, Stack, Text } from "@chakra-ui/react";
import { useTokens } from "../../styles/tokens";
import { BsDatabaseExclamation } from "react-icons/bs";

type NNoDataMessageProps = {
  message: string;
};

export function NNoDataMessage({ message }: NNoDataMessageProps) {
  const tokens = useTokens();
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex="10"
    >
      <Stack align={"center"} justify={"center"}>
        <BsDatabaseExclamation size={42} color={tokens.inputIconFocus} />
        <Text fontSize={"lg"}>{message}</Text>
      </Stack>
    </Box>
  );
}
