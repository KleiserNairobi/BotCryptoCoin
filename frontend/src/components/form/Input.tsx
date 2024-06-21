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
  const iconColor = isFocused ? "#84b969" : "#bad5a8";

  return (
    <FormControl>
      {!!label && (
        <FormLabel
          mb={1}
          htmlFor={name}
          fontFamily={"Inter Tight"}
          fontWeight={400}
        >
          {label}
        </FormLabel>
      )}
      <InputGroup size={"md"}>
        {Icon && (
          <InputLeftElement>
            <Icon color={iconColor} size={22} />
          </InputLeftElement>
        )}
        <ChakraInput
          id={name}
          name={name}
          variant={"outline"}
          bgColor={tokens.bgMain}
          focusBorderColor={"#84b969"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
      </InputGroup>
    </FormControl>
  );
}
