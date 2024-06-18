import {
  Box,
  Heading,
  Link as ChakraLink,
  ListIcon,
  Text,
  HStack,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Link as RouterLink } from "react-router-dom";
import { useTokens } from "../../styles/tokens";

type ItemProps = {
  type: string;
  label: string;
  icon?: IconType;
  path?: string;
};

type NavItemProps = {
  item: ItemProps;
  collapse: boolean;
  isActive: boolean;
  onClick: () => void;
};

export function NavItem({ item, collapse, isActive, onClick }: NavItemProps) {
  const tokens = useTokens();
  const { label, icon, path } = item;

  if (item.type === "link") {
    return (
      <Box
        mr={12}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <ChakraLink
          as={RouterLink}
          to={path ? path : ""}
          gap={1}
          w="full"
          p={"8px"}
          display="flex"
          alignItems="center"
          borderRadius="md"
          fontWeight={isActive ? "medium" : "normal"}
          color={isActive ? "gray.800" : "gray.600"}
          bgColor={isActive ? "#eaefe8" : "transparent"}
          _hover={{
            padding: "8px",
            textDecoration: "none",
            color: "gray.800",
            bgColor: "#eaefe8",
            borderRadius: "md",
            fontWeight: "medium",
          }}
          onClick={onClick}
        >
          <HStack minH={6} alignItems={"center"}>
            <ListIcon as={icon} fontSize={22} color={"#537D3D"} />
            {collapse && <Text>{label}</Text>}
          </HStack>
        </ChakraLink>
      </Box>
    );
  }

  return (
    <Heading
      mb={2}
      color={tokens.menuLabel}
      fontWeight="medium"
      textTransform="uppercase"
      fontSize="sm"
    >
      <Text>{label}</Text>
    </Heading>
  );
}
