import { Avatar, Flex, Text } from "@chakra-ui/react";

type AvatarBoxProps = {
  collapse: boolean;
};

export function AvatarBox({ collapse }: AvatarBoxProps) {
  return (
    <Flex
      p={2}
      gap={2}
      w={"full"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDirection={collapse ? "row" : "column-reverse"}
      borderRadius="full"
      borderColor="gray.600"
      borderWidth={collapse ? 1 : 0}
    >
      <Avatar name="Kleiser Nairobi" bg={"pink.500"} />
      {collapse && (
        <Flex
          w={"full"}
          gap={4}
          flexDir={"column"}
          alignItems={"flex-start"}
          justifyContent={"center"}
        >
          <Text fontSize="sm" fontWeight="bold" pb="0" lineHeight={0}>
            Kleiser Nairobi
          </Text>
          <Text as={"small"} color="gray.500" fontSize={13} lineHeight={0}>
            kleiser.nairobi@gmail.com
          </Text>
        </Flex>
      )}
    </Flex>
  );
}
