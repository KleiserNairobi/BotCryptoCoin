import { Button, ButtonProps } from "@chakra-ui/react";
import { useTokens } from "../../styles/tokens";

interface NButtonProps extends ButtonProps {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function NButton({ title, onClick, ...rest }: NButtonProps) {
  const tokens = useTokens();
  return (
    <Button
      bg={tokens.mainBtnPrimaryBg}
      _hover={{
        color: "gray.800",
        bgColor: tokens.mainBtnPrimaryBgHover,
      }}
      onClick={onClick}
      {...rest}
    >
      {title}
    </Button>
  );
}
