import axios from "axios";
import { createStandaloneToast } from "@chakra-ui/react";

const url = import.meta.env.VITE_URL_DEV;

const apiBack = axios.create({
  baseURL: url,
  headers: { Accept: "application/json" },
});

apiBack.defaults.headers.common["Content-Type"] = "application/json";

const { toast } = createStandaloneToast();

// Interceptador de solicitação
apiBack.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      apiBack.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.resolve(error);
  }
);

// Interceptor de Resposta
apiBack.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      toast({
        title: "Erro de rede",
        description:
          "Sem resposta do servidor. Verifique sua conexão com a internet.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      const status = error.response.status;
      if (status === 401) {
        toast({
          title: "Não autorizado",
          description: "Faça login novamente.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else if (status === 403) {
        toast({
          title: "Acesso negado",
          description: "Você não tem permissão para acessar este recurso.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else if (status >= 500) {
        toast({
          title: "Erro no servidor",
          description: "Tente novamente mais tarde.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Erro",
          description: error.response.data.message || "Ocorreu um erro!",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
    return Promise.resolve(error);
  }
);

export default apiBack;
