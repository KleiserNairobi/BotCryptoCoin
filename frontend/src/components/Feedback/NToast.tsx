import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

type NToastProps = {
  status: "info" | "warning" | "success" | "error" | "loading";
  title: string;
  description: string;
};

export const NToast = ({ status, title, description }: NToastProps) => {
  toast({
    status: status,
    title: title,
    description: description,
    duration: 5000,
    isClosable: true,
  });
};