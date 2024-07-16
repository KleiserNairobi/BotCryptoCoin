import { useToast } from "@chakra-ui/react";

type NToastProps = {
  status: "info" | "warning" | "success" | "error" | "loading";
  title: string;
  description: string;
};

export function NFToast({ status, title, description }: NToastProps) {
  const toast = useToast();
  return toast({
    status: status,
    title: title,
    description: description,
    duration: 5000,
    isClosable: true,
  });
}
