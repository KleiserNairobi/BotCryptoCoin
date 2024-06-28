import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputLeftElement,
  FormErrorMessage,
} from "@chakra-ui/react";
import { forwardRef, useState } from "react";
import { useTokens } from "../../styles/tokens";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  label?: string;
  error?: string | FieldError;
  icon?: React.ElementType;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon: Icon, ...rest }, ref) => {
    const tokens = useTokens();
    const [isFocused, setIsFocused] = useState(false);

    const errorMessage = typeof error === "string" ? error : error?.message;
    const iconColor = isFocused ? tokens.inputIconFocus : tokens.inputIcon;

    return (
      <FormControl isInvalid={!!errorMessage}>
        {!!label && (
          <FormLabel mb={1} htmlFor={rest.id} fontWeight={400}>
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
            focusBorderColor={
              errorMessage ? tokens.inputError : tokens.inputIconFocus
            }
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            ref={ref}
            {...rest}
          />
        </InputGroup>
        {errorMessage && (
          <FormErrorMessage color={tokens.inputError}>
            {errorMessage}
          </FormErrorMessage>
        )}
      </FormControl>
    );
  }
);
