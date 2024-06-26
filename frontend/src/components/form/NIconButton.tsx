import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { useTokens } from "../../styles/tokens";

interface NIconButton extends IconButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function NIconButton({ onClick, ...rest }: NIconButton) {
  const tokens = useTokens();
  return (
    <IconButton
      color={tokens.mainBtnIcon}
      bgColor={tokens.mainBtnBg}
      _hover={{
        color: tokens.mainBtnIconHover,
        bgColor: tokens.mainBtnBgHover,
      }}
      onClick={onClick}
      {...rest}
    ></IconButton>
  );
}
