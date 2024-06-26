import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { forwardRef, useState } from "react";
import { useTokens } from "../../styles/tokens";

interface InputProps extends ChakraInputProps {
  label?: string;
  icon?: React.ElementType;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon: Icon, ...rest }, ref) => {
    const tokens = useTokens();
    const [isFocused, setIsFocused] = useState(false);
    const iconColor = isFocused ? "#84b969" : "#bad5a8";

    return (
      <FormControl>
        {!!label && (
          <FormLabel
            mb={1}
            htmlFor={rest.id}
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
            variant={"outline"}
            bgColor={tokens.bgMain}
            focusBorderColor={"#84b969"}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            ref={ref}
            {...rest}
          />
        </InputGroup>
      </FormControl>
    );
  }
);
