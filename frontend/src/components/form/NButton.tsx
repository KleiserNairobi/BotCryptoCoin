import { Button, ButtonProps, useColorModeValue } from "@chakra-ui/react";
import { useTokens } from "../../styles/tokens";

interface NButtonProps extends ButtonProps {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function NButton({ title, onClick, ...rest }: NButtonProps) {
  const tokens = useTokens();
  const color = useColorModeValue("gray.700", "gray.100");
  return (
    <Button
      bg={tokens.mainBtnPrimaryBg}
      _hover={{
        color: color,
        bgColor: tokens.mainBtnPrimaryBgHover,
      }}
      onClick={onClick}
      {...rest}
    >
      {title}
    </Button>
  );
}
