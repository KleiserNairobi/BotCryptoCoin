import axios from "axios";
import { NToast } from "../components/Feedback/NToast";

const url = import.meta.env.VITE_URL_DEV;

const apiBack = axios.create({
  baseURL: url,
  headers: { Accept: "application/json" },
});

apiBack.defaults.headers.common["Content-Type"] = "application/json";

// Interceptador de solicitação
apiBack.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
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
      NToast({
        status: "error",
        title: "Erro de rede.",
        description:
          "Sem resposta do servidor. Verifique sua conexão com a internet.",
      });
    } else {
      const status = error.response.status;
      if (status === 401) {
        NToast({
          status: "error",
          title: "Não autorizado.",
          description: "Faça login novamente.",
        });
      } else if (status === 403) {
        NToast({
          status: "error",
          title: "Acesso negado.",
          description: "Você não tem permissão para acessar este recurso.",
        });
      } else if (status >= 500) {
        NToast({
          status: "error",
          title: "Erro no servidor.",
          description: "Tente novamente mais tarde.",
        });
      } else {
        NToast({
          status: "error",
          title: "Erro",
          description: error.response.data.message || "Ocorreu um erro!",
        });
      }
    }
    return Promise.resolve(error);
  }
);

export default apiBack;
