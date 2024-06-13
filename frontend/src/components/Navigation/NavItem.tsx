import {
  Box,
  Heading,
  Link as ChakraLink,
  ListIcon,
  Text,
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
        my={2}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <ChakraLink
          as={RouterLink}
          to={path ? path : ""}
          gap={1}
          w="full"
          p={"10px"}
          display="flex"
          alignItems="center"
          justifyContent={!collapse ? "center" : ""}
          fontWeight="medium"
          color={isActive ? tokens.menuTitleBold : tokens.menuTitle}
          bgColor={isActive ? tokens.bgMenuFocus : "transparent"}
          _hover={{
            padding: "10px",
            textDecoration: "none",
            color: tokens.menuTitleBold,
            bgColor: tokens.bgMenuFocus,
            borderRadius: "md",
          }}
          onClick={onClick}
        >
          <ListIcon as={icon} fontSize={22} m={0} />
          {collapse && <Text>{label}</Text>}
        </ChakraLink>
      </Box>
    );
  }

  return (
    <Heading
      color={tokens.menuLabel}
      fontWeight="medium"
      textTransform="uppercase"
      fontSize="sm"
      //borderColor="gray.900"
      pt={collapse ? 0 : 0}
      my={0}
    >
      <Text display={collapse ? "flex" : "none"}>{label}</Text>
    </Heading>
  );
}
