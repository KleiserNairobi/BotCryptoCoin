import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTokens } from "../../styles/tokens";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  icon?: React.ElementType;
}

export function Input({ name, label, icon: Icon, ...rest }: InputProps) {
  const tokens = useTokens();
  const [isFocused, setIsFocused] = useState(false);
  const iconColor = isFocused ? "#ED8936" : "#A0AEC0";
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputGroup size={"lg"}>
        {Icon && (
          <InputLeftElement>
            <Icon color={iconColor} size={22} />
          </InputLeftElement>
        )}
        <ChakraInput
          id={name}
          name={name}
          variant={"outline"}
          bgColor={tokens.inputBg}
          focusBorderColor={tokens.inputBorda}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
      </InputGroup>
    </FormControl>
  );
}
