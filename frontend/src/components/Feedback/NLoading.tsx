import { Box, CircularProgress, Stack, Text } from "@chakra-ui/react";
import { useTokens } from "../../styles/tokens";

type NLoadingProps = {
  title: string;
};

export function NLoading({ title }: NLoadingProps) {
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
      zIndex="5"
    >
      <Stack align={"center"} justify={"center"}>
        <CircularProgress isIndeterminate color={tokens.mainBtnPrimaryBg} />
        <Text fontSize={"lg"}>{title}</Text>
      </Stack>
    </Box>
  );
}
